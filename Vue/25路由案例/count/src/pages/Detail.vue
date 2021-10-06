<template>
  <ul>
    <li>编号:{{ $route.query.id }}</li>
    <li>内容:{{ $route.query.content }}</li>
    <li>链接:{{ $route.query.url }}</li>
  </ul>
</template>

<script>
export default {};
</script>

<style>
</style>