/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import ShowAllData from "./ShowAllData";

const AllToys = () => {
  const [datas, setData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/allToys/ds")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handleSearch = () => {
    fetch(
      `http://localhost:5000/getToyByText/${searchText}`
    )
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

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-clos-2 gap-10">
        {datas.map((data) => (
          <ShowAllData key={data._id} data={data}></ShowAllData>
        ))}
      </div>
    </div>
  );
};

export default AllToys;
