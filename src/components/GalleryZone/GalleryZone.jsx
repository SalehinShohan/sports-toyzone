import { useEffect, useState } from "react";
import GalleryCard from "./GalleryCard";

const GalleryZone = () => {
  const [galleries, setGalleries] = useState([]);
  const [activeTab, setActiveTab] = useState("sd");

  useEffect(() => {
    fetch(`http://localhost:5000/allToys/${activeTab}`)
      .then((res) => res.json())
      .then((data) => {
        setGalleries(data);

      });
  }, [activeTab]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <div>
        <h2 className="text-5xl text-center font-bold mt-10">
          Gallery ToyZone
        </h2>
      </div>

      <div className="tab-container text-center mt-10">
        <h2 className="text-5xl font-bold mb-10">Our Toys Category</h2>
        <div className="text-center w-full font-bold m-auto">
          <div className="tabs tabs-boxed w-80 mx-auto flex justify-center items-center">
            <div
              onClick={() => handleTabClick("sports")}
              className={`tab  sports text-white rounded-xl h-14 ${
                activeTab == "sports" ? " bg bg-red-500 text-white" : ""
              }`}>
              Sports Toy
            </div>
            <div
              onClick={() => handleTabClick("truck")}
              className={`tab  truck text-white rounded-xl h-14 ${
                activeTab == "truck" ? " bg bg-red-500 text-white" : ""
              }`}>
              Trucks Toy
            </div>
            <div
              onClick={() => handleTabClick("police")}
              className={`tab police text-white rounded-xl h-14 ${
                activeTab == "police" ? " bg bg-red-500 text-white" : ""
              }`}>
              Polices Toy
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-clos-2 gap-6">
        {galleries.map((gallery) => (
          <GalleryCard key={gallery._id} gallery={gallery}></GalleryCard>
        ))}
      </div>
    </div>
  );
};

export default GalleryZone;
