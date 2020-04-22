import React, {useContext} from 'react'
import {UserContext} from '../contexts/UserContext'
import { Icon } from 'semantic-ui-react'

const Ingredient = ({item}) => {

    const [ user, setUser ] = useContext(UserContext)

    const removeItem = () => {

        const filtered = user.ingredients.filter( ing => {
            if (ing !== item){
                return ing
            }
        })

        setUser({ ...user, ingredients: filtered})

        localStorage.setItem("ingredients", JSON.stringify(filtered))

    }

    const iconStyle = {color: "#ff6961"}
    return (
        <div className = 'ingredient'>
            <p >{item}</p>
            <Icon
            style = {iconStyle} 
            name = "trash alternate" 
            onClick = {() => removeItem()}/>
        </div>
    )
}

export default Ingredient

