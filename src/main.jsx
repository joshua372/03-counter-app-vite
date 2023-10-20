import React from 'react'
import ReactDOM from 'react-dom/client'
// import { HelloWorldApp } from './HelloWordApp'
// import { FirstApp } from './FirstAppJoshua'
// import { FirstApp } from './FirstApp'
import { CounterApp } from './CounterApp'

//Si quiere uno que los estilos se apliquen en forma global de mi aplicacion
import './styles.css'
//Al exportar tenemos dos opciones 
// 1. Podemos dar el nombre que por default se nombra en el componente
// 2. Cuando importamos el componente podemos ponerne otro nombre de referencia 

//PropTypes si solo le pasamos como prop el nombre este lo tomara por defaul como booleano 

ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        {/* <HelloWorldApp /> */}       
        {/* <FirstApp  /> */}
        <CounterApp value = { 100 } />
    </React.StrictMode>
)


