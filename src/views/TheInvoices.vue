<template>
  <div>
    <h1>Invoices</h1>
  </div>
</template>

<script>
import { onBeforeRouteLeave } from "vue-router";

export default {
  name: "TheInvoices",
  setup() {
    onBeforeRouteLeave(() => {
      const answer = window.confirm("Are you sure?");
      if (!answer) {
        return false;
      }
    });
  },
};
</script>

<style scoped></style>
