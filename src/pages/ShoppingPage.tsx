import * as React from 'react';

import { ProductCard, ProductTitle, ProductImage, ProductButtons  } from '../components';
import productos from '../data/data';

import '../styles/custom-styles.css'
import { ProductCardHandlers } from '../interfaces/interfaces';


const ShoppingPage = () => {
   

   return (
      <div>
         <div>ShoppingPage</div>
         <hr />
            
         <ProductCard initialValues={{ counter:0, maxCount: 10 }}  product={ productos[0] }  className="" >
            {
               ( { isMaxCountReached, reset, increaseBy, maxCount, count }:ProductCardHandlers ) => (
                  <>
                     <ProductImage /> 

                     <ProductTitle title={ productos[0].title } />

                     <ProductButtons />
                     <br />
                     <button onClick={ reset } > reset </button>
                     
                     { isMaxCountReached && <button onClick={ () => increaseBy( -2 ) } > -2 </button> }                     
                     
                     <button onClick={ () => increaseBy( 2 ) } > +2 </button>
                     <br />
                     <br />
                     <span>{ count } - { maxCount }</span>

                  </>
               )
            }
            
         </ProductCard>
      
      
         <div className='shopping-cart'>

            {/* {
               Object.entries( shoppingCart ).map( ([key, p ])=> (
                  <ProductCard onChange={ onChangeProduct } value={ p.count } key={ key } style={{ width: "100px" } } product={ p }  className="bg-dark text-white" >
                  
                     <ProductImage className="custom-image" /> 
   
                     <ProductButtons  className="custom-buttons" />
   
                  </ProductCard>
               ) ) 
            } */}
         </div>

      </div>
   )
}

export default ShoppingPage;