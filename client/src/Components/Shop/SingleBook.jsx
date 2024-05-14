import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleBook = () => {
  const { title, imageURL } = useLoaderData();

  return (
    <div className="mt-24 px-4 lg:px-24">
      <img src={imageURL} alt="" className="h-96"/>
      <h2>{title}</h2>
    </div>
  );
};

export default SingleBook;
