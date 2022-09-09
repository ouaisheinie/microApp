<template>
  <div className="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            :router="true"
            active-text-color="red"
            background-color="pink"
            class="el-menu-vertical-demo"
            default-active="1"
            text-color="#fff"
          >
            <el-menu-item index="/">Home</el-menu-item>
            <el-menu-item index="/vue">Vue子应用</el-menu-item>
            <el-menu-item index="/react">React子应用</el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
          <div id="vue"></div>
          <div id="react"></div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>

</script>

<style scoped lang="less">

</style>
