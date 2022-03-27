<template>
  <div id="nav">
    <router-link id="logo" to="/">
      <img
        src="https://img.icons8.com/external-wanicon-flat-wanicon/64/000000/external-palm-tropical-wanicon-flat-wanicon.png"
        alt=""
      />
    </router-link>
    <NavigationBase />
  </div>
</template>

<script>
import NavigationBase from "@/components/NavigationBase.vue";

export default {
  name: "TheNavigation",
  components: {
    NavigationBase,
  },
};
</script>

<style>
#nav .active-link {
  color: #00fffe;
}
</style>
