import React, { useState } from 'react';

export const SecondsToFromated = () => {

    const [newTimeInSeconds, setNewTimeInSeconds] = useState('');


    const returnFormatedTime = () => {
        var hour = Math.floor(newTimeInSeconds / 3600);
        hour = (hour < 10) ? '0' + hour : hour;
        var minute = Math.floor((newTimeInSeconds / 60) % 60);
        minute = (minute < 10) ? '0' + minute : minute;
        var second = newTimeInSeconds % 60;
        second = (second < 10) ? '0' + second : second;

        setMensaje(hour + ':' + minute + ':' + second)
    }

    const [mensaje, setMensaje] = useState('')

    const handleOnChange = (event) => {
        setNewTimeInSeconds(event.target.value)
    }


    return (
        <>
            <div className="ejer1">
                <h1 className="is">Conversor de segundos a formato HH:MM:SS</h1>
                <p>Ingrese la cantidad de segundos que desea convertir: </p>
                <div className="main-container">
                    <input onChange={handleOnChange}
                        type="text"></input>
                    <button onClick={returnFormatedTime} type="submit"> Convetir </button>
                </div>

                <h3 className="iss"> La conversión de los segundo ingresados en formato HH:MM:SS es: {mensaje} </h3>
            </div>
        </>
    )
}
