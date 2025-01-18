import{_ as m,o as p,c as u,e as t,t as r,n as f,b as x,a as _,w as C,f as i}from"./index-DUUB1f29.js";const v={class:"card-component font-bold flex flex-col cursor-pointer items-center justify-center"},g={class:"text-[20px] font-bold mb-[12px]"},b={class:"mb-[12px]"},h={class:"flex items-center text-[12px] cursor-pointer text-blue-600 select-none mb-[12px]"},$={__name:"Card",props:["title","count"],emits:["count-change"],setup(a,{emit:n}){const o=a,s=n;console.log("props => ",{...o});const e=l=>{s("count-change",l)};return(l,c)=>(p(),u("div",v,[t("span",g,r(o.title),1),t("span",b,"数量："+r(a.count),1),t("div",h,[t("span",{class:"mr-[12px]",onClick:c[0]||(c[0]=d=>e(1))},"添加"),t("span",{onClick:c[1]||(c[1]=d=>e(-1))},"减少")]),f(l.$slots,"default",{},void 0,!0)]))}},k=m($,[["__scopeId","data-v-0882eb4e"]]),B={class:"text-[14px]"},E={class:"flex"},P={__name:"PageComponent",setup(a){const n=x(0),o=s=>{n.value+=s};return(s,e)=>(p(),u("main",B,[t("div",E,[_(k,{class:"mr-[12px]",title:"图文",count:n.value,onCountChange:o},{default:C(()=>e[0]||(e[0]=[t("div",null,"Card Component",-1)])),_:1},8,["count"])]),e[1]||(e[1]=t("pre",null,[i("      "),t("code",null,`
        // defineProps, defineEmits 是一个 script setup 中编译的宏命令，因此并不需要显式的导入
        const props = defineProps(['title', 'count'])
        const emit = defineEmits(['count-change'])

        const onCount = (value) => {
          emit('count-change', value)
        }
      `),i(`
    `)],-1))]))}};export{P as default};
