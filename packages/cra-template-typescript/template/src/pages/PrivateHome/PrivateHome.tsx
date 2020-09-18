import React, { useEffect } from "react";

import FixedCenter from '@e-group/material-layout/FixedCenter'
import { CircularProgress } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "redux/configureAppStore";
import { fetchGetPosts } from "./redux";
import { getPosts } from "./selectors";

const PrivateHome = () => {
  const dispatch = useDispatch<AppDispatch>();
  const posts = useSelector(getPosts)

  useEffect(() => {
    dispatch(fetchGetPosts())
  }, [dispatch])

  if (!posts) {
    return (
      <FixedCenter>
        <CircularProgress />
      </FixedCenter>
    )
  }

  return (
    <div>
      Posts:
      <br />
      {JSON.stringify(posts, undefined, 4)}
    </div>
  )
};

export default PrivateHome;
