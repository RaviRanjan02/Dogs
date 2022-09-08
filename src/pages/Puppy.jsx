import React, { useState, useEffect } from "react";
import styles from "../pages/Puppy.module.css";
import { useParams } from "react-router-dom";

const Puppy = () => {
  const { id } = useParams();

  const [name, setName] = useState([]);

  const getSingle = async () => {
    const response = await fetch(`https://dog.ceo/api/breed/${id}/images`);
    const data = await response.json();
    const Data = data.message;
    //  console.log("data",Data);
    setName(Data);
  };

  useEffect(() => {
    getSingle();
  }, []);

  return (
    <div className={styles.Puppy_Main}>
      <div className={styles.Puppy_conatiner}>
        {name.map((el, id) => {
          return (
            <div className={styles.Puppy_card} key={id}>
              <img src={el} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Puppy;
