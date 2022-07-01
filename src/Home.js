import { useSelector } from "react-redux";
import {useDispatch} from 'react-redux'
import { depedecriment } from './action/action';
import { depeIncriment } from './action/action';

function Home(){
    const mystore =useSelector(state => state.incrimentDecriment)
    const dispatch=useDispatch()
    console.log(mystore)
    return(
        <>
            <button onClick={()=>dispatch(depeIncriment())}>+</button>
            <input type='text' value={mystore} />
            <button onClick={()=> dispatch(depedecriment())}>-</button>
        </>
    )
}
export default Home;