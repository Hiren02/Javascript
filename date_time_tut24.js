console.log('This  is date and time object');

let today = new Date();
console.log(today);

let otherDate = new Date('8-4-2021 04:23:22');
console.log(otherDate);

let a;
a= otherDate.getDate();
a= otherDate.getDay();
a= otherDate.getMinutes();
a= otherDate.getHours();
a= otherDate.getTime();
console.log(a);

otherDate.setDate(23);
otherDate.setFullYear(2020);
otherDate.setMonth(2020);
console.log(otherDate);