<template>
  <div id="app">
    <AppHeader />
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  background-color: beige;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.material-symbols-outlined {
  background-color: #000000;
  color: #ffffff;
  border-radius: 10px;
  padding: 0.2rem;
  cursor: pointer;
}
</style>
<script>
import AppHeader from "@/components/AppHeader";
export default {
  components: { AppHeader },
};
</script>
