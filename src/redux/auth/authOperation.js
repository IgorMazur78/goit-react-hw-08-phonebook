import axios from "axios";
import authAction from "./authAction";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = (credentials) => (dispatch) => {
  dispatch(authAction.registerRequest());
  axios
    .post("/users/signup", credentials)
    .then((response) => {
     
      token.set(response.data.token);

      dispatch(authAction.registerSuccess(response.data));
    })
    .catch((error) => authAction.registerError(error.payload));
};
const logIn = (credentials) => (dispatch) => {
  dispatch(authAction.logInRequest());
  axios
    .post("/users/login", credentials)
    .then((response) => {
      console.log("LogIn:", response);
      token.set(response.data.token);
      dispatch(authAction.logInSuccess(response.data));
    })
    .catch((error) => authAction.logInError(error.payload));
};

const logOut = () => (dispatch) => {
  dispatch(authAction.logOutRequest());
  axios
    .post('/users/logout')
    .then(() => {
      token.unset();
      dispatch(authAction.logOutSuccess());
    })
    .catch((error) => dispatch(authAction.logOutError(error.payload)));
};

const getCurrentUser = () => (dispatch, getState) => {
const {
  auth: {token: persistedToken}
} = getState();

if(!persistedToken){
  return
}

token.set(persistedToken);
dispatch(authAction.getCurrentUserRequest())

axios
.get('/users/current')
.then(response => dispatch(authAction.getCurrentUserSuccess(response.data)))
.catch(error => dispatch(authAction.getCurrentUserError(error.payload)))
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  register,
  logIn,
  logOut,
  getCurrentUser,
  token
};
