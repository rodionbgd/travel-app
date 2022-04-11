<template>
  <div>
    <h1>Greetings, {{ username }}</h1>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
  name: "TheProtected",
  props: {
    username: {
      type: String,
      required: true,
      default: "",
    },
  },
  methods: {
    logout() {
      window.user = null;
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style scoped></style>
