import { useState } from "react"
import { useEffect } from "react";

export const Timer =()=>{

    const [seconds, setSeconds] = useState(0)
        useEffect(() => {
            const timer = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1)
            }, 1000)
        
            return () => {
            clearInterval(timer)
            }
        }, [])

    return(
        <div>
            Timer:{seconds}
        </div>
    )
}