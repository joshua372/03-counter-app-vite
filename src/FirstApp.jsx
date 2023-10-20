import PropTypes from 'prop-types'

export const FirstApp = ({ title, subtitle, name }) => {

    // console.log(props)
    return(
    <>
    <h1> { title } </h1>
    <p>{ subtitle }</p>
    <p>{ name }</p>
    </>
    )
}

//En este caso restringuimos que se respete el tipo de dato que se esta enviando desde el componente padre 
//Si queremos que el dato sea obligatorio tendremos quue agregar que sea requerido (isRequired)
FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    name: PropTypes.string
}
//Los defaultProps entran antes de los propTypes 
//Comunmente estas configuraciones deben ir hasta el final del componente si estas se colocan al inicio ya que nos puede enviar error 
FirstApp.defaultProps = {
    title:'No hay titulo',
    subtitle:'No hay subtitulo',
    name: 'Josue Muñoz'
}