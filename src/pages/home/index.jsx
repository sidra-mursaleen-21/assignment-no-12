import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const Home = () => {
  const login = localStorage.getItem("logIn");
  console.log(login);

  return login ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to="/" />
  );
};

export default Home;
