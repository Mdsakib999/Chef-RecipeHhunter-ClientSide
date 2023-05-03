import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ChefDetails = () => {
  const { id } = useParams();
  const details = useLoaderData();
  console.log(details);

  return (
    <div className="w-[80%] mx-auto">
      <h1 className="text-5xl font-bold text-center mt-5">Chef's Details</h1>
      <div className="lg:flex gap-5 items-center my-10">
        <div className="lg:w-[50%]">
          <img className="h-[500px] w-[500px]" src={details.image}></img>
        </div>

        <div className="lg:w-[50%]">
          <h3 className="text-3xl font-bold">Name: {details.name}</h3>
          <div className="flex justify-between my-8">
            <div className="p-5 text-center rounded-xl bg-slate-100 shadow-lg">
              <p className="text-5xl text-orange-500">{details.Experience}</p>
              <p className="font-bold">Year's of Experience </p>
            </div>

            <div className=" p-5 text-center rounded-xl bg-slate-100 shadow-lg">
              <p className="text-5xl text-orange-500">{details.likes}</p>
              <p className="font-bold mt-1">Like's</p>
            </div>

            <div className=" p-5 text-center rounded-xl bg-slate-100 shadow-lg">
                <p className="text-5xl text-orange-500">{details.foodDetails.length}</p>
              <p className="font-bold">Total Recipe</p>
            </div>
          </div>

          <p className="text-lg">Bio: {details.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default ChefDetails;
