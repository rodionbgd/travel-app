<template>
  <TheNavigation />
  <div class="container">
    <router-view
      class="view left-sidebar"
      name="LeftSidebar"
      v-slot="{ Component, route }"
    >
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="route.path"></component>
      </transition>
    </router-view>
    <router-view class="main-view" v-slot="{ Component, route }">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="route.path"></component>
      </transition>
    </router-view>
  </div>
</template>

<script>
import TheNavigation from "@/components/TheNavigation.vue";

export default {
  components: {
    TheNavigation,
  },
};
</script>

<style lang="css">
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.container {
  display: flex;
}
.left-sidebar {
  width: 20%;
}
.main-view {
  width: 100%;
}
</style>
