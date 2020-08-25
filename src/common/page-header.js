import {LitElement, html, css} from 'https://cdn.skypack.dev/lit-element';

class PageHeader extends LitElement {
    static get properties() {
        return {
            name: {type: String},
            role: {type: String},
            summary: {type: String}
        };
    }

    constructor() {
        super();
        this.name = 'Name Section';
        this.role = 'Role Section';
        this.summary = "Details section";
    }

    static get styles() {
        // language=CSS
        return css`
            :host {
                --border-small: 1px;

                display: inline-block;
            }
            main {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
            }
            header {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                border-bottom: solid lightgrey var(--border-small);
                align-items: flex-end;
            }
            
            h3 {
                margin: 0 0 10px 0;
                text-transform: uppercase;
                font-weight: normal;
            }

        `;
    }

    render() {
        const {name, role, summary} = this;

        return html`
            <main>
                <header>
                    <h3>${name}</h3>
                    <h3>${role}</h3>
                </header>    
            </main>
        `;
    }
}

customElements.define('page-header', PageHeader);
