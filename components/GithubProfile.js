import React, { Component, PropTypes } from 'react';
import _ from 'lodash';

class GithubProfile extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { appData, onLoadRepos, onUsernameChange } = this.props;

    return (
      <div>
        <input type="text" value={appData.username} onChange={(e) => onUsernameChange(e.target.value)} />
        <button onClick={() => onLoadRepos(appData.username)}>Load User Repo</button>
        {(appData.repos || []).length ? (
          <div>
            <img src={appData.repos[0].owner.avatar_url} />
            <p>List of Repos:</p>
            <ul>
              {appData.repos.map((repo) => {
                return (
                  <li key={repo.id}>
                    <p>Name: {repo.name}</p>
                    <p>isOwnRepo: {`${!repo.fork}`}</p>
                    {repo.fork ? (
                      <p>Repo owner: {repo.owner.login}</p>
                    ) : null}
                    <p>hasIssues: {`${repo.has_issues}`}</p>
                    {repo.has_issues ? (
                      <p>openPssues: {repo.open_issues_count}</p>
                    ) : null}
                    <p>hasDownloads: {`${repo.has_downloads}`}</p>
                    <p>language: {repo.language || "Not mentioned"}</p>
                    <p>Forks: {repo.forks_count}</p>
                    <p>Total Commits: {repo.commits.length}</p>
                    {repo.commits.length ? (
                      <p>Own commits: {repo.commits.filter((commit, i) => {
                        if (!((commit || {}).author || {}).login) {
                          console.log(i, repo.commits.length);
                        }

                        return commit.commit.author.name === appData.username;
                      }).length}</p>
                    ) : null}
                    <p>Stars: {repo.stargazers_count}</p>
                    <p>Pull Requests: {repo.pullRequests.length}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}
      </div>
    );
  }
}

GithubProfile.propTypes = {
  appData: PropTypes.object.isRequired,
  onLoadRepos: PropTypes.func.isRequired
}

export default GithubProfile;
