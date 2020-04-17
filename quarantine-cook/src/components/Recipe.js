import React from 'react'
import {useHistory, Link} from 'react-router-dom'
import {Icon} from 'semantic-ui-react'

const Recipe = (props) => {

    const {recipe} = props

    return(
        <div className = 'recipe container'>
            <img src = {recipe.image} alt = 'food'/>
            <p className = 'recipe-name'>{recipe.title}</p>
            <p className = 'ingredients-missing'>{
                recipe.missedIngredientCount === 0 ?
                null
                : `Ingredients missing - ${recipe.missedIngredientCount}`
            }</p>
            <div className = 'actions'>
                <Link to = {`/recipe/${recipe.id}`}>
                    <button>View</button>
                </Link>      
                <span>
                    <Icon
                    name = 'fire'
                    color = {true ? "grey" : "red"}
                    />
                    {recipe.likes}
                </span>
            </div>
        </div>
    )
}

export default Recipe