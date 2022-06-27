<template>
  <div>
    <div class="card-container">
      <img :src="product.image" :alt="product.title" />
      <div class="content">
        <h1>{{ product.title }}</h1>
        <h3>{{ product.price }} {{ product.currency }}</h3>
        <button>BUY</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NftCard",
  props: ["product"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card-container {
  display: grid;
  border-radius: 10px;
  margin: 1rem 2rem;
  background-color: #ffffff;
  box-shadow: -1px 1px #808080;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
}
.content {
  display: grid;
  padding: 1.2rem 1rem;
}
button {
  background-color: rgb(0, 119, 255);
  color: #ffffff;
  font-size: 1rem;
  border: none;
  border-radius: 10px;
  padding: 0.8rem 1.6rem;
  width: min-content;
  justify-self: end;
  box-shadow: -1px 1px #808080;
}
</style>
