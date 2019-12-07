<template>
  <el-container>
    <div class="left-slider">
      <admin-slider></admin-slider>
    </div>
    <div class="right-main">
      <admin-header></admin-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </div>
  </el-container>
</template>

<script>
import adminHeader from "../components/layout/header.vue";
import adminSlider from "../components/layout/slider.vue";

export default {
  components: {
    adminHeader,
    adminSlider
  }
};
</script>

<style scoped lang='scss'>
.el-container {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  overflow: hidden;
  display: flex;

  .left-slider {
    width: auto;
  }

  .right-main {
    flex: 1;
    position: relative;

    .el-main {
      height: 100%;
      overflow-y: auto;
    }
  }
}
</style>