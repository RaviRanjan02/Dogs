import React from "react";
import styles from "../components/Navbar.module.css";
import { Link, useNavigate, useParams } from "react-router-dom";

const Navbar = () => {
  const { el } = useParams();
  const navigate = useNavigate();
  return (
    <div className={styles.Navbar_Main}>
      <div className={styles.Navbar_container}>
        <div onClick={() => navigate("/")}>Home</div>
        <div onClick={() => navigate(`/${el}`)}>Puppy</div>
        <div onClick={() => navigate("/search")}>Search</div>
      </div>
    </div>
  );
};

export default Navbar;
