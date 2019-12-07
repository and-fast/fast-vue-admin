<template>
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu unique-opened router>
      <div v-for="(router,index) in routers" :key="index">
        <el-submenu :key="index" :index="router.name">
          <template slot="title">
            <i :class="router.meta.icon"></i>
            {{router.meta.name}}
          </template>
          <el-menu-item
            v-for="(childRouter, childIndex) in router.children"
            :key="childIndex"
            :index="childRouter.name"
            :route="childRouter"
          >{{childRouter.meta.name}}</el-menu-item>
        </el-submenu>
      </div>
    </el-menu>
  </el-aside>
</template>

<script>
import path from "../../router/sliderPath";
export default {
  data() {
    return { routers: path };
  }
};
</script>

<style scoped lang='scss'>
.el-aside {
  color: #333;
  height: 100%;
  overflow-y: auto;
}
</style>