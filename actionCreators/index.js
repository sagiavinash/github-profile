import store from "../store";
import { getRepos } from "../api";
import constants from "../constants";

export function loadRepos(username) {
  getRepos(username).then(function(data) {
    store.dispatch({
      type: constants.LOAD_REPOS,
      data: data
    });
  });
}