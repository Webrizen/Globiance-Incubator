import React from "react";
import "./styles/App.css";
import Incubator from './components/Incubator';

function App() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="left">
            <h1 class="title-font sm:text-4xl text-5xl mb-2 font-bold text-gray-100">
              Globiance Incubator
            </h1>
            <p class="mb-4 leading-relaxed text-lg">
              A solution for something important with the incubator you can
              incubate all over the place.
            </p>
            <div class="flex justify-center w-min gap-2">
            <button className="inline-flex items-center border-2 border-gray-200 bg-white hover:bg-transparent hover:text-white py-2 px-8 hover:outline-none focus:outline-none hover:bg-white text-gray-900 rounded text-base md:mr-4 mt-4 md:mt-0 w-min whitespace-nowrap">
                  Incubate Now
                </button>
                <button className="inline-flex items-center border-2 border-gray-200 bg-transparent py-2 px-8 hover:outline-none focus:outline-none hover:bg-white hover:text-gray-900 rounded text-base mt-4 md:mt-0 w-min whitespace-nowrap">
                  Incubate Later
                </button>
            </div>
          </div>
          <div className="middle">
            <Incubator />
          </div>
          <div className="right">
          <h1 class="title-font sm:text-4xl text-3xl mb-2 font-bold text-gray-100">
          Reimagine banking with Globiance. Find out more here.
            </h1>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
