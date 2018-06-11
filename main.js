const SHADOW_COLOR = '#00130E'
const TEXT_SHADOW_COLOR = 'rgba(0,0,0,0.3)'

class ShadowUpdater {
  constructor () {
    this._mouse = {
      x: 0,
      y: 0
    }
    window.addEventListener('mousemove', (event) => {
      this._mouse.x = event.clientX
      this._mouse.y = event.clientY
    })
    this._shadowEls = Array.from(
      document.getElementsByClassName('shadowed'))
    this._body = document.getElementById('body-full')
  }
  run () {
    let timeoutFunc = () => {
      this._update()
      setTimeout(timeoutFunc, 1)
    }
    timeoutFunc()
  }
  _update () {
    let width = this._body.scrollWidth
    let height = this._body.scrollHeight
    let x = (width * 0.5 - this._mouse.x) / width
    let y = (height * 0.5 - this._mouse.y) / height
    this._shadowEls.forEach(element => {
      let size = parseInt(element.getAttribute('shadow-size'))
      let shadowX = x * size
      let shadowY = y * size
      let style = `${shadowX}pt ${shadowY}pt 0 `
      if (element.classList.contains('shadowed-box')) {
        element.style.boxShadow = style + `${SHADOW_COLOR},
          0pt ${shadowY}pt 0 ${SHADOW_COLOR},
          ${shadowX}pt 0pt 0 ${SHADOW_COLOR}`
      }
      if (element.classList.contains('shadowed-text')) {
        element.style.textShadow = style + TEXT_SHADOW_COLOR
      }
    })
  }
}

window.addEventListener('load', () => (new ShadowUpdater()).run())