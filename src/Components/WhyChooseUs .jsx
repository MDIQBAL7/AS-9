import React from "react";
import {
  BadgeCheck,
  Truck,
  Wallet,
  Store,
} from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: BadgeCheck,
      title: "Trusted & Certified Toys",
      desc: "All toys are quality-checked and certified for child safety.",
    },
    {
      icon: Truck,
      title: "Fast Local Delivery",
      desc: "Quick and reliable delivery from your trusted local store.",
    },
    {
      icon: Wallet,
      title: "Affordable Prices",
      desc: "Best quality toys at prices every parent can afford.",
    },
    {
      icon: Store,
      title: "Local & Family Owned",
      desc: "Supporting a local toy store that cares about your children.",
    },
  ];

  return (
    <section className="py-16 bg-yellow-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Choose Us?
          </h2>
          <p className="mt-3 text-gray-600">
            We are more than a toy store — we care about safety, quality, and happiness.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Text */}
          <div className="space-y-6">
            {reasons.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex gap-4 items-start p-4 rounded-xl hover:bg-base-200 transition"
                >
                  <div className="bg-primary/10 text-primary p-3 rounded-full">
                    <Icon size={28} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src="https://png.pngtree.com/png-clipart/20231025/original/pngtree-challenging-gifted-kids-motivation-photo-png-image_13427305.png"
              alt="Kids playing with toys"
              className="w-full max-w-md rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
