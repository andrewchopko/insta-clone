const initState = {
  list: []
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "SOME_ACTION":
      return state;

    default:
      return state;
  }
};
export default rootReducer;
