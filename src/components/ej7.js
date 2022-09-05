import { useState } from "react";
import swal from 'sweetalert'

const salarios =[]
const Salarios=()=>{
    
    const [Sal, setSal] = useState('')
    const [Sals, setSals] = useState( salarios )
    const [SalarioAum, setSalarioAum] = useState (Sals)

    const onInputSal = (evt) => {
        setSal( evt.target.value)
    }
    const onAddSals = () => {
        setSals([...Sals, Sal])
    }

    const onSalAum = () => {
            setSalarioAum(Sals)
    }
    
    const error = () => {
        if(Sals.length < 10){
            swal({text:"Debe de ingresar 10 salarios exactamente",
                  icon:"warning",
                  button:"Ok"})}
            else if (Sals.length > 10){
                swal({text:"Ya excedió el límite de salarios permitidos, comience de nuevo",
                      icon:"warning",
                      button:"Ok"})}
            else {return onSalAum()}
    }
    return(
        <>
        <div className="ejer7">
        <h1 className="is">SALARIOS Y AUMENTOS</h1>
        <p className="iss2">Ingrese los 10 salarios de los que desea conocer su aumento: </p>
        <div className="main-contrainer">
        <input onChange={(event) => onInputSal(event)} type='text'placeholder='Salarios...' value={Sal}/>
        <br/>
        <br/>
        </div>
        <div className="main-container">
        <button onClick={ () => onAddSals()} type="submit"> Añadir </button>
        <button onClick={ () => error()} type="submit"> Aumento del 8% </button>
        </div>
        <div className="main-container">
        <div className="containerSal">
        <h3>Salarios</h3>
        <ol>
            {
                Sals.map(
                    (i,key)=>
                    {
                        return<li key={key}>{i}</li>}
                )
            }
        </ol>
        </div>
        <div className="containerSalAum">
        <h3>Salarios con aumento</h3>
        <ol>
            {
                SalarioAum.map(
                    (j,key)=> {
                        return<li key={key}>{parseInt(j) + j * 0.08}</li>}
                )
            }
        </ol>
        </div>
        </div>
        </div>
        </>
    )
}
export default Salarios;