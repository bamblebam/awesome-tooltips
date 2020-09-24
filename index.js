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
}

window.customElements.define('tool-tip', ToolTip)