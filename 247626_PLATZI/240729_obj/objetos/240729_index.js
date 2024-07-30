/*
estructura de datos
key / value
objeto {
propiedad: valor,
propiedda: valor,
propiedad: valor
metodos}
*/
const persona ={
    nombre: 'John',
    edad: 30,
    direccion: {
        calle: '88 #72a-59',
        ciudad: "cdbogota",
    },
    saludar (){
        console.log(`hola, minombre es ${persona.nombre}`);
    },
};

console.log (persona);
persona.saludar();

persona.telefono ="555-555-5555";

console.log (persona.telefono);

persona.despedir = ()=>{
    console.log("Adios");
};
 persona.despedir();

 delete persona.telefono;
 delete persona.despedir;
