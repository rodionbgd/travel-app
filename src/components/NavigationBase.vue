<template>
  <app-link
    v-for="destination in destinations"
    :key="destination.id"
    :to="{
      name: 'destination.show',
      params: { id: destination.id, slug: destination.slug },
    }"
  >
    <h2>
      {{ destination.name }}
    </h2>
    <slot name="dest" v-bind="destination"></slot>
  </app-link>
</template>

<script>
import sourceData from "@/data.json";

export default {
  name: "NavigationBase",
  data() {
    return {
      destinations: sourceData.destinations,
    };
  },
};
</script>
