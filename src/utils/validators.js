export const validateEmail = (email) => {
  const regEmail =/\S+@\S+\.\S+/;
  return regEmail.test(email)
};
