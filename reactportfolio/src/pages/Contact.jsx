import React from "react";

const contact = () => {
  return (
    <div className="h-screen flex justify-center items-center w-[100%]">
      <div className="h-[85%] w-[80%] flex justify-center items-center">
        <div className="h-[95%] w-[50%] quack1 rounded-lg flex flex-col justify-start items-center">
          <form className="w-[80%] text-white bg-transparent h-full flex justify-center text-base items-center flex-col gap-5">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              required
              className="h-[14%] rounded-md w-full bg-transparent active:border-black/20 active:border-2 border-black/20 border-2"
            />
            <input
              type="email"
              name="name"
              id="name"
              placeholder="Enter your e-mail"
              required
              className="h-[14%] rounded-md w-full bg-transparent border-black/20 border-2"
            />
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter subject"
              className="h-[14%] rounded-md w-full bg-transparent border-black/20 border-2"
            />
            <textarea
              placeholder="Enter your messege"
              rows={6}
              required
              className="rounded-md w-full bg-transparent border-black/20 border-2"
            />
            <button
              type="submit"
              className="w-full h-[10%] border-black/20 bg-blue-400 active:bg-transparent active:scale-75 rounded-md border-2"
            >
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default contact;
