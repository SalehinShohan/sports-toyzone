import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

/* eslint-disable react/prop-types */
const GalleryCard = ({ gallery }) => {
  const { title, image, price, quantity, status, _id } = gallery || {};

  useEffect(() => {
    AOS.init({ once: true }); // Initialize AOS with options (optional)
  }, []);
  
  return (
    <div
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      data-aos-duration="1500"
      className="card w-96 bg-base-100 shadow-2xl mt-10">
      <figure>
        <img className="w-10/12 rounded-xl" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>Price: {price} BDT</p>
        <p>Quantity: {quantity}</p>
        <p>Type: {status}</p>

        <div className="rating rating-sm">
          <input
            type="radio"
            name="rating-7"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-7"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-7"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-7"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-7"
            className="mask mask-star-2 bg-orange-400"
            checked
          />
        </div>

        <div className="card-actions justify-end">
          <Link to={`/toyInfo/${_id}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
