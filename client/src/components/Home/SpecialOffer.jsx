import React, { useEffect, useState } from "react";

export default function SpecialOffer({ data }) {
  const [currIndex, setCurrIndex] = useState(0);

  const handleAutoScroll = () => {
    if (data.specialOffer.length - 1 === currIndex) {
      return setCurrIndex(0);
    } else {
      return setCurrIndex(currIndex + 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleAutoScroll();
    }, 3000);
    return () => clearInterval(interval);
  });

  const OfferItems = ({ item, index }) => {
    return (
      <div
        className="flex flex-row bg-gray-100 min-w-full gap-5 min-h-25"
        style={{ transform: `translate(-${currIndex * 100}%)` }}
      >
        <div>
          <img className="w-full h-full" src={item.offerImage} />
        </div>
        <div className="flex flex-col justify-center items-start w-[60%]">
          <p className="mb-6"> ________ Special Offers</p>
          <h1 className="font-bold font-sans text-4xl">{item.title}</h1>
          <p className="my-1">{item.description}</p>
          <div className="flex flex-row gap-2 bg-transparent mt-8">
            {item.brandImages.map((image) => (
              <img
                key={image}
                className="w-12 h-10 bg-transparent"
                src={image}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-row gap-4 h-64">
      <div className="flex flex-nowrap overflow-hidden w-[75%] h-full">
        {data.specialOffer.map((item, index) => (
          <OfferItems key={item.id} item={item} index={index} />
        ))}
      </div>
      <div className="flex justify-center items-center w-[25%] h-full">
        <img
          className="h-full w-full"
          src="https://th.bing.com/th/id/OIP.np-sUUMdnNbYIgWHDWeTIAHaHa?rs=1&pid=ImgDetMain"
        />
      </div>
    </div>
  );
}
