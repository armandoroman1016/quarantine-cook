import React, {useState, useContext, useEffect} from 'react'
import Ingredient from './Ingredient'
import { useHistory } from 'react-router-dom'
import { recipesRequest } from '../utils/recipeRequest' 
import {UserContext} from '../contexts/UserContext'
import BeatLoader from "react-spinners/BeatLoader";

const URL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=10&ranking=2&ignorePantry=false&ingredients="

const ingredientsHaveUpdated = (currItems) => {

    let prevItems = new Set(JSON.parse(localStorage.getItem("prevIngredients")))

    if (!prevItems.size){
        return true

    }

    let changes = false

    for(let i = 0; i < currItems.length; i++){
        if(!prevItems.has(currItems[i])){
            changes = true
            break
        }
    }

    return changes

}

const UserIngredients = () =>{
    
    const [ user, setUser] = useContext(UserContext)
    
    const [ items, setItems ] = useState(user.ingredients)
    const [ displayList, setDisplayList ] = useState(items)
    
    const [ val, setVal ] = useState("")
    
    const [ loading, setLoading ] = useState(false)
    const [ searching, setSearching] = useState(false)
    
    const history = useHistory()
    
    

    useEffect(() => {

        if(searching){

            setDisplayList(user.ingredients.filter(item => item.toLowerCase().includes(val.toLowerCase())))

        }else{
            setDisplayList(user.ingredients)

        }

    }, [user.ingredients])

    const fetchRecipes = () => {
        
        setLoading(true)

        if(ingredientsHaveUpdated(items)){
            const formattedItems = items.join('%252C')
            // console.log("here")
            recipesRequest()
            .get(`${URL}${formattedItems}`)
            .then(res => {
                setUser({...user, allRecipes: res.data})
                localStorage.setItem("allRecipes", JSON.stringify(res.data))
                localStorage.setItem("prevIngredients", JSON.stringify(items))
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

            const filtered = user.ingredients.filter(item => item.toLowerCase().includes(updated))
            console.log(filtered)
            setDisplayList(filtered)

        }


    }


    return(  
        <div className = 'ingredients stock container'>
            <h1>Your groceries</h1>
            <button onClick = {() => fetchRecipes()}>{!loading 
                ? "GET RECIPES" 
                : <BeatLoader 
                size={7}
                color={"#fff"}
                />}
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