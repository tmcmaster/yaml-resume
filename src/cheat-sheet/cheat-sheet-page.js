import { LitElement, html, css } from 'https://cdn.skypack.dev/lit-element';

import '../common/page-header.js';
import '../common/page-footer.js';

class CheatSheetPage extends LitElement {
    static get properties() {
        return {
            data: { type: Object }
        };
    }
    constructor() {
        super();
        this.name = 'Tim McMaster'
    }
    static get styles() {
        // language=CSS
        return css`
            :host {
                display: inline-block;
                height: 1090px;
                width: 770px;
                box-sizing: border-box;
                //border: solid lightgray 1px;
                padding: 20px;
                margin-bottom: 16px;
            }

            main {
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                justify-content: stretch;

                width: 100%;
                min-height: 100%;
            }

            project-list-header, project-list-footer {
                flex: available;
            }
            
            main > * {
                box-sizing: border-box;
                //border: solid red 1px;
            }
            
            section {
                flex: auto;
                padding: 10px 20px 0 50px;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
            }
            
            h2 {
                margin-top: 40px;
                text-align: center;
            }
            p {
                text-align: center;
            }
        `;
    }
    render() {
        const {data} = this;
        if (data === undefined) {
            return html``;
        }
        const {name,role,phone,email,title,summary,goals, strengths, wishlist} = data;

        return html`
            <main>
                <page-header name="${name}" role="${role}"></page-header>      
                <h2>${title}</h2>
                <p>${summary}</p>
                <section>
                    <h3>${goals.title}</h3>
                    <ul>
                        ${goals.items.map(item => html`
                            <li>${item}</li>
                        `)}
                    </ul>
                    <h3>${strengths.title}</h3>
                    <ul>
                        ${strengths.items.map(item => html`
                            <li>${item}</li>
                        `)}
                    </ul>
                    <h3>${wishlist.title}</h3>
                    <ul>
                        ${wishlist.items.map(item => html`
                            <li>${item.title}</li>
                            <ul>
                                ${item.notes.map(note => html`
                                    <li>${note}</li>
                                `)}
                            </ul>

                        `)}
                    </ul>
                </section>
                <page-footer phone="${phone}" email="${email}"></page-footer>            
            </main>
        `;
    }
}

customElements.define('cheat-sheet-page', CheatSheetPage);
