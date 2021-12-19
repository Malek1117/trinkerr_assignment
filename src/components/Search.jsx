import React from "react";
import data from "../utils/data.json";
import Element from "./Element";
import OutsideClickHandler from 'react-outside-click-handler';

export default function Search(){
  const [stocks, setStock] = React.useState([]);
  const [input, setInput] = React.useState("");

  const debouce = (func)=>{
    let timer;
    
    return function (...args) {
      const context = this;
      if(timer) clearTimeout(timer);

      timer = setTimeout(()=>{
        timer = null;
        func.apply(context, args);
      }, 500);
    }
    
  };

  const search = (str)=>{
    if(str.length === 0){
      setStock([]);
      return false;
    }else if(str.length<=2){
      return false;
    }

    let temp = data.filter((e)=>e[0].split('::')[0].includes(str.trim().toUpperCase()));
    
    setStock(temp);
  }

  const optimizeFn = React.useMemo(()=>debouce(search), []);

  const handleChange = (e)=>{
    setInput(e);
    optimizeFn(e);
  }

  const close = ()=>{
    setStock([]);
    setInput("");
  }

  return(
    <OutsideClickHandler onOutsideClick={()=>{close()}}>
      <div className="main">
          <input type="text" className="search" value={input} onChange={(e)=>handleChange(e.target.value)} placeholder="Search stocks here..." />
          <div className="search_data">
            {stocks.map((e, i)=><Element key={i} data={e} />)}
          </div>
      </div>
    </OutsideClickHandler>
  );
}