<template>
  <div id="app">
    <img alt="Vue logo" src="@/assets/logo.png">
    <ul class="nav">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <router-link to="/parent">Parent</router-link>
      </li>
      <li>
        <router-link to="/parent/foo">Parent/foo</router-link>
      </li>
      <li>
        <router-link to="/parent/bar">Parent/bar</router-link>
      </li>
    </ul>
    <el-container>
      <el-main>
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="scss">
@import "assets/styles/settings.scss";

#app {
  text-align: center;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: center;
  li {
    list-style: none;
    padding: 0.5rem;
  }
}

</style>
