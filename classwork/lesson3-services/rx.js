var myInput = document.getElementById('myInput');
var o = Rx.Observable.fromEvent(myInput, 'input')
    .switchMap(function (event) { return Rx.Observable.fromPromise(fetch("https://api.github.com/search/repositories?q=" + event.target.value)); })
    .switchMap(function (response) { return Rx.Observable.fromPromise(response.json()); })
    .subscribe(function (response) {
    console.log(response);
});
