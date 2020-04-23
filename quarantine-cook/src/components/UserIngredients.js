import React, {useState, useContext} from 'react'
import Ingredient from './Ingredient'
import { useHistory } from 'react-router-dom'
import { recipesRequest } from '../utils/recipeRequest' 
import {UserContext} from '../contexts/UserContext'

const URL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=5&ranking=2&ignorePantry=false&ingredients="

const UserIngredients = ({items}) =>{
    
    const history = useHistory()

    const [ loading, setLoading ] = useState(false)

    const [ searching, setSearching] = useState(false)

    const [ val, setVal ] = useState("")

    const [ displayList, setDisplayList ] = useState(items)

    const [ user, setUser] = useContext(UserContext)

    const fetchRecipes = () => {
        setLoading(true)
        
        const formattedItems = items.join('%252C')
        // console.log(`${URL}${formattedItems}`)        
        recipesRequest()
        .get(`${URL}${formattedItems}`)
        .then(res => {
            setUser({...user, recipes: res.data})
            localStorage.setItem("allRecipes", JSON.stringify(res.data))
            history.push('/recipes')
        })
        .catch(err => {
            console.log(err)
        })

        setLoading(false)


    }

    const handleChange = (e) => {

        setSearching(true)

        const updated = e.target.value.toLowerCase()

        setVal(updated)

        if (updated === ""){

            setDisplayList(items)
            setSearching(false)
            
        }else{

            const filtered = items.filter(item => item.toLowerCase().includes(updated))
            
            setDisplayList(filtered)

        }


    }


    return(  
        <div className = 'ingredients stock container'>
            <h1>Your groceries</h1>
            <button 
            onClick = {() => fetchRecipes()}
            >GET RECIPES</button>
            
            <div className="ui icon input">
                <input 
                className = 'itemSearch' 
                name = 'itemSearch'
                onChange = {(e) => handleChange(e)}
                placeholder = 'Search My Groceries'
                value = {val}
                />
                <i
                aria-hidden = "true"
                className = "search icon" 
                ></i>                
            </div>

            <div className = 'scroll-container' >
                {searching ? <p className = 'search-results-message'>Results for "<span>{val}</span>"</p> : null} 
                {displayList.length ? displayList.map(ing => (
                    <Ingredient item = {ing} key = {Math.floor(Math.random() * 100000)}/>                
                ))
                : !searching ? <p>Your grocery list is empty, add items below</p> : null
            }                    
            </div>
        </div>
        
    )
}

export default UserIngredients