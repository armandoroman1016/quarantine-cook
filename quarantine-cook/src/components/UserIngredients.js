import React from 'react'
import Ingredient from './Ingredient'

const UserIngredients = ({items}) =>{
    
    return(
        items && items.length ? 
        ( <div className = 'ingredients stock container'>
            <h1>Your groceries</h1>
            {items && items.map(ing => (
                <Ingredient item = {ing} />                
            )
            )}                    
        </div>
        )
        : <p className = 'no-groceries'>Your grocery list is empty. Use the form below to add items.</p>
    )
}

export default UserIngredients