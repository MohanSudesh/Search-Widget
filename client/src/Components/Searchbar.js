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
    <div>
      <div className="container search-bar">
        <div className="row justify-content-center align-items-center ">
          <div className="col-md-8 col-xs-2">
            <div className="input-group">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </span>
              <input
                type="text"
                className="form-control input-field rounded-pill input-text"
                placeholder="Search for product"
                onChange={(e) => {
                  setSearchText(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container search-content">
        {foods
          .filter((food) => {
            if (searchText == "") return;
            if (food.name.toLowerCase().includes(searchText.toLowerCase())) {
              return food;
            }
          })
          .map((food, key) => {
            return (
              <div clasName="row align-items-center" key={key}>
                <div className="col-md-4 col-xs-2 form-control rounded-lg">
                  <p>
                    <strong className="food-text">{food.name}</strong>
                    <br />
                    <p className="address-text">
                      Available at {food.availableAt}
                    </p>
                  </p>{" "}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

//  ||  food.availableAt.toLowerCase().includes(searchText.toLowerCase())
// col-sm-10 offset-sm-1
