import {Add_watchlist, Delete_watchlist} from "./actionTypes";

export const Add_2_watchlist = (data)=>{
    return {
        type: Add_watchlist,
        payload: data
    }
}

export const Delete_from_watchlist = (data)=>{
    return {
        type: Delete_watchlist,
        payload: data
    }
}