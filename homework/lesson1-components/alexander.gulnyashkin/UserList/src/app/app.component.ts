import { Component } from '@angular/core';
import { AppModel } from './app.model';
import { UserCard } from './user-card/user-card.model';
import { User } from './user-card/user-card.model';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	/**
	 * Массив карточек пользователей.
	 */
	users: Array<UserCard>;
	/**
	 * Модель приложения.
	 */
	appModel: AppModel;

	constructor () {
		// Создаем модель приложения.
		this.appModel = new AppModel();
		// Берем из модели данные о пользователях.
		this.users = [];
		this.appModel.getUsers()
			.then(users => {
				for (let user of users) {
					this.users.push(new UserCard(user));
				}
			})
			.catch(err => {
				console.log(err);
			})
	}

	/**
	 * Удаление пользователя.
	 */
	public removeUser(userCard: UserCard): void {
		// Удаление из DOM.
		this.users.splice(this.users.findIndex((item) => item === userCard), 1);
		// Удаление из модели.
		let user: User = {
				firstName: userCard.firstName,
				surname: userCard.surname,
				country: userCard.country
		};
		if (userCard.photo !== "Нет фотографии") {
			user.photo = userCard.photo;
		}
		this.appModel.removeUser(user);
	}
}
