import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    console.log(props.label)
    return (
        <div>
            <label>{props.label}</label>
            <select>
                {props.itens.map(item => <option>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa