import{_ as d,D as p,o as m,c as r,e,t as i,d as f,f as l,a as g}from"./index-DUUB1f29.js";const v={class:"vmodel-example flex items-center"},c={class:"mr-[40px]"},x={class:"mr-[12px]"},E={class:"mr-[12px]"},M={__name:"VmodelExample",props:{name:{},nameModifiers:{},age:{},ageModifiers:{}},emits:["update:name","update:age"],setup(o){const t=p(o,"name"),a=p(o,"age");return(n,s)=>(m(),r("div",v,[e("div",c,[e("span",x,"姓名："+i(t.value),1),e("span",{class:"text-blue-400 cursor-pointer select-none",onClick:s[0]||(s[0]=u=>t.value="GuanQun")},"变更")]),e("div",null,[e("span",E,"年龄："+i(a.value),1),e("span",{class:"text-blue-400 cursor-pointer select-none",onClick:s[1]||(s[1]=u=>a.value+=1)},"添加")])]))}},V=d(M,[["__scopeId","data-v-e2468aa8"]]),_={class:"text-[14px]"},k={class:"mt-[8px] flex items-center"},S={__name:"ComponentAPI",setup(o){const t=f({name:"Leisbanon",age:20});return(a,n)=>(m(),r("main",_,[n[7]||(n[7]=e("strong",null,"Script Sutep",-1)),e("ol",null,[n[5]||(n[5]=e("li",null,[e("span",null,"defineProps()、defineEmits()"),e("pre",null,[l("          "),e("code",null,`
            const props = defineProps({
              foo: String
            })

            const emit = defineEmits(['change', 'delete'])
          `),l(`
        `)])],-1)),e("li",null,[n[2]||(n[2]=e("span",null,"defineModel：宏用来声明一个双向绑定的 Props，通过父组件的 v-model 来使用。https://cn.vuejs.org/api/sfc-script-setup.html#definemodel",-1)),n[3]||(n[3]=e("div",null,"defineModel() 返回的值是一个 ref，它可以像 ref 一样被修改和访问，因此它能起到在父子组件中双向绑定的作用。",-1)),e("div",k,[g(V,{name:t.name,"onUpdate:name":n[0]||(n[0]=s=>t.name=s),age:t.age,"onUpdate:age":n[1]||(n[1]=s=>t.age=s)},null,8,["name","age"])]),n[4]||(n[4]=e("pre",null,[l("          "),e("code",null,`
            // 父组件
            <VmodelExample v-model:name="form.name" v-model:age="form.age" />
            const form = reactive({
              name: 'Leisbanon',
              age: 20,
            })

            // 子组件 VmodelExample.vue
            <template>
              <span @click="name = 'GuanQun'">变更 </span>
              <span @click="age += 1">添加</span>
            </template>

            <script setup>
              // DefineModel
              const name = defineModel('name')
              const age = defineModel('age')
            <\/script>
          `),l(`
        `)],-1))]),n[6]||(n[6]=e("li",null,"defineExpost：script setup 组件默认是关闭的，通过显式指定的导出。",-1))]),n[8]||(n[8]=e("strong",null,"CSS",-1)),n[9]||(n[9]=e("ol",null,[e("li",null,"scoped：组件样式不被渗透。"),e("li",null,"deep：深度选择器，.wrapper :deep(.list){ }。"),e("li",null,"slotted：插槽选择器，默认组件内样式影响到 slot 渲染出的内容，如明确使用组件内样式 :slotted(div){ }。")],-1))]))}},P=d(S,[["__scopeId","data-v-98d066f8"]]);export{P as default};
