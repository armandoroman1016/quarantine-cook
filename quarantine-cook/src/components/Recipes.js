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

    const [ favoriteList, setFavoriteList ] = useState([])

    const [ searchVal, setSearchVal ] = useState("")
    
    const [ displayList, setDisplayList ] = useState(recipes)

    const [ searching, setSearching ] = useState(false) 
    
    // will update list of recipes when the filtered state is toggled 
    useEffect(() => {
        
        const favorites = new Set(JSON.parse(user.favoriteRecipes))

        if (filtered){
            const filteredList = displayList.filter(recipe => favorites.has(recipe.id))
            setFavoriteList(filteredList)
            setDisplayList(filteredList)

        }else{
            setDisplayList(recipes)
        }


    }, [filtered])

    const handleSearch = (e) => {

        let val = e.target.value

        setSearchVal(val)
        
        if (val == ""){

            setSearching(false)

            if(!filtered){
                setDisplayList(recipes)

            }else{
                setDisplayList(favoriteList)
            }


        }else{
            setSearching(true)

            if(!filtered){
                setDisplayList( recipes.filter(recipe => recipe.title.toLowerCase().includes(val.toLowerCase())))

            }else{
                setDisplayList( favoriteList.filter(recipe => recipe.title.toLowerCase().includes(val.toLowerCase())))

            }
        }
    }

    return(
        <div className = 'recipes'>
            <h3>Recipes For You</h3>
            <div className = 'search'>
                
                <div className="ui icon input">
                    <input 
                    type = 'text' 
                    name= 'searchRecipe' 
                    value = {searchVal} 
                    placeholder = "Search Recipes"
                    onChange = {(e) => handleSearch(e)}
                    className = 'search-recipe-input'
                    />
                    <i
                    aria-hidden = "true"
                    className = "search icon" 
                    ></i>                
                </div>
            </div>
            <div className = 'filter option container' >
                <p className = 'message'>Favorites</p>
                <div 
                className = {filtered ? 'switch-container filtered': 'switch-container'}
                onClick = {() => setFiltered(!filtered)}
                >
                    <div 
                    className = {filtered ? 'toggle filtered': 'toggle'} 
                    />
                </div>
            </div>
            {searching ?
                <p className = 'search-results'>Results for "{searchVal}"</p>
                : null
            }
            <div className = 'displayed-recipes'>
                {displayList && displayList.map(recipe => {
                    return <Recipe key = {recipe.id} recipe = {recipe} />
                })}     
            </div>
        </div>
    )    
}

export default Recipes