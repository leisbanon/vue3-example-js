import { ref } from 'vue'

export const timer = (time) => {
  return new Promise((r) => {
    setTimeout(() => {
      r()
    }, time)
  })
}

export const useAxis = () => {
  const x = ref(0)
  const y = ref(1)

  timer(1500).then(() => {
    x.value = 100
  })

  return { x, y }
}
