export interface User {
	firstName: string;
	surname: string;
	country: string;
	photo?: string;
}

export class UserCard {
	firstName: string;
	surname: string;
	country: string;
	photo: string;

	constructor (user: User) {
		this.firstName = user.firstName;
		this.surname = user.surname;
		this.country = user.country;
		this.photo = user.photo || "Нет фотографии";
	}
}