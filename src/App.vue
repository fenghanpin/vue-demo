<template>
  <div id="app">
    <!-- 组件容器窗口 -->
    <keep-alive v-if="ISKeep">
      <router-view></router-view>
    </keep-alive>
    <router-view v-if="!ISKeep"></router-view>
  </div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {
            ISKeep: this.$route.meta.ISKeep
        }
    }
}
</script>
