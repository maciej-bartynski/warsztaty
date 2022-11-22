/** 
 * Tym razem popracujemy na obiekcie stworzonym przeze mnie, oto on:
 */

const myName = "Maciek";
const surname = "Paciek";
const age = 32;

const Person = {
    name: myName,
    surname,
    alive: true,
}
Person.age = age;
// zwróć uwagę, na ile sposobów pododawałem pola. 
// Teraz zajmiemy się dodawaniem metod. Dodaj do obiektu metodę o nazwie "getAge", która wyprintuje wiek! 
// Gdy już to zrobisz, wywołaj skrypt tak, aby kod z poniższej linijki zadziałał:

// Person.getAge(); // ten kod powinien działać po odkomentowaniu!

// Rozwiązanie poniżej.

Person.getAge = function getAge () { // czy tu moze byc 'function'?
    console.log(this.age);
}

Person.getAge() // printuje wiek
Person.age // odwoluje sie do wieku, ale nic nie wyswietla







// Możesz to zrobić na wiele sposobów. Na przykład, możesz do oryginalnego obiektu powyżej 
// dodać tę metodę w taki sposób:
// const Person = {
//     name: "Maciek",
//     surname: "Surname",
//     alive: true,
//     age: 32,
//     getAge() {
//         console.log(this.age);
//     }
// }
// Person.getAge();

// a możesz też to zrobić w taki sposób, jak wcześniej dodawaliśmy pola:
// Person.getAge = function () { 
//     console.log(age);
// }
// Person.getAge();
