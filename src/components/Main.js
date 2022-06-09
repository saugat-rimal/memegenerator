import React, { useState } from "react";
import memesData from "./memesData";

export default function Main() {
  const [memeImage, setMemeImage] = useState(" ");

  function getMemeImage() {
    const memeElement = memesData.data.memes;
    const randomnumber = Math.floor(Math.random() * memeElement.length);
    const url = memeElement[randomnumber].url;
    setMemeImage(url);
  }

  return (
    <>
      <main className="container mx-auto flex justify-center items-center sm:bg-slate-300 my-20 md:my-32 rounded-md lg:max-w-3xl  sm:shadow-xl sm:shadow-gray-400/50">
        <div className=" ">
          <h2
            className="font-bold text-xl md:text-2xl text-center my-8  drop-shadow-4xl 
        text-transparent  bg-clip-text bg-gradient-to-br from-indigo-600 via-purple-500 to-indigo-600"
          >
            {" "}
            Generate Your Favourite Meme Now
          </h2>
          <div className="mb-9 flex flex-col gap-4 justify-center ">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                className="py-2 p-3 bg-slate-200 sm:bg-white md:w-2/4 rounded sm:rounded-none"
                type="text"
                placeholder="Top text"
              />
              <input
                className="py-2  p-3 bg-slate-200 sm:bg-white md:w-2/4 rounded sm:rounded-none"
                type="text"
                placeholder="Bottom text"
              />
            </div>
            <div className="text-center mt-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 rounded-md shadow-md hover:drop-shadow-xl hover:shadow-indigo-300/50 text-white font-semibold ">
              <button
                className="drop-shadow-lg  py-2"
                type="submit"
                onClick={getMemeImage}
              >
                Get a new meme image 🖼
              </button>
            </div>
          </div>
        </div>
      </main>

      <div className="container mx-auto flex justify-center items-center mb-32 px-8  ">
        <img
          src={memeImage}
          width=""
          className="lg:w-3/6	 px-12 sm:px-0 rounded-md drop-shadow-xl sm:border-2 sm:border-indigo-500/75  sm:border-dotted"
        />
      </div>
    </>
  );
}
