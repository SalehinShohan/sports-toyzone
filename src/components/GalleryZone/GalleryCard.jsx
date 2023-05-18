/* eslint-disable react/prop-types */
const GalleryCard = ({ gallery }) => {
    const {title, image, price, quantity, status} = gallery || {};
  return (
    <div className="card w-96 bg-base-100 shadow-2xl mt-10">
      <figure>
        <img className="w-10/12 rounded-xl"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>Price: {price}tk</p>
        <p>Quantity: {quantity}</p>
        <p>Type: {status}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
