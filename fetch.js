import axios from "axios";

const baseURL = "https://tetyanaso-shop-default-rtdb.firebaseio.com/";

export const getArtsApi = () => {
  return axios
    .get(baseURL+'arts.json')
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log("err", err);
      throw err;
    });
};
