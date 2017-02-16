export class Email {
    _from: string;
    _to: string;
    theme: string;
    text: string;
    timestamp: string;
}

let emails: Email[] = [
    {
        _from: "Ivory Man <IvMan@yahoo.com>",
        _to: "Oleg Fadeyev <lega@lega.ru>",
        theme: "Gutten Tag",
        text: "Message 0",
        timestamp: "2017-02-09T18:44:00.395Z"
    },
    {
        _from: "John Doe <JD@yahoo.com>",
        _to: "Oleg Fadeyev <lega@lega.ru>",
        theme: "How R U",
        text: "Message 1",
        timestamp: "2017-02-08T19:44:00.395Z"
    },
    {
        _from: "Jane Doe <JD@yahoo.com>",
        _to: "Oleg Fadeyev <lega@lega.ru>",
        theme: "Hello",
        text: "Message 2",
        timestamp: "2017-01-18T19:44:00.395Z"
    },
    {
        _from: "Ivan Ivanov <ivan@yandex.ru>",
        _to: "Oleg Fadeyev <lega@lega.ru>",
        theme: "Hi",
        text: "Message 3",
        timestamp: "2016-12-10T11:44:00.395Z"
    },
    {
        _from: "Peter Petrov <peter@kovrov.ru>",
        _to: "Oleg Fadeyev <lega@lega.ru>",
        theme: "No theme",
        text: "Message 4",
        timestamp: "2016-01-01T10:00:00.395Z"
    }
];

export { emails };