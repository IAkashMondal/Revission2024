export const initialStateDataFetch = {
  Isloading: false,
  data: [],
  iserror: null,
};
export const reducerthunk = (
  state = initialStateDataFetch,
  { type, payload }
) => {
  switch (type) {
    default:
      return state;
  }
};
