import './App.css';
import data from "./utils/data.json";
import React from "react";
import SearchEl from "./components/SearchEl";

function App() {
  const [stocks, setStock] = React.useState([]);

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

    console.log(temp);
    
    setStock(temp);
  }

  const optimizeFn = React.useMemo(()=>debouce(search), []);

  return (
    <div className="App">
      <h1>Maintain_watchlist</h1>
      <div className="main">
        <input type="text" className="search" onChange={(e)=>optimizeFn(e.target.value)} placeholder="Search stocks here..." />
        <div className="search_data">
          {stocks.map((e, i)=><SearchEl key={i} data={e} />)}
        </div>
      </div>
    </div>
  );
}

export default App;