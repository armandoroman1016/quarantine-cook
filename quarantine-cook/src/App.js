import React, { useState } from 'react';

import 'semantic-ui-css/semantic.min.css'
import './App.css';
import './styles/index.scss'

import Nav from './components/Nav'
import RecipeForm from './components/RecipeForm'
import UserIngredients from './components/UserIngredients'
import Recipes from './components/Recipes'

import {UserContext} from './contexts/UserContext'
import { Route, Switch } from 'react-router'

function App() {
  

  const [ user, setUser] = useState({
    allRecipes: localStorage.getItem('allRecipes') ? JSON.parse(localStorage.getItem('allRecipes')) : [],
    ingredients: localStorage.getItem('ingredients') ? JSON.parse(localStorage.getItem('ingredients')) : [],
    favoriteRecipes: localStorage.getItem('favoriteRecipes') ? localStorage.getItem('favoriteRecipes') : JSON.stringify([])
  })

  return (
    <div className="App">
      <UserContext.Provider value = {[user, setUser]}>
          <Nav />
          <Switch>
            <Route path = '/kitchen' render = {(props) => (
                <>
                  <UserIngredients {...props}/>
                  <RecipeForm {...props}/>
                </>
              )}/>
            <Route path = '/recipes' component = {Recipes}/>
          </Switch>
      </UserContext.Provider>
    </div>
  );
}

export default App;
