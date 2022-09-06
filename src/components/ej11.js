import { useState } from "react";
import swal from "sweetalert";

const Punto11 = () => {
    const PailaCalculadora = (a, b, c) => {
        let not1 = a
        let not2 = b
        let not3 = c
        let promedio = 0
        if (a < 0 || b < 0 || c < 0) {
            alert("Las notas no pueden ser negativas")
        } else {
            var mensaje;
            var suma = (not1 + not2 + not3)
            promedio = (suma / 3).toFixed(2)

            if (promedio >= 3) {
                mensaje = " pasó la materia"
            } else {
                mensaje = " NO pasó la meteria"
            }
            return { mensaje: mensaje, promedio: promedio }

        }

    }

    const EstudiantetoString = (estudiante) => {
        return estudiante.nombre + " " + estudiante.estado.mensaje + " con un promedio de " + estudiante.estado.promedio;
    }


    const [nombre, setNombre] = useState("");
    const [nota1, setNota1] = useState(0);
    const [nota2, setNota2] = useState(0);
    const [nota3, setNota3] = useState(0);
    const [estadoFinal, setMensaje] = useState("")
    const [estudianteFinal, setEstudiante] = useState()


    const obtenerNombre = (evt) => {
        setNombre(evt.target.value)
    }
    const obtenerValor1 = (evt) => {
        setNota1(evt.target.value)
    }
    const obtenerValor2 = (evt) => {
        setNota2(evt.target.value)
    }
    const obtenerValor3 = (evt) => {
        setNota3(evt.target.value)
    }

    const crearEstudiante = (nombre, a, b, c) => {
        const estudiante = {
            nombre: nombre,
            Nota1: a,
            Nota2: b,
            Nota3: c,
            estado: "",
        }
        estudiante.estado = PailaCalculadora(nota1, nota2, nota3)
        setEstudiante(estudiante)
        if (a >= 0 || b >= 0 || c >= 0) {
            swal({
                text: "Estudiante registrado",
                icon: "success",
                button: "Ok"
            })
        }
    }

    const mostrarEstudiante = (estudiante) => {
        setMensaje(EstudiantetoString(estudiante))
    }

    return (
        <>
            <div className="ejer11">
                <h1 className="is">NOTAS ESTUDIANTE</h1>
                <div className="main-container">
                    <div className="inpEst">
                        <p>Digita el nombre del estudiante</p>
                        <input type="text" value={nombre} placeholder="Nombre..." onChange={(event) => obtenerNombre(event)} />
                        <p>Primera Nota</p>
                        <input type="number" step="0.01" value={nota1} onChange={(event) => obtenerValor1(event)} />
                        <p>Segunda Nota</p>
                        <input type="number" step="0.01" value={nota2} onChange={(event) => obtenerValor2(event)} />
                        <p>Tercera Nota</p>
                        <input type="number" step="0.01" value={nota3} onChange={(event) => obtenerValor3(event)} />
                    </div>
                    <div className="buttEst">
                        <button onClick={() => crearEstudiante(nombre, nota1, nota2, nota3)} type="submit">Crear Estudiante</button>
                        <button onClick={() => mostrarEstudiante(estudianteFinal)} type="submit">Estado materia</button>
                    </div>
                </div>
                <p className="iss">{estadoFinal}</p>

            </div>
        </>
    )

}

export default Punto11;