import React from 'react';
//import { GroceryContext } from '../context/GroceryContext';
import '../App.css';
//import Moment from 'react-moment';
import moment from 'moment';

const GroceryItem = (props) => {
    const { groceries, grocery } = props;
    console.log(groceries);
    if (!grocery) {
        return null
    }
    const convertDate = (str) => {
        let date = new Date(str),
            mnth = ("0" + (date.getMonth() + 1)).slice(-2),
            day = ("0" + date.getDate()).slice(-2);
        console.log([date.getFullYear(), mnth, day].join("-"))
        // let covertedDate = [date.getFullYear(), mnth, day].join("-");
        let covertedDate = [date.getFullYear(), mnth, day].join("-");
        return moment(covertedDate, 'YYYYMMDD').fromNow();
        //return [date.getFullYear(), mnth, day].join("-");
    }
    return (
        <tr>
            <th scope="row"><img src={grocery.image} className="img-fluid rounded" id="tomato" alt={grocery.name} /></th>
            <td>{grocery.name}</td>
            <td>{grocery.qty}</td>
            {/* <td>{grocery.expiration}</td> */}
            <td>{convertDate(grocery.expiration)}</td>
            <td>{grocery.category}</td>
            <td><span ><i className="fas fa-pen"></i></span></td>
            <td><span ><i className="fas fa-trash"></i></span></td>
        </tr>


    )
}

export default GroceryItem;
