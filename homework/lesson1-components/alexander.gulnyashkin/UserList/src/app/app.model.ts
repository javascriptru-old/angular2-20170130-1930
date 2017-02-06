import { User } from "./user-card/user-card.model";
/**
 * Модель приложения.
 */
export class AppModel {
	/**
	 * Пользователи.
	 */
	private __users: Array<User>;

	constructor () {}

	/**
	 * Получение пользователей.
	 */
	public getUsers (): Promise<Array<User>> {
		if (this.__users) {
			return Promise.resolve(this.__users);
		}
		else {
			return new Promise((resolve, reject) => {
				let xhr = new XMLHttpRequest();
				xhr.open('GET', '/server/users.json', true);
				xhr.onreadystatechange = () => {
					if (xhr.readyState != 4) return;
					if (xhr.status != 200) {
						reject(new Error('ошибка: ' + (xhr.status ? xhr.statusText : 'запрос не удался')));
					}
					try {
						this.__users = JSON.parse(xhr.responseText);
						resolve(this.__users);
					} catch (err) {
						reject(new Error(err));
					}
				}
				xhr.send();
			});
		}
	}
	/**
	 * Удаление пользователя.
	 */
	public removeUser (user: User): void {
		this.__users.splice(this.__users.findIndex((item) => item === user), 1);
	}
}