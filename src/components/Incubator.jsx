import React from "react";
import "../styles/Incubator.css";
import TopBase from "../assets/top-base.png";
import BottomBase from "../assets/base.svg";
import Atom from "../assets/atom.svg";

export default function Incubator() {
  return (
    <>
      <div className="incubator">
        <div className="background">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="top">
          <img src={TopBase} alt="incubator top" />
        </div>
        <div className="mid">
          <img src={Atom} alt="incubator Atom" />
        </div>
        <div className="bot">
          <img src={BottomBase} alt="incubator Base" />
        </div>
      </div>
    </>
  );
}
