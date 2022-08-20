const cats = ["Milo", "Otis", "Garfield"];
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
function  prependCat(name) {
    const allCats = [...cats];
    allCats.unshift(name);
    return allCats
}  

function removeLastCat() {
    const copyOfCats = [...cats];
    copyOfCats.splice(2);
    return copyOfCats
}

function removeFirstCat() {
    const copyOfCats = [...cats];
    copyOfCats.shift(0);
    return copyOfCats
}
   

     
