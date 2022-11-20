/**
 * Napisz obiekt, który będzie przedstawiać twoje dane personalne z poprzedniego zadania (name, surname, age, alive),
 * w taki sposób:
 * 1. jeszcze raz zapisz zmienne w tym pliku, wszystkie przy pomocy constów
 * 2. stwórz obiekt przy pomocy skróconego syntaxu, w którym nazwy pól są takie same jak nazwy zmiennych powyżej
 * 3. Po wykonaniu zadania, zobacz też poniżej w jaki inny sposób można dodawać pola do obiektu
 */

//Oli rozwiązania
const name = "Ola";
const surname = "Bratkowska";
const age = 29;
const alive = true;

const myPersonalData = {
  name: name,
  surname: surname,
  age: age,
  alive: alive,
};

/**
 * Rozwiązania:
 */
// const name = "Maciek";
// const surname = "Bartyński";
// const age = 32;
// const alive = true;

// const Person = {
//   name,
//   surname,
//   age,
//   alive,
// };
// Mogę też nadpisywać pola w taki sposób:
myPersonalData.name = "Marek"; // sprawdź teraz:
console.log(myPersonalData);
// Mogę też użyć powyższego syntaxu do stworzenia pól obiektu:
const TheSamePerson = {};
TheSamePerson.name = "Maciek";
TheSamePerson.surname = "Bartyński";
TheSamePerson.age = age;
TheSamePerson.alive = alive;
console.log(TheSamePerson);
