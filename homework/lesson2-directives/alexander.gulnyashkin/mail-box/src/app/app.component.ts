import { Component } from '@angular/core';
import { Letter } from './mail-box/letter/letter.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    /**
     * Массив писем.
     */
    public letters: Array<Letter>;
    /**
     * Фильтр.
     */
    public searchFilter: string;

    constructor() {
        this.searchFilter = '';
        this.getLetters()
            .then(letters => {
                this.letters = letters;
                this.letters.forEach((letter: Letter): void => {
                    letter.highlightedName = letter.name;
                    letter.highlightedEmail = letter.email;
                    letter.highlightedContent = letter.content;
                });
            })
            .catch(error => {
                console.log(error);
            })
    }

    /**
     * Получение фильтра.
     */
    public search (searchFilter: string): void {
        this.searchFilter = searchFilter;
    }
    /**
     * Получение всех писем.
     */
    private getLetters (): Promise<Array<Letter>> {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', '/server/letters.json', true);
            xhr.onreadystatechange = () => {
                if (xhr.readyState != 4) return;
                if (xhr.status != 200) {
                    reject(new Error('ошибка: ' + (xhr.status ? xhr.statusText : 'запрос не удался')));
                }
                try {
                    resolve(JSON.parse(xhr.responseText));
                } catch (err) {
                    reject(new Error(err));
                }
            }
            xhr.send();
        });
    }
}
