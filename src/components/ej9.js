import { useState } from "react";
import swal from "sweetalert";


const Punto9 = () => {

    const LlenarTabla = (cantidadFilas, cantidadColumnas) => {
        var Table = document.getElementById("tblDatos");
        Table.innerHTML = "";
        if(cantidadFilas < 0|| cantidadColumnas < 0){
            swal({text:"El número de filas y columnas no puede ser negativo",
                  icon:"warning",
                  button:"Ok"})
        } else{
        if (filas > 0 || columnas > 0){
           for(let i = 0; i < cantidadFilas; i++) {
            let filaActual = document.getElementById('tblDatos').insertRow(i);
            for(let j = 0; j < cantidadColumnas; j++){
                let celda = filaActual.insertCell(j);

                celda.innerHTML = `F:${i} / C:${j}`;
            }

           }
        }
        }      
    }
        
    const [filas, setFilas] = useState(0);
    const [columnas, setColumnas] = useState(0);

   
    const obtenerFilas = (evt) => {
        setFilas(evt.target.value)
    }
    const obtenerColumnas = (evt) => {
        setColumnas(evt.target.value)
    }
   
    return(
    <>
    <div className="ejer9">
    <h1 className="is">CREAR TABLA</h1>
    <div className="main-container">
    <div className="fc">
    <p>Digite el N° de filas: </p>
    <input type="number" value={filas} onChange={(event) => obtenerFilas(event) }/>
    <p>Digite el N° de Columnas: </p>
    <input type="number" value={columnas} onChange={(event) => obtenerColumnas(event) }/>
    </div>
    <div className="butt">
    <button onClick={() => LlenarTabla(filas,columnas)} type="submit">Crear Tabla</button>
    </div>
    </div>
    <br/>
    <table id="tblDatos" border={1} className="table"></table>    
    </div>
    </>
    
    )
    
}

    
export default Punto9;