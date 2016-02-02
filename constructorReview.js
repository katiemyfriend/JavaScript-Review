//Create a Animal Constructor that has the following parameters. species, name, legs, color, food (which is an array of foods they can eat).

var Animal = function(species, name, legs, color, food) {
  this.species = species;
  this.name = name;
  this.legs = legs;
  this.color = color;
  this.food = food;
}


//Now create a person function that creates an object and returns it (not in constructor form) that has the following parameters. name, age, height, gender

var personMaker = function(name, age, height, gender) {
  var person = Objcet.create(personMaker.prototype);
  person.name = name;
  person.age = age;
  person.height = height;
  person.gender = gender;
  return person;
};


//Create a animal array and a person array.

var Animals = [];
var Persons = [];

//Create two instances of Animal and push those into your animal array

Animals.push(new Animal('Bird', 'Blue Jay', 2, "Blue", "Seeds"));
Animals.push(new Animal('Dog', 'Lab', 4, 'Tan', 'Dog Food'));


//Create two instances of person and push those into your person array.

Persons.push(new Person("Sally", 39, "6ft", "Female"));
Persons.push(New Person("Billy", 30, "7ft", "Male"));


//Now we want every instance of Animal to have a eat method. This method will choose a random item in that instances food array, then alert "(name) ' ate ' (whichever food was chosen)".

Animal.prototype.eat = function() {
  var eatFood = Math.floor() * this.food.length);
  alert(this.name " ate " + this.food[eatFood]);
}


//At this point, if we wanted to add something to every istance of person could we?

  //Yes or no? and why or why not? No - person is an object class so no prototypes.



/*
  1) What happens when you use the 'new' keyword to call a Constructor function?
    a new object is created
  2) What's a good way to describe the keyword 'this'
    It is a reference to the object that is calling the functions
  3) Can a normal function which creates an object and then returns that object use the prototype?
    No becuze it's not its own class
  4) What happens if you forget to use 'new' when calling a constructor?
    It will not create a new object
*/
