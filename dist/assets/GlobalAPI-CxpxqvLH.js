import{b as d,_ as b,i as I,c as v,s as g,u as r,e as n,t as p,f as l,v as y,x as A,o as m,y as H,z as D}from"./index-DUUB1f29.js";import{v as P}from"./common-CEOzpn3f.js";const x=t=>new Promise(i=>{setTimeout(()=>{i()},t)}),j=()=>{const t=d(0),i=d(1);return x(1500).then(()=>{t.value=100}),{x:t,y:i}},w={id:"混入 Mixins"},k={id:"自定义指令 directive"},L={class:"p-[12px] bg-blue-400 rounded-[5px]"},M={__name:"GlobalAPI",setup(t){H(),D();const i=d(null),f=d([]),u=j(),h=A("message");console.log("Proinde message => ",h),I(()=>{let s=[];const e=i.value.querySelectorAll("[id]");for(let c of e)s.push(c.getAttribute("id"));f.value=s});const a=d(!0);x(1500).then(()=>{a.value=!1});const o={show(s){s.classList.add("highlight")},hidden(s){s.classList.remove("highlight")},mounted:(s,e)=>{e.value?o.show(s):o.hidden(s)},updated:(s,e)=>{e.value?o.show(s):o.hidden(s)}};return(s,e)=>(m(),v("main",{ref_key:"globalApiRef",ref:i,class:"text-[14px]"},[g(n("div",null,null,512),[[r(P)]]),n("div",w,[e[0]||(e[0]=n("strong",null,"Mixins",-1)),e[1]||(e[1]=n("p",null,"mixins在vue3中使用主要是为了向后兼容，更加推荐使用的是组合式函数，组合式函数是利用vue的组合式api来封装和复用状态逻辑的函数。",-1)),e[2]||(e[2]=n("p",null,"在应用场景下，经常会复用公共任务的逻辑，可以在不同组件内共用这一逻辑，那么这个时候就可以使用组合式函数的行为。",-1)),e[3]||(e[3]=n("p",{class:"text-red-500"},"组合式函数我们约定用驼峰命名，并以 use 作为开头。",-1)),n("p",null,"Use：x轴："+p(r(u).x)+"，y轴："+p(r(u).y),1),e[4]||(e[4]=n("pre",null,[l("        "),n("code",null,`
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
        `),l(`
      `)],-1))]),e[13]||(e[13]=y(`<div id="依赖注入 Provide" data-v-470d7741><strong data-v-470d7741>Provide &amp; Inject</strong><p data-v-470d7741>provide 依赖注入可以在应用中所有的后代组件中被使用。</p><p data-v-470d7741>provide 作为一个函数，其中第一个参数作为key，第二个参数作为值进行传入。在后代组件通过inject注入。</p><pre data-v-470d7741>        <code data-v-470d7741>
          // 父组件 Provide
          import { provide } from &#39;vue&#39;;
          const message = {
            name: &#39;Leisbanon&#39;,
            message: &#39;Hello Vue3&#39;,
          }

          provide(&#39;message&#39;, message)

          // 子组件 Inject
          import { inject } from &#39;vue&#39;;
          const message = inject(&#39;message&#39;)
          console.log(&#39;Proinde message =&gt; &#39;, message)
        </code>
      </pre></div><div id="唯一ID Userid" data-v-470d7741><strong data-v-470d7741>UserId</strong><p data-v-470d7741>userId 生成每个id在每个应用内都是唯一的，它可以用做表单元素、无障碍生成的元素id。在同一组件内多次调用会生成不同的ID。</p><pre data-v-470d7741>        <code data-v-470d7741>
          import { useId } from &#39;vue&#39;;
          console.log(&#39;useId =&gt; &#39;, useId()) // v-0
          console.log(&#39;useId =&gt; &#39;, useId()) // v-1
        </code>
      </pre></div>`,2)),n("div",k,[e[6]||(e[6]=n("strong",null,"Directive",-1)),e[7]||(e[7]=n("p",null,"directive 自定义指令；除了vue内置的一系列指令，比如v-model, v-if等，vue还允许你注册自定义指令。",-1)),e[8]||(e[8]=n("p",null,"前面已经使用两中重用vue代码的方式，分别是组件和组件函数，组件在于页面构建的模块，组件函数侧重于有状态的逻辑，而自定义指令是为了重用涉及普通元素底层DOM的访问。",-1)),e[9]||(e[9]=n("p",null,"一个自定义指令是一个包含组件生命周期的对象来定义，钩子函数会接受到来自指令所绑定的元素作为参数。",-1)),e[10]||(e[10]=n("p",null,"如下一个自定义指令的例子，当vue元素被插入到DOM中后，该指令会将一个class插入到元素中：",-1)),g((m(),v("p",L,e[5]||(e[5]=[l("Directive：Hello Vue3")]))),[[o,a.value,void 0,{v1:!0,v2:!0}]]),e[11]||(e[11]=n("p",{class:"text-red-500"},"在 vue setup 中，任何以 v 开头的驼峰命令的变量都可以当做自定义指令使用。",-1)),e[12]||(e[12]=n("pre",null,[l("        "),n("code",null,`
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
        `),l(`
      `)],-1))])],512))}},B=b(M,[["__scopeId","data-v-470d7741"]]);export{B as default};
