import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import GithubProfile from './components/GithubProfile';
import GithubRecruiterRoot from './reducers';

const store = createStore(GithubProfileRoot);
const rootEl = document.getElementById('root');

function render() {
  ReactDOM.render(
    <GithubProfile
      value={store.getState()}
      onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
      onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
    />,
    rootEl
  );
}

render();
store.subscribe(render);
