import { Trophy, ShieldCheck, PackageCheck, Headphones } from "lucide-react";

const features = [
  {
    icon: <Trophy size={60} className="text-black" />,
    title: "High Quality",
    description: "Crafted from top materials",
  },
  {
    icon: <ShieldCheck size={60} className="text-black" />,
    title: "Warranty Protection",
    description: "Over 2 years",
  },
  {
    icon: <PackageCheck size={60} className="text-black" />,
    title: "Free Shipping",
    description: "Order over 150 $",
  },
  {
    icon: <Headphones size={60} className="text-black" />,
    title: "24 / 7 Support",
    description: "Dedicated support",
  },
];

const Feature= () => {
  return (
    <div className="bg-[#FAF5EE] py-8  ">
      <div className="max-w-6xl mx-auto flex justify-between items-center space-x-6 px-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-4">
            {feature.icon}
            <div>
              <h3 className="text-lg font-bold text-black">{feature.title}</h3>
              <p className="text-gray-500 text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
