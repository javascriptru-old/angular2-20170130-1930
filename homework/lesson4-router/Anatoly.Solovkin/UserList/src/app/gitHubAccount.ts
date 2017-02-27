class GitHubAccount {
    public id: Number;
    public login: string;
    
    constructor(obj: any) {
        if (obj != undefined) {
            this.id = obj.id;
            this.login = obj.login;
        }
    }
}

export { GitHubAccount };