// 1.Create an array of books containing different book.

// 2.Use the includes method to check if the array contains a javascript book.

// 3.Print a message to the console indicating whether the element is present in the array or not.



let book=['bangla','english','math','math'];
console.log(book);
var b=book.includes('js_book');
var c=book.indexOf('math');
console.log(c);
console.log(b);
let uni=[... new Set(book)]
console.log(uni);