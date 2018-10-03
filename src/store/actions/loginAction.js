export const gettingLogInData = (loginUsername, loginPassword) => {
  return {
    type: "LOGIN_USER_DATA", 
    loginUsername: loginUsername, 
    loginPassword: loginPassword
  }
};
