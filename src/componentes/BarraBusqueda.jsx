import { useState } from "react"

export const BarraBusqueda = ({ filtrar }) => {
    const [busquedaNombre, setBusquedaNombre] = useState("");
    const [busquedaFacultad, setBusquedaFacultad] = useState("");

    const handleChange1 = (event) => {
        setBusquedaNombre(event.target.value)
        let filtro = {
            nombre: event.target.value,
            facultad: busquedaFacultad
        }
        filtrar(filtro)
    }
    const handleChange2 = (event) => {
        setBusquedaFacultad(event.target.value)
        let filtro = {
            nombre: busquedaNombre,
            facultad: event.target.value
        }
        filtrar(filtro)
    }

    return (
        <>
            <div className="form-group">
                <label htmlFor="nombre">Filtrar por nombre</label>
                <input type="text" className="form-control" id="nombre" placeholder={'Nombre'} value={busquedaNombre} onChange={(event) => handleChange1(event)} /> <br/>
                
                <label htmlFor="facultad">Filtrar por facultad</label>
                <input type="text" className="form-control" id="facultad" placeholder={'Facultad'} value={busquedaFacultad} onChange={(event) => handleChange2(event)} />
            </div> <br />
        </>
    )
}