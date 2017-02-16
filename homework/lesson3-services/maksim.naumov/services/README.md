Вопросы

1) почему switchMap переключает поток только для первого события из последовательности, а все остальные игнорирует?

    getUsers(): Observable<any> {
    return this._http.get("https://learn.javascript.ru/courses/groups/api/participants?key=1kmtdtv")
      .map(data => data.json())
      .concatAll()
      .do((data) => { debugger})
      .switchMap(userJson => { // сюда приходят последовательно все элементы из запрашиваемого массива, по одному
        let userNew: User = userJson;
        return this.getAccaunts(userNew.firstName, 5) // возвращает observable<any> с массивом возможных аккаунтов
        .map(logins => { // срабатывает только для самого первого пользователя
          userNew.logins = logins;
          return userNew;
        })
        .reduce((users, user) => { // срабатывает только для самого первого пользователя
          console.log(user);
          users.push(user);
          return users;
        }, [])
    })
  }
2) Как организовать получение списка возможных аккаунтов прямо во время обработки получения списка пользователей?
3) Как выполнять отладку с помощью компонента do()?