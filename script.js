
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




let student = {
    name: "გიორგი",
    age: 21,
    isStudying: true,
    favoriteSubjects: ["მათემატიკა", "ფიზიკა", "პროგრამირება"],
    address: {
        city: "თბილისი",
        street: "რუსთაველის გამზირი"
    }
};

console.log(student);


let book = {
    title: "ვეფხისტყაოსანი",
    author: {
        firstName: "შოთა",
        lastName: "რუსთაველი"
    },
    location: "საქართველო",
    price: 29.99,
    isAvailable: true,
    genres: ["ეპოსი", "ლიტერატურა", "პოეზია"]
};

console.log("დასახელება:", book.title);
console.log(`ავტორი: ${book.author.firstName} ${book.author.lastName}`);
console.log("ადგილი:", book.location);
console.log("ფასი:", book.price);
console.log("ხელმისაწვდომობა:", book.isAvailable);
console.log("ჟანრები:", book.genres[1],' ', book.genres[2]);

let theaterTicket = {
    ticketNumber: "A123456",
    theaterName: "რუსთაველის თეატრი",
    show: "ჰამლეტი",
    price: 50.00,
    isAvailable: false,
    theaterAddress: {
        city: "თბილისი",
        street: "რუსთაველის გამზირი 17"
    },
    purchaseDate: new Date() 
};

theaterTicket.price = 65.50;
theaterTicket.isAvailable=true;

console.log( `ბილეთის ნომერი: ${theaterTicket.ticketNumber}` );
console.log("თეატრის სახელი:", theaterTicket.theaterName);
console.log("სპექტაკლი:", theaterTicket.show);
console.log("ფასი:", theaterTicket.price);
console.log("ხელმისაწვდომობა:", theaterTicket.isAvailable ? "დიახ" : "არა");
console.log("თეატრის მისამართი:", theaterTicket.theaterAddress.city + ", " + theaterTicket.theaterAddress.street);
console.log("შეძენის თარიღი:", theaterTicket.purchaseDate.toDateString());
