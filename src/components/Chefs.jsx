import { Button, Card } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const Chefs = () => {
  return (
    <div className="bg-slate-100 py-10">
      <h1 className="text-5xl font-bold text-center mt-5">
        Our world class Chefs
      </h1>
      <p className="text-center my-4">
        Meet with your super talented world class chefs.
      </p>

      <div className="w-[90%] mx-auto grid lg:grid-cols-4 gap-8 p-5">
        <div className="max-w-sm">
          <Card
            imgAlt="chefs picture"
            imgSrc="https://i.ibb.co/6857BPB/chef2.webp"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest
            </p>
            <Button className="w-[50%]" gradientDuoTone="pinkToOrange">
            Special Food
            </Button>
          </Card>
        </div>
        <div className="max-w-sm">
          <Card
          >
            <img className="h-[335px] w-[360px] rounded-lg" src="https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
            "></img>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest
            </p>
            <Button className="w-[50%]" gradientDuoTone="pinkToOrange">
            Special Food
            </Button>
          </Card>
        </div>
        <div className="max-w-sm">
          <Card
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="https://i.ibb.co/w0k8Sbb/chef1.webp"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest
            </p>
            <Button className="w-[50%]" gradientDuoTone="pinkToOrange">
            Special Food
            </Button>
          </Card>
        </div>
        <div className="max-w-sm">
          <Card
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="https://i.ibb.co/44Q3DTY/chef3.webp"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest
            </p>
            <Button className="w-[50%]" gradientDuoTone="pinkToOrange"> 
            Special Food
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Chefs;
