// //1
// let fruits = ["apple", "banana", "cherry"];
// fruits.push("orange");
// console.log(fruits);

// //2
// let numbers = [10, 20, 30, 40];
// numbers.shift();
// console.log(numbers);

//  //3
// let colors = ["red", "blue", "green"];
// let colors1 = colors.splice(1,0,'yelow')
// console.log(colors);

// //4
// let animals1 = ["cat", "dog"];
// let animals2 = ["lion", "tiger"];
// let anilals = animals1.concat(animals2);
// console.log(anilals);

// //5
// let scores = [50, 30, 20, 10, 40];
// scores.sort();
// console.log(scores);

// //6
// let cities = ["Tbilisi", "Batumi", "Kutaisi"];
// let cities1 = cities.join('-');
// console.log(cities1);

// //7
// let letters = ["a", "b", "c", "d"];
// letters.reverse();
// console.log(letters);

// //8
// let books = ["Math", "Science", "History"];
// console.log(books.length);

// let student = {
//     name: "გიორგი",
//     age: 21,
//     isStudying: true,
//     favoriteSubjects: ["მათემატიკა", "ფიზიკა", "პროგრამირება"],
//     address: {
//         city: "თბილისი",
//         street: "რუსთაველის გამზირი"
//     }
// };

// console.log(student);

// let book = {
//     title: "ვეფხისტყაოსანი",
//     author: {
//         firstName: "შოთა",
//         lastName: "რუსთაველი"
//     },
//     location: "საქართველო",
//     price: 29.99,
//     isAvailable: true,
//     genres: ["ეპოსი", "ლიტერატურა", "პოეზია"]
// };

// console.log("დასახელება:", book.title);
// console.log(`ავტორი: ${book.author.firstName} ${book.author.lastName}`);
// console.log("ადგილი:", book.location);
// console.log("ფასი:", book.price);
// console.log("ხელმისაწვდომობა:", book.isAvailable);
// console.log("ჟანრები:", book.genres[1],' ', book.genres[2]);

// let theaterTicket = {
//     ticketNumber: "A123456",
//     theaterName: "რუსთაველის თეატრი",
//     show: "ჰამლეტი",
//     price: 50.00,
//     isAvailable: false,
//     theaterAddress: {
//         city: "თბილისი",
//         street: "რუსთაველის გამზირი 17"
//     },
//     purchaseDate: new Date()
// };

// theaterTicket.price = 65.50;
// theaterTicket.isAvailable=true;

// console.log( `ბილეთის ნომერი: ${theaterTicket.ticketNumber}` );
// console.log("თეატრის სახელი:", theaterTicket.theaterName);
// console.log("სპექტაკლი:", theaterTicket.show);
// console.log("ფასი:", theaterTicket.price);
// console.log("ხელმისაწვდომობა:", theaterTicket.isAvailable ? "დიახ" : "არა");
// console.log("თეატრის მისამართი:", theaterTicket.theaterAddress.city + ", " + theaterTicket.theaterAddress.street);
// console.log("შეძენის თარიღი:", theaterTicket.purchaseDate.toDateString());

// for(let i=0; i<4; i++ ) {
//     console.log("hello");

// }



//5 თებერვლის დავალება
//  რიცხვის ლუწი ან კენტი შემოწმება:
let number = 37;
if (number % 2) {
  console.log("რიცხვი კენტია");
} else {
  console.log("რიცხვი ლუწია");
}

//რიცხვის დადებითი, უარყოფითი ან ნულის შემოწმება:
let number1 = 37;
if (number > 0) {
  console.log("რიცხვი დადებთია");
} else if (number < 0) {
  console.log("რიცხვი უარყოფითია");
} else {
  console.log("რიცხვი ნულის ტოლია");
}

//წლის ნაკიანობის შემოწმება:

let year = 2025;
if (year / 4 === 0) {
  console.log("ნაკიანი წელი");
} else {
  console.log("წელი არაა ნაკიანი");
}

//  სტუდენტის შეფასების განსაზღვრა ქულის მიხედვით:
let score = 82;

if (score >= 90 && score <= 100) {
  console.log("A");
} else if (score >= 80 && score <= 89) {
  console.log("B");
} else if (score >= 70 && score <= 79) {
  console.log("C");
} else if (score >= 60 && score <= 69) {
  console.log("D");
} else if (score >= 50 && score <= 59) {
  console.log("E");
} else if (score >= 0 && score <= 49) {
  console.log("Fail");
} else {
  console.log("შეამოწმეთ ჩანაწერი");
}

//ასაკის მიხედვით კატეგორიის განსაზღვრა:

let age = 15;
if (age >= 0 && age <= 12) {
  console.log("ბავშვი");
} else if (age >= 13 && age <= 17) {
  console.log("მოზარდი");
} else if (age >= 18 && age <= 64) {
  console.log("ზრდასრული");
} else if (age >= 65) {
  console.log("ხანდაზმული");
}
//რიცხვის ციფრების რაოდენობის განსაზღვრა:

let number2 = 1789;

console.log("რიცხვს აქვს ", number2.toString().length, " ციფრი");

//დღის ტიპის განსაზღვრა:

let numberOfDay = 5;
if (numberOfDay % 7 === 6 || numberOfDay % 7 === 0) {
  console.log("დღეს დასვენების დღეა");
} else {
  console.log("დღეს სამუშაო დღეა");
}
//რიცხვების დაბეჭდვა 1-დან 10-მდე:
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

let number3 = 1;

while (number3 <= 10) {
  console.log(number3);
  number3++;
}

//   ლუწი რიცხვების დაბეჭდვა 2-დან 20-მდე: 

for (let i = 2; i <= 20; i+=2) {
    console.log(i);
  }
  

// ( არ არის სავალდებულო)while ციკლით: დაწერეთ კოდი, რომელიც while ციკლის გამოყენებით დაბეჭდავს ლუწ რიცხვებს 2-დან 20-მდე. 

let number4 = 2;
while(number4<=20){
    console.log(number4);
    number4+=2;
    
}

// //  ( არ არის სავალდებულო) რიცხვების ჯამის გამოთვლა 1-დან 100-მდე: 

let sum1=0;                   
for(let i=1; i<=100; i++) {
 sum1 += i
     
}
console.log("რიცხვების ჯამი 1-დან 100-მდე:", sum1);  

// while ციკლით: დაწერეთ კოდი, რომელიც while ციკლის გამოყენებით გამოთვლის რიცხვების ჯამს 1-დან 100-მდე. 
let sum = 0; 
let number6 = 1; 

while (number6 <= 100) { 
    sum += number6; 
    number6++; 
}

console.log("რიცხვების ჯამი 1-დან 100-მდე არის:", sum);  


//   რიცხვების ამოწერა უკუღმა: 

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// ( არ არის სავალდებულო)while ციკლით: დაწერეთ კოდი, რომელიც while ციკლის გამოყენებით დაბეჭდავს რიცხვებს 10-დან 1-მდე. 

let number7 = 10;

while (number7 >= 1) {
  console.log(number7);
  number7--;
}