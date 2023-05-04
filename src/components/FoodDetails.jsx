import { Button } from "flowbite-react";
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const FoodDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const [details, setDetails] = useState(null);

  useEffect(() => {
    //   console.log(foodData)

    if (data) {
      const foodData = data.foodDetails;
      foodData.find((single) => {
        if (id == single.id) {
          setDetails(single);
          console.log(single);
        }
      });
    }
  }, [data]);

  return (
    <div className="w-[80%] mx-auto">
      <h1 className="text-4xl font-semibold text-center mt-8 mb-10">
        Food Details {details?.id}
      </h1>
      <dir className="">
        <div className="b w-[600px] h-auto mx-auto">
          <img className="w-[100%] h-[100%]" src={details?.foodImg}></img>
        </div>

        <div>
          <p className="text-3xl mt-8 mb-4">
            Recipe Name: {details?.recipeName}
          </p>
          <p className="my-2">Ingredients: {details?.ingredients}</p>
          <p>Cooking method: {details?.method}</p>
          <Button className="mt-5 mb-10" gradientDuoTone="pinkToOrange">
            Favourite
          </Button>
        </div>
      </dir>
    </div>
  );
};

export default FoodDetails;
