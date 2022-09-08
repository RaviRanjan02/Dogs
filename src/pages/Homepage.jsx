import React, { useState, useEffect } from "react";
import styles from "../pages/HomePage.module.css";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const [name, setName] = useState([]);

  const navigate = useNavigate();

  const getAnimals = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    const data = await response.json();
    // console.log(data.message);
    var Data = data.message;
    const arr = Object.keys(Data);
    // console.log(Data);
    setName(arr);
  };

  useEffect(() => {
    getAnimals();
  }, []);

  return (
    <div className={styles.Homepage_Main}>
      <div className={styles.Homepage_container}>
        {name.map((el, id) => {
          return (
            <div
              className={styles.Homepage_card}
              key={id}
              onClick={() => navigate(`/${el}`)}
            >
              {el}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Homepage;
