import { useState } from "react";

export const Llamada = () => {
    var tarifa = 100
    const calcularTarifa = (Mins) => {
        let i = 0
        let minutos = Mins
        if (minutos <= 3){
            tarifa = 100;
        } else{
            let minutosAdicionales = minutos - 3
            while(i < minutosAdicionales){
            tarifa += 50
            i += 1
            }
    
        }

        return (tarifa)
        }

    const [Mins, setMins] = useState();
    const [valorPagar, setValorPagar] = useState(0)


    const onMins = (evt) => {
        setMins(evt.target.value)
        

    }

    const calcularTiempo = () => {
        setValorPagar(calcularTarifa(Mins))
        setMins(0)
    }
   
    return (
    <>
    <div className="ejer2">
    <h1 className="is">COSTO LLAMADA    </h1>
    <p className="iss2">Ingrese la duración de la llamada</p>
    <div className="main-container">
    <input type="number" value={Mins} onChange={(event) => onMins(event) }/>
    <button onClick={() => calcularTiempo(Mins)} type="submit">Calcular</button>
    </div>
    <p className="iss"> De acuerdo a que la llamada duró {Mins} minutos debe de pagar ${valorPagar} pesos</p>
    
    </div>
    </>
    )

    };