<template>
  <div>
    <a
      target="_blank"
      rel="noopener"
      class="external-link"
      v-if="isExternal"
      :href="to"
    >
      <slot />
    </a>
    <router-link v-else v-bind="$props">
      <slot />
    </router-link>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  name: "AppLink",
  props: {
    ...RouterLink.props,
  },
  computed: {
    isExternal() {
      return typeof this.to === "string" && this.to.startsWith("http");
    },
  },
};
</script>

<style scoped>
.external-link:hover {
  scale: 1.1;
}
</style>
