import React from 'react'
import Ingredient from './Ingredient'

const UserIngredients = ({items}) =>{
    
    return(
        items && items.length ? 
        ( <div>
            <h1>Your groceries</h1>
            {items && items.map(ing => (
                <Ingredient item = {ing} />                
            )
            )}                    
        </div>
        )
        : null
    )
}

export default UserIngredients