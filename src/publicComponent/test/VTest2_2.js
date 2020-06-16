import React from 'react'

export default function VTest2({num,onIncrease, onDecrease}) {

        return (
            <div>
            <h1>{num}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
            </div>
        )
   
}
