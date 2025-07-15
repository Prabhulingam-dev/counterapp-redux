import { DECREMENT, INCREMENT, RESET } from "./CounterTypes"


const initialState ={
    count : 0
}

const CountReducer = (state=initialState,action) =>{
    switch(action.type){
        case INCREMENT:
            return{
                count : state.count + action.payload
            }
         case DECREMENT:
            if(state.count === 0){
                return state
            }
            return{
                count : state.count - action.payload
            }
        case RESET:
            {
                return{
                    count : 0
                }
            }
        default :
         return state
    }
}

export default CountReducer