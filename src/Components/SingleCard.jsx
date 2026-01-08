import React from "react";
import { useLoaderData } from "react-router";
const SingleCard = () => {
  const data = useLoaderData();
  const { pictureURL, toyName, rating, availableQuantity, price } = data;
  return (
    <div className="bg-yellow-200">
      <h1 className="pt-17 mb-16 border-b-4 pb-3 mx-auto w-75  text-center text-5xl font-bold">Popular Toys</h1>
      <div className="bg-yellow-200 grid grid-cols-3 gap-4 justify-between items-center max-w-6xl mx-auto">
        {data.map((card) => {
          return (
            <div className="card  bg-base-100 shadow-lg hover:shadow-xl transition duration-300">
              {/* Image */}
              <figure className="h-56 overflow-hidden">
                <img
                  src={card.pictureURL}
                  alt={card.toyName}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </figure>

              {/* Card Body */}
              <div className="card-body">
                <h2 className="card-title text-lg font-semibold">
                  {card.toyName}
                </h2>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="rating rating-sm">
                    {[...Array(5)].map((_, i) => (
                      <input
                        key={i}
                        type="radio"
                        className="mask mask-star-2 bg-warning"
                        checked={i < Math.round(rating)}
                        readOnly
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">({card.rating})</span>
                </div>

                {/* Info */}
                <div className="text-sm space-y-1 mt-2">
                  <p>
                    <span className="font-medium">Available:</span>{" "}
                    {card.availableQuantity} pcs
                  </p>
                  <p>
                    <span className="font-medium">Price:</span>{" "}
                    <span className="text-primary font-semibold">
                      ${card.price}
                    </span>
                  </p>
                </div>

                {/* Action */}
                <div className="card-actions mt-4">
                  <button className="btn btn-primary btn-sm w-full">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SingleCard;
