<template>
  <el-menu
    :default-active="activeIndex2"
    class="m-navbar"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item index="1">B2B</el-menu-item>
    <el-menu-item index="3">Orders</el-menu-item>
    <el-menu-item index="4">Mailer</el-menu-item>
    <el-menu-item index="5">Products</el-menu-item>
    <el-menu-item index="6">Marketing</el-menu-item>
    <el-menu-item index="7">Customers</el-menu-item>
    <el-menu-item index="8">Reports</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log('key :', key);
      console.log('keyPath :', keyPath);
      this.$router.push({ path: 'parent' });
    },
  },
};
</script>

<style lang="scss">
.m-navbar {
  background: map-get($map: $colors, $key: primary) !important;
}
</style>
