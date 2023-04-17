import { useEffect, useState } from "react"

export const FormularioEstudiante = ({ agregar, modificar, aModificar, modo }) => {
    const [id, setId] = useState("");
    const [nombre, setNombre] = useState("");
    const [semestre, setSemestre] = useState("1");

    const guardarEstudiante = (event) => {
        event.preventDefault();
        let estudiante = {
            id: id,
            nombre: nombre,
            semestre: semestre
        }
        if ((estudiante.id.toString().length >= 6) && (estudiante.id.toString().length <= 10)) {
            if (estudiante.nombre.length >= 3) {
                agregar(estudiante)
                setId("");
                setNombre("");
                setSemestre("");
            }
            else {
                alert("Nombre inválido")
            }
        } else {
            alert("ID inválido")
        }
    }

    const modificarEstudiante = (event) => {
        event.preventDefault();

        let nuevoId = aModificar.id
        let nuevoNombre = aModificar.nombre
        let nuevoSemestre = aModificar.semestre

        if (id !== '') {

            nuevoId = id
        }

        if (nombre !== '') {
            nuevoNombre = nombre
        }

        if (semestre !== '') {
            nuevoSemestre = semestre
        }

        let estudiante = {
            id: nuevoId,
            nombre: nuevoNombre,
            semestre: nuevoSemestre
        }

        if ((estudiante.id.toString().length >= 6) && (estudiante.id.toString().length <= 10)) {
            if (estudiante.nombre.length >= 3) {
                modificar(aModificar, estudiante)
                setId("");
                setNombre("");
                setSemestre("");
            }
            else {
                alert("Nombre inválido")
            }
        } else {
            alert("ID inválido")
        }
    }

    if (modo === 'Registrar') {
        return (
            <>
                <form onSubmit={guardarEstudiante}>
                    <div className="form-group ">
                        <label htmlFor="id">ID Estudiante</label>
                        <input type="number" className="form-control" id="id" placeholder={'id'} value={id} onChange={(event) => setId(event.target.value)} />
                    </div> <br />
                    <div className="form-group">
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" className="form-control" id="nombre" placeholder={'nombre'} value={nombre} onChange={(event) => setNombre(event.target.value)} />
                    </div> <br/>

                    <div>
                        <label htmlFor="semestre">Semestre</label> <br/>
                        <select className="form-select" aria-label="Disabled select example" id="semestre" value={semestre} onChange={(event) => setSemestre(event.target.value)}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                    </div> <br/>
    
                    <button type="submit" className="btn btn-primary"> Registrar </button>
                </form>
            </>
        )
    } else if (modo === 'Modificar') {
        return (
            <>
                <form onSubmit={modificarEstudiante}>
                    <div className="form-group ">
                        <label htmlFor="id">ID Estudiante</label>
                        <input type="id" className="form-control" id="id" placeholder={aModificar.id} value={id} onChange={(event) => setId(event.target.value)} />
                    </div> <br />
                    <div className="form-group">
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" className="form-control" id="nombre" placeholder={aModificar.nombre} value={nombre} onChange={(event) => setNombre(event.target.value)} />
                    </div> <br/>

                     <div>
                        <label htmlFor="semestre">Semestre</label> <br/>
                        <select id="semestre" value={semestre} onChange={(event) => setSemestre(event.target.value)}>
                            <option value="" selected disabled hidden>{ aModificar.semestre } </option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                    </div> <br/>
    
                    <button type="submit" className="btn btn-info"> Modificar </button>
                </form>
            </>
        )
    }

}