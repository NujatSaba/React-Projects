import React, { useState } from 'react'

const App = () => {

   const [Num, setNum] = useState(0);

   function Increse() {
    setNum(Num+1);
   }

   function Decrese() {
    setNum(Num-1);
   }

   function Reset() {
    setNum(0);
   }
   
  return (
    <div>
      <h1 className='heading'>{Num} </h1>
      <button onClick={Increse}>Increse</button>
      <button onClick={Decrese}>Decrese</button>
      <button className='reset' onClick={Reset}>Reset</button>

    </div>
  )
}

export default App