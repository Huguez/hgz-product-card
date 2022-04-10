import React from "react"
import renderer, { act } from "react-test-renderer"
import { ProductCard } from '../../src/components';
import { product } from '../data/data';


describe( "ProductCard", ()=>{

   test( "Debe de renderizarse", () => {
      const wrapper = renderer.create( 
         <ProductCard product={ product } >
            {
               () => (
                   <h1>Hola wawa</h1>
               )
            }
         </ProductCard>
      )
      expect( wrapper.toJSON() ).toMatchSnapshot();
   } );

   test( "", () => {
      const wrapper = renderer.create( 
         <ProductCard product={ product } >
            {
               ({ count, increaseBy }) => (
                  <>
                   <h1>{ count }</h1>
                   <button onClick={ () => increaseBy(1) }>+1</button>
                  </>
               )
            }
         </ProductCard>
      )
      let tree = wrapper.toJSON()

      expect( tree ).toMatchSnapshot();
      
      act( ()=>{
         (tree as any).children[1].props.onClick()
      } )
      
      tree = wrapper.toJSON()
      
      expect( (tree as any).children[0].children[0] ).toBe("1")
   } );

} );
