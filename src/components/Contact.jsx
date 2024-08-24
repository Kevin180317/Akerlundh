import React from "react";

function Contact() {
  return (
    <div className="md:w-[80%] px-8 md:px-0 mx-auto">
      <div>
        <form className="mb-8">
          <h1 className="text-4xl mb-4 font-bold">Contact Form</h1>
          <div className="mb-4">
            <label htmlFor="name" className="text-xl">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-xl">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="text-xl">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-6 py-3 text-xl font-semibold text-white bg-yellow-500 rounded-md hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
