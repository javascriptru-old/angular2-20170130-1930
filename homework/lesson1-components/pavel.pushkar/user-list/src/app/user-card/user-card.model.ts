export class User{
    public id: number;
    public fullName: string;
    public avatarUrl: string;
    public birthdate: string;
    public gender: string;
    public address: string;
    public email:string;

    constructor(id: number, fullName: string, avatarUrl: string, birthdate: string, gender: string, address: string, email:string) { 
        this.id = id||0;
        this.fullName=fullName;
        this.avatarUrl=avatarUrl||'';
        this.birthdate=birthdate;
        this.gender=gender;
        this.address=address;
        this.email=email;
    }
}