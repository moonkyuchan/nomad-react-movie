import React from "react";
import PropTypes from "prop-types";

const foodArr = [
  { name: "김치", price: 1000, rating: 3.4 },
  { name: "비빔밥", price: 2000, rating: 3.8 },
  {
    name: " 부대찌개",
    price: 12000,
    rating: 4.2,
  },
];

function Food({ name, price, rating }) {
  // 인자로 porps 를 받아 아래에 {props.food}로도 사용가능
  return (
    <div>
      <h1>I like {name}</h1>
      <h2 style={{ color: "red" }}>pirce is {price}</h2>
      <h2 style={{ color: "blue" }}>rating is {rating} / 5 </h2>
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
};

function App() {
  return (
    <div>
      {foodArr.map((item, idx) => {
        return (
          <Food
            key={idx}
            name={item.name}
            price={item.price}
            rating={item.rating}
          />
        );
      })}
    </div>
  );
}

export default App;
