import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {Add_2_watchlist, Delete_from_watchlist} from "../Redux/action";

export default function Element({data}){
    const cal = ((data[1]-data[2])/data[2]).toFixed(2);
    const [show, setShow] = React.useState(false);
    const dispatch = useDispatch();
    let watchList = useSelector((e)=>e.watchList);
    watchList = watchList.filter((e)=>e[0]===data[0]);    
    
    return(
        <div className="element" onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
            <div>
                <p>{data[0].split("::")[0]}</p>
                <span>{data[0].split("::")[1]}</span>
            </div>
            <div className="flex_div">
                <button style={{display:show?"block":"none"}} onClick={()=>dispatch(watchList.length===0?Add_2_watchlist(data):Delete_from_watchlist(data))}>{watchList.length===0?"Add":"Delete"}</button>
                <div>
                    <p>{data[1].toFixed(2)}</p>
                    <span style={{color:Math.sign(cal)===-1?"red":"green"}}>{Math.sign(cal)===-1||Math.sign(cal)===-0?"":"+"}{cal}%</span>
                </div>
            </div>
        </div>
    )
}