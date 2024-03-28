import React from "react";

const Loading = () => {
  return (
    <main className="min-h-screen">
      <div className="flex flex-col items-center pt-20">
        <div className="mb-8">
          <h1 className="text-4xl font-bold">Loading</h1>
        </div>

        <div
          className="
        md:grid md:grid-cols-2
        lg:grid lg:grid-cols-3 gap-4
      "
        >
          <div>
            <div className="flex flex-col justify-between mb-6 bg-base-100 min-h-[500px]">
              <div className=" w-96  shadow-xl ">
                <div className=" relative rounded-md">
                  <img className="rounded-md bg-white object-cover w-96 h-[300px]" />
                </div>
                <div className="p-4 ">
                  <div className="flex justify-between">
                    <h2 className="card-title bg-gray-700 rounded-full w-[200px]"></h2>
                  </div>
                  <p></p>
                </div>
              </div>
              <button></button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Loading;
