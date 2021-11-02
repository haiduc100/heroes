import React, { useEffect, useState } from "react";
import "./Detail.css";

const Detail = (props) => {
  const [selectItem, setSelectItem] = useState(null);

  useEffect(() => {
    setSelectItem(
      props.heroes.find((hero) => parseInt(hero.id) === props.selectedItem)
    );
  }, [props]);

  const changeName = (event) => {
    var newHeroes = props.heroes;
    var selected = newHeroes.find(
      (hero) => parseInt(hero.id) === props.selectedItem
    );
    selected.name = event.target.value;
    setSelectItem({ ...selectItem, name: event.target.value });
    props.setHeroes(newHeroes);
  };
  if (selectItem !== null && selectItem !== undefined) {
    return (
      <div>
        <h2>{selectItem} Details</h2>
        <div>
          <span>id: {selectItem.id}</span>
        </div>
        <div>
          <label htmlFor="hero-name">Hero name: </label>
          <input
            id="hero-name"
            placeholder="name"
            onChange={changeName}
            value={selectItem}
          />
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Detail;
