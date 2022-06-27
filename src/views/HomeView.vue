<template>
  <div class="home">
    <SearchOptions :updateHandler="updateProduct" :count="products.length" />
    <NftCard
      v-for="(product, index) in products"
      :key="index"
      :product="product"
    />
    <PaginateProducts :updateHandler="updateProduct" />
  </div>
</template>

<script>
// @ is an alias to /src

import NftCard from "@/components/NftCard";
import SearchOptions from "@/components/SearchOptions";
import { productController } from "@/controller/productController.mjs";
import PaginateProducts from "@/components/PaginateProducts";
export default {
  name: "HomeView",
  components: {
    PaginateProducts,
    SearchOptions,
    NftCard,
  },
  data() {
    return {
      products: [],
    };
  },
  async created() {
    this.updateProduct({
      type: this.$route.query.type || null,
      minPrice: this.$route.query.minPrice || null,
      maxPrice: this.$route.query.maxPrice || null,
      page: this.$route.query.page || 1,
      pageOffset: this.$route.query.pageOffset || 3,
    });
  },
  methods: {
    updateProduct(filter) {
      productController(filter).then((product) => {
        this.products = product;
      });
    },
  },
};
</script>
