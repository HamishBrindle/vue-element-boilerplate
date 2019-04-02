<template>
  <div class="parent">
    <el-container>
      <el-header>
        <h2>Parent</h2>
      </el-header>
      <el-main>
        <transition :name="transitionName">
          <router-view class="slide"></router-view>
        </transition>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transitionName: 'slide-right',
    };
  },
  beforeRouteUpdate(to, from, next) {
    const toDepth = to.path.split('/').length;
    const fromDepth = from.path.split('/').length;
    this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
    next();
  },
};
</script>

<style lang="scss">
</style>
