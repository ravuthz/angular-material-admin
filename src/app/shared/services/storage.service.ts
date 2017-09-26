import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

    constructor() { }

    get auth() {
        return this.get('auth');
    }

    set auth(value) {
        this.set('auth', value);
    }

    public get(key) {
        if (localStorage.getItem(key)) {
            let value = localStorage.getItem(key);
            try {
                return JSON.parse(value);
            } catch (e) {
                return value;
            }
        }
        return '';
    }

    public set(key, value) {
        if (typeof value === "object") {
            localStorage.setItem(key, JSON.stringify(value));
        } else {
            localStorage.setItem(key, value);
        }
    }

    public log(key) {
        if (localStorage.getItem(key)) {
            console.log('localStorage item: ', this.get(key));
        } else {
            console.log('localStorage data: ', localStorage);
        }
    }

    public remove(key) {
        if (localStorage.getItem(key)) {
            localStorage.removeItem(key);
        }
    }

    public clear() {
        localStorage.clear();
    }

}
