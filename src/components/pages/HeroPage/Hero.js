import React from "react";

const Hero = (props) => {
  const handleOnClick = (id) => {
    props.setSelectedItem(parseInt(id));
    var newMessage = props.message;
    newMessage.push(`HeroesComponent: Selected hero id=${id}`);
    props.setMessage(newMessage);
  };
  return (
    <div>
      <ul
        className="heroes"
        key={props.id}
        onClick={() => handleOnClick(props.id)}
      >
        <li>
          <span className="badge">{props.id}</span>
          {props.name}
        </li>
      </ul>
      
    </div>
  );
};

export default Hero;
