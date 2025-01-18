<template>
  <main class="text-[14px]">
    <strong>Script Sutep</strong>
    <ol>
      <li>
        <span>defineProps()、defineEmits()</span>
        <pre>
          <code>
            const props = defineProps({
              foo: String
            })

            const emit = defineEmits(['change', 'delete'])
          </code>
        </pre>
      </li>
      <li>
        <span
          >defineModel：宏用来声明一个双向绑定的 Props，通过父组件的 v-model
          来使用。https://cn.vuejs.org/api/sfc-script-setup.html#definemodel</span
        >
        <div>
          defineModel() 返回的值是一个 ref，它可以像 ref
          一样被修改和访问，因此它能起到在父子组件中双向绑定的作用。
        </div>
        <div class="mt-[8px] flex items-center">
          <VmodelExample v-model:name="form.name" v-model:age="form.age" />
        </div>

        <pre>
          <code v-pre>
            // 父组件
            &lt;VmodelExample v-model:name="form.name" v-model:age="form.age" />
            const form = reactive({
              name: 'Leisbanon',
              age: 20,
            })

            // 子组件 VmodelExample.vue
            &lt;template>
              &lt;span @click="name = 'GuanQun'">变更 &lt;/span>
              &lt;span @click="age += 1">添加&lt;/span>
            &lt;/template>

            &lt;script setup>
              // DefineModel
              const name = defineModel('name')
              const age = defineModel('age')
            &lt;/script>
          </code>
        </pre>
      </li>
      <li>defineExpost：script setup 组件默认是关闭的，通过显式指定的导出。</li>
    </ol>

    <strong>CSS</strong>
    <ol>
      <li>scoped：组件样式不被渗透。</li>
      <li>deep：深度选择器，.wrapper :deep(.list){ }。</li>
      <li>
        slotted：插槽选择器，默认组件内样式影响到 slot 渲染出的内容，如明确使用组件内样式
        :slotted(div){ }。
      </li>
    </ol>
  </main>
</template>

<script setup>
import VmodelExample from '@/components/VmodelExample.vue'
import { reactive } from 'vue'

const form = reactive({
  name: 'Leisbanon',
  age: 20,
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
