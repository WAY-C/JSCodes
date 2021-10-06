<template>
  <div>
    <ul>
      <li v-for="e in basicList" :key="e.id">
        <router-link
          :to="{
            path: '/projects/basic/detail',
            query: {
              id: e.id,
              content: e.content,
              url: e.url,
            },
          }"
        >
          {{ e.content }}
        </router-link>
        <button @click="pushShow(e)">push查看</button>
        <button @click="replaceShow(e)">replace查看</button>
      </li>
    </ul>
    <hr />
    <router-view></router-view>
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
  methods: {
    pushShow(e) {
      this.$router.push({
        name: "DETAIL",
        query: {
          id: e.id,
          content: e.content,
          url: e.url,
        },
      });
    },
    replaceShow(e) {
      this.$router.replace({
        name: "DETAIL",
        query: {
          id: e.id,
          content: e.content,
          url: e.url,
        },
      });
    },
  },
};
</script>

<style>
</style>