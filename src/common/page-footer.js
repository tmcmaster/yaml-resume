import {LitElement, html, css} from 'https://cdn.skypack.dev/lit-element';

class PageFooter extends LitElement {
    static get properties() {
        return {
            phone: {type: String},
            email: {type: String}
        };
    }

    constructor() {
        super();
        this.phone = 'Phone Number';
        this.email = 'email Address';
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
            footer {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                border-top: solid lightgrey var(--border-small);
                align-items: flex-end;
            }

            h3 {
                margin: 10px 0 0 0;
                font-weight: normal;
            }
        `;
    }

    render() {
        const {phone, email} = this;

        return html`
            <main>
                <footer>
                    <h3>${phone}</h3>
                    <h3>${email}</h3>
                </footer>
            </main>
        `;
    }
}

customElements.define('page-footer', PageFooter);
