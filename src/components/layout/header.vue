<template>
  <el-header>
    <div class="nav">
      <div class="collapse"><i class="el-icon-s-fold"></i></div>
      <breadcrumb />
    </div>

    <dir>
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
    </dir>
  </el-header>
</template>

<script>
import breadcrumb from "./breadcrumb";
export default {
  components: { breadcrumb },

  data() {
    return { collapse: true };
  },

  watch: {
    collapse() {
      this.$emit("collapseFun", this.collapse);
    }
  }
};
</script>

<style scoped lang='scss'>
.el-header {
  padding: 0;
  background-color: #fefefe;
  border-bottom: #efefef solid 1px;
  color: #333;
  line-height: 60px;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
}

.collapse {
  margin: 0;
  padding: 0;
  width: 52px;
  height: 100%;
  font-size: 2em;
  cursor: pointer;
  align-items: center;
  
  :hover {
    background-color: #efefef;
  }
}

.nav {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>