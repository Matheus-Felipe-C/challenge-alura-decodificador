import './styles.css'
import notFound from '../../img/not-found.svg'

export default function Result() {
    return (
        <div className='result' id='resultado'>
            <img src={notFound} alt="" className="notFound" />
            <p><strong>Nenhuma mensagem encontrada</strong></p>
            <p>Digite um texto que você deseja criptografar ou descriptografar.</p>
        </div>
    )
}