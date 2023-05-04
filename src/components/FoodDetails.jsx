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
    
  );
};

export default FoodDetails;
