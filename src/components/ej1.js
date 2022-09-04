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
            <input onChange={handleOnChange}
                type="text"></input>
            <button onClick={returnFormatedTime}> Convetir </button>

            <h1> {mensaje} </h1>
        </>
    )
}
