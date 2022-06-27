import axios from "axios";
import { Product } from "../model/product.mjs";

export const productController = (query) => {
  return axios.get("http://localhost:3000/products").then((res) => {
    let products  = res.data
    query.minPrice = parseInt(query.minPrice) || null
    query.maxPrice = parseInt(query.maxPrice) || null
    query.page = parseInt(query.page) || 1
    query.pageOffset = parseInt(query.pageOffset) || 3
    if(query && query.type){
      products = products.filter(product => query.type.includes(product.type))
    }
    if(query && query.minPrice){
      products = products.filter(product => product.price >= query.minPrice)
    }
    if(query && query.maxPrice){
      products = products.filter(product => product.price <= query.maxPrice)
    }
    const startIndex = (query.page - 1) * query.pageOffset
    let endIndex = startIndex + query.pageOffset
    endIndex = products.length < endIndex ? products.length : endIndex;
    let paginateProducts = []
    for(let i = startIndex; i < endIndex; i++){
      paginateProducts.push(products[i])
    }
    if (query.sort === "dsc") {
      paginateProducts.sort((a,b) => a.price - b.price)
    }
    if (query.sort === "asc") {
      paginateProducts.sort((a,b) => b.price - a.price)
    }
    return paginateProducts.map((product) => {
      return new Product(product);
    })

  });
};