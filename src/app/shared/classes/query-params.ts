export class QueryParams {
    private data;

    constructor(data: Object) {
        this.data = data;
    }

    set(key, val) {
        this.data[key] = val;
    }

    get(key) {
        return this.data[key];
    }

    toObject() {
        return this.data;
    }

    toString() {
        let params = ['?'];
        let data = this.data;
        for (let key in data) {
            if (data.hasOwnProperty(key)) {
                params.push(key + '=' + data[key]);
            }
        }
        return params.join('&');
    }
}
