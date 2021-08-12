// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

// describe('destructivelyAppendCat(name)', function () {
//     it('appends a cat to the end of the cats array', function () {
//       destructivelyAppendCat('Ralph');

//       expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield", "Ralph"]);
//     });
//   });

function destructivelyAppendCat(name) {
  cats.push(name);
}

//   describe('destructivelyPrependCat(name)', function () {
//     it('prepends a cat to the beginning of the cats array', function () {
//       destructivelyPrependCat("Bob");

//       expect(cats).to.have.ordered.members(["Bob", "Milo", "Otis", "Garfield"]);
//     });
//   });

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

//   describe('destructivelyRemoveLastCat()', function () {
//     it('removes the last cat from the cats array', function () {
//       destructivelyRemoveLastCat();

//       expect(cats).to.have.ordered.members(["Milo", "Otis"]).and.to.not.include('Garfield');
//     });
//   });

function destructivelyRemoveLastCat(name) {
  cats.pop(name);
}

//   describe('destructivelyRemoveFirstCat()', function () {
//     it('removes the first cat from the cats array', function () {
//       destructivelyRemoveFirstCat();

//       expect(cats).to.have.ordered.members(["Otis", "Garfield"]).and.to.not.include('Milo');
//     });
//   });

function destructivelyRemoveFirstCat(name) {
  cats.shift(name);
}

//   describe('appendCat(name)', function () {
//     it('appends a cat to the cats array and returns a new array, leaving the cats array unchanged', function () {
//       expect(appendCat("Broom")).to.have.ordered.members(["Milo", "Otis", "Garfield", "Broom"]);

//       expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
//     });
//   });
function appendCat(name) {
  return [...cats, name];
}

//   describe('prependCat(name)', function () {
//     it('prepends a cat to the cats array and returns a new array, leaving the cats array unchanged', function () {
//       expect(prependCat("Arnold")).to.have.ordered.members(["Arnold", "Milo", "Otis", "Garfield"]);

//       expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
//     });

function prependCat(name) {
  return [name, ...cats];
}
//   });

//   describe('removeLastCat()', function () {
//     it('removes the last cat in the cats array and returns a new array, leaving the cats array unchanged', function () {
//       expect(removeLastCat()).to.have.ordered.members(["Milo", "Otis"]);

//       expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
//     });
//   });

function removeLastCat(name) {
  return cats.slice(0, cats.length - 1);
}

//   describe('removeFirstCat()', function () {
//     it('removes the first cat from the cats array and returns a new array, leaving the cats array unchanged', function () {
//       expect(removeFirstCat()).to.have.ordered.members(["Otis", "Garfield"]);

//       expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);

function removeFirstCat(name) {
  return cats.slice(1);
}

//     });
//   });
// });
// });
