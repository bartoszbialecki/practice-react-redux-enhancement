import types from "./github.types";

const initState = {
  repos: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case types.LOAD_REPOS:
      const { repos } = action.payload;

      return {
        ...state,
        repos,
      };
    default:
      return state;
  }
};

export default reducer;
