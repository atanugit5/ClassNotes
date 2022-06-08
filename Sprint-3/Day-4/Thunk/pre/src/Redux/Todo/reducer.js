import { todoActions } from "./action";

const initState = {
  loading: false,
  todos: [],
  error: false,
};

export const todoReducer = (state = initState, action) => {
  switch (action.type) {
      //Get Todo:-->
    case todoActions.GET_TODO_REQUEST: {
      return { ...state, loading: true, error: false };
    }
    case todoActions.GET_TODO_SUCCESS: {
      return { ...state, loading: false, todos: action.payload, error: false };
    }
    case todoActions.GET_TODO_FAILURE: {
      return { ...state, loading: false, error: true };
    }

    //Add Todo:-->
    case todoActions.ADD_TODO_REQUEST: {
        return { ...state, loading: true, error: false };
      }
      case todoActions.ADD_TODO_SUCCESS: {
        return { ...state, loading: false, error: false };
      }
      case todoActions.ADD_TODO_FAILURE: {
        return { ...state, loading: false, error: true };
      }
    default:
      return state;
  }
};
