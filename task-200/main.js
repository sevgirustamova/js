// 1.Input value oxu – Input-a yazılan mətni console.log et.

// 2.Mouse ilə rəng dəyişməsi – Mouse div üzərinə gələndə fon rəngi dəyişsin.

// 3.Sayğac (artırma) – Kliklədikcə 1-dən başlayaraq rəqəm artsın.

// 4.Sayğac (azaltma) – Kliklədikcə rəqəm azalsın.

// 5. Şəkil dəyiş – Kliklədikdə <img>-in src-ni başqa şəkillə dəyiş.

// 6.Hide / Show element – Bir element kliklə gizlənib-görünsün.

// 7.Random rəqəm – Ekranda random 1-100 arası rəqəm çıxarsın.

// 8.Todo list – Input-a mətni yaz, əlavə et düyməsinə bas, listdə çıxsın.

// 9.Klaviatura hadisəsi – İstifadəçi klaviaturadan yazanda console.log-da göstər.

// 10.Password görün/gizlən – Input tipini text/password dəyişdir.

// 11.İki rəngli switch – Düyməyə kliklədikcə fon ağ/qara dəyişsin.

// 12.Random söz seçimi – Bir array-dən random söz seçib göstər.

// 13.Saat – Real vaxtı ekranda göstər (her saniyə yenilə).

// 14.Hover ilə şəkil böyütmə – Mouse şəkil üzərinə gələndə ölçüsü artsın.

// 15.Ad təmizləmə – Input-a ad yazıb düyməyə klikləndə ekrana göstər, sonra input-u təmizlə.


// 1.Input value oxu – Input-a yazılan mətni console.log et.
// function logInput() {
//   let inputValue = document.getElementById("myinput").value
//   console.log(inputValue);
// }


// 2.Mouse ilə rəng dəyişməsi – Mouse div üzərinə gələndə fon rəngi dəyişsin.

// let colorBox = document.getElementById('colorBox');
// colorBox.addEventListener('mouseenter', () => { colorBox.style.backgroundColor = 'yellow'; })
// colorBox.addEventListener('mouseleave', () => { colorBox.style.backgroundColor = 'red'; })

// 3.Sayğac (artırma) – Kliklədikcə 1-dən başlayaraq rəqəm artsın.
// let count = 1;
// function myButton() {
// const btn = document.getElementById('myButton')
// count++;

// document.getElementById("counter").innerText = count;
// }

// 4.Sayğac (azaltma) – Kliklədikcə rəqəm azalsın.

// let count = 0;
// function myButton() {
//   const btn = document.getElementById('myButton')
//   count--;
//   document.getElementById("counter").innerText = count;

// }

// 6.Hide / Show element – Bir element kliklə gizlənib-görünsün.
// function toggleText() {
//     const text = document.getElementById("text");
//     if (text.style.display === "none") {
//         text.style.display = "block"
//     } else {
//         text.style.display = "none"
//     }
// }

// 7.Random rəqəm – Ekranda random 1-100 arası rəqəm çıxarsın.
// function randomShow() {
//     const randomNum = Math.floor(Math.random() * 100) + 1;
//     document.getElementById("result").innerText = randomNum;

// }

// 8.Todo list – Input-a mətni yaz, əlavə et düyməsinə bas, listdə çıxsın.
// function add() {
//     const myInput = document.getElementById("myInput");
//     const value = myInput.value.trim();
//     const li = document.createElement('li');
//     li.textContent = value;
//     document.getElementById('todoList').appendChild(li);

//     myInput.value = "";
// }

// 9.Klaviatura hadisəsi – İstifadəçi klaviaturadan yazanda console.log-da göstər.

// const myInput = document.getElementById("myInput");
// myInput.addEventListener('keydown', (event) => {
//     console.log('Pressed key:', event.key);
// });


// 10.Password görün/gizlən – Input tipini text/password dəyişdir.
// const passwordInput = document.getElementById('password');
// const toggleBtn = document.getElementById('toggleBtn');

// toggleBtn.addEventListener('click', () => {
//   if(passwordInput.type === "password") {
//     passwordInput.type = "text";
//     toggleBtn.textContent = "Gizlət";
//   } else {
//     passwordInput.type = "password";
//     toggleBtn.textContent = "Göstər";
//   }
// });

// 11.İki rəngli switch – Düyməyə kliklədikcə fon ağ/qara dəyişsin
// const btn = document.getElementById('switchBtn');
// let isWhite = true;
// btn.addEventListener('click', () => {
//     document.body.style.backgroundColor = isWhite ? "black" : "white";
//     isWhite = !isWhite
// })

// 12.Random söz seçimi – Bir array-dən random söz seçib göstər.

// const words = ["alma","armud", "banan", "gilas", "qarpiz"];
// const btn = document.getElementById("randomBtn");
// const result = document.getElementById("result");

// btn.addEventListener("click", () => {
//     const randomIndex = Math.floor(Math.random() * words.length)
//     result.textContent = words[randomIndex];
// })


// 13.Saat – Real vaxtı ekranda göstər (her saniyə yenilə).

// function myFunc(){
//     let now = new Date();
//     let saat = now.getHours();
//     let deg = now.getMinutes();
//     let san = now.getSeconds();
//     if (saat < 10 ) saat = "0" + saat;
//     if( deg < 10) deg = "0" + deg;
//     if(san <10 ) san = "0" + san;    
//     document.getElementById("oclock").textContent =saat + ":" + deg + ":" + san 

// }
//  setInterval(myFunc,1000);
// myFunc();


// 14.Hover ilə şəkil böyütmə – Mouse şəkil üzərinə gələndə ölçüsü artsın.(HTML/CSS)

// 15.Ad təmizləmə – Input-a ad yazıb düyməyə klikləndə ekrana göstər, sonra input-u təmizlə.

// function btn() {
//     const input = document.getElementById('myInput');
//     const result = document.getElementById('result')

//     result.textContent = input.value;
//     input.value = ""
// }


