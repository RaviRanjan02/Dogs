import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Homepage from "../pages/Homepage";
import Puppy from "./Puppy";
import Search from "./Search";

const MainRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Homepage />}></Route>
        <Route path={"/:id"} element={<Puppy />}></Route>
        <Route path={"/search"} element={<Search />}></Route>
      </Routes>
      
    </>
  );
};

export default MainRoutes;
