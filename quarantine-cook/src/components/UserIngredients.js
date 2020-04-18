import React, {useState} from 'react'
import Ingredient from './Ingredient'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const UserIngredients = ({items}) =>{
    
    const history = useHistory()

    const [ loading, setLoading ] = useState(false)

    const fetchRecipes = async () => {
        setLoading(true)
        
        console.log("clicked")

        setLoading(false)

        history.push('/recipes')

    }

    return(  
        <div className = 'ingredients stock container'>
            <h1>Your groceries</h1>
            <button onClick = {() => fetchRecipes()}>GET RECIPES</button>
            <div className = 'scroll-container' >
                {items.length ? items.map(ing => (
                    <Ingredient item = {ing} key = {Math.floor(Math.random() * 100000)}/>                
                ))
                : <p>Your grocery list is empty, add items below</p>
            }                    
            </div>
        </div>
        
    )
}

export default UserIngredients