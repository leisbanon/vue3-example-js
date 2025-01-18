<template>
  <main class="text-[14px]">
    <div>
      <strong>定义 Store</strong>
      <p>
        Store它的第一个参数标识为 Store Name Id，是必须传入的。第二个参数可接受两中种类型，Setup
        函数或者Option对象。
      </p>
      <p>Option Store 与选项式API相似，Setup Store 与Vue组合式API相似。</p>
    </div>

    <div>
      <strong>State</strong>
      <p>
        state 是 store 的核心，它表示应用的状态。通过 store 实例直接访问 state
        并可直接对其进行读写。
      </p>
      <p>注意：如果在 state 中未被定义，则该属性不能被添加；即 state 必须被初始化状态。</p>
    </div>

    <div>
      <strong>Getter</strong>
      <p>
        getter 等同于 store state 的计算值，可以通过 defineStore() 中的 getters 属性来决定它们。
      </p>
      <p>
        getter 通常定义在 store 选项式中，因为在 setup 中，可以直接访问任何 getter，与 state
        定义效果一样。
      </p>
    </div>

    <div>
      <strong>Action</strong>
      <p>action 相当于组件中的 methods，它通过 defineStore() 中的 actions 属性来定义。</p>
      <p>
        action 不同于 getters ，action 可以是异步的，意味着可以在里面使用 async await 调用其他异步
        api。
      </p>
    </div>

    <pre>
      <code>
        // Store 选项式定义
        import { defineStore } from 'pinia'

        const useStore = defineStore('storeId', {
          // State
          state: () => {
            return {
              count: 0,
              ...
            }
          },
          // Getter
          getters: {
            getCount: (state) => state.count * 2,
          },
          // Action
          actions: {
            async updateCount() {
              await timer(300)
              this.state.count = Math.round(100 * Math.random())
            }
          }.
        })
      </code>
    </pre>
  </main>
</template>

<script setup>
import { userInfoStore } from '@/stores/userinfo'
console.log('userInfoStore => ', {
  ...userInfoStore().data,
})
</script>

<style scoped lang="scss">
main {
  strong {
    display: inline-block;
    font-size: 17px;
    margin-bottom: 12px;
  }

  p {
    text-indent: 2em;
    margin-bottom: 8px;
  }
}
</style>
