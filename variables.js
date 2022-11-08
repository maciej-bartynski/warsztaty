/**
 * Stwórz zmienne trzymające twoje dane personalne: imię, nazwisko, wiek.
 * Zastanów się, czy używasz var, let czy const. Zastanów się czemu.
 * Użyj console.log() aby wywołać te wszystkie zmienne.
 * 
 * Na samym dole strony są rozwiązania (zakomentowane). Możesz je odkomentować by popatrzyć jak to działa.
 * 
 * Dalsza część z gwiazdką:
 * Do swoich zmiennych, dodaj jeszcze jedną; stwórz zmienną o nazwie "alive" równą true, 
 * tak, aby dało się ją edytować. Pod spodem stwórz funkcję strzałkową o nazwie "kill", 
 * która nie przyjmuje żadnych parametrów. Niech ta funkcja w chwili wywołania, zmieni "alive" na false.
 * Wywołaj skrypt, sprawdź czy działa.
 * Gdy zadziała, zmień let na const i wywołaj jeszcze raz. Zobacz co się stanie.
 */















/** Rozwiązania:

const myName = 'Maciek';
const mySurname = 'Bartyński';
const myAge = 32;
console.log(myName);
console.log(mySurname);
console.log(myAge);
// można też tak (nazywamy to konkatenacją stringów. Jeśli dodamy number do stringa, efektem będzie string):
console.log("My name is "+myName+", and I'm " + myAge +".");
// można też użyć "specjalnego syntaxu" do wtykania zmiennych do stringa:
console.log(`My name is ${myName} and I'm ${myAge}`);

*/


/**
 * A to ta część z gwiazdką. Zanim odpalisz skrypt, jak myślisz, jakie będą
 * wartości poszczególnych console.logów?

let alive = true;
console.log("Below declaration", alive);

const kill = () => {
    console.log("Inside function body", alive)
    alive = false;
}
kill();
console.log("After function call", alive)

*/

