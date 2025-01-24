
//1
let fruits = ["apple", "banana", "cherry"]; 
fruits.push("orange");
console.log(fruits);

//2
let numbers = [10, 20, 30, 40]; 
numbers.shift();
console.log(numbers);

 //3
let colors = ["red", "blue", "green"];
let colors1 = colors.splice(1,0,'yelow')
console.log(colors);


//4
let animals1 = ["cat", "dog"]; 
let animals2 = ["lion", "tiger"]; 
let anilals = animals1.concat(animals2);
console.log(anilals);


//5
let scores = [50, 30, 20, 10, 40]; 
scores.sort();
console.log(scores);

//6
let cities = ["Tbilisi", "Batumi", "Kutaisi"]; 
let cities1 = cities.join('-');
console.log(cities1);



//7
let letters = ["a", "b", "c", "d"]; 
letters.reverse();
console.log(letters);

//8
let books = ["Math", "Science", "History"]; 
console.log(books.length);

