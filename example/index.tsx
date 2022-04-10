import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ProductCard, ProductTitle, ProductImage, ProductButtons  } from '../src/components/'
import { ProductCardHandlers } from '../src/interfaces/interfaces';

import { product } from '../src/data/data';

const App = () => {
  return (
      <ProductCard initialValues={{ counter:0, maxCount: 10 }}  product={ product }  className="" >
      {
         ( { isMaxCountReached, reset, increaseBy, maxCount, count }:ProductCardHandlers ) => (
            <>
               <ProductImage /> 

               <ProductTitle title={ product.title } />

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
   );
};

ReactDOM.render(<App />, document.getElementById('root'));
