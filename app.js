// console.log(`${gun} gun ${saat} saat ${deqiqe} deqiqe ${saniye} saniye`);
// }, 1000);

// console.log("%cHello world","color:yellow; font-size: 36px;");
// 4 gun 10 saat 6 deq 12 san

// TASK JS

// 1. Her defe ferqli rengde ekrana cixmali (console.log(`${gun} gun ${saat} saat ${deqiqe} deqiqe ${saniye} saniye`);)

// let birthday = new Date("04-12-2005");
// setInterval(() => {
//   let now = new Date();
//   let between = now - birthday;
//   let gun = Math.trunc(between / (1000 * 60 * 60 * 24));
//   let saat = Math.trunc((between / (1000 * 60 * 60)) % 24);
//   let deq = Math.trunc((between / (1000 * 60)) % 60);
//   let san = Math.trunc((between / 1000) % 60);
//   let randomRenk = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
//     Math.random() * 256
//   )}, ${Math.floor(Math.random() * 256)})`;

//   console.log(
//     `%c${gun} gun ${saat} saat ${deq} deqiqe ${san} saniye`,
//     `color: ${randomRenk}; font-size: 16px;`
//   );
// }, 1000);

// 2.students datasinda searching yazmaq. Prompt-da telebenin adini yazacam eger ele bir telebe varsa mene onu qaytarmalidir.

// let students = [
//   {
//     name: "Nahid",
//     surname: "Allahverdiyev",
//     adress: "Naxcivan MR",
//   },
//   {
//     name: "Nadir",
//     surname: "Haciyev",
//     adress: "Naxcivan MR",
//   },
//   {
//     name: "Firuze",
//     surname: "Mehdiyeva",
//     adress: "Ordubad",
//   },
// ];
// function findStName(stName) {
//     return students.map(student => {
//         if (student.name === stName) {
//             return student;
//         } else {
//             return null;
//         }
//     }).filter(student => student !== null);
// }

// let searchStName = prompt(" Telebenin adını girin:");
// let foStudent = findStName(searchStName);

// if (foStudent.length > 0) {
//     console.log(" Telebe tapildi:");
//     console.log("Ad:", foStudent[0].name);
//     console.log("Soyad:", foStudent[0].surname);
//     console.log("Adres:", foStudent[0].adress);
// } else {
//     console.log(" TElebe tapilmadı.");
// }

// 3. Prompt ile daxil olunan her soz asagidaki kimi console-da cixmalidir:
//Ornek: hello
//h
//he
//hel
//hell
//hello
//hell
//hel
//he
//h

let soz = prompt(" Sozu daxil et:");
let uzunluq = soz.length;
for (let i = 0; i < uzunluq * 2 - 1; i++) {
  let neticesoz =
    i < uzunluq
      ? soz.substring(0, i + 1)
      : soz.substring(0, uzunluq * 2 - i - 1);
  console.log(neticesoz);
}
