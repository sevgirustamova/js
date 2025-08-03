// 🔹 1. Ədədin müsbət, mənfi və ya sıfır olduğunu yoxla

// let num = prompt("ededi daxil edin..");
// if ( num > 0) {
//     console.log("bu eded musbetdir");

// } else if (num < 0) {
// console.log("bu eded menfidir");
// } else if (num = 0) {
//     console.log(" eded 0 a beraberdir");

// } else{
//     console.log("zehmet olmasa, uygun eded daxil edin.");
// }

// 🔹 2. Cüt və ya tək olduğunu yoxla

// let num = prompt(" bir eded daxil edin..");
// if ( num % 2 === 0) {
//     console.log(" eded cutdur");

// } else if ( num % 2 ===1) {
//     console.log("bu eded tekdir");
// } else{
//     console.log("zehmet olmasa,uygun eded daxil edin .");
// }

// 🔹 3. Ən böyüyü tap (3 ədəd)

// let num1 = prompt(" 1ci ededi daxil edin..");
// let num2 = prompt(" 2ci ededi daxil edin");
// let num3 = prompt(" 3cu ededi daxil edin..");
//   if (num1 > num2 && num1 > num3) {
//     console.log("num1");

//   } else if ( num2 > num1 && num2 > num3) {
//     console.log("num2");

//   } else if (num3> num1 && num3> num2) {
//     console.log("num3");

//   } else{
//     console.log("zehmet olmasa uygun eded daxil edin.");

//   }

// 🔹 4. Sadə şifrə yoxlaması

// let enteredPassword = prompt(" sifreni daxil edin ..");
// let correctPassword = "5678";

// if (enteredPassword === correctPassword) {
//     alert("sifre dogrudur!")
// } else {
//     alert("sifre yanlisdir!")
// }

// 🔹 5. İki ədəd bərabərdir, yoxsa fərqli?

// let a = prompt(" birinci ededi daxil edin..");
// let b = prompt(" ikinci ededi daxil edin.");
// if (a === b) {
//     console.log("ededler beraberdir.");

// } else {
//     console.log("ededler ferglidir!");
// }

// 🔹 6. Ədəddən keçmək üçün icazə yoxlaması
// let age = prompt("zehmet olmasa,yasivizi daxil edin ");
// if (age >= 18) {
//     alert("icaze verildi!")

// } else {
//     alert("icaze yoxdur!")
// }

// 🔹 7. Sadə kalkulyator (toplama/çıxma)
// let num1 = prompt(" 1ci ededi daxil edin.");
// let num2 = prompt(" ikinci ededi daxil edin..");
// let operator = prompt("secin; + ,-");
// if (operator === "+") {
//     console.log(+(num1 + num2));
// } else if (operator === "-") {
//     console.log(+(num1 - num2));
// } else {
//     console.log("uygun eded daxil edin");

// }

// 🔹 8. Ədədin 5-ə bölünüb-bölünmədiyini yoxla
//  let a = prompt(" eded daxil edin..");
//  if (a % 2 === 0 && a % 5 === 0) {
//     console.log(" eded 5e bolunur!");
//  } else {
//     console.log("eded 5e tam bolunmur!");
//  }
     
// 🔹 9. Rəqəmlər bərabərdirmi?
// İki rəqəmli ədəd verilir. Onun onluq və təkli mərtəbələri eyni olub olmadığını yoxla.





// 🔹 10. Ədədlərdən biri digərlərinin cəminə bərabərdir?

// let a = Number(prompt(" 1ci ededi daxil edin."))
// let b = Number(prompt(" 2ci ededi daxil edin."))
// let c= Number(prompt(" 3cu ededi daxil edin."))

// let a = 5;
// let b = 2;
// let c = 3;

// if (a === b + c) {
//     console.log("beli, a = b + c");
// } else if (b === a + c) {
//     console.log("beli, b = a + c");

// } else if (c === a + b) {
//     console.log("beli, c = a + b");

// } else {
//     console.log(" ededlerin hec biri bir birine beraber deyil!");
// }

// 🔹 11. Simvollarla şifrə gücü
// Əgər şifrə 8 simvoldan qısadırsa – zəif,
// 8 və daha çox simvoldadırsa – güclüdür.

// let password = prompt(" sifreni daxil edin.");
// if (password.length >= 8) {
//     alert("sifre gucludur!")

// } else {
//     alert(" sifre zeifdir!")

// }

// 🔹 12. Ədədlər ardıcıldırmı?
// Üç ədəd verilir. Onlar ard-arda gələn ədədlərdirmi?

// let a = Number(prompt(" a ededini daxil edin,."));
// let b = Number(prompt(" b ededini daxil edin."));
// let c = Number(prompt(" c ededini daxil edin."));

// let a = 1;
// let b = 4;
// let c = 5;

// if (b === a + 1 && c === b + 1) {
//     console.log(" bu ededler ardicildir !");

// } else {
//     console.log(" ededler ardicil deyil!");

// }

// 🔹 13. Simvol böyükdürmü, kiçik?
// Bir hərf verilir. Onun böyük (A-Z) yoxsa kiçik (a-z) hərf olduğunu yoxla.
// let letter = prompt(" bir herf daxil edin.");
// if () {

// } else {

// }


// 🔹 14. İkili girişlə çıxış: işıq yandır/əlaqəni kəs
// İki düymə (a və b) var. Əgər ikisi də basılıbsa, sistem işığı yandırır. Əks halda sönük qalır.
// let a = true;
// let b = true;
// if (a === true && b === true) {
//     console.log("yandir!");

// } else {
//     console.log("yandirma!");

// }


// 15. 1-dən 10-a qədər ədədləri ekrana çap et.

//  for (let i = 0; i <= 10; i++) {
//     console.log(i);

//  }

// 16. 5-dən 15-ə qədər ədədləri ekrana çap et.

// for (let i = 5; i <= 15; i++) {
//     console.log(i);;

// }

// 17. 10-dan 1-ə qədər tərs say.

// for (let i = 10; i >= 1; i--) {
//     console.log(i);
//   }

// 18. 1-dən 20-yə qədər cüt ədədləri çap et.
// for (let i = 0; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i);

//     }
// }

// 19. 1-dən 30-a qədər tək ədədlərin cəmini tap.
// for (let i = 0; i <= 30; i++) {
//     if (i % 2 === 1) {
//         console.log(i);

//     }
// }

// 20. İstifadəçinin verdiyi n ədədinə qədər bütün ədədləri çap et.
// let n = 5;
// for (let i = 0; i <= n; i++) {
//     console.log(i);
// }

// 21. 1-dən n-ə qədər ədədlərin kvadratını çap et.

// let n = 8;
// for (let i = 0; i <= n; i++) {
//     console.log(i * i);
// }

// 22. 1-dən 50-yə qədər ədədlərin içində 3-ə bölünənləri çap et.
// for (let i = 0; i <= 50; i++) {
//     if (i % 3 === 0) {
//         console.log(i);

//     }
// }

// 23. 1-dən 100-ə qədər ədədlərin içində həm 3-ə, həm də 5-ə bölünənləri tap.
// for (let i = 0; i <= 100; i++) {
// if (i % 3 === 0 && i % 5 === 0) {
//     console.log(i);
// }
// }

// 24. 1-dən n-ə qədər ədədlərin faktorialını hesabla və çap et.
// let n = 5;
// let factorial = 1;

// for (let i = 1; i <= n; i++) {
//   factorial *= i;
// }

// console.log(n + "! = " + factorial);

// 25. İki ədəd a və b verilir, a-dan b-yə qədər ədədlərin cəmini tap.

// let a = 3;
// let b = 7;
// let sum = 0;

// for (let i = a; i <= b; i++) {
//     sum += i;
//     console.log( sum);

// }

// 26. İstifadəçi tərəfindən daxil edilən stringin hərflərini bir-bir for ilə ekrana çıxar.
// let name = " Sevgi";
// for (let i = 1; i < name.length; i++) {
//     console.log(name[i]);
// }

// 27. 1-dən 100-ə qədər ədədlərin içində tək və cüt ədədlərin sayını hesabla.
// let tekSay = 0;
// let cutSay = 0;

// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//         cutSay++;
//         console.log(cutSay);
//     } else {

//         tekSay++;
//         console.log(tekSay);
//     }
// }
























