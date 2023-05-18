/* eslint-disable react/jsx-key */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

const MyToys = () => {

    const {user} = useContext(AuthContext);
    const[toys, setToys] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myToys/${user?.email}`)
        .then(res=> res.json())
        .then(data => {
            setToys(data)
        })
    }, [user]);

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra w-full">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Type</th>
            <th>Saller Name</th>
            <th>Price</th>
            <th>Available Quantity</th>
            <th>Detail Description</th>
            <th>Edit</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          
            {toys?.map((toy, index) =>
                <tr>
                <td>{index + 1}</td>
                <td>{toy.title}</td>
                <td>{toy.status}</td>
                <td>{toy.sellerName}</td>
                <td>{toy.price} BDT</td>
                <td>{toy.quantity}</td>
                <td>{toy.description}</td>
              </tr>
            )}

          {/* <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
          </tr> */}
          
          
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;
