import React, { useContext } from "react";
import FrenchFlag from "../../assets/french.svg";
import EnglishFlag from "../../assets/english.svg";
import SpanishFlag from "../../assets/spanish.svg";
import "./ToggleLangs.css";

export default function ToggleLangs() {
  return (
    <div className="container-langs">
        <img src={FrenchFlag} alt="drapeau français" />
        <img src={EnglishFlag} alt="drapeau anglais" />
        <img src={SpanishFlag} alt="drapeau espagnol" />
    </div>
)
}
