import React, { useState, useEffect } from "react";
import styles from "../pages/Search.module.css";
const Search = () => {
  const [text, setText] = useState("");
  console.log(text);

  const [name, setName] = useState([]);

  const [addtext, setAddtext] = useState("akita");

  const getSearch = async () => {
    const response = await fetch(`https://dog.ceo/api/breed/${addtext}/images`);
    const data = await response.json();
    // console.log(data);
    var Data = data.message;

    // console.log("data", Data);
    setName(Data);
  };

  useEffect(() => {
    getSearch();
  }, [addtext]);

  const searchItem = (text) => {
    setAddtext(text);
  };

  return (
    <div className={styles.SearchMain}>
      <div className={styles.Search_Container}>
        <div className={styles.Search_Container_input_button}>
          <input
            onChange={(e) => setText(e.target.value)}
            type="text"
            placeholder="enter the puppy name"
          />
          <button onClick={() => searchItem(text)}>Search</button>
        </div>

        <div className={styles.Search_Container_Card_image_main}>
        <div className={styles.Search_Container_Card}>
          {name.map((el, id) => {
            return (
              <div key={id}>
                <img src={el} alt="" />
              </div>
            );
          })}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
