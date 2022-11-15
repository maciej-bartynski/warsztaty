/** 
 * Tym razem znowu pracujemy na moim obiekcie:
 */

const Person = {
    name: 'Maciek', 
    age: 34,
    alive: true,
    increaseAge() {
        console.log("Initial age", this.age);
        this.age = this.age + 1;
        console.log("increased age", this.age);
        this.death();
    },
    death() {
        this.alive = false;
    }
}

if (Person.age > 35) {
    Person.death();
}
// Person.increaseAge();

console.log("Is Person alive?", Person.alive);

// Czy wiesz, że wewnątrz metod można wywoływać inne metody?
// const SomeObject = {
//     someField: 'foo',
//     someMethod() { 
//         this.otherMethod(); 
//         console.log(this.someField);
//     },
//     otherMethod() {
//         this.someField = 'yay!'
//     }
// }
// SomeObject.someMethod();

// Teraz weź obiekt Person, i dodaj do niego metodę death() w następujących krokach
// 1. metoda death powinna zmieniać pole alive z true na false;
// 2. metoda death powinna robić tę zmianę tylko, jeśli wiek przekroczy 35lat;
// 3. metoda death powinna odpalić się za każdym razem, gdy wywołana jest increaseAge()
// poniżej podpowiedź, jak sprawdzać, czy liczba jest większa niż inna liczba.:
// const someNumber = 12;
// const bark = () => { 
//     console.log("bark, bark!") 
// }
// if (someNumber > 15) {
//     bark();
// }

















// a poniżej jedno z możliwych rozwiązań;
// const deadAge = 35;

// const SomePerson = {
//     name: 'Maciek', 
//     age: 32,
//     alive: true,
//     increaseAge() {
//         this.age = this.age + 1;
//         this.death()
//     },

//     death() {
//         if (this.age > deadAge) {
//             this.alive = false;
//         }
//     }
// }

// SomePerson.increaseAge();
// console.log("Is he alive? ", SomePerson.alive);
// SomePerson.increaseAge();
// console.log("Is he alive? ", SomePerson.alive);
// SomePerson.increaseAge();
// console.log("Is he alive? ", SomePerson.alive);
// SomePerson.increaseAge();
// console.log("Is he alive? ", SomePerson.alive);
