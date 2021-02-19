import axios from "axios";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SIGNUP_REQUEST,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
  LOGOUT
} from "./actionTypes";

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});
export const loginFailure = (payload) => ({
  type: LOGIN_FAILURE,
  payload,
});
export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const login = (payload) => (dispatch) => {
  dispatch(loginRequest());
  axios
    .post("http://localhost:4000/account/login", payload)
    .then((res) => dispatch(loginSuccess(res.data)))
    .catch((err) => dispatch(loginFailure(err.response.data)));
};

export const signUpRequest = () => ({
  type: SIGNUP_REQUEST,
});
export const signUpFailure = (payload) => ({
  type: SIGNUP_FAILURE,
  payload,
});
export const signUpSuccess = (payload) => ({
  type: SIGNUP_SUCCESS,
  payload,
});

export const signUp = (payload) => (dispatch) => {
  dispatch(signUpRequest());
  axios.post("http://localhost:4000/account/register", payload)
    .then((res) => dispatch(signUpSuccess(res.data)))
    .catch((err) => dispatch(signUpFailure(err.response.data)));
};

export const logoutSuccess = () => ({
  type: LOGOUT
})

export const logout = () => (dispatch) => {
  dispatch(logoutSuccess())
}