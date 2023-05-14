import { useEffect, useState } from "react"
import { FormularioEstudiante } from "./componentes/FormularioEstudiante";
import { TablaEstudiante } from "./componentes/TablaEstudiante";
import { BarraBusqueda } from "./componentes/BarraBusqueda";
import { getEstudiantes } from "./peticiones/getEstudiantes";
import { postEstudiante } from "./peticiones/postEstudiante";
import { deleteEstudiante } from "./peticiones/deleteEstudiante";
import { putEstudiante } from "./peticiones/putEstudiante";
import { buscarEstudiantes } from "./peticiones/buscarEstudiantes";

export const EstudiantesApp = () => {

    const [estudiantes, setEstudiantes] = useState([]);
    const [aModificar, setAModificar] = useState({});
    const [modo, setModo] = useState('Registrar');
    const [filtro, setFiltro] = useState('');

    const cargueEstudiantes = async () => {
        const datos = await getEstudiantes()
        setEstudiantes(datos)
    }

    useEffect(() =>{
        cargueEstudiantes()
    },[])

    const agregarEstudiante = (estudiante) => {
        
        postEstudiante(estudiante)
        cargueEstudiantes()
    }

    const filtarEstudiantes = async (facultad, cantidad) =>{
        const datos = await buscarEstudiantes(facultad, cantidad)
        setFiltro(datos)
        console.log(datos)
    }

    const eliminarEstudiante = (estudiante) => {
        deleteEstudiante(estudiante.id)
        cargueEstudiantes()
        window.location.reload()
    }

    const editarEstudiante = (estu) => {
        setModo('Modificar')
        setAModificar(estu)
    }

    const modEstudiante = (nuevoEstudiante) => {
        putEstudiante(nuevoEstudiante)
        cargueEstudiantes()
        setModo('Registrar')
    }

    

    return (
        <>
            <FormularioEstudiante 
                agregar={(estu) => { agregarEstudiante(estu) }}
                modificar={(viejoEstu, nuevoEstu) => { modEstudiante(viejoEstu, nuevoEstu) }}
                aModificar={ aModificar }
                modo={ modo }
            /> <br/>

            <BarraBusqueda
                filtrar = {(facultad, cantidad) => {filtarEstudiantes(facultad, cantidad)} }
            /> <br/>

            <TablaEstudiante 
                listaEstudiantes={estudiantes}
                filtrar={filtro}
                editar={(estu) => { editarEstudiante(estu) }}
                eliminar={(estu) => { eliminarEstudiante(estu) }}
            />
        </>
    )
}