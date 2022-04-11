<template>
  <div class="login">
    <form action="" class="form" @submit.prevent="login">
      <h1>Login</h1>
      <label for="username">Username</label>
      <input v-model="username" id="username" type="text" class="input" />
      <label for="password">Password</label>
      <input v-model="password" id="password" type="text" class="input" />
      <button class="btn">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "TheLogin",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      window.user = this.username;
      const redirectPath = this.$route.query.redirect ?? "/protected";
      this.$router.push(redirectPath);
    },
  },
};
</script>

<style scoped></style>
