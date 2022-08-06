import logo from '../../img/logo.svg' 
import './styles.css'

export default function TextInput() {
    return (
        <div>
            <img src={logo} alt="" className="image" />
            <div className='inputArea'>
                <textarea name="textInput" className="textInput" placeholder='Digite o seu texto'></textarea>
                <p>Apenas letras maiúsculas e sem acento</p>
            </div>
        </div>
    )
}