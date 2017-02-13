export interface Mail {
  whenReceived: number,
  from: string,
  title: string,
  message: string,
}

export let mailsList: Mail[] = [
  {
    whenReceived: Date.now() - 421087000,
    from: 'kodwi@ya.ru',
    title: 'Nullam vulputate',
    message: ''
  },
  {
    whenReceived: Date.now() - 10037833,
    from: 'test@gmail.com',
    title: 'Vevamus ut metus massa',
    message: ''
  },
  {
    whenReceived: Date.now() - 1000000,
    from: 'pppo-213@rambler.ru',
    title: 'Morbi nec ornare metus, ac convallis nunc.',
    message: ''
  },
  {
    whenReceived: Date.now() - 100000,
    from: 'pochta007@yandex.ru',
    title: 'Vestibulum',
    message: ''
  },
  {
    whenReceived: Date.now() - 187,
    from: 'angular2@is.good',
    title: 'Cras non eleifend eros',
    message: ''
  },
  {
    whenReceived: Date.now() - 39000,
    from: 'agent007@james.bond',
    title: 'Lesson 2',
    message: ''
  },
  {
    whenReceived: Date.now() - 1265987,
    from: 'html5@css3.js',
    title: 'Suspendisse potenti.',
    message: ''
  },
  {
    whenReceived: Date.now() - 568794,
    from: 'type@script.js',
    title: 'Suspendisse sem mi, porta non faucibus vel',
    message: ''
  },
  {
    whenReceived: Date.now() - 1561619847,
    from: 'motocross@mail.ru',
    title: 'Nunc scelerisque mauris',
    message: ''
  }
];
