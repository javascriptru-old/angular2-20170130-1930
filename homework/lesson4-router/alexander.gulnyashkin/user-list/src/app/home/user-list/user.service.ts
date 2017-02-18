import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { UserCard } from './user-card/user-card.interface';
import { Github } from './user-card/github.interface';
import { Observable } from 'rxjs/Observable';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import 'rxjs/add/observable/from';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/operator/take';

@Injectable()
export class UserService implements Resolve<UserCard> {
    private _usersUrl: string = `https://learn.javascript.ru/courses/groups/api/participants?key=1kmtdtv`;
    private _githubUrl: string = `https://api.github.com/search/users`;
    private _users: Array<UserCard>;

    constructor(private _http: Http) {}

    public resolve (route: ActivatedRouteSnapshot): Observable<UserCard> {
        return this.getUser((<any>route.params).userId);
    }
    /**
     * Возвращает пользователя по id (в потоке).
     */
    public getUser (id: string): Observable<UserCard> {
        if (this._users === void 0) {
            return this.getUsers()
                .map(users => {
                    return users.find(user => user.id === id);
                })
                .flatMap(user => {
                    return this._requestGithubs(user)
                        .map((githubs) => {
                            user.githubs = githubs;
                            return user;
                        })
                });
        } else {
            return Observable.of(this._users.find(user => user.id === id))
                .flatMap(user => {
                    return this._requestGithubs(user)
                        .map((githubs) => {
                            user.githubs = githubs;
                            return user;
                        })
                });;
        }
    }
    /**
     * Возвращает пользователей (в потоке).
     */
    public getUsers (): Observable <UserCard[]> {
        if (this._users === void 0) {
            return this._requestUsers()
        } else {
            return Observable.of(this._users);
        }
    }
    /**
     * Запрашивает пользователей и кэширует их.
     * Возвращает массив пользователей (в потоке).
     */
    private _requestUsers (): Observable <UserCard[]> {
        return this._http.get(this._usersUrl)
            .map(response => {
                this._users = response.json();
                this._users.forEach((user, i) => {
                    user.id = '' + i;
                })
                return this._users;
            });
    }
    /**
     * Запрашивает Github-аккаунты пользователя (вероятные).
     * Возвращает массив из 5 первых найденных аккаунтов (в потоке).
     */
    private _requestGithubs (user: UserCard): Observable<Github[]> {
        return this._http.get(`${this._githubUrl}?q=${this._transliterate(user.surname)}`)
            .map(response => {
                return response.json().items;
            })
            .flatMap(githubs => {
                return Observable.from(githubs)
                    .map(github => {
                        return {
                            url: (<any>github).html_url,
                            login: (<any>github).login,
                        }
                    })
                    .take(5);
            })
            .toArray();
    }
    /**
     * Транслитит текст.
     */
    private _transliterate (text: string): string {
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
