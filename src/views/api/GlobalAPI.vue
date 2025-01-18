<template>
  <main ref="globalApiRef" class="text-[14px]">
    <div v-create-anchor-point></div>

    <!-- Mixins -->
    <div id="混入 Mixins">
      <strong>Mixins</strong>
      <p>
        mixins在vue3中使用主要是为了向后兼容，更加推荐使用的是组合式函数，组合式函数是利用vue的组合式api来封装和复用状态逻辑的函数。
      </p>
      <p>
        在应用场景下，经常会复用公共任务的逻辑，可以在不同组件内共用这一逻辑，那么这个时候就可以使用组合式函数的行为。
      </p>
      <p class="text-red-500">组合式函数我们约定用驼峰命名，并以 use 作为开头。</p>

      <p>Use：x轴：{{ axis.x }}，y轴：{{ axis.y }}</p>
      <pre>
        <code>
          // count.mixin.js
          import { ref } from "vue"

          export const useAxis = () => {
            const x = ref(0)
            const y = ref(1)

            timer(1500).then(() => {
              x.value = 100
            })

            return { x, y }
          }

          // use mixin
          import { useAxis } from './mixins/count.mixin'
        </code>
      </pre>
    </div>

    <!-- Provide -->
    <div id="依赖注入 Provide">
      <strong>Provide & Inject</strong>
      <p>provide 依赖注入可以在应用中所有的后代组件中被使用。</p>
      <p>
        provide
        作为一个函数，其中第一个参数作为key，第二个参数作为值进行传入。在后代组件通过inject注入。
      </p>
      <pre>
        <code>
          // 父组件 Provide
          import { provide } from 'vue';
          const message = {
            name: 'Leisbanon',
            message: 'Hello Vue3',
          }

          provide('message', message)

          // 子组件 Inject
          import { inject } from 'vue';
          const message = inject('message')
          console.log('Proinde message => ', message)
        </code>
      </pre>
    </div>

    <!-- UserId -->
    <div id="唯一ID Userid">
      <strong>UserId</strong>
      <p>
        userId
        生成每个id在每个应用内都是唯一的，它可以用做表单元素、无障碍生成的元素id。在同一组件内多次调用会生成不同的ID。
      </p>
      <pre>
        <code>
          import { useId } from 'vue';
          console.log('useId => ', useId()) // v-0
          console.log('useId => ', useId()) // v-1
        </code>
      </pre>
    </div>

    <!-- Directive -->
    <div id="自定义指令 directive">
      <strong>Directive</strong>
      <p>
        directive 自定义指令；除了vue内置的一系列指令，比如v-model,
        v-if等，vue还允许你注册自定义指令。
      </p>
      <p>
        前面已经使用两中重用vue代码的方式，分别是组件和组件函数，组件在于页面构建的模块，组件函数侧重于有状态的逻辑，而自定义指令是为了重用涉及普通元素底层DOM的访问。
      </p>
      <p>
        一个自定义指令是一个包含组件生命周期的对象来定义，钩子函数会接受到来自指令所绑定的元素作为参数。
      </p>
      <p>如下一个自定义指令的例子，当vue元素被插入到DOM中后，该指令会将一个class插入到元素中：</p>
      <p v-highlight.v1.v2="isHighlight" class="p-[12px] bg-blue-400 rounded-[5px]">
        Directive：Hello Vue3
      </p>

      <p class="text-red-500">
        在 vue setup 中，任何以 v 开头的驼峰命令的变量都可以当做自定义指令使用。
      </p>
      <pre>
        <code>
          // Element node
          v-highlight.v1.v2="isHighlight" class="p-[12px] bg-blue-400 rounded-[5px]"

          // Directive
          const vHighlight = {
            show(el) {
              el.classList.add('highlight')
            },
            hidden(el) {
              el.classList.remove('highlight')
            },
            /**
            *
            * @param el 指令绑定到的元素
            * @param binding 指令绑定包含的对象（https://cn.vuejs.org/guide/reusability/custom-directives#hook-arguments）
            */
            mounted: (el, binding) => {
              if (binding.value) vHighlight.show(el)
              else vHighlight.hidden(el)
            },
            updated: (el, binding) => {
              if (binding.value) vHighlight.show(el)
              else vHighlight.hidden(el)
            }
          }
        </code>
      </pre>
    </div>
  </main>
</template>

<script setup>
import { inject, onMounted, ref } from 'vue'
import { useAxis, timer } from './mixins/count.mixin'
import { useRoute, useRouter } from 'vue-router'
import { vCreateAnchorPoint } from '@/utils/common'

const route = useRoute()
const router = useRouter()

const globalApiRef = ref(null)
const ids = ref([])

const axis = useAxis()

const message = inject('message')
console.log('Proinde message => ', message)

onMounted(() => {
  let _ids = []
  const els = globalApiRef.value.querySelectorAll('[id]')
  for (let el of els) {
    _ids.push(el.getAttribute('id'))
  }

  ids.value = _ids
})

const isHighlight = ref(true)
timer(1500).then(() => {
  isHighlight.value = false
})
// 自定义指令
const vHighlight = {
  show(el) {
    el.classList.add('highlight')
  },
  hidden(el) {
    el.classList.remove('highlight')
  },
  /**
   *
   * @param el 指令绑定到的元素
   * @param binding 指令绑定包含的对象（https://cn.vuejs.org/guide/reusability/custom-directives#hook-arguments）
   */
  mounted: (el, binding) => {
    if (binding.value) vHighlight.show(el)
    else vHighlight.hidden(el)
  },
  updated: (el, binding) => {
    if (binding.value) vHighlight.show(el)
    else vHighlight.hidden(el)
  },
}
</script>

<style scoped lang="scss">
main {
  strong {
    font-size: 16px;
    margin-bottom: 10px;
    display: block;
  }

  p {
    text-indent: 2em;
    margin-bottom: 2px;
  }

  .highlight {
    color: red;
  }
}
</style>
