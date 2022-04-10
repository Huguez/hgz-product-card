import React from "react"
import renderer from "react-test-renderer"
import { ProductCard, ProductImage } from '../../src/components';
import { product } from '../data/data';
// import img  from '../../src/assets/no-image.jpg'


describe( "ProductImage", () => {
   
   test( "Debe de mostrarse con la imagen personalizada", () =>{
      const wrapper = renderer.create( <ProductImage img="../../src/assets/no-image.jpg" /> )
      expect( wrapper.toJSON() ).toMatchSnapshot()
   } );

   test( "Debe de mostrar el componenete con la imagen del producto", () => {
      const wrapper = renderer.create( 
         <ProductCard product={ product } >
            {
               () => (
                  <ProductImage/>
               )
            }
         </ProductCard> 
      )
      
      expect( wrapper.toJSON() ).toMatchSnapshot()
   } );

} )
