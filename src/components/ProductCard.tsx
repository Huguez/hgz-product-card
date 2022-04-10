import * as React from 'react';

import { createContext } from 'react';

import { useProduct } from '../hooks/useProduct'

import style from '../styles/styles.module.css'
import { ProductContextProps, Props } from '../interfaces/interfaces';

// import { ProductButtons, ProductImage, ProductTitle  } from './index'

export const ProductContext = createContext( {  } as ProductContextProps )
export const { Provider } = ProductContext


export const ProductCard = ( props:Props ) => {
   const { product, onChange, value, initialValues } = props

   const { count, handleButton, isMaxCountReached, reset } = useProduct( { onChange, product, value, initialValues } )
   
   return (
      <Provider value={ { count, handleButton, product, maxCount: initialValues?.maxCount } } >
         <div  style={ props.style } className={ `${ props.className }  ${ style.productCard } `  }>

            { props.children && props.children( {
               count,
               isMaxCountReached, 
               increaseBy: handleButton,
               reset,
               product,
               maxCount: initialValues?.maxCount
            } ) }

         </div>
      </Provider>
   )
}


// ProductCard.Title = ProductTitle
// ProductCard.Image = ProductImage
// ProductCard.Buttons = ProductButtons
