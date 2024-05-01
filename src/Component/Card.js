import React, { useEffect, useState } from "react";
import axios from "axios";
const Card = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?page=1&results=10&seed=abc")
      .then((response) => {
        setUserData(response.data?.results[Math.floor(Math.random() * 10)]);
      });
  }, []);

  return (
    <>
      <div className="flex h-screen items-center justify-center bg-gradient-to-r from-purple-400 to-indigo-500">
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col hover:shadow-blue-400 transition duration-300 ease-in-out transform hover:scale-105 items-center gap-4">
          <img
            src={userData?.picture?.large}
            alt=""
            className="w-24 h-24 rounded-full border-4 border-purple-500 hover:border-blue-500"
          />
          <div className="text-center">
            <h2 className="text-2xl font-bold text-purple-800">
              {userData?.name?.first} {userData?.name?.last}
            </h2>
            <h3 className="text-lg text-gray-600">
              Gender: {userData?.gender}
            </h3>
            <h4 className="text-md text-gray-600">
              Phone.No. {userData?.phone}
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
