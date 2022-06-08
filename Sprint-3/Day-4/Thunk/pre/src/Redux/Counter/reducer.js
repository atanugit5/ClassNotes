import { counterActions } from "./action";

const initState = { count: Number(localStorage.getItem("counter"))||0 };
export const counterReducer = (state = initState, action) => {
  switch (action.type) {
    case counterActions.INCREMENT_COUNT: {
    const value= state.count + action.payload;
    localStorage.setItem("counter",value)
      return { ...state, count: value };
    }
    case counterActions.DECREMENT_COUNT: {
        const value= state.count - action.payload;
    localStorage.setItem("counter",value)
      return { ...state, count: value };
    }
    default:
      return state;
  }
};
