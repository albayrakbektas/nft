<template>
  <div class="filter-container">
    <span class="material-symbols-outlined" @click="openFilters">
      filter_list
    </span>
    <div v-if="isVisible" class="options-container">
      <span>Price</span>
      <div class="input-container">
        <input type="number" placeholder="Min" v-model="minPrice" />
        <input type="number" placeholder="Max" v-model="maxPrice" />
      </div>
      <div>
        <label>
          <input type="checkbox" v-model="type" value="image" />
          Image
        </label>
        <label>
          <input type="checkbox" v-model="type" value="video" />
          Video
        </label>
      </div>
      <div class="button-container">
        <button @click="applyFilters" class="apply">Apply</button>
        <button @click="clearFilters" class="clear">Clear All</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardFilter",
  data() {
    return {
      isVisible: false,
      minPrice: this.$route.query.minPrice || null,
      maxPrice: this.$route.query.maxPrice || null,
      type: (this.$route.query.type || "").split(","),
    };
  },
  props: {
    updateHandler: Function,
  },
  methods: {
    openFilters() {
      this.isVisible = !this.isVisible;
    },
    applyFilters() {
      const query = {
        page: this.$route.query.page || 1,
        pageOffset: this.$route.query.pageOffset || 3,
      };
      if (this.minPrice) {
        query.minPrice = this.minPrice;
      }
      if (this.maxPrice) {
        query.maxPrice = this.maxPrice;
      }
      if (this.type) {
        query.type = this.type.filter((s) => s).join(",");
      }
      this.$router.push({
        path: "/",
        query,
      });
      this.updateHandler(this.$route.query);
      this.isVisible = false;
    },
    clearFilters() {
      const query = {
        page: this.$route.query.page || 1,
        pageOffset: this.$route.query.pageOffset || 3,
      };
      this.minPrice = null;
      this.maxPrice = null;
      this.type = [];
      this.$router.push({
        path: "/",
        query,
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
  left: 0;
  right: 0;
  top: 140px;
  background-color: #ffffff;
  height: min-content;
  padding: 2rem;
  span {
    font-weight: 300;
  }
}
.input-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
}
input {
  width: 100%;
  padding: 0.4rem 0.6rem;
  border: none;
  border-bottom: 1px solid #000000;
  &:focus {
    outline: none;
  }
}
.button-container {
  display: grid;
  align-items: center;
  width: 100%;
  padding: 1rem 0;
}
.apply,
.clear {
  border: none;
  padding: 0.6rem 0.8rem;
  font-size: 1rem;
  display: block;
  width: 100%;
}
.apply {
  border-radius: 10px;
  color: #ffffff;
  background-color: rgb(0, 119, 255);
}
.clear {
  background-color: transparent;
  color: rgb(0, 119, 255);
}
label {
  input {
    width: unset;
    margin: 1rem 0;
  }
}
</style>
