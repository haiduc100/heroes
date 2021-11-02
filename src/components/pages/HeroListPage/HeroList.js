import React from "react";
import "./HeroList.css";
import Hero from "../HeroPage/Hero.js";

const HeroList = (props) => {
  return (
    <div>
      {props.heroes.map((hero) => 
        <Hero
          key={hero.id}
          id={hero.id}
          name={hero.name}
          selectedItem={props.selectedItem}
          setSelectedItem={props.setSelectedItem}
          message={props.message}
          setMessage={props.setMessage}
        />
      )}
    </div>
  );
};

export default HeroList;
