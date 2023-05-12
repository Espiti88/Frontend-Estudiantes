export const postEstudiante = async (estudiante) => {
    const url = 'http://localhost:8080/estudiante/crear'
    const resp = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(estudiante)
    })

    const respuesta = await resp.json();
    console.log(respuesta)
}