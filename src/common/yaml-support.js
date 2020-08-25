import {default as yaml} from 'https://cdn.skypack.dev/js-yaml';

// TODO: look into supporting loading info.yaml as a separate file

function YamlSupport(parentClass) {
    return class extends parentClass {
        static get properties() {
            return {
                file: { type: String },
                data: { type: Object }
            };
        }

        constructor() {
            super();
        }

        updated(changedProperties) {

            changedProperties.forEach((oldValue, propName) => {
                switch (propName) {
                    case 'file':
                        this._fileChanged(this.file, oldValue);
                        break;
                    case 'data':
                        this._dataChanged(this.data, oldValue);
                        break;
                }
            });
        }

        _dataChanged(data, oldValue) {
            console.log('Date: ', data);
        }

        _fileChanged(file) {
            loadYAML(file).then((yamlString) => {
                const data = yaml2json(yamlString);
                this.data = data;
            }).catch((error) => {
                console.error('Could not load YAML data', error);
            });
        }
    }
}

function loadYAML(file) {
    return new Promise((resolve, reject) => {
        console.log('File: ', file);
        const request = new XMLHttpRequest();
        request.open('GET', file);
        request.responseType = 'text';
        request.onload = () => {
            console.debug('YAML Data', request.response);
            const yamlString = request.response;
            resolve(yamlString);
        };
        request.send();
    });
}

function yaml2json(yamlString) {
    return yaml.load(yamlString);
}

export { YamlSupport };