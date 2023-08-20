import React from "react";
import postData from "./data/posts.json";

function App() {
  function createArt() {
    return fetch("./posts.json");
  }

  console.log(postData);

  return (
    <div className="mb-3">
      <div className="header">
        <h1>Travel Blog</h1>
      </div>
      <ul>
        <li>
          <a href="">About</a>


        </li>
        <li>
          <a href="">Popular Post</a>
        </li>
      </ul>
      <div className="">
        <h2>Travel is the only thing you buy that makes you richer...</h2>
      </div>
      <main>
        <button className="btn">hi</button>
      </main>
    </div>
  );
}

export default App;
