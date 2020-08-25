import { LitElement, html, css } from 'https://cdn.skypack.dev/lit-element';

import { PagingSupport } from '../common/paging-support.js';
import '../common/page-header.js';
import '../common/page-footer.js';

class ProjectListPage extends PagingSupport(LitElement) {

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
                display: flex;
                flex-direction: column;
                justify-content: stretch;
                
                width: 100%;
                min-height: 100%;
            }
            
            main > * {
                box-sizing: border-box;
                //border: solid red 1px;
            }

            project-list-header, project-list-footer {
                flex: available;
            }

            section {
                flex: auto;
                padding: 10px 20px 0 20px;
            }
            
            h3 {
                text-align: center;
                margin: 20px 0 20px 0;
            }
            
            h2,p {
                text-align: center;
            }
            h2 {
                margin-top: 50px;
                text-transform: uppercase;
            }
            p {
                margin: 0;
            }
        `;
    }
    render() {
        const {data, setList, first} = this;
        if (data === undefined || setList == undefined) {
            return html``;
        }

        const {name,role,phone,email} = data;
        return html`
            <main>
                <page-header name="${name}" role="${role}"></page-header>
                
                ${(first ? html`
                    <h2>${data.title}</h2>
                    ${data.summary.map(summary => html`
                        <p>${summary}</p>
                    `)}
                ` : html``)}

                <section>
                    ${setList.map(set => html`
                        <h3>${data.categories[set].title}</h3>
                        
                        ${data.categories[set].projects.map(project => html`
                            <project-list-item title="${project.title}" 
                                           summary="${project.summary}"
                                           activities="${project.activities}"
                                           skills="${project.skills}"></project-list-item>
                        `)}
                    `)}                
                </section>         
    
                <page-footer phone="${phone}" email="${email}"></page-footer>            
            </main>
        `;
    }
}

customElements.define('project-list-page', ProjectListPage);



