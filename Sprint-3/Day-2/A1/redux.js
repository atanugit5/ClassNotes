const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT": {
        return { ...state, count: state.count + 1 };
      }
      case "DECREMENT": {
        return { ...state, count: state.count - 1 };
      }
      default:
        return state;
    }
  };
  
  class Store {
    #reducer;
    #state;
    #listners;
    constructor(reducer, initState) {
      this.#reducer = reducer;
      this.#state = initState;
      this.#listners = [];
    }
    getState() {
      return this.#state;
    }
    dispatch(action) {
      const oldState = this.#state;
      this.#state = this.#reducer(this.#state, action);
      if (oldState !== this.#state) {
        this.#listners.forEach((listner)=>listner());
      }
    }
    subscribe(listner) {
      this.#listners.push(listner);
    }
  }
  
  const initState = { count: 0 };
  
  const store = new Store(reducer, initState);
  console.log(store.getState());
  store.subscribe(() => {
    console.log(store.getState());
  });
  
  store.dispatch({type:"INCREMENT"})
  console.log(store.getState());