<template>
  <main class="text-[14px]">
    <div v-create-anchor-point></div>

    <strong>组合式 API Sutep</strong>
    <p>
      Setup：钩子是组件中使用组合式API的入口，对于单文件组件，推荐使用 script sutep
      的方式已符合更加简洁的编程语法。
    </p>
    <br />

    <strong id="响应式核心">响应式核心</strong>
    <ol>
      <li>Ref()：返回一个响应式、可更改的 ref 对象。</li>
      <li>Computed()：计算属性。</li>
      <li>Reactive()：返回一个对象的响应式代理。</li>
      <li>Readonly()：返回一个原始值的只读代理，不可写。</li>
      <li>
        <p>Watch()：监听器，监听一个或者多个响应式数据源的改变，并在响应式后发生回调。</p>
        <div>当监听一个响应式对象 reactive 时，将自动启动深度监听模式。</div>
        <div>
          参数一：接受侦听的数据源，数据源可为一个函数、ref、reactive或者以上类型组成是数组。
        </div>
        <div>参数二：是在发生变化的回调函数。</div>
        <div class="mb-[8px]">
          参数三：可选参数的对象：
          <div>immediate：监听器创建是立即触发，第一次调用时的旧值是 undefined</div>
          <div>deep：深度监听</div>
          <div>once：回调函数只运行一次</div>
        </div>

        <div class="flex items-center">
          <span class="mr-[12px]">Count：{{ v1 }}</span>
          <span class="text-blue-400 cursor-pointer underline" @click="v1 += 100">加100</span>
        </div>
      </li>
      <pre>
        <code>
        const v1 = ref(100)
        let { stop, pause, resume } = watch(v1, (v, ov) => {
          console.log('Watch v1 => ', v, ov)
        })
        </code>
      </pre>
    </ol>

    <strong id="响应式工具">响应式工具</strong>
    <ol>
      <li>isRef()：检车某一个值是否为 ref。</li>
      <li>unref()：如果参数值是ref，则返回内部值，否者返回参数本身。</li>
      <li>toRef()：规范化ref，创建一个对应的ref，这样创建的ref与原响应式保持一致。</li>
      <li>toValue()：规范化value，与 unref 类型，不同如果是 getter 它将会被调用并返回值。</li>
    </ol>
  </main>
</template>

<script setup>
import { vCreateAnchorPoint } from '@/utils/common'
import { timer } from '@/utils/common'
import { reactive, ref, watch, watchEffect } from 'vue'

const v1 = ref(100)

let { stop, pause, resume } = watch(v1, (v, ov) => {
  console.log('Watch v1 => ', v, ov)
})
</script>

<style scoped lang="scss">
main {
  strong {
    font-size: 16px;
    margin-bottom: 10px;
    display: block;
  }

  ol {
    li {
      margin-bottom: 6px;

      div {
        padding-left: 2em;
      }
    }
  }
}
</style>
