import React, {useContext, useState} from 'react';

import './App.css';
import Nav from './components/Nav'
import RecipeForm from './components/RecipeForm'
import UserIngredients from './components/UserIngredients'
import {UserContext} from './contexts/UserContext'
import 'semantic-ui-css/semantic.min.css'

function App() {

  const [ user, setUser] = useState({
    recipes: null,
    ingredients: []
  })

  return (
    <div className="App">
      <UserContext.Provider value = {[user, setUser]}>
          <Nav />
          <RecipeForm />
          <UserIngredients />
      </UserContext.Provider>
    </div>
  );
}

export default App;
