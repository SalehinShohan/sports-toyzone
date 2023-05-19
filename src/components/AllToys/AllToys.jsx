/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import ShowAllData from "./ShowAllData";

const AllToys = () => {
  const [datas, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allToys/ds")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return <div>
        {
            datas.map(data => <ShowAllData
                key={data._id}
                data={data}
            ></ShowAllData> )
        }
  </div>;
};

export default AllToys;
