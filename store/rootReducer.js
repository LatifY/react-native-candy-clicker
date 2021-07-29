import { combineReducers } from "redux";
import candyReducer from "./reducers/candyReducer";
import upgradeReducer from "./reducers/upgradeReducer";

const rootReducer = combineReducers({
  candy: candyReducer,
  upgrade: upgradeReducer
})

export default rootReducer;