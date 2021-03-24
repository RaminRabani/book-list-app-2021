import axios from "axios";
import { get } from "lodash";

export async function getBooks(quantity = 1) {
  const url = "https://fakerapi.it/api/v1/books?_quantity=" + quantity;

  const response = await axios.get(url);

  const statusCode = get(response, "data.code");

  if (statusCode === 200) {
    return response.data.data;
  } else {
    throw new Error("Unable to get book data");
  }
}

export default getBooks;
