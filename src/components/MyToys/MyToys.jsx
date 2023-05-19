/* eslint-disable react/jsx-key */
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import UpdateToy from "../UpdateToy/UpdateToy";
import Swal from "sweetalert2";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);
  const [control, setControl] = useState(false);

  useEffect(() => {
    fetch(`https://sports-toyzone-server.vercel.app/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [user, control]);

  const handleToyUpdate = (data) => {

    console.log(data)

    Swal.fire({
      icon: "success",
      title: "Updated Successful!",
      text: "You have successfully updated.",
      confirmButtonText: "OK",
    });

    fetch(`https://sports-toyzone-server.vercel.app/updateToy/${data?._id}`, {
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

  const handleDelete = (id) => {
    const proceed = confirm('Are You sure you want to delete');
    

    if(proceed){
        fetch(`https://sports-toyzone-server.vercel.app/deleteToy/${id}`, {
          method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if(data.deletedCount > 0){
            alert('Deleted successfully done')
            const remaining = toys.filter((toy) => toy._id !== id);
            setToys(remaining);
          }
        })
    }
  } 

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
                <button onClick={() => handleDelete(toy._id)} className="btn btn-error">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;
