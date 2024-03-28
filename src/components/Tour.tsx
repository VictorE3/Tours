import React from "react";
import tour from "@/lib/definitions";

const Tours = ({
  tour,
  deleteTour,
  index,
}: {
  tour: tour;
  deleteTour: (id: number) => void;
  index: number;
}) => {
  const { img, name, info } = tour;
  return (
    <div className="flex flex-col justify-between mb-6 bg-base-100 min-h-[500px]">
      <div className=" w-96  shadow-xl ">
        <div className=" relative rounded-md">
          <img
            src={img}
            alt={name}
            className="rounded-md object-cover w-96 h-[300px]"
          />
        </div>
        <div className="p-4 ">
          <div className="flex justify-between">
            <h2 className="card-title">{name}</h2>
          </div>
          <p>{info}</p>
        </div>
      </div>
      <button
        className="btn w-full bg-base-300 hover:bg-base-100 mb-0"
        onClick={() => deleteTour(index)}
      >
        Not interest
      </button>
    </div>
  );
};

export default Tours;
