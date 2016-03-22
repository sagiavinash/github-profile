export default function rootReducer(state = {}, action) {
  switch (action.type) {
    case 'LOAD_REPOS' : {
      return {
        ...state,
        repos: repoDataReducer(state.repos, action)
      };
    }
    case 'CHANGE_USERNAME' : {
      return {
        ...state,
        username: usernameReducer(state.username, action)
      };
    }
    default: {
      return state;
    }
  }
}

function usernameReducer(username = "", action) {
  switch (action.type) {
    case 'CHANGE_USERNAME': {
      return action.data;
    }
    default: {
      return username;
    }
  }
}

function repoDataReducer(repos = [], action) {
  switch (action.type) {
    case 'LOAD_REPOS': {
      return action.data;
    }
    default: {
      return repos;
    }
  }
}