import React, { useEffect, useState } from "react";
import axios from "axios";

export default function FetchData() {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.publicapis.org/entries")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.API}</li>
        ))}
      </ul>
    </div>
  );
}
