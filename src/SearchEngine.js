import React, { useState } from "react";
import axios from "axios";

export default function SearchEngine() {
  let [query, setQuery] = useState(null);
  let [report, setReport] = useState(null);
  function handleSubmit(event) {
    event.preventDefault();
    let queryInput = query;
    queryInput = queryInput.trim().toLowerCase();
    if (queryInput) {
      sendQuery(queryInput);
    } else {
      setReport(`Type a valid city`);
    }
  }
  function showReport(response) {
    setReport(
      <div>
        <h2> {response.data.name}</h2>
        <ul>
          <li>Temperature : {Math.round(response.data.main.temp)}</li>
          <li>Humidity: {response.data.main.humidity}%</li>
          <li>Description: {response.data.weather[0].main}</li>
          <li>Wind: {response.data.wind.speed}m/s </li>
        </ul>
      </div>
    );
  }
  function sendQuery(queryInput) {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${queryInput}&appid=62f780f73f5ee00aa0f4d27f32e096c2&units=metric`;
    axios.get(apiUrl).then(showReport);
  }
  function handleInput(event) {
    setQuery(event.target.value);
  }
  return (
    <div className="SearchEngine">
      <form onSubmit={handleSubmit}>
        {" "}
        <input type="search" placeholder="Type a city" onChange={handleInput} />
        <input type="submit" value="Search" />
      </form>{" "}
      <div>{report}</div>
    </div>
  );
}
