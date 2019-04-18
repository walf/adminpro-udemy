export class Usuario {
    constructor(
        public nombre: string,
        public email: string,
        public password: string,
        public img?: string,
        public role?: string,
        public google?: string,  // public google?: string = 'algo',
        // tslint:disable-next-line:variable-name
        public _id?: string
    ) {}
}
