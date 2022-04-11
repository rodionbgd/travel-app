<template>
  <section>
    <h1>{{ experience.name }}</h1>
    <img
      :src="`${publicPath}images/${experience.image}`"
      :alt="experience.name"
    />
    <p>{{ experience.description }}</p>
  </section>
</template>

<script>
import sourceData from "@/data.json";

import { path } from "@/router";
export default {
  name: "ExperienceShow",
  props: {
    id: {
      type: Number,
      required: true,
    },
    experienceSlug: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      publicPath: path,
    };
  },
  computed: {
    destination() {
      return sourceData.destinations.find(
        (destination) => destination.id === this.id
      );
    },
    experience() {
      return this.destination.experiences.find(
        (experience) => experience.slug === this.experienceSlug
      );
    },
  },
};
</script>

<style scoped></style>
