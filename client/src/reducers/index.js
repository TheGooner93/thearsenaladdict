import { combineReducers } from "redux";
import fixtureReducer from "./fixtureReducer";

export default combineReducers({ fixtures: fixtureReducer });
