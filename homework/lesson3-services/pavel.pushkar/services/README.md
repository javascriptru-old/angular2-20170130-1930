Вопросы по проекту Список пользователей:
1)Певый запрос - получить список юзеров реализовал через Observable, второй запрос - поиск github аккаунтов - через fetch.
а)Уместно ли так делать (смешивать) или это плохой стиль?
б) Не получилось уйти от бана gihub, если больше 10-ти юзеров, то отправляет в бан. Как в моем случае можно реализовать задержку? 
2) Можно ли разбивать поток на порции с помощью встроенных операторов RxJS?

Пытался придумать свою функцию, которая делить массив из 19 юзеров(уже массив, а не поток) к примеру по 10  юзеров, но получились простыни кода.
В результате, чтобы программа работала, в файле users.json ограничился 10-ю юзерами, так работает.
Запускал проекты других ребят с курса, тоже банит.

<<<<<<< HEAD
# UserList

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.30.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
=======
# user-list
>>>>>>> f85e16ed5714db40eb6225751a730c0a499537db
