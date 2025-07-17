import './App.css'
import Welcome from './components/welcome/welcome';

function App() {
  
  return (
    <>
      <p>Hello World</p>
      <Welcome lastName='Duck' firstName='Della' />
      <Welcome firstName='Gontran' />
    </>
  )
}

export default App
