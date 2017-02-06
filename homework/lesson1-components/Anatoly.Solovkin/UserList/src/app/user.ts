import {} from ""
class User {
    public firstName: string;
    public surname: string;
    public photo: string;
    public country: string;
    public selected: boolean = false;

    constructor(obj: any) {
        if (obj != undefined) {
            this.firstName = obj.firstName;
            this.surname = obj.surname;
            this.photo = obj.photo;
            this.country = obj.country;
        }
    }

    public hasPhoto(): boolean {
        return (typeof this.photo == 'string') && 
            (this.photo.length>0);
    }
}

export { User };