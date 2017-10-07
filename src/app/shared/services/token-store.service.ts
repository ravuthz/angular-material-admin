import { Injectable } from '@angular/core';

import { StorageService } from './storage.service';

export const BASIC_TOKEN = 'basicToken';
export const ACCESS_TOKEN = 'accessToken';
export const REFRESH_TOKEN = 'refreshToken';

@Injectable()
export class TokenStoreService {

    private storage = new StorageService();

    public setAccessToken(value) {
        this.storage.set(ACCESS_TOKEN, value);
        return this;
    }

    public getAccessToken() {
        return this.storage.get(ACCESS_TOKEN);
    }

    public setRefreshToken(value) {
        this.storage.set(REFRESH_TOKEN, value);
        return this;
    }

    public getRefreshToken() {
        return this.storage.get(REFRESH_TOKEN);
    }

    public clear() {
        this.storage.remove(ACCESS_TOKEN);
        this.storage.remove(REFRESH_TOKEN);
        return this;
    }

}
