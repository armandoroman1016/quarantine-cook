import React, { useState, useContext } from 'react'
import {UserContext} from "../contexts/UserContext"
import UserIngredients from './UserIngredients'

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

        let filtered = []

        for(let i = 0; i < inputItems.length; i++){
            
            const found = inputItems[i].match(itemFormat)

            if (found){
                filtered.push(inputItems[i].trim())          
            }

        }
        
        if (filtered.length != 0){
            setUser(user => user, user.ingredients = [...user.ingredients, ...filtered])
        }

        setValue("")
        setInputItems([])

    }

    return(
        <div>
            <form onSubmit = {(e) => handleSubmit(e)}>
                <label>ENTER GROCERIES</label>
                <input value = {value} onChange = {(e) => handleChange(e)} placeholder = 'Enter items here one at a time or comma separated'/>
                {inputItems && inputItems.map(item => (
                    <p 
                    key = {Math.floor(Math.random() * 100000)}
                    style = {item.match(itemFormat) == null ? { color: "red" } : null}
                    >{item}</p>
                )
                )}
                <button type = 'submit'>ADD TO INGREDIENTS</button>
            </form>
            <UserIngredients items = {user.ingredients}/>
        </div>
    )
}

export default RecipeForm