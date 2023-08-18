import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}...` 

    let valor = 'Mikael Elias'

    const aoDigitado = (evento) => {
        valor = evento.target.valor
        console.log(value)
    }

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input value={valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}/>
        </div>
    )
}

export default CampoTexto