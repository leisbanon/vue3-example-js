import{b as a,d as r,c as u,e,t,f as l,o as c}from"./index-DUUB1f29.js";const m={class:"text-[14px]"},i={class:"flex mb-[12px]"},p={class:"flex mb-[12px]"},_={__name:"Ref",setup(f){const s=a(!0),o=r({name:"Leisbanon",email:"15800349672@163.com"});return console.log("status => ",s.value),console.log("form => ",o),(v,n)=>(c(),u("main",m,[e("div",i,[e("span",null,"状态："+t(s.value),1),e("span",{class:"ml-[20px] cursor-pointer underline text-blue-600",onClick:n[0]||(n[0]=d=>s.value=!s.value)},"点击改变状态")]),e("div",p,[e("span",null,"Form："+t(o),1)]),n[1]||(n[1]=e("hr",null,null,-1)),n[2]||(n[2]=e("pre",null,[l("      "),e("code",null,`
        import { reactive, ref } from 'vue';

        // 深层响应性
        const status = ref(true)

        // reactive 将使对对象本身具有响应性
        const form = reactive({
        name: 'Leisbanon',
        email: '15800349672@163.com'
        })

        console.log('status => ', status.value)
        console.log('form => ', form)
      `),l(`
    `)],-1))]))}};export{_ as default};
