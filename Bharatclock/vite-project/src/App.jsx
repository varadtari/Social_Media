import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClockHead from '../components/ClockHead'
import ClockSlogan from '../components/ClockSlogan'
import CurrentTime from '../components/CurrentTime'
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  const [count, setCount] = useState(0)

  return (
    <> <center>
      <ClockHead/>
      <ClockSlogan/>
      <CurrentTime/>
    </center>
      
    </>
  )
}

export default App
