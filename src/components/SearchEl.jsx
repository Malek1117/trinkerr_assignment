import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function SearchEl({data}){
    const cal = ((data[1]-data[2])/data[2]).toFixed(2);
    const [show, setShow] = React.useState(false);
    
    return(
        <div className="search_el" onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
            <div>
                <p>{data[0].split("::")[0]}</p>
                <span>{data[0].split("::")[1]}</span>
            </div>
            <div className="flex_div">
                <button style={{display:show?"block":"none"}}>ADD</button>
                <div>
                    <p>{data[1].toFixed(2)}</p>
                    <span style={{color:Math.sign(cal)===-1?"red":"green"}}>{Math.sign(cal)===-1?"":"+"}{cal}%</span>
                </div>
            </div>
        </div>
    )
}