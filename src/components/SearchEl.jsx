import React from "react";

export default function SearchEl({data}){
    const cal = ((data[1]-data[2])/data[2]).toFixed(2);
    
    return(
        <div className="search_el">
            <div>
                <p>{data[0].split("::")[0]}</p>
                <span>{data[0].split("::")[1]}</span>
            </div>
            <div>
                <p>{data[1].toFixed(2)}</p>
                <span style={{color:Math.sign(cal)===-1?"red":"green"}}>{Math.sign(cal)===-1?"":"+"}{cal}%</span>
            </div>
        </div>
    )
}