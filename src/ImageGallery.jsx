import React from "react";

export default function ImageGallery() {
  const images = [
    {
      src: "./images/image.jpg",
    },
    {
      src: "./images/back.jpg",
    },
    {
      src: "./images/image.jpg",
    },
    {
      src: "./images/back.jpg",
    },
    {
      src: "./images/image.jpg",
    },
    {
      src: "./images/back.jpg",
    },
    {
      src: "./images/image.jpg",
    },
    {
      src: "./images/back.jpg",
    },
    {
      src: "./images/image.jpg",
    },
    {
      src: "./images/back.jpg",
    },
    {
      src: "./images/image.jpg",
    },
    {
      src: "./images/back.jpg",
    },
    {
      src: "./images/image.jpg",
    },
    {
      src: "./images/back.jpg",
    },
    {
      src: "./images/image.jpg",
    },
    {
      src: "./images/image.jpg",
    },
    {
      src: "./images/image.jpg",
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-orange-500 font-light text-3xl mb-4">
        <i>EXPLORE</i>
      </h1>
      <div className="flex overflow-x-auto space-x-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={`Image ${index}`}
            className="flex-shrink-0 w-64 h-40 object-cover opacity-85 rounded"
          />
        ))}
      </div>
    </div>
  );
}
