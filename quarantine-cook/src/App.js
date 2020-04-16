import React, { useState } from 'react';

import './App.css';
import './styles/index.scss'
import 'semantic-ui-css/semantic.min.css'

import Nav from './components/Nav'
import RecipeForm from './components/RecipeForm'
import UserIngredients from './components/UserIngredients'
import {UserContext} from './contexts/UserContext'

function App() {

  const [ user, setUser] = useState({
    recipes: null,
    ingredients: []
  })

  return (
    <div className="App">
      <UserContext.Provider value = {[user, setUser]}>
          <Nav />
          <UserIngredients items = {user.ingredients}/>
          <RecipeForm />
      </UserContext.Provider>
    </div>
  );
}

export default App;
