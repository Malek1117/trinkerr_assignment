import {Add_watchlist, Delete_watchlist} from "./actionTypes";

export const reducer = (state, {type,payload}) => {
    switch (type) {
        case Add_watchlist:
            return {
                ...state,
                watchList: [...state.watchList,payload]
            };
        case Delete_watchlist:
            return {
                ...state,
                watchList: state.watchList.filter((e)=>e!==payload)
            }
        default:
            return {...state}
    }
}