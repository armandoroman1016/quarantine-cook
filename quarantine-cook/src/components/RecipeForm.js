import React, { useState, useEffect, useContext } from 'react'
import {UserContext} from "../contexts/UserContext"

const RecipeForm = () => {

    const [user, setUser] = useContext(UserContext)

    const [ value, setValue ] = useState("")

    const [ inputItems, setInputItems ] = useState([])

    const itemFormat = /^[_A-z]*((-|\s)*[_A-z])*$/g;

    const handleChange = (e) => {

        const val = e.target.value

        setInputItems(() => val.split(","))

        setValue(val)

    }

    const handleSubmit = (e) => {
        
        e.preventDefault()

        const filtered = []

        for(let i = 0; i < inputItems.length; i++){
            
            const found = inputItems[i].match(itemFormat)

            if (found){
                filtered.push(inputItems[i].trim())          
            }

        }
        
        setUser((user) => {
            user.ingredients = filtered
        })
    }

    return(
        <div>
            <form onSubmit = {(e) => handleSubmit(e)}>
                <label>YOUR GROCERIES</label>
                <input value = {value} onChange = {(e) => handleChange(e)} placeholder = 'Enter items here one by one or comma separated'/>
                {inputItems && inputItems.map(item => (
                    <p 
                    key = {Math.floor(Math.random() * 100000)}
                    style = {item.match(itemFormat) == null ? { color: "red" } : null}
                    >{item}</p>
                )
                )}
                <button type = 'submit'>ADD TO INVENTORY</button>
            </form>
        </div>
    )
}

export default RecipeForm