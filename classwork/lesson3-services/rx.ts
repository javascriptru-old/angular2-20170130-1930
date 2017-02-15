let myInput = document.getElementById('myInput');

declare function fetch(url: string) : PromiseLike<any>;
/*
function createEventPromise() {
    let listener: (event: KeyboardEvent) => void;
    let p = new Promise((resolve) => {

        listener = (event) => {
            resolve(event);
        }
        myInput.addEventListener('input', listener);
    });

    return p.then((event: KeyboardEvent) => {
        //console.log(event);
        fetch(`https://api.github.com/search/repositories?q=${(event.target as HTMLInputElement).value}`)
        .then(response => response.json())
        .then(repositories => {
            console.log(repositories);
        })

        myInput.removeEventListener('input', listener);
        createEventPromise();
    });
}

createEventPromise();*/

declare var Rx;

let o = Rx.Observable.fromEvent(myInput, 'input')
.switchMap(event => Rx.Observable.fromPromise(fetch(`https://api.github.com/search/repositories?q=${(event.target as HTMLInputElement).value}`)))
.switchMap(response => Rx.Observable.fromPromise(response.json()))
.subscribe((response) => {
    console.log(response);
});




