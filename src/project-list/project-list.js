import { LitElement, html, css } from 'https://cdn.skypack.dev/lit-element';
import { YamlSupport } from '../common/yaml-support.js';

class ProjectList extends YamlSupport(LitElement) {
    static get properties() {
        return {
            sets: {type: String}
        };
    }

    constructor() {
        super();
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
        const {data, sets} = this;

        return (data === undefined || sets === undefined ? html`` : html`
            <main>          
                ${sets.split(':').map((s,i) => html`
                    <project-list-page .data="${data}" sets="${s}" ?first="${(i === 0)}"></project-list-page>
                `)}      
            </main>
        `);
    }
}
customElements.define('project-list', ProjectList);
