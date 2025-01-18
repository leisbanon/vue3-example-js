import{t as d}from"./common-CEOzpn3f.js";import{d as f,o as r,c as a,a as v,r as x,_ as b,b as p,g as I,e as t,f as s,B as i,C as V,K as g,t as k}from"./index-DUUB1f29.js";const C={class:"text-[14px]"},y={__name:"Input",setup(m){const n=f({name:""});return(e,o)=>{const u=x("el-input");return r(),a("main",C,[v(u,{modelValue:n.name,"onUpdate:modelValue":o[0]||(o[0]=l=>n.name=l),placeholder:"请输入",size:"normal",style:{width:"320px"}},null,8,["modelValue"])])}}},A={class:"text-[14px]"},B={class:"flex items-center"},w={__name:"ContextAPI",setup(m){const n=p(!1);d(500).then(()=>{n.value=!0});const e=p(!0),o=I(()=>e.value?"Hidden":"Show");return(u,l)=>(r(),a("main",A,[l[3]||(l[3]=t("strong",null,"指令",-1)),l[4]||(l[4]=t("ol",null,[t("li",null,"v-on：给元素绑定事件监听。"),t("li",null,[s(" v-bind：动态绑定一个或者多 attribute，也可以是组件的 prop。 "),t("div",null,"当用户绑定 class 或 style attribute时，v-bind 支持额外的值类型如数组/对象。")]),t("li",null,"v-pre：跳过该元素以及子元素的所有编辑。")],-1)),l[5]||(l[5]=t("br",null,null,-1)),l[6]||(l[6]=t("strong",null,"组件",-1)),t("ol",null,[t("li",null,[l[1]||(l[1]=s(" KeepAlive：它的功能是在多个组件间切换缓存被移除的组件实例。 ")),l[2]||(l[2]=t("div",{class:"mb-[8px]"},"应用场景：默认情况下一个组件被替换后会被销毁，这会导致其中组件已改变的状态，当这个组件再次被创建是，会创建一个只带初始化值的新实例。",-1)),t("p",B,[(r(),i(g,null,[e.value?(r(),i(y,{key:0})):V("",!0)],1024)),t("span",{class:"text-blue-400 cursor-pointer pl-[2em]",onClick:l[0]||(l[0]=N=>e.value=!e.value)},k(o.value),1)])])]),l[7]||(l[7]=t("br",null,null,-1)),l[8]||(l[8]=t("strong",null,"特殊元素",-1)),l[9]||(l[9]=t("ol",null,[t("li",null,"templete：当想要内置指令而不在DOM中渲染元素是，template 标签可以作为占位符使用。")],-1)),l[10]||(l[10]=t("br",null,null,-1)),l[11]||(l[11]=t("strong",null,"特殊Attribute",-1)),l[12]||(l[12]=t("ol",null,[t("li",null,"key：主要作为 Vue 的虚拟 dom 提示算法，在比较新旧节点列表用于识别的 Vnode。"),t("li",null,"ref：注册模版的引用，在选项式 api 里，引用将被注册为 this.$refs，在组合式 api 里将被存储与名字相同的 ref。"),t("pre",null,[s("        "),t("code",null,`
          // 组合式
          <Input ref="refInput" />

          import { Input } from 'vue'

          const pRef = ref('refInput')
        `),s(`
      `)])],-1))]))}},D=b(w,[["__scopeId","data-v-8f5b3273"]]);export{D as default};
