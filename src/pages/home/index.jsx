import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const Home = () => {
  const login = localStorage.getItem("logIn");

  return login ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to="/" />
  );
};

export default Home;
