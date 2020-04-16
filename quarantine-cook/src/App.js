import React, { useState } from 'react';

import './App.css';
import './styles/index.scss'
import 'semantic-ui-css/semantic.min.css'

import Nav from './components/Nav'
import RecipeForm from './components/RecipeForm'
import UserIngredients from './components/UserIngredients'
import Recipes from './components/Recipes'

import {UserContext} from './contexts/UserContext'
import { Route, Switch } from 'react-router'

function App() {

  const [ user, setUser] = useState({
    allRecipes: localStorage.getItem('allRecipesQuarantine') ? localStorage.getItem('allRecipesQuarantine') : null,
    ingredients: [],
    favoriteRecipes: localStorage.getItem('favoriteRecipesQuarantine') ? localStorage.getItem('favoriteRecipesQuarantine') : null
  })

  return (
    <div className="App">
      <UserContext.Provider value = {[user, setUser]}>
          <Nav />
          <Switch>
          {/* render userIngredients and recipe form in same component */}
            <Route path = '/kitchen' render = {(props) => <UserIngredients {...props} items = {user.ingredients}/>} />
            <RecipeForm />
            <Recipes/>
          </Switch>
      </UserContext.Provider>
    </div>
  );
}

export default App;
