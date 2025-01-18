<template>
  <main class="text-[14px]">
    <p class="text-[18px] mb-[12px]">Pinia 对比 Vuex</p>
    <ol>
      <li>https://pinia.vuejs.org/zh/core-concepts</li>
      <li>Pinia 提供更简单的API，提供了符合组合式API的风格，同时支持与 TypeScript 搭配使用</li>
      <li>对比 Vuex，Mutation 已被弃用，它被认为是极其冗余的</li>
      <li>对比 Vuex 无需要动态添加Store，Pinia 默认是动态的</li>
    </ol>
    <hr class="my-[12px]" />

    <div>
      <p>UserInfo Store：{{ uinfo.data }}</p>
      <p class="cursor-pointer text-blue-600 select-none" @click="onSetStore">
        设置 UserInfo Store Name
      </p>
    </div>

    <pre>
      <code>
        // Store Code
        import { defineStore } from "pinia";
        import { reactive } from "vue";

        export const userInfoStore = defineStore('userInfo', () => {
          let data = reactive({
            name: 'Lesbnaon',
            phone: '158****9672',
            city: '长沙',
          })

          const update = (value) => {
            data = value
          }

          return {
            data, update
          }
        })
      </code>
    </pre>

    <pre>
      <code>
        // Store Use
        import { userInfoStore } from '@/stores/userinfo'

        const uinfo = userInfoStore()
        console.log(uinfo.data)

        const onSetStore = () => {
          let __uinfo = uinfo.data
          __uinfo.name = 'GuanQun'
          console.log(__uinfo)

          uinfo.update({ ...__uinfo })
        }
      </code>
    </pre>
  </main>
</template>

<script setup>
import { userInfoStore } from '@/stores/userinfo'

const uinfo = userInfoStore()
console.log(uinfo.data)

const onSetStore = () => {
  let __uinfo = uinfo.data
  __uinfo.name = 'GuanQun'
  console.log(__uinfo)

  uinfo.update({ ...__uinfo })
}
</script>

<style scoped lang="scss"></style>
