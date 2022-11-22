/**
 * Poniżej napisałem funkcję strzałkową zwracającą obiekt. 
 * Czy umiesz przerobić mój kod tak, aby:
 * - metoda increaseAge podbijała wiek
 * - metoda death uśmiercała osobę po osiągnięciu wieku 33 lat,
 * - zanim zaczniesz kodować, spojrz poniżej na następny komentarz z dalszymi wymogami
 */

const personFactory = (name, age) => {
    const Person = {
        name,
        age,
        alive: true,
        increaseAge() {
            this.age = this.age + 1;
            this.death();
        },
        death() {
            if (this.age > 32) {
            this.alive = false;
            }
        }
    }

    return Person;
}

/**
 * oto dalsze wymogi:
 * - chcę, aby poniższe trzy wywołania zwróciły mi olaPerson, korkaPerson, maciekPerson z odpowiednimi imionami i wiekiem, jak podano!
 * - chcę, abyś poniżej dopisała dalsze linie, które wszystkim osobom podbiją wiek aż do śmierci :)
 */
const olaPerson = personFactory("ola", 18);
const korkaPerson = personFactory("korka", 18);
const maciekPerson = personFactory("maciek", 32);

olaPerson.increaseAge(); // jeden raz nie wystarczy!
console.log(olaPerson, korkaPerson, maciekPerson);

// Jak się za to zabrać?
// najpierw pójdź do metody personFactor i dodaj do niej parametry, np. tak (ale nazwij je odpowiednio): 
// const someMethod = (paramA, paramB) => {...};
// z resztą sobie poradzisz! :D 
