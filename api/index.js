export function getRepos(username) {
  return new Promise(function(resolve, reject) {
    fetch(`https://api.github.com/users/${username}/repos`).then(function(response) {
      return response.json();
    }).then(function(json) {
      resolve(json);
    }).catch(function(error) {
      reject(error);
    });
  });
}

export function getCommits(username, repoName) {
  return new Promise(function(resolve, reject) {
    fetch(`https://api.github.com/repos/${username}/${repoName}/commits`).then(function(response) {
      return response.json();
    }).then(function(json) {
      resolve(json);
    }).catch(function(error) {
      reject(error);
    });
  });
}

export function getPullRequests(username, repoName) {
  return new Promise(function(resolve, reject) {
    fetch(`https://api.github.com/repos/${username}/${repoName}/pulls`).then(function(response) {
      return response.json();
    }).then(function(json) {
      resolve(json);
    }).catch(function(error) {
      reject(error);
    });
  });
}

export function getFollowers(username) {
  return new Promise(function(resolve, reject) {
    fetch(`https://api.github.com/users/${username}/followers`).then(function(response) {
      return response.json();
    }).then(function(json) {
      resolve(json);
    }).catch(function(error) {
      reject(error);
    });
  });
}