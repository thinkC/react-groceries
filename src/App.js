import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GroceryList from './components/GroceryList';
import Navbar from './components/Navbar';
import GroceryContextProvider from './context/GroceryContext';
import AddGrocery from './components/AddGrocery';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <GroceryContextProvider>
          <Navbar />
          <Route exact path="/" component={GroceryList} />
          <Route path="/add" component={AddGrocery} />
        </GroceryContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
