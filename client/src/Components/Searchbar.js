import React, { useState, useEffect } from "react";
import "../App.css";

export default function Searchbar() {
  const [searchText, setSearchText] = useState("");
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("/foods")
      .then((res) => res.json())
      .then((foods) => {
        setFoods(foods.foods);
      });
  }, []);

  return (
    <div className="container search-bar">
      <div className="row justify-content-center align-items-center ">
        <div className="col-md-8 col-xs-2">
          <div className="input-group">
            <input
              type="text"
              className="form-control input-field"
              placeholder="Search for product"
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <div className="container">
        {foods
          .filter((food) => {
            if (searchText == "") return;
            if (
              food.name.toLowerCase().includes(searchText.toLowerCase()) ||
              food.availableAt.toLowerCase().includes(searchText.toLowerCase())
            ) {
              return food;
            }
          })
          .map((food, key) => {
            return (
              <div
                clasName="row justify-content-center align-items-center"
                key={key}
              >
                <div className="col-sm-10 offset-sm-1">
                  <p>
                    <strong>{food.name}</strong>
                    <br />
                    {food.availableAt}
                  </p>{" "}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
