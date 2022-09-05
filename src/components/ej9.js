import { useState } from "react";


const Punto9 = () => {

    const LlenarTabla = (cantidadFilas, cantidadColumnas) => {
        var Table = document.getElementById("tblDatos");
        Table.innerHTML = "";
        if(cantidadFilas < 0|| cantidadColumnas < 0){
            alert("La cantidad de filas y columnas no debe ser negativo")
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
    <h1 className="is">Creador de Tablas HTML</h1>
    <p>Digita la cantidad de filas: </p>
    <input type="number" value={filas} onChange={(event) => obtenerFilas(event) }/>
    <p>Digita la cantidad de Columnas:</p>
    <input type="number" value={columnas} onChange={(event) => obtenerColumnas(event) }/>
    <button onClick={() => LlenarTabla(filas,columnas)} type="submit">Crear Tabla</button>
    <br/>
    <table id="tblDatos" border={1} className="table"></table>    
    </div>
    </>
    
    )
    
}

    
export default Punto9;