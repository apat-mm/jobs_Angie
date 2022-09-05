import { useState } from "react";
const ListNums = () => {

    var array = new Array()

    const llenarArreglo = (a) => {
        for(let i=0; i <= a; i++){
            array[i] = i
        
        }
        return(array)
    }
    

    const [valor, setValor] = useState(0);
    const [arregloCompleto, setArregloCompleto] = useState("")

    const onNum = (evt) => {
        setValor(evt.target.value)
    }
   

    const List = (a) => {
        setArregloCompleto(llenarArreglo(a))
        
    }  
   
    return(
        <>
            <div className="ejer5">
                <h1 className="is">LISTA ORDENADA</h1>
                <p className="iss2">Digite el número límite de la lista: </p>
                <div className="main-container">
                <input type="number" value={valor} onChange={(event) => onNum(event) }/>
                <button onClick={() => List(valor)} type="submit">Ver lista</button>
                </div>
                <p className="iss"> Lista de números ordenados: {arregloCompleto.toString()}</p>
            </div>
        </>
    )
};

export default ListNums