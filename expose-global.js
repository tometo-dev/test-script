function Greet(name) {
  console.log(`Hey {name}, I'm from global scope`);
}

window.Greet = Greet
