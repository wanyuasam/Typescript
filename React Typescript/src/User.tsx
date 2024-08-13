import { useState } from "react";

// interface
interface User{
    name: string
    age: number
    isMarried: boolean
}

export const User = (props: User) => {
    const [bio, setBio] = useState<string | null>(null);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBio(e.target.value)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }


  return (
    <div>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>This person is {props.isMarried ? "is married" : "is single"} </p>
        
    <p>{props.name} Bio: {bio === null ? "No Bio availabe" : bio}</p>
    <input onChange={handleChange}/>
    </div>
  )}
export default Person;