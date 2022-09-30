import {combineReducers} from 'redux';
// import  from './slices';
import accountSlice from './slices/accountSlice';
import bottomTabSlice from './slices/bottomTabSlice';
import messageSlice from "./slices/messageSlice";

const rootReducer = combineReducers({
  accountSlice: accountSlice,
  bottomTabSlice: bottomTabSlice,
  messageSlice:messageSlice
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
