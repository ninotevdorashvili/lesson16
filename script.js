// let cars = ['audi','bmw', 'lexus', 'volkswagen', 'porsche', 'audi'];
// for (let i=0; i<cars.length; i++) {
//     if (cars[i].length!=4) {
//         console.log(cars[i]);
//     }
// }




// let names = ['nino','shota','beqa','ana','ekaterine','shorena','ia','nia',]
// for (let i=0; i<names.length; i++) {
//     if(names[i].length>3) {
//         console.log(names[i]);
//     }
// }




// let numbers = [5,10,2,9,7,3,1,12,8];
// for (let item of numbers) {
//     if (item%2==0) {
//         console.log(item);
//     }
// }
// for (let item of numbers) {
//     if (item%2==1) {
//         console.log(item);
//     }
// }




// let numbers= [15, 67, 100, 5, 7, [80, 500] ]; 
// console.log(numbers[5][1]);




// var person = {
//     firstname: "john",
//     lastname: "doe",
//     age: 50,
//     eyecolor: "blue"
//   };
// console.log(person.eyecolor);  




// let colors = ['red', 'blue', 'orange', 'green', 'yellow'];
// for (let i=0; i<colors.length; i++) {
//     console.log(colors[i]);
// }
// // ან
// for (let item of colors) {
//     console.log(item);
// }




// let names = ['sandro', 'zura', 'ana', 'nino', 'nika'];
// if (names.length==5 && names[names.length-1]=== 'nika') {
//     console.log('მასივის რაოდენობა: 5 და ბოლო ელემენტია ნიკა');
// } else {
//     console.log('error');
// }
// if ( names.length==7 || names[0]==='sandro') {
//     console.log('მასივის რაოდენობა: 7 და პირველი ელემენტია სანდრო');
// } else {
//     console.log('error');
// }



// false, რადგან ორი ტოლობის შმეთხვევაში ხდება ცვლადებიs ტიპების კონვერტაცია, და მეორე ცვლადი რომელიც "string"-ია გადავა რიცხვში და ჭეშმარიტი იქნება, ხოლო სამი ტოლობის შემთხვევაში კონვერტაცია არ ხდება და რიცხვს და string-ს ვერ შეადარებს, ამიტომ არის false.