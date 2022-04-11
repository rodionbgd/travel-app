<template>
  <div class="home">
    <h1>All destinations</h1>
    <button @click="triggerRouterError">Trigger Router Error</button>
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
import { isNavigationFailure, NavigationFailureType } from "vue-router";

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
  methods: {
    async triggerRouterError() {
      const navigationFailure = await this.$router.push("/");
      if (
        isNavigationFailure(navigationFailure, NavigationFailureType.duplicated)
      ) {
        console.log(`router "${navigationFailure.to.fullPath}" is duplicated`);
      }
    },
  },
};
</script>
