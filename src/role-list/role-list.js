import { LitElement, html, css } from 'https://cdn.skypack.dev/lit-element';

import {YamlSupport} from '../common/yaml-support.js';

class RoleList extends YamlSupport(LitElement) {
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
                <role-list-page .data="${data}" sets="0" first></role-list-page>
                <role-list-page .data="${data}" sets="1"></role-list-page>
            </main>
        `);
    }
}
customElements.define('role-list', RoleList);


