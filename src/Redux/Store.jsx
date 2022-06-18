
import { AuthReducer } from "./Reducers/Auth";
import { createStore } from "redux";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    auth: AuthReducer
})

export const Store = createStore(rootReducer);