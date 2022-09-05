import { useState } from "react";
const Ejercicio5 = () => {

    var arregloprincipal = new Array()

    const llenarArreglo = (a) => {
        for(let i=0; i <= a; i++){
            arregloprincipal[i] = i
        
        }
        return(arregloprincipal)
    }
    

    const [valor, setValor] = useState(0);
    const [arregloCompleto, setArregloCompleto] = useState("")

    const obtenerValor = (evt) => {
        setValor(evt.target.value)
    }
   

    const Arreglo = (a) => {
        setArregloCompleto(llenarArreglo(a))
        
    }
   
   
    return(
        <>
            <div className="ejer5">
                <h1 className="is">Ejercicio 5</h1>
                <p>Hasta que valor quieres que llegue el arreglo:</p>
                <input 
                    type="number" 
                    value={valor} onChange={(event) => obtenerValor(event) }
                />
                <button onClick={() => Arreglo(valor)} type="submit">Analizar lista</button>
                <p className="iss"> La sucesion de numeros completa es: {arregloCompleto.toString()}</p>
            </div>
        </>
    )
};

export default Ejercicio5