import{b as t,h as l,i as a,j as r,k as u,l as p,m as c,c as d,e as n,t as f,f as s,o as i}from"./index-DUUB1f29.js";const m={class:"text-[14px]"},g={class:"flex"},v={__name:"AppStatus",setup(B){const e=t(!1);return l(()=>{console.log("组件被挂载之前被调用...")}),a(()=>{console.log("组件挂载完成后执行...")}),r(()=>{console.log("组件实例被销毁之前调用...")}),u(()=>{console.log("组件实例被销毁之后调用...")}),p(()=>{console.log("DOM数更新之前调用...")}),c(()=>{console.log("DOM数更新之后调用...")}),(U,o)=>(i(),d("main",m,[o[1]||(o[1]=n("div",{class:"mb-[12px]"}," 组合式 API：生命周期钩子：https://cn.vuejs.org/api/composition-api-lifecycle ",-1)),n("div",g,[n("span",null,"status："+f(e.value),1),n("span",{class:"ml-[12px] text-blue-600 cursor-pointer",onClick:o[0]||(o[0]=M=>e.value=!e.value)},"变更状态")]),o[2]||(o[2]=n("pre",null,[s("      "),n("code",null,`
        import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref } from 'vue'

        const status = ref(false)

        onBeforeMount(() => {
          console.log('组件被挂载之前被调用...')
        })

        onMounted(() => {
          console.log('组件挂载完成后执行...')
        })

        onBeforeUnmount(() => {
          console.log('组件实例被销毁之前调用...')
        })

        onUnmounted(() => {
          console.log('组件实例被销毁之后调用...')
        })

        onBeforeUpdate(() => {
          console.log('DOM数更新之前调用...')
        })

        onUpdated(() => {
          console.log('DOM数更新之后调用...')
        })
      `),s(`
    `)],-1))]))}};export{v as default};
