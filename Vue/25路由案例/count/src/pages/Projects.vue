<template>
  <div>
    <h2>Here Are Some Of My Projects</h2>
    <h2>这里会展示一些我的项目</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link
            class="list-group-item"
            active-class="active"
            to="/projects/basic"
          >
            Basic
          </router-link>
        </li>
        <li>
          <router-link
            class="list-group-item"
            active-class="active"
            to="/projects/vuecli"
          >
            Vuecli
          </router-link>
        </li>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "Project",
};
</script>

<style>
</style>