import { LitElement, html, css } from 'https://cdn.skypack.dev/lit-element';

import {YamlSupport} from '../common/yaml-support.js';

class CheatSheet extends YamlSupport(LitElement) {
    static get properties() {
        return {
        };
    }

    constructor() {
        super();
    }

    updated(changedProperties) {
        super.updated(changedProperties);
    }


    static get styles() {
        // language=CSS
        return css`
            :host {
                display: inline-block;
            }
            main {
                width: 100%;
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
            }
        `;
    }
    render() {
        const {data} = this;

        return (data === undefined ? html`` : html`
            <main>  
                <cheat-sheet-page .data="${data}"></cheat-sheet-page>
            </main>
        `);
    }
}
customElements.define('cheat-sheet', CheatSheet);


