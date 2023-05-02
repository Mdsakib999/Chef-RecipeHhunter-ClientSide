import { Button } from "flowbite-react";
import React from "react";
import FeaturedFood from "./FeaturedFood";
import ContactPage from "./ContactPage";
import Chefs from "./Chefs";

const Home = () => {
  return (
    <div>
      <div className="relative">
        <img
          className="w-[100%] lg:mt-[-40px]"
          src="https://i.ibb.co/SJX5KV8/header-bg-jpg.webp"
        ></img>

        <div className="lg:w-[40%] absolute top-8 lg:top-56 lg:left-20 text-white ml-2 lg:ml-0">
          <p className="lg:text-3xl font-bold">We provide</p>
          <h1 className="lg:text-6xl font-bold">
            Best quality of <span className="text-orange-500">ThaiFood</span> in
            the Town
          </h1>
          <p className="lg:text-2xl font-semibold lg:my-4">
            "Your diet is a bank account. Good food choices are good
            investments" - Bethenny Frankel.{" "}
          </p>
          <Button gradientDuoTone="pinkToOrange">See All Food</Button>
        </div>
      </div>

      {/* food category */}

      <div className="grid lg:grid-cols-4 gap-4 w-[80%] mx-auto lg:mt-32 mt-12 mb-20">
            <div className="p-3 m-3 hover:scale-110 hover:shadow-xl bg-slate-100 rounded-md">
                <img className="w-[60%]" src="https://i.ibb.co/82Lm2B0/fast-food.png" alt="" />
                <h1 className="text-2xl font-bold my-3 ">Healthiest Fast-Food</h1>
                <p>Good food will help you to lead a healthy and happy life.</p>
            </div>
            <div className="p-3 m-3 hover:scale-110 hover:shadow-xl bg-slate-100 rounded-md">
                <img className="w-[60%]" src="https://i.ibb.co/rtW9LSX/diet-1.png" alt="" />
                <h1 className="text-2xl font-bold my-3 ">Thai Lunch</h1>
                <p>Good food will help you to lead a healthy and happy life.</p>
            </div>
            <div className="p-3 m-3 hover:shadow-xl hover:scale-110 bg-slate-100 rounded-md">
                <img className="w-[60%]" src="https://i.ibb.co/y0gwHHN/bibimbap.png" alt="" />
                <h1 className="text-2xl font-bold my-3 ">Rich Quality Buffet</h1>
                <p>Good food will help you to lead a healthy and happy life.</p>
            </div>
            <div className="p-3 m-5 hover:scale-110 hover:shadow-xl bg-slate-100 rounded-md">
                <img className="w-[60%]" src="   https://i.ibb.co/XLckMc8/diet.png" alt="" />
                <h1 className="text-2xl font-bold my-3 ">Special Juice</h1>
                <p>Good food will help you to lead a healthy and happy life.</p>
            </div>
      </div>


      <FeaturedFood></FeaturedFood>

      <Chefs></Chefs>

      <ContactPage></ContactPage>
    </div>
  );
};

export default Home;
