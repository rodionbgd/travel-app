<template>
  <div class="home">
    <h1>All destinations</h1>
    <div class="destinations">
      <router-link
        v-for="destination in destinations"
        :key="destination.id"
        :to="destination.slug"
      >
        <h2>
          {{ destination.name }}
        </h2>
        <img
          :src="`${publicPath}images/${destination.image}`"
          :alt="destination.slug"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
import sourceData from "@/data.json";
import { path } from "@/router";

export default {
  name: "MyHome",

  data() {
    return {
      destinations: sourceData.destinations,
      publicPath: path,
    };
  },
};
</script>

<style scoped></style>
