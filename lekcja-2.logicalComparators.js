/**
 * Logical comparators
 * Przeczytaj tę stronę po kolei. 
 */

// Poznamy teraz komparatory logiczne. 
// Komparator to funkcja, która przyjmuje dwie wartości i zwraca boolean.

const areEqual = 1 === 2; // funkcją jest w tym przykładzie znak "potrójnego równa się", 
// a jej argumentami są tu liczby 1 oraz 2. Boolean jest zwrócony do zmiennej którą nazwałem sobie "areEqual"
// i w tym przypadku będzie on równy "false"

// Mamy takie komparatory:
const equal = 1 === 2;
console.log(equal) // false;

const notEqual = 1 !== 2;
console.log(notEqual) // true;

const lesserThan = 1 < 2;
console.log(lesserThan) // true;

const greaterThan = 1 > 2;
console.log(greaterThan) // false;

const lesserOrEqual = 1 <= 2;
console.log(lesserOrEqual) // true;

const greaterOrEqual = 2 >= 2;
console.log(greaterOrEqual) // true;

// UWAGA: istnieją jeszcze dwa komparatory
// specjalna równość ==
// specjalna nierówność !=
// Na razie nie będziemy się nimi zajmować! 

// Wracając do naszych komparatorów (tych o: ===, !==, <, >, <=, >=)
// to możemy porównywać nimi wszystkie wartości prymitywne ORAZ nieprymitywne.
// Krótko mówiąc, możemy porównywać nimi dosłownie WSZYSTKO:

const primitiveNumber = 1;
const primitiveBool = true;
const primitieString = "";
const primitiveNull = null;
const primitiveUndef = undefined;
const specjalValueNaN = NaN;
const nonPrimitiveObject = {};
const nonPrimitiveOtherObject = {};
const nonPrimitiveArray = [];
const nonPrimitiveReassignedArray = nonPrimitiveArray;
const nonPrimitiveFunction = () => { };
const nonPrimitiveOtherFunction = function () { };

// Poniżej przedstawiam ci kilka porównań wartości PRYMITYWNYCH. 
// Odkomentuj tylko poniższe 5 konsole.logów. Potem uruchom ten skrypt komendą (np. node ./lekcja-2.logicalComparators.js)
// i zobacz co się stanie na konsoli. Na razie nie odkomentowuj pozostałych sekcji.

// console.log(`is number ${primitiveNumber} equal to itself?`, primitiveNumber === primitiveNumber);
// console.log(`is number ${primitiveNumber} equal to boolen ${primitiveBool}?`, primitiveNumber === primitiveBool);
// console.log(`is boolean ${primitieString} equal to null ${primitiveNull}?`, primitieString === primitiveNull);
// console.log(`is null ${primitiveNull} equal to itself ${primitiveNull}?`, primitiveNull === primitiveNull);
// console.log(`is undefined ${primitiveUndef} equal to itself ${primitiveUndef}?`, primitiveNull === primitiveNull);

// Na razie wynik pewnie cię nie zaskoczył, prawda? Teraz możesz zakomentować wszystkie powyższe console.logi, żeby 
// nie przeszkadzały nam w dalszym biegu lekcji. Przedstawię ci teraz coś odrobię ciekawszego. Wprowadźmy sobie taki obiekt:
const anotherNonPrimitiveObject = {
    primitiveFieldBoolean: true,
    nonPrimitiveFieldObject: {
        primitiveFieldNumber: 1,
    }
}

// Odkomentuj teraz poniższe dwa console.logi i zobacz, jak wygląda porównanie prymitywnych zmiennych
// z prymitywnymi polami obiektu:
// console.log(
//     "Comparing variable boolean with object field", primitiveBool === anotherNonPrimitiveObject.primitiveFieldBoolean
// )

// console.log(
//     "comparing variable number with field of nested object",
//     primitiveNumber === anotherNonPrimitiveObject.nonPrimitiveFieldObject.primitiveFieldNumber
// )

// Powyżej również nie ma szoku, prawda? Nieważne, 
// czy zmienne prymitywne zdefiniujesz jako 
// var, let, const, pole obiektu czy index tablicy,
// komparator "dobierze się" do ich wartości żeby je porównać.
// To teraz zakompentuj powyższe dwa console.logi i zobaczymy coś extra.
// Gotowa?
// Odkomentuj poniższe porównanie:

// const mySpecialNan = NaN;
// console.log(`is NaN equal to itself?`, mySpecialNan === mySpecialNan);

// whoa, co tu się zadziało? Jak to możliwe? Sprawdźmy, może NaN zachowuje się jak pojebany,
// bo nie jest wartością prymitywną? Sprawdźmy, czy NaN jest wartością prymitywna. Jak to zrobić?
// W tym celu wprowadźmy sobie kolejną dziwną js-ową funkcję 
// o nietypowym syntaxie "typeof", która:
// - przyjmuje jeden argument
// - zwraca stringa,
// - ten zwrócony string informuje nas jakiego typu był argument.
// Zanim przetestujemy naszego NaN, zobaczmy jak działa funkcja "typeof".
// Odkomentuj poniższe 3 linijki i sprawdź, co pokaże console.log na konsoli:

// const myValue = "Hello, I'm Maciek";
// const typeofMyValue = typeof myValue;
// console.log("my value is: ", typeofMyValue);

// Widzisz? Operator "typeof" zwrócił nam typ zmiennej myValue. 
// Zapisaliśmy ten typ do kolejnej zmiennej: "typeofMyValue", i wyświetliliśmy na konsoli.
// Zatrzymaj się na chwilę w tym miejscu i podmień "myValue" na różne inne prymitywne ORAZ nieprymitywne
// wartości. Wstaw tam sobie np. booleana, cyfrę, nulla, jakiś obiekt może, albo funkcję strzałkową lub nie...
// i za każdym razem odpal skrypt żeby zobaczyć, co się pokaże na kosoli. Potem czytaj dalej.

// Jaja, nie? Jeśli dobrze popatrzyłaś, to zobaczyłać coś dziwnego dla wartości "null".
// Na razie się tym nie przejmuj! Uwierz mi na słowo, że null jest prymitywny, choć jego typ 
// pokazuje śmieszki. Ale wróćmy do naszego NaNa. Proszę, podstaw ostatni raz wartość NaN
// to myValue i zobacz, co zostanie wykonsolowane. Potem czytaj dalej.

// Teraz, kiedy znasz już wartość NaN, możesz zakomentować powyższe trzy linijki kodu.
// Nauczyłaś się, że są dwa dziwne miejsca w Javascript: 
// - wartość typeof dla nulla jest dziwny, i nie należy się tym przejmować
// - wartość typeof dla NaN jest dziwna, bo każda liczba równa się samej sobie, ale NaN nie równa się samemu sobie.
// To nie ma sensu i musimy z tym żyć! 
// Daj sobie chwilę czasu aby się z tym pogodzić. Potem możesz czytać dalej.

// Zanim przeczytasz dalej, upewnij się, że masz zakomentowane wszystkie powyższe konsole.logi.
// Nie chcemy, żeby nam przeszkadzały, a przed nami jeszcze dużo konsolowania.

// Teraz ma dla ciebie prawdziwy sztos. Zrobimy sobie porównania wartości nie-prymitywnych.
// Zdefiniujmy je sobie:
const myObject = {};
const otherObject = {};
const myArray = [];
const reassignedArray = myArray;
const arrowFunction = () => { };
const classicFunction = function () { };
const otherClassicFunction = function () { };
const reassignedClassicFunction = classicFunction;
const reassignedArrayFunction = arrowFunction;

// Odkomentuj na razie poniższe dwa konsole.logi i zobacz, co się stanie.

/**
* const isObjectEqualToObject = myObject === otherObject;
* console.log("isObjectEqualToObject: ", isObjectEqualToObject);
*
* const isObjectEqualToItself = myObject === myObject;
* console.log("isObjectEqualToItself: ", isObjectEqualToItself);
*/

// dziwne, co? obiekt jest równy samemu sobie, ale nie jest równy innemu takiemu samemu obiektowi.
// Na razie możesz się temu dziwić, ale nie musisz próbować tego zapamiętać. Patrz, co będzie dalej!
// Sprawdzimy teraz, co się stanie jak porównany dwa osobne obiekty, z których jeden został utworzony
// jako "array literal", a drugi został utworzony przez przypisanie poprzedniego. Odkomentuj:

/**
 * const isObjectEqualToReassignedObject = myArray === reassignedArray;
 * console.log("isObjectEqualToReassignedObject", isObjectEqualToReassignedObject);
 */

// Dobre, nie? Po pierwsze, możesz się zdziwić dlaczego piszę "obiekt" a używam tablicy (array'a);
// To dlatego, że arraye tak naprawdę są obiektami. Gdybym w tym przykładzie użył klasycznego obiektu {},
// i jego "reassigne'owanego" klona, wynik byłby taki sam. No właśnie... taki sam, czyli jaki? Spójrzmy na to
// jeszcze raz (zakomentuj poprzedni konsole.log i odkomentuj następny, a potem przeczytaj uważnie to co
// wyskoczy na kosolę):
const objectLiteralFirst = {};
const objectReassigned = objectLiteralFirst;
const objectLiteralSecond = {};

// console.log(`
//     Equality of two same objects: ${objectLiteralFirst === objectLiteralSecond},
//     Equality of object to itself: ${objectLiteralFirst === objectLiteralFirst},
//     Equality of object and its clone: ${objectLiteralFirst === objectReassigned}.
// `)
// Skoro obiekt jest równy samemu sobie, a nie jest równy innemu obiektowi...
// ale po porównaniu obiektu do jego klona wychodzi nam równość...
// to wynika z tego, że obiekt i jego klon to TEN SAM OBIEKT! WOW!
// Nie bardzo rozumiesz, co mam na myśli? Spójrz niżej (odkomentuj):

/** 
const thisIsPrimaryObject = {
    value: 1
}
const thisIsClone = thisIsPrimaryObject
thisIsClone.value = "Hello";
console.log(thisIsPrimaryObject)
*/

// Whoaaaaaaaaaaaaaaaa... To się zachowuje inaczej, niż wartości prymitywne!
// Pamiętasz? Gdy re-assignowałaś wartość prymitywną do nowej wartości, mogłaś odtąd obie wartości
// edytować niezależnie. Przypomnijmy (odkomentuj):

/**
let myName = "Maciek";
let value = myName;
value = 1;
console.log(value) // output: 1;
console.log(myName) // output: Maciek;
*/

// Nauczyłaś się właśnie, że wartości NIE-PRYMITYWNE zachowują się inaczej niż prymitywne, gdyż:
// - gdy tworzymy zmienną nie-prymitywną, nasz komputer uznaje tę zmienną za tzw. WSKAŹNIK.
// - gdy re-assignujemy tę zmienną (nie-prymitywną) do innej zmiennej, nasz komputer klonuje do nowej zmiennej TEN SAM WKAŹNIK
// - w ten sposób możemy mieć np. sto zmiennych, z których każda WSKAZUJE (bo jest wskaźnikiem) na TEN SAM OBIEKT.

// albo ten sam array

// albo...

// tę samą funkcję!

// Whoa, nieźle, nie? Sprawdźmy (odkomentuj):

/**
const myFunction = () => { };
const functionClone = myFunction;
console.log("myFunction === functionClone", myFunction === functionClone);
*/

// To teraz sprawdźmy tak:
/**
const testObject = {
    myFunction
}
console.log("testObject.myFunction === myFunction", testObject.myFunction === myFunction);
console.log("testObject.myFunction === functionClone", testObject.myFunction === functionClone);
*/

// Widzisz? Powyżej nasza funkcja "JEST WSKAZYWANA" aż przez trzy wskaźniki: functionClone, myFunction, testObject.myFunction
// Tylko raz użyliśmy syntaksu "funciton literal", a potem "rozpropagowaliśmy" tę funkcję do aż 3 zmiennych (dwa consty i jedno pole obiektu). 
// Takie działanie ma swoje konsekwencje. Poniżej przedstawię ci coś, co naprawdę rozwali ci umysł.
// Zanim jednak do tego przejdziemy, zakomentuj wszystkie console.logi powyżej, żeby nam nie wchodziły w paradę.
// Zakomentowane? To czytaj dalej.

// Poniżej przedstawię ci coś bardzo ciekawego. Spójrz, deklaruję sobie obiekt przedstawiajacy mnie w przyszłości.
// Nie mam dzieci (nie planuję). Oto ja:
const Person = {
    name: 'Maciek',
    age: 40,
    children: [],
}
// Załóżmy teraz, że gdzieś na świecie jest taki maluch:
let Child = {
    name: "Adflkasdf",
    age: 3,
}
// I załóżmy, że rząd zmusił mnie do adoptowania tego malca:
Person.children.push(Child);
// Jeśli nie znasz metody "push", nie przejmuj się. Pokrótce ci wyjaśnię, co ona robi:
// jak zapewne widzisz, pole "children" to jest tablica, a każda tablica w js ma metodę
// "push", która służy do dodawania dowolnego obiektu na koniec tej tablicy. Innymi słowy, 
// dodałem sobie do mojej tablicy dziecko... 
// Sprawdźmy, czy zadziałało (odkomentuj):

/** console.log("Maciek po edycji: ", Person) */

// Widzisz, w tablicy dzieci mam obiekt Child (jeśli twoja konsola nie pokazuje wnętrza tablicy, spróbuj
// zrobić może console.log(Person.children), zamiast console.log(Person)).
// A teraz przypuścmy, że ten dziwny adoptowany malec postanowił zrobić sobie krzywdę:
Child.injured = true;
// Sprawdźmy, czy się udało (odkomentuj):
// console.log("Child", Child.injured);

// Ale ale... przecież nie tylko zmienna "Child" nam wskazuje na tego malca, bo teraz 
// wskaźnik siedzi także w mojej tablicy dzieci! Znajdźmy ten wskaźnik (odkomentuj)!
// console.log("Child again, but in my array this time: ", Person.children);

// widzisz? Chociaż nie edytowałem obiektu Person, dziecko siedzące w tablicy jest wyedytowane...
// To teraz sprawdźmy, czy w drugą stronę działa (odkomentuj):
Person.children[0].computerBannedForWeekBecauseChildPlayedWithKnife = true;
// console.log("Original Child after array edition:", Child);

// Widzisz? Wychodzi na to, że nasz "Child" oraz nasz "Person.children[0]" to dwa wskaźniki
// na ten sam obiekt w pamięci komputera. Przedstawiam ci teraz ostateczny dowód, któego
// już się domyślasz (odkomentuj):
// console.log('is object "Child" and item in array "Person.children[0]" the same beeing?', Child === Person.children[0]);

// Whoa, dużo wiedzy jak na jedną lekcę, co nie? Ale teraz przedstawię ci jeszcze jedną ciekawostkę, którą
// być może już zauważyłaś. Spójrz jeszcze raz na nasz obiekt "Person" i zastanów się przez chwilę:
// ile "literali" jest tam użytych?

// myślisz?

// już wiesz?

// Uwaga, podaję odpowiedź: DWA. Sam obiekt Person to jest pierwszy object literal, natomiast jego pole children
// to array literal. To teraz zastanów się... ile wskaźników utworzyliśmy w całym tym ćwiczeniu z Person i Child?

// myślisz?

// już wiesz?

// odpowiadam:

// TRZY WSKAŹNIKI: pierwszy wskaźnik to sam obiekt Person, drugi wskaźnik to obiekt Child, a trzeci wskaźnik to
// pole Pole.children, które też jest przecież zagnieżdżonym obiektem! Dobre, nie? Popatrz na to:

/**
const pointerToPerson = Person;
const pointerToPersonChildren = Person.children;
const pointerToChild = pointerToPerson.children[0];
console.log(Child === pointerToChild);
console.log(pointerToPerson === Person);
console.log(pointerToPersonChildren === Person.children);
*/

// Popatrz sobie, pomedytuj nad powyższym, a przekonasz się, że powoli staje się to jasne: Nieważne ile razy
// przypiszemy jakiś objekt z jednej zmiennej do drugiej, to ciągle będzie ten sam obiekt.
// Nieważne, czy przypiszemy go do pola innego obiektu, czy do zmiennej, czy zagnieździmy w tablicy, to ciągle
// będzie ten sam obiekt. Spójrz niżej, jak przypisuję wskaźnik na tę samą tablicę Person.children 
// do stu milionów różnych miejsc:

const myWeirdArray = Person.children;
const myFancyArray = myWeirdArray;
const myThirdArray = myFancyArray;
const WrapperToHideArray = {
    hidenArray: myThirdArray,
}
const DojebanyKurwaWrapperZebyNiktNieZnalazlJuzTamtejTablicy = {
    pole1: {
        pole2: {
            jakasTablica: [
                "a", "b", WrapperToHideArray
            ]
        }
    }
}

// i tera pa na to:
// 1. odkopuję tę ukrytą tablicę:
DojebanyKurwaWrapperZebyNiktNieZnalazlJuzTamtejTablicy.pole1.pole2.jakasTablica[2].hidenArray;
// 2. ...i edytuję ukrytego w niej malca!
DojebanyKurwaWrapperZebyNiktNieZnalazlJuzTamtejTablicy.pole1.pole2.jakasTablica[2].hidenArray[0].isChildHappy = true;
// 3. ...i teraz sprawdzam nasz pierwotny, oryginalny obiekt Child (odkomentuj)!
// console.log("Is Child happy? ", Child);

// A teraz weźmy usuńmy tablicę children w oryginalnego obiektu Person, a także z naszego 
// potężnego obiektu DojebanyKurwaWrapperZebyNiktNieZnalazlJuzTamtejTablicy i zobaczmy co się stanie:

/**
DojebanyKurwaWrapperZebyNiktNieZnalazlJuzTamtejTablicy.pole1.pole2.jakasTablica[2].hidenArray = null;
Person.children = null;
console.log(Person)
console.log(DojebanyKurwaWrapperZebyNiktNieZnalazlJuzTamtejTablicy);
*/

// ale tablica dalej istnieje w pamięci, bo dalej mamy wskaźniki na nią wskazujące:

/**
console.log("myWeirdArray", myWeirdArray);
console.log("myFancyArray", myFancyArray);
console.log("myThirdArray", myThirdArray);
console.log("WrapperToHideArray", WrapperToHideArray);
*/

// I jeśli nie dość ci gimnastyki umysłu, to sprawdźmy co się stanie jak usunę pierwotny
// obiekt Child. Pamiętasz, że definiowałem go przy pomocy "let"? Dzięki temu zmienną Child
// mogę dowolnie edytować. Zróbmy coś takiego:
Child = null
// I co nam to dało?
// Otóż samo Child już nie wskazuje na obiekt, ale pozostałe wskaźniki wciąż wskazują na obiekt! Odkomentuj!:

/**
console.log("Child is null now: ", Child);
console.log("but other pointers still point to object in memory: ", myWeirdArray[0])
*/

// Podsumowując, tak to już jest ze zmiennymi NIE-prymitywnymi. Wszystkie one są tylko wskaźnikiem
// (pointerem, referencją) odsyłającym do obiektu utworzonego w pamięci. To się tyczy obiektów, tablic i funkcji...
// wszystkie one są wskaźnikami.

// Dużo wiedzy, co? Na tym etapie chcę, abyś to "W MIARĘ" zrozumiała:
// - zmienne prymitywne są proste, można je łatwo porównać 
// - zmienne nie-prymitywne są nieco popierdolone, więc gdy je porównujemy co dzieją się rzeczy popierdolone.
// Nie próbuj tego zapamiętać. Na tym etapie zrozum i zapomnij. Będziemy do tego wracać!

// Teraz zakomentuj wszystkie powyższe console.logi. Zanim przejdziemy do ostatniego ćwiczenia, 
// chcę abyś się trochę pobawiła. Taka bezmózga, bezrefleksyjna zabawa: Niżej zapisz kilka
// dziwnych porównań zmiennych prymitywnych i nie-prymitywnych, ale nie używaj już TYLKO
// komparatora równości === (dość go przećwiczyliśmy), ale też te pozostałe. Pobaw się, zobacz co z tego
// wyniknie. Poniżej podaję ci kilka propozycji, ale śmiało podstaw tam jakieś pojebane rzeczy. 
// oto lista komparatorów, jeśli zapomniałaś: ===, !==, >=, <=, >, <

// propozycje grzeczne. Jak myślisz, co będzie gdy wykonsolujesz poszczególne wartości?:
const isNumberGreaterThanBoolean = 4 > true;
const isNumberEqualToBoolean = 1 === true;
const isNullGreaterThanNull = null > null;
const isStringGreaterThanOtherString = "aaa" > "a"
const isStringLesserThanString = "a" < "b";

// propozycje niegrzeczne (te może warto sobie wykonsolować zanim je skasujesz, bo dzieją się tu rzeczy ciekawe).
// Jak myślisz, dlaczego każdy z poniższych przykładów zwraca takiego a nie innego booleana?
function justGiveMeBackMyArgument(anyArgument) {
    return anyArgument
}
const myFunctionClone = justGiveMeBackMyArgument;

const isFunctionEqualToItsCall = myFunctionClone === justGiveMeBackMyArgument();
const isCallEqualToCall = myFunctionClone("hello") === justGiveMeBackMyArgument("hello");
const isCallEqualToCallForObjectLiteralArg = myFunctionClone({}) === justGiveMeBackMyArgument({});
const pointerToSameObject = {}
const isCallEqualToCallForObjectPointerArg = myFunctionClone(pointerToSameObject) === justGiveMeBackMyArgument(pointerToSameObject);

// Dobrze, dobrze, dosyć tego!
// Teraz zapominamy już o wartościach nie-prymitywnych i przechodzimy do ćwiczenia 
// na wartości prymitywne. Zaraz dostaniesz zdanie w języku ludzi, które przetłumaczysz na
// język komputerów.
// Zanim to zrobisz, pokażę ci przykład. Oto on:

// Proszę, oto zdanie w języku ludzi, które przełożymy na język komputerów:
// "Jaś ma zielone oczy, Małgosia - niebieskie. Jeśli ich dziecko będzie córką, to jeśli będzie miało oczy matki, to
// będzie się nazywać Krysia, a jeśli oczy ojca, to Janina. A jeśli będzie chłopcem, to będzie się nazywać Zbigniew."
// A oto program w języku komputerów, który nadaje dziecku imię:
const availableEyesColor = {
    mother: 'blue',
    father: 'green'
}
const availableGenders = ['male', 'female', 'military tank t-49'];


const whatName = (childEyes, childGender) => {

    if (childGender === availableGenders[0]) { // Jest chłopcem!
        return 'Zbigniew'
    } else if (childGender === availableGenders[1]) { // Jest dziewczynką!
        if (childEyes === availableEyesColor.mother) { // Jest dziewczynką z oczami po matce
            return 'Krysia'
        }
        // Jest dziewczynką, ale nie ma oczu po matce. Więc... MUSI mieć oczy ojca.
        return 'Janina'
    }

    // Jeśli tu dotrze, to nie jest ani chłopcem, ani dziewczynką:
    return "error!!!!!!"
}

// odkomentuj poniższe console.logi i zobacz jak ten program działa:
// console.log(`Boy with mother's eyes: ${whatName(availableEyesColor.mother, availableGenders[0])}.`)
// console.log(`Girl with mother's eyes: ${whatName(availableEyesColor.mother, availableGenders[1])}.`)
// console.log(`Girl with father's eyes: ${whatName(availableEyesColor.father, availableGenders[1])}.`)
// console.log(`Military tank t-49 with mother's eyes: ${whatName(availableEyesColor.mother, availableGenders[2])}.`);

// Teraz już widzisz jak działa pisanie programu na podstawie zdania w języku ludzi. 
// Zanim przejdziesz dalej, zrób jeszcze eksperyment. W funkcji "whatName"
// zamień tę linijkę:
// } else if (childGender === availableGenders[1]) {
// na taką:
// } else {
// innymi słowy, zamień statement "if-elseif" na statement if-else.
// i zobacz co się stanie.
// JEśli zrobiłaś to poprawnie, teraz funkcja nigdy nie dojdzie do miejsca
// w którym wyrzuca errora, nawet jeśli płeć będzie tank t-49. Jak myslisz, czemu?

// Dobrze, dość tych rozważań! pora teraz samemu coś zakodzić. Zapraszam.
// Zakomentuj wszystkie powyższe conssole.logi i czytaj dalej.


// Oto twoje zdanie:

// napisz własny program do poniższego zdania:
// "Jan nazywa się Kowalski, a Małgosia nazywa się Nowak. Jeśli urodzi im się syn, o oczach ojca,
// to będzie nazywać się Kowalski, a jeśli o oczach matki, to będzie nazywać się Nowak. Jeśli urodzi
// im się córka, o oczach matki, bo będzie nazywaś się Nowak, ale jeśli o oczach ojca, to będzie nazywać się Nowak-Kowalski." 

// Twoim zadaniem jest tak uzupełnić ciało funkcji "resolveSurname", żeby console.logi 
// na samym dole (odkomentuj je od razu) pokazywały poprawne wartości TRUE.
// Nie edytu samych console.logów ani obiektów mother, father ani templatek obiektu dziecko. Po prostu uzupełnij funkcję
// resoleSurname, tak aby ona zwracała poprawne nazwisko (string), i w efekcie żeby porównania na samym dole 
// w konsole logach działały jak trzeba.

const mother = {
    surname: 'Nowak',
    eyes: 'blue'
}

const father = {
    surname: 'Kowalski',
    eyes: 'green'
}

const possibleGenders = ['male', 'female'];

function resolveSurname(child) {
    if (child.eyes === mother.eyes) { // jesli ma oczy matki, to co?

    } else { // a jeśli ma oczy inne niż matki, to co?

    }

    // dotąd funkcja nie dotrze: wpadnie albo w if, albo w else!
 }

const boyWithMothersEyes = {
    gender: 'male',
    eyes: mother.eyes,
}
const boyWithFathersEyes = {
    gender: 'male',
    eyes: father.eyes,
}
const girlWithFathersEyes = {
    gender: 'female',
    eyes: father.eyes,
}
const girlWithMothersEyes = {
    gender: 'female',
    eyes: mother.eyes,
}

// console.log(`Surname for boy with mothers eyes is Nowak. ${resolveSurname(boyWithMothersEyes) === 'Nowak'}`)
// console.log(`Surname for boy with fathers eyes is Kowalski. ${resolveSurname(boyWithFathersEyes) === 'Kowalski'}`)
// console.log(`Surname for girl with mothers eyes is Nowak. ${resolveSurname(girlWithMothersEyes) === 'Nowak'}`)
// console.log(`Surname for girl with fathers eyes is Nowak-Kowalski. ${resolveSurname(girlWithFathersEyes) === 'Nowak-Kowalski'}`)