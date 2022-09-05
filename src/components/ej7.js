import { useState } from "react";
import swal from 'sweetalert'

const categories =[]
const Ejercicio7=()=>{
    
    const [cat, setCat] = useState('')
    const [cats, setCats] = useState( categories)
    const [SalarioAum, setSalarioAum] = useState (cats)

    const onCatChan = (evt) => {
        setCat( evt.target.value)
    }
    const onAddCats = () => {
        setCats([...cats, cat])
    }

    const onSalAum = () => {
            setSalarioAum(cats)
    }
    
    const error = () => {
        if(cats.length < 10){
            swal({text:"Debe de ingresar 10 salarios exactamente",
                  icon:"warning",
                  button:"Ok"})}
            else if (cats.length > 10){
                swal({text:"Ya excedió el límite de salarios permitidos, comience de nuevo",
                      icon:"warning",
                      button:"Ok"})}
            else {return onSalAum()}
    }
    return(
        <>
        <div className="ejer7">
        <h1 className="is">Salarios con y sin aumento</h1>
        <label>
            Ingrese los salarios: 
            <input onChange={(event) => onCatChan(event)} type='text'write='Salarios...' value={cat}/>
            <div className="main-container">
            <button onClick={ () => onAddCats()} type="submit"> Añadir </button>
            <button onClick={ () => error()} type="submit"> Aumento del 8% </button>
            </div>
        </label>
        <div className="main-container">
        <div className="containerSal">
        <h3>Salarios</h3>
        <ol>
            {
                cats.map(
                    (category,key)=>
                    {
                        return<li key={key}>{category}</li>}
                )
            }
        </ol>
        </div>
        <div className="containerSalAum">
        <h3>Salarios con aumento</h3>
        <ol>
            {
                SalarioAum.map(
                    (i,key)=> {
                        return<li key={key}>{parseInt(i) + i * 0.08}</li>}
                )
            }
        </ol>
        </div>
        </div>
        </div>
        </>
    )
}
export default Ejercicio7;