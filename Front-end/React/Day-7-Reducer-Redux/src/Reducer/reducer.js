import { DECREMENT, INCREMENT, RESET } from "./action.Types";

export const reducer = (count, action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREMENT: {
      return { count: count.count + 1 };
    }
    case DECREMENT: {
      return { count: count.count - payload };
    }
    case RESET: {
      return { count: 0 };
    }
    default:
      return count;
  }
};
