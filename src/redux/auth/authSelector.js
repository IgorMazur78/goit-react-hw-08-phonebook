export const isLogIn  = state => state.auth.authorized;
export const getUserName = state => state.auth.user.name;
export const getUserEmail = state => state.auth.user.email;

// eslint-disable-next-line import/no-anonymous-default-export
