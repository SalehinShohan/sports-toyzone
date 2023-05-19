/* eslint-disable react/jsx-key */
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import UpdateToy from "../UpdateToy/UpdateToy";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [modalShow, setModalShow] = React.useState(false);
  const [control, setControl] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [user, control]);

  const handleSearch = () => {
    fetch(`http://localhost:5000/getToyByText/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  };

  const handleToyUpdate = (data) => {
    fetch(`http://localhost:5000/updateToy/${data?._id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
          setControl(!control);
        }
        console.log(result);
      });
  };

  return (
    <div className="overflow-x-auto">
      <div className="p-2 text-center mb-10">
        
        <input
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          className="p-1 w-52 h-12 rounded-xl mr-3"
        />
        <button onClick={handleSearch} className="btn btn-outline btn-ghost">
          Search
        </button>
      </div>

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
          {toys?.map((toy, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{toy.title}</td>
              <td>{toy.status}</td>
              <td>{toy.sellerName}</td>
              <td>{toy.price} BDT</td>
              <td>{toy.quantity}</td>
              <td>{toy.description}</td>
              <td>
                <UpdateToy
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  handleToyUpdate={handleToyUpdate}
                  toy={toy}></UpdateToy>
              </td>
              <td>
                <button className="btn btn-error">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;