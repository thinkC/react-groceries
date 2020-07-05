import React, { createContext, useState } from 'react';
//import uuid from 'uuid/v1';

//create context
export const GroceryContext = createContext();

//context Provider
const GroceryContextProvider = (props) => {
    const [groceries, setGroceries] = useState([
        {
            image: 'https://images.unsplash.com/photo-1513791053024-3b50799fdd7b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
            name: 'tomato',
            qty: 10,
            expiration: '5 days',
            category: 'vegetable',
            id: 1
        },
        {
            image: 'https://images.unsplash.com/photo-1589927986089-35812388d1f4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
            name: 'carrot',
            qty: 5,
            expiration: '35 days',
            category: 'vegetable',
            id: 2
        },
        {
            image: 'https://images.unsplash.com/photo-1589469224608-c84d02c71b94?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
            name: 'lettuce',
            qty: 20,
            expiration: '10 days',
            category: 'vegetable',
            id: 3
        },
        {
            image: 'https://images.unsplash.com/photo-1531191357516-0aa0289ab6c9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
            name: 'maize',
            qty: 20,
            expiration: '10 days',
            category: 'grain',
            id: 4
        },
    ]);
    const getRandomNumbers = () => {
        let randNum = Math.random() * 100;
        console.log(randNum)
        return randNum;
    }

    const addGrocery = (image, name, qty, expiration, category) => {
        setGroceries([...groceries, { image: image, name: name, qty: qty, expiration: expiration, category: category, id: getRandomNumbers() }])
    }

    const removeGrocery = (id) => {
        setGroceries(groceries.filter((grocery) => grocery.id !== id))
    };
    return (
        <GroceryContext.Provider value={{ groceries, addGrocery, removeGrocery }}>
            {props.children}
        </GroceryContext.Provider>
    )
}

export default GroceryContextProvider;