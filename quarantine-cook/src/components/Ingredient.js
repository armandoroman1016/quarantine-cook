import React, {useContext} from 'react'
import {UserContext} from '../contexts/UserContext'
import { Icon } from 'semantic-ui-react'

const Ingredient = ({item}) => {

    const [ user, setUser ] = useContext(UserContext)

    const removeItem = () => {
        setUser({ 
            ...user, 
            ingredients: user.ingredients.filter( ing => {
                    if (ing !== item){
                        return ing
                    }
                })
        })
    }

    return (
        <div>
            <p key = {Math.floor(Math.random() * 100000)}>{item}</p>
            <Icon name = "trash alternate" onClick = {() => removeItem()}/>
        </div>
    )
}

export default Ingredient

