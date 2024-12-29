import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Feedbackdash from './component/Feedbackdash'
import Addfeedback from './component/Addfeedback'
import Main from './component/Main'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Routes>

      <Route path='/' element={<Main child={<Feedbackdash />} />} />


<Route path='/addfeedback' element={<Addfeedback />}  />





</Routes>      
  </>
)
}

   

export default App
