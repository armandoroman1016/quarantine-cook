import React, {useState, useContext, useEffect} from 'react'
import { useHistory, useParams } from 'react-router'
import {UserContext} from '../contexts/UserContext'
import Recipe from './Recipe'

const recipes = [
    {
    "id":641803,
    "title":"Easy & Delish! ~ Apple Crumble",
    "image":"https://spoonacular.com/recipeImages/Easy---Delish--Apple-Crumble-641803.jpg",
    "usedIngredientCount":3,
    "missedIngredientCount":4,
    "likes":1
    },
    {
    "id":645152,
    "title":"Grandma's Apple Crisp",
    "image":"https://spoonacular.com/recipeImages/Grandmas-Apple-Crisp-645152.jpg",
    "usedIngredientCount":3,
    "missedIngredientCount":6,
    "likes":1
    },
    {
    "id":657563,
    "title":"Quick Apple Ginger Pie",
    "image":"https://spoonacular.com/recipeImages/Quick-Apple-Ginger-Pie-657563.jpg",
    "usedIngredientCount":3,
    "missedIngredientCount":6,
    "likes":1
    },
    {
    "id":639487,
    "title":"Cinnamon Sugar Fried Apples",
    "image":"https://spoonacular.com/recipeImages/Cinnamon-Sugar-Fried-Apples-639487.jpg",
    "usedIngredientCount":3,
    "missedIngredientCount":8,
    "likes":46
    },
    {
    "id":643426,
    "title":"Fresh Apple Cake With Caramel Sauce",
    "image":"https://spoonacular.com/recipeImages/Fresh-Apple-Cake-With-Caramel-Sauce-643426.jpg",
    "usedIngredientCount":3,
    "missedIngredientCount":12,
    "likes":9
    }
    ]

const Recipes = () => {

    const [user, setUser] = useContext(UserContext)

    const [ filtered, setFiltered ] = useState(false)

    const [displayList, setDisplayList] = useState(recipes)

    useEffect(() => {
        
        const favorites = new Set(JSON.parse(user.favoriteRecipes))

        if (filtered){

            setDisplayList(displayList.filter(recipe => favorites.has(recipe.id)))

        }else{

            setDisplayList(recipes)

        }


        
    }, [filtered])

    return(
        <div className = 'recipes'>
            <h3>Recipes For You</h3>
            <div className = 'filter option container' >
                <p className = 'message'>Favorites</p>
                <div className = {filtered ? 'switch-container filtered': 'switch-container'}>
                    <div 
                    className = {filtered ? 'toggle filtered': 'toggle'} 
                    onClick = {() => setFiltered(!filtered)}
                    />
                </div>
            </div>
            {displayList && displayList.map(recipe => {
                return <Recipe key = {recipe.id} recipe = {recipe} />
            })}
        </div>
    )    
}

export default Recipes