
// შექმენით ფუნქცია, რომელსაც გადავცემთ n რაოდენობის მნიშვნელობას და დააბრუნოს მხოლოდ დადებითი რიცხვების ჯამს:
// 2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8;


// function sum(...numbersArray) {

//         let numberSum = 0;
//         for (let item of numbersArray) {
//             if (item>0){
//             numberSum += item;
//         }
//     }
//        console.log(numberSum);
//     }

//     sum(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);



// ფუნქციის საშულებით გამოიტანეთ ყველა რიცხვის ჯამი:
// 10, 50, 6, 7, 8, 11, 6, 3, 9

// function sum(...numbersArray) {

//     let numberSum = 0;
//     for (let item of numbersArray) {
        
//         numberSum += item;

// }
//     console.log(numberSum);
// }

// sum(10, 50, 6, 7, 8, 11, 6, 3, 9);




// ფუნქციამ უნდა დააბრუნოს სახელი და გვარი ადგილის გამოტოვებით (მაგ: 'giorgi saakadze') 
// თუ isloggedin არის true და false თუ isloggedin ფროფერთი არის false;


let user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isloggedin: true,
}
function status1(){
    if (user.isloggedin==true) {
                        return `${user.firstname} ${user.lastname}`;
                    }
                    else{return(false);}
}
let nameFunction = status1()
console.log(nameFunction);

// meore
// let status1 = () => {
    
//             if (user.isloggedin) {
//                 return `${user.firstname} ${user.lastname}`;
//             }
//             else{return(false);}
//         }
// let nameFunction = status1();
// console.log(nameFunction);

// შექმენით ფუნქცია რომელსაც გადაეცემა ერთი პარამეტრი.
//  ეს პარამეტრი უნდა იყოს რიცხვების მასივი და ფუნქციამ 
// უნდა დააბრუნოს ამ რიცხვებიდან მაქსიმალური:

// function maxvalue(...aray) {
//     let item = 0;
// for (let value of aray) {
//     if (value >item) {
//      item=value;
//     }
// }
// return item;
// }
// let max = maxvalue(10, 50, 6, 7, 8, 70, 11,  6, 3, 9)
// console.log(max);
    
// // დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიიღებს ერთ რიცხვს და 
// გამოთვლის გადაცემული მნიშვნელობა კენტია თუ ლუწი; 
// თუ ლუწია დააბრუნოს - ‘this number is even; 
// თუ კენტია დააბრუნოს - this number is odd;

// function func2(i) {
//         if (i == 0) console.log('eror'); 
//         else if (i%2 == 1)console.log('this number is odd');
//         else console.log('this number is even');
//     }
//     func2(24);




// მოცემულია მასივი:
// let array = [1,2,3,4,5];

// for ციკლის საშუალებით მიიღეთ reverse ვერისია, ანუ 5,4,3,2,1

let array = [1, 2, 3, 4, 5];
for (let a = array.length; a > 0; a--) {
  console.log(a);
}


// ფუნქციის საშუალებით გამოთვალეთ უსერის ასაკი და დაამატეთ შემდეგი პირობა, 
//  თუ გადაცემული ასაკი მეტია 18- ზე დააბრუნეთ - სრულლოვანი, 
//  თუ ნაკელებია დააბრუნეთ არასწულწლოვანი. 
// ეს ამოცანა დაწერეთ arrow function-ით და
//  if ის პირობა ჩაწერეთ ახალი სინტაქსით;

// let ageFunc = (birthYear,yearNow) => {
//     let age = yearNow - birthYear
//     let result = age > 18 ? 'სრულწლოვანია' : 'არასწულყლოვანია'
//     return result
// }

// let ageResult = ageFunc(2000, 2023)
// console.log(ageResult);


// let func5 = (brthyear, yearnow) => {
//     let age= yearnow-brthyear;
//     let status = age>18? 'სრულწლოვანი':'არასწულყლოვანი';
// return status;
// }
// let agestatus = func5(2009, 2023);
// console.log(agestatus);


// მოცემულია მასივი
// ციკლის საშუალებით შეამოწმეთ, თუ ამ მასივში არის რიცხვი 5 - 
// მაშინ დალოგეთ - ‘არის’ და გააჩერეთ ციკლი

let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let index of array2) {
    
    if (index==5){ console.log('არის');
     break;
}
}
// მოცემულია მასივი
// გამოიტანეთ ყველა რიცხვი 7 ის გარდა ( continue)
 let array5 = [1, 2, 3, 7, 6, 9];

 for (let index of array5) {
     
     if (index==7){ 
      continue;
 }
console.log(index);
 }


// წარმატებები


