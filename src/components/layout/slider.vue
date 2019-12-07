<template>
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu unique-opened router :collapse="false">
      <div v-for="(route,index) in routers" :key="index">
        <el-submenu :index="route.name">
          <template slot="title">
            <i :class="route.meta.icon"></i>
            {{route.meta.name}}
          </template>
          <el-menu-item
            v-for="(childRoute, childIndex) in route.children"
            :key="childIndex"
            :index="childRoute.name"
            :route="childRoute"
          >{{childRoute.meta.name}}</el-menu-item>
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