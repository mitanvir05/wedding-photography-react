import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="px-4 py-32 mx-auto max-w-7xl">
      <div className="grid items-center w-full grid-cols-1 gap-10 mx-auto md:w-4/5 lg:grid-cols-2 xl:gap-32">
        <div>
          <p className="mb-2 text-xs font-semibold tracking-wide text-gray-500 uppercase">
            Error 404
          </p>

          <Link
            to="/"
            className="w-full mb-2 py-2 px-3 text-white mt-3 bg-cyan-600 sm:w-auto sm:mb-0"
          >
            Back to homepage
          </Link>
        </div>
        <div>
          <div className="w-full h-full bg-gray-200 rounded-lg">
            <img
              src="https://thumbs.dreamstime.com/b/%C3%B0%C2%BF%C3%B0%C2%B5%C3%B1%E2%80%A1%C3%B0%C2%B0%C3%B1%E2%80%9A%C3%B1%C5%93-134036857.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
