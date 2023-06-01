import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-gs.onrender.com/api",
});

function fetchArticles(topic) {
  return api
    .get("/articles", {
      params: { topic: topic },
    })
    .then((res) => {
      return res.data;
    });
}

function fetchArticle(id) {
  return api.get(`/articles/${id}`).then((res) => {
    return res.data;
  });
}

function fetchComments(id) {
  return api.get(`/articles/${id}/comments`).then((res) => {
    return res.data;
  });
}

function increaseVote(id) {
  const patchBody = { inc_votes: 1 };
  return api
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
  return api
    .patch(`/articles/${id}`, patchBody)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
}

function fetchUsers() {
  return api.get("/users").then((res) => {
    return res.data;
  });
}

function fetchTopics() {
  return api.get("/topics").then((res) => {
    return res.data;
  });
}

function postComment(id, comment) {
  return api
    .post(`/articles/${id}/comments`, comment)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
}

function deleteComment(id) {
  return api
    .delete(`/comments/${id}`)
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
  fetchUsers,
  fetchTopics,
  postComment,
  deleteComment
};
