<template>
  <div id="app">
    <component :is="layout">
      <router-view></router-view>
    </component>
  </div>
</template>

<script>
import jsonVars from '@/assets/styles/json/_variables.json';

console.log('jsonVars :', jsonVars);

const defaultLayout = 'default';
export default {
  name: 'app',
  computed: {
    layout() {
      return `${(this.$route.meta.layout || defaultLayout)}-layout`;
    },
  },
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
