export const timer = (time) => {
  return new Promise((r) => {
    setTimeout(() => {
      r()
    }, time)
  })
}

/**
 * 锚点跳转
 * @param { String } id
 */
const onAnchorPoint = (id) => {
  let offsetTop = document.getElementById(id).offsetTop
  document.querySelector('.el-main').scrollTop = offsetTop
}

/**
 * 自定义指令，创建锚点列表
 */
export const vCreateAnchorPoint = {
  mounted: (el) => {
    el.classList.add('anchor-point', 'flex', 'items-center')
    el.style = 'border-bottom: 1px #DDD solid;padding: 12px 0;margin-bottom: 6px;'

    let ids = []
    const els = document.querySelectorAll('.el-main [id]')
    for (let el of els) {
      ids.push(el.getAttribute('id'))
    }

    let fragment = document.createDocumentFragment()
    ids.forEach((id) => {
      let node = document.createElement('span')
      node.classList.add('text-blue-500')
      node.innerText = id
      node.style = 'margin-right: 24px;user-select: none;cursor: pointer;'
      node.addEventListener('click', (e) => {
        onAnchorPoint(id)
      })

      fragment.appendChild(node)
    })
    el.appendChild(fragment)
  },
}
