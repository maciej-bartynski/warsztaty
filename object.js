/**
 * Napisz obiekt, który będzie przedstawiać twoje dane personalne z poprzedniego zadania (name, surname, age, alive), 
 * w taki sposób:
 * 1. jeszcze raz zapisz zmienne w tym pliku, wszystkie przy pomocy constów
 * 2. stwórz obiekt przy pomocy skróconego syntaxu, w którym nazwy pól są takie same jak nazwy zmiennych powyżej
 * 3. Po wykonaniu zadania, zobacz też poniżej w jaki inny sposób można dodawać pola do obiektu
 */


const name = "Karolina";
const surname = "Dyrda";
const age = 30;
const alive = true;

const KarolinaPersonalData = {
    name,
    surname,
    age,
    alive,
}

console.log("Karolina przed slubem", KarolinaPersonalData)

KarolinaPersonalData.surname = "Dyrda-Depp"; // dlaczego ta zmienna została nadpisana, skoro zadeklarowałam ją przez const?
console.log("Karolina po slubie", KarolinaPersonalData);

const MySecondVersion = {};
MySecondVersion.name = KarolinaPersonalData.name;
MySecondVersion.surname = KarolinaPersonalData.surname;
MySecondVersion.age = KarolinaPersonalData.age;
MySecondVersion.alive = false;
console.log("My 2nd version", MySecondVersion);










/**
 * Rozwiązania:
 */
// const name = "Maciek";
// const surname = 'Bartyński';
// const age = 32;
// const alive = true;

// const Person = {
//     name,
//     surname,
//     age,
//     alive
// }
// // Mogę też nadpisywać pola w taki sposób:
// Person.name = "Marek"; // sprawdź teraz: console.log(Person);
// // Mogę też użyć powyższego syntaxu do stworzenia pól obiektu:
// const TheSamePerson = {};
// TheSamePerson.name = "Maciek";
// TheSamePerson.surname = "Bartyński";
// TheSamePerson.age = age;
// TheSamePerson.alive = alive;
// // sprawdź console.log(TheSamePerson);
