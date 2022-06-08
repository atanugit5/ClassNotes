import axios from "axios";

export const todoActions = {
  //Get Todo:-->
  GET_TODO_REQUEST: "GET_TODO_REQUEST",
  GET_TODO_SUCCESS: "GET_TODO_SUCCESS",
  GET_TODO_FAILURE: "GET_TODO_FAILURE",

  //Add Todo:-->
  ADD_TODO_REQUEST: "ADD_TODO_REQUEST",
  ADD_TODO_SUCCESS: "ADD_TODO_SUCCESS",
  ADD_TODO_FAILURE: "ADD_TODO_FAILURE",
};

//Get Todo:-->
export const getTodoRequest = () => ({ type: todoActions.GET_TODO_REQUEST });
export const getTodoSuccess = (data) => ({
  type: todoActions.GET_TODO_SUCCESS,
  payload: data,
});
export const getTodoFailure = () => ({ type: todoActions.GET_TODO_FAILURE });


//Get Todo function:-->
export const getTodos = () => (dispatch,getState) => {
  const todoRequestAction = getTodoRequest();
  dispatch(todoRequestAction);
  console.log(getState().auth.token)
  return axios({ method: "GET", url: "http://localhost:8080/todos" })
    .then((res) => {
      const todoSuccessAction = getTodoSuccess(res.data);
      dispatch(todoSuccessAction);
    })
    .catch((err) => {
      const todoErrorAction = getTodoFailure();
      dispatch(todoErrorAction);
    });
};




//Add Todo:-->
export const addTodoRequest = () => ({ type: todoActions.ADD_TODO_REQUEST });
export const addTodoSuccess = (data) => ({
  type: todoActions.ADD_TODO_SUCCESS,
  payload: data,
});
export const addTodoFailure = () => ({ type: todoActions.ADD_TODO_FAILURE });




//Add todofunction:-->
export const addTodos = ({title}) => (dispatch) => {
  const todoRequestAction = addTodoRequest();
  dispatch(todoRequestAction);
  return axios({
    method: "POST",
    url: "http://localhost:8080/todos",
    data: { title, status: false },
  })
    .then((res) => {
      const todoSuccessAction = addTodoSuccess();
      dispatch(todoSuccessAction);
    })
    .catch((err) => {
      const todoErrorAction = addTodoFailure();
      dispatch(todoErrorAction);
    });
};
