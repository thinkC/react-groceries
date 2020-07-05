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
        {/* <div className="row">
        <div className="col-md-8 col-lg-8" id="banner">
          <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9" />
        </div>
        <div className="col-md-4 col-lg-4">
          <h1 className="mt-3">Groceries Inventory</h1>
        </div>
      </div>

      <GroceryContextProvider>

      </GroceryContextProvider> */}

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
