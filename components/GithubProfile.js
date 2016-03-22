import React, { Component, PropTypes } from 'react';

class GithubProfile extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { reposData, onLoadRepos } = this.props;

    return (
      <div>
        <button onClick={onLoadRepos}>Load User Repo</button>
        <p>Repo: {JSON.stringify(reposData)}</p>
      </div>
    );
  }
}

GithubProfile.propTypes = {
  reposData: PropTypes.array.isRequired,
  onLoadRepos: PropTypes.func.isRequired
}

export default GithubProfile
