import React from "react";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

const Home = () => {
  const dispatch = useDispatch();
  const [, setCookie] = useCookies();
  const handleClick = () => {
    setCookie("hasLoginCookie", "true");
    dispatch(push("/me"));
  };

  return (
    <p>
      Edit <code>src/App.jsx</code> and save to reload.
      <button onClick={handleClick}>Enter private page</button>
    </p>
  );
};

export default Home;
