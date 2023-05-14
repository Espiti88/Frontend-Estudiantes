export const buscarEstudiantes = async(facultad, tamaño) => {

    const url = 'http://localhost:8080/estudiante/buscar?facultad=' + facultad + '&size=' + tamaño
    const resp = await fetch(url)
    const data = await resp.json();

    const estudianteList = data.map(estudiante =>({
        id: estudiante.id,
        nombre: estudiante.nombre,
        semestre: estudiante.semestre,
        facultad: estudiante.facultad,
        programa: estudiante.programa
    }));
    return estudianteList;
}