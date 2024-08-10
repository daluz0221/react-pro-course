
import styles from '../styles/styles.module.css'
import { CSSProperties, useCallback, useContext } from "react"
import { ProductContext } from "./ProductCard"


export interface Props {
    className?: string;
    style?: CSSProperties;
}

export const ProductButtons = ({ className, style }:Props) => {

    // const { counter, increaseBy, initialValues } = useContext(ProductContext)
    //Mi solución
    // const maxCount = initialValues?.maxCount

    // Solución de fernando
    const { counter, increaseBy, maxCount } = useContext(ProductContext)




    const isReached = useCallback(
      () => {
       if( !!maxCount && counter == maxCount )return true;
       return false
      },
      [counter, maxCount],
    )
    
  
    // TODO: isMaxReached = useCallback, [counter, maxCount]
    // TRUE si el counter == maxCount
    // FALSE si no lo es

    return (
        <div className={ `${ styles.buttonsContainer } ${ className }` } style={ style }>
            <button className={ styles.buttonMinus } onClick={()=> increaseBy(-1)}> - </button>
            <div className={styles.countLabel}> { counter } </div>
            <button className={`${ styles.buttonAdd } ${ isReached() ? styles.disabled : '' } `} onClick={()=> increaseBy(1)}> + </button>
        </div>
    )
}
