// // const temp = document.getElementById("temp1").value;
// // const frn = document.getElementById("frn");
// // const cel = document.getElementById("cel");
// // const out = document.getElementById("out");

// // function convert() {
// //   if (frn.checked) {
// //     out.textContent = "celsius to forenheight";
// //   } else if (cel.checked) {
// //     out.textContent = "forenheight to celsius";
// //   } else {
// //     out.textContent = "select one";
// //   }
// // }

// const length = 12;
// const large = true;
// const small = true;
// const num = true;
// const sym = true;

// const k = passwordGenerator(length, large, small, num, sym);

// function passwordGenerator(length, large, small, num, sym) {
//   let password = "";
//   let chars = "";
//   let smallchar = "abcdefghijklmnopqrstuvwxyz";
//   let largechar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   let numchar = "0123456789";
//   let symchar = "!@#$%^&*()_+";

//   chars += small ? smallchar : "";
//   chars += large ? largechar : "";
//   chars += num ? numchar : "";
//   chars += sym ? symchar : "";
//   if (length == 0) {
//     return `(provide length)`;
//   } else if (chars.length === 0) {
//     return "no character types selected";
//   }
//   for (let i = 0; i < length; i++) {
//     const random = Math.floor(Math.random() * chars.length);
//     password += chars[random];
//   }

//   return password;
// }

// console.log(k);

// add(print, 3, 4);

// function add(callback, x, y) {
//   let result = x + y;
//   callback(result);
// }

// function print(result) {
//   console.log(result);
// }

// console.log(3 + 3);

// const dates = ["2020-1-2", "2021-3-3", "2024-4-3"];
// const formatted = dates.map(formatdates);
// console.log(formatted);
// function formatdates(element) {
//   const part = element.split("-");
//   return `${part[1]}/${part[2]}/${part[0]}`;
// }

// setTimeout(function () {
//   console.log("hello");
// }, 9000);

// let cars = [
//   {
//     color: "purple",
//     type: "minivan",
//     registration: new Date("2017-01-03"),
//     capacity: 7,
//   },
//   {
//     color: "red",
//     type: "station wagon",
//     registration: new Date("2018-03-03"),
//     capacity: 5,
//   },
// ];

// const type = cars.map((hi) => hi.type);
// console.log(type);

// function change() {
//   const date = new Date();
//   let hour = date.getHours();
//   const meridian = hour >= 12 ? "PM" : "AM";
//   hour = hour.toString().padStart(2, 0);
//   const min = date.getMinutes().toString().padStart(2, 0);
//   const sec = date.getSeconds().toString().padStart(2, 0);
//   const output = `${hour} : ${min} : ${sec} ${meridian}`;
//   document.getElementById("out").textContent = output;
// }

// change();
// setInterval(change, 1000);

// const out = document.getElementById("display1");
// function appendToDisplay(input) {
//   out.value += input;
// }

// function clear() {
//   out.value = "";
// }

// function display() {
//   try {
//     out.value = eval(out.value);
//   } catch (err) {
//     out.value = "Error";
//   }
// }

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("error in fetching data");
//     }
//     return response.json();
//   })
//   .then((data) => console.log(data.weight))
//   .catch((err) => console.log(err));

//------------------------------------------------------------------------

// async function get() {
//   try {
//     const input = document.getElementById("input").value.toLowerCase();
//     const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
//     if (!res.ok) {
//       throw new Error("error in fetching data");
//     }

//     const data = await res.json();
//     const pok = data.sprites.front_default;
//     const img = document.getElementById("img");
//     img.src = pok;
//     img.style.display = "block";
//   } catch (err) {
//     console.log(err);
//   }
// }
