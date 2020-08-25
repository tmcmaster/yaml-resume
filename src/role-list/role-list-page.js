import { LitElement, html, css } from 'https://cdn.skypack.dev/lit-element';

import { PagingSupport } from '../common/paging-support.js';
import '../common/page-header.js';
import '../common/page-footer.js';

class RoleListPage extends PagingSupport(LitElement) {
    static get properties() {
        return {};
    }
    constructor() {
        super();
    }
    static get styles() {
        // language=CSS
        return css`
            :host {
                display: inline-block;
                height: 1100px;
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
                padding: 10px 40px 0 50px;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
            }
            
            h2 {
                margin-top: 40px;
                text-align: center;
            }
            p {
                margin: 0;
                text-align: center;
            }
        `;
    }
    render() {
        const {data, setList, first} = this;
        if (data === undefined || setList == undefined) {
            return html``;
        }
        const {name,role,phone,email,title,summary} = data;

        return html`
            <main>
                <page-header name="${name}" role="${role}"></page-header> 
                     
                ${(first ? html`
                    <h2>${title}</h2>
                    ${data.summary.map(summary => html`
                        <p>${summary}</p>
                    `)}
                ` : html``)}

                <section>
                     ${setList.map(set => html`
                        ${data.categories[set].companies.map(company => html`
                        
                        <h3>${company.title}</h3>
                        <div>${company.summary}</div>
                        <ul>
                            ${company.actions.map(action => html`
                                <li>${action}</li>
                            `)}
                        </ul>
                        `)}
                     `)}
                

                </section>
                <page-footer phone="${phone}" email="${email}"></page-footer>            
            </main>
        `;
    }
}

customElements.define('role-list-page', RoleListPage);
