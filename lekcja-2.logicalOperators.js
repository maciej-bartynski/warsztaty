'use strict'
/**
 * Logical operators
 * Przeczytaj tę stronę po kolei.
 */

/**
Operatory logiczne to kolejna grupa funkcji, ktora ma dziwny syntax.
Mamy dwa operatory logiczne: 
&& (ktory czytamy jako "AND"), oraz 
|| (ktory czytamy jako "OR").
Kazdy operator logiczny to funkcja ktora:
- przyjmuje dwa argumenty 
- zwraca jeden z tych argumentow
- zwrocony argument to ten, ktory przeszedl test.  
*/

/**
 * Ponizej przedstawiam ci jak dziala funkcja "AND" (albo, jak wolisz, operator logiczny AND).
 * Popatrz: */
const myValue = 1 && 2;
/** Argumentami sa tu liczby "1" oraz "2", a zwrocony argument zostal zapisany do zmiennej
 * "myValue". Wykonaj teraz ten skrypt i zobacz, ktory argument zostal zwrocony: */
console.log('Returned value for "const myValue = 1 && 2;" is: ', myValue);
/**
 * Super, teraz przecwiczmy operator "OR".
 * Odkomentuj ponizszy przyklad razem z console.logiem i wykonaj skrypt.
 * Gdy juz to zrobisz, czytaj dalej */
// const returnedFromOR = 1 || 2;
// console.log(
//   'Returned value for "const returnedFromOR = 1 || 2;" is: ',
//   returnedFromOR
// );

/**
 * Na tym etapie widzisz, ze operator "AND" zwrocil ostatni argument z lancucha,
 * a "OR" zwrocil pierwszy argument, prawda? Sprawdzmy, czy to prawda (odkomentuj i wykonaj przyklad 1):
 */

/** EXAMPLE 1 START */
// const whatIsHere = 1 && 2 && "hello" && [] && true && {};
// const andWhatIsThere = 1 || 2 || "hello" || {} || true || [];
// console.log(`Argument returned from loooong "AND" chain is: ${whatIsHere},
// while argument returned from loooong "OR" chain is ${andWhatIsThere}.`);
/** EXAMPLE 1 END */

/**
 * Widzisz? Argument AND wciaz zwraca ostatnia wartosc z lancucha,
 * a OR pierwsza. Mogly ci teraz przyjsc do glowy dwa pytania:
 * 1. Przeciez operator logiczny mial przyjmowac dwa argumenty, a nie caly lancuch!
 * 2. Po co mi taka funkcja, ktora zwraca pierwszy lub ostatni argument? Przeciez widze ktory jest pierwszy a ktory ostatni,
 * i moge sama go sobie wziac i uzywac w programie, nie potrzebuje funkcji zeby mi go wyjela!
 *
 * Najpierw odpowiem na pierwsze pytanie. Dlaczego moge uzyc wielu argumentow w lancuchu?
 * Juz wyjasniam. Mimo, ze mamy ciag argumentow, to
 * kazdy pojedynczy operator (&& lub ||) sam w sobie otoczony jest zawsze tylko
 * przez DWA argumenty na raz: jeden arg. z lewej, i jeden arg. z prawej.
 * Zobrazuje ci to. Ponizej rozpisze ci przyklad (EXAMPLE 2) na to,
 * jak to widzi komputer vs. jak to widzi czlowiek. Zwroc uwage, ze jedyna roznica
 * to nawiasy (), ktore dzialaja dokladnie tak, jak w prostej matematyce
 * z podstawowki. Okdomentuj i wykonaj EXAMPLE 2. Pamietaj, ze w zmiennej
 * seenByComputer dodalem nawiasy, ktore sa poprawne ale TECHNICZNIE nie zmieniaja
 * dzialania kodu - dlatego jesli sformatujesz ten dokument (np w visual studio code 
 * klikniesz PPM i "formatuj", to formatter prawdopodobnie USUNIE te nawiasy 
 * i nie bedziesz wiedziec o czym pisze - dlatego nie formatuj :D ) */

/** EXAMPLE 2 START */
// const seenByYouAndMe = "Blabla" && 1 && 2 && true && "Hello";
// const seenByComputer = "Blabla" && (1 && (2 && (true && "Hello")));
// console.log(`
//     someArg seen by human is: 
    
//     "Blabla" && 1 && 2 && true && "Hello"
    
//     and evaluates to: ${seenByYouAndMe}. The same "someArg" seen by 
//     computer contains brackets: 
    
//     "Blabla" && (1 && (2 && (true && "Hello")));

//     and as well evaluates to: ${seenByComputer} (no shit Sherlock...).
//     Thanks to brackets, every logical operator takes exactly TWO
//     arguments: primitive on the left side, and brackets output
//     on the right side.  
// `);
/** EXAMPLE 2 END */

/**
 * OK, teraz juz rozumiesz, ze logiczny operator zawsze przyjmuje dwa argumenty,
 * i zwraca jeden z nich. Teraz pora przejsc do drugiego pytania:
 *
 * PO CO NAM TE OPERATORY ????
 * Zeby odpowiedziec na to pytanie, musimy na chwile zmienic temat i wrocic
 * do wiedzy na temat wartosci TRUTHY/FALSY w javascript. Przypomnijmy,
 * czym sa te wartosci. Otoz w Javascript, kazda (doslownie kazda: prymitywna
 * oraz nieprymitywna) zmienna, oprocz swojej wlasnej wartosci (przypisanej
 * przez programiste), ma dodana
 * pewna informacje gratis. Ta gratisowa informacja to wlasnie
 * informacja na temat truthy/falsy. Zmienne TRUTHY, to takie zmienne,
 * ktore gdyby je konwertowac na boolean, zamienilyby sie w TRUE, natomiast
 * zmienne FALSY to takie zmienne, ktore gdyby je konwertowac na boolean,
 * zamienilyby sie w FALSE.
 * Dla przykladu, wezmy taki string: */
const someExampleString = "foo";
/** I teraz wypunktujmy, co wiemy o tej zmiennej:
 * - Nazwa tej zmiennej to "someExampleString"
 * - Wartosc tej zmiennej to "foo"
 * - Typ tej zmiennej to "string"
 * - Wartosc truthy/falsy nadana przez Javascript to: TRUTHY
 * - Gdyby zamienic te zmienna na boolean (jeszcze nie wiemy jak, ale nie przejmuj sie tym)
 * to bylby to boolean TRUE. */
/** Z kolei wezmy taki string: */
const otherExampleString = "";
/** - Nazwa tej zmiennej to "otherExampleString"
 * - Wartosc to "" (czyli pusty string)
 * - Typ to string
 * - Wartosc truthy/falsy to FALSY
 * - Wiec gdyby zamienic te zmienna na boolean, bylby to FALSE */
/**
 * Przyjrzyj sie teraz ponizszym przykladom PRYMITYWNYCH zmiennych,
 * i sproboj nie tyle zrozumiec, co "intuicyjnie zajarzyc", kiedy
 * zmienne sa truthy, a kiedy sa falsy. Zauwaz, ze kazdy typ prymitywny
 * ma dokladnie JEDNA sytuacje, w ktorej jest falsy, a we wszystkich pozostalych
 * sytuacjach jest truthy. */

const truthyString = "Blah";
const otherTruthyString = " "; // spacja to tez znak!
const differentTruthyString = "234234";
const oneMoreTruthyString = "0"; // to nie jest zero, bo to string a nie number!

const ONLY_FALSY_STRING = ""; // jedyny mozliwy naprawde pusty string

const truthyNumber = 1;
const otherTruthyNumber = 100;

const ONLY_FALSY_NUMBER = 0;

const truthyBoolean = true;
const falsyBoolean = false;

const falsyNullBecauseThereIsNoTruthyNull = null;
const falsyUndefinedBecauseThereIsNoTruthyUndefined = undefined;
const falsyNaNBecauseThereIsNoTruthyNaN = NaN;

/** Czujesz, o co tu biega? Rzeczy "puste", "zerowe", "nic niewarte", "wyczyszczone z zawartosci"
 * sa "falsy". Mozemy sobie wylistowac wszystkie dostepne falsy values:
 */

const allExistingFalsyValues = ["", 0, false, NaN, undefined, null]; // oto najsmutniejsza tablica swiata,
// bo zawiera tylko nic niewarte rzeczy.

/** doskonale, to teraz przejdzmy do wartosci nie-prymitywnych. Tu sprawa jest prosta:\
 * Kazda wartosc nieprymitywna niesie wartosc TRUTHY, zawsze i wszedzie: */
const truthyObject = {};
const otherTruthyObject = [];
const anotherTruthyObject = [1, 2, "blah"];
const oneMoreTruthyObject = {
  value: "blah",
  sayValue() {
    console.log(this.value);
  },
};
const truthyFunction = () => {};
const otherTruthyFunction = function () {};
function andIAmTruthyFunctionAlso() {}

/**
 * Na tym etapie powinnas rozumiec dwie rzeczy:
 * - Wszystkie prymitywne, ale takie jakby puste, bezwartosciowe wartosci, sa FALSY
 * - Wszystkie pozostale wartosci (czyli niepuste prymitywy, oraz kazdy wskaznik) sa TRUTHY
 * Zapamietalas? Good.
 * To teraz zapomnij.
 * Bo nauczymy sie, jak zamieniac wartosci truthy/falsy na booleany, zeby moc sobie
 * testowac wartosci nie musiec ich pamietac. Wprowadze teraz taki dziwny operator
 * ktory nazywa sie exclamation mark. Ten operator to funkcja, ktora przyjmuje jedna
 * wartosc i zwraca boolean o PRZECIWNYM znaku. Zawila definicja, co? Po prostu
 * spojrzmy na przyklad (odkomentuj EXAMPLE 3 i wykonaj)
 */

/** EXAMPLE 3 STARt */
// const anyValue = "fsa";
// const oppositeBoolean = !anyValue;
// console.log(
//   `Boolean OPPOSITE to "const anyValue=${anyValue}" is: ${oppositeBoolean}`
// );
/** EXAMPLE 3 END */

/** Widzisz? Wartosc truthy/falsy dla stringa "fsa" powinna byc TRUTHY, wiec
 * "przeciwny boolean" do TRUTHY to false. Dawaj teraz sie pobawimy. Podmien tam wyzej
 * wartosc "fsa" kolejno na takie wartosci:
 * - pusty string,
 * - zero
 * - sto
 * - null
 * i odpal za kazdym razem skrypt, zeby zobaczyc, czy cie to czyms zaskoczy.
 * Wiesz, jak to bywa z JSem... czasem lubi zaskoczyc, zwlaszcza jesli chodzi
 * o nulle i zera...
 */

// posprawdzalas?

// na pewno?

// mozemy jechac dalej?

/**
 * mam nadzieje, ze posprawdzalas, bo teraz bedzie spoiler:
 * Exclamation mark operator nie ma zadnego zaskakujacego wyjatku!
 * Nawet dla nulla. Null jest falsy, wiec wykrzynik zamienia go w true, kropka.
 * I cacy. Mozna isc dalej.
 */

/**
 * To teraz sprzedam ci ciekawego hinta. Pamietasz, ze operator wykrzynika przyjmuje
 * jeden argument? */
const something = !"bla";
// a gdyby tym argumentem, byl output z innego wykrzyknika? Jak myslisz, co sie stanie?
const outputFromExclam = !"bla";
const nextOutput = !outputFromExclam;
// Powiem ci, co sie stanie: skoro pierwszy wykrzykin zamienil stringa (truthy)
// na boolean false i zapisal go do zmiennej outputFromExclam,
// to drugi wykrzyknik zamienil boolean false zapisany w zmiennej outputFromExclam
// go na boolean true, a wynik zapisal w nextOutput. Mozemy uproscic cala ta operacje
// do takiego zapisu:
const shorthand = !!"bla";
// a tak naprawde nawiasy sa zbedne, bo przeciez mozemy zapisac po prostu tak:
const shortShorthand = !!"bla";
// Wiesz, co to oznacza? Ze stosujac podwojny wykrzyknik...
// zamieniamy dowolna zmienna na boolean ZGODNY z jej truthy/falsy!
// Przetestujmy te wiedze.

const anyValueYouWant = {};
const booleanThatReflectsValueAbove = !!anyValueYouWant;
// odkomentuj ponizszy console log:
// console.log(
//   `Double "!" converts value ${anyValueYouWant} to boolean: ${booleanThatReflectsValueAbove}`
// );

/** Naprawde, to zawsze dziala. Spojrz jeszcze tutaj: */
// function someFunction() {}
// const funcToBool = !!someFunction;
// console.log(`Double "!" converts function to boolean: ${funcToBool}`);

/**
 * Widzisz? Teraz wiesz, jak konwertowac dowolna zmienna (prymitywna i nieprymitywna)
 * do booleana. Mozemy wiec wrocic do naszych operatorow logicznych && oraz ||.
 * Teraz, gdy juz jestesmy odrobine bardziej cwaniakami, mozemy nieco rozwinac definicje
 * tych operatorow. Zacznijmy wiec od operatora AND. Spojrz na ponizszy przyklad (odkomentuj, wykonaj)
 */

/** EXAMPLE 4 START */
// const whatYouThinkIsHere = "Hello" && 120 && null && function () {};
// console.log("whatYouThinkIsHere: ", whatYouThinkIsHere);
/** EXAMPLE 4 END */

/** Co tu sie zadzialo??
 * Zeby to zrozumiec, uproscmy powyzszy przyklad: */

/** EXAMPLE 5 START */
// const simpleExample = null && true;
// const otherSimpleExample = true && null;
// console.log(
//   `simpleExample: ${simpleExample}, otherSimpleExample: ${otherSimpleExample}`
// );
/** EXAMPLE 5 END */

// Whooa, dwa nulle!
// Otoz operator AND robi tak:
// - testuje po kolei kazdy argument, od lewej do prawej (ma je dwa).
// - jesli testowany argument jest TRUTHY, bierze nastepny arguemnt.
// - jesli jest FALSY, konczy test i zwraca to, na czym skonczyl (czyli tenze FALSY arguemnt).
// Widzisz? W naszym przykladzie to sie wlasnie stalo. Gdy rownanie wygladalo tak:
null && true;
// operator wzial pierwszy dostepny argument od lewej (czyli null) i przetestowal go. Z testu wyszlo
// ze null jest FALSY, wiec test zostal przerwany, a null zwrocony.
// Natomiast w naszym drugim przykladzie...
true && null;
// ...operator wzial pierwszy dostepny argument, czyli true, i wyszlo mu ze jest on TRUTHY. Mogl wiec kontynuowac
// test. Przeszedl zatem do nastepnego dostepnego argumentu, czyli nulla. Argument zostal rozpoznany jako FALSY,
// test wiec zostal przerwany i argument zwrocony. Zatem mozemy powiedziec, ze:
// - operator AND testuje argumenty od lewej do prawej
// - testuje je tak dlugo, az test zostanie przerwany przez wartosc FALSY lub argumenty sie skoncza
// - zwraca ostatni argument do jakiego dotarl, czyli pierwszy napotkany FALSY lub ostatni argument w lancuchu.

/** czy teraz juz rozumiesz, dlaczego ponizszy console.log printuje nulla? */
// console.log(
//   "Hello" && 120 && {} && [] && null && function () {} && "Some letters"
// );
/** a czy rozumiesz, dlaczego ponizszy console.log printuje "Hello World"? */
// console.log(true && 1 && function () {} && "Hello World");
/** a czy rozumiesz, dlaczego ponizszy EXAMPLE 6 dziala? */

/** EXAMPLE 6 START */
// const whatWeHaveHere =
//   1 &&
//   true &&
//   "foo" &&
//   function () {
//     console.log("PRINT THIS IF FUNCION IS CALLED");
//   };
// whatWeHaveHere();
/** EXAMPLE 6 END */

// a czy rozumiesz, dlaczego EXAMPLE 7 nie dziala i rzuca error na konsole?
/** EXAMPLE 7 START */
// const andWhatWeHaveHere = 1 && true && 0 && function () {
//     console.log("PRINT THIS IF FUNCION IS CALLED")
// };
// andWhatWeHaveHere();
/** EXAMPLE 7 END */

/** Dobrze, teraz juz chyba rozumiesz, jak dziala operator AND. Przejdzmy zatem do operatora OR
 * Zacznijmy od razu na grubo, czyli od definicji:
 * - operator OR testuje argumenty po kolei, od lewej do prawej (ma je dwa)
 * - jesli testowany argument jest TRUTHY, przerywa test i zwraca ten argument
 * - jesli argument jest FALSY, kontynuuje test w poszukiwaniu TRUTHY (bierze nastepny argument)
 * - test jest kontynuowany do znalezienia pierwszego argumentu TRUTHY albo do skonczenia sie argumentow.
 * - Zwracany jest pierwszy argument TRUTHY, albo ostatni arg. do jakiego udalo sie dotrzec.
 *
 * Duzo slow, co? Moze po prostu to przetejstujmy. Btw, nie zapomnij na tym etapie zakomentowac EXAMPLE 7
 * z poprzedniego punktu, zeby nie rzucal nam bledow na konsole. Zakomentowane? To jedziemy: */

/** EXAMPLE 8  START*/
// const whatAmI = 0 || 1;
// const andWhatAmI = 1 || 0;
// const andHereWhatAmI = false || NaN;
// const andThereWhat = true || 120;
// console.log(`
//     When we test argumenmts with OR, it's always first TRUTHY returned.

//     Below example illustrates that rule:
//     For 'const whatAmI = 0 || 1;' output is ${whatAmI}.
//     For 'const andWhatAmI = 1 || 0;' output is ${andWhatAmI}.

//     So when all arguments are falsy, operator OR reaches very end of chain...
//     and returns last arg:
//     For 'const andHereWhatAmI = false || NaN;' output is: ${andHereWhatAmI}.

//     And if all args are truthy, operator OR immediately finds the first truthy
//     and returns it:
//     For 'const andThereWhat = true || 120; otuput is ${andThereWhat}.
// `);
/** EXAMPLE 8 END */

/**
 * Niewazne, ile argumentow polaczysz w lancuch, efekt bedzie wlasnie
 * taki, ze operator znajdzie ten jeden, piertwszy truthy, i go zwroci,
 * lub dojedzie do konca i zwroci to co siedzi na koncu.
 * Sprawdz (odkomentuj dwa console.logi): */
const shouldBeOlaAmigo =
  false || null || NaN || "Ola amigo!" || true || "Last argument";
const shouldBeLastArg = false || null || NaN || "" || 0;
// console.log("shouldBeOlaAmigo: ", shouldBeOlaAmigo);
// console.log("shouldBeLastArg: ", shouldBeLastArg);

/** Wydaje ci sie, ze to troche duzo zasad do pamietania? Na wszelki wypadek wiec podsumuje teraz
 * jeszcze raz oba operatory (OR i AND) naraz, zeby poskladac do kupy te wiedze. No wiec... */

// Operatory OR oraz AND testuja po kolei swoje argumenty
// i zwracaja ten, ktory pierwszy przerwie test.

// Proste, co?

// Po prostu:
// - test OR przerywa pierwsza wartosc TRUTHY
// - test AND przerywa pierwsza wartosc FALSY
// - oba testy OR i AND przerywa ostatni dostepny argument.

// Niezle, co? Wystarczy kilka razy to przeklepac, zebys zaczela pojmowac to intuicyjnie, zamiast
// pamietac jakies definicje. Zreszta i tak wymyslilem sobie teraz te definicje na poczekaniu :D
// No dobrze, teraz mam dla ciebie jeszcze jedna uwage. Pamietasz, ze na poczatku lekcji
// zobaczylismy, ze komputer czyta dlugie lancuchy tak jakby mialy nawiasy? Dokladnie tak o:
// const outputArg = 1 && ( 2 && ( 3 && true) );
// oraz tak o:
// const argOut = 1 || ( 2 || (3 || true) );
// zauwaz, ze to nam troche komplikuje spojrzenie na sprawe. Bowiem jestli zgodzimy sie, ze nawiasy
// istnieja, to musi oznaczac, ze komputer nie czyta lancucha argument po argumencie.
// czemu tak twierdze? Zobacz; jesli wezmiemy taki lancuch:
let chainOut = 0 || false || NaN || true;
// ...to my jako ludzie najpierw porownamy ZERO do FALSE (bo pojdziemy od lewej do prawej), 
// a komputer w tym samym przypadku porowna zero do... outputu CALEGO NAWIASU. Bo
// komputer widzi tam taki zapis: let chainOut = 0 || (...zawartosc nawiasu...)
// A przeciez tego outputu nie da sie rozstrzygnac, jesli nie poznamy najpierw
// zawartosci wewnetrznych nawiasow... Wychodzi wiec na to, ze komputer tak naprawde 
// przeczyta caly lancuch w ten sposob:
const firstResolved = NaN || true // otuput: true;
const secondResolved = false || firstResolved // output: firstResolved bo jest truthy
const thirdResolved = 0 || secondResolved // output: secondResolved bo jest truthy
chainOut = thirdResolved;
// innymi slowy, komputer zacznie porownywanie od prawej strony; w tym sensie, 
// ze najpierw wykona najbardziej prawy operator. 
// Zauwaz jednak, ze zarowno ty, jak i komputer, w przypadku zmiennej chainOut
// dojdziecie do takiego samego wyniku calego lancucha. Dlatego:
// Mozesz spokojnie czytac wyrazenia logiczne po kolei, od lewej, do prawej, argument po argumencie, 
// nie wyobrazajac sobie zadnych nawiasow, i dojdziesz do poprawnego wyniku.

// Przetestujmy to. Wezmy taki lancuch:
const problematicChain = 1 && 0 || false && true;
// Zastanowmy sie, jak wyjdzie nam porownanie od lewej do prawej. Ponizej przedstawiam ci
// rozbior problematicChain na skladowe operatory. Obok kazdej skladowej dodalem komentarz
// w ktorym opisuje, czego SPODZIEWAM SIE jako czlowiek po tejze skladowej. Popatrz, ale nie consoluj:
const firstResolvedByHuman = 1 && 0; // AND zwroci 0, bo 1 zda test umozliwiajac wziecie nastepnego argumentu;
const secondResolvedByHuman = firstResolvedByHuman || false // OR zwroci false, bo majac w lancuchu same FALSY, dojdzie do konca lancucha
const thirdResolvedByHuman = secondResolvedByHuman && true // AND zwroci secondResolvedByHuman, bo jest FALSY i przerwie test.
const humanOutput = thirdResolvedByHuman // spodziewam sie, ze to bedzie boolean false;
// A teraz popatrzmy, jak ten sam chain przeczytany bedzie od prawej do lewej:
const firstResolvedByComputer = false && true // AND zwroci false, bo przerwie test na pierwszym argumencie
const secondResolvedByComputer = 0 || firstResolvedByComputer // OR zwroci firstResolvedByComputer bo 0 jako FALSY powoduje kontynuacje testu
const thirdResolvedByComputer = 1 && secondResolvedByComputer // AND zwroci secondResolvedByComputer, bo 1 jako TRUTHY powoduje kontynuacje
const computerOutput = thirdResolvedByComputer // spodziewam sie, ze to bedzie boolean false;
// i teraz sprawdzmy, czy w obu przypadkach doszlismy do takiego samego outputu. Sprawdz trzy console.logi:
// console.log("problematicChain: ", problematicChain);
// console.log("problematicChain from left (by human): ", humanOutput);
// console.log("problematicChain from right (by computer): ", computerOutput);

/**
 * Dobrze, na tym etapie juz powinnas w miare rozrozniac, czym jest 
 * operator OR a czym jest operator AND. Teraz pokaze ci cos extra:
 * Pamietasz, jak sie uzywa struktury "if"? */

/** EXAMPLE 9 START */
// const value = true;
// if (value) {
//     console.log("value is true!");
// }
/** EXAMPLE 9 END */

/** to teraz powiem ci cos, co sprawi, ze zwariujesz: 
 * szalona prawda o javascipcie!
 * 
 * STRUKTURA IF TAK NAPRAWDE NIE SPRAWDZA WARTOSCI TRUE/FALSE,
 * TYLKO WARTOSC TRUTHY/FALSY!!!!!!!!!!!!!!!
 * 
 * szalone, co? o jaa!!! 
 * No to sprawdzamy:
*/

/** EXAMPLE 10 START */
// const shouldBeTruthy = {};
// if (shouldBeTruthy) {
//     console.log('value is not "true" per se... BUT IT IS TRUTHY!');
// }
/** EXAMPLE 10 END */