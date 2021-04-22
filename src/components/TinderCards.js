import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import instance from "../axios.js";
const TinderCards = () => {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    const data = async () => {
      const { data } = await instance.get("/users");
      setPeople(data);
    };
    data();
  }, []);
  const swiped = (dir, name) => {
    console.log("removing:" + name);
  };
  const onCardLeftScreen = (name) => {
    console.log(name + " left the screen");
  };
  return (
    <div className="tindercards">
      <div className="tindercards_container">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => onCardLeftScreen(person.name)}
          >
            <div
              className="card"
              style={{ backgroundImage: `url(${person.imgURL})` }}
            >
              <h3 className="card_content">{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};
export default TinderCards;
