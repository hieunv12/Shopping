import { combineReducers } from "redux";
import accountSlice from "./accountSlice";

const rootReducer = combineReducers({
  accountSlice: accountSlice,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
