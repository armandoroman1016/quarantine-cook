import React, { Component } from 'react'
import { useHistory } from 'react-router-dom'
import groceryBasket from '../assets/groceryBasket.svg'
import recipeBook from '../assets/recipeBook.svg'
import write from '../assets/write.svg'

const Landing = () => {

    const history = useHistory()

    return(
        <div className = 'landing'>
                <div className = 'section header'>
                    <h2>Quarantine Cook</h2>
                    <p>Making unnecessary grocery trips?</p>
                    <button onClick = {() => history.push('/kitchen')}>STOP TODAY</button>
                </div>
                <div className = 'section'>
                    <img src = {groceryBasket} alt = 'icon' />
                    <p>Quarantine Cook was built to help you avoid find recipes with ingredients that you already have on hand.</p>
                </div>
                <div className = 'section'>
                    <img src = {write} alt = 'icon' />
                    <p>Simply enter the ingredients and get matched with recipes instantly!</p>
                </div>
                <div className = 'section'>
                    <img src = {recipeBook} alt = 'icon' />
                    <p>Your recipes are instantly saved so you can come back and view them later.</p>
                </div>
                <div className = 'section final'>
                    <h4>Ready to skip the grocery trip?</h4>
                    <button className = 'started button' onClick = {() => history.push('/kitchen')}>GET STARTED</button>
                    <p>Returning for your saved recipes? Click <span onClick = {() => history.push('/recipes')}>here</span>.</p>
                </div>
        </div>
    )
}

export default Landing