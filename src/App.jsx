import "./App.css";
import React, { useState } from "react";
import AnimalShow from "./AnimalShow";

function getRandomAnimal() {
  const animals = ["bird", "cow", "dog", "gator", "horse", "cat"];

  return animals[Math.floor(Math.random() * animals.length)];
}

// console.log(getRandomAnimal());

function App() {
  // const [count, setCount] = useState(0);
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    // setCount(count + 1);
    setAnimals([...animals, getRandomAnimal()]);
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });

  return (
    <div className="app">
      <button onClick={handleClick}>Add Animal</button>
      {/* <div>No. of animals: {count}</div> */}
      <div className="animal-list">{renderedAnimals}</div>
    </div>
  );
}

export default App;
