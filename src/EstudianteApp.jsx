import { useEffect, useState } from "react"
import { FormularioEstudiante } from "./componentes/FormularioEstudiante";
import { TablaEstudiante } from "./componentes/TablaEstudiante";
import { BarraBusqueda } from "./componentes/BarraBusqueda";
import { getEstudiantes } from "./peticiones/getEstudiantes";
import { postEstudiante } from "./peticiones/postEstudiante";
import { deleteEstudiante } from "./peticiones/deleteEstudiante";
import { putEstudiante } from "./peticiones/putEstudiante";

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
    },{})

    const agregarEstudiante = (estudiante) => {
        let verificado = true

        estudiantes.map((estu) => {
            if ( estu.id === estudiante.id){
                alert('Ese ID ya le pertenece a otro estudiante')
                verificado = false
            }
        })
        
        if ( verificado ){
            postEstudiante(estudiante)
            cargueEstudiantes()
        }
    }

    const modLista = (terminoBusqueda) =>{
        setFiltro(terminoBusqueda)
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
                filtrar = {(termino) => {modLista(termino)} }
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