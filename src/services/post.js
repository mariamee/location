import { FAVORITS, POSTS } from "utils/constants";
import http from "./http";

export const getPosts = async () => {
  // const { data } = await http.get("/posts");
  // TODO , MOCK data, use real data instead
  return POSTS;

  // console.log("data", data);
  // return data;
};

export const getPost = async (id) => {
  const { data } = await http.get(`/posts/${id}`);
  return data;
};

export const getFavorits = async () => {
  return FAVORITS;
};
