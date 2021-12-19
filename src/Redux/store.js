import { createStore } from "redux";
import {reducer} from "./reducer";

const initStore = {
    watchList:[]
};

export const store = new createStore(reducer, initStore);