import axios from "axios";

const articlesApi = axios.create({
  baseURL: "https://nc-news-gs.onrender.com/api",
});

function fetchArticles() {
  return articlesApi.get("/articles").then((res) => {
    return res.data;
  });
}
function fetchArticle(article_id) {
  return articlesApi.get(`/articles/${article_id}`).then((res) => {
    return res.data;
  });
}


function fetchComments(id) {
    return articlesApi.get(`/articles/${id}/comments`).then((res) => {
        return res.data
    })
}
export { fetchArticles, fetchArticle, fetchComments };
