import React, {useContext, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import RecipeForm from './components/RecipeForm'
import {UserContext} from './contexts/UserContext'

function App() {

  const [ user, setUser] = useState({
    recipes: null,
    ingredients: null
  })

  return (
    <div className="App">
      <UserContext.Provider value = {[user, setUser]}>
        <header className="App-header">
          <Header />
          <RecipeForm />
        </header>
      </UserContext.Provider>
    </div>
  );
}

export default App;
