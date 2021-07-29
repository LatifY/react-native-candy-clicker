import { types } from "../actions/upgradeActions";
import { levels } from "../initialValues/upgrade";

const initialState = {
  levels: levels,
};

const a = value => {
  console.log(value)
}

export default function upgradeReducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.UPGRADE_AREA:
      let levelsNew = state.levels
      levelsNew[payload] = levelsNew[payload] + 1
      return {...state, levels: levelsNew}

    default:
      return state;
  }
}
