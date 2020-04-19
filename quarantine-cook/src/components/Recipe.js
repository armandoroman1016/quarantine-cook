import React, {useState, useContext, useEffect} from 'react'
import {useHistory, Link} from 'react-router-dom'
import {Icon} from 'semantic-ui-react'
import { UserContext } from '../contexts/UserContext'


const data = {
    "vegetarian":false,
    "vegan":false,
    "glutenFree":true,
    "dairyFree":true,
    "veryHealthy":false,
    "cheap":false,
    "veryPopular":false,
    "sustainable":false,
    "weightWatcherSmartPoints":21,
    "gaps":"no",
    "lowFodmap":false,
    "ketogenic":false,
    "whole30":false,
    "servings":10,
    "sourceUrl":"http://www.epicurious.com/recipes/food/views/Char-Grilled-Beef-Tenderloin-with-Three-Herb-Chimichurri-235342",
    "spoonacularSourceUrl":"https://spoonacular.com/char-grilled-beef-tenderloin-with-three-herb-chimichurri-156992",
    "aggregateLikes":0,
    "creditText":"Epicurious",
    "sourceName":"Epicurious",
    "extendedIngredients":"[...]",
    "id":156992,
    "title":"Char-Grilled Beef Tenderloin with Three-Herb Chimichurri",
    "readyInMinutes":45,
    "image":"https://spoonacular.com/recipeImages/char-grilled-beef-tenderloin-with-three-herb-chimichurri-156992.jpg",
    "imageType":"jpg",
    "instructions":"PreparationFor spice rub: Combine all ingredients in small bowl. Do ahead: Can be made 2 days ahead. Store airtight at room temperature. For chimichurri sauce: Combine first 8 ingredients in blender; blend until almost smooth. Add 1/4 of parsley, 1/4 of cilantro, and 1/4 of mint; blend until incorporated. Add remaining herbs in 3 more additions, pureeing until almost smooth after each addition. Do ahead: Can be made 3 hours ahead. Cover; chill. For beef tenderloin: Let beef stand at room temperature 1 hour. Prepare barbecue (high heat). Pat beef dry with paper towels; brush with oil. Sprinkle all over with spice rub, using all of mixture (coating will be thick). Place beef on grill; sear 2 minutes on each side. Reduce heat to medium-high. Grill uncovered until instant-read thermometer inserted into thickest part of beef registers 130F for medium-rare, moving beef to cooler part of grill as needed to prevent burning, and turning occasionally, about 40 minutes. Transfer to platter; cover loosely with foil and let rest 15 minutes. Thinly slice beef crosswise. Serve with chimichurri sauce. *Available at specialty foods stores and from tienda.com.",
    }

const Recipe = (props) => {

    const {recipe} = props
    
    const [user, setUser] = useContext(UserContext)

    let favorites = JSON.parse(user.favoriteRecipes)

    favorites = new Set(favorites)

    const [ isFavored, setIsFavored ] = useState(favorites.has(recipe.id))
    
    const updateFavorites = (recipeID) => {

        if(favorites.has(recipeID)){

            favorites.delete(recipeID)
        
        }else{

            favorites.add(recipeID)

        }

        setIsFavored(favorites.has(recipeID))

        const updated = JSON.stringify([...favorites])

        localStorage.setItem("favoriteRecipes", updated)

        setUser({...user, favoriteRecipes: updated})

    }

    const openRecipe = async (recipeID) => {
        
        console.log(recipeID)

        
        window.open(data.sourceUrl, "_blank");

    }

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
                <button onClick = {() => openRecipe(recipe.id)}>View</button>
                <span>
                    <i
                    className = 'icon fire'
                    style = {{color: isFavored ? "#ff6961" : "#6a8caf"}}
                    onClick = {() => updateFavorites(recipe.id)}
                    ></i>
                    {isFavored ? `${recipe.likes + 1}`: recipe.likes}
                </span>
            </div>
        </div>
    )
}

export default Recipe