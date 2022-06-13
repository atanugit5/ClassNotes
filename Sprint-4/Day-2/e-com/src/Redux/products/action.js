import * as types from "./actionTypes";
import axios from "axios";

const fetchDataRequest = (payload) => {
  return {
    type: types.FETCH_DATA_REQUEST,
    payload,
  };
};

const fetchDataSuccess = (payload) => {
  return {
    type: types.FETCH_DATA_SUCCESS,
    payload,
  };
};

const fetchDataFailure = (payload) => {
  return {
    type: types.FETCH_DATA_FAILURE,
    payload,
  };
};

export const fetchData = (payload) => (dispatch) => {
  dispatch(fetchDataRequest());

  axios
    .get("/products", { params: { ...payload } })
    .then((r) => dispatch(fetchDataSuccess(r.data)))
    .catch((e) => dispatch(fetchDataFailure(e.data)));
};

// fetchData();
// console.log(fetchData())

//======================================//
//=====================================//

const getSingleProductRequest = (payload) => {
  return {
    type: types.GET_SINGLE_PRODUCT_REQUEST,
    payload,
  };
};

const getSingleProductSuccess = (payload) => {
  return {
    type: types.GET_SINGLE_PRODUCT_SUCCESS,
    payload,
  };
};

const getSingleProductFailure = (payload) => {
  return {
    type: types.GET_SINGLE_PRODUCT_FAILURE,
    payload,
  };
};

export const getSingleProduct = (id) => (dispatch) => {
  dispatch(getSingleProductRequest());
  axios
    .get(`/products/${id}`)
    .then((r) => dispatch(getSingleProductSuccess(r.data)))
    .catch((err) => dispatch(getSingleProductFailure(err.data)));
};

//============================================//
//============================================//

const addProductCartRequest = (payload) => {
  return {
    type: types.ADD_PRODUCT_CART_REQUEST,
    payload,
  };
};

const addProductCartSuccess = (payload) => {
  return {
    type: types.ADD_PRODUCT_CART_SUCCESS,
    payload,
  };
};

const addProductCartFailure = (payload) => {
  return {
    type: types.ADD_PRODUCT_CART_FAILURE,
    payload,
  };
};

export const addProductCart = (payload) => (dispatch) => {
  dispatch(addProductCartRequest());

  axios
    .post("/cart", payload)
    .then((r) => dispatch(addProductCartSuccess(r.data)))
    .catch((e) => dispatch(addProductCartFailure(e.data)));
};

//============================================//
//===============================================//

const fetchCartRequest = (payload) => {
  return {
    type: types.FETCH_CART_REQUEST,
    payload,
  };
};

const fetchCartSuccess = (payload) => {
  return {
    type: types.FETCH_CART_SUCCESS,
    payload,
  };
};

const fetchCartFailure = (payload) => {
  return {
    type: types.FETCH_CART_FAILURE,
    payload,
  };
};

export const fetchCartData = (payload) => (dispatch) => {
  dispatch(fetchCartRequest());

  axios
    .get("/cart")
    .then((r) => dispatch(fetchCartSuccess(r.data)))
    .catch((e) => dispatch(fetchCartFailure(e.data)));
};

//============================================//
//===============================================//

const removeProductCartRequest = (payload) => {
  return {
    type: types.REMOVE_PRODUCT_CART_REQUEST,
    payload,
  };
};

const removeProductCartSuccess = (payload) => {
  return {
    type: types.REMOVE_PRODUCT_CART_SUCCESS,
    payload,
  };
};

const removeProductCartFailure = (payload) => {
  return {
    type: types.REMOVE_PRODUCT_CART_FAILURE,
    payload,
  };
};

export const removeProductCart = (id) => (dispatch) => {
  dispatch(removeProductCartRequest());

  axios
    .delete(`/cart/${id}`)
    .then((r) => dispatch(removeProductCartSuccess(r.data)))
    .then(()=>dispatch(fetchCartData()))
    .catch((e) => dispatch(removeProductCartFailure(e.data)));
};