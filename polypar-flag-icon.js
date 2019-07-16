import { LitElement, html, css } from 'lit-element';
import { icons } from './icons';

export class PolyparFlagIcon extends LitElement {

    static get properties() {
        return {
            flag: {
                type: String
            }
        };
    }

    constructor() {
        super();
        this.flag = 'kingdom';
    }

    static get styles() {
        return css`
            :host {
                display: inline-block;
            }

            :host([hidden]) {
                display: none;
            }
          
            path[fill="none"] {
                fill: transparent;
            }

            svg {
                width: var(--polypar-flag-icon-size, 24px);
                height: var(--polypar-flag-icon-size, 24px);
            }

            div {
                display: flex;
            }
        `;
    }

    render() {
        return html`
            ${icons[this.flag]}
        `;
    }
}
customElements.define('polypar-flag-icon', PolyparFlagIcon);