import * as React from "react";
import Container from "./../../components/Container";

export default function Hero() {
  return (
    <Container className="flex flex-col justify-center items-center">
      <h1 className="main-heading lg:text-8xl">Tina Kim</h1>
      <div className="lg:w-64 mt-16">
        <p className="flex items-center justify-center text-gray-400">
          <span className="relative flex h-3 w-3 mr-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#17D2AA] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 ml-0.5 mt-0.5 bg-[#17D2AA]"></span>
          </span>
          Open to Work
        </p>
        <p className="w-full text-center">
          I am a skilled web front-end developer with expertise in Javascript,
          React, Next.js, and Typescript. I love to create visually stunning
          products that provide exceptional user experiences.
        </p>
        <button
          type="button"
          className="w-full h-11 mt-10 rounded-lg bg-black text-white hover:bg-slate-800 transition ease-in-out"
        >
          Say Hello
        </button>
      </div>
    </Container>
  );
}
