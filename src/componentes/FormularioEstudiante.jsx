import { useEffect, useState } from "react"

export const FormularioEstudiante = ({ agregar, modificar, aModificar, modo }) => {
    const [nombre, setNombre] = useState("");
    const [semestre, setSemestre] = useState("");
    const [facultad, setFacultad] = useState("");
    const [programa, setPrograma] = useState("");

    const guardarEstudiante = (event) => {
        let estudiante = {
            nombre: nombre,
            semestre: semestre,
            facultad: facultad,
            programa: programa
        }

        if (estudiante.nombre.length < 3) {
            alert("Nombre inválido")
            return
        }
        if (estudiante.semestre === ""){
            alert("Seleccione un semestre")
            return
        }
        if (estudiante.facultad === ""){
            alert("Seleccione una facultad")
            return
        }
        if (estudiante.programa === ""){
            alert("Ingrese un programa")
            return
        }

        agregar(estudiante)
        setNombre("");
        setSemestre("");
        setFacultad("");
        setPrograma("")
    }

    const modificarEstudiante = (event) => {

        let nuevoNombre = aModificar.nombre
        let nuevoSemestre = aModificar.semestre
        let nuevaFacultad = aModificar.facultad
        let nuevoPrograma = aModificar.programa

        if (nombre !== '') {
            nuevoNombre = nombre
        }

        if (semestre !== '') {
            nuevoSemestre = semestre
        }

        if (facultad !== '') {
            nuevaFacultad = facultad
        }

        if (programa !== '') {
            nuevoPrograma = programa
        }

        let estudiante = {
            id: aModificar.id,
            nombre: nuevoNombre,
            semestre: nuevoSemestre,
            facultad: nuevaFacultad,
            programa: nuevoPrograma
        }

        if (estudiante.nombre.length < 3) {
            alert("Nombre inválido")
            return
        }

        modificar(estudiante)
        setNombre("");
        setSemestre("");
        setFacultad("");
        setPrograma("");
    }

    if (modo === 'Registrar') {
        return (
            <>
                <form onSubmit={guardarEstudiante}>

                    <div className="form-group">
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" className="form-control" id="nombre" placeholder={'Nombre'} value={nombre} onChange={(event) => setNombre(event.target.value)} />
                    </div> <br/>

                    <div>
                        <label htmlFor="semestre">Semestre</label> <br/>
                        <select className="form-select" aria-label="Disabled select example" id="semestre" value={semestre} onChange={(event) => setSemestre(event.target.value)}>
                            <option value="" selected disabled hidden> --Ingrese el semestre-- </option>
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

                    <div>
                        <label htmlFor="facultad">Facultad</label> <br/>
                        <select className="form-select" aria-label="Disabled select example" id="facultad" value={facultad} onChange={(event) => setFacultad(event.target.value)}>
                            <option value="" selected disabled hidden> --Ingrese la facultad-- </option>
                            <option value="Ingeniería">Ingeniería</option>
                            <option value="Medicina">Medicina</option>
                            <option value="Comunicación">Comunicación</option>
                            <option value="Educación">Educación</option>
                            <option value="Derecho">Derecho</option>
                        </select>
                    </div> <br/>

                    <div className="form-group">
                        <label htmlFor="programa">Programa</label>
                        <input type="text" className="form-control" id="programa" placeholder={'Programa'} value={programa} onChange={(event) => setPrograma(event.target.value)} />
                    </div> <br/>
    
                    <button type="submit" className="btn btn-primary"> Registrar </button>
                </form>
            </>
        )
    } else if (modo === 'Modificar') {
        return (
            <>
                <form onSubmit={modificarEstudiante}>
                
                    <div className="form-group">
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" className="form-control" id="nombre" placeholder={aModificar.nombre} value={nombre} onChange={(event) => setNombre(event.target.value)} />
                    </div> <br/>

                     <div>
                        <label htmlFor="semestre">Semestre</label> <br/>
                        <select className="form-select" aria-label="Disabled select example" id="semestre" value={semestre} onChange={(event) => setSemestre(event.target.value)}>
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

                    <div>
                        <label htmlFor="facultad">Facultad</label> <br/>
                        <select className="form-select" aria-label="Disabled select example" id="facultad" value={facultad} onChange={(event) => setFacultad(event.target.value)}>
                            <option value="" selected disabled hidden>{ aModificar.facultad } </option>
                            <option value="Ingeniería">Ingeniería</option>
                            <option value="Medicina">Medicina</option>
                            <option value="Comunicación">Comunicación</option>
                            <option value="Educación">Educación</option>
                            <option value="Derecho">Derecho</option>
                        </select>
                    </div> <br/>

                    <div className="form-group">
                        <label htmlFor="programa">Programa</label>
                        <input type="text" className="form-control" id="programa" placeholder={aModificar.programa} value={programa} onChange={(event) => setPrograma(event.target.value)} />
                    </div> <br/>
    
                    <button type="submit" className="btn btn-info"> Modificar </button>
                </form>
            </>
        )
    }

}