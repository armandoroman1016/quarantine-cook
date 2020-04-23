import React, {useState, useContext, useEffect} from 'react'
import { useHistory, useParams } from 'react-router'
import {UserContext} from '../contexts/UserContext'
import Recipe from './Recipe'

const Recipes = () => {

    const [user, setUser] = useContext(UserContext)

    const [ filtered, setFiltered ] = useState(false)

    const [ favoriteList, setFavoriteList ] = useState([])

    const [ searchVal, setSearchVal ] = useState("")
    
    const [ displayList, setDisplayList ] = useState(user.allRecipes)

    const [ searching, setSearching ] = useState(false) 

    console.log(user)
    
    useEffect(() => {
        
        const favorites = new Set(JSON.parse(user.favoriteRecipes))

        if (filtered){
            const filteredList = displayList.filter(recipe => favorites.has(recipe.id))
            setFavoriteList(filteredList)
            setDisplayList(filteredList)

        }else{
            setDisplayList(user.allRecipes)
        }


    }, [filtered])

    const handleSearch = (e) => {

        let val = e.target.value.toLowerCase()

        setSearchVal(val)
        
        if (val == ""){

            setSearching(false)

            if(!filtered){
                setDisplayList(user.allRecipes)

            }else{
                setDisplayList(favoriteList)
            }


        }else{
            setSearching(true)

            if(!filtered){
                setDisplayList( user.allRecipes.filter(recipe => recipe.title.toLowerCase().includes(val)))

            }else{
                setDisplayList( favoriteList.filter(recipe => recipe.title.toLowerCase().includes(val)))

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