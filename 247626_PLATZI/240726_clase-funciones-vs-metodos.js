// capacidades que tienen  las funciones al igual que otro
//1. pasar funciones con argumentos ->callback

function a (){}
function b (a){}
b(a)

//retornar funciones
 function a (){
  function b (){}
    return b
 }
//Asignar funciones a variables
const a = function(){}



//tener propiedades y metodos

function a (){}
const obj ={}
a.call (obj)

//anidar funciones -> mested funtions
function a (){}
function b (){}
function c (){}

// es posible almacenar funciones en objetos

const rocket ={
    name: 'falcon 9',
    launchMessage:function launchMessage (){
        console.log ('')
    }

}