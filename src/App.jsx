import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Sucess from './components/Sucess/Sucess.jsx';
import Cloud from './components/Cloud/Cloud.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Sucess />
    <Cloud />
    </>
  )
}

export default App
