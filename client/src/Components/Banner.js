import React from "react";
import BannerCard from "./BannerCard";

const Banner = () => {
  return (
    <div className="px-4 lg:px-24 bg-teal-100 flex items-center">
      <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
        {/* {left side} */}
        <div className="md:w-1/2 space-y-8 h-full">
          <h2 className="text-5xl font-bold text-black leading-snug">
            Buy and Sell Your Books <span  className="text-blue-700">for the Best Prices</span>
          </h2>
          <p className="md:w-4/5">
            The term "leading snug" in CSS isn't a common or widely recognized
            term. However, the term "leading" in the context of typography
            refers to the vertical spacing between lines of text, sometimes
            called line height. "Snug" generally means close-fitting or tight.
            In CSS, if you're aiming for a snug or tight leading, you would use
            a relatively small line-height value to reduce the space between
            lines of text. This can be useful when you're trying to create a
            dense, compact layout.
          </p>
          <div>
            <input type="search" name="search" id="search" placeholder="Search a book" className="py-2 px-2 rounded-s-sm outline-none"/>
            <button className="bg-blue-700 px-6 py-2 font-medium text-white hover:bg-black transition-all ease-in duration-200">Search</button>
          </div>
        </div>

        {/* {right side} */}
        <div>
            <BannerCard/>
        </div>
      </div>
    </div>
  );
};

export default Banner;
