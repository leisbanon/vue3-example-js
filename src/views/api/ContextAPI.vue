<template>
  <main class="text-[14px]">
    <strong>指令</strong>
    <ol>
      <li>v-on：给元素绑定事件监听。</li>
      <li>
        v-bind：动态绑定一个或者多 attribute，也可以是组件的 prop。
        <div>当用户绑定 class 或 style attribute时，v-bind 支持额外的值类型如数组/对象。</div>
      </li>
      <li>v-pre：跳过该元素以及子元素的所有编辑。</li>
    </ol>
    <br />

    <strong>组件</strong>
    <ol>
      <li>
        KeepAlive：它的功能是在多个组件间切换缓存被移除的组件实例。
        <div class="mb-[8px]">
          应用场景：默认情况下一个组件被替换后会被销毁，这会导致其中组件已改变的状态，当这个组件再次被创建是，会创建一个只带初始化值的新实例。
        </div>

        <p class="flex items-center">
          <KeepAlive>
            <Input v-if="showInput" />
          </KeepAlive>
          <span class="text-blue-400 cursor-pointer pl-[2em]" @click="showInput = !showInput">{{
            textFormat
          }}</span>
        </p>
      </li>
    </ol>
    <br />

    <strong>特殊元素</strong>
    <ol>
      <li>templete：当想要内置指令而不在DOM中渲染元素是，template 标签可以作为占位符使用。</li>
    </ol>
    <br />

    <strong>特殊Attribute</strong>
    <ol>
      <li>key：主要作为 Vue 的虚拟 dom 提示算法，在比较新旧节点列表用于识别的 Vnode。</li>
      <li>
        ref：注册模版的引用，在选项式 api 里，引用将被注册为 this.$refs，在组合式 api
        里将被存储与名字相同的 ref。
      </li>
      <pre>
        <code>
          // 组合式
          &lt;Input ref="refInput" /&gt;

          import { Input } from 'vue'

          const pRef = ref('refInput')
        </code>
      </pre>
    </ol>
  </main>
</template>

<script setup>
import { timer } from '@/utils/common'
import { computed, ref } from 'vue'

import Input from '@/components/Input.vue'

const show = ref(false)
timer(500).then(() => {
  show.value = true
})

const showInput = ref(true)
const textFormat = computed(() => {
  return showInput.value ? 'Hidden' : 'Show'
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
