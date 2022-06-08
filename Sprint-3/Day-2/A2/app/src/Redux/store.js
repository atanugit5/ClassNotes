import { appActions, incrementCountAction } from "./action";
import { reducer } from "./reducer";
import { legacy_createStore as createStore } from "redux";

// class Store {
//   #reducer;
//   #state;
//   #listners;
//   constructor(reducer, initState) {
//     this.#reducer = reducer;
//     this.#state = initState;
//     this.#listners = [];
//   }
//   getState() {
//     return this.#state;
//   }
//   dispatch(action) {
//     const oldState = this.#state;
//     this.#state = this.#reducer(this.#state, action);
//     if (oldState !== this.#state) {
//       this.#listners.forEach((listner) => listner());
//     }
//   }
//   subscribe(listner) {
//     this.#listners.push(listner);
//   }
// }

// const initState = { count: 0 };

// export const store = new Store(reducer, initState);

// store.subscribe(() => {
//   console.log(store.getState());
// });

// store.dispatch(incrementCountAction(1));

const initState = { count: 0 };
export const store = createStore(reducer, initState);
