import React from "react";

export default function SearchEl({data}){
    
    return(
        <div style={{display: 'flex', justifyContent: "space-between"}}>
            <div>
                <p>{data[0].split("::")[0]}</p>
                <span>{data[0].split("::")[1]}</span>
            </div>
            <div>
                <p>{data[1]}</p>
                <span>{((data[1]-data[2])/data[2]).toFixed(2)}%</span>
            </div>
        </div>
    )
}