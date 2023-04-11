import React from "react";

const CategoryComponent = ({ category }) => {
  const { category_logo, category_name, jobs_available } = category;
  return (
    <div className="space-y-2 rounded-lg bg-gray-100 p-8  hover:drop-shadow-2xl">
      <img src={category_logo} alt="" />
      <h2 className="text-xl font-semibold text-gray-800">{category_name}</h2>
      <p className="font-medium text-gray-700">{jobs_available}</p>
    </div>
  );
};

export default CategoryComponent;
