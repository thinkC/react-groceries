import React, { createContext, useState } from 'react';
import { v4 } from 'uuid';

//create context
export const GroceryContext = createContext();

//context Provider
const GroceryContextProvider = (props) => {
    const [groceries, setGroceries] = useState([
        {
            image: 'https://images.unsplash.com/photo-1513791053024-3b50799fdd7b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
            name: 'tomato',
            qty: 10,
            expiration: Date.now(),
            category: 'vegetable',
            id: 0.12654367
        },
        {
            image: 'https://images.unsplash.com/photo-1589927986089-35812388d1f4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
            name: 'carrot',
            qty: 5,
            expiration: 'Thu Jul 20 2020 12:55:58 GMT+0100 (West Africa Standard Time)',
            category: 'vegetable',
            id: 0.12656547
        },
        {
            image: 'https://images.unsplash.com/photo-1589469224608-c84d02c71b94?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
            name: 'lettuce',
            qty: 20,
            expiration: 'Thu Jul 30 2020 12:55:58 GMT+0100 (West Africa Standard Time)',
            category: 'vegetable',
            id: 0.12656767
        },
        {
            image: 'https://images.unsplash.com/photo-1531191357516-0aa0289ab6c9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
            name: 'maize',
            qty: 20,
            expiration: Date.now(),
            category: 'grain',
            id: 0.12650915
        },
    ]);

    const addGrocery = (image, name, qty, expiration, category) => {
        setGroceries([...groceries, { image: image, name: name, qty: qty, expiration: expiration, category: category, id: v4() }])
    }


    const removeGrocery = (id) => {
        //console.log(id)
        //setGroceries(groceries.filter((grocery) => grocery.id !== id))
        //console.log(id)
        //console.log(groceries)

        let removedGroceries = groceries.filter(grocery => grocery.id !== id);
        console.log(removedGroceries)


        setGroceries(removedGroceries)
        console.log(groceries)

    };

    // const removeGrocery = (index) => {
    //     const newGroceries = [...groceries]
    //     newGroceries.splice(index, 1)
    //     setGroceries(newGroceries)
    //     console.log(newGroceries)

    // }

    const clearGroceries = () => {
        //console.log('all cleared!')
        setGroceries([])
    }
    return (
        <GroceryContext.Provider value={{ groceries, addGrocery, removeGrocery, clearGroceries }}>
            {props.children}
        </GroceryContext.Provider>
    )
}

export default GroceryContextProvider;