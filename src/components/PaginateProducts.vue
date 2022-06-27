<template>
  <div class="container">
    <div
      v-for="(item, index) in pagination()"
      class="pagination-item"
      :class="{ selected: item.toString() === ($route.query.page || '1') }"
      @click="setPage(item)"
      :key="index"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaginateProducts",
  props: {
    updateHandler: Function,
  },
  methods: {
    pagination() {
      return [
        ...Array(
          Math.round(10 / (this.$route.query.pageOffset || 3)) + 1
        ).keys(),
      ].map((i) => i + 1);
    },
    setPage(page) {
      this.$router.push({ path: "/", query: { ...this.$route.query, page } });
      this.updateHandler(this.$route.query);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
}
.pagination-item {
  height: 24px;
  width: 24px;
  border: 1px solid #808080;
  border-radius: 50%;
  text-align: center;
}
.selected {
  background-color: #000000;
  color: #ffffff;
}
</style>
