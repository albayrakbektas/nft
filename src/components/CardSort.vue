<template>
  <div class="sort-container">
    <span @click="openFilters" class="material-symbols-outlined"> sort </span>
    <div v-if="isVisible" class="options-container">
      <ul>
        <li @click="sortByDescendingList">Price Descending</li>
        <li @click="sortByAscendingList">Price Ascending</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardSort",
  data() {
    return {
      isVisible: false,
    };
  },
  props: {
    updateHandler: Function,
  },
  methods: {
    openFilters() {
      this.isVisible = !this.isVisible;
    },
    sortByDescendingList() {
      this.sortBy("dsc");
    },
    sortByAscendingList() {
      this.sortBy("asc");
    },
    sortBy(sort) {
      this.$router.push({
        path: "/",
        query: { sort },
      });
      this.updateHandler(this.$route.query);
      this.isVisible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.options-container {
  position: absolute;
  right: 10%;
  top: 140px;
  background-color: #ffffff;
  height: min-content;
  padding: 1.2rem 2rem;
  border-radius: 10px;
  span {
    font-weight: 300;
  }
}
li {
  list-style-type: none;
  padding: 0.4rem 0;
  font-weight: 500;
}
</style>
