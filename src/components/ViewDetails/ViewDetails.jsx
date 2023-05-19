/* eslint-disable react/jsx-key */
import { useLoaderData, useParams } from "react-router-dom";

const ViewDetails = () => {
  const allData = useLoaderData();

  const { toyInfoId } = useParams();
  console.log(toyInfoId);

  const datas = allData.find((id) => id._id == toyInfoId);
  console.log(datas);

  return (
    <div className="lg:ml-96">
      <div className="card card-compact w-96 bg-base-100 shadow-2xl">
        <figure>
          <img className="w-10/12 rounded-xl" src={datas.image} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {datas.title}</h2>
          <p>Seller Name: {datas.sellerName}</p>
          <p>Seller Email: {datas.postedBy}</p>
          <p>Price: {datas.price} BDT</p>
          <p>Quantity: {datas.quantity}</p>
          <p>Description: {datas.description}</p>
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
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
