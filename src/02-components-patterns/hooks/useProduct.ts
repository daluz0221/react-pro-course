import { useEffect, useRef, useState } from "react"
import { InitialValues, Product, onChangeArgs } from "../interfaces/interfaces"


interface useProductArgs {
  product: Product;
  onChange?: ( args: onChangeArgs ) => void;
  value?: number;
  initialValues?: InitialValues
}


export const useProduct = ( {onChange, product, value = 0, initialValues}: useProductArgs) => {
  
    const [counter, setCounter] = useState<number>( initialValues?.count || value );
    const isMounted = useRef(false);
    
    const isContrlled = useRef( !!onChange )


    const increaseBy = (value:number) => {

      if (isContrlled.current) {
        return onChange!({count: value, product})
      }
      let newValue;
      
      // Mi solución
      newValue = Math.max(counter + value, 0)
      if (initialValues?.maxCount) {
        newValue = Math.min(newValue, initialValues.maxCount)
      } 
      setCounter( newValue )

      // Solución de fernando igal a la mia
      
      

      onChange && onChange({ count: newValue, product });

    }

    const reset = () => {
      setCounter( initialValues?.count || value )
    }

    useEffect(() => {
      if (!isMounted.current) return;
      setCounter( value );
    }, [value])

    useEffect(() => {
      isMounted.current = true
    }, [])
    
    

    return {
        counter,
        maxCount: initialValues?.maxCount,
        isMaxCountReach: !!initialValues?.maxCount && initialValues.maxCount == counter,
        
        increaseBy,
        reset,
    }
}