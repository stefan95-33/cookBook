import Axios from "axios";

const axios = Axios.create({
  baseURL: "http://localhost:8080/api"
});

export default class CookBookService {
  getRecipes() {
    return axios.get("/recipes");
  }
  postNewRecipes(recipes) {
    return axios.post("/recipes", { recipes });
  }
  updateRecipes(recipes, id) {
    return axios.put(`/recipes/${id}`, recipes);
  }
  getPreviousRecipes(id) {
    return axios.get(`/recipes/previous/${id}`);
  }
}
