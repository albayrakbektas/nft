<template>
  <div class="search-container">
    <span>{{ count || 0 }} result found</span>
    <div class="options-container">
      <CardFilter :updateHandler="updateHandler" />
      <CardSort :updateHandler="updateHandler" />
    </div>
  </div>
</template>

<script>
import CardFilter from "@/components/CardFilter";
import CardSort from "@/components/CardSort";
export default {
  name: "SearchOptions",
  components: { CardSort, CardFilter },
  props: {
    updateHandler: Function,
    count: Number,
  },
};
</script>

<style lang="scss" scoped>
.search-container {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  padding: 1rem 2rem;
  .options-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    column-gap: 1rem;
  }
}
</style>
