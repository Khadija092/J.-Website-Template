import React, { useState, useEffect } from "react";

const Slider2 = () => {
  const products = [
    {
      img: "https://www.junaidjamshed.com/media/catalog/product/1/7/1703_1__1.jpg",
      title: "Purple Lawn Embroidered Unstitched 2PC",
      price: "PKR 3,352.00",
      oldPrice: "PKR 4,190.00",
    },
    {
      img: "https://www.junaidjamshed.com/media/catalog/product/2/4/24-7046_3_.jpg",
      title: "Multicolor Cambric Printed Unstitched 3PC",
      price: "PKR 3,912.00",
      oldPrice: "PKR 4,890.00",
    },
    {
      img: "https://www.junaidjamshed.com/media/catalog/product/2/3/23-430_3_.jpg",
      title: "Off White Slub Jacquard Unstitched 3PC",
      price: "PKR 6,632.00",
      oldPrice: "PKR 8,290.00",
    },
    {
      img: "https://www.junaidjamshed.com/media/catalog/product/1/7/1728_3__1.jpg",
      title: "Green Dobby Printed Unstitched 2PC",
      price: "PKR 2,792.00",
      oldPrice: "PKR 3,490.00",
    },
    {
      img: "https://www.junaidjamshed.com/media/catalog/product/1/7/1703_1__1.jpg",
      title: "Blue Embroidered Lawn Unstitched 2PC",
      price: "PKR 4,132.00",
      oldPrice: "PKR 5,290.00",
    },
    {
      img: "https://www.junaidjamshed.com/media/catalog/product/2/4/24-7046_3_.jpg",
      title: "Yellow Printed Cambric Unstitched 3PC",
      price: "PKR 3,512.00",
      oldPrice: "PKR 4,790.00",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(4); // Default to 4 items per slide

  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth < 768) {
        setItemsPerSlide(2); // Show 2 items on smaller screens
      } else {
        setItemsPerSlide(4); // Show 4 items on larger screens
      }
    };

    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);

    return () => {
      window.removeEventListener("resize", updateItemsPerSlide);
    };
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  const visibleProducts = [
    ...products.slice(currentIndex, currentIndex + itemsPerSlide),
    ...products.slice(0, Math.max(0, currentIndex + itemsPerSlide - products.length)),
  ].slice(0, itemsPerSlide);

  return (
    <div className="flex justify-center items-center">
      <div className="relative w-4/5">
        {/* Carousel */}
        <div className="flex overflow-hidden">
          {visibleProducts.map((product, index) => (
            <div
              key={index}
              className={`flex flex-col items-center p-2 ${
                itemsPerSlide === 2 ? "w-1/2" : "w-1/4"
              }`} // Adjust width based on items per slide
            >
              <div className="relative">
                <img
                  src={product.img}
                  alt={product.title}
                  className="h-48 w-full object-contain"
                />
                <div className="absolute bottom-1 right-2 mb-2 mr-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  20% Off
                </div>
              </div>
              <div className="mt-2 text-center">
                <p className="text-xs mb-0">{product.title}</p>
                <p className="font-bold text-red-500 text-left text-sm mb-0">
                  {product.price}
                </p>
                <p className="line-through font-bold text-left text-gray-500 text-sm">
                  {product.oldPrice}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 -left-12 transform -translate-y-1/2 bg-gray-200 rounded-full p-2"
        >
          ❮
        </button>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute top-1/2 -right-12 transform -translate-y-1/2 bg-gray-200 rounded-full p-2"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default Slider2;