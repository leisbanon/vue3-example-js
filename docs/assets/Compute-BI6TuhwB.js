import{d as a,g as u,c as l,e,t as s,f as o,o as p}from"./index-CPTvUIiV.js";const c={class:"text-[14px]"},m={class:"flex flex-col leading-[25px]"},f={__name:"Compute",setup(i){const n=a({name:"leisbanon",phone:"158****9672"}),r=u(()=>`姓名：${n.name} - 电话：${n.phone}`);return(d,t)=>(p(),l("main",c,[e("div",m,[e("span",null,"user："+s(n),1),e("span",null,"userFormat => "+s(r.value),1),e("span",{class:"cursor-pointer underline text-blue-600",onClick:t[0]||(t[0]=x=>n.name="GuanQun")},"改变姓名")]),t[1]||(t[1]=e("pre",null,[o("      "),e("code",null,`
        import { reactive, computed } from 'vue'

        const user = reactive({
          name: 'leisbanon',
          phone: '158****9672'
        })

        const userFormat = computed(() => {
          return \`姓名：\${user.name} - 电话：\${user.phone}\`
        })
      `),o(`
    `)],-1))]))}};export{f as default};
