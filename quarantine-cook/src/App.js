import React, {useContext, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
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
        <header className="App-header">
          <Header />
          <RecipeForm />
          <UserIngredients />
        </header>
      </UserContext.Provider>
    </div>
  );
}

export default App;
