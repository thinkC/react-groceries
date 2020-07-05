import React from 'react';
import GroceryList from '../components/GroceryList';
import { GroceryContext } from '../context/GroceryContext';
import '../App.css';

const GroceryItem = (props) => {
    const { groceries, grocery } = props;
    console.log(groceries);
    if (!grocery) {
        return null
    }

    return (
        <tr>
            <th scope="row"><img src={grocery.image} className="img-fluid rounded" id="tomato" alt={grocery.name} /></th>
            <td>{grocery.name}</td>
            <td>{grocery.qty}</td>
            {/* <td>{grocery.expiration}</td> */}
            <td>{grocery.category}</td>
            <td><span ><i className="fas fa-pen"></i></span></td>
            <td><span ><i className="fas fa-trash"></i></span></td>
        </tr>


    )
}

export default GroceryItem;
