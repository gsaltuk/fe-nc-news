import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-gs.onrender.com/api",
});

function fetchArticles(sort, order) {
  return api
    .get("/articles", { params: { sort_by: sort, order: order } })
    .then((res) => {
      console.log(res.data.articles)
      return res.data
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

// Sort function

// function sortByProperty(array, property, order) {
//   return array.sort((a, b) => {
//     const aValue = Number(a[property]);
//     const bValue = Number(b[property]);

//     if (order === "ascending") {
//       return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
//     } else if (order === "descending") {
//       return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
//     }
//     return 0;
//   });
// }

export {
  fetchArticles,
  fetchArticle,
  fetchComments,
  increaseVote,
  decreaseVote,
  fetchUsers,
};
