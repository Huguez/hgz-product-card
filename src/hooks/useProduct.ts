import { useEffect, useRef, useState } from "react"
import { useProductArgs } from '../interfaces/interfaces';


export const useProduct = ( { onChange, product, value = 0, initialValues }: useProductArgs ) => {

   const [ count, setCount ] = useState<number>( initialValues?.counter || value )
   
   const isControlled = useRef( !!onChange )
   const isMounted = useRef( false )

   const handleButton = ( value:number ) => {

      if( isControlled.current ){
         return onChange!( { count: value, product } )         
      }
      
      let newValue:number = Math.max( count + value, 0 )
      
      if( !!initialValues?.maxCount ){
         newValue = Math.min( newValue, initialValues?.maxCount )
      }
      
      setCount( newValue )

      onChange && onChange( { count: newValue, product } )
   }

   const reset = () => {
      setCount( 0 )
   }

   useEffect( () => {
      if( !isMounted.current ) return;
      setCount( value)
   }, [ value ] )


   useEffect( () => {
      isMounted.current = true
   }, [] );
   
   return { 
      count, 
      handleButton, 
      reset, 
      isMaxCountReached: count === initialValues?.maxCount
   }
}