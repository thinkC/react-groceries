import React, { useContext } from 'react';
import { GroceryContext } from '../context/GroceryContext';
import GroceryItem from '../components/GroceryItem'
import GroceryContextProvider from '../context/GroceryContext';

// const GroceryList = () => {
//     const { groceries } = useContext(GroceryContext);
//     console.log(groceries)
//     const groceryList = () => {
//         return groceries && groceries.map(grocery => {
//             return (
//                 <GroceryItem groceries={groceries} grocery={grocery} key={grocery.id} />
//             )
//         })
//     }


//     return (
//         <div className="container">

//             <GroceryContextProvider>
//                 <div className="row">

//                     <div className="col-md-12 col-lg-12">
//                         <table className="table table-striped">
//                             <thead>
//                                 <tr>
//                                     <th scope="col"><input type="text" /> <i className="fas fa-search fa-2x"></i></th>
//                                     <th scope="col">Name</th>
//                                     <th scope="col">Qty</th>
//                                     <th scope="col">Exp</th>
//                                     <th scope="col">Category</th>
//                                     <th scope="col">Edit</th>
//                                     <th scope="col">Delete</th>
//                                 </tr>
//                             </thead>

//                             <tbody>

//                                 <GroceryItem />
//                                 {groceryList()}
//                             </tbody>

//                         </table>

//                     </div>
//                 </div>



//             </GroceryContextProvider>

//         </div>
//     )
// }
// export default GroceryList;





const GroceryList = () => {
    const { groceries, clearGroceries } = useContext(GroceryContext);
    console.log(groceries)

    return groceries.length ? (
        <div className="container">

            <GroceryContextProvider>
                <div className="row">

                    <div className="col-md-12 col-lg-12">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col"><input type="text" /> <i className="fas fa-search fa-2x"></i></th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Qty</th>
                                    <th scope="col">Exp</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Edit</th>
                                    <th scope="col">Delete</th>
                                </tr>
                            </thead>

                            <tbody>

                                {groceries.map(grocery => {
                                    return <GroceryItem grocery={grocery} key={grocery.id} />
                                })}

                            </tbody>

                        </table>
                        <button onClick={clearGroceries} className="btn btn-success">Clear All</button>
                    </div>
                </div>



            </GroceryContextProvider>

        </div>
    ) : (

            <div className="container">
                No Groceries
            </div>
        )



}
export default GroceryList;