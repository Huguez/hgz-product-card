import { useState } from 'react';
import { ProductInCart, Product } from '../interfaces/interfaces';

export const useShoppingCart = () => {

   const [ shoppingCart, setShoppingCart ] = useState<{ [key:string] : ProductInCart }>( {} );

   const onChangeProduct = ( { count, product }: {  count:number, product: Product } ) => {
      
      setShoppingCart( ( s ) => {
         
         const productInCart:ProductInCart = s[product.id] || {...product, count: 0 }
         
         if( Math.max( productInCart.count + count, 0 ) > 0 ){
            productInCart.count += count
            return {
               ...s,
               [product.id]: productInCart
            }
         }

         const { [product.id]: toDelete, ...aux } = s
         
         return { ...aux }

         // if( count === 0 ){
         //    const { [product.id]: toDelete, ...aux } = s
            
         //    return { ...aux }
         // }

         // return { ...s, [ product.id ]: { ...product, count } } 
      } )
   }
   return { shoppingCart,  onChangeProduct }
}
