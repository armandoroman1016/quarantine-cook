import React, {useState, useContext} from 'react'
import Ingredient from './Ingredient'
import { useHistory } from 'react-router-dom'
import { recipesRequest } from '../utils/recipeRequest' 
import {UserContext} from '../contexts/UserContext'
import BeatLoader from "react-spinners/BeatLoader";

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
        
        if(user.allRecipes.length){
            setLoading(true)
            
            const formattedItems = items.join('%252C')
            recipesRequest()
            .get(`${URL}${formattedItems}`)
            .then(res => {
                setUser({...user, recipes: res.data})
                localStorage.setItem("allRecipes", JSON.stringify(res.data))
                setLoading(false)
                history.push('/recipes')
            })
            .catch(err => {
                setLoading(false)
                console.log(err)
            })
    
            setLoading(false)
        }else{
            setLoading(false)
            history.push('/recipes')

        }       

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
            >{!loading 
                ? "GET RECIPES" 
                : <BeatLoader 
                size={9}
                color={"#fff"}
                />
            }
            </button>
            
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