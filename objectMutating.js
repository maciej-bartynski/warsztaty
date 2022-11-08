/** 
 * Znowu popracujemy na obiekcie stworzonym przeze mnie, oto on:
 */

const myName = "Maciek";
const surname = "Paciek";
const age = 32;

const Person = {
    name: myName,
    surname,
    alive: true,
    age: 32,
    getAge() {
        console.log(this.age);
    }
}

// Zrefaktoruj go tak, aby każde wywołanie "getAge", podbiło wiek o jeden rok.
// Pod spodem przedstawiam podpowiedź, którą możesz odkomentować i wywołać. Po wywołaniu, wróć do tego komentarza
// i przeczytaj uważnie poniższe dwa myślniki: 
// - ten przykład używa "let" dla someNumber, czemu?
// - w docelowym rozwiązaniu będziesz używać "this.age", ale czy this.age zadziała jak let, czy jak const?
// Bardzo dobrze, jeśli zrozumiałaś poniższy przykład, spróbuj teraz zmodyfikować getAge w obiekcie powyżej.
// W razie czego, rozwiązanie jest na samym dole strony.

// let someNumber = 0;
// console.log("After declaration", someNumber)
// const increaseNumberByOne = () => {
//     console.log("Function body", someNumber)
//     someNumber = someNumber + 1;
// }
// increaseNumberByOne()
// console.log("After function call", someNumber)
// console.log(someNumber);







/** ROZWIĄZANIE I SEKCJA Z GWIAZDKĄ */

// const Person = {
//     name: myName,
//     surname,
//     alive: true,
//     age: 32,
//     getAge() {
//         this.age = this.age + 1;
//         console.log(this.age);
//     }
// }

/** SEKCJA Z GWIAZDKĄ */
// chcę zwrócić twoją uwagę na jeszcze jedną rzecz (poniżej przykład z gwiazdką). Jeśli zdefiniujemy obiekt w taki sposób
// jak poniżej, to jak myślisz, czy zmiany oryginalnej zmiennej "someNumber" będą wpływać na 
// pole "someNumber"? Odkomentuj i sprawdź:
// let someNumber = 0;
// const SomeData = {
//     someNumber,
//     increase() {
//         this.someNumber = this.someNumber + 1;
//     }
// }
// SomeData.increase();
// someNumber = someNumber + 1;
// SomeData.increase();
// SomeData.increase();
// console.log("SomeData.someNumber: ", someNumber)
// console.log("let someNumber: ", someNumber)
