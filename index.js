/**
 * 1. Napisz zmienne trzymające twoje dane personlane: imię, nazwisko, wiek.
 * 2. Napisz obiekt, który będzie przedstawiać te dane
 * 3. Umieść w obiekcie metodę "age", która przy pomocy console.log printuje twój wiek, odwołując się do "this.age"
 * 4. Zrefaktoruj metodę "age" -> niech każde jej wywołanie podbije wiek o jeden rok
 * 5. Stwórz metodę "die", która zmienia pole twojego obiektu alive na false; niech będzie wywołana, jeśli wiek przekroczy 25 lat
 * 6. Stwórz funkcję strzałkową, która zwraca obiekt Person
 * 7. Dodaj parametry, które pozwolą ci zwrócić dowolną osobę z funkcji
 * 
 */

const myPerson = {
    name: 'Maciek',
    die() {
        this.die = null;
    }
}

myPerson.die();
console.log(myPerson)