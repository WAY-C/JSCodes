<template>
  <div>
    <Count />
  </div>
</template>

<script>
import Count from "./components/Count";
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
