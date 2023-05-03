import { Button, Carousel } from "flowbite-react";
import React from "react";

const FeaturedFood = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold text-center">Our Featured Food</h1>
      <p className="text-center my-3">
        Food is any substance consumed by an organism for nutritional support
      </p>

      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96  mt-8 mb-10">
        <Carousel slideInterval={5000}>
          <div className="flex justify-center items-center gap-8 bg-black">
            <div className="w-[40%] text-white">
              <h2 className="font-bold text-5xl">Best Quality <span className="text-amber-600">ThaiFood</span></h2>
              <p className="my-4">
              Thai dishes are sweet, salty, spicy or sour. There are many dishes with thick noodles, vegetables, lettuce, and chicken, lamb, shrimp, or beef. Some dishes are more rice geared or contain fruits such as pineapple or papaya. It all depends on what part region of Thailand you're on. Thai food often pairs hot spices with sweet, light citrus flavors like lime and mango. The signature peanut sauce is somewhere between sweet and savory and adds depth to any dish. The layered flavors of Thai food make each dish feel completely unique and is what sets it apart from dishes in other Asian cuisines.
              </p>
              <Button gradientDuoTone="pinkToOrange">See All Food</Button>
            </div>
            <div className=" w-[40%]">
              <img className="h-96 w-[800px]" src="https://i.ibb.co/qC3gMrD/food2.jpg" alt="Food Picture" />
            </div>
          </div>
          <div className="flex justify-center items-center gap-8 bg-black">
            <div className="w-[40%] text-white">
              <h2 className="font-bold text-5xl">Best Quality <span className="text-amber-600">ThaiFood</span></h2>
              <p className="my-4">
              Thai dishes are sweet, salty, spicy or sour. There are many dishes with thick noodles, vegetables, lettuce, and chicken, lamb, shrimp, or beef. Some dishes are more rice geared or contain fruits such as pineapple or papaya. It all depends on what part region of Thailand you're on. Thai food often pairs hot spices with sweet, light citrus flavors like lime and mango. The signature peanut sauce is somewhere between sweet and savory and adds depth to any dish. The layered flavors of Thai food make each dish feel completely unique and is what sets it apart from dishes in other Asian cuisines.
              </p>
              <Button gradientDuoTone="pinkToOrange">See All Food</Button>
            </div>
            <div className=" w-[40%]">
              <img className="h-96 w-[800px]" src="https://i.ibb.co/7jt6Pmw/food4.jpg" alt="Food picture" />
            </div>
          </div>
          <div className="flex justify-center items-center gap-8 bg-black">
            <div className="w-[40%] text-white">
              <h2 className="font-bold text-5xl">Best Quality <span className="text-amber-600">ThaiFood</span></h2>
              <p className="my-4">
              Thai dishes are sweet, salty, spicy or sour. There are many dishes with thick noodles, vegetables, lettuce, and chicken, lamb, shrimp, or beef. Some dishes are more rice geared or contain fruits such as pineapple or papaya. It all depends on what part region of Thailand you're on. Thai food often pairs hot spices with sweet, light citrus flavors like lime and mango. The signature peanut sauce is somewhere between sweet and savory and adds depth to any dish. The layered flavors of Thai food make each dish feel completely unique and is what sets it apart from dishes in other Asian cuisines.
              </p>
              <Button gradientDuoTone="pinkToOrange">See All Food</Button>
            </div>
            <div className=" w-[40%]">
              <img className="h-96 w-[800px]" src="https://i.ibb.co/hyKVJ29/food3.jpg" alt="Food picture" />
            </div>
          </div>
          <div className="flex justify-center items-center gap-8 bg-black">
            <div className="w-[40%] text-white">
              <h2 className="font-bold lg:text-5xl">Best Quality <span className="text-amber-600">ThaiFood</span></h2>
              <p className="my-4">
              Thai dishes are sweet, salty, spicy or sour. There are many dishes with thick noodles, vegetables, lettuce, and chicken, lamb, shrimp, or beef. Some dishes are more rice geared or contain fruits such as pineapple or papaya. It all depends on what part region of Thailand you're on. Thai food often pairs hot spices with sweet, light citrus flavors like lime and mango. The signature peanut sauce is somewhere between sweet and savory and adds depth to any dish. The layered flavors of Thai food make each dish feel completely unique and is what sets it apart from dishes in other Asian cuisines.
              </p>
              <Button gradientDuoTone="pinkToOrange">See All Food</Button>
            </div>
            <div className=" w-[40%]">
              <img className="h-96 w-[800px]" src="https://i.ibb.co/SBCFdf1/food1.jpg" alt="Food Picture" />
            </div>
          </div>
          
        </Carousel>
      </div>
    </div>
  );
};

export default FeaturedFood;
