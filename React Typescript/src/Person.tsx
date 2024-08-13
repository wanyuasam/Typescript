import { useState } from "react";

// interface
interface Person{
    name: string
    age: number
    isMarried: boolean
}

export const Person = (props: Person) => {
    const [showInfo, setShowInfo] = useState<boolean | null>(false);
    const toggleInfo = () => {
      setShowInfo(prev => !prev);
    }

  return (
    <div>
        {showInfo && (
            <>
                <p>Name: {props.name}</p>
                <p>Age: {props.age}</p>
                <p>This person is {props.isMarried ? "is married" : "is single"} </p>
            </>
        
    )}
    <button onClick={toggleInfo}>Toggle Info</button>
    </div>
  )}
export default Person;