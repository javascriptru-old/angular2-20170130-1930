let taskStack = [];
const oldSetTimeout = window.setTimeout;
const setTimeout = (cb, time) => {
  let task = {
	  id: 1,
	  from:  'setTimeout',
	  func: cb,
	  details: { time }
  };
  console.log(`task: ${JSON.stringify(task)} started`);
  taskStack.push(task);
  oldSetTimeout(() => {
	  cb();
	  console.log(`task: ${JSON.stringify(task)} frinished`);
  }, time);
}


//------

//setIterval
setTimeout(function() {
	console.log('YES');
}, 2000);

//AJAX
//eventListeners


//--------



let user = { name : 'John' };
//user.name = 'Bob';
user2 = (copy(user).name = 'Bob');





