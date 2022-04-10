import React from "react"
import renderer from "react-test-renderer"
import { ProductTitle, ProductCard } from '../../src/components';
import { product } from '../data/data';

describe( 'ProductTitle', () => {
  
   it('debe de mostrarse econ el titulo personalizado', () => {
      const wrapper = renderer.create( <ProductTitle title="Hola wawa" /> )
      expect( wrapper.toJSON() ).toMatchSnapshot()
   } );

   test( "debe de mostrar el componenete con el nombre del producto", () => {
      const wrapper = renderer.create( 
         <ProductCard product={ product }>
            {
               ()=>(
                  <ProductTitle /> 
               )
            }
         </ProductCard>
      )
      expect( wrapper.toJSON() ).toMatchSnapshot()
   } );

} );
