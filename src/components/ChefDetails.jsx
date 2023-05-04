import { Rate } from "antd";
import { Button } from "flowbite-react";
import { Link, useLoaderData, useParams } from "react-router-dom";




const ChefDetails = () => {
  const { id } = useParams();
  const details = useLoaderData();
  const recipe = details.foodDetails;

 
  console.log(details.foodDetails);

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
              <p className="text-5xl text-orange-500">
                {details.foodDetails.length}
              </p>
              <p className="font-bold">Total Recipe</p>
            </div>
          </div>

          <p className="text-lg">Bio: {details.bio}</p>
          <p></p>
        </div>
      </div>
      <h1 className="text-4xl font-bold text-center my-5">Recipe</h1>

      <div className="grid grid-cols-3 gap-16 my-16">
        {recipe.map((food) => (
          <div key={food.id} className=" bg-slate-100 rounded-lg hover:shadow-xl shadow-lg">
            <div className="w-[360px] h-[280px]">
              <img className="w-[100%] h-[100%] rounded-lg" src={food.foodImg}></img>
            </div>
            <p className="text-3xl font-semibold my-6 p-3">Recipe Name: {food.recipeName}</p>
            <div className="p-3 flex justify-between">
              <Link to={`/foodDetails/${food.id}`}>
              <Button className="w-[100%]" gradientDuoTone="pinkToOrange">
                View Details <i class="fa-solid fa-arrow-right ml-2 pt-1"></i>
              </Button>
              </Link>
              <p>
                <Rate disabled allowHalf defaultValue={food.ratings} tooltips={['Good','Good','Good','Good','Good']} ></Rate>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChefDetails;
