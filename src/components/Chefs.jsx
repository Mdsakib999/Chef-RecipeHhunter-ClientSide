import { Button, Card } from "flowbite-react";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Chefs = () => {
  const [foodDatas, setFoodData] = useState([]);

  useEffect(() => {
    fetch("https://b7a10-chef-recipe-hunter-server-side-mdsakib999.vercel.app/viewFood")
      .then((res) => res.json())
      .then((data) => setFoodData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="bg-slate-100 py-10">
      <h1 className="text-5xl font-bold text-center mt-5">
        Our world class Chefs
      </h1>
      <p className="text-center my-4">
        Meet with your super talented world class chefs.
      </p>

      <div className="w-[80%] mx-auto gap-8 p-5 grid lg:grid-cols-3">
        {foodDatas.map((foodData) => (
          <Card
            key={foodData.id}
            imgAlt="chefs picture"
            imgSrc={foodData.image}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {foodData.name}
            </h5>
            <div className="flex justify-between font-normal text-gray-700 dark:text-gray-400">
              <p>Experience: {foodData.Experience} Year's</p>
              <p>
                <i class="fa-solid fa-thumbs-up mr-2 text-xl hover:text-blue-600"></i>
                {foodData.likes}
              </p>
            </div>
            <Link to={`/chefDetails/${foodData.id}`}>
              <Button className="w-[50%]" gradientDuoTone="pinkToOrange">
                View Recipes <i class="fa-solid fa-arrow-right ml-2 pt-1"></i>
              </Button>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Chefs;
