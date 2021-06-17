import axios from "axios";
import queryString from 'query-string';
import { LogPayload } from "./root";

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
  fetchGetPosts: (payload: Record<string, any>) => fetcher.get(`https://jsonplaceholder.typicode.com/posts?${queryString.stringify(payload)}`),
};

export default {
  tools,
  ...basic,
};
