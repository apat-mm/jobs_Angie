import { useState } from "react";

const Punto8 = () => {
    var arregloprincipal = new Array()
    var arregloDividido = new Array()
    var numero;

    const LlenarArreglo = () => {
        for(let i=0; i <= 9; i++){
            arregloprincipal[i] = Math.floor(Math.random()*100)

        }
        return(arregloprincipal)
    }

    const DividirPorValor = (a) => {
        if(a <= 9 && a> -1) {
            numero = arregloprincipal[a]
            for(let j=0; j < arregloprincipal.length; j++){
                arregloDividido[j] = (arregloprincipal[j] / numero).toFixed(4)
            }
            return (arregloDividido)
        } else {
            alert("El valor Digitado debe ser un valor entre 0 y 9")
            setDivision("El valor Digitado debe ser un valor entre 0 y 9")
            return("El valor Digitado debe ser un valor entre 0 y 9")

        }   

    }

    const [valor, setValor] = useState(0);
    const [arregloCompleto, setArregloCompleto] = useState("En esta linea veras la lista aleatoria")
    const [arrayOperado, setDivision] = useState("En esta linea veras la lista operada")

    const obtenerValor = (evt) => {
        setValor(evt.target.value)
    }
   

    const Arreglo = () => {
        setArregloCompleto(LlenarArreglo())
        setDivision(DividirPorValor(valor))
       
    }

   
   
    return(
    <>
    <div className="ejer8">
    <h1 className="is">Lista aleatorio y dividir cada elemento</h1>
    <p>Digita la posición del valor en la lista: </p>
    <div className="main-container">
    <input type="number" value={valor} onChange={(event) => obtenerValor(event) }/>
    <button onClick={() => Arreglo(valor)} type="submit">Generar Lista aleatoria y divida</button>
    </div>
    <p className="iss"> Lista de numeros aleatorios: {arregloCompleto.toString()}</p>
    <p className="iss"> Divididos por el puesto {valor}: {arrayOperado.toString()} </p>
    
    </div>
    </>
    
    )
    
}

export default Punto8