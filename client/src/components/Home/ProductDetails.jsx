import React from "react";

export default function ProductDetails({ data }) {
  const ProductItem = ({ item, index }) => {
    return (
      <div className="flex flex-col justify-evenly border border-gray-300 p-3">
        <img className="w-full h-[80%]" src={item.productImage} />
        <p>{item.productName}</p>
        <div className="flex justify-between items-center">
          <div className="flex gap-[5%]">
            <div className="h-2 w-2 bg-slate-600" />
            <div className="h-2 w-2 bg-gray-400" />
            <div className="h-2 w-2 bg-neutral-400" />
          </div>
          <b className="">${item.price}</b>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-5 h-[50%]">
      <div className="flex">
        <p className="text-2xl">
          Top <b>Products</b>
        </p>
        <p className="ml-4 self-center text-gray-500 text-sm">View all</p>
      </div>
      <div className="flex flex-row gap-5 h-[80%] overflow-x-auto whitespace-nowrap">
        {data.productsData.map((item, index) => (
          <ProductItem key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}
