import React from "react";
import './styles/App.css';
import bottomBase from './assets/base.svg';
import Atom from './assets/atom.svg';
import topBase from './assets/top-base.png';

function App() {

  return (
    <>
     <section className="hero">
      <div className="container hero-grid">
      <div className="left">
      <h1 class="title-font sm:text-4xl text-2xl mb-2 font-bold text-gray-100">Globiance Incubator</h1>
      <p class="mb-4 leading-relaxed text-lg">A solution for something important with the incubator you can incubate all over the place.</p>
      <div class="flex justify-center w-min">
        <button class="inline-flex w-min whitespace-nowrap text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">
          Incubate Now</button>
        <button class="ml-4 inline-flex  w-min whitespace-nowrap text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Incubate Later</button>
      </div>
      </div>
      <div className="middle">
        <img src={topBase} alt="Top of Incubator" />
        <img src={Atom} alt="Atom" />
        <img src={bottomBase} alt="Base of Incubator" />
      </div>
      <div className="right">
        Right
      </div>
      </div>
     </section>
    </>
  )
}

export default App
