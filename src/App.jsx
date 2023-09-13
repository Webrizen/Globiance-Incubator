import React, { useState, useEffect, useRef } from "react";
import "./styles/App.css";
import "./styles/services.css";
import Bulb from "./assets/light-bulb.png";
import Atom from "./assets/atom.svg";
import Grow from "./assets/grow.png";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

function App() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <>
      <section className="hero">
        <div className="hero-grid">
          <div className="left">
            <h1 className="title-font sm:text-4xl text-5xl mb-2 font-bold text-gray-100">
              Globiance Incubator
            </h1>
            <p className="sm:mb-4 mb-2 leading-relaxed text-lg text-gray-100">
              A solution for something important with the incubator you can
              incubate all over the place.
            </p>
            <div className="flex justify-center w-min gap-2">
              <button className="inline-flex items-center border-2 border-gray-200 bg-white hover:bg-transparent hover:text-white text-gray-900 py-2 px-8 hover:outline-none focus:outline-none rounded sm:text-base text-xs md:mr-4 mt-4 md:mt-0 w-min whitespace-nowrap">
                Incubate Now
              </button>
              <button className="inline-flex items-center border-2 border-gray-200 bg-transparent py-2 px-8 hover:outline-none focus:outline-none hover:bg-white hover:text-gray-900 text-white rounded sm:text-base text-xs mt-4 md:mt-0 w-min whitespace-nowrap">
                Incubate Later
              </button>
            </div>
          </div>
          <div></div>
          <div></div>
          <div className="right">
            <h1 className="title-font sm:text-4xl text-3xl mb-2 font-bold text-gray-100">
              Reimagine banking with Globiance. Find out more here.
            </h1>
          </div>
        </div>
      </section>
      <section className="services">
        <div className="title-services">
          <h1 className="font-bold">What Can We Do For You</h1>
        </div>
        <div className="services-grid" ref={ref}>
          <div className="left-services">
          <motion.img
              initial={{ opacity: 0, x: -100, y: -100 }}
              animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              src={Bulb}
              alt="Light Bulb"
            />
            <motion.img
              initial={{ opacity: 0, y: -100 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              src={Atom}
              alt="Atom"
            />
            <motion.img
              initial={{ opacity: 0, x: 100, y: 100 }}
              animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              src={Grow}
              alt="Grow Your Business"
            />
          </div>
          <div className="right-services">
            <h2 className="font-medium">Advisory</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptates, dolorum quae nam sint earum odit quibusdam sequi
              praesentium nesciunt, nostrum et nisi reprehenderit laboriosam
              veniam quasi libero voluptate eos fugiat non optio minus! Libero
              tempore veritatis pariatur, saepe dignissimos sapiente eos itaque
              dolores, numquam, dolorem nam excepturi officia quisquam at?
              Ipsum, magni voluptas inventore voluptate, neque deserunt dolores
              impedit voluptatum quis veritatis doloremque veniam illo omnis.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              tempore temporibus ab minus iusto adipisci quos eius inventore
              ipsam maiores! Magni optio veritatis veniam, odit molestias illum
              blanditiis ducimus ea! Impedit, corporis corrupti non earum,
              ratione beatae consequatur eligendi quos ex totam odit iste
              tempore aperiam placeat, id suscipit? Consequatur, nisi
              voluptatem.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
