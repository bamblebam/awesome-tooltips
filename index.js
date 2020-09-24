const template = document.createElement('template')
template.innerHTML = `
<link rel="stylesheet" href="index.css">
<div class='tooltip'>
<div class='round'>!</div>
<div class="notification">
Text bamble
</div>
</div>
`

class ToolTip extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }

    connectedCallback() {
        this.shadowRoot.querySelector('.round').addEventListener('mouseover', () => {
            const notification = this.shadowRoot.querySelector('.notification')
            notification.style.transform = 'scale(1)'
        })
        this.shadowRoot.querySelector('.round').addEventListener('mouseleave', () => {
            const notification = this.shadowRoot.querySelector('.notification')
            notification.style.transform = 'scale(0)'
        })
    }
}

window.customElements.define('tool-tip', ToolTip)