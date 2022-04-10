import { Product } from "../../src/interfaces/interfaces";

export const product:Product = {
   id: "1",
   title: "Coffe Mug - Card",
   img: "./coffee-mug.png",
}

export const product2:Product = {
   id: "2",
   title: "Coffe Wawa - Card 2",
   img: "./coffee-mug2.png",
}

const productos:Product[] = [
   { id: "1", title: "Coffe Mug - Card", img: "./coffee-mug.png", },
   { id: "2", title: "Coffe Wawa - Card 2", img: "./coffee-mug2.png", }
]

export default productos;