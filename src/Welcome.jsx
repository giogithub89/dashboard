import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import "./welcome.css";

export default function Welcome() {
  const [posts, setPost] = useState([]);
  const [apiName, setApiName] = useState("");

  // function fetchData() {
  //   axios
  //     .get("https://api.publicapis.org/entries")
  //     .then((res) => {
  //       console.log(res.data);

  //       setPost(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     }, []);
  // }
  // const handleSubmit = () => {
  //   fetchData();
  // };

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.publicapis.org/entries");
      const data = await response.json();
      const entries = data.entries;
      //entries.map((item) => console.log(item.API));
      //console.log(entries);
      setPost(entries);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log(apiName);
  });

  //onChange={handleAnimalChange}
  //onSubmit={fetchData}

  //AdoptAPet
  //Axolotl

  return (
    <div>
      <nav className="navbar">
        <ul>
          <li>Home</li>
          <li>Profile</li>
          <li>Logout</li>
        </ul>
      </nav>
      <section className="mainBox">
        <div className="inputContainer">
          <h2>Search any API</h2>
          <div className="inputBox">
            <input className="inputApi" type="text" placeholder="Enter a name" value={apiName} onChange={(event) => setApiName(event.target.value)} />
            <button className="mainBtn" type="submit" onClick={fetchData}>
              SEARCH
            </button>
          </div>
        </div>
        <div className="responseBox">
          <ul className="dataList">
            {posts.map(
              (post, index) =>
                post.API === apiName && (
                  <div>
                    <li key={index}>
                      <span>Category:</span> {post.Category}{" "}
                    </li>
                    <li>
                      <span>Api:</span> {post.API}{" "}
                    </li>
                    <li>
                      <span>Link:</span> {post.Link}{" "}
                    </li>
                    <li>
                      <span>Description:</span> {post.Description}{" "}
                    </li>
                  </div>
                )
            )}
          </ul>
        </div>
      </section>
    </div>
  );
}
