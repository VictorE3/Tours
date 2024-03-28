"use client";

import Tour from "@/components/Tour";
import React, { useEffect, useState } from "react";
import { connectToDB } from "@/lib/connect";
import tour from "@/lib/definitions";
const url = "http://localhost:3000/api";

const Home = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTours = async () => {
    try {
      const response = await fetch(url, { mode: "no-cors" });
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const deleteTour = (id: number) => {
    const newTours = tours.filter((tour, index) => index !== id);
    setTours(newTours);
  };

  if (loading) {
    return (
      <main className="min-h-screen">
        <div className="flex flex-col items-center pt-20">
          <div className="mb-8">
            <h1 className="text-4xl font-bold">Tours</h1>
          </div>

          <div
            className="
          md:grid md:grid-cols-2
          lg:grid lg:grid-cols-3 gap-4
        "
          >
            <div
              role="status"
              className=" p-4 mb-6 border flex flex-col justify-between min-h-[500px] border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
            >
              <div>
                <div className="flex items-center justify-center w-96 h-[300px] mb-4 bg-gray-300 rounded dark:bg-gray-700">
                  <svg
                    className="w-10 h-10 text-gray-200 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 20"
                  >
                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                  </svg>
                </div>

                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </div>

              <span className="sr-only">Loading...</span>
              <div className="h-5 w-full bg-gray-200 dark:bg-gray-700 rounded-full"></div>
            </div>

            <div
              role="status"
              className=" p-4 mb-6 border flex flex-col justify-between min-h-[500px] border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
            >
              <div>
                <div className="flex items-center justify-center w-96 h-[300px] mb-4 bg-gray-300 rounded dark:bg-gray-700">
                  <svg
                    className="w-10 h-10 text-gray-200 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 20"
                  >
                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                  </svg>
                </div>

                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </div>

              <span className="sr-only">Loading...</span>
              <div className="h-5 w-full bg-gray-200 dark:bg-gray-700 rounded-full"></div>
            </div>
            <div
              role="status"
              className=" p-4 mb-6 border flex flex-col justify-between min-h-[500px] border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
            >
              <div>
                <div className="flex items-center justify-center w-96 h-[300px] mb-4 bg-gray-300 rounded dark:bg-gray-700">
                  <svg
                    className="w-10 h-10 text-gray-200 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 20"
                  >
                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                  </svg>
                </div>

                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </div>

              <span className="sr-only">Loading...</span>
              <div className="h-5 w-full bg-gray-200 dark:bg-gray-700 rounded-full"></div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <div className="flex flex-col items-center pt-20">
        <div className="mb-8">
          <h1 className="text-4xl font-bold">Tours</h1>
        </div>

        <div
          className="
          md:grid md:grid-cols-2
          lg:grid lg:grid-cols-3 gap-4
        "
        >
          {tours.map((tour: tour, index: number) => {
            return (
              <Tour
                key={index}
                tour={tour}
                index={index}
                deleteTour={deleteTour}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Home;
