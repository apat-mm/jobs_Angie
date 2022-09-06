import { useState } from "react";
export const Challenge_2 = ({ value }) =>{
  
  const [ counter,setCounter ] = useState(value);

  const handleAdd = () => {
    setCounter(counter + 1)
  } 
  const handleSubstract = () => {
    setCounter(counter - 1)
  } 
  const handleReset = () => {
    setCounter(value)
  }
  return (
    <>
      <div className="chall2">
      <h1 className="is"> CHALLENGE 2 </h1>
      <h2 className="issn">Contador</h2>
      <div className="main-container">
      <div className="coutn">
      <span className="count"> {counter} </span>
      </div>
      <div className="botones">
      <button onClick={() => handleAdd()} type="submit"> +1</button>
      <button onClick={() => handleSubstract()} type="submit"> -1</button>
      <button onClick={() => handleReset()} type="submit"> reset</button>
      </div>
      </div>
      </div>
    </>
  )
}