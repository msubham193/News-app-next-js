import React from "react";
import Image from "next/image";

const BigPost = () => {
  return (
    <div className="flex items-center justify-center mx-20 font-poppins">
      <div className="relative flex items-center justify-center w-[90%]">
        <img
          src={
            "https://media.cnn.com/api/v1/images/stellar/prod/230318154634-01-ecuador-earthquake-031823.jpg?c=16x9&q=w_800,c_fill"
          }
          alt="image"
          className="w-full h-[500px] object-cover rounded-md "
        />

        <div className="absolute bottom-[-50px] bg-white w-[70%] p-6 rounded-lg shadow-lg">
          <h1 className="text-gray-500 mb-4">
            Kaitlan Collins, Kristen Holmes, Paula Reid
          </h1>
          <h1 className="font-bold text-4xl mb-4">
            Trump says he expects to be arrested Tuesday as New York law
            enforcement prepares for possible indictment - CNN
          </h1>
          <p className="text-gray-500">
            Former President Donald Trump said Saturday he expects to be
            arrested in connection with the investigation by the Manhattan
            District Attorney next week
          </p>
        </div>
      </div>
    </div>
  );
};

export default BigPost;
