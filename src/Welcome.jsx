import React, { useState } from "react";

import "./welcome.css";
import { AiFillHome } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { FaCog } from "react-icons/fa";
import { BiStats } from "react-icons/bi";
import { IoMdMenu } from "react-icons/io";

export default function Welcome() {
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

  //AdoptAPet
  //Axolotl

  return (
    <div className="mainPage">
      <nav className="navbar">
        <div className="topNav">
          <IoMdMenu fill="#fff" style={{ height: "1.4em", width: "1.4em" }} />
        </div>
        <ul>
          <li>
            <AiFillHome className="iconNav" /> Home
          </li>
          <li>
            <FaUserAlt className="iconNav" /> Profile
          </li>
          <li>
            <BiStats className="iconNav" /> Stats
          </li>
          <li>
            <FaCog className="iconNav" /> Settings
          </li>
          <li>
            <FiLogOut className="iconNav" /> Logout
          </li>
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
          <div className="centerBox">
            <div className="leftResponseBox">
              <div className="dataList">
                <h3>Category: </h3>
                <p>{category} </p>
              </div>
              <div className="dataList">
                <h3>Api: </h3> <p>{api}</p>
              </div>
              <div className="dataList">
                <h3>Link: </h3>
                <p>{link}</p>
              </div>
              <div className="dataList">
                <h3>Description: </h3>
                <p>{desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
