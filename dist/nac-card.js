import { html, LitElement } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

export class CustomCard extends LitElement {

    static properties = {
        name: { type: String },
        cardtext: { type: String },
        imageUrl: { type: String },
        link: { type: String },
    };

    static getMetaConfig() {
        return {
            controlName: 'custom-card2',
            fallbackDisableSubmit: false,
            description: 'Example of a card with dynamic data',
            groupName: 'Visual',
            version: '1.0',
            properties: {
                name: {
                    type: 'string',
                    title: 'The card title'
                },
                cardtext: {
                    type: 'string',
                    title: 'Any text for the body of the card'
                },
                imageUrl: {
                    type: 'string',
                    title: 'the Url to an image',
                },
                link: {
                    type: 'string',
                    title: 'link url',
                }
            },
            standardProperties: {
                fieldLabel: true,
                description: true,
                defaultValue: false,
                readOnly: false,
            },
        };
    }

    render() {
        return html`
            <div class="card" style="width: 18rem;">
                <img src="${this.imageUrl}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${this.name}</h5>
                <p class="card-text">${this.cardtext}</p>
                <a href="${this.link}" class="btn btn-primary">Link</a>
            </div>`;
    }

    constructor() {
        super();
    }
}


const elementName = 'custom-card2';
customElements.define(elementName, CustomCard);