const initState = {
  list: []
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    
    case "GET_USER_DATA":
      const username = action.username
      const password = action.password;
      
      return state = {
        ...state,
        username: username,
        password: password
      };

    default:
      return state;
  }
};
export default rootReducer;
