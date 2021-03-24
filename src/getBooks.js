import axios from "axios";

export function getBooks(quantity, callback) {
  const url = "https://fakerapi.it/api/v1/books?_quantity=" + quantity;

  axios
    .get(url)
    .then((response) => {
      let data = response.data.data;
      callback(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

export default getBooks;
