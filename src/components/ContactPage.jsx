import { Button } from "flowbite-react";
import React from "react";

const ContactPage = () => {
  return (
    <div>
      <div id="contact" className="flex justify-center">
        <form className="w-full max-w-lg">
          <h2 className="text-4xl font-bold my-8 text-center">Contact Us</h2>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="name"
                type="text"
                placeholder="John Doe"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                Email
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="email"
                type="email"
                placeholder="johndoe@example.com"
                
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="subject"
              >
                Subject
              </label>
              <input
                className=" block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight  focus:bg-white"
                id="subject"
                type="text"
                placeholder="Enter the subject of your message"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea 
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded pt-3 pb-12 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="message"
                placeholder="Enter your message"
              ></textarea>
            </div>
          </div>
          <div className="flex justify-end mb-10">
          <Button gradientDuoTone="pinkToOrange">Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
