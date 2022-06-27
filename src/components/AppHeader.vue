<template>
  <div class="header-container">
    <div class="brand-title">
      <h1>BlockGain</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style lang="scss" scoped>
.header-container {
  height: 70px;
  background-color: #000000;
  display: grid;
  align-items: center;
  justify-content: center;
  .brand-title {
    color: #ffffff;
  }
}
</style>
