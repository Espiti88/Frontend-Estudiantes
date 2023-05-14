import { useState } from "react"

export const BarraBusqueda = ({ filtrar }) => {

    const [busquedaFacultad, setBusquedaFacultad] = useState("");
    const [cantidad, setCantidad] = useState("");

    const filtrarEstudiantes = (event) => {
        event.preventDefault();
        filtrar(busquedaFacultad, cantidad)
    }


    return (
        <>
            <br/>
            <form onSubmit={filtrarEstudiantes}>
                <div>

                    <label htmlFor="facultad">Buscar por Facultad</label> <br/>
                    <select className="form-select" aria-label="Disabled select example" id="facultad" value={busquedaFacultad} onChange={(event) => setBusquedaFacultad(event.target.value)}>
                        <option value="" selected disabled hidden> --Ingrese la facultad-- </option>
                        <option value="Ingeniería">Ingeniería</option>
                        <option value="Medicina">Medicina</option>
                        <option value="Comunicación">Comunicación</option>
                        <option value="Educación">Educación</option>
                        <option value="Derecho">Derecho</option>
                    </select>

                </div> <br/>

                <div className="form-group ">

                    <label htmlFor="cantidad">Cantidad</label>
                    <input type="number" className="form-control" id="cantidad" placeholder={'Cantidad'} value={cantidad} onChange={(event) => setCantidad(event.target.value)} />
                
                </div> <br />

                <button type="submit" className="btn btn-secondary"> Filtrar </button>
            </form>
        </>
    )
}