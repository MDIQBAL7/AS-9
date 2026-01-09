import React from "react";
import { ShieldCheck, BookOpen, Puzzle, Leaf } from "lucide-react";
const EducationalValue = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: "100% Safe & Non-Toxic",
      desc: "All toys are made from child-safe, non-toxic materials.",
    },
    {
      icon: BookOpen,
      title: "Learning Through Play",
      desc: "Toys that help develop creativity, logic, and imagination.",
    },
    {
      icon: Puzzle,
      title: "Skill Development",
      desc: "Improve problem-solving, motor skills, and brain power.",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly Materials",
      desc: "Environment-friendly toys that are safe for kids & nature.",
    },
  ];
  return (
    <section className="bg-yellow-200 py-14 px-5">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Educational Value & Safety
          </h2>
          <p className="mt-3 text-gray-600">
            We believe toys should be fun, safe, and help children learn as they
            play.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-base-100 rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-primary/10 text-primary p-4 rounded-full">
                    <Icon size={32} />
                  </div>
                </div>

                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EducationalValue;
