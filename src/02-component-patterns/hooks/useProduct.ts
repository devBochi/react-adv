import { useEffect, useRef, useState } from "react"
import { onChangeArgs, Product } from '../interfaces/interfaces';

interface useProductArgs {
    product:Product,
    onChange?:(args: onChangeArgs) => void
    value?: number
}

export function useProduct( {onChange, product, value = 0}: useProductArgs ) {
  
    const isControlled = useRef(!!onChange)

    const [counter, setCounter] = useState(value)

    const increaseBy = (value: number) => {

        if(isControlled.current) {
            return onChange!({
                product,
                count:value
            }); 
        }

        const newValue = Math.max(counter + value, 0)
        
        setCounter(newValue)

        onChange && onChange({count: newValue,product});
    }
  
    useEffect(()=>{
        setCounter(value)
    },[value])

    return {
        counter,
        increaseBy
    }
}
