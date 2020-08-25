import {LitElement, html, css} from 'https://cdn.skypack.dev/lit-element';

class ProjectListItem extends LitElement {
    static get properties() {
        return {
            title: {type: String},
            summary: {type: String},
            activities: {type: String},
            skills: {type: String}
        };
    }

    constructor() {
        super();
        this.title = ''
        this.summary = ''
        this.activities = ''
        this.skills = ''
    }

    static get styles() {
        // language=CSS
        return css`
            main {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
            }

            h4 {
                margin: 12px 0 0 0;
            }

            p {
                margin: 5px 0 5px 20px;
            }

            span {
                margin: 0 0 0 20px;
            }
            span::before {
                font-weight: bold;
                padding-right: 3px;
            }

            span.activities {
                margin-bottom: 3px;
            }

            span.activities::before {
                content: "Activities:";
            }

            span.skills::before {
                content: "Skills:";
            }
        `;
    }

    render() {
        const {title, summary, activities, skills} = this;

        return html`
            <main>
                <h4>${title}</h4>
                <p>${summary}</p>
                <span class="activities">${activities}</span>
                <span class="skills">${skills}</span>            
            </main>
        `;
    }
}

customElements.define('project-list-item', ProjectListItem);
