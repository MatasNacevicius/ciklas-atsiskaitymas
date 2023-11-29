//----------1 uzduotis----------------
for (let i = 0; ; i++) {
  let sk = parseInt(prompt("Iveskite skaiciu"));
  if (sk < 0) {
    console.log(`ivestas neigiamas skaicius ${sk}`);
    break;
  }
}
//------------------------------------

//----------2 uzduotis----------------
// for (let i=1; i<=100; i++){
//     if (i%3==0){
//         continue
//     }
//     else{
//         console.log(i)
//     }
// }
//------------------------------------

//----------3 uzduotis----------------
// for (let i=2; i<=12; i++){
//     console.log(i**3)
// }
//------------------------------------

//----------4 uzduotis----------------
// const persons = {
//     jonas: 30,
//     petras: 26,
//     ona: 45,
//     maryte: 36,
//     antanas: 77,
//     "teta zita": 86,
// };
// for (let key in persons){
//     let amzius = persons[key];
//     console.log(`${key}: ${amzius}`)
// }
//------------------------------------

//----------5 uzduotis----------------
// const obijektas = {
//     a: 4,
//     b: 15,
//     c: 59,
//     d: 19,
//     e: 86,
// };
// let kiek = 0
// for (let key in obijektas){
//     kiek++
// }
// console.log(`yra ${kiek} savybes`)
//------------------------------------

//----------6 uzduotis----------------
// let sakinys = prompt("Iveskite sakini:")
// let zodziai = sakinys.split(" ")
// for (let zodis of zodziai){
//     console.log(zodis)
// }
//------------------------------------

//----------7 uzduotis----------------
// let sakinys = prompt("Iveskite sakini:")
// let kiekis = 0
// for (let zodis of sakinys){
//         kiekis++
//     }
// console.log(`sakinio siboliu kiekis=${kiekis},${sakinys.length}`)
//------------------------------------

//----------8 uzduotis----------------
// let i = 20
// do{
//     if (i%2==0){
//         console.log(i)
//         i++
//     }
//     else{
//         i++
//         continue
//     }
// }while(i<=50)
//------------------------------------

//----------9 uzduotis----------------
// do{
//     let sk = parseInt(prompt("Iveskite skaiciu:"))
//     if (sk%2==0){
//         continue
//     }
//     else{
//         alert("ivestas skaicius nelyginis")
//     }
//     break
// }while(true)
//------------------------------------

//----------10 uzduotis----------------
// let sum = 0
// do{
//     let sk = parseInt(prompt("Iveskite skaiciu:"))
//     if (sk==0){
//         console.log(`suma=${sum}`)
//         break
//     }
//     else if (sk%2==0){
//         sum+=sk
//     }
//     else{
//         continue
//     }
// }while(true)
//------------------------------------