import store from "../store";
import { getRepos, getCommits, getPullRequests } from "../api";
import constants from "../constants";

export function loadRepos(username) {
  getRepos(username).then(function(reposData) {
    let commitDataPromises = reposData.map((repo) => getCommits(username, repo.name));
    let pullRequestDataPromises = reposData.map((repo) => getPullRequests(username, repo.name));

    Promise.all([...commitDataPromises, ...pullRequestDataPromises]).then(function(data) {
      console.log("Promise.all");

      reposData.forEach((repo, i) => {
        reposData[i].commits = data[i];
        reposData[i].pullRequests = data[reposData.length + i];
      });

      store.dispatch({
        type: constants.LOAD_REPOS,
        data: reposData
      });
    });
  });
}

export function changeUsername(username) {
  store.dispatch({
    type: constants.CHANGE_USERNAME,
    data: username
  });
}