import React, { useEffect } from "react";

import { Post } from "entities";
import api from 'redux/apis'
import useAxiosApi from '@e-group/hooks/useAxiosApi'
import FixedCenter from '@e-group/material-layout/FixedCenter'
import { CircularProgress } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "redux/configureAppStore";
import { fetchGetPosts } from "./redux";
import { getPosts } from "./selectors";

const PrivateHome = () => {
  const dispatch = useDispatch<AppDispatch>();
  const posts: Post[] = useSelector(getPosts)
  // or use axios api
  const { excute } = useAxiosApi(api.fetchGetPosts);

  useEffect(() => {
    dispatch(fetchGetPosts())
    excute().then((res) => {
      console.log(res.data)
    })
  }, [dispatch, excute])

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
