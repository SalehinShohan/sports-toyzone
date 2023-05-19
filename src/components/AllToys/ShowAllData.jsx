/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ShowAllData = ({ data }) => {
  const { title, sellerName, status, price, quantity, _id } = data;
  return (
    <div className="card w-96 bg-base-100 shadow-2xl">
      <div className="card-body">
        <h2 className="card-title">Seller Name: {sellerName}</h2>
        <p>Toy Name: {title}</p>
        <p>Category: {status}</p>
        <p>Price: {price}</p>
        <p>Available Quantity: {quantity}</p>
        <div className="card-actions justify-end">
          <Link to={`/toyInfo/${_id}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShowAllData;
