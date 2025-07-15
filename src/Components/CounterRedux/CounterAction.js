import { DECREMENT, INCREMENT, RESET } from "./CounterTypes";


export function add(qt=1){
    return{
        type : INCREMENT,
        payload : qt
    }
}

export function sub(qt=1){
    return{
        type : DECREMENT,
        payload : qt
    }
}

export function normal(qt=1){
    return{
        type : RESET,
    }
}