<template>
  <div>
    <ul>
      <li v-for="e in basicList" :key="e.id">
        <router-link :to="{
            path:"/projects/basic/detail",
            query:{
                id:e.id,
                content:e.content
            }
        }">
            {{e.content}}
            </router-link>
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
        { id: "001", content: "个人简历", url: "#" },
        {
          id: "002",
          content: "个人github仓库",
          url: "https://github.com/WAY-C/JSCodes",
        },
        {
          id: "003",
          content: "FreeCodeCamp-JavaScript数据结构及算法认证",
          url: "#",
        },
      ],
    };
  },
};
</script>

<style>
</style>