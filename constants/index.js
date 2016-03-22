const constants = {};

[
  "LOAD_REPOS",
  "CHANGE_USERNAME"
].forEach((param) => { constants[param] = param; });

export default constants;