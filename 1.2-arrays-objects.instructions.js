/* 
    - write an object literal that stores information about your favorite movie. nameOfMovie, runTime, characters, and genre should be keys directly inside the object.
        - characters will be an array that should store no more than 2 character objects, each of which stores name, age, and items.
        - items itself will also be an array that should store no more than 2 item objects. These items objects can have key-value pairs of whatever you would like (ex. {itemOne: 'Bow and Arrow'}).

    - use console.log statements to show that you can print out the nameOfMovie, runTime, the characters, the name of a character, and one of the items a character has. Your console should look similar to the screenshot below.
*/

//NOTE: Write your code below and push back to your github branch.  SUBMIT YOUR GITHUB URL IN CANVAS

let favoriteMovie = {
    nameOfMovie:    'The Fifth Element',
    runTime:        '2h 6min',
    characters:     [{name: 'Korben Dallas', age: 42, items: [{matches: 1}, {car:'flying taxicab'}]},
                     {name: 'Leeloo', age: 5000, items: [{identification: 'MultiPass'}, {karate: true}]}],
    genre:          'Sci-fi',
}

console.log(favoriteMovie.nameOfMovie);
console.log(favoriteMovie.runTime);
console.log(favoriteMovie.characters);
console.log(favoriteMovie.characters[1].name);
console.log(favoriteMovie.characters[1].items[0].identification);
