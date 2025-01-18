import{u}from"./userinfo-BSIQoUJW.js";import{c as s,e as n,t as a,u as i,f as r,o as p}from"./index-DUUB1f29.js";const f={class:"text-[14px]"},S={__name:"Use",setup(d){const o=u();console.log(o.data);const l=()=>{let t=o.data;t.name="GuanQun",console.log(t),o.update({...t})};return(t,e)=>(p(),s("main",f,[e[0]||(e[0]=n("p",{class:"text-[18px] mb-[12px]"},"Pinia 对比 Vuex",-1)),e[1]||(e[1]=n("ol",null,[n("li",null,"https://pinia.vuejs.org/zh/core-concepts"),n("li",null,"Pinia 提供更简单的API，提供了符合组合式API的风格，同时支持与 TypeScript 搭配使用"),n("li",null,"对比 Vuex，Mutation 已被弃用，它被认为是极其冗余的"),n("li",null,"对比 Vuex 无需要动态添加Store，Pinia 默认是动态的")],-1)),e[2]||(e[2]=n("hr",{class:"my-[12px]"},null,-1)),n("div",null,[n("p",null,"UserInfo Store："+a(i(o).data),1),n("p",{class:"cursor-pointer text-blue-600 select-none",onClick:l},"设置 UserInfo Store Name")]),e[3]||(e[3]=n("pre",null,[r("      "),n("code",null,`
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
      `),r(`
    `)],-1)),e[4]||(e[4]=n("pre",null,[r("      "),n("code",null,`
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
      `),r(`
    `)],-1))]))}};export{S as default};
