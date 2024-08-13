import './App.css'
import {Person} from './Person'



function App() {
  const fetchUser = () => ({name: "Kelvin HartKing", age: 45, isMarried: null});
  const userFetched = fetchUser();

  return (
    <>
     <Person name = {"Wesly"} age = {24} isMarried = {false} />
     <Person name = {"Richard"} age = {56} isMarried = {true} />
     <Person name = {userFetched.name} age = {56} isMarried = {true} />
    </>
  )
}

export default App
