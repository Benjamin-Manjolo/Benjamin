import React from "react";
import ImageGallerry from "./ImageGallery";
import Pansi from "./Pansi";
export default function App() {
  return (
    <React.Fragment className="flex justify-center">
      <div className="bg-gray-50 rounded-1xl flex flex-col h-auto w-auto p-4">
        <h1 className="font-normal">BENJAMIN MANJOLO</h1>
        <p className="font-light md:text-red-700">
          I am Benjamin Manjolo and i have skills in graphic designing, Web
          development and software engeenering.
          <br />
          <span className="font-extralight font-thin text-green-600 text-[12px]">
            <i>"with certifications from University of Malawi".</i>
          </span>
        </p>
      </div>
      <ImageGallerry />
      <Pansi />
    </React.Fragment>
  );
}
