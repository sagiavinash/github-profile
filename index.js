import React from 'react';
import ReactDOM from 'react-dom';
import GithubProfile from './components/GithubProfile';
import store from "./store/index.js";
import { loadRepos } from "./actionCreators";

const rootEl = document.getElementById('root');

function render() {
  console.log(store.getState());
  
  ReactDOM.render(
    <GithubProfile
      reposData={store.getState()}
      onLoadRepos={() => loadRepos("sagiavinash")}
    />,
    rootEl
  );
}

render();
store.subscribe(function() {
  render();
});
