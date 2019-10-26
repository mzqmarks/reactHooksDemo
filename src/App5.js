import React, { useReducer } from 'react';
function ReducerDemo(){
    const [count, dispatch] = useReducer((state,action)=>{
        switch(action){
            case 'add':
                return state+1
            case 'sub':
                return state-1
            default: 
                return state
        }
    },10)

    return(
        <div>
            <h2>分数是{count}</h2>
            <button onClick={()=>dispatch('add')}>Increment</button>
            <button onClick={()=>dispatch('sub')}>decrement</button>
        </div>
    )
}

export default ReducerDemo