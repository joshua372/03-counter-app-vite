//Modo amplio
// export const FirstApp = () => {
//   return (
//     <h1>
//       First App Joshua
//     </h1>
//   )
// }

//Modo corto y sintetizado
// export const FirstApp = () => <h1>First App Joshua</h1>

//uso del Fragment es crear un nodo padre que agrupa diferentes lineas de codigo html
// import { Fragment } from "react";

// export const FirstApp = () => {
//   return (
//     <Fragment>
//         <h1> First App Joshua </h1>
//         <p>Esto es un parrafo</p>
//     </Fragment>
    
//   )
// }

//En react no tenemos la necesidad de llamar Fragment con solo declarar un nodo padre '<> </>' del jsx podemos agruparlo
// de diferentes elementos html

// export const FirstApp = () => {
//   return (
//     <>
//         <h1> First App Joshua </h1>
//         <p>Esto es un parrafo</p>
//         <h1> First App Joshua </h1>
//         <p>Esto es un parrafo</p>        
//     </>    
//   )
// }

//Para la impresion de las variables se recomienda dentro del jsx usar llaves { }
//Puedo imprimir diferentes tipos de variables excepto booleanos y objetos 
//Si se quiere imprimir un objeto se debe de usar el JSON.stringify si queremos que tenga una mejor en vista de code se agrega el tag <code></code>

//Las funciones se recomiendan que esten fuera del componente funcional del jsx para no volver a renderizar la funcion dentro del componente
//En caso de que el componente dependa de dicha funcion para su comportamiento entonces si aplica 
const newMessagge = {
    nombre: 'Josue',
    edad: 23,
    direccion: 'Avenida REvolucion'
}

const getResult = (a ,b) =>{
    return a + b
}

export const FirstApp = () => {

    // const getResult = (a ,b) =>{
    //     return a + b
    // }

  return (
    <>
        <h1> { getResult(1,10)}</h1>
        <code>{ JSON.stringify(newMessagge)}</code>
        <p>Esto es un parrafo</p>
            
    </>    
  )
}





