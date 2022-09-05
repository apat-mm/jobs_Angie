import { useState } from "react";

export const Repetidos = () => {
    const identificarRepetidos = (a,b,c) => {
        let mensaje;
        if ((a === b) && (a === c)){
            mensaje = "Los tres números se encuentran repetidos"
        } else if ((a === b) && (a !== c) || (a === c) && (a !== b) || (b === c) && (b !== a)){
            mensaje = "Hay dos números repetidos en total"
        } else{
            mensaje = "No hay números repetidos"
        }
        return (mensaje)
        }

    const [valor1, setValor1] = useState(0);
    const [valor2, setValor2] = useState(1);
    const [valor3, setValor3] = useState(2);
    const [mensajeCantidadRepetidos, setMensaje] = useState("")

    const obtenerValor1 = (evt) => {
        setValor1(evt.target.value)
    }
    const obtenerValor2 = (evt) => {
        setValor2(evt.target.value)
    }
    const obtenerValor3 = (evt) => {
        setValor3(evt.target.value)
    }

    const calcularRepetidos = (a,b,c) => {
        setMensaje(identificarRepetidos(a,b,c))
        setValor1()
        setValor2()
        setValor3()
    }
   
    return (
    <>
    <div className="ejer4">
    <h1 className="is">¿NÚMEROS IGUALES?</h1>
    <p className="iss">Ingrese 3 números y observe cuantos hay repetidos</p>
    <div className="main-container">
    <div className="inputs">
    <p>Primer valor</p>
    <input type="number" value={valor1} onChange={(event) => obtenerValor1(event) }/>
    <p>Segundo valor</p>
    <input type="number" value={valor2} onChange={(event) => obtenerValor2(event) }/>
    <p>Tercer Valor</p> 
    <input type="number" value={valor3} onChange={(event) => obtenerValor3(event) }/>
    </div>
    <div className="calrep">
    <button onClick={() => calcularRepetidos(valor1,valor2,valor3)} type="submit">Analizar Repetidos</button>
    </div>
    </div>
    <p className="iss"> {mensajeCantidadRepetidos}</p>
    
    </div>
    </>
    )

    };

