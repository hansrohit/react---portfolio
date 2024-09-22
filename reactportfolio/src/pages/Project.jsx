import React from "react";
import pro1 from "../assets/img/pro1.png";
import pro2 from "../assets/img/pro2.png";
import pro3 from "../assets/img/pro3.png";

const project = () => {
  const arr = [
    {
      photo: pro1,
      title: "Quiz App",
      description:
        "A simple and engaging quiz app built with Flutter, designed to test your knowledge across basic flutter topics. This is my first Flutter project. Runs seamlessly on both Android and iOS.",
      source: "https://github.com/hansrohit/simple_quiz-flutter-",
    },
    {
      photo: pro2,
      title: "Car rental",
      description:
        "Welcome to the CarRental website repository! This project is a comprehensive platform for renting cars online. Users can browse through various car options, make reservations and enjoy their ride!",
      source: "https://github.com/hansrohit/CarRental_Website",
    },
    {
      photo: pro3,
      title: "Bike rental",
      description:
        "A simple and efficient console-based bike rental system built in Java. This application allows users to rent bikes, view rental history, and manage bike inventory through a command-line interface.",
      source: "https://github.com/hansrohit/BikeRental_ConsoleProject",
    },
  ];

  return (
    <>
      <div className="h-screen w-full flex justify-center items-center">
        {/* <div className="h-[90%] w-full border-2 flex flex-col justify-center items-center"> */}
        <div className=" justify-items-center grid- grid grid-cols-3 items-center h-[95%] gap-7 w-[95%]">
          {arr.map((val, index) => (
            <div
              key={index}
              className="hover:scale-110 hover:shadow-md transition duration-300 ease-in-out h-auto w-auto rounded-md quack shadow-lg flex flex-col gap-1 justify-center place-items-center"
            >
              <div>
                <img src={val.photo} alt="hehe" className="rounded-md" />
              </div>
              <div>
                <h2 className="font-extrabold text-center">{val.title}</h2>
              </div>
              <div>
                <p className="text-justify text-black font-serif">
                  {val.description}
                </p>
              </div>
              <div className=" h-[10%] text-justify w-full flex justify-between">
                <div className="h-full w-auto border-2 border-gray-400 text-justify rounded-md hover:text-slate-100 bg-black/15 hover:bg-zinc-700">
                  <a href="">view</a>
                </div>
                <div className="h-full w-auto border-2 border-gray-400 text-justify rounded-md hover:text-slate-100 bg-black/15 hover:bg-zinc-700">
                  <a href={val.source} target="_blank">
                    source
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default project;
