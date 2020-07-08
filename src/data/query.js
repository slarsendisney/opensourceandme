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
        issueContributions {
          totalCount
        }
        commitContributionsByRepository {
          contributions(first: 100) {
            totalCount
          }
          repository {
            owner {
              login
            }
            name
          }
        }
      }
    }
  }`
