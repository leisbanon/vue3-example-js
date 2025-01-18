<template>
  <div class="page-layout h-[100vh]">
    <el-container>
      <el-aside width="160px">
        <el-scrollbar>
          <el-menu :unique-opened="true" :default-active="defaultActive">
            <el-sub-menu v-for="(item1, index1) of routers" :key="`${index1}`" :index="`${index1}`">
              <template #title>{{ item1.meta.name }}</template>
              <el-menu-item-group>
                <el-menu-item
                  class="px-[0px]"
                  v-for="(item2, index2) of item1.children"
                  :key="`${index1}-${index2}`"
                  @click="$router.push({ path: `${item1.path}/${item2.path}` })"
                  :index="`${index1}-${index2}`"
                >
                  {{ item2.meta.name }}
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
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const routers = useRouter()
  .getRoutes()
  .filter((v) => {
    let path = v.path
    let pt = path.split('/').filter((j) => j != '')
    return path != '/' && pt.length == 1
  })

const defaultActive = ref('')

onMounted(() => {
  setTimeout(() => {
    // console.log('routers => ', routers)
    // console.log('route => ', route)

    const paths = route.fullPath.split('/').filter((v) => v != '')
    if (paths.length > 1) {
      let [p1, p2] = paths
      for (let i in routers) {
        let iv = routers[i]
        if (iv.path == `/${p1}`) {
          for (let j in iv.children) {
            let jv = iv.children[j]
            if (jv.path == p2) {
              let index = `${i}-${j}`
              defaultActive.value = index
              break
            }
          }
          break
        }
      }
    }
  }, 300)
})
</script>

<style scoped lang="scss">
.el-container {
  // border: 1px #F00 solid;
  height: 100%;

  .el-aside {
    // border: 1px #0f0 solid;
    border-right: 1px #ddd solid;
  }

  .el-main {
    // border: 1px #00f solid;
  }
}
</style>
