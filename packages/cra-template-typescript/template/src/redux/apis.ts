import axios from "axios";
import { LogPayload } from "./root";
// import queryString from 'query-string';

const fetcher = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 1000 * 60 * 10,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
});

const tools = {
  /**
   * Log errors.
   */
  fetchPostLogs: (payload: LogPayload) => fetcher.post("/logs", payload),
};

const basic = {
  // ADD YOUR APIS HERE
  fetchGetPosts: () => fetcher.get("https://jsonplaceholder.typicode.com/posts"),
};

export default {
  tools,
  ...basic,
};