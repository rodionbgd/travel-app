<template>
  <div class="home">
    <h1>All destinations</h1>
    <div class="destinations">
      <navigation-base>
        <template #dest="{ image, slug }">
          <img :src="`${publicPath}images/${image}`" :alt="slug" />
        </template>
      </navigation-base>
    </div>
  </div>
</template>

<script>
import sourceData from "@/data.json";
import { path } from "@/router";
import NavigationBase from "@/components/NavigationBase.vue";

export default {
  name: "MyHome",
  components: {
    NavigationBase,
  },
  data() {
    return {
      destinations: sourceData.destinations,
      publicPath: path,
      counter: 0,
    };
  },
};
</script>
