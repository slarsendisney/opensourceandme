export const headers = token => ({
  Authorization: `bearer ${token}`,
})

export const query = `
query {
    viewer {
      login
      name
      contributionsCollection {
        totalCommitContributions
        totalIssueContributions
        totalPullRequestContributions
        totalPullRequestReviewContributions
        totalRepositoriesWithContributedCommits
        totalRepositoriesWithContributedIssues
        totalRepositoriesWithContributedPullRequestReviews
        totalRepositoriesWithContributedPullRequests
        totalRepositoryContributions
        contributionYears
        issueContributions {
          totalCount
        }
        pullRequestContributionsByRepository(maxRepositories: 100) {
          repository {
            name
            owner {
              login
            }
            url
          }
          contributions {
            totalCount
          }
        }
        pullRequestReviewContributionsByRepository(maxRepositories: 100) {
          contributions(first: 100) {
            totalCount
          }
          repository {
            name
            owner {
              login
            }
            url
          }
        }
        commitContributionsByRepository {
          contributions {
            totalCount
          }
          repository {
            owner {
              login
            }
            name
            url
          }
        }
      }
    }
  }`
