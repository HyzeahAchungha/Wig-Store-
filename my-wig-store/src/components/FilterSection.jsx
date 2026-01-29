import React from "react";

const FilterSection = ({
  selectedType,
  setSelectedType,
  selectedColor,
  setSelectedColor,
  selectedLength,
  setSelectedLength
}) => {
 const types = ['All', 'Bob', 'Deep Wave', 'Bone Straight', 'Curly'];
  const colors = ['All', 'Black', 'Burgundy', 'Burnt Orange', 'Oxblood', 'Brown'];
  const lengths = ['All', '10"', '12"', '14"', '16"', '18"', '20"' , '8"'];

  const FilterButton = ({ active, onClick, label }) => (
    <button
      onClick={onClick}
      className={`block w-full text-left px-5 py-3 rounded-xl transition-all duration-200 ${
        active 
          ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow-md transform scale-105' 
          : 'bg-gray-50 text-gray-700 hover:bg-gray-100 hover:shadow-sm'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="space-y-8">
      <div>
        <h3 className="font-bold text-xl mb-4 text-gray-800 flex items-center gap-2">
          <span className="w-1 h-6 bg-gradient-to-b from-pink-500 to-purple-600 rounded-full"></span>
          Wig Type
        </h3>
        <div className="space-y-3">
          {types.map(type => (
            <FilterButton
              key={type}
              active={selectedType === type}
              onClick={() => setSelectedType(type)}
              label={type}
            />
          ))}
        </div>
      </div>

      <div className="border-t pt-8">
        <h3 className="font-bold text-xl mb-4 text-gray-800 flex items-center gap-2">
          <span className="w-1 h-6 bg-gradient-to-b from-pink-500 to-purple-600 rounded-full"></span>
          Color
        </h3>
        <div className="space-y-3">
          {colors.map(color => (
            <FilterButton
              key={color}
              active={selectedColor === color}
              onClick={() => setSelectedColor(color)}
              label={color}
            />
          ))}
        </div>
      </div>

      <div className="border-t pt-8">
        <h3 className="font-bold text-xl mb-4 text-gray-800 flex items-center gap-2">
          <span className="w-1 h-6 bg-gradient-to-b from-pink-500 to-purple-600 rounded-full"></span>
          Length
        </h3>
        <div className="space-y-3">
          {lengths.map(length => (
            <FilterButton
              key={length}
              active={selectedLength === length}
              onClick={() => setSelectedLength(length)}
              label={length}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSection;



