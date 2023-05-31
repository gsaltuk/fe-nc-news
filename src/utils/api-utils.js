import axios from "axios";

const articlesApi = axios.create({
  baseURL: "https://nc-news-gs.onrender.com/api",
});

function fetchArticles() {
  return articlesApi.get("/articles").then((res) => {
    return res.data;
  });
}

function fetchArticle(id) {
  return articlesApi.get(`/articles/${id}`).then((res) => {
    return res.data;
  });
}

function fetchComments(id) {
  return articlesApi.get(`/articles/${id}/comments`).then((res) => {
    return res.data;
  });
}

function increaseVote(id) {
  const patchBody = { inc_votes: 1 };
  return articlesApi
    .patch(`/articles/${id}`, patchBody)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
}

function decreaseVote(id) {
  const patchBody = { inc_votes: -1 };
  return articlesApi
    .patch(`/articles/${id}`, patchBody)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
}

export {
  fetchArticles,
  fetchArticle,
  fetchComments,
  increaseVote,
  decreaseVote,
};
