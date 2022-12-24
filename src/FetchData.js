import React, { useEffect, useState } from "react";
import axios from "axios";

export default function FetchData() {
  const [apiName, setApiName] = useState("");
  const [api, setApi] = useState();
  const [link, setLink] = useState();
  const [category, setCategory] = useState();
  const [desc, setDescr] = useState();

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.publicapis.org/entries");
      const data = await response.json();
      const entries = data.entries;
      entries.map(function (item) {
        if (item.API === apiName) {
          //setPost(item);
          setApi(item.API);
          setLink(item.Link);
          setCategory(item.Category);
          setDescr(item.Description);

          //console.log(api, link);
        }
      });
      //console.log(entries);
    } catch (err) {
      console.log(err);
    }
  };

  return api, link, desc, category;
}
