import { useState } from 'react'

import PropTypes from 'prop-types'


export const CounterApp = ({ value }) =>{

    const [ counter, setCounter ] = useState(value)

//Manera como antes funcionaba tipo js
// function handleAdd(event){
//     console.log(event)
// }

//Manera actualizada utilizando flecha
//Aqui la funcion en caso de que se quiera renderizar la funcion junto con el componente pero se recomienda que esta funcion 
//este fuera del componente 
const handleAdd = () =>{
    // console.log(event)
    // console.log(counter)
    //Una forma de cambiar el estado
    // setCounter( counter + 1)
    //Otra forma usando una funcion cualquiera de las dos es valida
    setCounter( (c) => c + 1)

}
// La forma estructurada
// const handleSubstract = () =>{
//     //setCounter( counter - 1)
//     setCounter((c) => c - 1)
// }

// const handleReset = () =>{
// //    console.log(value)
//    setCounter(value)
// }

//Forma compacta en caso de que solo tenga una sola linea de instruccion functiones flecha

const handleSubstract = () => setCounter(counter - 1 )

const handleReset = () => setCounter( value )

    return(
        <>
        <h1>Counter app</h1>
        <h2>{ counter }</h2>  
        <button onClick={ handleAdd }> + 1 </button>   
        <button onClick={ handleSubstract } > -1 </button>  
        <button onClick={ handleReset } > Reset </button>  
        </>
    )
}

CounterApp.propTypes = {
 value: PropTypes.number.isRequired
}

