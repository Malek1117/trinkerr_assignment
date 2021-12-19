import { useSelector} from "react-redux";
import Element from "./Element";

export default function WatchList(){
    const watchList = useSelector((e)=>e.watchList);

    return(
        <div className="watch_list">
            <h3>Watch List</h3>
            {watchList.length===0?<span>Empty...!!!</span>:watchList.map((e, i)=><Element key={i} data={e} />)}
        </div>
    )
}