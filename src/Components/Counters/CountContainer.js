import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { add, normal, sub } from '../CounterRedux/CounterAction'


const CountContainer = () => {
    const data = useSelector(state => state)
    const dispatch = useDispatch()
  return (
    <div className='text-center m-2 p-3 ' >
        <h3>Count : {data.count}</h3>
        <button className='btn btn-success btn-sm m-2' onClick={() => dispatch(add())}  >Increment</button>
        <button className='btn btn-success btn-sm m-2' onClick={()=> dispatch(normal())} >Reset</button>
        <button className='btn btn-success btn-sm m-2'onClick={() => dispatch(sub()) } >Decrement</button>
    </div>
  )
}

export default CountContainer
