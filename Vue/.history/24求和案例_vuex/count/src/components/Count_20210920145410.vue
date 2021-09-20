<template>
  <div>
    <h1>当前求和为：</h1>
    <select v-model="n">
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
      //   当前选择的数字
      n: 1,
      //   当前和
      sum: 0,
    };
  },
};
</script>

<style>
button {
  margin-left: 5px;
}
</style>