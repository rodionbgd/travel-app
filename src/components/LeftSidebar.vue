<template>
  <ul>
    <li><router-link :to="{ name: 'protected' }">DashBoard</router-link></li>
    <li><router-link :to="{ name: 'invoices' }">Invoices</router-link></li>
  </ul>
</template>

<script>
export default {
  name: "LeftSidebar",
};
</script>

<style scoped>
ul {
  background: white;
  padding: 0.5rem;
  list-style: none;
  margin-right: 1.5rem;
}
li {
  margin: 0.5rem;
}
</style>
