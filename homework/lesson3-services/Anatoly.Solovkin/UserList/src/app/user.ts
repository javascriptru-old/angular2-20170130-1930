import {GitHubAccount} from '../app/gitHubAccount'

class User {
    public firstName: string;
    public surname: string;
    public photo: string;
    public country: string;
    public gitHubAccounts: GitHubAccount[] = [];
    public selected: boolean = false;

    constructor(obj: any) {
        if (obj != undefined) {
            this.firstName = obj.firstName;
            this.surname = obj.surname;
            this.photo = obj.photo;
            this.country = obj.country;
            this.gitHubAccounts = [];
        }
    }

    public hasPhoto(): boolean {
        return (typeof this.photo == 'string') && 
            (this.photo.length>0);
    }

    public hasGitHubAccounts(): boolean {
        return (this.gitHubAccounts != undefined && this.gitHubAccounts instanceof Array) && 
            (this.gitHubAccounts.length>0);
    }
}

export { User };