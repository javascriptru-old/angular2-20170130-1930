import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    public usersJSON = [{"firstName":"Максим","surname":"Кирильчук","country":"ua"},{"firstName":"Алексей","surname":"Тихоненко","country":"ru"},{"firstName":"Артем","surname":"Зубанов","photo":"http://i.imgur.com/AH62XQB.jpg","country":"ru"},{"firstName":"Эмиль","surname":"Байрамов","photo":"http://i.imgur.com/MlvZtHa.jpg","country":"ru"},{"firstName":"Александр","surname":"Гульняшкин","photo":"http://i.imgur.com/4KrQ4uC.jpg","country":"ru"},{"firstName":"Evgeniy","surname":"Kalashnikov","country":"ru"},{"firstName":"Олег","surname":"Мулько","photo":"http://i.imgur.com/BJmN1OY.jpg","country":"ru"},{"firstName":"Саян","surname":"Жакупбеков","country":"kz"},{"firstName":"Ильин","surname":"Ростислав","photo":"http://i.imgur.com/Gw6Hs3E.jpg","country":"ru"},{"firstName":"Сергей","surname":"Варенник","photo":"http://i.imgur.com/z1tDwIN.jpg","country":"ru"},{"firstName":"Валентин","surname":"Агафонов","country":"ru"},{"firstName":"Анатолий","surname":"Соловкин","country":"ru"},{"firstName":"Владимир","surname":"Соловьёв","photo":"http://i.imgur.com/yl6jGSM.jpg","country":"ru"},{"firstName":"Олег","surname":"Фадеев","country":"ru"},{"firstName":"Антон","surname":"Пьянников","country":"ru"},{"firstName":"Игорь","surname":"Дьяченко","country":"ua"},{"firstName":"Максим","surname":"Наумов","photo":"http://i.imgur.com/VdkIAoV.jpg","country":"ru"},{"firstName":"Глеб","surname":"Пантелеев","photo":"http://i.imgur.com/hQH7wdD.jpg","country":"ru"}]
    public users: User[];

    ngOnInit() {
        if (this.usersJSON instanceof Array) {
            this.users = this.usersJSON.map(obj => new User(obj));
        }
    }

    public usrsFound(): boolean {
        return (this.users != undefined) && (this.users.length > 0);
    }

    public selUser(user: User): void {
        if (this.users != undefined && user != undefined) {
            this.users.map(x => x.selected = false);
            user.selected = true;
        }
    }

    public delUser(user: User): void {
        if (this.users != undefined && user != undefined &&
            confirm("Удалить пользователя \"" + user.surname + " " + user.firstName + "\"?")) {

            var index = this.users.indexOf(user);

            if (index >= 0)
                this.users.splice(index, 1);
        }
    }
}

export class User {
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
}

