import { useState } from "react"
import style from './style.module.scss'

export const Counter = ()=>{

    const [counter, setCounter]= useState(0)

    const discrimrntCounter =()=>{
        if (counter === 0) {
            return
        }
        setCounter(counter-1)
    }

    const incrimrimentCounter =()=>{

        setCounter(counter+1)
    }
    


    return(
        <>
            <h4>Counter</h4>
        <div className={style.wrapper}>
            <button disabled = {counter ===0 ? 'disabled' : ''} onClick={discrimrntCounter}>-</button>
            <p>{counter}</p>
            <button onClick={incrimrimentCounter}>+</button>
        </div>
        </>
        
    )
}