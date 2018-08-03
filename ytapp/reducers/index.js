import { combineReducers } from "redux";
import * as YTReducers from "./youtube.js";

export default combineReducers(Object.assign(YTReducers));
