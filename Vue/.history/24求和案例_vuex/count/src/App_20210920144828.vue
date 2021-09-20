<template>
  <div>
    <Count />
  </div>
</template>

<script>
import Count from "./components/Count";
import Count from "./components/Count.vue";
export default {
  name: "App",
  components: { CountCount },
  mounted() {
    console.log("App", this);
  },
};
</script>

<style>
</style>
