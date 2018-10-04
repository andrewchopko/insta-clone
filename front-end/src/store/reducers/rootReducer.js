const initState = {
  list: []
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    
    case "LOGIN_USER_DATA":
      const loginUsername = action.loginUsername;
      const loginPassword = action.loginPassword;
      console.log(`Username in reducer: ${loginUsername}`);
      console.log(`Password in reducer: ${loginPassword}`);
      return state = {
        ...state,
        loginUsername: username,
        loginPassword: loginPassword
      };
    case "SIGNUP_USER_DATA":
      const signUpEmail = action.signUpEmail;
      const signUpFullName = action.signUpFullName;
      const signUpUsername = action.signUpUsername;
      const signUpPassword = action.signUpPassword;
      console.log(`Username in reducer: ${signUpEmail}`);
      console.log(`FullName in reducer: ${signUpFullName}`);
      console.log(`Username in reducer: ${signUpUsername}`);
      console.log(`Password in reducer: ${signUpPassword}`);

      return state = {
        ...state,
        signUpEmail: signUpEmail,
        signUpFullName: signUpFullName,
        signUpUsername: signUpUsername,
        signUpPassword: signUpPassword
      };

    default:
      return state;
  }
};
export default rootReducer;
