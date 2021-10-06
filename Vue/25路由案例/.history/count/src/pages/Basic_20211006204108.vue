<template>
  <div>
    <ul>
      <li v-for="e in basicList" :key="e.id">
        <a href="/message1">{{ e.content }}</a
        >&nbsp;&nbsp;
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Basic",
  data() {
    return {
      basicList: [
        { id: "001", content: "个人简历" },
        { id: "002", content: "个人github仓库" },
        { id: "003", content: "FreeCodeCamp-JavaScript数据结构及算法认证" },
      ],
    };
  },
};
</script>

<style>
</style>