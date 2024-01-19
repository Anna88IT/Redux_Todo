import { combineReducers } from "redux";
import { operationsReducer } from "./reducers/operationsReducer";

export const rootReducer = combineReducers({
    operationsReducer
})