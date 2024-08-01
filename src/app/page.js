"use client"


// 'use client';
// export default function Home() {

//   function Demo() {
//     alert("Buttons was Clicked");
//   }
//   return (
//     <main className={styles.main}>
//       <h1>First Program</h1>
//       {/* button */}
//       <button onClick={Demo}>Click Me</button>
//     </main>
//   )
// }


// 'use client';
// const User = (props) => {
//   return (
//     <div>
//       hello, {props.name}
//     </div>
//   )
// }

// 'use client';
// import { useState } from 'react';
// export default function Home() {
//   const [name, setName] = useState('abcd');
//   const chengeName=(name)=>{
//     setName(name);
//   }
//   return (
//     <main className={styles.main}>
//       <h1>Events , function and State</h1>
//       <h3>Welcome , {name}</h3>
//       <div>
//         <button onClick={() => { chengeName("sandip") }}>Change name</button>
//         <button onClick={() => { chengeName("xyz") }}>Change name</button>
//       </div>
//     </main>
//   )
// }

// 'use client';
// export default function Home() {
//   const ChildComponentA = () => {
//     return (
//       <div>
//         <p>This is Child Component A</p>
//       </div>
//     );
//   };

//   const ChildComponentB = () => {
//     return (
//       <div>
//         <p>This is Child Component B</p>
//       </div>
//     );
//   };
//   return (
//     <main className={styles.main}>
//       <h1>Events , function and State</h1>
//       {ChildComponentA()}
//       {ChildComponentB()}
//     </main>
//   )
// }

// 'use client';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation'
// export default function Home() {
//   const router = useRouter();
//   return (
//     <main className={styles.main}>
//       <div>
//         <h1>link and navigate and Nested Routing</h1>
//         {/* using link */}
//         <Link href="/login">Login</Link>
//         <br />
//         <Link href="/about">About</Link>
//         <br />
//         <Link href="/studentlist">Students</Link>
//         <br />
//         <br />
//         <br />
//         {/* using button */}
//         <button onClick={()=>router.push("/login")}>Go to Login Page</button>
//         <br />
//         <button onClick={()=>router.push("/about")}>Go to About Page</button>
//       </div>
//     </main>
//   )
// }


// fetch data from api 
// 1. Client components
// 'use client';

// import { useEffect, useState } from 'react';
// export default function page() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         let data = await fetch('https://jsonplaceholder.typicode.com/todos');
//         data = await data.json();
//         setProducts(data);
//       } catch (error) {
//         console.error("Error fetching data: ", error);
//       }
//     };

//     fetchData();
//   }, []);


//   return (
//     <div>
//       <h1>fetch data  Client component</h1>
//       <h2>Product List</h2>
//       {
//         products.map((product, index) => (
//           <div key={index}>
//             <h4 >{product.id} : {product.title}</h4>
//             <p>{'=> '}{product.completed ? "Complet" : "Panding"}</p>
//             <br />
//             <br />
//           </div>
//         ))
//       }
//     </div>
//   )
// }

// 1. Server components
// async function fetchTodo() {
//   let data = await fetch('https://jsonplaceholder.typicode.com/todos/');
//   data = await data.json();
//   return data;
// }

// export default async function Page() {
//   let products = await fetchTodo();

//   return (
//     <div>
//       <h1>fetch data Server Component</h1>
//       {
//         products.map((product, index) => (
//           <div key={index}>
//             <h4 >{product.id} : {product.title}</h4>
//             <p>{'=> '}{product.completed ? "Complet" : "Panding"}</p>
//             <br />
//             <br />
//           </div>
//         ))
//       }
//     </div>
//   )
// }



// How to Write Inline CSS 
// import { useState } from 'react'

// export default function Page() {

//   const [btnBgColor, setBtnBgColor] = useState({ backgroundColor: "blue" });
//   return (
//     <div>
//       <h1 style={{ backgroundColor: "blueviolet" }}>How to Write CSS</h1>
//       <h2 style={btnBgColor}>Welcome</h2>
//       <button onClick={() => setBtnBgColor({ backgroundColor: "red" })}>Change Color</button>
//     </div>
//   )
// }


// CSS Modules
import CssModule from './page.module.css'

export default function Page() {

  return (
    <div>
      <h1 >How to Write CSS</h1>
      <h2 className={CssModule.main}>Welcome</h2>
    </div>
  )
}