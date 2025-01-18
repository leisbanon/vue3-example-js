import { defineStore } from 'pinia'
import { reactive } from 'vue'

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
    data,
    update,
  }
})
