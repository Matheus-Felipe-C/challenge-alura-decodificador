import './App.css'
import TextInput from './assets/components/Textinput/TextInput'
import Button from './assets/components/Button/Button'

function App() {

  return (
    <div className='container'>
      <TextInput />
      <div className="btn-container">
        <Button title='Descriptografar' color='blue' />
        <Button title='Descriptografar' color='grey' />
      </div>
    </div>
  )
}

export default App
