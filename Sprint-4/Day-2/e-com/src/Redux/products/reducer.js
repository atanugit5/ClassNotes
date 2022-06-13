import * as types from "./actionTypes";
const initialState = {
  loading: "",
  products: [],
  error: "",
  currentProduct: {},
  cart: [],
};

export const productReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.FETCH_DATA_REQUEST:
      return { ...state, loading: true, error: false };
    case types.FETCH_DATA_SUCCESS:
      return { ...state, loading: false, products: payload, error: false };
    case types.FETCH_DATA_FAILURE:
      return { ...state, loading: false, error: payload };
    //==========//
    case types.GET_SINGLE_PRODUCT_REQUEST:
      return { ...state, loading: true, error: false };
    case types.GET_SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        currentProduct: payload,
        error: false,
      };
    case types.GET_SINGLE_PRODUCT_FAILURE:
      return { ...state, loading: false, error: payload };
    //==================//
    case types.ADD_PRODUCT_CART_REQUEST:
      return { ...state, loading: true, error: false };
    case types.ADD_PRODUCT_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        cart: [...state.cart, payload],
        error: false,
      };
    case types.ADD_PRODUCT_CART_FAILURE:
      return { ...state, loading: false, error: payload };
    //=================//
    case types.FETCH_CART_REQUEST:
      return { ...state, loading: true, error: false };
    case types.FETCH_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        cart: [...payload],
        error: false,
      };
    case types.FETCH_CART_FAILURE:
      return { ...state, loading: false, error: payload };
    //====================//
    case types.REMOVE_PRODUCT_CART_REQUEST:
      return { ...state, loading: true, error: false };
    case types.REMOVE_PRODUCT_CART_FAILURE:
      return { ...state, loading: false, error: payload };
    //====================//
    
    default:
      return state;
  }
};
