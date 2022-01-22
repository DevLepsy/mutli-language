import React, { useContext } from "react";
import FrenchFlag from "../../assets/french.svg";
import EnglishFlag from "../../assets/english.svg";
import SpanishFlag from "../../assets/spanish.svg";
import "./ToggleLangs.css";
import {Context} from "../../context/langContext"

export default function ToggleLangs() {

  const {toggleLang} = useContext(Context)
  

  return (
    <div className="container-langs">
        <img onClick={() => toggleLang("FR")} src={FrenchFlag} alt="drapeau français" />
        <img onClick={() => toggleLang("EN")} src={EnglishFlag} alt="drapeau anglais" />
        <img onClick={() => toggleLang("ES")} src={SpanishFlag} alt="drapeau espagnol" />
    </div>
)
}
