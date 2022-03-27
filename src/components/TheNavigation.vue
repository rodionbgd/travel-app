<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/brazil">Brazil</router-link>
    <router-link to="/hawaii">Hawaii</router-link>
    <router-link to="/jamaica">Jamaica</router-link>
    <router-link to="/panama">Panama</router-link>
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
export default {
  name: "TheNavigation",
};
</script>

<style scoped>
#nav .active-link {
  color: #00fffe;
}
</style>
