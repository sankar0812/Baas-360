const simpleGit = require('simple-git');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const fs = require('fs').promises;
const path = require('path');
const globalConfig = require('./config/global.config.json')
const repoConfig = require('./config/repos.config.json')

const startDate = globalConfig.StartDate;
const endDate = globalConfig.EndDate;

// Convert spaces to underscores for file names
const fileStartDate = startDate.split(' ')[0].replace(/ /g, '_');
const fileEndDate = endDate.split(' ')[0].replace(/ /g, '_');


const repositories = repoConfig

async function deleteExistingRepos() {
    try {
        for (const repo of repositories) {
            const repoPath = `./${repo.RepoName}`;
            try {
                // Check if the repository folder exists
                await fs.access(repoPath);
                console.log(`Deleting existing repository ${repoPath}...`);
                // Delete the repository folder and its contents
                await fs.rmdir(repoPath, { recursive: true });
                console.log(`Repository ${repoPath} deleted successfully.`);
            } catch (error) {
                // If the repository folder doesn't exist, no need to delete
                console.log(`Repository ${repoPath} does not exist.`);
            }
        }
    } catch (error) {
        console.error(`Error while deleting repositories: ${error.message}`);
    }
}

async function deleteAllCsvFiles() {
    const rootFolder = './'; // Change this to your root folder path
    try {
        const files = await fs.readdir(rootFolder);
        for (const file of files) {
            if (path.extname(file).toLowerCase() === '.csv') {
                await fs.unlink(path.join(rootFolder, file));
                console.log(`Deleted CSV file: ${file}`);
            }
        }
    } catch (error) {
        console.error(`Error deleting CSV files: ${error.message}`);
    }
}

async function cloneOrPullRepo(repo) {
    const git = simpleGit();
    const repoPath = `./${repo.RepoName}`;

    try {
        await fs.access(repoPath);
        console.log(`Repository ${repoPath} already exists. Pulling latest changes...`);
        await git.cwd(repoPath).pull('origin', repo.RepoBranch);
    } catch (error) {
        console.log(`Cloning repository ${repoPath}...`);
        await git.clone(repo.RepoURL, repoPath, ['-b', repo.RepoBranch]);
    }
}

function formatDateToCST(dateString) {
    const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'America/Chicago', // CST timezone
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
}


async function getCommitStats(repo) {
    const repoPath = `./${repo.RepoName}`;
    const git = simpleGit(repoPath);

    try {
        const log = await git.log({ '--stat': null, '--since': startDate, '--until': endDate });
        const authorStats = {};

        for (const commit of log.all) {
            const author = commit.author_name;
            if (!authorStats[author]) {
                authorStats[author] = {
                    Author: author,
                    Insertions: 0,
                    Deletions: 0,
                    'Last Commit Message': commit.message,
                    'Last Commit Date': formatDateToCST(commit.date),
                    'Commit Count': 0,
                    'Repo Name': repo.RepoName,
                };
            }

            authorStats[author]['Commit Count'] += 1;

            // Check if commit.diff exists and contains insertions and deletions
            if (commit.diff && 'insertions' in commit.diff && 'deletions' in commit.diff) {
                const { insertions, deletions } = commit.diff;
                authorStats[author]['Insertions'] += insertions;
                authorStats[author]['Deletions'] += deletions;
            }
        }

        return Object.values(authorStats);
    } catch (error) {
        console.error(`Error in ${repo.RepoName}: ${error.message}`);
        return [];
    }
}

async function main() {
    await deleteAllCsvFiles();
    await deleteExistingRepos().catch(error => {
        console.error(`Error encountered: ${error.message}`);
    });
    for (const repo of repositories) {
        if (repo.IsEnabled) {
            await cloneOrPullRepo(repo);
            const commitStats = await getCommitStats(repo);
            if (commitStats.length > 0) {
                // Generate the CSV file name
                const csvFileName = `${globalConfig.Generated_File_Name_Prefix}_${fileStartDate}_${fileEndDate}.csv`;

                // Check if the CSV file exists
                const csvExists = await fs.access(csvFileName).then(() => true).catch(() => false);

                // Create a new csvWriter or append to existing file
                const csvWriter = createCsvWriter({
                    path: csvFileName,
                    header: [
                        { id: 'Author', title: 'Author' },
                        { id: 'Insertions', title: 'Insertions' },
                        { id: 'Deletions', title: 'Deletions' },
                        { id: 'Last Commit Message', title: 'Last Commit Message' },
                        { id: 'Last Commit Date', title: 'Last Commit Date' },
                        { id: 'Commit Count', title: 'Commit Count' },
                        { id: 'Repo Name', title: 'Repo Name' },
                    ],
                    append: csvExists, // Append if the file exists
                });

                await csvWriter.writeRecords(commitStats);
                console.log(`Git stats for ${repo.RepoName} saved to ${csvFileName}`);
            }
        }
    }

    await deleteExistingRepos().catch(error => {
        console.error(`Error encountered: ${error.message}`);
    });
}

main().catch(error => {
    console.error(`Script encountered an error: ${error.message}`);
});
