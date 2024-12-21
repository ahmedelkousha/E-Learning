import React from "react";
import "./styles/Sucess.css";
export default function Sucess() {
  return (
    <>
      <section className="sucess flex justify-center items-center">
        <div className="container flex flex-col justify-center items-center">
          <div className="title text-center">
            <h2 className="text-3xl font-bold">Our Success</h2>
            <p className="text-lg text-center py-3 leading-7 my-4">
              Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae
              sollicitudin at nec
              <br /> nam et pharetra gravida. Adipiscing a quis ultrices eu
              ornare tristique vel nisl orci.{" "}
            </p>
          </div>
          <div className="content flex flex-wrap md:flex-row gap-14 lg:gap-52 md:gap-24 text-center my-14 md:flex-wrap justify-center">
            <div className="basis-[40%] md:basis-0 item flex flex-col gap-2">
              <span className=" text-3xl">15K+</span>
              <span className="text-lg ">Students</span>
            </div>
            <div className="basis-[40%] md:basis-0 item  flex flex-col gap-2">
              <span className=" text-3xl">75%</span>
              <span className="text-lg ">Total success</span>
            </div>
            <div className="basis-[40%] md:basis-0 item  flex flex-col gap-2">
              <span className=" text-3xl">35</span>
              <span className="text-lg ">Main questions</span>
            </div>
            <div className="basis-[40%] md:basis-0 item  flex flex-col gap-2">
              <span className=" text-3xl">26</span>
              <span className="text-lg ">Chief exports</span>
            </div>
            <div className="basis-[40%] md:basis-0 item  flex flex-col gap-2">
              <span className=" text-3xl">16</span>
              <span className="text-lg ">Years of experience</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
