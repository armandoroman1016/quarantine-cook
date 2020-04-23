import React, {useState, useContext} from 'react'
import { UserContext } from '../contexts/UserContext'
import { recipesRequest } from '../utils/recipeRequest'
import BeatLoader from "react-spinners/BeatLoader";


const Recipe = (props) => {

    const {recipe} = props
    
    const [user, setUser] = useContext(UserContext)

    const [loading, setLoading] = useState(false)

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
        
        setLoading(true)

        recipesRequest()
        .get(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${recipeID}/information`)
        .then( res => {
            
            setLoading(false)
            window.open(res.data.sourceUrl, "_blank");

        })
        .catch(err => {
            setLoading(false)
            console.log(err)
        })

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
                <button onClick = {() => openRecipe(recipe.id)}>{!loading 
                    ? "View"
                    : <BeatLoader 
                    size={5}
                    color={"#fff"}
                    />
                }</button>
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