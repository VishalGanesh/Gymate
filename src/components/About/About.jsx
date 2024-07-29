import React from "react";

const features = [
  { icon: "path/to/biometric-icon.png", title: "Biometric Attendance" },
  { icon: "path/to/lockers-icon.png", title: "Lockers" },
  { icon: "path/to/parking-icon.png", title: "Parking Facility" },
  { icon: "path/to/diet-icon.png", title: "Diet Selection" },
  { icon: "path/to/nutrition-icon.png", title: "Sports Nutrition" },
  { icon: "path/to/wifi-icon.png", title: "Free Wifi" },
  { icon: "path/to/trainers-icon.png", title: "Personal Trainers" },
  { icon: "path/to/machines-icon.png", title: "All Imported Machineries" },
];

const FeatureCard = ({ icon, title }) => (
  <div className="flex flex-col items-center p-4 m-2 bg-gray-800 rounded-lg shadow-lg">
    <div className="w-16 h-16 mb-4">
      <img src={icon} alt={title} className="w-full h-full object-contain" />
    </div>
    <h3 className="text-white text-center">{title}</h3>
  </div>
);

const FeaturesGrid = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
    {features.map((feature) => (
      <FeatureCard key={feature.title} icon={feature.icon} title={feature.title} />
    ))}
  </div>
);

export default FeaturesGrid;
