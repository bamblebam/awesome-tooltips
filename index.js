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

    tip_position = (position) => {
        switch (position) {
            case 'top-right':
                this.shadowRoot.querySelector('.notification').style.bottom = "125%"
                this.shadowRoot.querySelector('.notification').style.left = "50%"
                break
            case 'top-left':
                this.shadowRoot.querySelector('.notification').style.bottom = "125%"
                this.shadowRoot.querySelector('.notification').style.right = "50%"
                break
            case 'bottom-right':
                this.shadowRoot.querySelector('.notification').style.bottom = "-250%"
                this.shadowRoot.querySelector('.notification').style.left = "50%"
                break
            case 'bottom-left':
                this.shadowRoot.querySelector('.notification').style.bottom = "-250%"
                this.shadowRoot.querySelector('.notification').style.right = "50%"
                break
            case 'top':
                this.shadowRoot.querySelector('.notification').style.bottom = "125%"
                this.shadowRoot.querySelector('.notification').style.left = "-200%"
                break
            case 'bottom':
                this.shadowRoot.querySelector('.notification').style.bottom = "-250%"
                this.shadowRoot.querySelector('.notification').style.left = "-200%"
                break
            case 'right':
                this.shadowRoot.querySelector('.notification').style.bottom = "-60%"
                this.shadowRoot.querySelector('.notification').style.left = "125%"
                break
            case 'left':
                this.shadowRoot.querySelector('.notification').style.bottom = "-60%"
                this.shadowRoot.querySelector('.notification').style.right = "125%"
                break
            default:
                this.shadowRoot.querySelector('.notification').style.bottom = "125%"


        }
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
        //the icon that is displayed in the circle should be 1 character
        if (this.getAttribute('circle_icon')) {
            this.shadowRoot.querySelector('.round').innerHTML = this.getAttribute('circle_icon')
        }
        //sets the size of the icon
        if (this.getAttribute('circle_icon_size')) {
            this.shadowRoot.querySelector('.round').style.fontSize = this.getAttribute('circle_icon_size')
        }
        //sets the radius of the circle
        if (this.getAttribute('circle_radius')) {
            this.shadowRoot.querySelector('.round').style.width = this.getAttribute('circle_radius')
            this.shadowRoot.querySelector('.round').style.height = this.getAttribute('circle_radius')
            this.shadowRoot.querySelector('.round').style.lineHeight = this.getAttribute('circle_radius')
        }
        // sets the position where the notification will popup
        if (this.getAttribute('tip_position')) {
            this.tip_position(this.getAttribute('tip_position'))
        }
    }
}

window.customElements.define('tool-tip', ToolTip)