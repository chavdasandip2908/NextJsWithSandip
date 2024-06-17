
'use client';

import { useState } from 'react';
import styles from './page.module.css'


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


// const User = (props) => {
//   return (
//     <div>
//       hello, {props.name}
//     </div>
//   )
// }


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

export default function Home() {
  const ChildComponentA = () => {
    return (
      <div>
        <p>This is Child Component A</p>
      </div>
    );
  };

  const ChildComponentB = () => {
    return (
      <div>
        <p>This is Child Component B</p>
      </div>
    );
  };
  return (
    <main className={styles.main}>
      <h1>Events , function and State</h1>
      {ChildComponentA()}
      {ChildComponentB()}
    </main>
  )
}