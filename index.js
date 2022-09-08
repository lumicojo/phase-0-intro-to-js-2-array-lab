const cats= ["Milo", "Otis", "Garfield"];
beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
function destructivelyAppendCat(name) {
    cats.push("Ralph");
}
function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat() {
    cats.pop(-1);
}
function destructivelyRemoveFirstCat() {
    cats.shift(0);
}
function appendCat(name) {
    const newCats = [...cats];
    newCats.push(name);            
    return newCats; 
}

function prependCat(name) {
    const newCats = [...cats];
    newCats.unshift(name);
    return newCats;
    
}
function removeLastCat() {
    const newCats = [...cats];
    newCats.splice(2);
    return newCats;
} 

function removeFirstCat() {
    const newCats = [...cats];
    newCats.shift(0);
    return newCats;
}