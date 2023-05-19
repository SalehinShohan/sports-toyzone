import { useEffect, useState } from "react";

const CustomerReview = () => {

  const [reviews, setReviews] = useState([]);
  useEffect( ()=> {
    fetch('review.json')
    .then(res => res.json())
    .then(data => {
        setReviews(data)
    })
  }, [])

  return (
    <div className="bg-base-100 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center mt-16">
          Customer Reviews
        </h2>
        <p className="text-center mt-5">Our Honorable Customer</p>
        <div className="mt-6 space-y-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className=" rounded-lg shadow-2xl mr-10 px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center ">
                  <div className="h-10 w-10 rounded-full overflow-hidden">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="h-full w-full object-cover transition duration-300 transform hover:scale-110"
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium ">
                      {review.name}
                    </h3>
                    <div className="flex mt-1">
                      {[...Array(review.rating)].map((_, index) => (
                        <svg
                          key={index}
                          className="h-5 w-5 text-yellow-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <span className="">{review.rating}/5</span>
              </div>
              <p className="mt-4">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
