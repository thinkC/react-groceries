import React, { useContext, useState } from 'react';
import { GroceryContext } from '../context/GroceryContext';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from 'react-router-dom';
//import { Redirect } from 'react-router-dom'

export default function AddGrocery() {
    const { addGrocery, groceries } = useContext(GroceryContext);
    const [name, setName] = useState('');
    const [qty, setQty] = useState('');
    const [expiration, setExpiration] = useState(new Date());
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');
    let history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, category, qty, expiration, image);
        //addGrocery(name, category, qty, expiration, image)
        addGrocery(image, name, qty, expiration, category)
        setName('');
        setCategory('');
        setQty('');
        setExpiration('');
        setImage('');
        console.log(groceries)
        //window.location('/')

        history.push('/')
        //props.history.push('/')
    }
    return (
        <div>
            <form onSubmit={handleSubmit}  >
                <div className="form-group">
                    <label htmlFor="Name" >Name</label>
                    <input type="text"
                        className="form-control"
                        id="" value={name}
                        onChange={(e) => { setName(e.target.value) }}
                        required
                    />

                </div>
                <div className="form-group">
                    <label htmlFor="Image" >Image</label>
                    <input type="text"
                        className="form-control"
                        id="" value={image}
                        onChange={(e) => { setImage(e.target.value) }}
                        required
                    />

                </div>
                <div className="form-group">
                    <label htmlFor="ChemicalName" >Quantity</label>
                    <input type="text"
                        className="form-control" id="" value={qty}
                        onChange={(e) => { setQty(e.target.value) }}
                        required
                    />

                </div>


                {/* <div className="form-group">
                    <div className="form-control">
                        <label htmlFor="ExpirationDate">Expiration</label>
                        <DatePicker selected={expiration}
                            onChange={(date) => { setExpiration(date) }}
                        required
                        />

                    </div>
                </div> */}
                {/* <div className="form-group">
                    <label htmlFor="ChemicalName" >Category</label>
                    <select class="custom-select mr-sm-2" id="">
                        <option selected>Choose...</option>
                        <option value="1">Vegetable</option>
                        <option value="2">Grain</option>
                        <option value="3">Milk</option>
                    </select>

                </div> */}

                <div className="form-group">
                    <label htmlFor="ChemicalName" >Category</label>
                    <input type="text"
                        className="form-control"
                        id="" value={category}
                        onChange={(e) => { setCategory(e.target.value) }}
                        required
                    />

                </div>

                <div className="form-group center">
                    <button type="submit" className="btn btn-primary">Add</button>
                </div>

            </form>
        </div>
    )
}
