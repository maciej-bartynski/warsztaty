/**
 * Napisz obiekt, który będzie przedstawiać twoje dane personalne z poprzedniego zadania (name, surname, age, alive), 
 * w taki sposób:
 * 1. jeszcze raz zapisz zmienne w tym pliku, wszystkie przy pomocy constów
 * 2. stwórz obiekt przy pomocy skróconego syntaxu, w którym nazwy pól są takie same jak nazwy zmiennych powyżej
 * 3. Po wykonaniu zadania, zobacz też poniżej w jaki inny sposób można dodawać pola do obiektu
 */













/**
 * Rozwiązania:
 */
const name = "Maciek";
const surname = 'Bartyński';
const age = 32;
const alive = true;

const Person = {
    name,
    surname,
    age,
    alive
}
// Mogę też nadpisywać pola w taki sposób:
Person.name = "Marek"; // sprawdź teraz: console.log(Person);
// Mogę też użyć powyższego syntaxu do stworzenia pól obiektu:
const TheSamePerson = {};
TheSamePerson.name = "Maciek";
TheSamePerson.surname = "Bartyński";
TheSamePerson.age = age;
TheSamePerson.alive = alive;
// sprawdź console.log(TheSamePerson);
