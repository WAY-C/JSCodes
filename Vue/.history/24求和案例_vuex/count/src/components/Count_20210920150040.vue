<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="additionOdd">当前奇数时+</button>
    <button @click="additionWait">延迟+</button>
  </div>
</template>

<script>
export default {
  name: "Count",
  data() {
    return {
      n: 1, //   当前选择的数字
      sum: 0, //   当前和
    };
  },
  methods: {
    addition() {
      this.sum += this.n;
    },
    subtraction() {
      this.sum -= this.n;
    },
    additionOdd() {
      if (this.sum % 2) {
        this.sum += this.n;
      }
    },
    additionWait() {
      setTimeout(() => {
        this.sum += this.n;
      }, 500);
    },
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