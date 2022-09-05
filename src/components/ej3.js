import { useState } from "react";

export const Saludo = () => {
    const calcularHora = (hora) => {
        let mensaje;
        let verdaderaHora = Math.abs(hora)
        verdaderaHora = Math.round(verdaderaHora)
        
        if (verdaderaHora < 12 || verdaderaHora === 0 || verdaderaHora === 24){
            mensaje = "Buenas Dias"
        } else if ((12 < verdaderaHora) && (verdaderaHora < 18) || (verdaderaHora === 12)){
            mensaje = "Buenas Tardes"
        } else if ((18 < verdaderaHora) && (verdaderaHora <= 23)){
            mensaje = "Buenas Noches"
        } else{
            mensaje = "El valor ingresado puede no ser en formato 24 horas"
        }
        return (mensaje)
        }

    const [horas, setTiempo] = useState(0);
    const [mensaje, setMensaje] = useState("Por favor, ingresar la hora en formato de 24 horas")
    const [nombre, setNombre] = useState("")


    const obtenerSegundos = (evt) => {
        setTiempo(evt.target.value)
    }
    const obtenernombre = (evt) => {
        setNombre(evt.target.value)
    }

    const calcularTiempo = () => {
        setMensaje(calcularHora(horas))
        setTiempo(0)
    }
   
    return (
    <>
    <div className="ejer3">
    <h1 className="is">SALUDO!!</h1>
    <div className="main-container">
    <p>Digite su nombre</p>
    <input type="text" value={nombre} onChange={(event) => obtenernombre(event) }/>
    </div>
    <div className="main-container">
    <p>Digite la hora</p>
    <input type="number" value={horas} onChange={(event) => obtenerSegundos(event) }/> 
    <button onClick={() => calcularTiempo(horas)} type="submit">Realizar Saludo</button>
    </div>
    <p className="iss"> {mensaje} {nombre}</p>
    
    </div>
    </>
    )

    };