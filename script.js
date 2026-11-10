const estudiantes = [
    {id: 1, nombre: 'Ana', edad: '20'},
    {id: 2, nombre: 'Juan', edad: '22'},
    {id: 3, nombre: 'Maria', edad: '21'}
];

const id = 1;
const exito = false;
const busqueda = new Promise((resolve, reject) => {
    for (const estudiante of estudiantes){
        if(estudiante.id === id){
            resolve(estudiante.nombre, estudiante.edad);
        }
    }
});

busqueda