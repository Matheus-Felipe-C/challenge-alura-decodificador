import './styles.css'

export default function Button(props) {

    return (
        <button className={`btn ${props.color}`} >{props.title}</button>
    )
}