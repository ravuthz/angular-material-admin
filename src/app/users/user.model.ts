export class User {
    constructor(
        public id: number = null,
        public email: string = null,
        public username: string = null,
        public password: string = null,
        public enabled: boolean = null,
        public lastName: string = null,
        public firstName: string = null,
        public failedLoginAttempts: number = null
    ) { }
}
