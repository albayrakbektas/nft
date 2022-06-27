import axios from "axios";
import { Product } from "../model/product.mjs";

export const productController = () => {
  axios.get("http://localhost:3000/products").then((product) => {
    console.log(product);
    return new Product(product);
  });
};

productController();
