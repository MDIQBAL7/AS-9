import React, { useEffect } from "react";

// Sample purchased data
const purchasedData = [
  {
    id: 1,
    toyName: "Action Figure Hero",
    date: "2026-01-05",
    time: "10:30 AM",
  },
  {
    id: 2,
    toyName: "Puzzle Game",
    date: "2026-01-06",
    time: "2:15 PM",
  },
  {
    id: 3,
    toyName: "Educational Blocks",
    date: "2026-01-07",
    time: "11:45 AM",
  },
  {
    id: 4,
    toyName: "RC Car",
    date: "2026-01-08",
    time: "4:20 PM",
  },
];

const Shopping = () => {
  useEffect(() => {
      document.title = "Purchases | ToyTopia";
    }, []);
  return (
    <section className="py-12 bg-base-200">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">My Purchases</h2>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-xl shadow-lg">
            <thead className="bg-primary text-white">
              <tr>
                <th className="py-3 px-6 text-left">#</th>
                <th className="py-3 px-6 text-left">Toy Name</th>
                <th className="py-3 px-6 text-left">Purchase Date</th>
                <th className="py-3 px-6 text-left">Time</th>
              </tr>
            </thead>
            <tbody>
              {purchasedData.map((item, index) => (
                <tr
                  key={item.id}
                  className={`border-b ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <td className="py-3 px-6">{index + 1}</td>
                  <td className="py-3 px-6 font-medium">{item.toyName}</td>
                  <td className="py-3 px-6">{item.date}</td>
                  <td className="py-3 px-6">{item.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {purchasedData.length === 0 && (
          <p className="text-center text-gray-500 mt-6">
            You have not purchased any toys yet.
          </p>
        )}
      </div>
    </section>
  );
};

export default Shopping;
