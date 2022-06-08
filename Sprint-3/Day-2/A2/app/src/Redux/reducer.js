import { appActions } from "./action";

export const reducer = (state, action) => {
    switch (action.type) {
      case appActions.INCREMENT_COUNT: {
        return { ...state, count: state.count + action.payload };
      }
    //   case appActions.DECREMENT_COUNT: {
    //     return { ...state, count: state.count - action.payload };
    //   }
      default:
        return state;
    }
  };