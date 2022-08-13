import './App.css'
import TextInput from './assets/components/Textinput/TextInput'
import Button from './assets/components/Button/Button'
import Result from './assets/components/Result/Result'

function App() {

  return (
    <div className='container'>
      <TextInput />
      <Result />
      <div className="btn-container">
        <Button title='Criptografar' color='blue' />
        <Button title='Descriptografar' color='grey' />
      </div>
    </div>
  )
}

export default App
