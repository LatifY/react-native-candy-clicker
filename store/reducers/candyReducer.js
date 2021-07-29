import { types } from "../actions/candyActions";
import {
  candies,
  incrementCandiesValue,
  incrementPerSecSum,
  incrementPerSecValue,
} from "../initialValues/candy";

const initialState = {
  candies: candies,
  incrementCandiesValue: incrementCandiesValue,
  incrementPerSecValue: incrementPerSecValue,
  incrementPerSecSum: incrementPerSecSum,
};

const a = (value) => {
  console.log(value);
};

export default function candyReducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.INCREASE_EARN_AMOUNT:
      return {
        ...state,
        incrementCandiesValue: state.incrementCandiesValue + payload,
      };

    case types.SPEND_CANDY:
      return { ...state, candies: state.candies - payload };

    case types.INCREMENT_PER_SEC:
      if (state.incrementPerSecValue === 0) {
        return state;
      }
      return {
        ...state,
        incrementPerSecSum:
          state.incrementPerSecSum + state.incrementPerSecValue,
      };

    case types.INCREASE_INCREMENT_PER_SEC:
      return {
        ...state,
        incrementPerSecValue: state.incrementPerSecValue + payload,
      };

    case types.EARN_CANDY:
      return { ...state, candies: state.candies + state.incrementCandiesValue };

    default:
      return state;
  }
}
