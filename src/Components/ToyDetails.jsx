import React, { useEffect } from "react";
import { useLoaderData, useParams } from "react-router";
import { ToastContainer, toast } from "react-toastify";

const ToyDetails = () => {
  const notify = () => toast("Try succesfully Sent!");
  const data = useLoaderData();
  const { detailsid } = useParams();
  const id = Number(detailsid);
  console.log("this is parama", detailsid);
  const toy = data.find((singleData) => singleData.toyId === id);

  useEffect(() => {
    document.title = "Details | ToyTopia";
  }, []);

  return (
    <div className="bg-yellow-200">
      {toy ? (
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
              {/* Image Section */}
              <div className="bg-white rounded-2xl shadow-lg p-6 flex justify-center">
                <img
                  src={toy.pictureURL}
                  alt={toy.toyName}
                  className="w-full max-w-md rounded-xl object-cover"
                />
              </div>

              {/* Details Section */}
              <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4">
                <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                  {toy.subCategory}
                </span>

                <h2 className="text-3xl font-bold">{toy.toyName}</h2>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="rating rating-sm">
                    {[...Array(5)].map((_, i) => (
                      <input
                        key={i}
                        type="radio"
                        className="mask mask-star-2 bg-warning"
                        checked={i < Math.round(toy.rating)}
                        readOnly
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">
                    ({toy.rating} rating)
                  </span>
                </div>

                {/* Price */}
                <p className="text-2xl font-semibold text-primary">
                  ${toy.price}
                </p>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {toy.description}
                </p>

                {/* Stock */}
                <p className="text-sm">
                  <span className="font-medium">Available:</span>{" "}
                  {toy.availableQuantity} pieces
                </p>

                {/* Seller Info */}
                <div className="border-t pt-4 text-sm space-y-1">
                  <p>
                    <span className="font-medium">Seller:</span>{" "}
                    {toy.sellerName}
                  </p>
                  <p>
                    <span className="font-medium">Email:</span>{" "}
                    {toy.sellerEmail}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex gap-4 pt-4">
                  <button className="btn btn-outline flex-1">Try Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="hero">
            <div className="hero-content flex-col">
              <div className="text-center lg:text-left"></div>
              <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body ">
                  <fieldset className="fieldset ">
                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input
                      type="password"
                      className="input"
                      placeholder="Password"
                    />

                    <button onClick={notify} className="btn btn-neutral mt-4">
                      Try Now <ToastContainer />
                    </button>
                  </fieldset>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <p>No toy found</p>
      )}
    </div>
  );
};

export default ToyDetails;
