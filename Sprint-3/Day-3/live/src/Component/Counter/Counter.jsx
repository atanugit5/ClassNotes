import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import { decrementCount, incrementCount } from '../../Redux/Counter/action'

const Counter = () => {
    const count = useSelector((state)=>state.counter.count)
    const dispatch = useDispatch();
  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={()=>dispatch(incrementCount(1))}>Inc</button>
        <button onClick={()=>dispatch(decrementCount(1))}>Dcr</button>
    </div>
  )
}

export default Counter