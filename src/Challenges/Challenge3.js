import { useState } from "react";

const categories =['first category','second category']
export const Challenge_3 =()=>{
    const [cat, setCat] = useState('')
    const [cats, setCats] = useState( categories)

    const onCatChan = (evt) => {
        setCat( evt.target.value)
    }
    const onAddCats = () => {
        setCats([...cats, cat])
    }
    return(
        <>
        <div className="chall3">
        <h1 className="is">CHALLENGE 3</h1>
        <p>Escribe lo que desees agregar a la lista: </p> 
        <div className="main-container">
            <input onChange={(event) => onCatChan(event)} type='text'write='write some text' value={cat}/>
            <button onClick={ () => onAddCats()} type="submit"> Add </button>
        </div>
        <h2 className="is2">Lista</h2>
        <ol>
            {
                cats.map(
                    (i,key)=>
                    {
                        return<li key={key}>{i}</li>}
                )
            }
        </ol>
        </div>
        </>
    )
}
export default Challenge_3