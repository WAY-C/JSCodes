<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h4>当前求和的10倍为：{{ tenTimesSum }}</h4>
    <h4>我叫{{ name }}，我在{{ address }}</h4>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="ADDITION(n)">+</button>
    <button @click="SUBTRACTION(n)">-</button>
    <button @click="additionOdd(n)">当前奇数时+</button>
    <button @click="additionWait(n)">延迟+</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      n: 1, //   当前选择的数字
    };
  },
  computed: {
    ...mapState(["sum", "name", "address"]),
    ...mapGetters(["tenTimesSum"]),
  },
  methods: {
    ...mapMutations({ ADDITION, SUBTRACTION }),
    ...mapActions(["additionWait", "additionOdd"]),
  },
  mounted() {
    console.log("Count", this);
  },
};
</script>

<style>
button {
  margin-left: 5px;
}
</style>