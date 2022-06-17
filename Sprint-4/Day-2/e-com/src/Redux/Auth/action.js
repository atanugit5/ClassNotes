import axios from "axios";

export const SIGNIN_REQUEST = "SIGNIN_REQUEST";
export const SIGNIN_SUCCESS = "SIGNIN_SUCCESS";
export const SIGNIN_FAILURE = "SIGNIN_FAILURE";

export const signInRequest = () => {
  return { type: SIGNIN_REQUEST };
};
export const signInSuccess = (payload) => {
  return { type: SIGNIN_SUCCESS ,payload};
};
export const signInFailure = (payload) => {
  return { type: SIGNIN_FAILURE ,payload};
};

export const signIn = (payload) => (dispatch) => {
  dispatch(signInRequest());
  axios
    .post("https://reqres.in/api/login", payload)
    .then((r) =>{console.log("res",r); dispatch(signInSuccess(r.data))})
    .catch((err) => {console.log("err",err); ;dispatch(signInFailure(err.data))});
};