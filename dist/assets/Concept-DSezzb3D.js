import{u as e}from"./userinfo-BSIQoUJW.js";import{_ as a,c as n,v as o,o as r}from"./index-DUUB1f29.js";const s={class:"text-[14px]"},c={__name:"Concept",setup(d){return console.log("userInfoStore => ",{...e().data}),(p,t)=>(r(),n("main",s,t[0]||(t[0]=[o(`<div data-v-4ec8b978><strong data-v-4ec8b978>定义 Store</strong><p data-v-4ec8b978>Store它的第一个参数标识为 Store Name Id，是必须传入的。第二个参数可接受两中种类型，Setup 函数或者Option对象。</p><p data-v-4ec8b978>Option Store 与选项式API相似，Setup Store 与Vue组合式API相似。</p></div><div data-v-4ec8b978><strong data-v-4ec8b978>State</strong><p data-v-4ec8b978>state 是 store 的核心，它表示应用的状态。通过 store 实例直接访问 state 并可直接对其进行读写。</p><p data-v-4ec8b978>注意：如果在 state 中未被定义，则该属性不能被添加；即 state 必须被初始化状态。</p></div><div data-v-4ec8b978><strong data-v-4ec8b978>Getter</strong><p data-v-4ec8b978>getter 等同于 store state 的计算值，可以通过 defineStore() 中的 getters 属性来决定它们。</p><p data-v-4ec8b978>getter 通常定义在 store 选项式中，因为在 setup 中，可以直接访问任何 getter，与 state 定义效果一样。</p></div><div data-v-4ec8b978><strong data-v-4ec8b978>Action</strong><p data-v-4ec8b978>action 相当于组件中的 methods，它通过 defineStore() 中的 actions 属性来定义。</p><p data-v-4ec8b978>action 不同于 getters ，action 可以是异步的，意味着可以在里面使用 async await 调用其他异步 api。</p></div><pre data-v-4ec8b978>      <code data-v-4ec8b978>
        // Store 选项式定义
        import { defineStore } from &#39;pinia&#39;

        const useStore = defineStore(&#39;storeId&#39;, {
          // State
          state: () =&gt; {
            return {
              count: 0,
              ...
            }
          },
          // Getter
          getters: {
            getCount: (state) =&gt; state.count * 2,
          },
          // Action
          actions: {
            async updateCount() {
              await timer(300)
              this.state.count = Math.round(100 * Math.random())
            }
          }.
        })
      </code>
    </pre>`,5)])))}},u=a(c,[["__scopeId","data-v-4ec8b978"]]);export{u as default};
