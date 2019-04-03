<template>
  <div>
    <m-navbar />
    <el-container>
      <transition name="fade" mode="out-in">
        <slot />
      </transition>
    </el-container>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    'm-navbar': Navbar,
  },
};
</script>

<style>

</style>
