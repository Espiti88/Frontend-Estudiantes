export const putEstudiante = async (estudiante) => {
    const url = 'http://localhost:8080/estudiante/actualizar/' + estudiante.id
    const resp = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(estudiante)
    })

    const respuesta = await resp.json();
    console.log(respuesta)
}