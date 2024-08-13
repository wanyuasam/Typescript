import { useState } from 'react'
import './App.css'
import {Person} from './Person'



function App() {
  const [showInfo, setShowInfo] = useState<boolean | null>(false);
  const toggleInfo = () => {
    setShowInfo(prev => !prev);
  }


  return (
    <div>
      {
      showInfo && (
        <>
          <Person name = {"Wesly"} age = {24} isMarried = {false} />
          <Person name = {"Richard"} age = {56} isMarried = {true} />
        </>
      )
    }
    <button  onClick={toggleInfo}> Toggle Info</button>
    </div>
    
    
  )
}

export default App
