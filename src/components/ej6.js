import { useState } from "react";

export const Impares = () => {

    var array = new Array()
    var arrayI = new Array()

    const llenarArreglo = (a) => {
        for(let i=0; i <= a; i++){
            array[i] = i
        
        }
        return(array)
    }

    const identificarImpares = () => {   
        for(let j=0; j <= array.length - 1; j++){
            if(array[j] % 2 != 0){
                arrayI[j] = j
            }
        }
        return (arrayI)
        }
    

    const [valor, setValor] = useState(0);
    const [arregloCompleto, setArregloCompleto] = useState("")
    const [todosLosimpares, setArregloimpares] = useState("")

    const onNum = (evt) => {
        setValor(evt.target.value)
    }
   

    const List = (a) => {
        setArregloCompleto(llenarArreglo(a))
        setArregloimpares(identificarImpares())
        
    }
   
    return(
        <>
            <div className="ejer6">
                <h1 className="is">LISTA ORDENADA CON N° IMPARES</h1>
                <p className="iss2">Hasta que valor quieres que llegue el arreglo: </p>
                <div className="main-container">
                <input type="number" value={valor} onChange={(event) => onNum(event)}/>
                <button onClick={() => List(valor)} type="submit">Analizar impares</button>
                </div>
                <p className="iss"> Lista de números ordenados: {arregloCompleto.toString()}</p>
                <p className="iss"> Números impares de la lista anterior: {todosLosimpares.toString()} </p>
            </div>
        </>
    )
};