import React, { useState, useContext } from 'react'
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

        let filtered = []

        // initial loop to remove any invalid field submissions
        for(let i = 0; i < inputItems.length; i++){
            
            const found = inputItems[i].match(itemFormat)

            if (found){
                filtered.push(inputItems[i].trim())          
            }

        }
        
        if (filtered.length !== 0){

            const storage = JSON.parse(localStorage.getItem("ingredients")) 
            
            
            if (storage){
                localStorage.setItem("ingredients", JSON.stringify([...storage, ...filtered]))
            }else{
                localStorage.setItem("ingredients", JSON.stringify([...filtered]))
            }
            
            setUser( {...user, ingredients: [...user.ingredients, ...filtered]})
            
        }

        setValue("")
        setInputItems([])

    }

    return(
        <div className = 'form user_ingredients container'>
            <form onSubmit = {(e) => handleSubmit(e)}>
                <label>ADD GROCERIES</label>
                <div className="ui icon input">
                    <input value = {value} onChange = {(e) => handleChange(e)} placeholder = 'Enter items individually or comma separated'/>
                    <i
                    aria-hidden = "true"
                    className = "icon food" 
                    ></i>                
                </div>
                <div className = 'input_items_container'>
                {
                    inputItems.length > 0 ? (
                        <>
                        <h4>Ingredients to be added to your list</h4>
                        {inputItems && inputItems.map(item => (
                            <p 
                            key = {Math.floor(Math.random() * 100000)}
                            style = {item.match(itemFormat) == null ? { color: "#c80e13", fontWeight: "bolder" } : null}
                            >{item}</p>
                        )
                        )}
                        </>
                    ) : null
                }
                </div>
                <button type = 'submit'>ADD TO INGREDIENTS</button>
            </form>
        </div>
    )
}

export default RecipeForm