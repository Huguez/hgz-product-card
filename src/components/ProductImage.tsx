import * as React from 'react';

import { useContext } from "react"
import style from '../styles/styles.module.css'

import { ProductContext } from './ProductCard'
import noImg from '../assets/no-image.jpg'
import { PropsImage } from '../interfaces/interfaces'


export const ProductImage = ( props:PropsImage ) => {
   const { product } = useContext( ProductContext )

   return (
      <img style={ props.style } className={ `${ props.className }  ${ style.productImg }` } src={ ( props.img ? props.img : ( product.img ? product.img : noImg)) }  alt="Product image " />
   )
}

