import React from "react";

const ContactUs = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl p-4 m-4">ContactUs</h1>
      <form>
        <input className="ml-4 p-4 border-y-2 border-black" placeholder="enter your name"/>
        <input className="ml-4 p-4 border-y-2 border-black" placeholder="enter your age"/>
        <button className="ml-4 p-4 bg-red-300 border-green-200 border-[4px]">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
