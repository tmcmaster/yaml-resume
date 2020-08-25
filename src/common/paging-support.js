function PagingSupport(parentClass) {
    return class extends parentClass {
        static get properties() {
            return {
                data: { type: Object },
                first: { type: Boolean },
                sets: { type: String },
                setList: { type: String }
            };
        }
        constructor() {
            super();
            this.first = false;
        }

        updated(changedProperties) {
            const {sets} = this;
            changedProperties.forEach((oldValue, propName) => {
                console.log(`${propName} changed. oldValue: ${oldValue}`);
                switch (propName) {
                    case 'sets':
                        this._setsChanged(sets, oldValue);
                        break;
                }
            });
        }

        _setsChanged(sets) {
            if (sets) {
                const newCategoryList = sets.split(',').map(s => parseInt(s));
                this.setList = (Array.isArray(newCategoryList) ? newCategoryList : [newCategoryList]);
            }
        }
    };
}

export { PagingSupport };