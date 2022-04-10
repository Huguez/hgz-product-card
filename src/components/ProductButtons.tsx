import * as React from 'react';

import style from '../styles/styles.module.css'
import { useCallback, useContext } from "react"
import { ProductContext } from './ProductCard'
import { PropsButtons } from '../interfaces/interfaces';


export const ProductButtons = ( props: PropsButtons ) => {

   const { handleButton, count, maxCount } = useContext( ProductContext )

   const isMaxReached = useCallback( () => !!maxCount && count === maxCount , [ count, maxCount ] )

   return (
      <div style={props.style} className={ ` ${ props.className }  ${ style.buttonsContainer }`  } >

         <button onClick={ () => handleButton( -1 ) } className={ style.buttonMinus }>-</button>

         <div className={ style.countLabel } > { count } </div>

         <button disabled={ isMaxReached() } onClick={ () => handleButton( 1 ) } className={  `${ style.buttonAdd }  ${ isMaxReached() && style.disabled  }`  } >+</button>

      </div>
   )
}
