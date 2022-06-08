export const counterActions = {
  INCREMENT_COUNT: "INCREMENT_COUNT",
  DECREMENT_COUNT: "DECREMENT_COUNT",
};

export const incrementCount = (data) => ({
  type: counterActions.INCREMENT_COUNT,
  payload: data,
});

export const decrementCount = (data) => ({
  type: counterActions.DECREMENT_COUNT,
  payload: data,
});
