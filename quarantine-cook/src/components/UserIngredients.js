import React, {useState} from 'react'
import Ingredient from './Ingredient'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { Search } from 'semantic-ui-react'

const UserIngredients = ({items}) =>{
    
    const history = useHistory()

    const [ loading, setLoading ] = useState(false)

    const [ searching, setSearching] = useState(false)

    const [ val, setVal ] = useState("")

    const [ displayList, setDisplayList ] = useState(items)

    const fetchRecipes = async () => {
        setLoading(true)
        
        console.log("clicked")

        setLoading(false)

        history.push('/recipes')

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