import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { UserCard } from './user-card/user-card.interface';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/take';


@Injectable()
export class UserService {
    private _usersUrl: string = `https://learn.javascript.ru/courses/groups/api/participants?key=1kmtdtv`;
    private _githubUrl: string = `https://api.github.com/search/users`;

    constructor(private _http: Http) {}

    public getUsers(): Observable<UserCard[]> {
        return this._requestUsers()
            .flatMap((users) => Observable.from(users))
            .delayTime(1000)
            .flatMap((user: UserCard) => {
                return this._requestGithubs(user);
            })
            /**
             * В консоль должны идти ответы с гитхаба. Пока объединения с самими
             * users в единый объект нет.
             * Вопрос: как сделать задержку между запросами к гитхабу?
             */
    }

    private _requestUsers(): Observable < UserCard[] > {
        return this._http.get(this._usersUrl)
            .map(response => response.json());
    }

    private _requestGithubs(user: UserCard): Observable < any > {
        return this._http.get(`${this._githubUrl}?q=${this._transliterate(user.firstName)}%20${this._transliterate(user.surname)}`)
            .flatMap(response => {
                return Observable.from(response.json().items);
            })
            .take(5);
    }
    private _transliterate(text: string): string {
        let transliteration = {
            'а': 'a',
            'б': 'b',
            'в': 'v',
            'г': 'g',
            'д': 'd',
            'е': 'e',
            'ж': 'g',
            'з': 'z',
            'и': 'i',
            'й': 'y',
            'к': 'k',
            'л': 'l',
            'м': 'm',
            'н': 'n',
            'о': 'o',
            'п': 'p',
            'р': 'r',
            'с': 's',
            'т': 't',
            'у': 'u',
            'ф': 'f',
            'ы': 'i',
            'э': 'e',
            'А': 'A',
            'Б': 'B',
            'В': 'V',
            'Г': 'G',
            'Д': 'D',
            'Е': 'E',
            'Ж': 'G',
            'З': 'Z',
            'И': 'I',
            'Й': 'Y',
            'К': 'K',
            'Л': 'L',
            'М': 'M',
            'Н': 'N',
            'О': 'O',
            'П': 'P',
            'Р': 'R',
            'С': 'S',
            'Т': 'T',
            'У': 'U',
            'Ф': 'F',
            'Ы': 'I',
            'Э': 'E',
            'ё': 'yo',
            'х': 'h',
            'ц': 'ts',
            'ч': 'ch',
            'ш': 'sh',
            'щ': 'shch',
            'ъ': '',
            'ь': '',
            'ю': 'yu',
            'я': 'ya',
            'Ё': 'YO',
            'Х': 'H',
            'Ц': 'TS',
            'Ч': 'CH',
            'Ш': 'SH',
            'Щ': 'SHCH',
            'Ъ': '',
            'Ь': '',
            'Ю': 'YU',
            'Я': 'YA',
            'A': 'A',
            'a': 'a',
            'B': 'B',
            'b': 'b',
            'C': 'C',
            'c': 'c',
            'D': 'D',
            'd': 'd',
            'E': 'E',
            'e': 'e',
            'F': 'F',
            'f': 'f',
            'G': 'G',
            'g': 'g',
            'H': 'H',
            'h': 'h',
            'I': 'I',
            'i': 'i',
            'J': 'J',
            'j': 'j',
            'K': 'K',
            'k': 'k',
            'L': 'L',
            'l': 'l',
            'M': 'M',
            'm': 'm',
            'N': 'N',
            'n': 'n',
            'O': 'O',
            'o': 'o',
            'P': 'P',
            'p': 'p',
            'Q': 'Q',
            'q': 'q',
            'R': 'R',
            'r': 'r',
            'S': 'S',
            's': 's',
            'T': 'T',
            't': 't',
            'U': 'U',
            'u': 'u',
            'V': 'V',
            'v': 'v',
            'W': 'W',
            'w': 'w',
            'X': 'X',
            'x': 'x',
            'Y': 'Y',
            'y': 'y',
            'Z': 'Z',
            'z': 'z'
        }

        return text.split('').map(letter => {
            return transliteration[letter];
        }).join('');
    }
}
