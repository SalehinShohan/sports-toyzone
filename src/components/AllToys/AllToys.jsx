/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useTitle from "../Hooks/useTitle";

const AllToys = () => {
  const [datas, setData] = useState([]);
  const [searchText, setSearchText] = useState("");
  useTitle('All Toys')

  useEffect(() => {
    fetch("https://sports-toyzone-server.vercel.app/allToys/ds")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handleSearch = () => {
    fetch(`https://sports-toyzone-server.vercel.app/getToyByText/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  };

  return (
    <div>
      <div className="p-2 text-center mb-10">
        <input
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          className="p-1 w-52 h-12 rounded-xl mr-3 bg bg-base-300 input input-bordered"
        />
        <button onClick={handleSearch} className="btn btn-outline">
          Search
        </button>
      </div>

      <div className="">
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
                <th>View Detail</th>
              </tr>
            </thead>
            <tbody>
              {datas?.map((data, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{data.title}</td>
                  <td>{data.status}</td>
                  <td>{data.sellerName}</td>
                  <td>{data.price} BDT</td>
                  <td>{data.quantity}</td>
                  <td>{data.description}</td>
                  <td>
                    <div className="card-actions justify-end">
                      <Link
                        to={`/toyInfo/${data._id}`}
                        className="btn btn-primary">
                        View Details
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllToys;
