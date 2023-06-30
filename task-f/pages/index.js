import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from the backend API
    axios
      .get("http://localhost:5000/api/data")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const id = 1;
  console.log( data)

  return (
    <>
      <h1 className="text-center font-bold text-2xl text-indigo-500">
        E-commerce Website
      </h1>

      <section className="h-screen w-full bg-gradient-to-br from-pink-50 to-indigo-100 p-8">
        <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10">
          {data?.products?.map((item) => (
            <>
              <Link
                href={{ pathname: "/product-detail", query: { id: item?.id } }}
                // href="/product-detail"
              >
                <div className="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden cursor-pointer">
                  <img
                    className="h-56 lg:h-60 w-full object-cover"
                    src={item?.image}
                    alt=""
                  />
                  <div className="p-3">
                    <span className="text-sm text-primary">{item?.rating}</span>
                    <h3 className="font-semibold text-xl leading-6 text-gray-700 my-2">
                      {item?.name}
                    </h3>
                    <p className="paragraph-normal text-gray-600">
                      {item?.description}
                    </p>
                  </div>
                </div>
              </Link>
            </>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
