<template>
  <el-aside class="sidebar">
    <el-menu
      router
      :default-active="activeIndex"
      :collapse="this.$store.state.sideBarCollapse"
    >
      <img src="../assets/tongji_logo.png" class="avatar" />

      <el-menu-item index="/triangle">
        <i class="el-icon-menu"></i>
        <a slot="title">练习1 三角形问题</a>
      </el-menu-item>

      <!-- <el-menu-item index="/salesManagement">
        <i class="el-icon-s-goods"></i>
        <a slot="title">讨论题-年终考核</a>
      </el-menu-item> -->

      <el-menu-item index="/computerSalesManagement">
        <i class="el-icon-s-order"></i>
        <a slot="title">练习3电脑销售系统</a>
      </el-menu-item>

      <el-menu-item index="/charge">
        <i class="el-icon-s-order"></i>
        <a slot="title">练习6电信收费系统</a>
      </el-menu-item>

        <el-menu-item index="/calendar">
        <i class="el-icon-s-order"></i>
        <a slot="title">练习8万年历问题</a>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: "Sidebar",
  computed: {},
  data() {
    return {
      // 初始化选中tab格
      activeIndex: "/",
    };
  },
  methods: {},
};
</script>

<!-- 导入sidebar css -->
<style scoped src="../assets/css/sidebar.css"></style>

<style>
.el-submenu__title {
  color: rgb(191, 203, 217);
}
</style>