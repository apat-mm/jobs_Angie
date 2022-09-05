import { useState } from "react";
import swal from "sweetalert";

const Division = () => {
    var array = new Array()
    var arrayDivid = new Array()
    var numero;

    const FullArray = () => {
        for(let i=0; i <= 9; i++){
            array[i] = Math.floor(Math.random()*100)

        }
        return(array)
    }

    const Dividir = (a) => {
        if(a <= 9 && a> -1) {
            numero = array[a]
            for(let j=0; j < array.length; j++){
                arrayDivid[j] = (array[j] / numero).toFixed(4)
            }
            return (arrayDivid)
        } else {
            swal({text:"El número digitado debe estar entre 0 y 9",
                  icon:"warning",
                  button:"Ok"})
            setArrayDividido("El valor Digitado debe ser un valor entre 0 y 9")
            return("El valor Digitado debe ser un valor entre 0 y 9")

        }   

    }

    const [valor, setValor] = useState(0);
    const [ArrayComplete, setArrayComplete] = useState("")
    const [ArrayDividido, setArrayDividido] = useState("")

    const obtenerValor = (evt) => {
        setValor(evt.target.value)
    }
   

    const Arreglo = () => {
        setArrayComplete(FullArray())
        setArrayDividido(Dividir(valor))
       
    }

   
   
    return(
    <>
    <div className="ejer8">
    <h1 className="is">DIVISIÓN POSICIÓN</h1>
    <p>Digita la posición del valor en la lista: </p>
    <div className="main-container">
    <input type="number" value={valor} onChange={(event) => obtenerValor(event) }/>
    <button onClick={() => Arreglo(valor)} type="submit">Generar lista y división</button>
    </div>
    <p className="iss"> Lista: {ArrayComplete.toString()}</p>
    <p className="iss"> Divididos por posición {valor}: {ArrayDividido.toString()} </p>
    
    </div>
    </>
    
    )
    
}

export default Division