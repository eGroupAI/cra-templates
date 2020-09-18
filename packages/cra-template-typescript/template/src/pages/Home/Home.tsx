import React from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";
import { AppDispatch } from "redux/configureAppStore";
import { increment, decrement } from './redux'
import { getCounts } from "./selectors";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [, setCookie] = useCookies();
  const counts = useSelector(getCounts)

  const handleClick = () => {
    setCookie("hasLoginCookie", "true");
    dispatch(push("/me"));
  };

  return (
    <p>
      Edit <code>src/App.jsx</code> and save to reload.
      <button onClick={handleClick}>Enter private page</button>
      <br />
      Counts: {counts}
      <br />
      <button onClick={() => dispatch(increment(1))}>increment</button>
      <button onClick={() => dispatch(decrement(1))}>decrement</button>
    </p>
  );
};

export default Home;
