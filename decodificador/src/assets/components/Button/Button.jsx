import { useEffect } from 'react'
import { useRef } from 'react'
import {criptografar, descriptografar} from '../../utils/encriptador'
import './styles.css'

export default function Button(props) {
    const ref = useRef(null)

    useEffect(() => {
        const handleClick = event => {
            if (props.title === 'Criptografar') criptografar()
            else descriptografar()
        }

        const element = ref.current

        element.addEventListener('click', handleClick)

        return () => {
            element.removeEventListener('click', handleClick)
        }
    },[])

    return (
        <button ref={ref} className={`btn ${props.color}`}
            id={props.title} >{props.title}</button>
    )
}