const EXAMPLE_NUMBER = 100000;

class Person {
  constructor() {
    console.log('Example number: ', EXAMPLE_NUMBER);
  }

  say(string) {
    console.log('Saying: ', string);
  }
}

const lucas = new Person();

lucas.say('Hello Lucas! :)');
