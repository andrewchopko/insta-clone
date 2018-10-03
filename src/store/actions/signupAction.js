export const gettingSignUpData = (signUpEmail, signUpFullName, signUpUsername, signUpPassword) => {
  return {
    type: "SIGNUP_USER_DATA",
    signUpEmail: signUpEmail,
    signUpFullName: signUpFullName,
    signUpUsername: signUpUsername,
    signUpPassword: signUpPassword
  }
};