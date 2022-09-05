import { useState } from "react";

export const Ejercicio6 = () => {

    var arregloprincipal = new Array()
    var arregloImpar = new Array()

    const llenarArreglo = (a) => {
        for(let i=0; i <= a; i++){
            arregloprincipal[i] = i
        
        }
        return(arregloprincipal)
    }

    const identificarImpares = () => {   
        for(let j=0; j <= arregloprincipal.length - 1; j++){
            if(arregloprincipal[j] % 2 != 0){
                arregloImpar[j] = j
            }
        }
        return (arregloImpar)
        }
    

    const [valor, setValor] = useState(0);
    const [arregloCompleto, setArregloCompleto] = useState("")
    const [todosLosimpares, setArregloimpares] = useState("")

    const obtenerValor = (evt) => {
        setValor(evt.target.value)
    }
   

    const Arreglo = (a) => {
        setArregloCompleto(llenarArreglo(a))
        setArregloimpares(identificarImpares())
        
    }
   
    return(
        <>
            <div className="ejer6">
                <h1 className="is">Ejercicio 6</h1>
                <p>Hasta que valor quieres que llegue el arreglo:</p>
                <input 
                    type="number" 
                    value={valor} onChange={(event) => obtenerValor(event) }
                />
                <button onClick={() => Arreglo(valor)} type="submit">Analizar impares</button>
                <p className="iss"> La sucesion de numeros completa es: {arregloCompleto.toString()}</p>
                <p className="iss"> Los numeros impares son: {todosLosimpares.toString()} </p>
            </div>
        </>
    )
};