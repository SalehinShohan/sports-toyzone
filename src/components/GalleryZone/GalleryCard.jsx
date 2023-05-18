/* eslint-disable react/prop-types */
const GalleryCard = ({ gallery }) => {
    const {name, img, price, rating} = gallery;
  return (
    <div className="card w-96 bg-base-100 shadow-2xl mt-10">
      <figure>
        <img className="w-10/12 rounded-xl"
          src={img}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Price: {price}k</p>
        <p>Rating: {rating} star</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
