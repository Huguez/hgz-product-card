import * as React from 'react';

import { useContext } from "react"
import style from '../styles/styles.module.css'

import { PropsTitle } from "../interfaces/interfaces"

import { ProductContext } from "./ProductCard"


export const ProductTitle = ( props:PropsTitle ) => {
   const { product } = useContext( ProductContext )

   return (
      <span style={ props.style } className={ `${ props.className }  ${ style.productDescription }`  } > 
         { props.title ? props.title : product.title } 
      </span>
   )
}