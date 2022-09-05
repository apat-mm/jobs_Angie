import { useState } from "react";

export const Saludo = () => {
    const calcularHora = (hora) => {
        let mensaje;
        let HoraA = Math.abs(hora)
        HoraA = Math.round(HoraA)
        
        if (HoraA < 12 || HoraA === 0 || HoraA === 24){
            mensaje = "Buenos Dias"
        } else if ((12 < HoraA) && (HoraA < 18) || (HoraA === 12)){
            mensaje = "Buenas Tardes"
        } else if ((18 < HoraA) && (HoraA <= 23)){
            mensaje = "Buenas Noches"
        } else{
            mensaje = "El valor ingresado no es considerado como hora"
        }
        return (mensaje)
        }

    const [horas, setTiempo] = useState(0);
    const [mensaje, setMensaje] = useState("")
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
    <p className="iss">Ingrese la hora en formato militar Ej:15 para indicar 5pm</p>
    <div className="main-container">
    <div className="right">
    <p>Digite su nombre</p>
    <input type="text" value={nombre} placeholder="Nombre..." onChange={(event) => obtenernombre(event) }/>
    <p>Digite la hora</p>
    <input type="number" value={horas} onChange={(event) => obtenerSegundos(event) }/> 
    </div>
    <div className="button">
    <button onClick={() => calcularTiempo(horas)} type="submit">Saludame</button>
    </div>
    </div>
    <p className="iss"> Hola {nombre} {mensaje}</p>
    </div>
    </>
    )

    };