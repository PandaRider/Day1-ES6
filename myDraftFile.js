
function makeSound(options) {
  let species = options.species
  let sound = options.sound
  console.log("The " + species + "says " + sound + "!")
}

makeSound({
  species: "cat",
  sound: "meow"
})

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

function makeSound(options) {
  let { species, sound } = options
  console.log("The " + species + "says " + sound + "!")
}


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

function makeSound({ species, sound } ) {
  console.log("The " + species + "says " + sound + "!")
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

let [n1, n2, n3, n4, ...r] = [100, 'three', 34, {number: 23}, 694, 'eighteen'];

console.log(n1, n2, n3, n4); // "100 'three' 34 { number: 23 }"
