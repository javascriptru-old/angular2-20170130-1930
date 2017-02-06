import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserCard } from './user-card.model';

@Component({
	selector: 'app-user-card',
	templateUrl: './user-card.component.html',
	styleUrls: ['./user-card.component.css'],
	inputs: ['user'],
	outputs: ['onRemoveUser']
})
export class UserCardComponent implements OnInit {
	user: UserCard;
	isClicked: boolean;
	onRemoveUser: EventEmitter<UserCard>;

	constructor() {
		this.isClicked = false;
		this.onRemoveUser = new EventEmitter();
	}

	/**
	 * Подсветка карточки пользователя.
	 */
	highlight (event): void {
		if (!event.target.classList.contains('delete')) {
			this.isClicked = !this.isClicked;
		}
	}
	/**
	 * Обработчик события удаления пользователя.
	 */
	removeUser (): void {
		this.onRemoveUser.emit(this.user);
	}
	/**
	 * Обработчик события нажатия кнопки мыши.
	 */
	notSelect (): boolean {
		// Чтобы не выделялась кнопка удаления
		return false;
	}
	ngOnInit() {
	}
}
