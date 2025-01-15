<template>
  <div class="page-layout h-[100vh]">
    <el-container>
      <el-aside width="160px">
        <el-scrollbar>
          <el-menu :unique-opened="true">
            <el-sub-menu v-for="(item1, index1) of routers" :key="`${index1}`" :index="`${index1}`">
              <template #title>{{ item1.meta.name }}</template>
              <el-menu-item-group>
                <el-menu-item v-for="(item2, index2) of item1.children" :key="`${index1}-${index2}`"
                  :index="`${index1}-${index2}`">
                  <RouterLink :to="`${item1.path}/${item2.path}`">{{ item2.meta.name }}</RouterLink>
                </el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
          </el-menu>
        </el-scrollbar>
      </el-aside>

      <el-main>
        <RouterView />
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

const routers = useRouter().getRoutes().filter(v => {
  let path = v.path
  let pt = path.split('/').filter(j => j != '')
  return path != '/' && pt.length == 1
})

console.log('routers => ', routers)
console.log(useRoute())


</script>

<style scoped lang="scss">
.el-container {
  // border: 1px #F00 solid;
  height: 100%;

  .el-aside {
    // border: 1px #0f0 solid;
    border-right: 1px #DDD solid;
  }

  .el-main {
    // border: 1px #00f solid;
  }
}
</style>
