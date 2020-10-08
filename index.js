const template = document.createElement('template')
template.innerHTML = `
<link rel="stylesheet" href="index.css">
<div class='tooltip'>
<div class='round'>!</div>
<div class="notification">
<slot/>
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
        //function for hover
        this.shadowRoot.querySelector('.round').addEventListener('mouseover', () => {
            const notification = this.shadowRoot.querySelector('.notification')
            notification.style.transform = 'scale(1)'
        })
        this.shadowRoot.querySelector('.round').addEventListener('mouseleave', () => {
            const notification = this.shadowRoot.querySelector('.notification')
            notification.style.transform = 'scale(0)'
        })

        //attributes operations
        //color of the circle
        if (this.getAttribute('circle_background')) {
            this.shadowRoot.querySelector('.round').style.background = this.getAttribute('circle_background')
        }
        //color of the notification background
        if (this.getAttribute('tip_background')) {
            this.shadowRoot.querySelector('.notification').style.background = this.getAttribute('tip_background')
        }
        //color of the font for the text in the notification 
        if (this.getAttribute('tip_color')) {
            this.shadowRoot.querySelector('.notification').style.color = this.getAttribute('tip_color')
        }
        if (this.getAttribute('circle_icon')) {
            this.shadowRoot.querySelector('.round').innerHTML = this.getAttribute('circle_icon')
        }
    }
}

window.customElements.define('tool-tip', ToolTip)