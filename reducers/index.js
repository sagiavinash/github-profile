export default function rootReducer(state = [], action) {
  switch (action.type) {
    case 'LOAD_REPOS': {
      return action.data;
    }
    default: {
      return state;
    }
  }
}
