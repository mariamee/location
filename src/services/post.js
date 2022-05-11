import http from "./http";

export const getPosts = async () => {
  const { data } = await http.get("/posts");
  return data;
};

export const getPost = async (id) => {
  const { data } = await http.get(`/posts/${id}`);
  return data;
};
