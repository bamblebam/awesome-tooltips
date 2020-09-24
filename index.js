const template = document.createElement('template')
template.innerHTML = `<h1>bamble</h1>
<style>
body{
    min-height:45px;
}
</style>`

class ToolTip extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}

window.customElements.define('tool-tip', ToolTip)