import React from 'react';
import ReactDOM from 'react-dom';
import GithubProfile from './components/GithubProfile';
import store from "./store/index.js";
import { loadRepos, changeUsername } from "./actionCreators";

const rootEl = document.getElementById('root');

function render() {
  console.log(store.getState());
  
  ReactDOM.render(
    <GithubProfile
      appData={store.getState()}
      onUsernameChange={changeUsername}
      onLoadRepos={(username) => loadRepos(username)}
    />,
    rootEl
  );
}

render();
store.subscribe(function() {
  render();
});
