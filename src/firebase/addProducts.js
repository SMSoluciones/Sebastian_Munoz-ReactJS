// import React from "react";
// import { addDoc, collection } from "firebase/firestore";
// import { db } from "./firebase";
// export const Productos = () => {
//   const products = [
//     //Spaghetti
//     {
//       title: "Finos blancos. 1/kg",
//       description: "Spaghetti al huevo.",
//       cat: "pastas",
//       price: 700,
//       image: "https://i.ibb.co/4MDn55r/finos.jpg",
//     },
//     {
//       title: "Finos verdes. 1/kg",
//       description: "Spaghetti con verdura.",
//       cat: "pastas",
//       price: 800,
//       image: "https://i.ibb.co/bPhhZpg/finos-verdes.jpg",
//     },
//     {
//       title: "Cintas. 1/kg",
//       description: "Spaghetti en cintas al huevo.",
//       cat: "pastas",
//       price: 700,
//       image: "https://i.ibb.co/3mWkNrt/cinta.png",
//     },
//     {
//       title: "Cintas verdes. 1/kg",
//       description: "Spaghetti en cintas con verdura.",
//       cat: "pastas",
//       price: 800,
//       image: "https://i.ibb.co/bKJbDjT/cinta-verde.jpg",
//     },
//     //Ñoquis
//     {
//       title: "Ñoquis 1/kg",
//       description: "Ñoquis de papa.",
//       cat: "pastas",
//       price: 750,
//       image: "https://i.ibb.co/FmF6fr7/nioquis.png",
//     },
//     {
//       title: "Ñoquis verdes. 1/kg",
//       description: "Ñoquis de papa y verdura.",
//       cat: "pastas",
//       price: 850,
//       image: "https://i.ibb.co/HYLcC0w/nioquis-2.jpg",
//     },
//     //Sorrentinos
//     {
//       title: "Sorrentinos de J&Q. 1/kg",
//       description: "Rellenos de jamon y queso.",
//       cat: "pastas",
//       price: 990,
//       image: "https://i.ibb.co/4MDn55r/finos.jpg",
//     },
//     {
//       title: "Sorrentinos de R&V. 1/kg",
//       description: "Rellenos de ricota y verdura.",
//       cat: "pastas",
//       price: 990,
//       image: "https://i.ibb.co/bPhhZpg/finos-verdes.jpg",
//     },
//     {
//       title: "Sorrentinos de R&J. 1/kg",
//       description: "Rellenos de ricota y jamon.",
//       cat: "pastas",
//       price: 990,
//       image: "https://i.ibb.co/3mWkNrt/cinta.png",
//     },
//     {
//       title: "Sorrentinos de C&Q. 1/kg",
//       description: "Rellenos de calabaza y queso.",
//       cat: "pastas",
//       price: 990,
//       image: "https://i.ibb.co/bKJbDjT/cinta-verde.jpg",
//     },
//     {
//       title: "Sorrentinos de 4Q. 1/kg",
//       description: "Rellenos de cuatro quesos.",
//       cat: "pastas",
//       price: 990,
//       image: "https://i.ibb.co/FmF6fr7/nioquis.png",
//     },
//     //Canelones
//     {
//       title: "Canelones de C&V. x1",
//       description: "Rellenos de carne y verdura.",
//       cat: "pastas",
//       price: 150,
//       image: "https://i.ibb.co/HYLcC0w/nioquis-2.jpg",
//     },
//     {
//       title: "Canelones de R&V. x1",
//       description: "Rellenos de ricota y jamon.",
//       cat: "pastas",
//       price: 150,
//       image: "https://i.ibb.co/4MDn55r/finos.jpg",
//     },
//     {
//       title: "Canelones de J&Q. x1",
//       description: "Rellenos de jamon y queso.",
//       cat: "pastas",
//       price: 150,
//       image: "https://i.ibb.co/bPhhZpg/finos-verdes.jpg",
//     },
//     //Ravioles
//     {
//       title: "Ravioles de C&V. 1/kg",
//       description: "Rellenos de carne y verdura.",
//       cat: "pastas",
//       price: 890,
//       image: "https://i.ibb.co/3mWkNrt/cinta.png",
//     },
//     {
//       title: "Ravioles de R&V. 1/kg",
//       description: "Rellenos de ricota y verdura.",
//       cat: "pastas",
//       price: 890,
//       image: "https://i.ibb.co/bKJbDjT/cinta-verde.jpg",
//     },
//     {
//       title: "Ravioles de R&J. 1/kg",
//       description: "Rellenos de ricota y jamon.",
//       cat: "pastas",
//       price: 890,
//       image: "https://i.ibb.co/FmF6fr7/nioquis.png",
//     },
//     {
//       title: "Ravioles de P&V. 1/kg",
//       description: "Rellenos de pollo y verdura.",
//       cat: "pastas",
//       price: 890,
//       image: "https://i.ibb.co/HYLcC0w/nioquis-2.jpg",
//     },
//     {
//       title: "Ravioles de 4Q. 1/kg",
//       description: "Rellenos de 4 quesos.",
//       cat: "pastas",
//       price: 890,
//       image: "https://i.ibb.co/HYLcC0w/nioquis-2.jpg",
//     },
//     //Tartas
//     {
//       title: "Tarta de J&Q.",
//       description: "Rellena de jamon y queso.",
//       cat: "tartas",
//       price: 800,
//       image: "https://i.ibb.co/HYLcC0w/nioquis-2.jpg",
//     },
//     {
//       title: "Tarta de C&Q.",
//       description: "Rellena calabaza y queso.",
//       cat: "tartas",
//       price: 800,
//       image: "https://i.ibb.co/HYLcC0w/nioquis-2.jpg",
//     },
//     {
//       title: "Tarta de ZP.",
//       description: "Rellena de zapallito.",
//       cat: "tartas",
//       price: 800,
//       image: "https://i.ibb.co/HYLcC0w/nioquis-2.jpg",
//     },
//     {
//       title: "Tarta de VE.",
//       description: "Rellena de verdura.",
//       cat: "tartas",
//       price: 800,
//       image: "https://i.ibb.co/HYLcC0w/nioquis-2.jpg",
//     },
//     //Empanadas
//     {
//       title: "Empanada de CS. x1.",
//       description: "Rellena de carne salada.",
//       cat: "empanadas",
//       price: 130,
//       image: "https://i.ibb.co/HYLcC0w/nioquis-2.jpg",
//     },
//     {
//       title: "Empanada de CD. x1",
//       description: "Rellena de carne dulce.",
//       cat: "empanadas",
//       price: 130,
//       image: "https://i.ibb.co/HYLcC0w/nioquis-2.jpg",
//     },
//     {
//       title: "Empanada de J&Q. x1",
//       description: "Rellena de jamon y queso.",
//       cat: "empanadas",
//       price: 130,
//       image: "https://i.ibb.co/HYLcC0w/nioquis-2.jpg",
//     },
//     {
//       title: "Empanada de C&Q. x1",
//       description: "Rellena de cebolla y queso.",
//       cat: "empanadas",
//       price: 130,
//       image: "https://i.ibb.co/HYLcC0w/nioquis-2.jpg",
//     },
//     {
//       title: "Empanada de Pollo. x1",
//       description: "Rellena de pollo.",
//       cat: "empanadas",
//       price: 130,
//       image: "https://i.ibb.co/HYLcC0w/nioquis-2.jpg",
//     },
//     {
//       title: "Empanada de verdura. x1",
//       description: "Rellena de verdura.",
//       cat: "empanadas",
//       price: 130,
//       image: "https://i.ibb.co/HYLcC0w/nioquis-2.jpg",
//     },
//     //Salsas
//     {
//       title: "Salsa bolognesa. x1",
//       description: "Salsa de la bolognesa de la casa.",
//       cat: "salsas",
//       price: 400,
//       image: "https://i.ibb.co/HYLcC0w/nioquis-2.jpg",
//     },
//     {
//       title: "Salsa filetto. x1",
//       description: "Salsa filetto de la casa.",
//       cat: "salsas",
//       price: 380,
//       image: "https://i.ibb.co/HYLcC0w/nioquis-2.jpg",
//     },
//   ];

//   const arrayProducts = products.map((product) => product);

//   const finalizarCarga = () => {
//     const addProducts = collection(db, "productest");
//     addDoc(addProducts, arrayProducts);
//   };

//   return (
//     <>
//       <button onClick={finalizarCarga}>Agregar Productos.</button>
//     </>
//   );
// };
