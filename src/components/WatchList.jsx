import { useSelector} from "react-redux";
import Element from "./Element";

export default function WatchList(){
    const watchList = useSelector((e)=>e.watchList);

    return(
        <div className="watch_list">
            {watchList.length===0?<span>Watch list is empty...!!!</span>:watchList.map((e, i)=><Element key={i} data={e} />)}
        </div>
    )
}