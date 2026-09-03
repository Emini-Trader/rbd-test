// Baza pytań quizu RBD (Relacyjne Bazy Danych: SQL, projektowanie schematów,
// postacie normalne, spójność referencyjna, modelowanie encja-związek).
// Każde pytanie ma pole topicTitle/topicSummary (blok "Warto wiedzieć" wyświetlany po
// odpowiedzi) oraz wyjaśnienie (explain) przy każdej opcji odpowiedzi.

const QUESTIONS = [
 {
  "id": "Q004",
  "chapter": "G1",
  "chapterName": "Najnowszy zjazd",
  "question": "Instrukcja UPDATE służy do:",
  "topicTitle": "Polecenia DML",
  "topicSummary": "UPDATE zmienia wartości wskazanych kolumn w wierszach spełniających warunek WHERE. Pominięcie WHERE powoduje aktualizację wszystkich wierszy tabeli, co jest częstym źródłem błędów - warto najpierw sprawdzić zasięg zmiany odpowiadającym jej SELECT-em z tym samym warunkiem.",
  "options": [
   { "key": "a", "text": "sprowadzania rekordów z bazy danych", "correct": false, "explain": "Nie - to zadanie SELECT." },
   { "key": "b", "text": "wstawiania rekordów do bazy danych", "correct": false, "explain": "Nie - to zadanie INSERT." },
   { "key": "c", "text": "usuwania rekordów z bazy danych", "correct": false, "explain": "Nie - to zadanie DELETE." },
   { "key": "d", "text": "aktualizacji rekordów w bazie danych", "correct": true, "explain": "Tak - UPDATE modyfikuje wartości w istniejących wierszach." }
  ]
 },
 {
  "id": "Q023",
  "chapter": "G1",
  "chapterName": "Najnowszy zjazd",
  "question": "Spójność referencyjna dotyczy faktu:",
  "topicTitle": "Spójność referencyjna",
  "topicSummary": "Spójność referencyjna (referential integrity) to zasada mówiąca, że wartość klucza obcego musi albo być NULL (brak powiązania), albo odpowiadać istniejącej wartości klucza głównego w tabeli, do której się odwołuje. Dzięki temu nie może istnieć np. zamówienie odwołujące się do nieistniejącego klienta.",
  "options": [
   { "key": "a", "text": "wartością klucza obcego może być NULL lub wartość odpowiadającego mu klucza głównego", "correct": true, "explain": "Tak - to jest właśnie definicja spójności (integralności) referencyjnej." },
   { "key": "b", "text": "wartości w kolumnie nie powtarzają się", "correct": false, "explain": "Nie - to opisuje ograniczenie unikalności (np. klucz jednoznaczny), a nie spójność referencyjną." },
   { "key": "c", "text": "wartości w kolumnie nie mogą zależeć ani od części klucza, ani przechodnio od klucza", "correct": false, "explain": "Nie - to definicja III postaci normalnej, dotyczy zależności funkcyjnych, a nie relacji między tabelami przez klucz obcy." },
   { "key": "d", "text": "w każdej tabeli powinien istnieć dokładnie jeden klucz", "correct": false, "explain": "Nie - to nie jest definicja spójności referencyjnej; dodatkowo tabela może mieć jeden klucz główny i wiele kluczy kandydujących/unikalnych." }
  ]
 },
 {
  "id": "Q078",
  "chapter": "G1",
  "chapterName": "Najnowszy zjazd",
  "question": "Zapytanie SELECT Wycieczka_ID AS Wycieczki FROM AtrakcjaNaWycieczce WHERE Atrakcja_ID = 1 INTERSECT SELECT Wycieczka_ID AS Wycieczki2 FROM AtrakcjaNaWycieczce WHERE Atrakcja_ID = 2; pokazuje w wyniku:",
  "topicTitle": "Nazwa kolumny wyniku przy operatorach zbiorowych",
  "topicSummary": "INTERSECT zwraca wiersze wspólne dla wyników obu zapytań składowych - tu: identyfikatory wycieczek, na których jest zarówno atrakcja 1, jak i atrakcja 2. Przy operatorach zbiorowych (UNION, INTERSECT, MINUS) nazwę kolumny wynikowej wyznacza alias z pierwszego zapytania składowego - alias nadany w drugim zapytaniu (tu: Wycieczki2) jest ignorowany.",
  "options": [
   { "key": "a", "text": "Wycieczki, na których jest atrakcja 1 i atrakcja 2.", "correct": true, "explain": "Tak - INTERSECT zwraca część wspólną: identyfikatory wycieczek występujące w obu podzapytaniach, czyli mających zarówno atrakcję 1, jak i 2." },
   { "key": "b", "text": "Kolumnę o nazwie Wycieczki.", "correct": true, "explain": "Tak - nazwa kolumny wynikowej pochodzi od aliasu z pierwszego zapytania (Wycieczki), niezależnie od aliasu nadanego w drugim." },
   { "key": "c", "text": "Kolumnę o nazwie Wycieczki2.", "correct": false, "explain": "Nie - alias z drugiego zapytania (Wycieczki2) jest ignorowany przy nazywaniu kolumny wynikowej operatora zbiorowego." },
   { "key": "d", "text": "Zapytanie zwraca błąd.", "correct": false, "explain": "Nie - zapytanie jest składniowo i semantycznie poprawne (obie strony INTERSECT zwracają po jednej, zgodnej typem kolumnie)." }
  ]
 },
 {
  "id": "Q083",
  "chapter": "G1",
  "chapterName": "Najnowszy zjazd",
  "question": "Dany jest schemat relacyjny R = {Ulica, Kod, Sklep}, F = {Ulica→Kod; Sklep→Ulica}. W której postaci normalnej jest ten schemat (zaznacz wszystkie spełnione)?",
  "topicTitle": "Klucz jednoatrybutowy a zależności częściowe",
  "topicSummary": "Postacie normalne są zagnieżdżone (2NF ⊂ 1NF, 3NF ⊂ 2NF itd.), więc spełnienie wyższej postaci automatycznie oznacza spełnienie wszystkich niższych - trzeba zaznaczyć je wszystkie, nie tylko najwyższą. Jedynym kluczem kandydującym jest tu {Sklep} (Sklep→Ulica→Kod, więc {Sklep}+ = R). Skoro klucz jest jednoatrybutowy, nie mogą wystąpić zależności częściowe (wymagają klucza złożonego), więc warunek II postaci normalnej (a więc i I) jest spełniony automatycznie. Jednak Ulica→Kod jest zależnością przechodnią (Sklep→Ulica→Kod, gdzie Ulica nie jest kluczem), co łamie III postać normalną i BCNF.",
  "options": [
   { "key": "a", "text": "w I postaci normalnej", "correct": true, "explain": "Tak - I postać normalna (wartości atomowe) jest warunkiem koniecznym każdej wyższej postaci, a schemat spełnia nawet II postać normalną, więc tym bardziej spełnia I." },
   { "key": "b", "text": "w II postaci normalnej", "correct": true, "explain": "Tak - klucz {Sklep} jest jednoatrybutowy, więc nie ma zależności częściowych (2NF spełnione), ale Ulica→Kod jest zależnością przechodnią, która łamie już 3NF - II postać normalna to najwyższa spełniona tu postać." },
   { "key": "c", "text": "w III postaci normalnej", "correct": false, "explain": "Nie - zależność przechodnia Ulica→Kod (Sklep→Ulica→Kod) narusza definicję 3NF." },
   { "key": "d", "text": "w postaci normalnej Boyce'a-Codda", "correct": false, "explain": "Nie - BCNF jest jeszcze silniejsze niż 3NF, którego schemat już nie spełnia." }
  ]
 },
 {
  "id": "Q084",
  "chapter": "G1",
  "chapterName": "Najnowszy zjazd",
  "question": "Encje PRACOWNIK i DZIAŁ (z zależnością „zatrudniony w”; wiadomo, że pracownik może być zatrudniony tylko w jednym dziale) połączone są związkiem:",
  "topicTitle": "Typ związku 1:N między działem a pracownikami",
  "topicSummary": "Jeden dział zatrudnia wielu pracowników, ale każdy pracownik należy do co najwyżej jednego działu - to definicja związku jeden-do-wielu (1:N) między DZIAŁ (strona „jeden”) a PRACOWNIK (strona „wiele”), realizowanego kluczem obcym do działu w tabeli pracowników.",
  "options": [
   { "key": "a", "text": "jeden — wiele", "correct": true, "explain": "Tak - jeden dział może zatrudniać wielu pracowników, a każdy pracownik należy do najwyżej jednego działu." },
   { "key": "b", "text": "wiele — jeden", "correct": false, "explain": "Nie - to ta sama krotność wyrażona z przeciwnej strony niż przyjęta w zadaniu konwencja (DZIAŁ jako strona „jeden”)." },
   { "key": "c", "text": "wiele — wiele", "correct": false, "explain": "Nie - treść zadania wprost wyklucza tę możliwość: pracownik może być zatrudniony tylko w jednym dziale." },
   { "key": "d", "text": "wymagającym dodatkowej encji łączącej", "correct": false, "explain": "Nie - encja łącząca jest potrzebna dla związków wiele-do-wielu; tu wystarczy zwykły klucz obcy w tabeli PRACOWNIK." }
  ]
 },
 {
  "id": "Q085",
  "chapter": "G1",
  "chapterName": "Najnowszy zjazd",
  "question": "Studenci lubią się, są sobie obojętni lub nie znoszą się (nie ma innej możliwości). Wskaż, które z poniższych schematów (wielkimi literami oznaczono atrybuty klucza głównego) prawidłowo (i bez redundancji) modelują zagadnienie:",
  "topicTitle": "Jedna tabela z typem relacji zamiast wielu równoległych tabel",
  "topicSummary": "W przeciwieństwie do wcześniejszego, prostszego ujęcia tego problemu, tu kluczowe jest słowo „bez redundancji”: każde rozwiązanie rozbijające nastawienie na kilka równoległych tabel (Lubi/Nie_znosi, ewentualnie jeszcze Obojętny) nie ma żadnego mechanizmu, który zapobiegałby wpisaniu tej samej pary studentów jednocześnie do więcej niż jednej z nich - nic nie gwarantuje wyłączności stanu, a ten sam fakt daje się wtedy zapisać na więcej niż jeden sposób. Rozwiązanie z jedną tabelą Nastawienie_do i kluczem głównym (ID_STUDENTA, ID_KOLEGI) wymusza istnienie co najwyżej jednego wiersza (czyli jednego nastawienia) dla danej pary, co jest zgodne z założeniem „nie ma innej możliwości”.",
  "options": [
   { "key": "a", "text": "Studenci(ID_STUDENTA, imię, nazwisko); Nastawienie(ID_NASTAWIENIA, nastawienie); Nastawienie_do(ID_STUDENTA, ID_KOLEGI, id_nastawienia)", "correct": true, "explain": "Tak - klucz główny (ID_STUDENTA, ID_KOLEGI) w Nastawienie_do gwarantuje dokładnie jeden wiersz (czyli jedno nastawienie) na parę studentów, bez możliwości sprzecznych wpisów w kilku miejscach naraz." },
   { "key": "b", "text": "Studenci(ID_STUDENTA, imię, nazwisko); Lubi(ID_STUDENTA, ID_KOLEGI); Nie_znosi(ID_STUDENTA, ID_KOLEGI)", "correct": false, "explain": "Nie - samo pominięcie tabeli „Obojętny” jest do obrony (obojętność to po prostu brak wiersza w obu tabelach), ale dwie równoległe tabele nie wymuszają wyłączności stanu: ta sama para studentów może trafić jednocześnie do Lubi i do Nie_znosi, więc schemat dopuszcza sprzeczne, nadmiarowe zapisy. Wariant a) z kluczem głównym (ID_STUDENTA, ID_KOLEGI) takiej możliwości nie daje i to on spełnia warunek „bez redundancji”." },
   { "key": "c", "text": "Studenci(ID_STUDENTA, imię, nazwisko); Lubi(ID_STUDENTA, ID_KOLEGI); Nie_znosi(ID_STUDENTA, ID_KOLEGI); Obojętny(ID_STUDENTA, ID_KOLEGI)", "correct": false, "explain": "Nie - mimo że pokrywa wszystkie trzy stany, nic nie stoi na przeszkodzie, by ta sama para studentów trafiła jednocześnie do dwóch lub trzech tabel naraz, co jest niespójne (redundancja/brak wymuszonej wyłączności), w przeciwieństwie do wariantu a)." },
   { "key": "d", "text": "Studenci(ID_STUDENTA, imię, nazwisko); Koledzy(ID_KOLEGI, imię, nazwisko, id_studenta, nastawienie_do)", "correct": false, "explain": "Nie - Koledzy niepotrzebnie duplikuje imię i nazwisko, mimo że „kolega” to po prostu inny student już opisany w Studenci." }
  ]
 },
 {
  "id": "Q086",
  "chapter": "G1",
  "chapterName": "Najnowszy zjazd",
  "question": "Wskazać poprawne (w Oracle) zapytanie SQL znajdujące nazwy działów, w których nie jest zatrudniony żaden pracownik:",
  "topicTitle": "MINUS na właściwych, żądanych kolumnach",
  "topicSummary": "Aby znaleźć działy bez pracowników operatorem MINUS, trzeba odjąć od zbioru wszystkich nazw działów zbiór nazw działów, które faktycznie mają choć jednego pracownika (czyli wynik złączenia Emp z Dept). Odpowiedź musi też zwracać dokładnie żądaną kolumnę (Dname - nazwy), a nie np. same numery działów, nawet jeśli logika zapytania byłaby poprawna.",
  "options": [
   { "key": "a", "text": "SELECT Dname FROM Dept INTERSECT SELECT Dname FROM Emp, Dept WHERE Emp.Deptno = Dept.Deptno;", "correct": false, "explain": "Niepoprawne - INTERSECT zwróci część wspólną, czyli nazwy działów, które MAJĄ pracowników, a to dokładna odwrotność szukanego wyniku." },
   { "key": "b", "text": "SELECT Dname FROM Dept LEFT OUTER JOIN Emp ON Emp.Deptno = Dept.Deptno WHERE Dept.Deptno IS NULL;", "correct": false, "explain": "Niepoprawne - przy LEFT OUTER JOIN od strony Dept, kolumna Dept.Deptno nigdy nie jest NULL (to strona zachowywana); do wykrycia braku dopasowania trzeba sprawdzić NULL po stronie Emp (np. Emp.Deptno IS NULL), a nie po stronie Dept." },
   { "key": "c", "text": "SELECT Deptno FROM Dept MINUS SELECT Deptno FROM Emp;", "correct": false, "explain": "Niepoprawne względem treści polecenia - logika MINUS jest tu poprawna, ale zapytanie zwraca numery działów (Deptno), a zadanie wymaga zwrócenia nazw działów (Dname)." },
   { "key": "d", "text": "SELECT Dname FROM Dept MINUS SELECT Dname FROM Emp, Dept WHERE Emp.Deptno = Dept.Deptno;", "correct": true, "explain": "Poprawne - od zbioru wszystkich nazw działów odejmujemy (MINUS) zbiór nazw działów, które mają choć jednego pracownika, otrzymując dokładnie działy bez zatrudnionych." }
  ]
 },
 {
  "id": "Q087",
  "chapter": "G1",
  "chapterName": "Najnowszy zjazd",
  "question": "Dane są trzy tabele Klienci(Id_Klienta, Imie, Nazwisko), Produkty(Id_Produktu, Nazwa, Cena) oraz Zakupy(Id_Klienta, Id_Produktu, Ilosc). Wskazać poprawne zapytanie SQL znajdujące nazwy i ceny produktów zakupionych przez klientów o nazwisku Abacki.",
  "topicTitle": "Złączenie przez tabelę pośredniczącą",
  "topicSummary": "Nazwa i cena produktu (z tabeli Produkty) oraz nazwisko klienta (z tabeli Klienci) są ze sobą powiązane wyłącznie pośrednio, przez tabelę Zakupy - zapytanie musi więc złączyć wszystkie trzy tabele (poprzez Id_Klienta i Id_Produktu), niezależnie od tego, czy użyjemy starszej składni z przecinkiem i WHERE, czy nowocześniejszej z INNER JOIN.",
  "options": [
   { "key": "a", "text": "SELECT Nazwa, Cena FROM Klienci, Produkty WHERE Nazwisko = 'Abacki';", "correct": false, "explain": "Niepoprawne - brak w ogóle tabeli Zakupy łączącej klienta z konkretnymi produktami; to po prostu iloczyn kartezjański Klienci i Produkty bez sensownego powiązania." },
   { "key": "b", "text": "SELECT Nazwa, Cena FROM Klienci WHERE Nazwisko = 'Abacki';", "correct": false, "explain": "Niepoprawne - kolumny Nazwa i Cena w ogóle nie istnieją w tabeli Klienci (są w Produkty), więc zapytanie odwołuje się do nieistniejących kolumn." },
   { "key": "c", "text": "SELECT Nazwa, Cena FROM Klienci, Produkty, Zakupy WHERE Klienci.Id_Klienta = Zakupy.Id_Klienta AND Produkty.Id_Produktu = Zakupy.Id_Produktu AND Nazwisko = 'Abacki';", "correct": true, "explain": "Poprawne - trzy tabele złączone przez Zakupy (starsza składnia z przecinkiem i warunkami złączenia w WHERE), z filtrem na nazwisko klienta." },
   { "key": "d", "text": "SELECT Nazwa, Cena FROM Klienci INNER JOIN Zakupy ON Klienci.Id_Klienta = Zakupy.Id_Klienta INNER JOIN Produkty ON Produkty.Id_Produktu = Zakupy.Id_Produktu WHERE Nazwisko = 'Abacki';", "correct": true, "explain": "Poprawne - dokładnie ta sama logika złączenia trzech tabel, zapisana nowocześniejszą składnią INNER JOIN ... ON." }
  ]
 },
 {
  "id": "Q088",
  "chapter": "G1",
  "chapterName": "Najnowszy zjazd",
  "question": "Odwołanie do aliasu kolumny lub wyrażenia może pojawić się w klauzuli:",
  "topicTitle": "Kolejność przetwarzania klauzul a widoczność aliasów",
  "topicSummary": "Koncepcyjna kolejność przetwarzania zapytania SQL to: FROM, WHERE, GROUP BY, HAVING, SELECT (tu nadawane są aliasy), a na końcu ORDER BY. Ponieważ aliasy z SELECT powstają dopiero na tym etapie, wcześniejsze klauzule (WHERE, GROUP BY, HAVING) nie mogą się jeszcze do nich odwoływać w standardowym SQL/Oracle - jedynie ORDER BY, przetwarzane jako ostatnie, ma do nich dostęp.",
  "options": [
   { "key": "a", "text": "ORDER BY", "correct": true, "explain": "Tak - ORDER BY jest przetwarzane jako ostatnie, gdy aliasy z SELECT są już znane, więc może się do nich odwoływać." },
   { "key": "b", "text": "SELECT", "correct": false, "explain": "Nie - w obrębie tej samej listy SELECT nie można (w standardowym SQL) odwołać się do aliasu zdefiniowanego w tym samym zapytaniu." },
   { "key": "c", "text": "GROUP BY", "correct": false, "explain": "Nie - GROUP BY jest koncepcyjnie przetwarzane przed SELECT, więc aliasy z SELECT nie są tam jeszcze dostępne (choć niektóre dialekty spoza Oracle/standardu na to pozwalają)." },
   { "key": "d", "text": "HAVING", "correct": false, "explain": "Nie - podobnie jak GROUP BY, HAVING jest przetwarzane przed ostatecznym ustaleniem listy SELECT z aliasami." }
  ]
 },
 {
  "id": "Q089",
  "chapter": "G1",
  "chapterName": "Najnowszy zjazd",
  "question": "Właściwość liczebności (Cardinality) związku określa:",
  "topicTitle": "Cardinality (liczebność związku)",
  "topicSummary": "Liczebność (cardinality) związku opisuje, ile egzemplarzy jednej encji może być powiązanych z jednym egzemplarzem drugiej encji - można to opisać patrząc z obu stron związku naraz (ile „jeden” przypada na „wiele” i odwrotnie, ile „wiele” przypada na „jeden”). To inna właściwość niż opcjonalność (czy związek jest wymagany) czy identyfikowalność (czy klucz dziecka zawiera klucz rodzica).",
  "options": [
   { "key": "a", "text": "ile egzemplarzy (instancji) encji po stronie „jeden” może być powiązane z egzemplarzem (instancją) encji po stronie „wiele”", "correct": true, "explain": "Tak - to jeden z dwóch równoważnych sposobów opisania liczebności związku, patrząc od strony „wiele” w kierunku strony „jeden”." },
   { "key": "b", "text": "ile egzemplarzy (instancji) encji po stronie „wiele” może być powiązane z egzemplarzem (instancją) encji po stronie „jeden”", "correct": true, "explain": "Tak - to drugi, równoważny sposób opisania tej samej liczebności związku, tym razem patrząc od strony „jeden” w kierunku strony „wiele”." },
   { "key": "c", "text": "czy związek jest opcjonalny", "correct": false, "explain": "Nie - to osobna właściwość związku (optionality/modality), niezależna od jego liczebności." },
   { "key": "d", "text": "czy związek jest identyfikujący", "correct": false, "explain": "Nie - identyfikowalność związku dotyczy tego, czy klucz główny encji „dziecka” zawiera klucz obcy do rodzica, co jest odrębnym zagadnieniem od liczebności." }
  ]
 },
 {
  "id": "Q090",
  "chapter": "G1",
  "chapterName": "Najnowszy zjazd",
  "question": "W bazie danych chcemy przechowywać informacje o kanałach oraz filmach z serwisu YouTube. Dla każdego kanału chcemy znać liczbę subskrybentów (subskrybent to inny kanał), listę kanałów, które subskrybuje, oraz listę filmów, których jest autorem. Autorem danego filmu może być tylko jeden kanał. Wybierz najlepszy diagram spełniający wymienione wymagania.",
  "topicTitle": "Samoodwołujący związek wiele-do-wielu (subskrypcje kanałów)",
  "topicSummary": "Ponieważ „subskrybent to inny kanał”, subskrypcja jest związkiem N:M encji Kanał samej ze sobą - wymaga samoodwołującej tabeli asocjacyjnej z dwoma kluczami obcymi do Kanał (subskrybowany i subskrybujący), tworzącymi razem klucz główny. Liczbę subskrybentów danego kanału wylicza się wtedy zapytaniem (COUNT), zamiast przechowywać ją redundantnie jako osobną kolumnę. Autorstwo filmu (dokładnie jeden kanał na film) to zwykły związek 1:N, realizowany kluczem obcym w tabeli Film.",
  "options": [
   { "key": "a", "text": "Wariant 1: Film(Id PK, Nazwa, Autor FK do Kanał); Kanał(Id PK, Nazwa); Subskrybent(Id PK, Kanal FK do Kanał)", "image": "images/q090-wariant-a.jpg", "imageAlt": "Diagram wariantu 1: Film, Kanał i osobna tabela Subskrybent z kluczem obcym do Kanał", "correct": false, "explain": "Niepoprawne - Subskrybent jest tu osobną encją z własnym Id i pojedynczym FK do Kanał, co pozwala jednemu \"subskrybentowi\" wskazywać tylko jeden kanał i nie realizuje samoodwołującego związku wiele-do-wielu między kanałami wymaganego przez treść zadania (\"subskrybent to inny kanał\")." },
   { "key": "b", "text": "Wariant 2: Film(...); Kanał(Id PK, Nazwa); Lista_subskrybentow(Id PK, Subskrybenci varchar2(4000), Kanal FK); Lista_subskrypcji(Id PK, Subskrypcje varchar2(4000), Kanal FK)", "image": "images/q090-wariant-b.jpg", "imageAlt": "Diagram wariantu 2: Film, Kanał oraz tabele Lista_subskrybentow i Lista_subskrypcji z kolumnami tekstowymi varchar2(4000)", "correct": false, "explain": "Niepoprawne - przechowywanie list subskrybentów/subskrypcji jako pojedynczego, długiego tekstu (varchar2(4000)) łamie podstawową zasadę atomowości wartości (I postać normalna) i uniemożliwia poprawne, efektywne wyszukiwanie czy liczenie subskrybentów." },
   { "key": "c", "text": "Wariant 3: Film(Id PK, Nazwa, Autor FK do Kanał); Kanał(Id PK, Nazwa); Subskrypcja(Subskrybowany PK+FK do Kanał, Subskrybujący PK+FK do Kanał)", "image": "images/q090-wariant-c.jpg", "imageAlt": "Diagram wariantu 3: Film, Kanał oraz samoodwołująca tabela Subskrypcja z kluczem głównym (Subskrybowany, Subskrybujący)", "correct": true, "explain": "Poprawne - Subskrypcja to czysta, samoodwołująca tabela asocjacyjna N:M dla Kanał, ze złożonym kluczem głównym (Subskrybowany, Subskrybujący), oba pola jako klucze obce do Kanał. Liczbę subskrybentów wylicza się przez COUNT(*) po Subskrybowany, bez redundancji." },
   { "key": "d", "text": "Wariant 4: Film(...); Kanał(Id PK, Nazwa); Subskrybent(Id PK, Nazwa); Lista_subskrybentow(Kanal PK+FK, Subskrybent FK)", "image": "images/q090-wariant-d.jpg", "imageAlt": "Diagram wariantu 4: Film, Kanał, osobna tabela Subskrybent oraz tabela łącząca Lista_subskrybentow", "correct": false, "explain": "Niepoprawne - Subskrybent jest tu modelowany jako zupełnie osobna encja (z własną nazwą), a nie jako „inny kanał”, co wprost narusza wymaganie z treści zadania." }
  ]
 },
 {
  "id": "Q091",
  "chapter": "G1",
  "chapterName": "Najnowszy zjazd",
  "question": "Dana jest tabela REZERWACJA(RezerwacjaID, Data, LiczbaUczestników). Które z następujących instrukcji są poprawnymi składniowo instrukcjami SQL w dialekcie Oracle?",
  "topicTitle": "NVL, gwiazdka SELECT * oraz porównanie skalarne z krotką",
  "topicSummary": "NVL(kolumna, wartość) zamienia NULL na podaną wartość domyślną przed dalszymi obliczeniami (np. przed AVG) - to bardzo częsty wzorzec. Gwiazdka * w SELECT musi wystąpić samodzielnie (lub jako alias_tabeli.*) - nie da się jej łączyć z dodatkową, osobno wypisaną kolumną w tej samej, uproszczonej formie. Skalarna kolumna po lewej stronie „=” nie może być porównywana z listą wartości w nawiasie (1, 5) - do tego służy operator IN.",
  "options": [
   { "key": "a", "text": "SELECT Data, AVG(NVL(LiczbaUczestników,0)) FROM Rezerwacja GROUP BY Data;", "correct": true, "explain": "Poprawne - NVL zamienia ewentualne NULL-e na 0 przed uśrednieniem, a GROUP BY Data jest zgodny z niezagregowaną kolumną Data w SELECT." },
   { "key": "b", "text": "SELECT *, Data FROM Rezerwacja WHERE RezerwacjaId = 1;", "correct": false, "explain": "Niepoprawne - w Oracle nie można w ten sposób połączyć gwiazdki „*” z dodatkową, osobno wypisaną kolumną Data; „*” musi być jedynym elementem listy albo poprzedzone kwalifikatorem tabeli (np. r.*)." },
   { "key": "c", "text": "SELECT * FROM Rezerwacja WHERE LiczbaUczestników = (1, 5);", "correct": false, "explain": "Niepoprawne - LiczbaUczestników jest pojedynczą, skalarną kolumną, a (1, 5) to literał krotki/listy; porównanie skalara z operatorem „=” do listy wartości jest błędem składniowym (do tego służy IN (1, 5))." },
   { "key": "d", "text": "SELECT RezerwacjaID, Data FROM Rezerwacja WHERE LiczbaUczestników = 15 ORDER BY 1 DESC;", "correct": true, "explain": "Poprawne - proste porównanie skalarne oraz sortowanie malejące po pierwszej kolumnie z listy SELECT." }
  ]
 },
 {
  "id": "Q092",
  "chapter": "G1",
  "chapterName": "Najnowszy zjazd",
  "question": "Dane są dwie tabele Osoby(Imie, Nazwisko, Zarobki, Id_działu) oraz Działy(Id_działu, Nazwa). Które z następujących instrukcji są poprawnymi instrukcjami SQL w Oracle?",
  "topicTitle": "Wielokrotne wystąpienie tabeli bez odwołań do kolumn",
  "topicSummary": "Powtórzenie tej samej tabeli w klauzuli FROM bez aliasów jest problemem tylko wtedy, gdy odwołujemy się do jej kolumn (wtedy trzeba by je rozróżnić aliasami) - jeśli zapytanie w ogóle nie odwołuje się do żadnej kolumny (np. SELECT 1), wielokrotne wystąpienie tej samej tabeli nie powoduje niejednoznaczności. Operator konkatenacji || jest poprawnym sposobem łączenia tekstu, także w klauzuli ORDER BY.",
  "options": [
   { "key": "a", "text": "SELECT 1 FROM Osoby, Działy, Osoby, Działy;", "correct": true, "explain": "Poprawne - żadna kolumna nie jest tu wymieniona, więc wielokrotne wystąpienie tych samych tabel bez aliasów nie powoduje niejednoznaczności odwołania." },
   { "key": "b", "text": "SELECT * FROM Osoby, Działy WHERE Id_działu = Działy.Id_działu;", "correct": false, "explain": "Niepoprawne - Id_działu po lewej stronie nie jest zakwalifikowane nazwą tabeli, a kolumna ta istnieje w obu tabelach (Osoby i Działy), więc odwołanie jest niejednoznaczne." },
   { "key": "c", "text": "SELECT Nazwa FROM Osoby WHERE Osoby.Id_działu = Działy.Id_działu;", "correct": false, "explain": "Niepoprawne - tabela Działy w ogóle nie występuje w klauzuli FROM tego zapytania, a Nazwa nie jest nawet kolumną tabeli Osoby." },
   { "key": "d", "text": "SELECT * FROM Osoby, Działy WHERE Zarobki = 1000 ORDER BY Osoby.Imie || Osoby.Nazwisko;", "correct": true, "explain": "Poprawne - operator konkatenacji || łączący Imie i Nazwisko w klauzuli ORDER BY jest prawidłową składnią Oracle." }
  ]
 },
 {
  "id": "Q093",
  "chapter": "G1",
  "chapterName": "Najnowszy zjazd",
  "question": "Zapytanie SELECT ID FROM Atrakcja WHERE CzasZwiedzania >= ANY (SELECT CzasZwiedzania FROM Atrakcja); zwraca w wyniku:",
  "topicTitle": "Operator >= ANY jako >= minimum",
  "topicSummary": "Operator >= ANY (podzapytanie) jest prawdziwy, jeśli badana wartość jest większa lub równa co najmniej jednej wartości zwróconej przez podzapytanie - dla zbioru wartości nie-NULL sprowadza się to w praktyce do porównania z wartością minimalną (>= MIN(...)). To formalnie poprawny opis semantyki tego zapytania; stwierdzenie, że „zwraca wszystkie rekordy” jest tylko obserwacją prawdziwą przy założeniu braku wartości NULL, a nie precyzyjnym opisem działania operatora ANY.",
  "options": [
   { "key": "a", "text": "Atrakcje, które mają czas zwiedzania większy lub równy minimalnemu czasowi zwiedzania.", "correct": true, "explain": "Tak - to dokładny, formalny opis działania operatora >= ANY: wartość musi być >= co najmniej jednej wartości ze zbioru, czyli w praktyce >= wartości minimalnej." },
   { "key": "b", "text": "Atrakcje, które mają czas zwiedzania większy lub równy maksymalnemu czasowi zwiedzania.", "correct": false, "explain": "Nie - taki opis odpowiadałby operatorowi >= ALL, a nie >= ANY." },
   { "key": "c", "text": "Wszystkie rekordy z tabeli Atrakcja.", "correct": false, "explain": "Nie - choć przy braku wartości NULL w CzasZwiedzania rzeczywiście wszystkie rekordy spełnią ten warunek (bo każda wartość jest >= minimum zbioru), nie jest to bezwarunkowo prawdziwy, formalny opis semantyki operatora ANY (który po prostu porównuje z minimalną wartością)." },
   { "key": "d", "text": "Nie zwróci żadnych rekordów.", "correct": false, "explain": "Nie - operator >= ANY dla niepustego zbioru wartości nie-NULL zawsze zwróci co najmniej te rekordy, których wartość jest równa minimum." }
  ]
 },
 {
  "id": "Q094",
  "chapter": "G1",
  "chapterName": "Najnowszy zjazd",
  "question": "Wskazać poprawne (w Oracle) zapytanie SQL znajdujące nazwiska pracowników, którzy są zatrudnieni na takim stanowisku, co jakiś pracownik zatrudniony w dziale 10:",
  "topicTitle": "IN / EXISTS z podzapytaniem wielowierszowym",
  "topicSummary": "Ponieważ w dziale 10 może pracować więcej niż jedna osoba (a więc może tam występować więcej niż jedno stanowisko), podzapytanie zwracające listę stanowisk z działu 10 może zwrócić wiele wierszy - trzeba więc użyć operatora obsługującego wielowierszowy wynik: IN albo skorelowanego EXISTS. Porównanie „=” ze skalarnie potraktowanym podzapytaniem wielowierszowym jest błędem czasu wykonania.",
  "options": [
   { "key": "a", "text": "SELECT ename FROM emp WHERE job = (SELECT job FROM emp WHERE deptno = 10);", "correct": false, "explain": "Niepoprawne - jeśli w dziale 10 pracuje więcej niż jedna osoba na różnych stanowiskach, podzapytanie zwróci wiele wierszy, a porównanie „=” oczekuje dokładnie jednej wartości." },
   { "key": "b", "text": "SELECT ename FROM emp WHERE job IN (SELECT job FROM emp WHERE deptno = 10);", "correct": true, "explain": "Poprawne - IN poprawnie obsługuje podzapytanie zwracające dowolną liczbę wierszy z listą stanowisk występujących w dziale 10." },
   { "key": "c", "text": "SELECT ename FROM emp e1 WHERE EXISTS (SELECT 1 FROM emp e2 WHERE e1.job = e2.job AND e2.deptno = 10);", "correct": true, "explain": "Poprawne - skorelowane podzapytanie EXISTS sprawdza, czy istnieje jakiś pracownik e2 w dziale 10 o tym samym stanowisku co e1, co jest równoważne podejściu z IN." },
   { "key": "d", "text": "SELECT ename FROM emp e1 WHERE EXISTS (SELECT 1 FROM emp e2 WHERE e1.job = e2.job) AND e1.deptno = 10;", "correct": false, "explain": "Niepoprawne logicznie - EXISTS bez warunku e2.deptno = 10 jest niemal zawsze prawdziwe (e1 zawsze pasuje samo do siebie), a osobny warunek e1.deptno = 10 filtruje po prostu pracowników z działu 10, zwracając zupełnie inny wynik niż żądany." }
  ]
 },
 {
  "id": "Q095",
  "chapter": "G1",
  "chapterName": "Najnowszy zjazd",
  "question": "W bazie danych chcemy przechowywać informacje o statkach i ich rejsach. Musimy znać port, z którego statek wypłynął oraz jego destynację (inny port). Statek może mieć wiele rejsów, różne rejsy mogą odwiedzać te same porty. Dany port może być jednocześnie portem startowym dla jednego rejsu i portem destynacją dla innego rejsu. Wybierz najlepszy diagram spełniający wymienione wymagania.",
  "topicTitle": "Jedna encja Port odwoływana dwoma różnymi kluczami obcymi",
  "topicSummary": "Skoro ten sam port może raz pełnić rolę portu startowego, a innym razem portu destynacji (dla różnych rejsów), port jest tylko jedną encją, a jego dwie role są jedynie różnymi związkami do tej samej tabeli Port. Poprawny schemat ma więc pojedynczą tabelę Port(Id PK, Nazwa) oraz tabelę Rejs z dwoma osobnymi kluczami obcymi (Port_startowy, Port_destynacja), oba wskazujące na tę samą tabelę Port. Rozbijanie portu na dwie odrębne tabele (Port_startowy i Port_destynacja) zmusza do duplikowania tego samego portu w obu tabelach, gdy ma on pełnić obie role, co łamie zasadę unikania niekontrolowanej redundancji.",
  "options": [
   { "key": "a", "text": "Wariant a: Statek(Id PK, Nazwa); Rejs(Id PK, Statek FK, Port_startowy FK, Port_destynacja FK); Port_startowy(Id PK, Nazwa, Rejs FK); Port_destynacja(Id PK, Nazwa, Rejs FK)", "image": "images/q095-wariant-a.png", "imageAlt": "Diagram wariantu a: Statek, Rejs oraz osobne tabele Port_startowy i Port_destynacja, każda z dodatkowym kluczem obcym Rejs", "correct": false, "explain": "Niepoprawne - port startowy i port destynacja są tu dwiema zupełnie odrębnymi tabelami, więc ten sam fizyczny port pełniący raz rolę startową, a raz docelową musiałby być duplikowany w obu tabelach. Dodatkowo obie tabele portów mają jeszcze własny klucz obcy Rejs, co tworzy zbędne, podwójne (i sprzeczne z już istniejącymi kluczami w Rejs) powiązanie zwrotne do rejsu." },
   { "key": "b", "text": "Wariant b: Statek(Id PK, Nazwa); Port_startowy(Id PK, Nazwa, Rejs FK); Rejs(Id PK, Statek FK); Port_destynacja(Id PK, Nazwa, Rejs FK)", "image": "images/q095-wariant-b.png", "imageAlt": "Diagram wariantu b: Statek, Rejs bez odniesień do portów oraz osobne tabele Port_startowy i Port_destynacja z kluczem obcym do Rejs", "correct": false, "explain": "Niepoprawne - tu sam Rejs w ogóle nie przechowuje odwołań do portów; to Port_startowy i Port_destynacja mają klucz obcy do Rejs, co wiąże dany wiersz portu z dokładnie jednym rejsem. Ten sam port używany jako startowy dla wielu różnych rejsów (a tym bardziej ten sam fizyczny port raz jako startowy, raz jako docelowy) musiałby więc być duplikowany, a poza tym dwie osobne tabele portów uniemożliwiają jednoznaczne stwierdzenie, że chodzi o ten sam port." },
   { "key": "c", "text": "Wariant c: Statek(Id PK, Nazwa); Rejs(Id PK, Statek FK, Port_startowy FK, Port_destynacja FK); Port_startowy(Id PK, Nazwa); Port_destynacja(Id PK, Nazwa)", "image": "images/q095-wariant-c.png", "imageAlt": "Diagram wariantu c: Statek, Rejs z kluczami obcymi Port_startowy i Port_destynacja oraz dwie niezależne tabele Port_startowy i Port_destynacja", "correct": false, "explain": "Niepoprawne - mimo poprawnych kluczy obcych w Rejs, porty startowe i docelowe są modelowane jako dwie niezależne tabele z osobnymi kluczami głównymi. Ten sam port pełniący rolę startową dla jednego rejsu i docelową dla innego musiałby zostać wpisany osobno do obu tabel (z odrębnymi, niepowiązanymi identyfikatorami), co jest redundancją i nie gwarantuje, że to rzeczywiście ten sam port." },
   { "key": "d", "text": "Wariant d: Statek(Id PK, Nazwa); Rejs(Id PK, Statek FK, Port_startowy FK, Port_destynacja FK); Port(Id PK, Nazwa)", "image": "images/q095-wariant-d.png", "imageAlt": "Diagram wariantu d: Statek, Rejs z dwoma kluczami obcymi Port_startowy i Port_destynacja wskazującymi na jedną wspólną tabelę Port", "correct": true, "explain": "Poprawne - istnieje tylko jedna tabela Port, a Rejs odwołuje się do niej dwoma niezależnymi kluczami obcymi: Port_startowy i Port_destynacja. Dzięki temu ten sam wiersz Portu może być wskazywany jako port startowy jednego rejsu i jako port destynacji innego rejsu bez żadnej duplikacji danych o porcie." }
  ]
 },
 {
  "id": "Q096",
  "chapter": "G1",
  "chapterName": "Najnowszy zjazd",
  "question": "W bazie danych chcemy przechowywać informacje o historii stanowisk pracowników, czyli na jakim stanowisku dany człowiek pracował w danym okresie czasu. Pracownik może pracować na wielu stanowiskach w swojej karierze, a na danym stanowisku może pracować wielu pracowników jednocześnie. Wybierz najlepszy diagram spełniający wymienione wymagania.",
  "topicTitle": "Tabela historii jako asocjacja wiele-do-wielu z atrybutami czasu",
  "topicSummary": "Zależność \"pracownik - wiele stanowisk w karierze\" i \"stanowisko - wielu pracowników naraz\" to klasyczny związek wiele-do-wielu, tylko dodatkowo opisany okresem czasu (Od_kiedy, Do_kiedy). Wymaga to osobnej tabeli asocjacyjnej HistoriaStanowisk z kluczami obcymi zarówno do Pracownik, jak i do Stanowisko (Stanowisko jako osobna encja, a nie tylko tekst), gdzie klucz główny obejmuje pracownika, stanowisko oraz datę rozpoczęcia - dzięki temu jeden pracownik może mieć wiele wierszy historii (wiele stanowisk w karierze), a jedno stanowisko może wystąpić w wielu wierszach dla różnych pracowników jednocześnie.",
  "options": [
   { "key": "a", "text": "Wariant a: Pracownik(Id PK, Imie, Nazwisko); HistoriaStanowisk(Id PK, Stanowisko varchar2(50), Od_kiedy date, Do_kiedy date [null], Pracownik FK)", "image": "images/q096-wariant-a.png", "imageAlt": "Diagram wariantu a: Pracownik oraz HistoriaStanowisk z kolumną tekstową Stanowisko i kluczem obcym do Pracownik", "correct": false, "explain": "Niepoprawne (nie najlepsze) - stanowisko jest tu jedynie zwykłym polem tekstowym (varchar2) wewnątrz HistoriaStanowisk, a nie osobną encją powiązaną kluczem obcym. Ta sama nazwa stanowiska musiałaby być powtarzana jako tekst w każdym wierszu historii każdego pracownika, co jest niekontrolowaną redundancją i nie daje jednego, spójnego źródła prawdy o istniejących stanowiskach." },
   { "key": "b", "text": "Wariant b: Pracownik(Id PK, Imie, Nazwisko); HistoriaStanowisk(Pracownik PK+FK, Stanowisko PK+FK, Od_kiedy PK date, Do_kiedy date [null]); Stanowisko(Id PK, Nazwa)", "image": "images/q096-wariant-b.png", "imageAlt": "Diagram wariantu b: Pracownik, tabela asocjacyjna HistoriaStanowisk ze złożonym kluczem głównym (Pracownik, Stanowisko, Od_kiedy) oraz osobna tabela Stanowisko", "correct": true, "explain": "Poprawne - HistoriaStanowisk jest tabelą asocjacyjną wiele-do-wielu między Pracownik a osobną encją Stanowisko, ze złożonym kluczem głównym obejmującym pracownika, stanowisko i datę rozpoczęcia. Jeden pracownik może mieć dowolnie wiele wierszy historii (wiele stanowisk w karierze), a to samo stanowisko może wystąpić w wielu wierszach różnych pracowników jednocześnie, bez żadnej redundancji nazw stanowisk." },
   { "key": "c", "text": "Wariant c: Pracownik(Id PK, Imie, Nazwisko, HistoriaStanowisk FK); HistoriaStanowisk(Id PK, Od_kiedy, Do_kiedy, Stanowisko FK); Stanowisko(Id PK, Nazwa)", "image": "images/q096-wariant-c.png", "imageAlt": "Diagram wariantu c: Pracownik z pojedynczym kluczem obcym do HistoriaStanowisk, HistoriaStanowisk z kluczem obcym do Stanowisko", "correct": false, "explain": "Niepoprawne - klucz obcy HistoriaStanowisk znajduje się w tabeli Pracownik, więc każdy pracownik może wskazywać tylko na jeden wiersz HistoriaStanowisk naraz. Uniemożliwia to zapisanie wielu stanowisk zajmowanych przez tego samego pracownika w różnych okresach kariery, co wprost narusza wymaganie zadania." },
   { "key": "d", "text": "Wariant d: Stanowisko(Id PK, Nazwa); Pracownik(Id PK, Imie, Nazwisko, Od_kiedy, Do_kiedy, Stanowisko FK); HistoriaStanowisk(Id PK, Pracownik FK)", "image": "images/q096-wariant-d.png", "imageAlt": "Diagram wariantu d: Stanowisko, Pracownik z bieżącym stanowiskiem i datami oraz osobna tabela HistoriaStanowisk z kluczem obcym do Pracownik", "correct": false, "explain": "Niepoprawne - bieżące stanowisko wraz z datami (Od_kiedy, Do_kiedy) jest przechowywane bezpośrednio w tabeli Pracownik jako pojedyncza wartość, więc pracownik może mieć zapisane tylko jedno stanowisko naraz. Tabela HistoriaStanowisk zawiera jedynie klucz obcy do Pracownik, bez żadnych danych o stanowisku czy okresie, więc w rzeczywistości nie przechowuje historii wielu stanowisk w karierze." }
  ]
 },
 {
  "id": "Q097",
  "chapter": "G1",
  "chapterName": "Najnowszy zjazd",
  "question": "Jaka jest wartość logiczna wyrażenia TRUE OR NULL OR FALSE:",
  "topicTitle": "Logika trójwartościowa - OR z wartością NULL",
  "topicSummary": "W logice trójwartościowej SQL alternatywa (OR) jest prawdziwa, gdy choć jeden z argumentów ma wartość TRUE - i to niezależnie od tego, czy pozostałe są FALSE, czy NULL (UNKNOWN). Wartość NULL „psuje” wynik alternatywy tylko wtedy, gdy bez niej nie da się rozstrzygnąć prawdziwości wyrażenia (np. FALSE OR NULL daje NULL). Tu pierwszy człon to TRUE, więc całe wyrażenie jest prawdziwe.",
  "options": [
   { "key": "a", "text": "0", "correct": false, "explain": "Nie - wynikiem wyrażenia logicznego w SQL jest wartość logiczna (TRUE/FALSE/UNKNOWN), a nie liczba 0." },
   { "key": "b", "text": "True", "correct": true, "explain": "Tak - w alternatywie wystarczy jeden człon o wartości TRUE, aby całe wyrażenie było prawdziwe; TRUE OR NULL daje TRUE, a TRUE OR FALSE również TRUE." },
   { "key": "c", "text": "False", "correct": false, "explain": "Nie - obecność członu TRUE wyklucza wynik FALSE; alternatywa jest fałszywa dopiero wtedy, gdy wszystkie jej człony są fałszywe." },
   { "key": "d", "text": "Null", "correct": false, "explain": "Nie - NULL w alternatywie „zaraża” wynik tylko wtedy, gdy bez niego nie da się rozstrzygnąć wyniku (np. FALSE OR NULL); tutaj TRUE przesądza o wartości całego wyrażenia." }
  ]
 },
 {
  "id": "Q098",
  "chapter": "G1",
  "chapterName": "Najnowszy zjazd",
  "question": "Co będzie wynikiem realizacji poniższej instrukcji na niepustej relacji OSOBA(IdOsoba, Imie, Nazwisko, NrKonta): SELECT * FROM Osoba WHERE NrKonta = NrKonta OR NrKonta IS NULL;",
  "topicTitle": "Porównanie kolumny z samą sobą a wartości NULL",
  "topicSummary": "Warunek NrKonta = NrKonta jest prawdziwy dla każdego wiersza, w którym NrKonta ma jakąkolwiek wartość, ale dla wierszy z NULL daje UNKNOWN (bo NULL nie jest równy niczemu, nawet samemu sobie) - takie wiersze zostałyby odrzucone. Dopisanie alternatywy OR NrKonta IS NULL domyka lukę: wiersze z wartością wpadają przez pierwszy człon, a wiersze z NULL przez drugi. W efekcie warunek jest spełniony przez wszystkie wiersze tabeli.",
  "options": [
   { "key": "a", "text": "relacja Osoba (wszystkie rekordy)", "correct": true, "explain": "Tak - pierwszy człon warunku przepuszcza wszystkie wiersze z niepustym NrKonta, a drugi (IS NULL) dokładnie te, które pierwszy odrzucił; razem dają całą tabelę." },
   { "key": "b", "text": "relacja pusta", "correct": false, "explain": "Nie - wynik jest pusty tylko dla pustej tabeli, a z założenia relacja Osoba jest niepusta." },
   { "key": "c", "text": "instrukcja jest niepoprawna składniowo", "correct": false, "explain": "Nie - porównanie kolumny z samą sobą oraz operator IS NULL są w pełni poprawną składnią SQL." },
   { "key": "d", "text": "zawsze podzbiór relacji z rekordów, gdzie NrKonta ma wartość nie będącą NULL", "correct": false, "explain": "Nie - to opis wyniku samego warunku NrKonta = NrKonta; dodany człon OR NrKonta IS NULL dołącza właśnie wiersze z wartością NULL." }
  ]
 },
 {
  "id": "Q099",
  "chapter": "G1",
  "chapterName": "Najnowszy zjazd",
  "question": "Co będzie wynikiem realizacji poniższej instrukcji na niepustej relacji OSOBA(IdOsoba, Imie, Nazwisko, NrKonta): SELECT * FROM Osoba WHERE NrKonta = NrKonta OR NrKonta = NULL;",
  "topicTitle": "Dlaczego „= NULL” nigdy nie działa",
  "topicSummary": "Porównanie „= NULL” nigdy nie zwraca TRUE - daje zawsze UNKNOWN, dlatego do sprawdzania pustych wartości służy wyłącznie operator IS NULL. Drugi człon alternatywy jest więc bezużyteczny i cały warunek sprowadza się do NrKonta = NrKonta, czyli do wierszy, w których NrKonta nie jest NULL. Uwaga na słowo „zawsze”: wynik zależy od danych (jeśli żaden NrKonta nie jest NULL, będzie to cała tabela, jeśli wszystkie są NULL - relacja pusta), ale zawsze mieści się w zbiorze rekordów o niepustym NrKonta.",
  "options": [
   { "key": "a", "text": "relacja Osoba (wszystkie rekordy)", "correct": false, "explain": "Nie - wiersze z NrKonta o wartości NULL nie spełniają żadnego z dwóch członów warunku, więc nie zawsze otrzymamy całą tabelę." },
   { "key": "b", "text": "zawsze relacja pusta", "correct": false, "explain": "Nie - wiersze z niepustym NrKonta spełniają warunek NrKonta = NrKonta, więc wynik jest pusty tylko wtedy, gdy wszystkie wartości NrKonta są NULL." },
   { "key": "c", "text": "instrukcja jest niepoprawna składniowo", "correct": false, "explain": "Nie - zapis „= NULL” jest składniowo dopuszczalny (choć logicznie bezużyteczny), więc zapytanie się wykona." },
   { "key": "d", "text": "zawsze podzbiór relacji z rekordów, gdzie NrKonta ma wartość nie będącą NULL", "correct": true, "explain": "Tak - człon NrKonta = NULL zawsze daje UNKNOWN, więc realnie działa tylko NrKonta = NrKonta, a ten warunek przepuszcza dokładnie (a więc w szczególności co najwyżej) wiersze o niepustym NrKonta." }
  ]
 },
 {
  "id": "Q100",
  "chapter": "G1",
  "chapterName": "Najnowszy zjazd",
  "question": "Instrukcja DROP VIEW służy do:",
  "topicTitle": "DROP VIEW jako polecenie DDL",
  "topicSummary": "DROP VIEW to polecenie DDL usuwające definicję perspektywy (widoku) ze słownika bazy danych - same dane w tabelach źródłowych pozostają nietknięte, bo widok jest tylko zapamiętanym zapytaniem. Nie należy go mylić z poleceniami sterowania transakcją (COMMIT, ROLLBACK - TCL) ani z zarządzaniem uprawnieniami (GRANT, REVOKE - DCL).",
  "options": [
   { "key": "a", "text": "usuwania perspektywy (widoku)", "correct": true, "explain": "Tak - DROP VIEW usuwa definicję widoku; dane w tabelach, na których widok był zbudowany, pozostają nienaruszone." },
   { "key": "b", "text": "zakończenia transakcji", "correct": false, "explain": "Nie - do zatwierdzenia transakcji służy COMMIT (a do jej przerwania ROLLBACK)." },
   { "key": "c", "text": "wycofywania zmian w bazie danych", "correct": false, "explain": "Nie - zmiany wycofuje ROLLBACK; DROP VIEW sam jest poleceniem DDL, które w Oracle dodatkowo powoduje niejawne zatwierdzenie transakcji." },
   { "key": "d", "text": "odbierania uprawnień w bazie danych", "correct": false, "explain": "Nie - uprawnienia odbiera REVOKE, a nadaje GRANT." }
  ]
 },
 {
  "id": "Q101",
  "chapter": "G1",
  "chapterName": "Najnowszy zjazd",
  "question": "Dany jest schemat relacyjny R = (Ulica, Kod, Sklep, Numer), F = {Ulica → Kod; Ulica, Numer → Sklep}. W której postaci normalnej jest ten schemat?",
  "topicTitle": "Zależność częściowa od klucza łamie II postać normalną",
  "topicSummary": "Kluczem tego schematu jest para (Ulica, Numer) - jej domknięcie daje wszystkie atrybuty (Ulica → Kod, a Ulica,Numer → Sklep). Atrybuty nieklucza to Kod i Sklep. Zależność Ulica → Kod oznacza, że Kod zależy tylko od części klucza, czyli jest zależnością częściową - a to wprost łamie II postać normalną. Schemat pozostaje więc jedynie w I postaci normalnej (wartości atomowe), nie spełniając już 2NF, a tym bardziej 3NF ani BCNF.",
  "options": [
   { "key": "a", "text": "w I postaci normalnej", "correct": true, "explain": "Tak - wartości są atomowe, ale zależność częściowa Ulica → Kod (Kod zależy tylko od części klucza (Ulica, Numer)) uniemożliwia zaliczenie schematu do II postaci normalnej." },
   { "key": "b", "text": "w II postaci normalnej", "correct": false, "explain": "Nie - II postać normalna wymaga braku zależności atrybutów nieklucza od części klucza, a Kod zależy od samej Ulicy, czyli od części klucza (Ulica, Numer)." },
   { "key": "c", "text": "w III postaci normalnej", "correct": false, "explain": "Nie - skoro schemat nie spełnia nawet II postaci normalnej, nie może być w III postaci normalnej (postacie normalne są zagnieżdżone)." },
   { "key": "d", "text": "w postaci normalnej Boyce'a-Codda", "correct": false, "explain": "Nie - BCNF jest jeszcze silniejsza od 3NF; tu wyznacznik Ulica nie jest nadkluczem, więc warunek BCNF również jest złamany." }
  ]
 },
 {
  "id": "Q102",
  "chapter": "G1",
  "chapterName": "Najnowszy zjazd",
  "question": "Dany jest schemat relacyjny R = (Ulica, Kod, Sklep, Numer), F = {Ulica → Kod; Ulica, Numer → Sklep}. Schemat ten:",
  "topicTitle": "Relacja 3NF i BCNF przy zależności częściowej",
  "topicSummary": "Postacie normalne tworzą hierarchię: 1NF ⊃ 2NF ⊃ 3NF ⊃ BCNF. Jeśli schemat nie spełnia już II postaci normalnej (bo atrybut nieklucza Kod zależy od części klucza (Ulica, Numer)), to automatycznie nie spełnia też żadnej z mocniejszych postaci - ani III postaci normalnej, ani postaci normalnej Boyce'a-Codda. Aby to naprawić, wydziela się osobną relację (Ulica, Kod) i zostawia (Ulica, Numer, Sklep).",
  "options": [
   { "key": "a", "text": "jest w postaci normalnej Boyce'a-Codda", "correct": false, "explain": "Nie - w BCNF każdy nietrywialny wyznacznik musi być nadkluczem, a Ulica (wyznacznik dla Kod) nadkluczem nie jest." },
   { "key": "b", "text": "jest w III postaci normalnej, ale nie jest w postaci normalnej Boyce'a-Codda", "correct": false, "explain": "Nie - schemat nie jest nawet w II postaci normalnej, więc tym bardziej nie jest w III." },
   { "key": "c", "text": "jest w III postaci normalnej", "correct": false, "explain": "Nie - zależność częściowa Ulica → Kod wyklucza już II postać normalną, a więc i III." },
   { "key": "d", "text": "nie jest ani w III postaci normalnej, ani w postaci normalnej Boyce'a-Codda", "correct": true, "explain": "Tak - zależność częściowa Ulica → Kod łamie II postać normalną, a skoro tak, to schemat nie spełnia również żadnej z mocniejszych postaci (3NF, BCNF)." }
  ]
 },
 {
  "id": "Q103",
  "chapter": "G1",
  "chapterName": "Najnowszy zjazd",
  "question": "Wskazać poprawne zapytanie SQL (dialekt ORACLE) znajdujące departamenty zatrudniające powyżej trzech pracowników.",
  "topicTitle": "Kolejność GROUP BY i HAVING w dialekcie Oracle",
  "topicSummary": "Warunek na wynik funkcji agregującej zapisuje się w klauzuli HAVING - w klauzuli WHERE agregaty są niedozwolone, bo WHERE działa przed grupowaniem. Sama składnia Oracle dopuszcza przy tym obie kolejności: GROUP BY ... HAVING ... oraz HAVING ... GROUP BY ... (choć dokumentacja zaleca pierwszą, bardziej czytelną wersję i taka też jest wymagana w standardzie SQL). Niezależnie od kolejności obowiązuje zasada, że każda niezagregowana kolumna z listy SELECT musi wystąpić w GROUP BY.",
  "options": [
   { "key": "a", "text": "SELECT deptno, COUNT(*) FROM emp GROUP BY deptno HAVING COUNT(*) > 3;", "correct": true, "explain": "Poprawne - klasyczny, zalecany wzorzec: grupowanie po deptno i filtrowanie grup warunkiem HAVING COUNT(*) > 3." },
   { "key": "b", "text": "SELECT deptno, COUNT(*) FROM emp HAVING COUNT(*) > 3 GROUP BY deptno;", "correct": true, "explain": "Poprawne w Oracle - ten dialekt dopuszcza zapisanie klauzuli HAVING przed GROUP BY (kolejność nie zmienia wyniku), choć jest to zapis niezalecany i niezgodny ze standardem SQL." },
   { "key": "c", "text": "SELECT deptno, COUNT(*) FROM emp GROUP BY deptno WHERE COUNT(*) > 3;", "correct": false, "explain": "Niepoprawne - klauzula WHERE nie może wystąpić po GROUP BY, a dodatkowo nie wolno w niej używać funkcji agregujących." },
   { "key": "d", "text": "SELECT deptno, job, COUNT(*) FROM emp HAVING COUNT(*) > 3 GROUP BY deptno;", "correct": false, "explain": "Niepoprawne - kolumna job jest wypisana w SELECT bez agregacji, a nie występuje w GROUP BY (grupowanie jest tylko po deptno), co daje błąd „not a GROUP BY expression”." }
  ]
 },
 {
  "id": "Q104",
  "chapter": "G1",
  "chapterName": "Najnowszy zjazd",
  "question": "Pojęcie akcji referencyjnych dotyczy:",
  "topicTitle": "Akcje referencyjne (ON DELETE / ON UPDATE)",
  "topicSummary": "Akcje referencyjne to zdefiniowane przy kluczu obcym reguły ON DELETE / ON UPDATE (CASCADE, SET NULL, SET DEFAULT, RESTRICT, NO ACTION), które określają, jak SZBD ma zareagować na próbę usunięcia lub zmiany rekordu nadrzędnego, do którego odwołują się rekordy z tabeli powiązanej. Istotą pojęcia jest właśnie ta reakcja - a jednym z jej wariantów jest zablokowanie operacji (RESTRICT / NO ACTION), przy którym na rekordach powiązanych nie wykonuje się nic. Akcje referencyjne nie mają nic wspólnego z zależnościami funkcyjnymi ani z więzami sprawdzanymi w czasie kompilacji.",
  "options": [
   { "key": "a", "text": "reakcji SZBD na próbę usunięcia lub aktualizacji rekordów, do których odwołują się rekordy w tabelach powiązanych", "correct": true, "explain": "Tak - to podręcznikowa definicja akcji referencyjnych: opisują one reakcję systemu na próbę usunięcia lub zmiany rekordu nadrzędnego, do którego istnieją odwołania (kaskada, ustawienie NULL/wartości domyślnej albo zablokowanie operacji)." },
   { "key": "b", "text": "zależności wartości atrybutu od klucza", "correct": false, "explain": "Nie - to opis zależności funkcyjnej, czyli pojęcia z teorii normalizacji, a nie akcji referencyjnych." },
   { "key": "c", "text": "wykonywania operacji DELETE i UPDATE na powiązanych rekordach", "correct": false, "explain": "Nie jako definicja - wykonanie DELETE lub UPDATE na rekordach powiązanych to tylko część możliwych zachowań (ON DELETE CASCADE, ON DELETE SET NULL); równie dobrą akcją referencyjną jest RESTRICT / NO ACTION, które po prostu blokuje operację i niczego na rekordach powiązanych nie wykonuje. Uwaga: w oryginalnym kluczu egzaminacyjnym wskazano właśnie tę odpowiedź - warto znać oba ujęcia." },
   { "key": "d", "text": "więzów wartości zmiennej w czasie kompilacji", "correct": false, "explain": "Nie - akcje referencyjne działają w czasie wykonania operacji na danych, a nie na etapie kompilacji, i dotyczą powiązań między tabelami, a nie zmiennych." }
  ]
 },
 {
  "id": "Q105",
  "chapter": "G1",
  "chapterName": "Najnowszy zjazd",
  "question": "Dana jest tabela OSOBY(imie, nazwisko, zarobki). Które z następujących instrukcji są składniowo poprawnymi instrukcjami SQL w Oracle?",
  "topicTitle": "Apostrofy a cudzysłowy w Oracle",
  "topicSummary": "W Oracle apostrofy ('...') ograniczają literały tekstowe, natomiast cudzysłowy (\"...\") służą do zapisu identyfikatorów (nazw tabel i kolumn) z zachowaniem wielkości liter - dlatego \"Jan\" nie jest tekstem, tylko odwołaniem do nieistniejącej kolumny. Poza tym operator INTERSECT wymaga jedynie zgodnej liczby i typów kolumn (nazwy nie muszą się pokrywać), a funkcji agregujących nie wolno używać w klauzuli WHERE.",
  "options": [
   { "key": "a", "text": "INSERT INTO Osoby VALUES (\"Jan\",\"Kowalski\",2000);", "correct": false, "explain": "Niepoprawne - w Oracle cudzysłowy oznaczają identyfikatory, więc \"Jan\" i \"Kowalski\" są traktowane jako nazwy kolumn (które nie istnieją), a nie jako literały tekstowe; do tekstu służą apostrofy." },
   { "key": "b", "text": "SELECT imie, zarobki FROM Osoby INTERSECT SELECT nazwisko, zarobki FROM osoby;", "correct": true, "explain": "Poprawne - obie strony INTERSECT zwracają po dwie kolumny zgodnych typów (tekst i liczba); nazwy kolumn nie muszą być identyczne." },
   { "key": "c", "text": "INSERT INTO Osoby VALUES ('Jan','Kowalski',2000);", "correct": true, "explain": "Poprawne - literały tekstowe w apostrofach i liczba bez cudzysłowów, w kolejności zgodnej z definicją tabeli." },
   { "key": "d", "text": "SELECT imie, AVG(zarobki) FROM osoby WHERE AVG(zarobki) > 1000;", "correct": false, "explain": "Niepoprawne - funkcji agregującej nie wolno użyć w klauzuli WHERE (służy do tego HAVING), a dodatkowo brakuje klauzuli GROUP BY dla niezagregowanej kolumny imie." }
  ]
 },
 {
  "id": "Q106",
  "chapter": "G1",
  "chapterName": "Najnowszy zjazd",
  "question": "Zaznacz wszystkie zapytania, które będą się kompilować w dialekcie ORACLE (tabela emp).",
  "topicTitle": "Agregaty w HAVING i WHERE oraz zagnieżdżanie funkcji grupowych",
  "topicSummary": "W klauzuli HAVING wolno używać funkcji agregujących (także porównywać dwa różne agregaty tej samej grupy, np. MAX(sal) > AVG(sal)), natomiast w klauzuli WHERE - nigdy, bo WHERE filtruje wiersze przed grupowaniem. Osobną pułapką jest zagnieżdżanie funkcji grupowych: konstrukcja typu COUNT(*) > MAX(COUNT(*)) miesza poziomy agregacji (wartość dla pojedynczej grupy z wartością liczoną po wszystkich grupach) i nie jest dopuszczalna w HAVING.",
  "options": [
   { "key": "a", "text": "SELECT job, MAX(sal) FROM emp GROUP BY job HAVING MAX(sal) > AVG(sal);", "correct": true, "explain": "Poprawne - oba agregaty (MAX i AVG) są liczone w obrębie tej samej grupy job, a HAVING jest właściwym miejscem na warunek dotyczący agregatów." },
   { "key": "b", "text": "SELECT job, COUNT(*) FROM emp GROUP BY job HAVING COUNT(*) > MAX(COUNT(*));", "correct": false, "explain": "Niepoprawne - zagnieżdżenie MAX(COUNT(*)) daje wartość liczoną po wszystkich grupach i nie może być porównywane w HAVING z agregatem pojedynczej grupy (Oracle zgłasza błąd)." },
   { "key": "c", "text": "SELECT job, COUNT(*) FROM emp WHERE COUNT(*) > 2 GROUP BY job;", "correct": false, "explain": "Niepoprawne - w klauzuli WHERE nie wolno używać funkcji agregujących; warunek na COUNT(*) należy przenieść do HAVING." },
   { "key": "d", "text": "SELECT job, MAX(sal) FROM emp WHERE sal > 2000 GROUP BY job;", "correct": true, "explain": "Poprawne - WHERE filtruje pojedyncze wiersze (po zwykłej kolumnie sal) przed grupowaniem, a jedyna niezagregowana kolumna job występuje w GROUP BY." }
  ]
 },
 {
  "id": "Q107",
  "chapter": "G1",
  "chapterName": "Najnowszy zjazd",
  "question": "Które stwierdzenia dotyczące operatora MINUS w Oracle są prawdziwe?",
  "topicTitle": "Operator MINUS - różnica zbiorów i zgodność kolumn",
  "topicSummary": "MINUS zwraca wiersze występujące w wyniku pierwszego zapytania, a nieobecne w wyniku drugiego (różnica zbiorów), przy okazji usuwając duplikaty. Jak każdy operator zbiorowy (UNION, INTERSECT, MINUS) wymaga, aby oba zapytania zwracały tę samą liczbę kolumn o zgodnych typach danych - nazwy kolumn mogą się natomiast różnić, a nazwę wyniku wyznacza pierwsze zapytanie.",
  "options": [
   { "key": "a", "text": "MINUS zwraca wiersze z pierwszego zapytania, których nie ma w drugim", "correct": true, "explain": "Tak - to definicja różnicy zbiorów realizowanej przez MINUS (dodatkowo z usunięciem powtórzeń)." },
   { "key": "b", "text": "MINUS zwraca wiersze wspólne dla obu zapytań", "correct": false, "explain": "Nie - część wspólną zwraca INTERSECT, a MINUS jest wręcz jego przeciwieństwem." },
   { "key": "c", "text": "typy danych kolumn muszą być zgodne w obu zapytaniach", "correct": true, "explain": "Tak - operatory zbiorowe porównują wiersze kolumna po kolumnie, więc odpowiadające sobie kolumny muszą mieć zgodne typy danych." },
   { "key": "d", "text": "liczba kolumn w obu zapytaniach może się różnić", "correct": false, "explain": "Nie - liczba kolumn musi być identyczna w obu zapytaniach, inaczej Oracle zgłosi błąd niezgodności listy SELECT." }
  ]
 },
 {
  "id": "Q108",
  "chapter": "G1",
  "chapterName": "Najnowszy zjazd",
  "question": "Zapytanie SELECT * FROM Ksiazki WHERE LiczbaStron >= ANY (SELECT LiczbaStron FROM Ksiazki); zwraca w wyniku:",
  "topicTitle": "Operator >= ANY jako porównanie z minimum",
  "topicSummary": "Warunek z operatorem >= ANY jest spełniony, gdy badana wartość jest większa lub równa co najmniej jednej wartości zwróconej przez podzapytanie - czyli w praktyce sprowadza się do porównania z wartością minimalną (>= MIN(...)). Dla odróżnienia: >= ALL wymagałby, aby wartość była nie mniejsza od wszystkich, czyli od maksimum.",
  "options": [
   { "key": "a", "text": "książki, które mają więcej stron niż suma wszystkich stron w tabeli", "correct": false, "explain": "Nie - operator ANY porównuje z pojedynczymi wartościami z podzapytania, a nie z ich sumą (do tego trzeba by użyć SUM w podzapytaniu)." },
   { "key": "b", "text": "książki, które mają liczbę stron większą lub równą minimum liczby stron w tabeli", "correct": true, "explain": "Tak - to dokładny opis semantyki >= ANY: wystarczy, że wartość jest >= co najmniej jednej wartości ze zbioru, czyli >= wartości minimalnej." },
   { "key": "c", "text": "wszystkie rekordy z tabeli Książka", "correct": false, "explain": "Nie - choć przy braku wartości NULL każdy wiersz faktycznie spełni ten warunek (bo każda wartość jest >= minimum), nie jest to formalny opis działania operatora ANY, a przy wartościach NULL taki wiersz w ogóle nie trafi do wyniku." },
   { "key": "d", "text": "nie zwróci żadnych rekordów", "correct": false, "explain": "Nie - dla niepustej tabeli warunek spełni co najmniej wiersz o minimalnej liczbie stron (jest równy sam sobie)." }
  ]
 },
 {
  "id": "Q109",
  "chapter": "G1",
  "chapterName": "Najnowszy zjazd",
  "question": "Wskazać poprawne (w Oracle) zapytanie SQL znajdujące łączną kwotę przelewów w każdym dniu. Schematy: Konto(ID, Numer, Waluta), Przelew(ID, DataPrzelewu, Kwota, Konto_ID).",
  "topicTitle": "Agregacja „w każdym dniu” - SUM z GROUP BY",
  "topicSummary": "Sformułowanie „w każdym dniu” oznacza, że wynik ma zawierać po jednym wierszu na każdą datę - potrzebne jest więc grupowanie GROUP BY DataPrzelewu i agregat SUM(Kwota). Zapytanie bez GROUP BY i bez agregatu zwróci pojedyncze przelewy, a sam SUM bez GROUP BY - jedną łączną kwotę dla całej tabeli. Każda niezagregowana kolumna z listy SELECT musi przy tym wystąpić w GROUP BY.",
  "options": [
   { "key": "a", "text": "SELECT DataPrzelewu, Kwota FROM Przelew p JOIN Konto k ON k.ID = p.Konto_ID;", "correct": false, "explain": "Niepoprawne względem treści - zapytanie wypisuje pojedyncze przelewy, nie sumując ich w obrębie dnia." },
   { "key": "b", "text": "SELECT DataPrzelewu, SUM(kwota) FROM Przelew p JOIN Konto k ON k.ID = p.Konto_ID GROUP BY DataPrzelewu;", "correct": true, "explain": "Poprawne - grupowanie po dacie i SUM(Kwota) dają dokładnie łączną kwotę przelewów w każdym dniu, a jedyna niezagregowana kolumna występuje w GROUP BY." },
   { "key": "c", "text": "SELECT SUM(kwota) FROM Przelew p JOIN Konto k ON k.ID = p.Konto_ID;", "correct": false, "explain": "Niepoprawne względem treści - brak GROUP BY oznacza jedną sumę dla wszystkich przelewów łącznie, bez rozbicia na dni." },
   { "key": "d", "text": "SELECT Kwota FROM Przelew p JOIN Konto k ON k.ID = p.Konto_ID GROUP BY DataPrzelewu;", "correct": false, "explain": "Niepoprawne - kolumna Kwota jest wypisana bez agregacji, a nie występuje w GROUP BY, więc Oracle zgłosi błąd „not a GROUP BY expression”." }
  ]
 },
 {
  "id": "Q110",
  "chapter": "G1",
  "chapterName": "Najnowszy zjazd",
  "question": "Dana jest tabela Przelew(ID, DataPrzelewu, Kwota). Które z następujących instrukcji są poprawnymi instrukcjami SQL w Oracle?",
  "topicTitle": "HAVING bez GROUP BY a niezagregowane kolumny",
  "topicSummary": "Klauzula HAVING może wystąpić bez GROUP BY, ale wtedy całe zapytanie traktowane jest jako jedna grupa - w liście SELECT nie może się więc pojawić żadna niezagregowana kolumna. Sama kolejność klauzul GROUP BY i HAVING jest w Oracle dowolna (obie wersje się kompilują, choć zalecana jest kolejność GROUP BY ... HAVING ...). Zapytania bez agregacji, z aliasem tabeli i zwykłym warunkiem WHERE, są oczywiście poprawne.",
  "options": [
   { "key": "a", "text": "SELECT DataPrzelewu, SUM(Kwota) FROM Przelew HAVING SUM(Kwota) > 1000;", "correct": false, "explain": "Niepoprawne - bez GROUP BY całe zapytanie jest jedną grupą, więc niezagregowana kolumna DataPrzelewu nie może wystąpić na liście SELECT." },
   { "key": "b", "text": "SELECT DataPrzelewu, COUNT(*) FROM Przelew GROUP BY DataPrzelewu HAVING COUNT(*) > 3;", "correct": true, "explain": "Poprawne - wzorcowe grupowanie po dacie z filtrowaniem grup w HAVING; kolumna DataPrzelewu występuje w GROUP BY." },
   { "key": "c", "text": "SELECT DataPrzelewu, COUNT(*) FROM Przelew HAVING COUNT(*) > 3 GROUP BY DataPrzelewu;", "correct": true, "explain": "Poprawne w Oracle - dialekt ten dopuszcza zapis klauzuli HAVING przed GROUP BY; wynik jest identyczny jak w odpowiedzi B (choć taka kolejność jest niezalecana i niezgodna ze standardem SQL)." },
   { "key": "d", "text": "SELECT ID, DataPrzelewu, Kwota FROM Przelew p WHERE p.Kwota > 500;", "correct": true, "explain": "Poprawne - zwykłe zapytanie bez agregacji, z aliasem tabeli i warunkiem na kolumnie Kwota." }
  ]
 },
 {
  "id": "Q111",
  "chapter": "G1",
  "chapterName": "Najnowszy zjazd",
  "question": "Dane są dwie tabele Wizyta(ID, DataWizyty, CenaWizyty, Lekarz_ID) oraz Lekarz(ID, Nazwisko, Specjalizacja). Które z następujących instrukcji są poprawnymi instrukcjami SQL w Oracle?",
  "topicTitle": "Złączenia i niejednoznaczne nazwy kolumn",
  "topicSummary": "Złączenie można zapisać zarówno składnią „przecinkową” z warunkiem w WHERE, jak i jawnym JOIN ... ON - obie formy są poprawne. Kolumnę o nazwie występującej w obu tabelach (tu: ID) trzeba jednak zawsze kwalifikować nazwą lub aliasem tabeli, inaczej odwołanie jest niejednoznaczne. Trzeba też pamiętać, że funkcja SUM przyjmuje dokładnie jeden argument - do sumowania kilku kolumn używa się wyrażenia, np. SUM(a + b).",
  "options": [
   { "key": "a", "text": "SELECT w.ID, DataWizyty, CenaWizyty FROM Wizyta w, Lekarz l WHERE w.Lekarz_ID = l.ID;", "correct": true, "explain": "Poprawne - klasyczne złączenie w składni przecinkowej; kolumna ID jest zakwalifikowana aliasem (w.ID), a DataWizyty i CenaWizyty występują tylko w jednej tabeli." },
   { "key": "b", "text": "SELECT DataWizyty, Nazwisko AS NazwiskoLekarza FROM Wizyta JOIN Lekarz ON Wizyta.Lekarz_ID = Lekarz.ID;", "correct": true, "explain": "Poprawne - jawne złączenie JOIN ... ON z poprawnie zakwalifikowanymi kolumnami warunku oraz aliasem kolumny wynikowej." },
   { "key": "c", "text": "SELECT w.ID, SUM(CenaWizyty, Lekarz_ID) FROM Wizyta w, Lekarz l WHERE w.Lekarz_ID = l.ID;", "correct": false, "explain": "Niepoprawne - funkcja SUM przyjmuje tylko jeden argument (do zsumowania kolumn należałoby napisać SUM(CenaWizyty + Lekarz_ID)), a dodatkowo niezagregowana kolumna w.ID wymagałaby klauzuli GROUP BY." },
   { "key": "d", "text": "SELECT ID, DataWizyty, Nazwisko FROM Wizyta JOIN Lekarz ON ID = ID;", "correct": false, "explain": "Niepoprawne - kolumna ID występuje w obu tabelach, więc zarówno warunek ON ID = ID, jak i ID na liście SELECT są niejednoznaczne (błąd „column ambiguously defined”)." }
  ]
 },
 {
  "id": "Q132",
  "chapter": "G1",
  "chapterName": "Najnowszy zjazd",
  "question": "Dany jest schemat relacyjny R={Miasto, Ulica, Kod}, F = {Miasto,Ulica→Kod; Kod→Miasto}. W której postaci normalnej jest ten schemat (zaznacz wszystkie spełnione)?",
  "topicTitle": "Postacie normalne są zagnieżdżone - trzeba sprawdzić każdą z osobna",
  "topicSummary": "Jedynym kluczem jest tu para (Miasto, Ulica) - Kod zależy od całego klucza (bez naruszenia 2NF), a jedyna \"podejrzana\" zależność Kod→Miasto ma po prawej stronie atrybut PRIME (Miasto należy do klucza), więc nie łamie 3NF (3NF dopuszcza zależności nie-klucza do atrybutu klucza). BCNF jest jednak surowsza i wymaga, by KAŻDY wyznacznik był nadkluczem - a Kod nadkluczem nie jest (nie determinuje Ulicy), więc BCNF zostaje złamana. Schemat jest więc w I, II i III postaci normalnej, ale nie w BCNF.",
  "options": [
   { "key": "a", "text": "I postać normalna", "correct": true, "explain": "Tak - wartości są atomowe, co jest warunkiem koniecznym każdej wyższej postaci normalnej." },
   { "key": "b", "text": "II postać normalna", "correct": true, "explain": "Tak - jedyny atrybut nieklucza (Kod) zależy od całego klucza (Miasto,Ulica), bez zależności częściowej." },
   { "key": "c", "text": "III postać normalna", "correct": true, "explain": "Tak - zależność Kod→Miasto nie łamie 3NF, bo Miasto jest atrybutem klucza (prime), co 3NF wyraźnie dopuszcza." },
   { "key": "d", "text": "postać normalna Boyce'a-Codda", "correct": false, "explain": "Nie - BCNF wymaga, by każdy wyznacznik (tu również Kod) był nadkluczem, a Kod nie determinuje całego klucza (nie wyznacza Ulicy)." }
  ]
 },
 {
  "id": "Q169",
  "chapter": "G1",
  "chapterName": "Najnowszy zjazd",
  "question": "Jaka jest wartość logiczna wyrażenia (TRUE AND NULL) AND FALSE?",
  "topicTitle": "AND z FALSE zawsze daje FALSE, nawet obok NULL",
  "topicSummary": "Liczymy od środka: TRUE AND NULL daje Null (bo bez wartości Null nie da się rozstrzygnąć koniunkcji). Ale FALSE jest dla operatora AND wartością „pochłaniającą” - Null AND FALSE daje FALSE, niezależnie od tego, czym jest ta nieznana wartość Null (bo jeśli jeden z argumentów koniunkcji jest fałszywy, cała koniunkcja jest fałszywa, bez względu na resztę).",
  "options": [
   { "key": "a", "text": "0", "correct": false, "explain": "Nie - wynikiem wyrażenia logicznego jest wartość logiczna (False), a nie liczba." },
   { "key": "b", "text": "True", "correct": false, "explain": "Nie - obecność członu FALSE w koniunkcji wyklucza wynik TRUE." },
   { "key": "c", "text": "False", "correct": true, "explain": "Tak - TRUE AND NULL daje Null, a Null AND FALSE daje FALSE, bo FALSE jest wartością pochłaniającą dla AND (fałszywy człon zawsze daje fałszywą koniunkcję)." },
   { "key": "d", "text": "Null", "correct": false, "explain": "Nie - mimo że pośredni wynik (TRUE AND NULL) to Null, końcowe AND z FALSE rozstrzyga całość na FALSE." }
  ]
 },
 {
  "id": "Q170",
  "chapter": "G1",
  "chapterName": "Najnowszy zjazd",
  "question": "Relacja R ma atrybut a. Jaka liczba może być wynikiem wykonania instrukcji: SELECT COUNT(*) FROM R WHERE a <> a;",
  "topicTitle": "a <> a nigdy nie jest prawdziwe - także dla NULL",
  "topicSummary": "Warunek a <> a (różny od samego siebie) jest fałszywy dla każdej niepustej wartości (żadna wartość nie różni się sama od siebie), a dla wartości NULL porównanie <> również nie daje TRUE, tylko UNKNOWN (porównania z NULL nigdy nie są prawdziwe). Żaden wiersz nie spełnia więc tego warunku, niezależnie od danych w tabeli - wynik to zawsze 0.",
  "options": [
   { "key": "a", "text": "zawsze 0", "correct": true, "explain": "Tak - warunek a <> a nie jest prawdziwy dla żadnego wiersza: dla wartości nie-NULL jest fałszywy (bo wartość nie różni się sama od siebie), a dla NULL daje UNKNOWN, nigdy TRUE." },
   { "key": "b", "text": "1", "correct": false, "explain": "Nie - żaden wiersz nie spełnia tego warunku, więc wynik nie może wynosić 1." },
   { "key": "c", "text": "dowolna liczba całkowita", "correct": false, "explain": "Nie - warunek jest zawsze fałszywy (lub UNKNOWN dla NULL), więc wynik jest zawsze dokładnie 0, a nie dowolną liczbą." },
   { "key": "d", "text": "zawsze jest taka, jak liczebność relacji R", "correct": false, "explain": "Nie - to byłoby prawdą dla warunku zawsze spełnionego (np. a=a dla wartości nie-NULL), a nie dla warunku a<>a, który nigdy nie jest prawdziwy." }
  ]
 },
 {
  "id": "Q171",
  "chapter": "G1",
  "chapterName": "Najnowszy zjazd",
  "question": "Co może być wynikiem realizacji poniższej instrukcji na niepustej relacji OSOBA(IdOsoba, Imie, Nazwisko, NrKonta)? SELECT * FROM Osoba WHERE NrKonta <> NrKonta OR NULL = NrKonta;",
  "topicTitle": "Dwa fałszywe/nierozstrzygnięte człony dają zawsze relację pustą",
  "topicSummary": "Żaden z dwóch członów alternatywy nie jest nigdy prawdziwy: NrKonta <> NrKonta jest fałszywe dla wartości nie-NULL i nierozstrzygnięte (UNKNOWN) dla NULL, a NULL = NrKonta jest zawsze nierozstrzygnięte (porównanie z literałem NULL nigdy nie daje TRUE, niezależnie od wartości NrKonta). Alternatywa dwóch członów, z których żaden nigdy nie jest TRUE, sama nigdy nie jest TRUE - żaden wiersz nie przejdzie przez WHERE, więc wynikiem jest zawsze relacja pusta, bez względu na dane.",
  "options": [
   { "key": "a", "text": "relacja Osoba", "correct": false, "explain": "Nie - żaden wiersz nie spełnia tego warunku (oba człony alternatywy są zawsze fałszywe albo nierozstrzygnięte), więc wynik nie może być całą tabelą." },
   { "key": "b", "text": "relacja pusta", "correct": true, "explain": "Tak - NrKonta <> NrKonta nigdy nie jest TRUE, a NULL = NrKonta też nigdy nie jest TRUE (porównanie z literałem NULL zawsze daje UNKNOWN), więc warunek WHERE nigdy nie jest spełniony i wynikiem jest zawsze pusta relacja." },
   { "key": "c", "text": "instrukcja jest niepoprawna składniowo", "correct": false, "explain": "Nie - to w pełni poprawna składniowo instrukcja SQL, mimo że logicznie nigdy nic nie zwraca." },
   { "key": "d", "text": "zawsze zbiór rekordów, dla których NrKonta <> NrKonta", "correct": false, "explain": "Nie - taki zbiór jest zawsze pusty (żadna wartość nie jest różna sama od siebie), a drugi człon alternatywy (NULL = NrKonta) i tak nigdy niczego nie dodaje, więc cały wynik jest po prostu zawsze pusty." }
  ]
 },
 {
  "id": "Q172",
  "chapter": "G1",
  "chapterName": "Najnowszy zjazd",
  "question": "Dany jest schemat relacyjny R = {Student, Uczelnia, Adres, Klub}, F = {Student -> Uczelnia; Klub -> Adres; Uczelnia -> Adres}. Schemat ten:",
  "topicTitle": "Zależność częściowa Student→Uczelnia łamie już 2NF",
  "topicSummary": "Jedynym kluczem kandydującym jest tu (Student, Klub): Student wyznacza Uczelnię, a ta z kolei Adres (Uczelnia→Adres), natomiast Klub wyznacza Adres bezpośrednio (Klub→Adres) - razem obie kolumny domykają cały schemat, a żadna z nich osobno nie wystarcza. Atrybut nieklucza Uczelnia zależy jednak TYLKO od Studenta, czyli od właściwego podzbioru klucza (Student,Klub) - to zależność częściowa, łamiąca już II postać normalną, a więc tym bardziej III postać normalną i BCNF.",
  "options": [
   { "key": "a", "text": "jest w postaci normalnej Boyce'a-Codda", "correct": false, "explain": "Nie - skoro schemat nie spełnia nawet II postaci normalnej, nie może spełniać dużo silniejszej BCNF." },
   { "key": "b", "text": "jest w III postaci normalnej, ale nie jest w BCNF", "correct": false, "explain": "Nie - schemat nie spełnia nawet II postaci normalnej, więc tym bardziej nie spełnia III postaci normalnej." },
   { "key": "c", "text": "jest w III postaci normalnej", "correct": false, "explain": "Nie - zależność częściowa Student→Uczelnia (od części klucza (Student,Klub)) wyklucza już II postać normalną, a więc i III." },
   { "key": "d", "text": "nie jest ani w III postaci normalnej, ani w BCNF", "correct": true, "explain": "Tak - Uczelnia zależy tylko od Studenta, czyli od właściwego podzbioru klucza (Student,Klub), co jest zależnością częściową łamiącą już 2NF - a skoro tak, schemat nie spełnia też silniejszych 3NF ani BCNF." }
  ]
 },
 {
  "id": "Q173",
  "chapter": "G1",
  "chapterName": "Najnowszy zjazd",
  "question": "Encje LEK i RECEPTA (lek może być wypisywany na wielu receptach, obok innych leków) połączone są związkiem:",
  "topicTitle": "Recepta z wieloma lekami, lek na wielu receptach - związek wiele-do-wielu",
  "topicSummary": "Skoro dana recepta może obejmować wiele leków („obok innych leków”), a dany lek może być wypisywany na wielu różnych receptach, to związek między LEK a RECEPTA jest wiele-do-wielu. Taki związek nie da się zapisać samym kluczem obcym w żadnej z dwóch tabel - wymaga dodatkowej tabeli łączącej (asocjacyjnej) z kluczami obcymi do obu encji (np. z dawkowaniem jako dodatkowym atrybutem tej tabeli).",
  "options": [
   { "key": "a", "text": "jeden–wiele", "correct": false, "explain": "Nie - to pomijałoby fakt, że recepta może zawierać wiele różnych leków." },
   { "key": "b", "text": "wiele–jeden", "correct": false, "explain": "Nie - to pomijałoby fakt, że lek może występować na wielu różnych receptach." },
   { "key": "c", "text": "wiele–wiele", "correct": true, "explain": "Tak - lek może być na wielu receptach, a recepta może zawierać wiele leków, co jest definicją związku wiele-do-wielu." },
   { "key": "d", "text": "wymagającym dodatkowej tabeli łączącej", "correct": true, "explain": "Tak - związek wiele-do-wielu nie da się zapisać kluczem obcym w żadnej z dwóch tabel i wymaga osobnej tabeli asocjacyjnej łączącej LEK i RECEPTA." }
  ]
 },
 {
  "id": "Q174",
  "chapter": "G1",
  "chapterName": "Najnowszy zjazd",
  "question": "Dana jest tabela Osoby(Imie, Nazwisko, Zarobki). Które instrukcje są składniowo poprawnymi instrukcjami SQL w Oracle?",
  "topicTitle": "INSERT nie ma klauzuli WHERE",
  "topicSummary": "DELETE i UPDATE bez warunku (czy z nim) to standardowe, poprawne instrukcje - UPDATE bez WHERE po prostu zmienia wszystkie wiersze naraz, co jest składniowo dopuszczalne, choć rzadko zamierzone. Za to INSERT w ogóle nie ma klauzuli WHERE - wstawia dokładnie jeden, z góry określony wiersz, bez żadnego warunku, więc jej użycie jest błędem składniowym. SELECT bez FROM też jest niepoprawny, jeśli odwołuje się do kolumn tabeli.",
  "options": [
   { "key": "a", "text": "SELECT Osoby.Nazwisko, Osoby.Imie, Osoby.Zarobki WHERE Osoby.Zarobki > 1000;", "correct": false, "explain": "Niepoprawne - brakuje obowiązkowej klauzuli FROM Osoby, mimo że zapytanie odwołuje się do kolumn tej tabeli." },
   { "key": "b", "text": "INSERT INTO Osoby VALUES ('Jan', 'Kowalski', 2000) WHERE USER = 'KOWALSKI';", "correct": false, "explain": "Niepoprawne - INSERT nie posiada klauzuli WHERE; wstawia dokładnie jeden, ustalony wiersz bezwarunkowo." },
   { "key": "c", "text": "DELETE FROM Osoby WHERE Nazwisko = 'KOWALSKI';", "correct": true, "explain": "Poprawne - standardowe DELETE z warunkiem na jednej kolumnie." },
   { "key": "d", "text": "UPDATE Osoby SET Nazwisko = 'Zieliński';", "correct": true, "explain": "Poprawne, choć bez WHERE zmieni nazwisko WSZYSTKICH wierszy naraz - składniowo jest to jednak w pełni dopuszczalna instrukcja." }
  ]
 },
 {
  "id": "Q175",
  "chapter": "G1",
  "chapterName": "Najnowszy zjazd",
  "question": "Wskaż poprawne w Oracle zapytania znajdujące nazwiska pracowników, którzy mają pensję wyższą niż najgorzej zarabiający pracownik zatrudniony w DALLAS.",
  "topicTitle": "\"Wyższa niż najgorszy w DALLAS\" to > ANY albo > MIN",
  "topicSummary": "„Wyższa niż najgorzej zarabiający pracownik z Dallas” oznacza porównanie z minimalną pensją w tym dziale - da się to zapisać albo operatorem > ANY (podzapytanie) (prawdziwe, gdy wartość jest większa od co najmniej jednej wartości ze zbioru, czyli w praktyce od minimum), albo wprost przez > (SELECT MIN(sal) ...). Operator > ALL byłby zbyt restrykcyjny (wymagałby przebicia NAJLEPIEJ zarabiającego), a mieszanie zwykłej kolumny z funkcją agregującą w jednym warunku WHERE bez GROUP BY (sal = MIN(sal)) jest błędem składniowym.",
  "options": [
   { "key": "a", "text": "SELECT ename, sal FROM emp WHERE sal > ANY (SELECT sal FROM emp WHERE deptno = (SELECT deptno FROM dept WHERE loc = 'DALLAS'));", "correct": true, "explain": "Poprawne - operator > ANY sprowadza się do porównania z wartością minimalną w podzapytaniu, czyli dokładnie z najgorzej zarabiającym pracownikiem z Dallas." },
   { "key": "b", "text": "SELECT ename, sal FROM emp WHERE sal > ALL (SELECT sal FROM emp WHERE deptno = (SELECT deptno FROM dept WHERE loc = 'DALLAS'));", "correct": false, "explain": "Niepoprawne względem treści - operator > ALL wymagałby pensji wyższej od WSZYSTKICH pracowników z Dallas, czyli od najlepiej (nie najgorzej) zarabiającego." },
   { "key": "c", "text": "SELECT ename, sal FROM emp WHERE sal > (SELECT sal FROM emp INNER JOIN dept ON emp.deptno = dept.deptno WHERE loc = 'DALLAS' AND sal = MIN(sal));", "correct": false, "explain": "Niepoprawne - funkcji agregującej MIN nie wolno użyć bezpośrednio w warunku WHERE bez GROUP BY; to błąd składniowy (agregat nie może być mieszany ze zwykłą kolumną w tym kontekście)." },
   { "key": "d", "text": "SELECT ename, sal FROM emp WHERE sal > (SELECT MIN(sal) FROM emp INNER JOIN dept ON emp.deptno = dept.deptno WHERE loc = 'DALLAS');", "correct": true, "explain": "Poprawne - podzapytanie skalarne MIN(sal) po złączeniu z dept i filtrze na Dallas zwraca dokładnie najniższą pensję w tym dziale, z którą porównywana jest pensja pracownika." }
  ]
 },
 {
  "id": "Q176",
  "chapter": "G1",
  "chapterName": "Najnowszy zjazd",
  "question": "Które stwierdzenie jest prawdziwe dla związku identyfikującego?",
  "topicTitle": "Związek identyfikujący: klucz obcy wchodzi w skład klucza głównego po stronie \"wiele\"",
  "topicSummary": "Związek identyfikujący (identifying relationship) to taki, w którym encja po stronie „wiele” nie ma własnej, niezależnej tożsamości - jej klucz główny SKŁADA się (częściowo lub w całości) z klucza obcego wskazującego na encję nadrzędną („jeden”). W związku nieidentyfikującym klucz obcy jest za to zwykłą, osobną kolumną encji „wiele”, nie wchodzącą w skład jej klucza głównego.",
  "options": [
   { "key": "a", "text": "klucz obcy wchodzi w skład klucza głównego encji po stronie „jeden”", "correct": false, "explain": "Nie - to strona „jeden” jest źródłem klucza głównego, do którego odwołuje się klucz obcy; to nie ona go w sobie zawiera." },
   { "key": "b", "text": "klucz obcy nie wchodzi w skład klucza głównego encji po stronie „wiele”", "correct": false, "explain": "Nie - to opisuje związek NIEidentyfikujący, przeciwieństwo związku identyfikującego." },
   { "key": "c", "text": "klucz obcy wchodzi w skład klucza głównego encji po stronie „wiele”", "correct": true, "explain": "Tak - w związku identyfikującym encja „wiele” nie ma tożsamości niezależnej od encji nadrzędnej; jej klucz obcy do „jeden” jest (częścią) jej własnego klucza głównego." },
   { "key": "d", "text": "klucz obcy nie wchodzi w skład klucza głównego encji po stronie „jeden”, ale w encji po stronie „jeden” pojawia się kolumna klucza obcego", "correct": false, "explain": "Nie - klucz obcy w takim związku znajduje się w encji po stronie „wiele” (wskazując na „jeden”), a nie odwrotnie." }
  ]
 },
 {
  "id": "Q177",
  "chapter": "G1",
  "chapterName": "Najnowszy zjazd",
  "question": "Dana jest tabela Rezerwacja(RezerwacjaID, Data, LiczbaUczestników). Które instrukcje są poprawne składniowo w Oracle?",
  "topicTitle": "HAVING wymaga GROUP BY, gdy w SELECT jest niezagregowana kolumna",
  "topicSummary": "HAVING bez GROUP BY jest dopuszczalne tylko wtedy, gdy SELECT zawiera wyłącznie funkcje agregujące (traktuje całą tabelę jako jedną grupę) - tu jednak SELECT zawiera też niezagregowaną kolumnę Data, więc GROUP BY Data jest konieczne. Oracle dopuszcza przy tym zapisanie HAVING zarówno po, jak i przed GROUP BY. Zwykłe zapytanie bez agregacji, z aliasem tabeli i prostym warunkiem, jest oczywiście też poprawne.",
  "options": [
   { "key": "a", "text": "SELECT Data, AVG(LiczbaUczestników) FROM Rezerwacja HAVING AVG(LiczbaUczestników) > 10;", "correct": false, "explain": "Niepoprawne - brak GROUP BY, a SELECT zawiera niezagregowaną kolumnę Data obok agregatu AVG, co bez grupowania jest błędem." },
   { "key": "b", "text": "SELECT Data, AVG(LiczbaUczestników) FROM Rezerwacja GROUP BY Data HAVING AVG(LiczbaUczestników) > 10;", "correct": true, "explain": "Poprawne - standardowy wzorzec GROUP BY ... HAVING z warunkiem na średniej w grupie." },
   { "key": "c", "text": "SELECT Data, COUNT(*) FROM Rezerwacja HAVING COUNT(*) > 2 GROUP BY Data;", "correct": true, "explain": "Poprawne w Oracle - dialekt ten dopuszcza zapisanie HAVING przed GROUP BY, z tym samym wynikiem, co przy standardowej kolejności." },
   { "key": "d", "text": "SELECT Data, COUNT(*) FROM Rezerwacja GROUP BY Data HAVING COUNT(*) > 2;", "correct": true, "explain": "Poprawne - klasyczny, zalecany wzorzec GROUP BY ... HAVING COUNT(*) > 2." },
   { "key": "e", "text": "SELECT RezerwacjaID, Data, LiczbaUczestników FROM Rezerwacja r WHERE r.LiczbaUczestników > 3;", "correct": true, "explain": "Poprawne - zwykłe zapytanie bez agregacji, z aliasem tabeli i warunkiem na kolumnie LiczbaUczestników." }
  ]
 },
 {
  "id": "Q178",
  "chapter": "G1",
  "chapterName": "Najnowszy zjazd",
  "question": "Zaznacz wszystkie zapytania, które będą się kompilować w dialekcie Oracle (tabela emp).",
  "topicTitle": "Wyrażenia liczbowe w WHERE tak, gołe literały TRUE/FALSE - nie",
  "topicSummary": "Warunki oparte na wyrażeniach liczbowych (1=1, 1-1=0) są w SQL w pełni poprawne - to zwykłe porównania, tyle że o stałej, znanej z góry wartości logicznej (zawsze prawdziwe). Gołych literałów logicznych TRUE/FALSE nie da się jednak użyć bezpośrednio w klauzuli WHERE zapytania SQL (w odróżnieniu od PL/SQL, gdzie typ BOOLEAN istnieje) - próba taka kończy się błędem składniowym (przed Oracle 23c/23ai, gdzie SQL zyskało natywny typ logiczny).",
  "options": [
   { "key": "a", "text": "SELECT empno FROM emp WHERE 1 = 1;", "correct": true, "explain": "Poprawne - to zwykłe, zawsze prawdziwe porównanie liczbowe, w pełni dopuszczalne w WHERE." },
   { "key": "b", "text": "SELECT empno FROM emp WHERE 1 - 1 = 0;", "correct": true, "explain": "Poprawne - wyrażenie arytmetyczne porównywane z liczbą, zawsze prawdziwe, ale składniowo bez zarzutu." },
   { "key": "c", "text": "SELECT empno FROM emp WHERE TRUE AND FALSE;", "correct": false, "explain": "Niepoprawne - goły literał logiczny (TRUE/FALSE) nie jest standardowo dopuszczalny bezpośrednio w klauzuli WHERE zapytania SQL." },
   { "key": "d", "text": "SELECT empno FROM emp WHERE TRUE;", "correct": false, "explain": "Niepoprawne - z tego samego powodu: sam literał TRUE nie jest poprawnym warunkiem WHERE w klasycznym SQL Oracle." }
  ]
 },
 {
  "id": "Q179",
  "chapter": "G1",
  "chapterName": "Najnowszy zjazd",
  "question": "Wskaż poprawne zapytania znajdujące departamenty, w których suma zarobków przekracza 2000.",
  "topicTitle": "SUM(sal)>2000 w HAVING - i pułapka z kolumną job spoza GROUP BY",
  "topicSummary": "Warunek na sumę zarobków w grupie (SUM(sal) > 2000) musi trafić do HAVING, nie do WHERE. Dodatkową pułapką jest tu kolumna job na liście SELECT bez agregacji i bez obecności w GROUP BY deptno - taka kolumna jest niejednoznaczna (który job wyświetlić dla działu z wieloma stanowiskami?) i Oracle to odrzuci błędem. Oracle dopuszcza przy tym zapisanie HAVING zarówno po, jak i przed GROUP BY.",
  "options": [
   { "key": "a", "text": "SELECT deptno FROM emp GROUP BY deptno WHERE SUM(sal) > 2000;", "correct": false, "explain": "Niepoprawne - WHERE musi poprzedzać GROUP BY, a nie po nim występować, a dodatkowo agregat w WHERE jest niedozwolony." },
   { "key": "b", "text": "SELECT deptno, job, SUM(sal) FROM emp GROUP BY deptno HAVING SUM(sal) > 2000;", "correct": false, "explain": "Niepoprawne - kolumna job jest niezagregowana i nie występuje w GROUP BY (grupowanie jest tylko po deptno), co jest błędem „not a GROUP BY expression”." },
   { "key": "c", "text": "SELECT deptno, SUM(sal) FROM emp GROUP BY deptno HAVING SUM(sal) > 2000;", "correct": true, "explain": "Poprawne - klasyczny wzorzec GROUP BY ... HAVING SUM(sal) > 2000, bez żadnej niezagregowanej kolumny spoza GROUP BY." },
   { "key": "d", "text": "SELECT deptno FROM emp HAVING SUM(sal) > 2000 GROUP BY deptno;", "correct": true, "explain": "Poprawne w Oracle - ten dialekt dopuszcza zapisanie HAVING przed GROUP BY, z identycznym wynikiem co w odpowiedzi C." }
  ]
 },
 {
  "id": "Q180",
  "chapter": "G1",
  "chapterName": "Najnowszy zjazd",
  "question": "Zapytanie: SELECT e1.ename, e2.ename FROM emp e1 FULL OUTER JOIN emp e2 ON e1.mgr = e2.empno; zwraca w wyniku:",
  "topicTitle": "FULL OUTER JOIN łączy wszystkie trzy przypadki: dopasowanych, bez szefa i bez podwładnych",
  "topicSummary": "FULL OUTER JOIN zwraca: dopasowane pary (pracownik-szef, gdy e1.mgr=e2.empno), NIEdopasowane wiersze z lewej strony (pracownicy, których mgr nie pasuje do żadnego empno - np. osoba na szczycie hierarchii bez przełożonego, z NULL-em po stronie e2), oraz NIEdopasowane wiersze z prawej strony (osoby, które nigdy nie są dla nikogo szefem, czyli nie mają podwładnych - z NULL-em po stronie e1.ename). Zwykły INNER JOIN dałby tylko pierwszą z tych trzech grup.",
  "options": [
   { "key": "a", "text": "nazwiska pracowników z przypisanymi szefami", "correct": false, "explain": "Niepełne - to opisuje tylko dopasowaną część wyniku (odpowiednik INNER JOIN), pomijając wiersze bez dopasowania z obu stron, które też zwraca FULL OUTER JOIN." },
   { "key": "b", "text": "nazwiska pracowników bez podwładnych", "correct": false, "explain": "Niepełne - to tylko jedna z trzech grup wierszy zwracanych przez to zapytanie." },
   { "key": "c", "text": "nazwiska pracowników mających przypisanego szefa oraz tych, u których szef jest nieprzypisany (NULL)", "correct": false, "explain": "Niepełne - pomija trzecią grupę: menedżerów, którzy sami nie mają żadnych podwładnych (niedopasowane wiersze e2, z NULL po stronie e1.ename)." },
   { "key": "d", "text": "nazwiska pracowników z przypisanymi szefami, nazwiska pracowników bez przypisanego szefa oraz wartości NULL w miejscu nazwisk pracowników nieposiadających podwładnych", "correct": true, "explain": "Tak - to pełny, trzyczęściowy opis wyniku FULL OUTER JOIN: dopasowania, niedopasowane wiersze e1 (bez szefa) i niedopasowane wiersze e2 (menedżerowie bez podwładnych, z NULL w kolumnie e1.ename)." }
  ]
 },
 {
  "id": "Q181",
  "chapter": "G1",
  "chapterName": "Najnowszy zjazd",
  "question": "Co zwróci zapytanie Oracle: SELECT deptno FROM emp HAVING COUNT(*) > 10 GROUP BY deptno;",
  "topicTitle": "Kolejność HAVING/GROUP BY nie zmienia wyniku w Oracle",
  "topicSummary": "To zapytanie różni się od swojej „standardowej” wersji (GROUP BY deptno HAVING COUNT(*) > 10) wyłącznie kolejnością zapisu klauzul - a Oracle dopuszcza obie kolejności, dając identyczny wynik: numery działów zatrudniających więcej niż 10 pracowników.",
  "options": [
   { "key": "a", "text": "wszystkie działy", "correct": false, "explain": "Nie - HAVING COUNT(*) > 10 odfiltrowuje działy z co najwyżej 10 pracownikami, więc wynik to tylko część wszystkich działów." },
   { "key": "b", "text": "numery działów mających więcej niż 10 pracowników", "correct": true, "explain": "Tak - GROUP BY deptno grupuje pracowników według działu, a HAVING COUNT(*) > 10 zostawia tylko działy liczniejsze niż 10 osób." },
   { "key": "c", "text": "błąd składni", "correct": false, "explain": "Nie - Oracle dopuszcza zapisanie HAVING przed GROUP BY; to nie jest błąd składniowy." },
   { "key": "d", "text": "zawsze to samo, co: SELECT deptno FROM emp GROUP BY deptno HAVING COUNT(*) > 10;", "correct": true, "explain": "Tak - kolejność klauzul HAVING i GROUP BY nie wpływa na wynik w Oracle; obie wersje dają identyczną odpowiedź." }
  ]
 },
 {
  "id": "Q182",
  "chapter": "G1",
  "chapterName": "Najnowszy zjazd",
  "question": "Dane są tabele Przelew(ID, DataPrzelewu, Kwota, Konto_ID) i Konto(ID, Numer, Waluta). Które instrukcje nie zwrócą błędu w Oracle?",
  "topicTitle": "Iloczyn kartezjański i FULL OUTER JOIN nie są błędami składniowymi",
  "topicSummary": "Wszystkie cztery zapytania są poprawne składniowo, choć nie wszystkie są sensowne merytorycznie: zapytanie bez żadnego warunku złączenia (przecinkowy iloczyn kartezjański) się wykona, tylko da bezsensownie dużo wierszy; złączenie z warunkiem WHERE oraz FULL OUTER JOIN (nawet bez sensownego powiązania z kolumnami przelewu) też są poprawną składnią; a zapytanie z SUM i GROUP BY po dacie jest standardowym, prawidłowym wzorcem agregującym.",
  "options": [
   { "key": "a", "text": "SELECT * FROM Przelew, Konto;", "correct": true, "explain": "Poprawne (bez błędu) - to iloczyn kartezjański bez warunku złączenia; da bezsensownie dużo wierszy, ale nie jest błędem składniowym." },
   { "key": "b", "text": "SELECT p.*, k.* FROM Przelew p, Konto k WHERE p.Konto_ID = k.ID;", "correct": true, "explain": "Poprawne - standardowe złączenie w składni przecinkowej z warunkiem WHERE." },
   { "key": "c", "text": "SELECT DataPrzelewu, Kwota FROM Przelew p FULL OUTER JOIN Konto k ON k.ID = p.Konto_ID;", "correct": true, "explain": "Poprawne - FULL OUTER JOIN jest prawidłową składnią, niezależnie od tego, czy wynik jest tu merytorycznie przydatny." },
   { "key": "d", "text": "SELECT DataPrzelewu, SUM(Kwota) FROM Przelew GROUP BY DataPrzelewu;", "correct": true, "explain": "Poprawne - standardowy, prawidłowy wzorzec agregujący kwoty przelewów w obrębie każdej daty." }
  ]
 },
 {
  "id": "Q183",
  "chapter": "G1",
  "chapterName": "Najnowszy zjazd",
  "question": "Jaka jest wartość logiczna wyrażenia (TRUE AND NULL) OR FALSE?",
  "topicTitle": "AND daje Null, a Null OR FALSE zostaje przy Null",
  "topicSummary": "Najpierw liczymy nawias: TRUE AND NULL daje Null (bez wartości Null nie da się rozstrzygnąć koniunkcji). Potem Null OR FALSE - FALSE nie rozstrzyga alternatywy z nieznaną wartością (w przeciwieństwie do TRUE, które od razu dałoby TRUE), więc wynikiem całego wyrażenia pozostaje Null.",
  "options": [
   { "key": "a", "text": "0", "correct": false, "explain": "Nie - wynikiem wyrażenia logicznego jest wartość logiczna (Null), a nie liczba." },
   { "key": "b", "text": "True", "correct": false, "explain": "Nie - żaden fragment wyrażenia nie daje pewnego TRUE; FALSE po prawej stronie nie rozstrzyga alternatywy na TRUE." },
   { "key": "c", "text": "False", "correct": false, "explain": "Nie - FALSE otrzymalibyśmy tylko, gdyby oba człony alternatywy były fałszywe, a pierwszy człon (TRUE AND NULL) to Null, nie FALSE." },
   { "key": "d", "text": "Null", "correct": true, "explain": "Tak - TRUE AND NULL daje Null, a Null OR FALSE pozostaje przy Null, bo FALSE nie rozstrzyga alternatywy z nieznaną wartością." }
  ]
 },
 {
  "id": "Q184",
  "chapter": "G1",
  "chapterName": "Najnowszy zjazd",
  "question": "Encje WALUTA i PAŃSTWO (w państwie obowiązuje jedna waluta, która może obowiązywać również w innych państwach) połączone są związkiem:",
  "topicTitle": "Jedna waluta może obowiązywać w wielu państwach - związek jeden-do-wielu",
  "topicSummary": "„W państwie obowiązuje jedna waluta” oznacza, że z punktu widzenia PAŃSTWA związek jest jednoznaczny (każde państwo ma dokładnie jedną walutę, więc PAŃSTWO dostaje klucz obcy do WALUTA). „Waluta może obowiązywać w wielu państwach” oznacza z kolei, że z punktu widzenia WALUTY związek jest wieloznaczny (jedna waluta - wiele państw, jak np. euro w wielu krajach UE). Razem to klasyczny związek jeden-do-wielu: jedna waluta do wielu państw.",
  "options": [
   { "key": "a", "text": "wiele–jeden", "correct": false, "explain": "Nie - to odwrotny kierunek zapisu tego samego faktu; przyjęta w tej bazie konwencja (waluta jako strona „jeden”) to jeden-do-wielu, nie wiele-do-jeden." },
   { "key": "b", "text": "wiele–wiele", "correct": false, "explain": "Nie - gdyby państwo mogło mieć wiele walut naraz, byłby to związek wiele-do-wielu, ale treść zadania mówi wprost o JEDNEJ walucie na państwo." },
   { "key": "c", "text": "wymagającym dodatkowej tabeli łączącej", "correct": false, "explain": "Nie - związek jeden-do-wielu nie wymaga dodatkowej tabeli łączącej; wystarczy klucz obcy do WALUTA umieszczony bezpośrednio w tabeli PAŃSTWO." },
   { "key": "d", "text": "jeden–wiele", "correct": true, "explain": "Tak - jedna waluta może obowiązywać w wielu państwach, ale każde państwo ma dokładnie jedną walutę, co jest definicją związku jeden-do-wielu (klucz obcy do WALUTA w tabeli PAŃSTWO)." }
  ]
 },
 {
  "id": "Q185",
  "chapter": "G1",
  "chapterName": "Najnowszy zjazd",
  "question": "Baza ma przechowywać informację, jakie oprogramowanie jest zainstalowane w poszczególnych salach oraz do jakich przedmiotów jest potrzebne. Który schemat prawidłowo i bez redundancji modeluje zagadnienie?",
  "topicTitle": "Trzy realne rzeczy - trzy tabele, plus dwie tabele łączące dla dwóch niezależnych związków N:M",
  "topicSummary": "W zagadnieniu występują trzy niezależne \"rzeczy\" (sala, program, przedmiot), z których każda ma sens jako osobna encja z własnymi atrybutami (sala ma choćby liczbę komputerów, program - firmę i wersję, przedmiot - nazwę) - każda zasługuje więc na osobną tabelę, a nie na spłaszczenie do samej nazwy/numeru użytego jako tekst gdzie indziej. Instalacja oprogramowania w sali to jeden związek wiele-do-wielu (Sale_programy, z dodatkowym atrybutem ile_instalacji), a przydatność programu do przedmiotu to drugi, NIEZALEŻNY związek wiele-do-wielu (Przedmioty_programy) - żadnego z nich nie da się wycisnąć na jedną, wspólną tabelę bez utraty informacji lub redundancji.",
  "options": [
   { "key": "a", "text": "Sale(numer_sali, nazwa_programu, wersja, ile_instalacji); Programy(nazwa_programu, wersja, nazwa_przedmiotu)", "correct": false, "explain": "Niepoprawne - Sale miesza atrybuty sali z atrybutami zainstalowanego programu (redundancja przy wielu instalacjach w tej samej sali), a Programy dodatkowo dubluje nazwę przedmiotu przy każdym programie, zamiast osobnej tabeli Przedmioty." },
   { "key": "b", "text": "Programy(ID_PROGRAMU, firma, nazwa, wersja); Przedmioty(ID_PRZEDMIOTU, nazwa); Sale_programy(ID_SALI, ID_PROGRAMU, ile_instalacji); Przedmioty_programy(ID_PRZEDMIOTU, ID_PROGRAMU)", "correct": false, "explain": "Niepełne - brakuje osobnej tabeli Sale; ID_SALI jest tu używane wyłącznie jako identyfikator w Sale_programy, bez możliwości przechowania żadnych własnych atrybutów sali (np. liczby komputerów)." },
   { "key": "c", "text": "Programy(ID_PROGRAMU, firma, nazwa, wersja, nazwa_przedmiotu); Sale_programy(ID_SALI, ID_PROGRAMU, ile_instalacji)", "correct": false, "explain": "Niepoprawne - dołączenie nazwa_przedmiotu wprost do Programy zakłada, że program jest przypisany do JEDNEGO przedmiotu, a nie modeluje niezależnego związku wiele-do-wielu między programami a przedmiotami; brakuje też osobnej tabeli Sale." },
   { "key": "d", "text": "Sale(ID_SALI, numer, ile_komputerów); Programy(ID_PROGRAMU, firma, nazwa, wersja); Przedmioty(ID_PRZEDMIOTU, nazwa); Sale_programy(ID_SALI, ID_PROGRAMU, ile_instalacji); Przedmioty_programy(ID_PRZEDMIOTU, ID_PROGRAMU)", "correct": true, "explain": "Poprawne - wszystkie trzy realne encje (Sale, Programy, Przedmioty) mają osobne tabele z własnymi atrybutami, a oba niezależne związki wiele-do-wielu (sala-program i program-przedmiot) mają osobne tabele łączące, bez żadnej redundancji." }
  ]
 },
 {
  "id": "Q186",
  "chapter": "G1",
  "chapterName": "Najnowszy zjazd",
  "question": "Zdefiniowanie aliasu kolumny lub wyrażenia może pojawić się w klauzuli:",
  "topicTitle": "Alias definiuje się w SELECT (a używa dopiero w ORDER BY)",
  "topicSummary": "Alias kolumny lub wyrażenia (np. SELECT sal AS pensja) NADAJE się w klauzuli SELECT - to jedyne miejsce w zapytaniu, gdzie faktycznie się go definiuje. Można się do niego potem ODWOŁAĆ w klauzuli ORDER BY (bo wykonuje się jako ostatnia, po ustaleniu już listy wynikowej), ale WHERE, GROUP BY i HAVING działają logicznie PRZED obliczeniem listy SELECT, więc nie mogą używać aliasów tam zdefiniowanych - to jednak używanie już istniejącego aliasu, a nie jego definiowanie.",
  "options": [
   { "key": "a", "text": "ORDER BY", "correct": false, "explain": "Nie - w ORDER BY alias można co najwyżej WYKORZYSTAĆ (bo wykonuje się po SELECT), ale to nie tam się go definiuje." },
   { "key": "b", "text": "WHERE", "correct": false, "explain": "Nie - WHERE działa przed obliczeniem listy SELECT, więc nie może ani zdefiniować, ani nawet użyć aliasu tam nadanego." },
   { "key": "c", "text": "HAVING", "correct": false, "explain": "Nie - z tego samego powodu co WHERE; HAVING (poza rzadkimi wyjątkami) też nie operuje na aliasach z SELECT." },
   { "key": "d", "text": "SELECT", "correct": true, "explain": "Tak - alias kolumny lub wyrażenia definiuje się właśnie w klauzuli SELECT, np. SELECT sal AS pensja." }
  ]
 },
 {
  "id": "Q187",
  "chapter": "G1",
  "chapterName": "Najnowszy zjazd",
  "question": "Dane są tabele Osoby(Imie, Nazwisko, Zarobki, id_działu) oraz Działy(id_działu, Nazwa). Które instrukcje są poprawne w Oracle?",
  "topicTitle": "INNER/LEFT JOIN z aliasami - poprawne; DELETE z tabelą spoza FROM - błąd",
  "topicSummary": "Jawne INNER JOIN z aliasami tabel i odpowiednio zakwalifikowanymi kolumnami jest poprawną, standardową składnią. LEFT OUTER JOIN z warunkiem WHERE porównującym konkatenację kolumn do pustego stringa jest składniowo dopuszczalny (nawet jeśli logicznie nic nie zwróci, bo konkatenacja z NULL-em daje NULL, a nie pusty tekst). Za to DELETE nie ma klauzuli FROM z wieloma tabelami - odwołanie się w WHERE do tabeli Działy, która nigdzie nie występuje w samym poleceniu DELETE Osoby, jest błędem (nieznana/niezłączona tabela).",
  "options": [
   { "key": "a", "text": "SELECT * FROM Osoby, Działy, Osoby, Działy;", "correct": false, "explain": "Niepoprawne - gwiazdka * odwołuje się do kolumn wszystkich wystąpień tabel, a te same tabele (Osoby, Działy) powtórzone dwukrotnie bez aliasów dają niejednoznaczne nazwy kolumn w wyniku." },
   { "key": "b", "text": "SELECT Imie, Nazwisko, o.Zarobki, d.Nazwa FROM Osoby o INNER JOIN Działy d ON o.id_działu = d.id_działu;", "correct": true, "explain": "Poprawne - jawne INNER JOIN z aliasami (o, d) i poprawnie zakwalifikowanymi kolumnami zapytania." },
   { "key": "c", "text": "SELECT * FROM Osoby LEFT OUTER JOIN Działy ON Osoby.id_działu = Działy.id_działu WHERE Imie || Nazwisko || Zarobki || Nazwa = '';", "correct": true, "explain": "Poprawne składniowo - operator || (konkatenacja) na kolumnach różnych typów jest dopuszczalny; warunek praktycznie nigdy nie będzie spełniony (konkatenacja z NULL-em, np. z niedopasowanego LEFT JOIN, daje NULL, nie pusty string), ale to nie jest błąd składniowy." },
   { "key": "d", "text": "DELETE Osoby WHERE Działy.id_działu = 30;", "correct": false, "explain": "Niepoprawne - polecenie DELETE odwołuje się w WHERE do tabeli Działy, która nie występuje nigdzie w samym poleceniu DELETE Osoby (brak złączenia); Oracle zgłosi błąd nieznanej tabeli/kolumny." }
  ]
 },
 {
  "id": "Q188",
  "chapter": "G1",
  "chapterName": "Najnowszy zjazd",
  "question": "Dana jest tabela Atrakcja(ID int, Nazwa varchar2(32), Cena number(6,2), LiczbaMiejsc number(4)). Które instrukcje są składniowo poprawne w Oracle?",
  "topicTitle": "HAVING bez GROUP BY działa tylko przy czysto agregowanym SELECT",
  "topicSummary": "HAVING bez GROUP BY jest dopuszczalne wyłącznie wtedy, gdy lista SELECT zawiera SAME funkcje agregujące (bez żadnej „gołej” kolumny) - wtedy cała tabela jest traktowana jako jedna grupa. Mieszanie niezagregowanej kolumny (LiczbaMiejsc) z agregatem bez GROUP BY jest błędem, podobnie jak użycie w ORDER BY kolumny (Nazwa), która nie jest ani zagregowana, ani obecna w GROUP BY, przy zapytaniu zwracającym tylko zagregowane wartości.",
  "options": [
   { "key": "a", "text": "SELECT LiczbaMiejsc, AVG(Cena) FROM Atrakcja HAVING AVG(Cena) > 1000;", "correct": false, "explain": "Niepoprawne - brak GROUP BY, a SELECT zawiera niezagregowaną kolumnę LiczbaMiejsc obok agregatu AVG, co bez grupowania jest błędem." },
   { "key": "b", "text": "SELECT LiczbaMiejsc, AVG(Cena) FROM Atrakcja WHERE LiczbaMiejsc < 50 GROUP BY LiczbaMiejsc;", "correct": true, "explain": "Poprawne - filtrowanie pojedynczych wierszy w WHERE przed grupowaniem, a jedyna niezagregowana kolumna (LiczbaMiejsc) występuje w GROUP BY." },
   { "key": "c", "text": "SELECT MAX(Cena), MIN(Cena), COUNT(Cena) FROM Atrakcja ORDER BY Nazwa ASC;", "correct": false, "explain": "Niepoprawne - zapytanie zwraca jeden, zagregowany wiersz (bez GROUP BY), a ORDER BY próbuje sortować po niezagregowanej kolumnie Nazwa, która nie występuje w SELECT ani w GROUP BY - Oracle zgłosi błąd." },
   { "key": "d", "text": "SELECT AVG(Cena) FROM Atrakcja HAVING COUNT(*) > 100;", "correct": true, "explain": "Poprawne - SELECT zawiera wyłącznie funkcję agregującą (AVG), więc HAVING bez GROUP BY jest tu dopuszczalne - traktuje całą tabelę jako jedną grupę." }
  ]
 },
 {
  "id": "Q189",
  "chapter": "G1",
  "chapterName": "Najnowszy zjazd",
  "question": "Dane są tabele Lekarz(ID, Nazwisko, Specjalizacja) oraz Wizyta(ID, DataWizyty, CenaWizyty, Lekarz_ID). Wskaż poprawne zapytanie znajdujące łączną kwotę wizyt dla każdego lekarza.",
  "topicTitle": "\"Dla każdego lekarza\" wymaga GROUP BY Lekarz_ID i SUM",
  "topicSummary": "„Łączna kwota wizyt DLA KAŻDEGO lekarza” oznacza jeden wynikowy wiersz na lekarza z sumą jego wizyt - to wymaga zarówno funkcji SUM(CenaWizyty), jak i GROUP BY Lekarz_ID. Zapytanie bez agregacji zwróci pojedyncze wizyty, samo SUM bez GROUP BY da jedną łączną kwotę dla wszystkich lekarzy razem, a SELECT z niezagregowaną kolumną obok GROUP BY po innej kolumnie jest błędem składniowym.",
  "options": [
   { "key": "a", "text": "SELECT Lekarz_ID, CenaWizyty FROM Wizyta w JOIN Lekarz l ON l.ID = w.Lekarz_ID;", "correct": false, "explain": "Niepoprawne względem treści - zapytanie wypisuje pojedyncze wizyty, bez żadnego sumowania w obrębie lekarza." },
   { "key": "b", "text": "SELECT Lekarz_ID, SUM(CenaWizyty) FROM Wizyta w JOIN Lekarz l ON l.ID = w.Lekarz_ID GROUP BY Lekarz_ID;", "correct": true, "explain": "Poprawne - grupowanie po Lekarz_ID i SUM(CenaWizyty) dają dokładnie łączną kwotę wizyt każdego lekarza." },
   { "key": "c", "text": "SELECT SUM(CenaWizyty) FROM Wizyta w JOIN Lekarz l ON l.ID = w.Lekarz_ID;", "correct": false, "explain": "Niepoprawne względem treści - brak GROUP BY oznacza jedną, łączną sumę dla wszystkich lekarzy razem, bez podziału na poszczególnych lekarzy." },
   { "key": "d", "text": "SELECT CenaWizyty FROM Wizyta w JOIN Lekarz l ON l.ID = w.Lekarz_ID GROUP BY Lekarz_ID;", "correct": false, "explain": "Niepoprawne - kolumna CenaWizyty jest wypisana bez agregacji, a nie występuje w GROUP BY (grupowanie jest po Lekarz_ID), co jest błędem „not a GROUP BY expression”." }
  ]
 },
 {
  "id": "Q190",
  "chapter": "G1",
  "chapterName": "Najnowszy zjazd",
  "question": "Dane są tabele Rezerwacja(ID, DataRez, Spektakl_ID) i Spektakl(ID, Tytul, Teatr_ID). Wskaż poprawne zapytania wypisujące spektakle bez żadnej rezerwacji w 2024 roku.",
  "topicTitle": "Anty-złączenie: NOT IN, skorelowany NOT EXISTS albo COUNT=0",
  "topicSummary": "„Spektakle bez żadnej rezerwacji w 2024” to klasyczne zadanie na anty-złączenie (antijoin) - można je zapisać operatorem NOT IN na podzapytaniu z filtrem na rok, skorelowanym NOT EXISTS (sprawdzającym, że nie istnieje pasująca rezerwacja z 2024), albo poprzez policzenie takich rezerwacji (COUNT) i sprawdzenie, czy wynosi 0. Zapis „WHERE NOT IN (...)” bez podania KOLUMNY po lewej stronie jest błędem składniowym - NOT IN jest operatorem binarnym, wymagającym wartości do porównania.",
  "options": [
   { "key": "a", "text": "SELECT * FROM Spektakl WHERE ID NOT IN (SELECT Spektakl_ID FROM Rezerwacja WHERE EXTRACT(YEAR FROM DataRez) = 2024);", "correct": true, "explain": "Poprawne - NOT IN wyklucza spektakle, których ID pojawia się wśród Spektakl_ID rezerwacji z 2024 roku." },
   { "key": "b", "text": "SELECT * FROM Spektakl WHERE NOT EXISTS (SELECT 1 FROM Rezerwacja WHERE Spektakl.ID = Rezerwacja.Spektakl_ID AND EXTRACT(YEAR FROM DataRez) = 2024);", "correct": true, "explain": "Poprawne - skorelowane NOT EXISTS sprawdza, że dla danego spektaklu nie istnieje żadna pasująca rezerwacja z 2024 roku." },
   { "key": "c", "text": "SELECT * FROM Spektakl WHERE NOT IN (SELECT Spektakl_ID FROM Rezerwacja);", "correct": false, "explain": "Niepoprawne składniowo - operator NOT IN wymaga podania wartości/kolumny po lewej stronie (np. ID NOT IN (...)); sam „WHERE NOT IN (...)” bez tego jest błędem." },
   { "key": "d", "text": "SELECT * FROM Spektakl WHERE (SELECT COUNT(*) FROM Rezerwacja WHERE Spektakl.ID = Rezerwacja.Spektakl_ID AND EXTRACT(YEAR FROM DataRez) = 2024) = 0;", "correct": true, "explain": "Poprawne - skorelowane podzapytanie liczy rezerwacje danego spektaklu z 2024 roku; warunek = 0 wybiera te bez żadnej takiej rezerwacji." }
  ]
 },
 {
  "id": "Q191",
  "chapter": "G1",
  "chapterName": "Najnowszy zjazd",
  "question": "W bazie danych chcemy przechowywać informacje o fryzjerach, klientach i strzyżeniach. O strzyżeniu musimy wiedzieć, kto był strzyżony (klient) i kto przeprowadzał strzyżenie (fryzjer). Fryzjer może przeprowadzać wiele strzyżeń, tak samo klient może mieć wiele strzyżeń. Klient może strzyc się wielokrotnie u tego samego fryzjera. Wybierz najlepszy diagram spełniający wymienione wymagania.",
  "topicTitle": "Osoba jako baza dla dwóch ról: Fryzjer (podtyp) i Klient (zwykłe FK)",
  "topicSummary": "Fryzjer i Klient to obaj \"ludzie\", więc ich wspólne dane (Imię, Nazwisko) najlepiej trzymać raz, w jednej tabeli Osoba. Fryzjer ma dodatkowy atrybut (Pensja), więc zasługuje na osobną tabelę podtypu, dzielącą klucz główny z Osobą (PK+FK). Klient nie ma żadnych dodatkowych atrybutów ponad te z Osoby, więc nie potrzebuje własnej tabeli - w Strzyzenie wystarczy zwykła kolumna Klient jako FK wprost do Osoba.Id. Strzyzenie jako osobna tabela z własnym Id pozwala temu samemu klientowi strzyc się wielokrotnie u tego samego fryzjera (wiele wierszy o tej samej parze Fryzjer+Klient).",
  "options": [
   { "key": "a", "text": "Wariant A: Osoba(Id PK, Imie, Nazwisko, Strzyzenia FK do Strzyzenie); Fryzjer(Id PK+FK do Osoba, Pensja); Strzyzenie(Id PK, Czas, Fryzjer FK) - bez tabeli/kolumny dla klienta", "image": "images/q191-wariant-a.png", "imageAlt": "Diagram A: Wariant A: Osoba(Id PK, Imie, Nazwisko, Strzyzenia FK do Strzyzenie); Fryzjer(Id PK+FK do Osoba, Pensja); Strzyzenie(Id PK, Czas, Fryzjer FK)", "correct": false, "explain": "Niepoprawne - w tym diagramie w ogóle nie ma sposobu zapisania, KTO był klientem danego strzyżenia (Strzyzenie ma FK tylko do Fryzjer). Dodatkowo kolumna Strzyzenia w Osoba wskazuje na jedno, pojedyncze strzyżenie, co uniemożliwiłoby osobie posiadanie wielu strzyżeń." },
   { "key": "b", "text": "Wariant B: Osoba(Id PK, Imie, Nazwisko); Fryzjer(Id PK+FK do Osoba, Pensja); Strzyzenie(Id PK, Czas, Fryzjer FK, Klient FK do Osoba)", "image": "images/q191-wariant-b.png", "imageAlt": "Diagram B: Wariant B: Osoba(Id PK, Imie, Nazwisko); Fryzjer(Id PK+FK do Osoba, Pensja); Strzyzenie(Id PK, Czas, Fryzjer FK, Klient FK do Osoba)", "correct": true, "explain": "Poprawne - Fryzjer jest podtypem Osoby (dodatkowy atrybut Pensja), a Klient nie potrzebuje osobnej tabeli i jest po prostu zwykłym kluczem obcym do Osoba w tabeli Strzyzenie. Strzyzenie ma własny klucz Id, więc ten sam klient może strzyc się wielokrotnie u tego samego fryzjera (wiele wierszy z tą samą parą Fryzjer+Klient)." },
   { "key": "c", "text": "Wariant C: Fryzjer(Id PK, Imie, Nazwisko, Pensja) - bez wspólnej tabeli Osoba; Klient(Id PK+FK) - bez Imie/Nazwiska i bez jasnego celu FK; Strzyzenie(Id PK, Czas, Fryzjer FK, Klient FK)", "image": "images/q191-wariant-c.png", "imageAlt": "Diagram C: Wariant C: Fryzjer(Id PK, Imie, Nazwisko, Pensja)", "correct": false, "explain": "Niepoprawne - Klient nie ma żadnych własnych atrybutów (nawet Imienia/Nazwiska), a jego kolumna FK nie wskazuje na żadną sensowną, wspólną tabelę osób (nie ma tu w ogóle encji Osoba) - klient pozostaje właściwie niezdefiniowaną, pustą encją." },
   { "key": "d", "text": "Wariant D: Fryzjer(Id PK, Imie, Nazwisko, Pensja) i Klient(Id PK, Imie, Nazwisko) jako niezależne tabele (bez wspólnej Osoby); Strzyzenie(Id PK, Czas) bez żadnych FK; ListaStrzyzen(Klient PK+FK, Fryzjer PK+FK, Strzyzenie PK+FK) jako trójskładnikowa tabela łącząca", "image": "images/q191-wariant-d.png", "imageAlt": "Diagram D: Wariant D: Fryzjer(Id PK, Imie, Nazwisko, Pensja) i Klient(Id PK, Imie, Nazwisko) jako niezależne tabele (bez wspólnej Osoby); Strzyzenie(Id PK, Czas) bez żadnych FK; ListaStrzyzen(Klient PK+FK, Fryzjer PK+FK, Strzyzenie PK+FK) jako trójskładnikowa tabela łącząca", "correct": false, "explain": "Niepoprawne - Fryzjer i Klient niepotrzebnie duplikują Imię/Nazwisko zamiast dzielić wspólną tabelę Osoba, a samo Strzyzenie w ogóle nie ma odniesienia do klienta ani fryzjera - te powiązania są wymuszone dopiero przez nadmiarowo skomplikowaną, trójskładnikową tabelę ListaStrzyzen, co jest niepotrzebnym przekombinowaniem prostego związku 1 strzyżenie = 1 klient + 1 fryzjer." }
  ]
 },
 {
  "id": "Q192",
  "chapter": "G1",
  "chapterName": "Najnowszy zjazd",
  "question": "W bazie danych chcemy przechowywać informacje o głosowaniach, głosujących, kandydatach i głosach. Chcemy wiedzieć, kto głosował (głosujący) na kogo (kandydat) w danym głosowaniu. Głosujący może brać udział w wielu głosowaniach, ale może głosować tylko na jednego kandydata w danym głosowaniu. Głosowanie może mieć wielu kandydatów i każdy kandydat może otrzymać wiele głosów. Kandydat może głosować w głosowaniu, w którym jest kandydatem, i jeśli chce, to może nawet głosować sam na siebie. Wybierz najlepszy diagram spełniający wymienione wymagania.",
  "topicTitle": "Klucz główny (Głosowanie, Głosujący) wymusza jeden głos na osobę na głosowanie",
  "topicSummary": "Warunek „głosujący może głosować tylko na jednego kandydata w danym głosowaniu” trzeba wymusić strukturą bazy, a nie tylko opisem - najlepiej złożonym kluczem głównym (Głosowanie, Głosujący) w tabeli Głos, który uniemożliwia istnienie dwóch wierszy o tej samej parze głosowanie+głosujący (a więc i dwóch różnych kandydatów wybranych przez tę samą osobę w tym samym głosowaniu). Kandydat jest przy tym zwykłym, osobnym kluczem obcym do Osoba (nie częścią klucza głównego), co pozwala kandydatowi być jednocześnie głosującym, a nawet zagłosować na samego siebie - bo kandydat i głosujący to po prostu dwa niezależne odwołania do tej samej tabeli Osoba.",
  "options": [
   { "key": "a", "text": "Wariant A: Osoba(Id PK, Imie, Nazwisko); Glos(Glosowanie PK+FK, Glosujacy PK+FK, Kandydat FK do Osoba); Glosowanie(Id PK, Data)", "image": "images/q192-wariant-a.png", "imageAlt": "Diagram A: Wariant A: Osoba(Id PK, Imie, Nazwisko); Glos(Glosowanie PK+FK, Glosujacy PK+FK, Kandydat FK do Osoba); Glosowanie(Id PK, Data)", "correct": true, "explain": "Poprawne - złożony klucz główny (Glosowanie, Glosujacy) w tabeli Glos wprost wymusza co najwyżej jeden głos danej osoby w danym głosowaniu. Kandydat jest zwykłym FK do Osoba (nie częścią klucza), więc może nim być dowolna osoba - także sam głosujący, co pozwala na głosowanie na samego siebie." },
   { "key": "b", "text": "Wariant B: Osoba(Id PK, Imie, Nazwisko); Glos(Id PK, Glosowanie FK, Glosujacy FK, Kandydat FK); Glosowanie(Id PK, Data)", "image": "images/q192-wariant-b.png", "imageAlt": "Diagram B: Wariant B: Osoba(Id PK, Imie, Nazwisko); Glos(Id PK, Glosowanie FK, Glosujacy FK, Kandydat FK); Glosowanie(Id PK, Data)", "correct": false, "explain": "Niepoprawne - Glos ma własny, niezależny klucz Id zamiast złożonego klucza (Glosowanie, Glosujacy), więc nic nie stoi na przeszkodzie, by ta sama osoba oddała wiele głosów (na różnych kandydatów) w tym samym głosowaniu - to wprost łamie wymóg „tylko jeden kandydat w danym głosowaniu”." },
   { "key": "c", "text": "Wariant C: dodatkowa tabela ListaKandydatow(Id PK, Glosowanie FK, Osoba FK); Glos(Kandydat PK+FK, Glosujacy PK+FK, Glosowanie PK+FK) ze złożonym kluczem obejmującym też Kandydata", "image": "images/q192-wariant-c.png", "imageAlt": "Diagram C: Wariant C: dodatkowa tabela ListaKandydatow(Id PK, Glosowanie FK, Osoba FK); Glos(Kandydat PK+FK, Glosujacy PK+FK, Glosowanie PK+FK) ze złożonym kluczem obejmującym też Kandydata", "correct": false, "explain": "Niepoprawne - klucz główny tabeli Glos obejmuje aż trzy kolumny (Kandydat, Glosujacy, Glosowanie), więc wciąż dopuszcza wiele wierszy o tej samej parze Glosowanie+Glosujacy, różniących się tylko Kandydatem - to nie wymusza wymaganego „tylko jeden kandydat na głosującego w danym głosowaniu”." },
   { "key": "d", "text": "Wariant D: ta sama dodatkowa tabela ListaKandydatow co w wariancie C; Glos(Id PK, Kandydat FK, Glosujacy FK, Glosowanie FK) z własnym, niezależnym kluczem Id", "image": "images/q192-wariant-d.png", "imageAlt": "Diagram D: Wariant D: ta sama dodatkowa tabela ListaKandydatow co w wariancie C; Glos(Id PK, Kandydat FK, Glosujacy FK, Glosowanie FK) z własnym, niezależnym kluczem Id", "correct": false, "explain": "Niepoprawne - podobnie jak w wariancie B, własny klucz Id (zamiast złożonego z Glosowanie+Glosujacy) nie wymusza jednego głosu na osobę w danym głosowaniu; dodatkowo niepotrzebnie komplikuje schemat zbędną tabelą ListaKandydatow." }
  ]
 },
 {
  "id": "Q193",
  "chapter": "G1",
  "chapterName": "Najnowszy zjazd",
  "question": "W bazie danych chcemy przechowywać informacje o meczach i kibicach. Dany mecz może oglądać wielu kibiców, a dany kibic może oglądać wiele meczy. Chcemy mieć możliwość sprawdzenia ilości kibiców w danym meczu. Wybierz najlepszy diagram spełniający wymienione wymagania.",
  "topicTitle": "Związek wiele-do-wielu przez tabelę łączącą, liczba kibiców przez COUNT",
  "topicSummary": "„Mecz - wielu kibiców” i „kibic - wiele meczy” to klasyczny związek wiele-do-wielu, wymagający osobnej tabeli łączącej ze złożonym kluczem głównym z dwóch kluczy obcych (Kibic, Mecz). Liczbę kibiców na danym meczu wylicza się wtedy zapytaniem COUNT(*) po tabeli łączącej pogrupowanym po meczu - nie trzeba (i nie warto) trzymać tej liczby jako osobnej, redundantnej kolumny, bo taka kolumna łatwo wpadnie w niespójność z rzeczywistą liczbą wierszy.",
  "options": [
   { "key": "a", "text": "Wariant A: Kibic(Id PK, Imie, Nazwisko); ListaKibicow(Kibic PK+FK, Mecz PK+FK); Mecz(Id PK, Nazwa)", "image": "images/q193-wariant-a.png", "imageAlt": "Diagram A: Wariant A: Kibic(Id PK, Imie, Nazwisko); ListaKibicow(Kibic PK+FK, Mecz PK+FK); Mecz(Id PK, Nazwa)", "correct": true, "explain": "Poprawne - ListaKibicow to czysta tabela asocjacyjna N:M ze złożonym kluczem głównym (Kibic, Mecz), oba pola jako klucze obce. Liczbę kibiców na meczu wylicza się przez COUNT(*) pogrupowane po Mecz, bez żadnej redundancji." },
   { "key": "b", "text": "Wariant B: Kibic(Id PK, Imie, Nazwisko, Mecz FK - pojedynczy!); Mecz(Id PK, Nazwa); ListaKibicow(Id PK, Ilosc_kibicow, Mecz FK)", "image": "images/q193-wariant-b.png", "imageAlt": "Diagram B: Wariant B: Kibic(Id PK, Imie, Nazwisko, Mecz FK", "correct": false, "explain": "Niepoprawne - Kibic ma tylko JEDEN klucz obcy Mecz, więc może być powiązany z co najwyżej jednym meczem naraz, co łamie wymóg „kibic może oglądać wiele meczy”. Dodatkowo Ilosc_kibicow jest zbędnie przechowywaną, redundantną liczbą zamiast wyliczaną zapytaniem COUNT." },
   { "key": "c", "text": "Wariant C: Kibic(Id PK, Imie, Nazwisko); ListaKibicow(Id PK, Kibic FK - bez FK do Mecz!); Mecz(Id PK, Nazwa, Ilosc_kibicow, ListaKibicow FK - pojedynczy!)", "image": "images/q193-wariant-c.png", "imageAlt": "Diagram C: Wariant C: Kibic(Id PK, Imie, Nazwisko); ListaKibicow(Id PK, Kibic FK", "correct": false, "explain": "Niepoprawne - ListaKibicow nie ma w ogóle odniesienia do konkretnego meczu, a Mecz ma tylko jeden FK do ListaKibicow (a nie odwrotnie, jeden-do-wielu), więc struktura nie pozwala poprawnie powiązać wielu kibiców z wieloma meczami. Dodatkowo Ilosc_kibicow jest zbędną, redundantną kolumną." },
   { "key": "d", "text": "Wariant D: Kibic(Id PK, Imie, Nazwisko, Mecz FK - pojedynczy!); Mecz(Id PK, Nazwa, ListaKibicow FK - pojedynczy!); ListaKibicow(Id PK, Ilosc_kibicow)", "image": "images/q193-wariant-d.png", "imageAlt": "Diagram D: Wariant D: Kibic(Id PK, Imie, Nazwisko, Mecz FK", "correct": false, "explain": "Niepoprawne - Kibic ma tylko jeden FK do Mecz (nie może oglądać wielu meczy), a ListaKibicow w ogóle nie odwołuje się do konkretnych kibiców ani meczów - to po prostu osobna tabela z samą redundantną liczbą, oderwana od reszty modelu." }
  ]
 },
 {
  "id": "Q194",
  "chapter": "G1",
  "chapterName": "Najnowszy zjazd",
  "question": "W bazie danych chcemy przechowywać informacje o szczepionkach, pacjentach i szczepieniach. Dana szczepionka może być wykorzystana w wielu szczepieniach, ale dane szczepienie dotyczy tylko jednej szczepionki. Pacjent może mieć wiele szczepień i może być szczepiony tą samą szczepionką wielokrotnie. Wybierz najlepszy diagram spełniający wymienione wymagania.",
  "topicTitle": "Szczepienie jako zdarzenie: klucze obce do Szczepionki i Pacjenta, powtórzenia przez datę",
  "topicSummary": "Szczepienie jest zdarzeniem (jeden fakt: ten pacjent, tą szczepionką, tego dnia), więc powinno mieć własną tabelę z kluczami obcymi WPROST do Szczepionka i do Pacjent - nigdy odwrotnie (Szczepionka czy Pacjent wskazujący na pojedyncze Szczepienie), bo to uniemożliwiłoby wielokrotne użycie tej samej szczepionki czy wielokrotne szczepienie tego samego pacjenta. Żeby ten sam pacjent mógł przyjąć tę samą szczepionkę więcej niż raz, klucz Szczepienia musi dopuszczać powtórzenie pary (Szczepionka, Pacjent) - najprościej przez włączenie Daty do klucza głównego (różne daty = różne, odrębne szczepienia).",
  "options": [
   { "key": "a", "text": "Wariant A: Szczepionka(Id PK, Nazwa); Szczepienie(Szczepionka PK+FK, Pacjent PK+FK, Data PK); Pacjent(Id PK, Imie, Nazwisko)", "image": "images/q194-wariant-a.png", "imageAlt": "Diagram A: Wariant A: Szczepionka(Id PK, Nazwa); Szczepienie(Szczepionka PK+FK, Pacjent PK+FK, Data PK); Pacjent(Id PK, Imie, Nazwisko)", "correct": true, "explain": "Poprawne - Szczepienie ma klucze obce wprost do Szczepionka i Pacjent, więc jedna szczepionka może wystąpić w wielu szczepieniach, a pacjent może mieć wiele szczepień. Data jako część klucza głównego pozwala temu samemu pacjentowi przyjąć tę samą szczepionkę wielokrotnie (w różnych terminach), bez naruszania unikalności klucza." },
   { "key": "b", "text": "Wariant B: Szczepionka(Id PK, Nazwa); Szczepienie(Id PK, Data, Szczepionka FK); Pacjent(Id PK, Imie, Nazwisko, Szczepienie FK - pojedynczy!)", "image": "images/q194-wariant-b.png", "imageAlt": "Diagram B: Wariant B: Szczepionka(Id PK, Nazwa); Szczepienie(Id PK, Data, Szczepionka FK); Pacjent(Id PK, Imie, Nazwisko, Szczepienie FK", "correct": false, "explain": "Niepoprawne - Pacjent ma tylko JEDEN klucz obcy do Szczepienie, co pozwala mu być powiązanym z co najwyżej jednym szczepieniem naraz, łamiąc wymóg „pacjent może mieć wiele szczepień”." },
   { "key": "c", "text": "Wariant C: Szczepienie(Id PK, Data) - bez żadnych FK; Szczepionka(Id PK, Nazwa, Szczepienie FK - pojedynczy!); Pacjent(Id PK, Imie, Nazwisko, Szczepionka FK - pojedynczy!)", "image": "images/q194-wariant-c.png", "imageAlt": "Diagram C: Wariant C: Szczepienie(Id PK, Data)", "correct": false, "explain": "Niepoprawne - kierunki kluczy obcych są odwrócone: Szczepionka wskazuje na jedno konkretne Szczepienie (a powinna móc występować w wielu), a Pacjent wskazuje wprost na jedną Szczepionkę z pominięciem Szczepienia, więc pacjent mógłby mieć zapisaną tylko jedną szczepionkę w ogóle, a samo Szczepienie w ogóle nie jest z niczym powiązane." },
   { "key": "d", "text": "Wariant D: Szczepienie(Id PK, Data, Szczepionka FK); Szczepionka(Id PK, Nazwa, Pacjent FK - pojedynczy!); Pacjent(Id PK, Imie, Nazwisko) - bez żadnego FK do Szczepienia", "image": "images/q194-wariant-d.png", "imageAlt": "Diagram D: Wariant D: Szczepienie(Id PK, Data, Szczepionka FK); Szczepionka(Id PK, Nazwa, Pacjent FK", "correct": false, "explain": "Niepoprawne - Szczepionka ma FK do Pacjent, co błędnie przypisywałoby każdy rodzaj szczepionki do jednego, konkretnego pacjenta, zamiast pozwalać jej być używaną u wielu różnych pacjentów; Pacjent nie ma też żadnego bezpośredniego powiązania ze Szczepieniem." }
  ]
 },
 {
  "id": "Q195",
  "chapter": "G1",
  "chapterName": "Najnowszy zjazd",
  "question": "Atrybutowi encji w relacyjnej bazie danych odpowiada:",
  "topicTitle": "Atrybut to kolumna, nie wiersz ani indeks",
  "topicSummary": "Atrybut encji to pojedyncza cecha (np. imię, data urodzenia) - w modelu relacyjnym odpowiada jej kolumna tabeli reprezentującej tę encję. Cała tabela odpowiada samej encji (nie pojedynczemu atrybutowi), indeks jest strukturą pomocniczą przyspieszającą wyszukiwanie, a typ danych opisuje jedynie dziedzinę wartości kolumny, nie sam atrybut.",
  "options": [
   { "key": "a", "text": "kolumna w tabeli", "correct": true, "explain": "Tak - pojedynczy atrybut encji jest reprezentowany jako kolumna w odpowiadającej jej tabeli." },
   { "key": "b", "text": "tabela", "correct": false, "explain": "Nie - to encji jako całości (nie pojedynczemu atrybutowi) odpowiada cała tabela." },
   { "key": "c", "text": "indeks w tabeli", "correct": false, "explain": "Nie - indeks jest opcjonalną strukturą przyspieszającą wyszukiwanie, a nie reprezentacją atrybutu." },
   { "key": "d", "text": "typ danych tabeli", "correct": false, "explain": "Nie - typ danych opisuje jedynie dopuszczalne wartości kolumny (np. VARCHAR2, NUMBER), a nie sam atrybut." }
  ]
 },
 {
  "id": "Q196",
  "chapter": "G1",
  "chapterName": "Najnowszy zjazd",
  "question": "Instrukcja GRANT służy do:",
  "topicTitle": "GRANT nadaje uprawnienia - nic więcej",
  "topicSummary": "GRANT (polecenie DCL) nadaje uprawnienia w bazie danych - to jego jedyne zadanie. Nie ma nic wspólnego z zatwierdzaniem zmian (COMMIT), modyfikacją danych (UPDATE) ani z rozpoczynaniem transakcji (transakcja zaczyna się niejawnie wraz z pierwszą instrukcją modyfikującą dane).",
  "options": [
   { "key": "a", "text": "przyznawania uprawnień w bazie danych", "correct": true, "explain": "Tak - GRANT nadaje uprawnienia użytkownikom lub rolom do wykonywania operacji na obiektach bazy." },
   { "key": "b", "text": "zatwierdzania zmian w bazie danych", "correct": false, "explain": "Nie - zmiany zatwierdza COMMIT, nie GRANT." },
   { "key": "c", "text": "aktualizacji rekordów w bazie danych", "correct": false, "explain": "Nie - rekordy aktualizuje UPDATE." },
   { "key": "d", "text": "rozpoczęcia transakcji", "correct": false, "explain": "Nie - GRANT nie służy do rozpoczynania transakcji; w Oracle transakcja zaczyna się niejawnie przy pierwszej instrukcji modyfikującej dane." }
  ]
 },
 {
  "id": "Q197",
  "chapter": "G1",
  "chapterName": "Najnowszy zjazd",
  "question": "Baza ma przechowywać informacje o umiejętnościach, przedmiotach uczących tych umiejętności i książkach, w których umiejętności są opisane. Który schemat prawidłowo i bez redundancji modeluje zagadnienie?",
  "topicTitle": "Trzy realne rzeczy - trzy tabele, plus osobne tabele łączące dla dwóch niezależnych związków",
  "topicSummary": "Umiejętność, przedmiot i książka to trzy niezależne encje, z których każda zasługuje na osobną tabelę z własnymi atrybutami - spłaszczenie ich do jednej tabeli (jak w wariancie A) albo dopisywanie ISBN-u i numerów stron wprost do Umiejętności (jak w B) łamie normalizację. Umiejętność może być opisana w książce (związek N:M, wymaga tabeli łączącej z numerami stron) i może być uczona na wielu przedmiotach (drugi, NIEZALEŻNY związek N:M, wymaga OSOBNEJ tabeli łączącej) - żadnego z tych dwóch związków nie da się wycisnąć na ten sam mechanizm bez utraty informacji.",
  "options": [
   { "key": "a", "text": "Umiejętności(umiejętność, przedmiot, książka)", "correct": false, "explain": "Niepoprawne - jedna, spłaszczona tabela nie pozwala umiejętności być opisanej w wielu książkach ani uczonej na wielu przedmiotach bez powtarzania całego wiersza (redundancja)." },
   { "key": "b", "text": "Przedmioty(ID_PRZEDMIOTU, nazwa, semestr); Książki(ISBN, tytuł, autorzy); Umiejętności(ID_UMIEJĘTNOŚCI, ID_PRZEDMIOTU, nazwa, opis, isbn, od_strony, do_strony)", "correct": false, "explain": "Niepoprawne - Umiejętności ma wprost wbudowane ID_PRZEDMIOTU oraz isbn/od_strony/do_strony, co ogranicza umiejętność do JEDNEGO przedmiotu i JEDNEJ książki, łamiąc wymóg związków wiele-do-wielu." },
   { "key": "c", "text": "Przedmioty(ID_PRZEDMIOTU, nazwa, semestr); Książki(ISBN, tytuł); Umiejętności(ID_UMIEJĘTNOŚCI, nazwa, opis); Opis(ID_UMIEJĘTNOŚCI, ISBN, OD_STRONY, do_strony); Uczy(ID_UMIEJĘTNOŚCI, ID_PRZEDMIOTU)", "correct": true, "explain": "Poprawne - dwie osobne tabele łączące: Opis (umiejętność-książka, ze stronami) i Uczy (umiejętność-przedmiot) poprawnie modelują oba, niezależne związki wiele-do-wielu, bez żadnej redundancji." },
   { "key": "d", "text": "Przedmioty(ID_PRZEDMIOTU, nazwa, semestr); Egzemplarze_książek(SYGNATURA, tytuł, autorzy, nr_półki); Umiejętności(ID_UMIEJĘTNOŚCI, nazwa, opis); Opis(ID_UMIEJĘTNOŚCI, sygnatura, od_strony, do_strony)", "correct": false, "explain": "Niepoprawne - brakuje jakiejkolwiek tabeli łączącej Umiejętności z Przedmiotami, więc nie da się zapisać, na jakim przedmiocie dana umiejętność jest uczona." }
  ]
 },
 {
  "id": "Q198",
  "chapter": "G1",
  "chapterName": "Najnowszy zjazd",
  "question": "Relacja R ma atrybut a. Jaka liczba może być wynikiem: SELECT COUNT(*) FROM R WHERE a = a;",
  "topicTitle": "Wynik zależy od danych: od 0 (same NULL-e) do liczebności R (brak NULL-i)",
  "topicSummary": "Warunek a=a jest prawdziwy dla każdego wiersza z wartością nie-NULL (wartość jest równa sama sobie) i nierozstrzygnięty (UNKNOWN) dla wierszy z NULL (NULL nigdy nie jest równe niczemu, nawet samemu sobie). Wynik COUNT(*) jest więc liczbą wierszy z niepustym a - może to być zarówno 0 (gdy wszystkie wartości a są NULL), jak i dowolna inna konkretna liczba nie większa niż liczebność R (np. 2, jeśli akurat tyle wierszy ma niepuste a) - ale nigdy więcej niż liczebność całej relacji.",
  "options": [
   { "key": "a", "text": "0", "correct": true, "explain": "Tak - jeśli wszystkie wartości atrybutu a są NULL, żaden wiersz nie spełni warunku a=a i wynik wyniesie 0." },
   { "key": "b", "text": "2", "correct": true, "explain": "Tak - to tylko jeden z możliwych, konkretnych wyników: jeśli dokładnie dwa wiersze mają niepustą wartość a, COUNT(*) zwróci 2." },
   { "key": "c", "text": "dowolna liczba całkowita", "correct": false, "explain": "Nie - wynik nie może być ujemny ani większy od liczebności relacji R, więc nie jest to \"dowolna\" liczba całkowita, tylko liczba z przedziału od 0 do liczebności R." },
   { "key": "d", "text": "zawsze jest taka, jak liczebność relacji R", "correct": false, "explain": "Nie - to prawda tylko wtedy, gdy żadna wartość a nie jest NULL; przy choćby jednym NULL-u wynik będzie mniejszy." }
  ]
 },
 {
  "id": "Q199",
  "chapter": "G1",
  "chapterName": "Najnowszy zjazd",
  "question": "Dany jest schemat: R = {Miasto, Ulica, Kod, Poczta}, F = {Miasto,Ulica -> Kod; Kod -> Miasto; Kod -> Poczta}. Schemat ten:",
  "topicTitle": "Druga zależność funkcyjna tworzy drugi klucz kandydujący - i psuje 2NF",
  "topicSummary": "Na pierwszy rzut oka jedynym kluczem wydaje się (Miasto,Ulica), ale zależność Kod→Miasto sprawia, że (Kod,Ulica) TAKŻE jest kluczem kandydującym (Kod→Miasto,Poczta, a razem z Ulicą domyka wszystkie atrybuty). Względem tego drugiego klucza zależność Kod→Poczta jest już zależnością CZĘŚCIOWĄ (Poczta zależy tylko od Kod, właściwego podzbioru klucza (Kod,Ulica)) - to łamie już II postać normalną, a więc tym bardziej III i BCNF. Schemat jest więc tylko w I postaci normalnej.",
  "options": [
   { "key": "a", "text": "jest w postaci normalnej Boyce'a-Codda", "correct": false, "explain": "Nie - skoro schemat nie spełnia nawet II postaci normalnej, nie może spełniać znacznie silniejszej BCNF." },
   { "key": "b", "text": "jest w III postaci normalnej, ale nie w BCNF", "correct": false, "explain": "Nie - schemat nie spełnia nawet II postaci normalnej, więc tym bardziej nie spełnia III." },
   { "key": "c", "text": "jest w III postaci normalnej", "correct": false, "explain": "Nie - zależność częściowa Kod→Poczta (względem klucza (Kod,Ulica)) wyklucza już II postać normalną, a więc i III." },
   { "key": "d", "text": "nie jest ani w II postaci normalnej, ani w BCNF", "correct": true, "explain": "Tak - istnienie drugiego klucza kandydującego (Kod,Ulica) sprawia, że Kod→Poczta jest zależnością częściową, łamiącą 2NF - a skoro tak, schemat nie spełnia też żadnej z mocniejszych postaci (3NF, BCNF)." }
  ]
 },
 {
  "id": "Q001",
  "chapter": "G2",
  "chapterName": "Administracja bazą: polecenia, transakcje, uprawnienia i indeksy",
  "question": "Instrukcja SELECT służy do:",
  "topicTitle": "Podział poleceń SQL",
  "topicSummary": "Polecenia SQL dzieli się umownie na kilka grup: DQL (Data Query Language) do odpytywania danych - SELECT; DML (Data Manipulation Language) do ich modyfikacji - INSERT, UPDATE, DELETE; DDL (Data Definition Language) do definiowania struktury - CREATE, ALTER, DROP; DCL (Data Control Language) do zarządzania uprawnieniami - GRANT, REVOKE; oraz TCL (Transaction Control Language) do zarządzania transakcjami - COMMIT, ROLLBACK.",
  "options": [
   { "key": "a", "text": "sprowadzania rekordów z bazy danych", "correct": true, "explain": "Tak - SELECT jest podstawowym poleceniem DQL, które odczytuje (pobiera) dane z jednej lub wielu tabel, niczego nie modyfikując." },
   { "key": "b", "text": "wstawiania rekordów do bazy danych", "correct": false, "explain": "Nie - do wstawiania nowych wierszy służy INSERT, a nie SELECT." },
   { "key": "c", "text": "usuwania rekordów z bazy danych", "correct": false, "explain": "Nie - do usuwania wierszy służy DELETE, a nie SELECT." },
   { "key": "d", "text": "aktualizacji rekordów w bazie danych", "correct": false, "explain": "Nie - do modyfikacji istniejących wierszy służy UPDATE, a nie SELECT." }
  ]
 },
 {
  "id": "Q002",
  "chapter": "G2",
  "chapterName": "Administracja bazą: polecenia, transakcje, uprawnienia i indeksy",
  "question": "Instrukcja INSERT służy do:",
  "topicTitle": "Polecenia DML",
  "topicSummary": "INSERT, UPDATE i DELETE to trzy podstawowe polecenia DML - odpowiednio dodają, modyfikują i usuwają wiersze w tabeli. W przeciwieństwie do SELECT trwale zmieniają dane, więc ich skutki (poza sytuacją auto-commit) można wycofać poleceniem ROLLBACK, dopóki nie zostaną zatwierdzone przez COMMIT.",
  "options": [
   { "key": "a", "text": "sprowadzania rekordów z bazy danych", "correct": false, "explain": "Nie - to zadanie SELECT." },
   { "key": "b", "text": "wstawiania rekordów do bazy danych", "correct": true, "explain": "Tak - INSERT dodaje nowe wiersze do tabeli." },
   { "key": "c", "text": "usuwania rekordów z bazy danych", "correct": false, "explain": "Nie - to zadanie DELETE." },
   { "key": "d", "text": "aktualizacji rekordów w bazie danych", "correct": false, "explain": "Nie - to zadanie UPDATE." }
  ]
 },
 {
  "id": "Q003",
  "chapter": "G2",
  "chapterName": "Administracja bazą: polecenia, transakcje, uprawnienia i indeksy",
  "question": "Instrukcja DELETE służy do:",
  "topicTitle": "Polecenia DML",
  "topicSummary": "DELETE usuwa wiersze spełniające warunek klauzuli WHERE (bez WHERE - wszystkie wiersze tabeli), zapisując tę operację w dzienniku transakcji, dzięki czemu można ją wycofać poleceniem ROLLBACK. To odróżnia DELETE od polecenia TRUNCATE, które w wielu silnikach nie jest w pełni transakcyjne.",
  "options": [
   { "key": "a", "text": "sprowadzania rekordów z bazy danych", "correct": false, "explain": "Nie - to zadanie SELECT." },
   { "key": "b", "text": "wstawiania rekordów do bazy danych", "correct": false, "explain": "Nie - to zadanie INSERT." },
   { "key": "c", "text": "usuwania rekordów z bazy danych", "correct": true, "explain": "Tak - DELETE usuwa wiersze z tabeli spełniające warunek WHERE." },
   { "key": "d", "text": "aktualizacji rekordów w bazie danych", "correct": false, "explain": "Nie - to zadanie UPDATE." }
  ]
 },
 {
  "id": "Q005",
  "chapter": "G2",
  "chapterName": "Administracja bazą: polecenia, transakcje, uprawnienia i indeksy",
  "question": "INDEKS w bazie danych przyśpiesza:",
  "topicTitle": "Rola indeksów",
  "topicSummary": "Indeks to dodatkowa struktura danych (najczęściej drzewo B-tree) utrzymywana obok tabeli, która pozwala szybko odnaleźć wiersze spełniające warunek na indeksowanej kolumnie bez przeglądania całej tabeli (full table scan). Przyśpiesza więc wyszukiwanie (SELECT z WHERE/JOIN/ORDER BY na indeksowanej kolumnie), ale spowalnia operacje modyfikujące dane (INSERT/UPDATE/DELETE), bo indeks trzeba aktualizować przy każdej zmianie.",
  "options": [
   { "key": "a", "text": "wyszukiwania rekordów w bazie danych", "correct": true, "explain": "Tak - to podstawowe zadanie indeksu: szybkie odnajdywanie wierszy spełniających warunek." },
   { "key": "b", "text": "wstawiania rekordów do bazy danych", "correct": false, "explain": "Nie - dodatkowe indeksy raczej spowalniają INSERT, bo trzeba je zaktualizować przy każdym nowym wierszu." },
   { "key": "c", "text": "usuwania rekordów z bazy danych", "correct": false, "explain": "Nie - podobnie jak przy INSERT, DELETE wymaga dodatkowej pracy nad aktualizacją indeksów." },
   { "key": "d", "text": "autoryzację użytkowników w bazie danych", "correct": false, "explain": "Nie - autoryzacją zajmują się mechanizmy uprawnień (GRANT/REVOKE), a nie indeksy." }
  ]
 },
 {
  "id": "Q006",
  "chapter": "G2",
  "chapterName": "Administracja bazą: polecenia, transakcje, uprawnienia i indeksy",
  "question": "Instrukcja COMMIT służy do:",
  "topicTitle": "Sterowanie transakcjami",
  "topicSummary": "COMMIT i ROLLBACK to polecenia TCL kończące transakcję. COMMIT trwale zapisuje wszystkie zmiany wykonane od początku transakcji, po czym nie da się już ich wycofać. ROLLBACK, przeciwnie, cofa wszystkie niezatwierdzone zmiany, przywracając stan sprzed rozpoczęcia transakcji.",
  "options": [
   { "key": "a", "text": "wycofywania zmian w bazie danych", "correct": false, "explain": "Nie - to zadanie ROLLBACK." },
   { "key": "b", "text": "wstawiania rekordów do bazy danych", "correct": false, "explain": "Nie - to zadanie INSERT." },
   { "key": "c", "text": "zatwierdzania zmian w bazie danych", "correct": true, "explain": "Tak - COMMIT trwale zatwierdza zmiany dokonane w bieżącej transakcji." },
   { "key": "d", "text": "aktualizacji rekordów w bazie danych", "correct": false, "explain": "Nie - to zadanie UPDATE." }
  ]
 },
 {
  "id": "Q007",
  "chapter": "G2",
  "chapterName": "Administracja bazą: polecenia, transakcje, uprawnienia i indeksy",
  "question": "Instrukcja ROLLBACK służy do:",
  "topicTitle": "Sterowanie transakcjami",
  "topicSummary": "ROLLBACK cofa wszystkie zmiany wykonane od początku bieżącej transakcji (lub do wskazanego punktu zapisu SAVEPOINT), przywracając poprzedni, spójny stan danych. Jest to jeden z filarów właściwości ACID (Atomicity) transakcji.",
  "options": [
   { "key": "a", "text": "wycofywania zmian w bazie danych", "correct": true, "explain": "Tak - ROLLBACK anuluje niezatwierdzone zmiany bieżącej transakcji." },
   { "key": "b", "text": "zatwierdzania zmian w bazie danych", "correct": false, "explain": "Nie - to zadanie COMMIT, czyli operacja odwrotna do ROLLBACK." },
   { "key": "c", "text": "usuwania rekordów z bazy danych", "correct": false, "explain": "Nie - to zadanie DELETE." },
   { "key": "d", "text": "aktualizacji rekordów w bazie danych", "correct": false, "explain": "Nie - to zadanie UPDATE." }
  ]
 },
 {
  "id": "Q009",
  "chapter": "G2",
  "chapterName": "Administracja bazą: polecenia, transakcje, uprawnienia i indeksy",
  "question": "Instrukcja ALTER TABLE służy do:",
  "topicTitle": "Definiowanie struktury danych (DDL)",
  "topicSummary": "CREATE TABLE, ALTER TABLE i DROP TABLE to polecenia DDL operujące na strukturze (schemacie) tabeli, a nie na jej danych. CREATE tworzy nową tabelę, DROP usuwa istniejącą tabelę wraz z danymi, a ALTER TABLE zmienia definicję już istniejącej tabeli, np. dodaje/usuwa kolumnę, zmienia typ danych lub dodaje ograniczenie.",
  "options": [
   { "key": "a", "text": "tworzenia tabeli", "correct": false, "explain": "Nie - nową tabelę tworzy CREATE TABLE." },
   { "key": "b", "text": "usuwania tabeli", "correct": false, "explain": "Nie - całą tabelę usuwa DROP TABLE." },
   { "key": "c", "text": "zmiany schematu tabeli", "correct": true, "explain": "Tak - ALTER TABLE modyfikuje strukturę istniejącej tabeli, np. dodaje kolumnę czy ograniczenie." },
   { "key": "d", "text": "aktualizacji indeksów założonych na tabeli", "correct": false, "explain": "Nie - indeksy tworzy się i usuwa poleceniami CREATE INDEX / DROP INDEX (choć w niektórych dialektach można to też zrobić w ramach ALTER TABLE, nie jest to jego podstawowe przeznaczenie)." }
  ]
 },
 {
  "id": "Q112",
  "chapter": "G2",
  "chapterName": "Administracja bazą: polecenia, transakcje, uprawnienia i indeksy",
  "question": "Instrukcja REVOKE służy do:",
  "topicTitle": "REVOKE jako przeciwieństwo GRANT",
  "topicSummary": "GRANT nadaje uprawnienia w bazie danych, a REVOKE jest jego przeciwieństwem - odbiera wcześniej nadane uprawnienia. Żadne z nich nie ma nic wspólnego z transakcjami (COMMIT/ROLLBACK) ani z modyfikacją danych.",
  "options": [
   { "key": "a", "text": "przyznawania uprawnień w bazie danych", "correct": false, "explain": "Nie - to zadanie GRANT, a nie REVOKE." },
   { "key": "b", "text": "zatwierdzania zmian w bazie danych", "correct": false, "explain": "Nie - zmiany zatwierdza COMMIT." },
   { "key": "c", "text": "odbierania uprawnień w bazie danych", "correct": true, "explain": "Tak - REVOKE odbiera uprawnienia wcześniej nadane poleceniem GRANT." },
   { "key": "d", "text": "wycofywania zmian w bazie danych", "correct": false, "explain": "Nie - zmiany wycofuje ROLLBACK." }
  ]
 },
 {
  "id": "Q122",
  "chapter": "G2",
  "chapterName": "Administracja bazą: polecenia, transakcje, uprawnienia i indeksy",
  "question": "Które metody dotyczą ochrony danych przed nieautoryzowanym dostępem:",
  "topicTitle": "Ochrona przed nieautoryzowanym dostępem: konta i uprawnienia",
  "topicSummary": "Ochrona przed nieautoryzowanym dostępem opiera się na uwierzytelnianiu (konta i hasła identyfikujące, kto się loguje) oraz autoryzacji (przyznawanie/odbieranie uprawnień do konkretnych operacji na obiektach, np. GRANT/REVOKE). Kopia zapasowa i słownik danych (metadane) służą zupełnie innym celom - odtwarzaniu danych po awarii i opisowi struktury bazy, a nie kontroli dostępu.",
  "options": [
   { "key": "a", "text": "kopia zapasowa", "correct": false, "explain": "Nie - kopia zapasowa chroni przed utratą danych (np. awarią), a nie przed nieautoryzowanym dostępem do nich." },
   { "key": "b", "text": "wprowadzenie kont i haseł", "correct": true, "explain": "Tak - konta i hasła to podstawowy mechanizm uwierzytelniania, czyli sprawdzania, kto próbuje uzyskać dostęp do bazy." },
   { "key": "c", "text": "słownik danych (metadane)", "correct": false, "explain": "Nie - słownik danych opisuje strukturę bazy (tabele, kolumny, ograniczenia), nie kontroluje dostępu do niej." },
   { "key": "d", "text": "przyznawanie uprawnień do wykonywania operacji na obiektach", "correct": true, "explain": "Tak - mechanizm uprawnień (GRANT/REVOKE) decyduje, kto może wykonywać jakie operacje na których obiektach, co jest istotą autoryzacji dostępu." }
  ]
 },
 {
  "id": "Q139",
  "chapter": "G2",
  "chapterName": "Administracja bazą: polecenia, transakcje, uprawnienia i indeksy",
  "question": "Polecenia ROLLBACK i COMMIT dotyczą poleceń SQL:",
  "topicTitle": "COMMIT/ROLLBACK obejmują wszystkie polecenia zmieniające dane",
  "topicSummary": "Transakcja i jej zatwierdzanie (COMMIT) lub wycofywanie (ROLLBACK) dotyczą WSZYSTKICH poleceń modyfikujących zawartość tabel (INSERT, UPDATE, DELETE, a w niektórych systemach też MERGE) - nie tylko wybranej, węższej podgrupy. SELECT nie modyfikuje danych, więc nie ma czego wycofywać ani zatwierdzać w jego kontekście.",
  "options": [
   { "key": "a", "text": "tylko INSERT, UPDATE, SELECT", "correct": false, "explain": "Nie - SELECT niczego nie zmienia, więc nie jest objęty COMMIT/ROLLBACK, a lista jest niepełna (brakuje DELETE)." },
   { "key": "b", "text": "tylko INSERT, UPDATE, SELECT, DELETE", "correct": false, "explain": "Nie - SELECT nie zmienia danych, więc nie powinien być tu wymieniony obok poleceń modyfikujących." },
   { "key": "c", "text": "tylko SELECT, INSERT, UPDATE, SELECT, DELETE", "correct": false, "explain": "Nie - z tego samego powodu SELECT nie powinien się tu znaleźć." },
   { "key": "d", "text": "wszystkich poleceń SQL zmieniających zawartość tabel", "correct": true, "explain": "Tak - COMMIT i ROLLBACK dotyczą wszystkich poleceń modyfikujących dane (INSERT, UPDATE, DELETE), niezależnie od tego, ile ich było i w jakiej kolejności." }
  ]
 },
 {
  "id": "Q142",
  "chapter": "G2",
  "chapterName": "Administracja bazą: polecenia, transakcje, uprawnienia i indeksy",
  "question": "Instrukcja COMMIT:",
  "topicTitle": "COMMIT zatwierdza wszystkie zmiany od ostatniego COMMIT/ROLLBACK",
  "topicSummary": "COMMIT trwale zapisuje w bazie danych WSZYSTKIE zmiany (INSERT, UPDATE, DELETE) wykonane od początku bieżącej transakcji, czyli od ostatniego COMMIT albo ROLLBACK - nie tylko ostatnio wydane polecenie, i nie dotyczy samego SELECT, który niczego nie zmienia.",
  "options": [
   { "key": "a", "text": "Dotyczy ostatnio wydanego polecenia SELECT, UPDATE albo DELETE", "correct": false, "explain": "Nie - COMMIT dotyczy wszystkich zmian od początku transakcji, nie tylko ostatniego polecenia, a SELECT w ogóle nie ma czego zatwierdzać." },
   { "key": "b", "text": "Dotyczy wszystkich poleceń SELECT, INSERT, UPDATE albo DELETE wydanych od ostatniego polecenia ROLLBACK", "correct": false, "explain": "Nie - SELECT nie powinien być tu wymieniony (nie zmienia danych), a poza tym początkiem transakcji jest też poprzedni COMMIT, nie tylko ROLLBACK." },
   { "key": "c", "text": "Dokonuje trwałej zmiany w zawartości tabeli bazy danych", "correct": true, "explain": "Tak - COMMIT trwale zapisuje (zatwierdza) zmiany wprowadzone w bieżącej transakcji." },
   { "key": "d", "text": "Wszystkich poleceń INSERT, UPDATE albo DELETE wydanych od ostatniego polecenia COMMIT albo ROLLBACK", "correct": true, "explain": "Tak - COMMIT obejmuje łącznie wszystkie zmiany danych od początku bieżącej transakcji, wyznaczonego przez poprzedni COMMIT lub ROLLBACK." }
  ]
 },
 {
  "id": "Q143",
  "chapter": "G2",
  "chapterName": "Administracja bazą: polecenia, transakcje, uprawnienia i indeksy",
  "question": "Czy istniejący indeks przyśpiesza wykonanie instrukcji SELECT:",
  "topicTitle": "Indeks przyspiesza SELECT tylko czasami",
  "topicSummary": "Indeks może przyspieszyć SELECT, gdy optymalizator zdecyduje się go użyć (np. selektywny warunek WHERE na indeksowanej kolumnie) - ale nie zawsze: dla zapytań zwracających dużą część tabeli albo dla kolumn o niskiej selektywności optymalizator często wybierze pełne przeszukanie tabeli, bo jest szybsze niż korzystanie z indeksu. Odpowiedź brzmi więc „czasem”, nie „zawsze” ani „nigdy”.",
  "options": [
   { "key": "a", "text": "nigdy", "correct": false, "explain": "Nie - dla selektywnych warunków WHERE na indeksowanej kolumnie indeks bardzo często przyspiesza SELECT." },
   { "key": "b", "text": "zawsze", "correct": false, "explain": "Nie - dla mało selektywnych zapytań (zwracających dużą część tabeli) optymalizator może wybrać pełne przeszukanie tabeli jako szybsze niż użycie indeksu." },
   { "key": "c", "text": "czasem", "correct": true, "explain": "Tak - to zależy od zapytania, selektywności warunku i decyzji optymalizatora zapytań." }
  ]
 },
 {
  "id": "Q144",
  "chapter": "G2",
  "chapterName": "Administracja bazą: polecenia, transakcje, uprawnienia i indeksy",
  "question": "Czy istniejący indeks przyśpiesza wykonanie instrukcji COMMIT:",
  "topicTitle": "Indeks nie ma wpływu na COMMIT",
  "topicSummary": "COMMIT tylko trwale zapisuje (zatwierdza) już wprowadzone zmiany w dzienniku transakcji - nie przeszukuje danych, więc indeksy (które przyspieszają wyszukiwanie) nie mają na jego wykonanie żadnego wpływu.",
  "options": [
   { "key": "a", "text": "nigdy", "correct": true, "explain": "Tak - COMMIT nie przeszukuje danych, więc indeksy (przyspieszające wyszukiwanie) nie wpływają na jego szybkość." },
   { "key": "b", "text": "zawsze", "correct": false, "explain": "Nie - indeks nie przyspiesza COMMIT nigdy, bo COMMIT z natury nie korzysta z indeksów." },
   { "key": "c", "text": "czasem", "correct": false, "explain": "Nie - to nie zależy od okoliczności; indeks nigdy nie wpływa na czas wykonania COMMIT." }
  ]
 },
 {
  "id": "Q152",
  "chapter": "G2",
  "chapterName": "Administracja bazą: polecenia, transakcje, uprawnienia i indeksy",
  "question": "Zaznacz poprawne stwierdzenia:",
  "topicTitle": "UPDATE trafia do dziennika transakcji, SELECT nie musi czytać z dysku",
  "topicSummary": "Zatwierdzona zmiana wprowadzona instrukcją UPDATE jest zapisywana w dzienniku transakcji (redo log), co gwarantuje jej trwałość nawet po awarii - to prawdziwe stwierdzenie. Nieprawdą jest natomiast, że każdy SELECT wymaga fizycznego odczytu z dysku (dane mogą już być w buforze pamięci podręcznej), że wynik UPDATE od razu trafia do pliku z danymi (może poczekać w buforze do czasu zapisu przez proces bazy) czy że wynik SELECT jest zapisywany w dzienniku transakcji (SELECT niczego nie zmienia, więc nie ma czego logować).",
  "options": [
   { "key": "a", "text": "Każda instrukcja SELECT wymaga pobrania danych z dysku twardego", "correct": false, "explain": "Nie - dane mogą już znajdować się w buforze pamięci podręcznej (cache), więc SELECT nie zawsze wymaga fizycznego odczytu z dysku." },
   { "key": "b", "text": "Wynik działania każdej instrukcji UPDATE jest natychmiast po zatwierdzeniu zapisywany w pliku z danymi", "correct": false, "explain": "Nie - zapis do właściwego pliku z danymi może nastąpić później (asynchronicznie); gwarancję trwałości po zatwierdzeniu daje zapis do dziennika transakcji, nie od razu do pliku danych." },
   { "key": "c", "text": "Wynik działania każdej instrukcji SELECT jest zapisywany w dzienniku transakcji", "correct": false, "explain": "Nie - SELECT nie modyfikuje danych, więc nie generuje wpisów w dzienniku transakcji (który rejestruje zmiany)." },
   { "key": "d", "text": "Wynik działania każdej instrukcji UPDATE jest natychmiast po zatwierdzeniu zapisywany w dzienniku transakcji", "correct": true, "explain": "Tak - zatwierdzenie (COMMIT) zmiany wprowadzonej przez UPDATE gwarantuje jej trwały zapis w dzienniku transakcji, co jest podstawą odporności bazy na awarie." }
  ]
 },
 {
  "id": "Q155",
  "chapter": "G2",
  "chapterName": "Administracja bazą: polecenia, transakcje, uprawnienia i indeksy",
  "question": "Rola w bazie danych:",
  "topicTitle": "Rola to nazwana grupa uprawnień nadawana użytkownikom",
  "topicSummary": "Rola jest obiektem bazy danych grupującym UŻYTKOWNIKÓW (a nie tabele, procedury czy perspektywy), któremu można nadać zestaw uprawnień jednym poleceniem GRANT, a następnie przypisywać tę rolę kolejnym użytkownikom zamiast nadawać im uprawnienia pojedynczo. Rola sama w sobie nie ułatwia zakładania indeksów.",
  "options": [
   { "key": "a", "text": "Jest grupą obiektów bazy danych (tabel, procedur, perspektyw)", "correct": false, "explain": "Nie - rola grupuje UŻYTKOWNIKÓW, a nie obiekty typu tabele czy procedury." },
   { "key": "b", "text": "Jest obiektem bazy danych pozwalającym łatwiej zakładać indeksy", "correct": false, "explain": "Nie - rola nie ma nic wspólnego z zakładaniem indeksów; służy do zarządzania uprawnieniami użytkowników." },
   { "key": "c", "text": "Jest grupą użytkowników", "correct": true, "explain": "Tak - rola to nazwany zestaw uprawnień, który można nadać grupie użytkowników jednym poleceniem." },
   { "key": "d", "text": "Może mieć nadane uprawnienia", "correct": true, "explain": "Tak - uprawnienia nadaje się roli (GRANT ... TO rola), a potem przypisuje się rolę użytkownikom, zamiast nadawać uprawnienia każdemu z osobna." }
  ]
 },
 {
  "id": "Q168",
  "chapter": "G2",
  "chapterName": "Administracja bazą: polecenia, transakcje, uprawnienia i indeksy",
  "question": "Zakładanie indeksów jest zalecane na:",
  "topicTitle": "Indeksy: kolumny sortowania, WHERE i klucze obce - nie kolumny często aktualizowane",
  "topicSummary": "Indeksy przyspieszają wyszukiwanie i sortowanie, więc warto je zakładać na kolumnach często używanych w ORDER BY, WHERE oraz na kluczach obcych (przyspiesza to też sprawdzanie spójności referencyjnej i złączenia). Nie zaleca się ich natomiast na kolumnach często modyfikowanych przez UPDATE, bo każda taka zmiana wymaga też kosztownej aktualizacji indeksu.",
  "options": [
   { "key": "a", "text": "Kolumnach, po których sortujemy", "correct": true, "explain": "Tak - indeks na kolumnie sortowania pozwala uniknąć osobnego, kosztownego etapu sortowania wyniku." },
   { "key": "b", "text": "Kolumnach często występujących w WHERE", "correct": true, "explain": "Tak - indeks na kolumnie filtrującej pozwala szybko zawęzić liczbę przeszukiwanych wierszy." },
   { "key": "c", "text": "kolumnach, w których wartości są często aktualizowane przez instrukcje UPDATE", "correct": false, "explain": "Nie - częste aktualizacje wymuszają też częstą, kosztowną aktualizację samego indeksu, co jest wadą, a nie zaletą zakładania go na takiej kolumnie." },
   { "key": "d", "text": "kluczach obcych", "correct": true, "explain": "Tak - indeksy na kluczach obcych przyspieszają złączenia oraz sprawdzanie spójności referencyjnej przy operacjach na tabeli nadrzędnej." }
  ]
 },
 {
  "id": "Q010",
  "chapter": "G3",
  "chapterName": "Logika trójwartościowa i wartości NULL",
  "question": "Jaka jest wartość wyrażenia NULL = NULL?",
  "topicTitle": "Logika trójwartościowa (NULL)",
  "topicSummary": "SQL operuje na logice trójwartościowej - obok TRUE i FALSE istnieje trzecia, nieokreślona wartość logiczna, zapisywana w tym materiale jako NULL (w standardzie SQL formalnie nazywana UNKNOWN - to dwie nazwy tego samego stanu). Porównanie dwóch wartości NULL nie daje TRUE - dwie \"nieznane\" wartości nie muszą być sobie równe, dlatego wynikiem jest NULL. Z tego powodu do sprawdzania, czy coś jest NULL, używa się IS NULL / IS NOT NULL, a nie operatora \"=\".",
  "options": [
   { "key": "a", "text": "jest nieokreślone (UNKNOWN)", "correct": false, "explain": "Prawie - to ten sam stan logiczny co NULL (w standardzie SQL bywa on formalnie nazywany UNKNOWN), ale w przyjętej tu notacji poprawną, dosłowną odpowiedzią jest wariant NULL - patrz opcja d)." },
   { "key": "b", "text": "TRUE", "correct": false, "explain": "Nie - NULL nie jest \"równy\" nawet samemu sobie w sensie operatora =." },
   { "key": "c", "text": "FALSE", "correct": false, "explain": "Nie - wynikiem nie jest jednoznaczne FALSE, tylko NULL." },
   { "key": "d", "text": "NULL", "correct": true, "explain": "Tak - porównanie z NULL zawsze daje NULL (trzecią, nieokreśloną wartość logiki trójwartościowej), niezależnie od drugiego argumentu." }
  ]
 },
 {
  "id": "Q011",
  "chapter": "G3",
  "chapterName": "Logika trójwartościowa i wartości NULL",
  "question": "Jaka jest wartość wyrażenia TRUE OR NULL?",
  "topicTitle": "Logika trójwartościowa (NULL)",
  "topicSummary": "W logice trójwartościowej operator OR zwraca TRUE, jeśli choć jeden z operandów jest TRUE - niezależnie od tego, czy drugi jest znany. Wynika to z tego, że sama wartość drugiego argumentu nie może już zmienić wyniku na FALSE. Analogicznie FALSE AND cokolwiek zawsze daje FALSE.",
  "options": [
   { "key": "a", "text": "jest nieokreślone (UNKNOWN)", "correct": false, "explain": "Nie - skoro jeden z operandów OR jest TRUE, wynik jest z góry przesądzony i nie zależy od nieznanej wartości drugiego." },
   { "key": "b", "text": "TRUE", "correct": true, "explain": "Tak - wystarczy, że jeden operand OR jest TRUE, aby cały wynik był TRUE, niezależnie od wartości NULL po drugiej stronie." },
   { "key": "c", "text": "FALSE", "correct": false, "explain": "Nie - TRUE OR cokolwiek nigdy nie daje FALSE." },
   { "key": "d", "text": "NULL", "correct": false, "explain": "Nie - wynik logiczny to TRUE, nie NULL." }
  ]
 },
 {
  "id": "Q012",
  "chapter": "G3",
  "chapterName": "Logika trójwartościowa i wartości NULL",
  "question": "Jaka jest wartość wyrażenia FALSE OR NULL?",
  "topicTitle": "Logika trójwartościowa (NULL)",
  "topicSummary": "Gdy jeden operand OR jest FALSE, wynik zależy wyłącznie od drugiego operandu. Skoro drugi operand jest nieznany (NULL), to i wynik całego wyrażenia jest nieznany - stąd FALSE OR NULL = NULL.",
  "options": [
   { "key": "a", "text": "jest nieokreślone (UNKNOWN)", "correct": false, "explain": "Prawie - to ten sam stan co NULL (formalna nazwa w standardzie SQL), ale w przyjętej tu notacji poprawną, dosłowną odpowiedzią jest wariant NULL - patrz opcja d)." },
   { "key": "b", "text": "TRUE", "correct": false, "explain": "Nie - nie wiadomo, czy drugi operand jest TRUE, więc nie można przesądzić o TRUE." },
   { "key": "c", "text": "FALSE", "correct": false, "explain": "Nie - nie wiadomo, czy drugi operand jest FALSE, więc nie można przesądzić o FALSE." },
   { "key": "d", "text": "NULL", "correct": true, "explain": "Tak - FALSE nie przesądza wyniku OR, więc wynik zależy od nieznanej wartości drugiego operandu i jest NULL." }
  ]
 },
 {
  "id": "Q013",
  "chapter": "G3",
  "chapterName": "Logika trójwartościowa i wartości NULL",
  "question": "Jaka jest wartość wyrażenia FALSE AND NULL?",
  "topicTitle": "Logika trójwartościowa (NULL)",
  "topicSummary": "Operator AND zwraca FALSE, gdy choć jeden z operandów jest FALSE - podobnie jak przy OR i TRUE, ta wartość przesądza wynik niezależnie od drugiego operandu. Dlatego FALSE AND NULL = FALSE, mimo że drugi operand jest nieznany.",
  "options": [
   { "key": "a", "text": "jest nieokreślone (UNKNOWN)", "correct": false, "explain": "Nie - FALSE po lewej stronie AND przesądza wynik na FALSE, niezależnie od drugiego operandu." },
   { "key": "b", "text": "TRUE", "correct": false, "explain": "Nie - FALSE AND cokolwiek nigdy nie daje TRUE." },
   { "key": "c", "text": "FALSE", "correct": true, "explain": "Tak - wystarczy, że jeden operand AND jest FALSE, aby cały wynik był FALSE." },
   { "key": "d", "text": "NULL", "correct": false, "explain": "Nie - wynikiem jest jednoznaczne FALSE." }
  ]
 },
 {
  "id": "Q014",
  "chapter": "G3",
  "chapterName": "Logika trójwartościowa i wartości NULL",
  "question": "Jaka jest wartość wyrażenia TRUE AND NULL?",
  "topicTitle": "Logika trójwartościowa (NULL)",
  "topicSummary": "Gdy jeden operand AND jest TRUE, wynik zależy wyłącznie od drugiego operandu. Skoro ten drugi jest nieznany, wynik całego wyrażenia też jest nieznany - stąd TRUE AND NULL = NULL.",
  "options": [
   { "key": "a", "text": "jest nieokreślone (UNKNOWN)", "correct": false, "explain": "Prawie - to ten sam stan co NULL (formalna nazwa w standardzie SQL), ale w przyjętej tu notacji poprawną, dosłowną odpowiedzią jest wariant NULL - patrz opcja d)." },
   { "key": "b", "text": "TRUE", "correct": false, "explain": "Nie - nie wiadomo, czy drugi operand jest TRUE." },
   { "key": "c", "text": "FALSE", "correct": false, "explain": "Nie - nie wiadomo, czy drugi operand jest FALSE." },
   { "key": "d", "text": "NULL", "correct": true, "explain": "Tak - TRUE nie przesądza wyniku AND, więc wynik zależy od nieznanej wartości drugiego operandu i jest NULL." }
  ]
 },
 {
  "id": "Q015",
  "chapter": "G3",
  "chapterName": "Logika trójwartościowa i wartości NULL",
  "question": "Jaka jest wartość wyrażenia NOT NULL?",
  "topicTitle": "Logika trójwartościowa (NULL)",
  "topicSummary": "Negacja wartości nieznanej pozostaje nieznana: skoro nie wiadomo, czy dana wartość logiczna jest TRUE czy FALSE, to nie wiadomo też, czym jest jej zaprzeczenie. Dlatego NOT NULL (jako wyrażenie logiczne, nie ograniczenie kolumny o tej samej nazwie) daje NULL.",
  "options": [
   { "key": "a", "text": "jest nieokreślone (UNKNOWN)", "correct": false, "explain": "Prawie - to ten sam stan co NULL (formalna nazwa w standardzie SQL), ale w przyjętej tu notacji poprawną, dosłowną odpowiedzią jest wariant NULL - patrz opcja d)." },
   { "key": "b", "text": "TRUE", "correct": false, "explain": "Nie - nie można przesądzić TRUE bez znajomości wartości wejściowej." },
   { "key": "c", "text": "FALSE", "correct": false, "explain": "Nie - nie można przesądzić FALSE bez znajomości wartości wejściowej." },
   { "key": "d", "text": "NULL", "correct": true, "explain": "Tak - negacja nieznanej wartości logicznej jest nadal nieznana, czyli NULL." }
  ]
 },
 {
  "id": "Q017",
  "chapter": "G3",
  "chapterName": "Logika trójwartościowa i wartości NULL",
  "question": "Relacja R ma atrybut a. Jaka liczba może być wynikiem wykonania instrukcji SELECT COUNT(*) FROM R WHERE a<a?",
  "topicTitle": "COUNT(*) a warunki zawsze fałszywe",
  "topicSummary": "Warunek a<a nie może być prawdziwy dla żadnej wartości - dla wartości nie-NULL zawsze daje FALSE (żadna liczba/tekst nie jest mniejsza od samej siebie), a dla NULL daje NULL. W obu przypadkach wiersz nie trafia do wyniku, więc COUNT(*) z takim warunkiem zawsze wynosi 0, niezależnie od zawartości relacji R.",
  "options": [
   { "key": "a", "text": "zawsze 0", "correct": true, "explain": "Tak - warunek a<a nigdy nie jest TRUE, więc żaden wiersz nie zostanie policzony." },
   { "key": "b", "text": "1", "correct": false, "explain": "Nie - żaden wiersz nie może spełnić a<a, więc wynik nigdy nie jest równy 1." },
   { "key": "c", "text": "dowolna liczba całkowita", "correct": false, "explain": "Nie - wynik jest zawsze dokładnie 0, nie zależy od danych w R." },
   { "key": "d", "text": "tyle, jaka jest liczebność relacji R", "correct": false, "explain": "Nie - warunek a<a jest zawsze fałszywy, więc liczba dopasowanych wierszy nigdy nie odpowiada liczebności całej relacji (chyba że R jest puste, ale wtedy to 0=0)." }
  ]
 },
 {
  "id": "Q072",
  "chapter": "G3",
  "chapterName": "Logika trójwartościowa i wartości NULL",
  "question": "Co będzie wynikiem realizacji instrukcji SELECT * FROM Emp WHERE EmpNo=EmpNo OR EmpNo=NULL (na niepustej relacji Emp, EmpNo to klucz główny - nie może być NULL)?",
  "topicTitle": "TRUE OR cokolwiek = TRUE",
  "topicSummary": "Skoro EmpNo jest kluczem głównym, nigdy nie jest NULL, więc EmpNo=EmpNo zawsze daje TRUE. Ponieważ TRUE OR X zawsze daje TRUE niezależnie od wartości X (nawet NULL dla EmpNo=NULL), cały warunek WHERE jest prawdziwy dla każdego wiersza - zapytanie zwraca więc całą relację Emp.",
  "options": [
   { "key": "a", "text": "relacja Emp", "correct": true, "explain": "Tak - EmpNo=EmpNo jest zawsze TRUE (EmpNo jako klucz główny nigdy nie jest NULL), a TRUE OR cokolwiek to zawsze TRUE, więc warunek jest spełniony dla każdego wiersza." },
   { "key": "b", "text": "relacja pusta", "correct": false, "explain": "Nie - przeciwnie, warunek jest spełniony przez każdy wiersz relacji." },
   { "key": "c", "text": "instrukcja jest niepoprawna", "correct": false, "explain": "Nie - to składniowo w pełni poprawna instrukcja SQL." }
  ]
 },
 {
  "id": "Q073",
  "chapter": "G3",
  "chapterName": "Logika trójwartościowa i wartości NULL",
  "question": "Co będzie wynikiem realizacji instrukcji SELECT * FROM Emp WHERE EmpNo=EmpNo AND NULL=EmpNo (na niepustej relacji Emp, EmpNo to klucz główny - nie może być NULL)?",
  "topicTitle": "TRUE AND NULL = NULL",
  "topicSummary": "EmpNo=EmpNo zawsze daje TRUE, ale NULL=EmpNo zawsze daje NULL (porównanie z NULL nigdy nie jest TRUE ani FALSE). TRUE AND NULL daje NULL, a warunek WHERE przepuszcza tylko wiersze, dla których wyrażenie logiczne jest TRUE - NULL nie wystarcza, więc żaden wiersz nie zostanie zwrócony.",
  "options": [
   { "key": "a", "text": "relacja Emp", "correct": false, "explain": "Nie - warunek dla każdego wiersza sprowadza się do NULL, a nie TRUE, więc żaden wiersz nie zostanie zwrócony." },
   { "key": "b", "text": "relacja pusta", "correct": true, "explain": "Tak - NULL=EmpNo zawsze daje NULL, a TRUE AND NULL to NULL, które nie spełnia warunku WHERE - wynikiem jest więc pusty zbiór wierszy." },
   { "key": "c", "text": "instrukcja jest niepoprawna", "correct": false, "explain": "Nie - to składniowo w pełni poprawna instrukcja SQL, choć jej wynik zawsze jest pusty." }
  ]
 },
 {
  "id": "Q074",
  "chapter": "G3",
  "chapterName": "Logika trójwartościowa i wartości NULL",
  "question": "Co będzie wynikiem realizacji instrukcji SELECT * FROM Student WHERE NrIndeksu = NrIndeksu AND NrIndeksu IS NULL na niepustej relacji STUDENT(IdStudent, Imie, Nazwisko, NrIndeksu)?",
  "topicTitle": "Warunek zawsze fałszywy niezależnie od danych",
  "topicSummary": "Tu NrIndeksu nie jest kluczem, więc może być NULL. Dla wierszy z NrIndeksu = NULL: NrIndeksu=NrIndeksu daje NULL, a NULL AND TRUE (IS NULL) to nadal NULL - odrzucone. Dla wierszy z NrIndeksu niepustym: NrIndeksu=NrIndeksu daje TRUE, ale NrIndeksu IS NULL daje FALSE, więc TRUE AND FALSE = FALSE - też odrzucone. W obu przypadkach warunek nigdy nie jest TRUE, więc wynik jest zawsze pusty, niezależnie od zawartości danych.",
  "options": [
   { "key": "a", "text": "Relacja STUDENT", "correct": false, "explain": "Nie - dla żadnego wiersza (z NrIndeksu NULL lub nie-NULL) warunek nie daje TRUE." },
   { "key": "b", "text": "Relacja pusta", "correct": true, "explain": "Tak - jak wyjaśniono w bloku „Warto wiedzieć”, dla dowolnego wiersza warunek sprowadza się albo do NULL, albo do FALSE, nigdy do TRUE, więc wynik jest zawsze pusty." },
   { "key": "c", "text": "Zawsze zbiór rekordów, dla których NrIndeksu jest NULL", "correct": false, "explain": "Nie - dla takich rekordów warunek NrIndeksu=NrIndeksu daje NULL, a nie TRUE, więc nie zostaną one zwrócone." },
   { "key": "d", "text": "Zawsze zbiór rekordów, dla których NrIndeksu nie jest NULL", "correct": false, "explain": "Nie - dla takich rekordów warunek NrIndeksu IS NULL daje FALSE, więc całe wyrażenie AND też jest FALSE i te rekordy również nie zostaną zwrócone." }
  ]
 },
 {
  "id": "Q127",
  "chapter": "G3",
  "chapterName": "Logika trójwartościowa i wartości NULL",
  "question": "Wartością logiczną wyrażenia FALSE OR Null AND TRUE jest:",
  "topicTitle": "Priorytet AND przed OR w logice trójwartościowej",
  "topicSummary": "Podobnie jak w SQL, AND ma wyższy priorytet niż OR również w samej logice trójwartościowej - wyrażenie FALSE OR (Null AND TRUE) liczy się od środka: Null AND TRUE daje Null (bo wynik zależy od nieznanej wartości), a następnie FALSE OR Null daje Null (bo bez rozstrzygnięcia wartości Null nie da się ustalić wyniku alternatywy).",
  "options": [
   { "key": "a", "text": "TRUE", "correct": false, "explain": "Nie - wynikiem jest Null, a nie TRUE; żaden człon wyrażenia nie daje pewnego TRUE." },
   { "key": "b", "text": "Null", "correct": true, "explain": "Tak - Null AND TRUE daje Null (priorytet AND), a następnie FALSE OR Null daje Null, bo FALSE nie rozstrzyga alternatywy z nieznaną wartością." },
   { "key": "c", "text": "FALSE", "correct": false, "explain": "Nie - FALSE otrzymalibyśmy tylko, gdyby oba człony alternatywy były fałszywe, a Null nie jest fałszem." },
   { "key": "d", "text": "0", "correct": false, "explain": "Nie - wynikiem wyrażenia logicznego jest wartość logiczna (Null), a nie liczba." }
  ]
 },
 {
  "id": "Q018",
  "chapter": "G4",
  "chapterName": "Terminologia i notacja modelu E-R",
  "question": "Encji odpowiada w relacyjnej bazie danych:",
  "topicTitle": "Model E-R a model relacyjny",
  "topicSummary": "Model encja-związek (E-R) opisuje świat w kategoriach encji (bytów, np. \"Student\"), ich atrybutów oraz związków między nimi. Przy implementacji w bazie relacyjnej: encji (np. \"Student\" jako całości) odpowiada tabela, pojedynczemu wystąpieniu (egzemplarzowi) encji - wiersz tej tabeli, a atrybutowi - kolumna.",
  "options": [
   { "key": "a", "text": "wiersz w tabeli", "correct": false, "explain": "Nie - wiersz odpowiada pojedynczemu wystąpieniu (egzemplarzowi) encji, np. jednemu konkretnemu studentowi, a nie samej encji „Student” jako całości." },
   { "key": "b", "text": "kolumna w tabeli", "correct": false, "explain": "Nie - kolumna odpowiada atrybutowi encji, a nie samej encji." },
   { "key": "c", "text": "tabela", "correct": true, "explain": "Tak - encja (np. „Student” jako zbiór wszystkich studentów) odpowiada tabeli; pojedynczy, konkretny student to już wystąpienie (egzemplarz) tej encji, reprezentowane wierszem tej tabeli." },
   { "key": "d", "text": "klucz obcy", "correct": false, "explain": "Nie - klucz obcy reprezentuje związek między encjami, a nie samą encję." }
  ]
 },
 {
  "id": "Q019",
  "chapter": "G4",
  "chapterName": "Terminologia i notacja modelu E-R",
  "question": "Związkowi jednoznacznemu odpowiada w relacyjnej bazie danych:",
  "topicTitle": "Reprezentacja związków w modelu relacyjnym",
  "topicSummary": "Związek jednoznaczny (1:N, np. \"pracownik zatrudniony w jednym dziale\") realizuje się w modelu relacyjnym za pomocą klucza obcego umieszczonego po stronie \"wiele\" - kolumna ta wskazuje na klucz główny drugiej tabeli. Związek wieloznaczny (N:M) wymaga natomiast osobnej tabeli łączącej (asocjacyjnej).",
  "options": [
   { "key": "a", "text": "kolumna w tabeli", "correct": false, "explain": "Nie - to zbyt ogólne określenie; związek jednoznaczny reprezentuje konkretnie kolumna będąca kluczem obcym, a nie dowolna kolumna." },
   { "key": "b", "text": "klucz obcy", "correct": true, "explain": "Tak - związek jednoznaczny wyraża się przez umieszczenie klucza obcego w tabeli po stronie \"wiele\", wskazującego na klucz główny tabeli po stronie \"jeden\"." },
   { "key": "c", "text": "indeks w tabeli", "correct": false, "explain": "Nie - indeks jest strukturą przyśpieszającą wyszukiwanie, nie mechanizmem reprezentowania związków (choć na kluczu obcym często zakłada się indeks ze względów wydajnościowych)." },
   { "key": "d", "text": "wartość NULL", "correct": false, "explain": "Nie - NULL w kolumnie klucza obcego oznacza jedynie brak powiązania (związek opcjonalny), a nie sam mechanizm reprezentowania związku." }
  ]
 },
 {
  "id": "Q020",
  "chapter": "G4",
  "chapterName": "Terminologia i notacja modelu E-R",
  "question": "Związkowi wieloznacznemu odpowiada w relacyjnej bazie danych:",
  "topicTitle": "Reprezentacja związków wiele-do-wielu",
  "topicSummary": "Związek wieloznaczny (N:M), np. \"student uczęszcza na wiele przedmiotów, a przedmiot ma wielu studentów\", nie da się zapisać jednym kluczem obcym w żadnej z dwóch tabel - wymaga osobnej tabeli asocjacyjnej, zawierającej klucze obce do obu tabel (razem tworzące często jej klucz główny).",
  "options": [
   { "key": "a", "text": "klucz obcy", "correct": false, "explain": "Nie - sam klucz obcy w jednej z tabel wystarcza tylko do związku jednoznacznego (1:N), nie do wieloznacznego." },
   { "key": "b", "text": "tabela", "correct": true, "explain": "Tak - związek wieloznaczny wymaga dodatkowej tabeli łączącej, przechowującej pary powiązanych kluczy obu encji." },
   { "key": "c", "text": "kolumna w tabeli", "correct": false, "explain": "Nie - pojedyncza kolumna nie wystarczy do zapisania relacji wiele-do-wielu bez naruszenia zasad normalizacji." },
   { "key": "d", "text": "wiersz w tabeli", "correct": false, "explain": "Nie - wiersz odpowiada pojedynczemu wystąpieniu encji (sama encja to tabela), a nie związkowi między encjami." }
  ]
 },
 {
  "id": "Q022",
  "chapter": "G4",
  "chapterName": "Terminologia i notacja modelu E-R",
  "question": "Jednoznacznemu identyfikatorowi odpowiada w relacyjnej bazie danych:",
  "topicTitle": "Klucz główny",
  "topicSummary": "Jednoznaczny identyfikator encji (atrybut lub zestaw atrybutów, który pozwala odróżnić każdy egzemplarz encji od pozostałych) odpowiada w modelu relacyjnym kluczowi głównemu (primary key) tabeli.",
  "options": [
   { "key": "a", "text": "kolumna w tabeli", "correct": false, "explain": "Nie - to zbyt ogólne określenie; identyfikatorowi odpowiada konkretnie klucz główny, nie dowolna kolumna." },
   { "key": "b", "text": "indeks w tabeli", "correct": false, "explain": "Nie - indeks jest jedynie techniczną strukturą wspierającą (często automatycznie zakładaną dla klucza głównego), a nie samym pojęciem identyfikatora." },
   { "key": "c", "text": "klucz obcy", "correct": false, "explain": "Nie - klucz obcy reprezentuje związek z inną tabelą, a nie jednoznaczny identyfikator encji." },
   { "key": "d", "text": "klucz główny", "correct": true, "explain": "Tak - klucz główny to kolumna lub zestaw kolumn jednoznacznie identyfikujący każdy wiersz tabeli." }
  ]
 },
 {
  "id": "Q069",
  "chapter": "G4",
  "chapterName": "Terminologia i notacja modelu E-R",
  "question": "Które ze sformułowań są prawdziwe dla związku jedno-jednoznacznego w notacji przyjętej w Vertabelo/Redgate Data Modeler?",
  "topicTitle": "Notacja \"kurzej łapki\" (crow's foot)",
  "topicSummary": "W notacji crow's foot (stosowanej m.in. w Vertabelo) rozgałęziony symbol \"kurzej łapki\" na końcu linii oznacza stronę „wiele” związku 1:N. Związek 1:1 nie ma strony „wiele” po żadnej ze stron, więc rysuje się go linią ciągłą bez kurzej łapki na obu końcach. Wypełnione kółko przy linii to zwykle symbol opcjonalności (możliwe 0), a nie strony „wiele”; linia przerywana zwykle oznacza związek nieidentyfikujący, a nie krotność 1:1.",
  "options": [
   { "key": "a", "text": "jest oznaczany za pomocą czarnego kółka po stronie „wiele”", "correct": false, "explain": "Nie - czarne kółko oznacza opcjonalność (możliwość braku powiązania, „zero”), a nie stronę „wiele”; dodatkowo związek 1:1 w ogóle nie ma strony „wiele”." },
   { "key": "b", "text": "jest oznaczany linią przerywaną", "correct": false, "explain": "Nie - linia przerywana w tej notacji zwykle oznacza związek nieidentyfikujący, a nie konkretnie krotność jeden-jednoznaczną." },
   { "key": "c", "text": "jest oznaczany linią ciągłą z wyróżnieniem strony „wiele” symbolem „kurzej łapki”", "correct": false, "explain": "Nie - to opis związku jeden-do-wielu (1:N); związek 1:1 nie ma strony „wiele”, więc nie występuje przy nim symbol kurzej łapki." },
   { "key": "d", "text": "jest oznaczany linią ciągłą bez wyróżnienia strony „wiele” symbolem „kurzej łapki”", "correct": true, "explain": "Tak - skoro w związku 1:1 żadna strona nie jest stroną „wiele”, rysuje się go zwykłą linią ciągłą, bez rozgałęzionego symbolu kurzej łapki na żadnym końcu." }
  ]
 },
 {
  "id": "Q113",
  "chapter": "G4",
  "chapterName": "Terminologia i notacja modelu E-R",
  "question": "Cykl na diagramie związków encji oznacza, że:",
  "topicTitle": "Cykl na diagramie E-R",
  "topicSummary": "Cykl na diagramie E-R (np. A wiąże się z B, B z C, a C z powrotem z A) sam w sobie nie jest błędem ani niemożliwością do zrealizowania w relacyjnej bazie danych - jest to po prostu sygnał, że w modelu może występować związek rekurencyjny albo nadmiarowa ścieżka dotarcia z jednej encji do drugiej, co warto świadomie zweryfikować z użytkownikiem, ale nie trzeba automatycznie uznawać za błąd projektowy.",
  "options": [
   { "key": "a", "text": "mamy do czynienia ze związkiem rekurencyjnym", "correct": false, "explain": "Nie - cykl nie oznacza automatycznie związku rekurencyjnego (który wiąże encję samą ze sobą), a jedynie dopuszcza taką możliwość." },
   { "key": "b", "text": "wymagania użytkownika zostały niepoprawnie określone", "correct": false, "explain": "Nie - cykl na diagramie nie jest sam w sobie dowodem błędu w wymaganiach." },
   { "key": "c", "text": "nie da się utworzyć relacyjnej bazy danych", "correct": false, "explain": "Nie - cykl na diagramie E-R nie uniemożliwia zbudowania relacyjnej bazy danych." },
   { "key": "d", "text": "może istnieć związek rekurencyjny", "correct": true, "explain": "Tak - cykl sygnalizuje możliwość istnienia związku rekurencyjnego (lub nadmiarowej ścieżki między encjami), co warto zweryfikować, ale nie jest to błąd sam w sobie." }
  ]
 },
 {
  "id": "Q114",
  "chapter": "G4",
  "chapterName": "Terminologia i notacja modelu E-R",
  "question": "W notacji modelowania Chena związek jest reprezentowany przez:",
  "topicTitle": "Notacja Chena - podstawowe symbole",
  "topicSummary": "W klasycznej notacji Chena diagramów E-R każdy typ elementu ma własny kształt: prostokąt oznacza encję, romb - związek między encjami, a koło (owal) - atrybut, połączone liniami pokazującymi, co z czym się wiąże.",
  "options": [
   { "key": "a", "text": "linię", "correct": false, "explain": "Nie - linia jedynie łączy symbole ze sobą, nie reprezentuje sama w sobie związku." },
   { "key": "b", "text": "prostokąt", "correct": false, "explain": "Nie - prostokąt w notacji Chena oznacza encję." },
   { "key": "c", "text": "koło", "correct": false, "explain": "Nie - koło (owal) w notacji Chena oznacza atrybut." },
   { "key": "d", "text": "romb", "correct": true, "explain": "Tak - w notacji Chena związek między encjami jest reprezentowany przez romb." }
  ]
 },
 {
  "id": "Q115",
  "chapter": "G4",
  "chapterName": "Terminologia i notacja modelu E-R",
  "question": "W notacji modelowania Chena encja jest reprezentowana przez:",
  "topicTitle": "Notacja Chena - encja to prostokąt",
  "topicSummary": "W notacji Chena encja (typ obiektu, np. Student, Faktura) jest rysowana jako prostokąt, w odróżnieniu od rombu (związek) i koła (atrybut).",
  "options": [
   { "key": "a", "text": "trójkąt", "correct": false, "explain": "Nie - trójkąt nie jest standardowym symbolem notacji Chena." },
   { "key": "b", "text": "prostokąt", "correct": true, "explain": "Tak - encja w notacji Chena jest reprezentowana przez prostokąt." },
   { "key": "c", "text": "koło", "correct": false, "explain": "Nie - koło w notacji Chena oznacza atrybut, nie encję." },
   { "key": "d", "text": "romb", "correct": false, "explain": "Nie - romb w notacji Chena oznacza związek, nie encję." }
  ]
 },
 {
  "id": "Q116",
  "chapter": "G4",
  "chapterName": "Terminologia i notacja modelu E-R",
  "question": "W notacji modelowania Chena atrybut jest reprezentowany przez:",
  "topicTitle": "Notacja Chena - atrybut to koło",
  "topicSummary": "W notacji Chena atrybut (cecha encji lub związku, np. Imię, Data) jest rysowany jako koło (owal) połączone linią z encją lub związkiem, do którego należy.",
  "options": [
   { "key": "a", "text": "trójkąt", "correct": false, "explain": "Nie - trójkąt nie jest standardowym symbolem notacji Chena." },
   { "key": "b", "text": "prostokąt", "correct": false, "explain": "Nie - prostokąt w notacji Chena oznacza encję, nie atrybut." },
   { "key": "c", "text": "koło", "correct": true, "explain": "Tak - atrybut w notacji Chena jest reprezentowany przez koło (owal)." },
   { "key": "d", "text": "romb", "correct": false, "explain": "Nie - romb w notacji Chena oznacza związek, nie atrybut." }
  ]
 },
 {
  "id": "Q117",
  "chapter": "G4",
  "chapterName": "Terminologia i notacja modelu E-R",
  "question": "W wyniku transformacji binarnego związku wieloznacznego (N:M) na schemat relacyjny liczba tworzonych encji (tabel dla samych encji, bez tabeli łączącej) wynosi:",
  "topicTitle": "Transformacja związku N:M - liczba tabel encji się nie zmienia",
  "topicSummary": "Sam związek wieloznaczny między dwiema encjami nie tworzy żadnej NOWEJ encji - obie encje biorące udział w związku dostają swoje własne tabele tak czy inaczej. To, co dodatkowo powstaje przy transformacji związku N:M, to tabela łącząca (asocjacyjna) reprezentująca sam związek, a nie kolejna encja.",
  "options": [
   { "key": "a", "text": "0", "correct": false, "explain": "Nie - obie encje uczestniczące w związku i tak otrzymują własne tabele; pytanie o „tworzenie” nowych encji przez sam związek dotyczy jednej dodatkowej tabeli reprezentującej ten związek." },
   { "key": "b", "text": "1", "correct": true, "explain": "Tak - transformacja związku wieloznacznego (N:M) tworzy dokładnie jedną dodatkową tabelę - tabelę łączącą (asocjacyjną) reprezentującą sam związek." },
   { "key": "c", "text": "2", "correct": false, "explain": "Nie - powstaje tylko jedna dodatkowa tabela reprezentująca związek, nie dwie." },
   { "key": "d", "text": "mogą powstać więcej niż dwie", "correct": false, "explain": "Nie - dla związku binarnego (dwuargumentowego) powstaje dokładnie jedna dodatkowa tabela łącząca." }
  ]
 },
 {
  "id": "Q118",
  "chapter": "G4",
  "chapterName": "Terminologia i notacja modelu E-R",
  "question": "W wyniku transformacji binarnego związku wieloznacznego (N:M) na schemat relacyjny liczba tworzonych związków (kluczy obcych łączących nową tabelę z encjami) wynosi:",
  "topicTitle": "Transformacja związku N:M - dwa klucze obce",
  "topicSummary": "Tabela łącząca (asocjacyjna) powstała z transformacji związku N:M potrzebuje po jednym kluczu obcym do KAŻDEJ z dwóch encji biorących udział w związku - stąd dokładnie dwa nowe związki (klucze obce), każdy typu 1:N między tabelą łączącą a jedną z encji.",
  "options": [
   { "key": "a", "text": "0", "correct": false, "explain": "Nie - tabela łącząca musi mieć klucze obce do obu encji, więc powstają związki, a nie ich brak." },
   { "key": "b", "text": "1", "correct": false, "explain": "Nie - jeden klucz obcy wystarczyłby tylko do jednej z dwóch encji; potrzebne są oba." },
   { "key": "c", "text": "2", "correct": true, "explain": "Tak - tabela łącząca dostaje po jednym kluczu obcym (związku 1:N) do każdej z dwóch encji biorących udział w związku wieloznacznym, czyli dokładnie dwa nowe związki." },
   { "key": "d", "text": "mogą powstać więcej niż dwa", "correct": false, "explain": "Nie - dla związku binarnego (dwuargumentowego) powstają dokładnie dwa nowe związki (klucze obce)." }
  ]
 },
 {
  "id": "Q119",
  "chapter": "G4",
  "chapterName": "Terminologia i notacja modelu E-R",
  "question": "W wyniku transformacji trójargumentowego związku wieloznacznego na schemat relacyjny liczba tworzonych encji (tabel dla samych encji, bez tabeli łączącej) wynosi:",
  "topicTitle": "Transformacja związku trójargumentowego - jedna dodatkowa tabela",
  "topicSummary": "Podobnie jak przy związku binarnym, sam związek nie tworzy nowych encji - te trzy encje uczestniczące w związku i tak mają własne tabele. Transformacja związku trójargumentowego (łączącego trzy encje naraz) tworzy jedną dodatkową tabelę reprezentującą ten związek, tyle że z trzema kluczami obcymi zamiast dwóch.",
  "options": [
   { "key": "a", "text": "0", "correct": false, "explain": "Nie - związek trójargumentowy, podobnie jak binarny, wymaga jednej dodatkowej tabeli reprezentującej sam związek." },
   { "key": "b", "text": "1", "correct": true, "explain": "Tak - transformacja związku trójargumentowego, tak jak binarnego, tworzy dokładnie jedną dodatkową tabelę reprezentującą związek - różnica jest w liczbie kluczy obcych w tej tabeli (trzy zamiast dwóch), nie w liczbie tabel." },
   { "key": "c", "text": "2", "correct": false, "explain": "Nie - powstaje tylko jedna dodatkowa tabela reprezentująca związek, niezależnie od tego, ile encji on łączy." },
   { "key": "d", "text": "mogą powstać więcej niż dwie", "correct": false, "explain": "Nie - niezależnie od liczby argumentów związku wieloznacznego, powstaje dokładnie jedna dodatkowa tabela reprezentująca ten związek." }
  ]
 },
 {
  "id": "Q120",
  "chapter": "G4",
  "chapterName": "Terminologia i notacja modelu E-R",
  "question": "W wyniku transformacji trójargumentowego związku wieloznacznego na schemat relacyjny liczba tworzonych związków (kluczy obcych łączących nową tabelę z encjami) wynosi:",
  "topicTitle": "Transformacja związku trójargumentowego - trzy klucze obce",
  "topicSummary": "Tabela reprezentująca związek trójargumentowy potrzebuje po jednym kluczu obcym do KAŻDEJ z trzech encji biorących w nim udział - stąd dokładnie trzy nowe związki (klucze obce). To uogólnienie sytuacji ze związkiem binarnym, gdzie powstawały dwa klucze obce - liczba nowych związków zawsze odpowiada liczbie argumentów (encji) związku wieloznacznego.",
  "options": [
   { "key": "a", "text": "1", "correct": false, "explain": "Nie - jeden klucz obcy wystarczyłby tylko do jednej z trzech encji." },
   { "key": "b", "text": "2", "correct": false, "explain": "Nie - dwa klucze obce pokryłyby tylko dwie z trzech encji uczestniczących w związku." },
   { "key": "c", "text": "3", "correct": true, "explain": "Tak - tabela reprezentująca związek trójargumentowy potrzebuje trzech kluczy obcych, po jednym do każdej z trzech encji biorących udział w związku." },
   { "key": "d", "text": "mogą powstać więcej niż dwa", "correct": true, "explain": "Tak (poprawna obserwacja liczbowa) - dla związku trójargumentowego powstają trzy klucze obce, czyli rzeczywiście więcej niż dwa; dokładną liczbą jest jednak trzy (patrz odpowiedź C)." }
  ]
 },
 {
  "id": "Q121",
  "chapter": "G4",
  "chapterName": "Terminologia i notacja modelu E-R",
  "question": "Instancją związku jednojednoznacznego (1:1) jest zawsze funkcja:",
  "topicTitle": "Związek 1:1 jako funkcja różnowartościowa",
  "topicSummary": "Związek jeden-do-jednego oznacza, że każdemu egzemplarzowi jednej encji odpowiada co najwyżej jeden egzemplarz drugiej encji, i na odwrót - to dokładnie definicja funkcji różnowartościowej (injekcji), przyporządkowującej pojedynczemu argumentowi pojedynczą wartość, bez powtórzeń wartości dla różnych argumentów. Nie musi to być funkcja „na” (surjekcja, pokrywająca cały zbiór docelowy) ani funkcja stała.",
  "options": [
   { "key": "a", "text": "różnowartościowa", "correct": true, "explain": "Tak - związek 1:1 wyklucza, by dwa różne egzemplarze jednej encji wskazywały na ten sam egzemplarz drugiej, co jest definicją różnowartościowości (injektywności)." },
   { "key": "b", "text": "\"na\"", "correct": false, "explain": "Nie - związek 1:1 nie wymaga, aby każdy egzemplarz drugiej encji był z czymś powiązany (może być opcjonalny), więc funkcja nie musi być „na”." },
   { "key": "c", "text": "jednoargumentowa", "correct": true, "explain": "Tak - instancja związku binarnego przyporządkowuje pojedynczemu egzemplarzowi jednej encji pojedynczy egzemplarz drugiej, czyli jest funkcją jednego argumentu (nie relacją wieloargumentową)." },
   { "key": "d", "text": "stała", "correct": false, "explain": "Nie - „stała” oznaczałaby, że wszystkim argumentom odpowiada ta sama wartość, co nie wynika ze związku 1:1." }
  ]
 },
 {
  "id": "Q157",
  "chapter": "G4",
  "chapterName": "Terminologia i notacja modelu E-R",
  "question": "Jakie są podstawowe składowe diagramów związków encji?",
  "topicTitle": "Encje, atrybuty i związki - trzy filary modelu E-R",
  "topicSummary": "Diagram związków encji (E-R) opisuje świat za pomocą trzech podstawowych rodzajów składowych: encji (typów obiektów), ich atrybutów (cech) oraz związków (relacji) łączących encje ze sobą.",
  "options": [
   { "key": "a", "text": "związki", "correct": true, "explain": "Tak - związki (relacje między encjami) to jedna z podstawowych składowych diagramu E-R." },
   { "key": "b", "text": "atrybuty", "correct": true, "explain": "Tak - atrybuty (cechy encji lub związków) to kolejna podstawowa składowa diagramu E-R." },
   { "key": "c", "text": "encje", "correct": true, "explain": "Tak - encje (typy obiektów) to trzecia z podstawowych składowych diagramu E-R." }
  ]
 },
 {
  "id": "Q158",
  "chapter": "G4",
  "chapterName": "Terminologia i notacja modelu E-R",
  "question": "Jaki rodzaj związku binarnego jest elementarnym związkiem w hierarchii encji?",
  "topicTitle": "Hierarchia encji (IS-A) opiera się na związku jeden-jednoznacznym",
  "topicSummary": "Hierarchia encji (generalizacja/specjalizacja, związek typu \"jest rodzajem\") łączy nadtyp z podtypem związkiem jeden-jednoznacznym (1:1) - każdy egzemplarz podtypu odpowiada dokładnie jednemu egzemplarzowi nadtypu (i najczęściej na odwrót, gdy podtypy są rozłączne i kompletne), co odróżnia tę relację od zwykłego związku wieloznacznego.",
  "options": [
   { "key": "a", "text": "związek jedno-jednoznaczny oznaczany symbolem jest .", "correct": true, "explain": "Tak - hierarchia encji (relacja \"jest rodzajem\"/IS-A) opiera się na elementarnym związku jeden-jednoznacznym między nadtypem a podtypem." },
   { "key": "b", "text": "związek wieloznaczny", "correct": false, "explain": "Nie - związek wieloznaczny (N:M) nie jest elementarnym związkiem hierarchii encji; ta opiera się na związku 1:1." }
  ]
 },
 {
  "id": "Q159",
  "chapter": "G4",
  "chapterName": "Terminologia i notacja modelu E-R",
  "question": "Które z następujących elementów: atrybuty, encje, związki mogą być argumentami związków?",
  "topicTitle": "Encje, związki, a nawet atrybuty opisowe mogą uczestniczyć w związkach",
  "topicSummary": "W rozbudowanych modelach E-R argumentami (uczestnikami) związku mogą być nie tylko encje, ale też inne związki (związki wyższego rzędu, agregacja związków) oraz atrybuty opisowe (deskryptywne), które dodatkowo charakteryzują sam związek lub jego uczestnika.",
  "options": [
   { "key": "a", "text": "atrybuty dekryptywne", "correct": true, "explain": "Tak - atrybuty opisowe mogą uczestniczyć jako argumenty/charakterystyki związku." },
   { "key": "b", "text": "encje", "correct": true, "explain": "Tak - encje są najbardziej podstawowym i typowym rodzajem argumentu związku." },
   { "key": "c", "text": "związki", "correct": true, "explain": "Tak - w modelach wyższego rzędu sam związek może być argumentem (uczestnikiem) innego związku." }
  ]
 },
 {
  "id": "Q160",
  "chapter": "G4",
  "chapterName": "Terminologia i notacja modelu E-R",
  "question": "Jaki jest model podstawowej jednostki danych poziomu fizycznego bazy danych?",
  "topicTitle": "Poziom fizyczny: rekord, nie tabela",
  "topicSummary": "Na poziomie fizycznym (sposobie faktycznego przechowywania danych na dysku) podstawową jednostką jest rekord - ciąg pól o określonych typach danych. Tabela jest pojęciem z poziomu logicznego (koncepcyjnego) modelu relacyjnego, a nie fizycznej organizacji danych.",
  "options": [
   { "key": "a", "text": "rekord składający się z pól określonych typów danych", "correct": true, "explain": "Tak - na poziomie fizycznym dane przechowywane są jako rekordy złożone z pól o określonych typach." },
   { "key": "b", "text": "tabela", "correct": false, "explain": "Nie - tabela to pojęcie logicznego (nie fizycznego) modelu relacyjnego." }
  ]
 },
 {
  "id": "Q025",
  "chapter": "G5",
  "chapterName": "Zasady modelu relacyjnego i dobre praktyki projektowania",
  "question": "Które ze sformułowań są prawdziwe w modelu relacyjnym?",
  "topicTitle": "Własności relacji (tabeli)",
  "topicSummary": "W czystym modelu relacyjnym relacja jest zbiorem krotek (wierszy) - a zbiór z definicji nie zawiera duplikatów i nie ma w nim żadnego ustalonego porządku elementów ani kolumn. Dlatego wiersze się nie powtarzają, a kolejność kolumn jest formalnie nieistotna (chociaż w praktycznych silnikach SQL wiersze mogą się powtarzać, jeśli nie ma klucza, a kolejność kolumn ma znaczenie przy SELECT *).",
  "options": [
   { "key": "a", "text": "wartości w kolumnie są przechowywane w kolejności posortowanej", "correct": false, "explain": "Nie - relacja jako zbiór krotek nie zakłada żadnego wewnętrznego porządku wartości." },
   { "key": "b", "text": "wiersze nie powtarzają się", "correct": true, "explain": "Tak - relacja jest zbiorem krotek, a zbiór z definicji nie zawiera powtórzeń tego samego elementu." },
   { "key": "c", "text": "kolejność kolumn jest nieistotna", "correct": true, "explain": "Tak - formalnie krotka to funkcja z nazw atrybutów na wartości, więc kolejność atrybutów (kolumn) nie ma znaczenia." },
   { "key": "d", "text": "wartości w kolumnie nie powtarzają się", "correct": false, "explain": "Nie - w obrębie jednej kolumny (atrybutu) różne wiersze mogą mieć tę samą wartość; unikalność całego wiersza to co innego niż unikalność pojedynczej kolumny." }
  ]
 },
 {
  "id": "Q026",
  "chapter": "G5",
  "chapterName": "Zasady modelu relacyjnego i dobre praktyki projektowania",
  "question": "Które ze sformułowań są prawdziwe w modelu relacyjnym?",
  "topicTitle": "Krotki i związki w modelu relacyjnym",
  "topicSummary": "Krotki (wiersze) w modelu relacyjnym są rozróżniane wyłącznie na podstawie wartości swoich atrybutów (nie mają wewnętrznej \"tożsamości\" niezależnej od danych, w przeciwieństwie np. do obiektów w programowaniu obiektowym). Związek jednoznaczny (1:N) reprezentuje się kluczem obcym; związek wieloznaczny (N:M) wymaga dodatkowej tabeli łączącej, a nie samego klucza obcego.",
  "options": [
   { "key": "a", "text": "wiersze nie mają tożsamości obiektowej", "correct": true, "explain": "Tak - w modelu relacyjnym tożsamość wiersza wyznaczają wyłącznie wartości jego atrybutów (klucz), a nie jakiś ukryty identyfikator obiektowy." },
   { "key": "b", "text": "związek jednoznaczny reprezentuje się przy pomocy klucza obcego", "correct": true, "explain": "Tak - to standardowy sposób realizacji związku 1:N w modelu relacyjnym." },
   { "key": "c", "text": "związek wieloznaczny reprezentuje się przy pomocy klucza obcego", "correct": false, "explain": "Nie - pojedynczy klucz obcy nie wystarcza do zapisania związku N:M; potrzebna jest osobna tabela łącząca." },
   { "key": "d", "text": "klucze obce muszą być typu całkowitego", "correct": false, "explain": "Nie - klucz obcy musi mieć taki sam typ jak kolumna, do której się odwołuje, ale nie musi to być typ całkowity (może być np. tekstowy)." }
  ]
 },
 {
  "id": "Q027",
  "chapter": "G5",
  "chapterName": "Zasady modelu relacyjnego i dobre praktyki projektowania",
  "question": "Które ze sformułowań są prawdziwe w modelu relacyjnym?",
  "topicTitle": "Tabela jako reprezentacja relacji",
  "topicSummary": "Tabela w bazie SQL jest praktyczną (konkretną) reprezentacją abstrakcyjnego pojęcia relacji z teorii modelu relacyjnego. Systemy bazodanowe (np. Oracle, SQL Server) zwykle automatycznie zakładają indeks jednoznaczny dla klucza głównego oraz indeks przy definiowaniu ograniczenia unikalności (klucza jednoznacznego/kandydującego), natomiast sam klucz obcy nie powoduje automatycznego założenia indeksu.",
  "options": [
   { "key": "a", "text": "tabela jest konkretną reprezentacją relacji", "correct": true, "explain": "Tak - relacja to pojęcie teoretyczne (zbiór krotek), a tabela to jej praktyczna implementacja w silniku bazodanowym." },
   { "key": "b", "text": "dla klucza jednoznacznego jest automatycznie zakładany indeks", "correct": true, "explain": "Tak - typowe systemy (np. Oracle, SQL Server) automatycznie tworzą indeks wspierający ograniczenie UNIQUE." },
   { "key": "c", "text": "dla klucza obcego jest automatycznie zakładany indeks", "correct": false, "explain": "Nie - w większości popularnych silników (np. Oracle) indeks na kluczu obcym nie jest zakładany automatycznie i warto go założyć ręcznie ze względów wydajnościowych." },
   { "key": "d", "text": "dla klucza głównego jest automatycznie zakładany indeks jednoznaczny", "correct": true, "explain": "Tak - ograniczenie PRIMARY KEY jest zwykle wspierane automatycznie tworzonym indeksem unikalnym." }
  ]
 },
 {
  "id": "Q028",
  "chapter": "G5",
  "chapterName": "Zasady modelu relacyjnego i dobre praktyki projektowania",
  "question": "Które ze sformułowań są prawdziwe w modelu relacyjnym?",
  "topicTitle": "Klucz główny i wartości unikalne",
  "topicSummary": "Klucz główny z definicji jednoznacznie identyfikuje każdy wiersz tabeli, więc jego wartości nie mogą się powtarzać (ani być NULL). Klucz obcy może natomiast wielokrotnie wskazywać na tę samą wartość klucza głównego (np. wielu pracowników może mieć ten sam id_działu) - to normalna sytuacja przy związku jeden-do-wielu.",
  "options": [
   { "key": "a", "text": "klucz obcy nie może być częścią klucza głównego", "correct": false, "explain": "Nie - klucz obcy może być jednocześnie (częścią) klucza głównego, np. w tabelach łączących relacje N:M, gdzie oba klucze obce razem tworzą klucz główny." },
   { "key": "b", "text": "klucz główny nie może być częścią klucza obcego", "correct": false, "explain": "Nie - klucz obcy w danej tabeli może obejmować kolumny, które w tej samej tabeli są też (częścią) klucza głównego." },
   { "key": "c", "text": "wartości klucza głównego nie mogą się powtarzać", "correct": true, "explain": "Tak - to podstawowa własność klucza głównego: jednoznacznie identyfikuje wiersz, więc jego wartości muszą być unikalne (i niepuste)." },
   { "key": "d", "text": "wartości klucza obcego nie mogą się powtarzać", "correct": false, "explain": "Nie - klucz obcy zwykle może się powtarzać (wiele wierszy może odwoływać się do tego samego wiersza tabeli nadrzędnej), chyba że dodatkowo objęty jest osobnym ograniczeniem unikalności." }
  ]
 },
 {
  "id": "Q031",
  "chapter": "G5",
  "chapterName": "Zasady modelu relacyjnego i dobre praktyki projektowania",
  "question": "Które z poniższych stwierdzeń są prawdziwe?",
  "topicTitle": "Zasady dobrego projektowania schematu",
  "topicSummary": "Dobrze zaprojektowany schemat relacyjny powinien zawierać wyłącznie zależności funkcyjne wynikające z klucza (żadnych \"przypadkowych\" zależności między kolumnami niekluczowymi) i eliminować niekontrolowane redundancje danych. Liczba tabel nie jest sama w sobie celem projektowym - dążenie do minimalnej liczby tabel często prowadzi do naruszenia postaci normalnych i nadmiarowości danych.",
  "options": [
   { "key": "a", "text": "jedyną poprawną, nietrywialną zależnością funkcyjną jest zależność od klucza", "correct": true, "explain": "Tak - to właśnie idea normalizacji: eliminujemy zależności funkcyjne, które nie wynikają z klucza (częściowe i przechodnie)." },
   { "key": "b", "text": "należy starać się użyć najmniejszej możliwej liczby tabel", "correct": false, "explain": "Nie - liczba tabel nie jest celem samym w sobie; dążenie do jej minimalizacji zwykle prowadzi do naruszenia postaci normalnych i redundancji danych." },
   { "key": "c", "text": "w tabeli nie powinno być żadnych niekontrolowanych redundancji", "correct": true, "explain": "Tak - unikanie niekontrolowanej redundancji (powielania tych samych faktów) to jeden z głównych celów normalizacji." },
   { "key": "d", "text": "należy wszystkie związki jednoznaczne zastąpić związkami jednojednoznacznymi", "correct": false, "explain": "Nie - typ związku (1:1, 1:N, N:M) powinien wynikać z rzeczywistej semantyki modelowanej dziedziny, a nie być sztucznie zmieniany." }
  ]
 },
 {
  "id": "Q032",
  "chapter": "G5",
  "chapterName": "Zasady modelu relacyjnego i dobre praktyki projektowania",
  "question": "Które z poniższych stwierdzeń są prawdziwe?",
  "topicTitle": "Weryfikacja modelu z użytkownikiem",
  "topicSummary": "Każdy fakt przechowywany w bazie powinien mieć jedno, jednoznaczne miejsce zapisu (brak redundancji ułatwia utrzymanie spójności danych). Ponieważ projektant nie zawsze zna dokładnie regułyy biznesowe dziedziny, poprawność modelu (a nie stopień jego formalnej normalizacji, którego użytkownik biznesowy zwykle nie oceni) warto skonsultować z użytkownikiem/ekspertem dziedzinowym.",
  "options": [
   { "key": "a", "text": "każdy fakt przechowywany w bazie danych powinien być w niej wyrażany tylko na jeden sposób", "correct": true, "explain": "Tak - to podstawowa zasada unikania redundancji i niespójności danych." },
   { "key": "b", "text": "należy starać się użyć najmniejszej możliwej liczby tabel", "correct": false, "explain": "Nie - jak w poprzednim pytaniu, minimalizacja liczby tabel nie jest celem dobrego projektowania." },
   { "key": "c", "text": "należy skonsultować z użytkownikiem poprawność skonstruowanego modelu danych", "correct": true, "explain": "Tak - to użytkownik/ekspert dziedzinowy zna rzeczywiste reguły biznesowe i może zweryfikować, czy model je poprawnie odzwierciedla." },
   { "key": "d", "text": "należy spytać użytkownika, czy schemat tabel jest w III postaci normalnej", "correct": false, "explain": "Nie - ocena postaci normalnej to zadanie projektanta bazy danych, a nie użytkownika biznesowego, który zwykle nie zna tej terminologii." }
  ]
 },
 {
  "id": "Q128",
  "chapter": "G5",
  "chapterName": "Zasady modelu relacyjnego i dobre praktyki projektowania",
  "question": "Gdy schemat tabel nie jest w trzeciej postaci normalnej mamy do czynienia z:",
  "topicTitle": "Skutki braku 3NF: redundancja i anomalie",
  "topicSummary": "Brak trzeciej postaci normalnej oznacza istnienie zależności przechodnich (atrybut nieklucza zależy od innego atrybutu nieklucza) - to prowadzi do redundancji (ten sam fakt zapisany wielokrotnie) oraz do trzech klasycznych anomalii: przy wstawianiu (nie da się dodać pewnych danych bez dodania niepowiązanych innych), przy usuwaniu (usunięcie jednego wiersza usuwa przypadkiem też inny, niezależny fakt) i przy modyfikacji (trzeba zaktualizować wiele wierszy naraz, żeby zmiana pozostała spójna).",
  "options": [
   { "key": "a", "text": "redundancją", "correct": true, "explain": "Tak - zależność przechodnia łamiąca 3NF oznacza, że ten sam fakt bywa zapisany w wielu wierszach." },
   { "key": "b", "text": "anomaliami przy wstawianiu", "correct": true, "explain": "Tak - redundancja utrudnia dodanie części danych bez wymuszania powiązania z innymi, niezwiązanymi faktami." },
   { "key": "c", "text": "anomaliami przy usuwaniu", "correct": true, "explain": "Tak - usunięcie jednego wiersza może przypadkiem usunąć też informację, która logicznie nie powinna zniknąć." },
   { "key": "d", "text": "anomaliami przy modyfikacji", "correct": true, "explain": "Tak - zmiana zredundantnie zapisanego faktu wymaga zaktualizowania go we wszystkich wierszach, w których występuje, inaczej dane stają się niespójne." }
  ]
 },
 {
  "id": "Q131",
  "chapter": "G5",
  "chapterName": "Zasady modelu relacyjnego i dobre praktyki projektowania",
  "question": "Które stwierdzenia są zgodne z dobrymi zasadami projektowania relacyjnej bazy danych?",
  "topicTitle": "Dobre praktyki projektowania: brak redundancji i weryfikacja z użytkownikiem",
  "topicSummary": "Dobre praktyki projektowania to przede wszystkim brak niekontrolowanych redundancji oraz przechowywanie każdego faktu w jeden, kontrolowany sposób - a poprawność modelu warto zawsze zweryfikować z użytkownikiem/dziedziną biznesową, bo to on najlepiej wie, czy model odzwierciedla rzeczywistość. Minimalizacja liczby tabel „za wszelką cenę” (kosztem normalizacji) oraz mechaniczne zastępowanie każdego związku jednoznacznego związkiem jeden-do-jednego to natomiast błędne, zbyt uproszczone zasady.",
  "options": [
   { "key": "a", "text": "W tabeli nie powinno być niekontrolowanych redundancji", "correct": true, "explain": "Tak - to jedna z podstawowych zasad dobrego projektowania relacyjnej bazy danych." },
   { "key": "b", "text": "Każdy fakt powinien być przechowywany w bazie w jeden kontrolowany sposób", "correct": true, "explain": "Tak - unikanie wielu niezależnych miejsc zapisu tego samego faktu to istota normalizacji." },
   { "key": "c", "text": "Poprawność modelu warto zweryfikować z użytkownikiem/dziedziną biznesową", "correct": true, "explain": "Tak - model danych powinien odzwierciedlać rzeczywiste reguły biznesowe, które najlepiej zna użytkownik/dziedzina, a nie tylko formalną poprawność techniczną." },
   { "key": "d", "text": "Należy zawsze minimalizować liczbę tabel, niezależnie od normalizacji", "correct": false, "explain": "Nie - to błędna zasada; normalizacja często wymaga WIĘKSZEJ liczby tabel, żeby uniknąć redundancji, więc minimalizacja liczby tabel nie może być nadrzędna." },
   { "key": "e", "text": "Wszystkie związki jednoznaczne należy zastąpić związkami jeden-do-jednego", "correct": false, "explain": "Nie - to mechaniczne, błędne uproszczenie; typ związku (1:N czy 1:1) musi wynikać z rzeczywistych reguł biznesowych, a nie z arbitralnej zasady zastępowania." }
  ]
 },
 {
  "id": "Q024",
  "chapter": "G6",
  "chapterName": "Normalizacja: zależności funkcyjne i postacie normalne",
  "question": "III postać normalna dotyczy faktu:",
  "topicTitle": "III postać normalna (3NF)",
  "topicSummary": "Tabela jest w III postaci normalnej, jeśli jest w II postaci normalnej i dodatkowo żadna kolumna niekluczowa nie zależy przechodnio (tranzytywnie) od klucza głównego ani od jego części - czyli każda kolumna niekluczowa zależy wyłącznie bezpośrednio i w całości od klucza.",
  "options": [
   { "key": "a", "text": "wartością klucza obcego może być NULL lub wartość odpowiadającego mu klucza głównego", "correct": false, "explain": "Nie - to definicja spójności referencyjnej, nie 3NF." },
   { "key": "b", "text": "wartości w kolumnie nie powtarzają się", "correct": false, "explain": "Nie - to opisuje unikalność, a nie zależności funkcyjne badane w 3NF." },
   { "key": "c", "text": "wartości w kolumnie niekluczowej nie mogą zależeć ani od części klucza, ani przechodnio od klucza", "correct": true, "explain": "Tak - to właśnie definicja III postaci normalnej: eliminacja zależności częściowych i przechodnich kolumn niekluczowych od klucza." },
   { "key": "d", "text": "w każdej tabeli powinien istnieć dokładnie jeden klucz", "correct": false, "explain": "Nie - liczba kluczy kandydujących nie jest przedmiotem definicji 3NF." }
  ]
 },
 {
  "id": "Q029",
  "chapter": "G6",
  "chapterName": "Normalizacja: zależności funkcyjne i postacie normalne",
  "question": "Zależność złączeniowa jest uogólnieniem zależności wielowartościowej w następującym sensie:",
  "topicTitle": "Zależność złączeniowa (5NF)",
  "topicSummary": "Zależność wielowartościowa (MVD) dotyczy zawsze bezstratnego rozbicia tabeli na dokładnie dwie projekcje - to jej definicja, nie szczególny przypadek czegoś ogólniejszego. Zależność złączeniowa (join dependency), będąca podstawą V postaci normalnej, jest jej uogólnieniem właśnie w tym sensie, że dopuszcza bezstratny rozkład tabeli na więcej niż dwie projekcje naraz, których dopiero łączne (a nie parami) naturalne złączenie odtwarza oryginalną relację - MVD jest wtedy jej szczególnym, dwuelementowym przypadkiem.",
  "options": [
   { "key": "a", "text": "dotyczy rozbicia tabeli na dokładnie dwie tabele", "correct": false, "explain": "Nie - to opisuje samą zależność wielowartościową (jej definicję), a nie to, w czym zależność złączeniowa ją uogólnia." },
   { "key": "b", "text": "dotyczy rozbicia tabeli na dokładnie trzy tabele", "correct": false, "explain": "Nie - liczba tabel w zależności złączeniowej nie jest ograniczona akurat do trzech." },
   { "key": "c", "text": "dotyczy rozbicia tabeli na więcej niż dwie tabele", "correct": true, "explain": "Tak - MVD z definicji dotyczy rozbicia na dokładnie dwie projekcje; uogólnienie, jakim jest zależność złączeniowa, polega właśnie na dopuszczeniu rozkładu na więcej niż dwie projekcje, których dopiero łączne (nie parami) złączenie odtwarza relację." },
   { "key": "d", "text": "dotyczy rozbicia tabeli na co najmniej dwie tabele", "correct": false, "explain": "Nie - to sformułowanie obejmuje też przypadek dokładnie dwóch tabel, czyli samą zależność wielowartościową, więc nie opisuje tego, w czym zależność złączeniowa jest jej uogólnieniem." }
  ]
 },
 {
  "id": "Q030",
  "chapter": "G6",
  "chapterName": "Normalizacja: zależności funkcyjne i postacie normalne",
  "question": "Postać normalna Boyce'a-Codda dotyczy faktu:",
  "topicTitle": "Postać normalna Boyce'a-Codda (BCNF)",
  "topicSummary": "Tabela jest w postaci normalnej Boyce'a-Codda (BCNF), jeśli dla każdej nietrywialnej zależności funkcyjnej X→Y zbiór X jest nadkluczem (superkluczem) tej tabeli. Innymi słowy: jedynym źródłem nietrywialnych zależności funkcyjnych może być nadklucz. BCNF jest silniejszą wersją 3NF.",
  "options": [
   { "key": "a", "text": "wartością klucza obcego może być NULL lub wartość odpowiadającego mu klucza głównego", "correct": false, "explain": "Nie - to definicja spójności referencyjnej, niezwiązana z postaciami normalnymi." },
   { "key": "b", "text": "każda nietrywialna zależność funkcyjna jest zależnością od nadklucza", "correct": true, "explain": "Tak - to dokładna definicja BCNF." },
   { "key": "c", "text": "wartości w kolumnie niekluczowej nie mogą zależeć ani od części klucza, ani przechodnio od klucza", "correct": false, "explain": "Nie - to definicja III postaci normalnej; BCNF jest od niej silniejsza i dotyczy wszystkich zależności funkcyjnych, nie tylko tych z kolumn niekluczowych." },
   { "key": "d", "text": "w każdej tabeli powinien istnieć dokładnie jeden klucz", "correct": false, "explain": "Nie - liczba kluczy kandydujących w tabeli nie jest ograniczana przez definicję BCNF." }
  ]
 },
 {
  "id": "Q081",
  "chapter": "G6",
  "chapterName": "Normalizacja: zależności funkcyjne i postacie normalne",
  "question": "Dany jest schemat relacyjny R = {Student, Adres, Akademik}, F = {Student→Adres; Akademik→Adres; Student→Akademik}. Schemat ten:",
  "topicTitle": "Wykrywanie zależności przechodniej",
  "topicSummary": "Jedynym kluczem kandydującym jest tu {Student}, bo Student→Akademik i Akademik→Adres (razem z danym wprost Student→Adres) dają domknięcie {Student}+ = {Student, Akademik, Adres} = R. Zależność Akademik→Adres ma jednak po lewej stronie atrybut niebędący nadkluczem (Akademik), a Adres jest atrybutem niekluczowym - to klasyczna zależność przechodnia (Student→Akademik→Adres), łamiąca zarówno III postać normalną, jak i BCNF.",
  "options": [
   { "key": "a", "text": "jest w postaci normalnej Boyce'a-Codda", "correct": false, "explain": "Nie - zależność Akademik→Adres ma po lewej stronie atrybut, który nie jest nadkluczem, co wprost łamie definicję BCNF." },
   { "key": "b", "text": "jest w III postaci normalnej, ale nie jest w postaci normalnej Boyce'a-Codda", "correct": false, "explain": "Nie - Akademik→Adres jest zależnością przechodnią atrybutu niekluczowego Adres (przez inny atrybut niekluczowy Akademik) od klucza Student, co łamie już samą III postać normalną, nie tylko BCNF." },
   { "key": "c", "text": "jest w III postaci normalnej", "correct": false, "explain": "Nie - jak wyżej, zależność przechodnia Student→Akademik→Adres narusza definicję 3NF." },
   { "key": "d", "text": "nie jest ani w III postaci normalnej, ani w postaci normalnej Boyce'a-Codda", "correct": true, "explain": "Tak - zależność przechodnia Akademik→Adres (gdzie Akademik nie jest nadkluczem, a Adres jest atrybutem niekluczowym) narusza jednocześnie 3NF i BCNF." }
  ]
 },
 {
  "id": "Q082",
  "chapter": "G6",
  "chapterName": "Normalizacja: zależności funkcyjne i postacie normalne",
  "question": "Dany jest schemat relacyjny R = {Miasto, Ulica, Kod, Poczta}, F = {Miasto,Ulica→Kod; Kod→Poczta}. Schemat ten:",
  "topicTitle": "Wykrywanie zależności przechodniej (2)",
  "topicSummary": "Jedynym kluczem kandydującym jest tu {Miasto, Ulica}, bo {Miasto,Ulica}+ = {Miasto, Ulica, Kod, Poczta} = R. Zależność Kod→Poczta ma po lewej stronie atrybut niekluczowy Kod (nie jest on nadkluczem), a Poczta jest atrybutem niekluczowym - to zależność przechodnia (Miasto,Ulica→Kod→Poczta), łamiąca zarówno 3NF, jak i BCNF, tak samo jak w poprzednim przykładzie ze Studentem i Akademikiem.",
  "options": [
   { "key": "a", "text": "jest w postaci normalnej Boyce'a-Codda", "correct": false, "explain": "Nie - Kod→Poczta ma po lewej stronie atrybut Kod, który nie jest nadkluczem, więc łamie definicję BCNF." },
   { "key": "b", "text": "jest w III postaci normalnej, ale nie jest w postaci normalnej Boyce'a-Codda", "correct": false, "explain": "Nie - Kod→Poczta jest zależnością przechodnią atrybutu niekluczowego Poczta (przez inny atrybut niekluczowy Kod) od klucza {Miasto,Ulica}, co łamie już 3NF." },
   { "key": "c", "text": "jest w III postaci normalnej", "correct": false, "explain": "Nie - schemat zawiera zależność przechodnią, która narusza definicję 3NF." },
   { "key": "d", "text": "nie jest ani w III postaci normalnej, ani w postaci normalnej Boyce'a-Codda", "correct": true, "explain": "Tak - zależność przechodnia Kod→Poczta (Kod nie jest nadkluczem, Poczta jest atrybutem niekluczowym) narusza jednocześnie 3NF i BCNF." }
  ]
 },
 {
  "id": "Q129",
  "chapter": "G6",
  "chapterName": "Normalizacja: zależności funkcyjne i postacie normalne",
  "question": "Zależność funkcyjna dotyczy zależności między:",
  "topicTitle": "Zależność funkcyjna jest relacją między atrybutami",
  "topicSummary": "Zależność funkcyjna X → Y mówi, że wartość atrybutu (lub zbioru atrybutów) X jednoznacznie wyznacza wartość atrybutu Y - to relacja między atrybutami tej samej relacji, a nie między encjami, związkami czy konkretnie kluczem obcym a głównym (choć klucz główny sam jest szczególnym przypadkiem takiej zależności).",
  "options": [
   { "key": "a", "text": "atrybutami", "correct": true, "explain": "Tak - zależność funkcyjna X → Y opisuje, że wartość atrybutu (zbioru atrybutów) X jednoznacznie wyznacza wartość atrybutu Y." },
   { "key": "b", "text": "encjami", "correct": false, "explain": "Nie - to nie encje, lecz ich atrybuty są ze sobą powiązane zależnością funkcyjną." },
   { "key": "c", "text": "związkami", "correct": false, "explain": "Nie - zależność funkcyjna to pojęcie z teorii normalizacji dotyczące atrybutów, nie związków między encjami." },
   { "key": "d", "text": "kluczem obcym a kluczem głównym", "correct": false, "explain": "Nie - to zbyt wąskie ujęcie; zależność funkcyjna dotyczy dowolnych atrybutów, nie tylko pary klucz obcy-klucz główny." }
  ]
 },
 {
  "id": "Q130",
  "chapter": "G6",
  "chapterName": "Normalizacja: zależności funkcyjne i postacie normalne",
  "question": "Eliminacja zależności częściowych i przechodnich prowadzi do:",
  "topicTitle": "Normalizacja rozbija tabelę na więcej mniejszych tabel",
  "topicSummary": "Usunięcie zależności częściowych (2NF) i przechodnich (3NF) polega na wydzieleniu atrybutów, które od nich zależą, do osobnych tabel - stąd normalizacja do III postaci normalnej z reguły zwiększa liczbę tabel w schemacie (kosztem większej liczby złączeń przy odpytywaniu), eliminując za to redundancję.",
  "options": [
   { "key": "a", "text": "III postaci normalnej", "correct": true, "explain": "Tak - eliminacja zależności częściowych (2NF) i przechodnich (3NF) to dokładnie definicja doprowadzenia schematu do III postaci normalnej." },
   { "key": "b", "text": "zwiększenia liczby tabel", "correct": true, "explain": "Tak - eliminacja tych zależności polega na wydzieleniu powiązanych atrybutów do osobnych tabel, co zwiększa ich łączną liczbę w schemacie." },
   { "key": "c", "text": "zwiększenia liczby kolumn w istniejących tabelach", "correct": false, "explain": "Nie - przeciwnie, kolumny są wydzielane do NOWYCH tabel, a nie dokładane do istniejących." },
   { "key": "d", "text": "nie ma wpływu na liczbę tabel", "correct": false, "explain": "Nie - wydzielenie atrybutów do osobnych tabel z definicji zwiększa ich liczbę." }
  ]
 },
 {
  "id": "Q134",
  "chapter": "G6",
  "chapterName": "Normalizacja: zależności funkcyjne i postacie normalne",
  "question": "Dany jest schemat relacyjny R={Miasto, Ulica, Kod}, F = {Miasto,Ulica→Kod}. W której postaci normalnej jest ten schemat (zaznacz wszystkie spełnione)?",
  "topicTitle": "Schemat z jedną, prostą zależnością funkcyjną spełnia wszystkie postacie normalne",
  "topicSummary": "Jedyna zależność funkcyjna to Miasto,Ulica→Kod, a (Miasto,Ulica) jest jedynym kluczem. Jedyny atrybut nieklucza (Kod) zależy od całego klucza (2NF), nie istnieje żadna zależność przechodnia (3NF), a jedynym wyznacznikiem w ogóle jest sam klucz, więc jest on trywialnie nadkluczem (BCNF). Taki „prosty” schemat z jedną zależnością wprost od pełnego klucza spełnia więc wszystkie cztery postacie normalne naraz.",
  "options": [
   { "key": "a", "text": "I postać normalna", "correct": true, "explain": "Tak - wartości są atomowe." },
   { "key": "b", "text": "II postać normalna", "correct": true, "explain": "Tak - jedyny atrybut nieklucza (Kod) zależy od całego klucza, bez zależności częściowej." },
   { "key": "c", "text": "III postać normalna", "correct": true, "explain": "Tak - nie istnieje żadna zależność przechodnia, bo jest tylko jedna zależność funkcyjna, wprost od klucza." },
   { "key": "d", "text": "postać normalna Boyce'a-Codda", "correct": true, "explain": "Tak - jedynym wyznacznikiem w schemacie jest sam klucz (Miasto,Ulica), który z definicji jest nadkluczem, więc warunek BCNF jest spełniony." }
  ]
 },
 {
  "id": "Q164",
  "chapter": "G6",
  "chapterName": "Normalizacja: zależności funkcyjne i postacie normalne",
  "question": "Dany schemat relacyjny Książka(NAZWISKO_AUTORA, TYTUŁ, Imie_Autora, Kategoria) z zależnościami funkcyjnymi F = {Nazwisko_Autora → Imie_Autora; Tytuł → Kategoria} jest w:",
  "topicTitle": "Zależność częściowa od dwuatrybutowego klucza łamie 2NF",
  "topicSummary": "Kluczem jest tu para (Nazwisko_Autora, Tytuł) - dopiero razem te dwa atrybuty wyznaczają, za pomocą obu zależności, całą resztę (Imie_Autora i Kategorię). Zależność Nazwisko_Autora → Imie_Autora jest jednak zależnością CZĘŚCIOWĄ: Imie_Autora zależy tylko od części klucza (samego Nazwiska_Autora), a nie od całego klucza (Nazwisko_Autora, Tytuł) - to wprost łamie II postać normalną, więc schemat pozostaje jedynie w I postaci normalnej.",
  "options": [
   { "key": "a", "text": "drugiej postaci normalnej", "correct": false, "explain": "Nie - zależność Nazwisko_Autora → Imie_Autora jest zależnością częściową (Imie_Autora zależy tylko od części klucza), co wyklucza już II postać normalną." },
   { "key": "b", "text": "trzeciej postaci normalnej", "correct": false, "explain": "Nie - skoro schemat nie spełnia nawet II postaci normalnej, nie może spełniać silniejszej III postaci normalnej." },
   { "key": "c", "text": "pierwszej postaci normalnej", "correct": true, "explain": "Tak - wartości są atomowe, ale zależność częściowa Nazwisko_Autora → Imie_Autora od części klucza (Nazwisko_Autora, Tytuł) uniemożliwia osiągnięcie II postaci normalnej." }
  ]
 },
 {
  "id": "Q165",
  "chapter": "G6",
  "chapterName": "Normalizacja: zależności funkcyjne i postacie normalne",
  "question": "Dany jest schemat relacyjny Pracownik(DOWOD_OSOBISTY, Nazwisko, Adres_Prac, Nr_Działu, Nazwa_Działu), gdzie DOWOD_OSOBISTY jest kluczem głównym, oraz F = {Dowod_Osobisty → Nazwisko; Dowod_Osobisty → Adres_Prac; Dowod_Osobisty → Nr_Działu; Nr_Działu → Nazwa_Działu}. W których postaciach normalnych jest ten schemat?",
  "topicTitle": "Klucz jednoatrybutowy gwarantuje 2NF, ale zależność przechodnia łamie 3NF",
  "topicSummary": "Klucz (Dowod_Osobisty) jest tu jednoatrybutowy, więc zależność częściowa od klucza w ogóle nie jest możliwa (2NF jest spełniona automatycznie). Zależność Nr_Działu → Nazwa_Działu jest jednak zależnością PRZECHODNIĄ: Nr_Działu nie jest nadkluczem, a Nazwa_Działu nie jest atrybutem klucza - to łamie III postać normalną (a tym bardziej BCNF), więc schemat jest tylko w I i II postaci normalnej.",
  "options": [
   { "key": "a", "text": "I postać normalna", "correct": true, "explain": "Tak - wartości są atomowe, co jest warunkiem koniecznym każdej wyższej postaci normalnej." },
   { "key": "b", "text": "II postać normalna", "correct": true, "explain": "Tak - klucz jest jednoatrybutowy (Dowod_Osobisty), więc zależność częściowa od klucza nie może wystąpić, a 2NF jest spełniona automatycznie." },
   { "key": "c", "text": "III postać normalna", "correct": false, "explain": "Nie - Nr_Działu → Nazwa_Działu to zależność przechodnia (Nr_Działu nie jest nadkluczem, Nazwa_Działu nie jest atrybutem klucza), co łamie 3NF." },
   { "key": "d", "text": "postać normalna Boyce'a-Codda", "correct": false, "explain": "Nie - skoro schemat nie spełnia nawet III postaci normalnej, nie może spełniać silniejszej od niej BCNF." }
  ]
 },
 {
  "id": "Q033",
  "chapter": "G7",
  "chapterName": "Projektowanie schematów E-R (studia przypadków)",
  "question": "Studenci mają pomysły. Każdy pomysł dotyczy pewnej rzeczy. Każdy pomysł przychodzi do głowy dokładnie jednemu studentowi. Student może się podzielić pomysłem z kolegami-studentami. Który ze schematów jest najodpowiedniejszy z punktu widzenia zasad projektowania baz danych?",
  "topicTitle": "Autorstwo (1:N) vs. udostępnianie (N:M)",
  "topicSummary": "To zadanie łączy dwa różne związki: \"pomysł ma dokładnie jednego autora\" to klasyczny związek 1:N, realizowany kluczem obcym id_studenta w tabeli Pomysły (a nie odwrotnie). \"Student może podzielić się pomysłem z wieloma kolegami\" to związek N:M i wymaga osobnej tabeli łączącej bez dodatkowych, zduplikowanych atrybutów osoby - kolega to po prostu inny wiersz w Studenci.",
  "options": [
   { "key": "a", "text": "Studenci(id_studenta, imię, nazwisko, adres, id_pomysłu); Pomysły(id_pomysłu, rzecz, opis); Koledzy(id_kolegi, imię, nazwisko, id_studenta, id_pomysłu)", "correct": false, "explain": "Nie - id_pomysłu w Studenci sugeruje, że student ma co najwyżej jeden pomysł, co nie wynika z treści zadania. Dodatkowo Koledzy niepotrzebnie duplikuje imię/nazwisko zamiast po prostu odwoływać się do istniejącego wiersza w Studenci." },
   { "key": "b", "text": "Studenci(id_studenta, imię, nazwisko, adres, id_kolegi); Pomysły(id_pomysłu, rzecz, opis, id_studenta); Koledzy(id_kolegi, imię, nazwisko, id_studenta, id_pomysłu)", "correct": false, "explain": "Nie - Studenci odwołuje się do Koledzy przez id_kolegi, a Koledzy odwołuje się z powrotem do Studenci przez id_studenta - to zapętlone, niejasne powiązanie, a imię/nazwisko wciąż jest zbędnie zduplikowane." },
   { "key": "c", "text": "Studenci(id_studenta, imię, nazwisko, adres); Pomysły(id_pomysłu, rzecz, opis, id_studenta); Koledzy(id_pomysłu, id_kolegi)", "correct": true, "explain": "Tak - id_studenta w Pomysły poprawnie realizuje \"dokładnie jeden autor\" (1:N: student -> pomysły). Koledzy(id_pomysłu, id_kolegi) to czysta tabela łącząca N:M bez zbędnych, zduplikowanych atrybutów - id_kolegi po prostu wskazuje na istniejącego studenta." },
   { "key": "d", "text": "Studenci(id_studenta, imię, nazwisko, adres); Pomysły(id_pomysłu, rzecz, opis, id_studenta, id_kolegi)", "correct": false, "explain": "Nie - id_kolegi bezpośrednio w Pomysły pozwala na powiązanie pomysłu tylko z jednym kolegą, a treść zadania mówi o możliwości podzielenia się pomysłem z (wieloma) kolegami-studentami." }
  ]
 },
 {
  "id": "Q034",
  "chapter": "G7",
  "chapterName": "Projektowanie schematów E-R (studia przypadków)",
  "question": "Studenci lubią się, są sobie obojętni lub nie znoszą się (nie ma innej możliwości). Który ze schematów jest najodpowiedniejszy z punktu widzenia zasad projektowania baz danych?",
  "topicTitle": "Kategoryczna relacja między encjami tego samego typu",
  "topicSummary": "Gdy związek jest samoodwołujący (student-student) i ma kilka rozłącznych wariantów, można je modelować przez osobne tabele asocjacyjne dla każdego wariantu, pod warunkiem że druga strona relacji odwołuje się wprost do klucza głównego Studenci, a nie duplikuje jego atrybuty (imię, nazwisko) w osobnej, pomocniczej encji. Skoro „nie ma innej możliwości” niż lubi/nie znosi/obojętny, stan „obojętny” jest w pełni wyznaczony przez brak wpisu w obu pozostałych tabelach - jego jawne przechowywanie w osobnej tabeli jest więc zbędną redundancją.",
  "options": [
   { "key": "a", "text": "Studenci(id_studenta, imię, nazwisko); Koledzy(id_kolegi, imię, nazwisko, id_studenta, id_stosunku_do); Stosunek(id_stosunku_do, stosunek_do)", "correct": false, "explain": "Nie - Koledzy niepotrzebnie duplikuje imię i nazwisko, mimo że \"kolega\" to po prostu inny student już opisany w Studenci; wystarczyłoby odwołanie do id_studenta." },
   { "key": "b", "text": "Studenci(id_studenta, imię, nazwisko); Koledzy(id_kolegi, imię, nazwisko, id_studenta, stosunek_do)", "correct": false, "explain": "Nie - podobny problem jak w a) (zduplikowane imię/nazwisko), a dodatkowo stosunek_do jako dowolny tekst zamiast ustandaryzowanej wartości/klucza jest mniej bezpieczny (podatny na literówki, niespójne wartości)." },
   { "key": "c", "text": "Studenci(id_studenta, imię, nazwisko); Lubi(id_studenta, id_kolegi); Nie_znosi(id_studenta, id_kolegi); Obojętny(id_studenta, id_kolegi)", "correct": false, "explain": "Nie - trzy tabele odwołują się wprost do Studenci bez duplikowania jego atrybutów, ale skoro innej możliwości niż te trzy stany nie ma, tabela Obojętny jest zbędna: ten stan i tak wynika z samej nieobecności pary w Lubi i w Nie_znosi. Wariant d) bez tej tabeli jest równie kompletny i ma mniej redundancji." },
   { "key": "d", "text": "Studenci(id_studenta, imię, nazwisko); Lubi(id_studenta, id_kolegi); Nie_znosi(id_studenta, id_kolegi)", "correct": true, "explain": "Tak - dwie tabele łączące, odwołujące się wprost do Studenci, w pełni pokrywają wszystkie trzy możliwe stany: „lubi” i „nie znosi” to wpisy w odpowiednich tabelach, a „obojętny” to po prostu brak wpisu w obu - bez zbędnej, redundantnej trzeciej tabeli." }
  ]
 },
 {
  "id": "Q035",
  "chapter": "G7",
  "chapterName": "Projektowanie schematów E-R (studia przypadków)",
  "question": "W domach mieszkają zwierzęta domowe. Niektóre zwierzęta zjadają się wzajemnie. Domy mogą być położone obok siebie. Jaki schemat zgodny z zasadami projektowania schematów baz danych jest najodpowiedniejszy dla organizacji zajmującej się ochroną zwierząt?",
  "topicTitle": "Relacja na poziomie kategorii vs. egzemplarza",
  "topicSummary": "\"Zjadanie się\" to cecha rodzaju/gatunku zwierzęcia (np. kot zjada mysz), więc warto modelować ją między rekordami tabeli Rodzaje, a nie między pojedynczymi egzemplarzami zwierząt. Sąsiedztwo dotyczy domów, nie zwierząt, więc odpowiednia tabela łącząca powinna odwoływać się do Domy. Trzymanie wielu zwierząt w jednym domu wymaga też, by to Zwierzęta miały FK do Domy, a nie odwrotnie.",
  "options": [
   { "key": "a", "text": "Domy(id_domu, adres, id_zwierzę); Zwierzęta(id_zwierzę, rodzaj, id_zw_zjadane)", "correct": false, "explain": "Nie - id_zwierzę w Domy ogranicza dom do jednego zwierzęcia; relacja \"zjada\" na poziomie pojedynczego zwierzęcia (a nie gatunku) jest nienaturalna, a brak jest w ogóle tabeli sąsiedztwa domów." },
   { "key": "b", "text": "Domy(id_domu, adres); Zwierzęta(id_zwierzę, id_rodzaju, id_domu); Rodzaje(id_rodzaju, rodzaj); Obok_siebie(id_domu1, id_domu2); Zjada(id_rodz_je, id_rodz_zjadane)", "correct": true, "explain": "Tak - Zwierzęta.id_domu pozwala na wiele zwierząt w jednym domu; Zjada łączy rodzaje (gatunki), co odpowiada rzeczywistej wiedzy (\"koty zjadają myszy\"); Obok_siebie poprawnie łączy domy, nie zwierzęta." },
   { "key": "c", "text": "Domy(id_domu, adres); Zwierzęta(id_zwierzę, id_rodzaju, id_domu); Rodzaje(id_rodzaju, rodzaj); Sąsiedzi(id_zwierzę1, id_zwierzę2); Zjada(id_rodz_je, id_rodz_zjadane)", "correct": false, "explain": "Nie - sąsiedztwo dotyczy domów, a nie zwierząt; tabela Sąsiedzi łącząca id_zwierzę1/id_zwierzę2 błędnie modeluje relację, która powinna łączyć Domy." },
   { "key": "d", "text": "Domy(id_domu, adres, id_zwierzę, rodzaj); Obok_siebie(id_domu1, id_domu2); Zjada(id_zw_je, id_zw_zjadane)", "correct": false, "explain": "Nie - id_zwierzę i rodzaj bezpośrednio w Domy ograniczają dom do jednego zwierzęcia jednego gatunku, a Zjada na poziomie pojedynczych zwierząt zamiast gatunków jest niepraktyczne i nienaturalne." }
  ]
 },
 {
  "id": "Q036",
  "chapter": "G7",
  "chapterName": "Projektowanie schematów E-R (studia przypadków)",
  "question": "W filmach grają aktorzy. Każdy film ma dokładnie jednego reżysera i jednego lub więcej scenarzystę. Który z poniższych schematów jest najodpowiedniejszy z punktu widzenia zasad projektowania baz danych?",
  "topicTitle": "Jedna encja \"Osoba\" zamiast wielu encji wg roli",
  "topicSummary": "Aktor, scenarzysta i reżyser to w istocie ta sama encja \"Osoba\" pełniąca różne role w różnych filmach - lepiej modelować to jedną tabelą Osoby i jedną tabelą \"Zespół\" z kolumną rola, niż tworzyć osobne tabele Aktorzy/Scenarzyści powielające te same atrybuty osoby.",
  "options": [
   { "key": "a", "text": "Filmy(id_filmu, tytuł, reżyser, gaża_reżysera); Aktorzy(id_aktora, nazwisko, rola, id_filmu, gaża); Scenarzyści(id_scenarzysty, nazwisko, id_filmu, gaża)", "correct": false, "explain": "Nie - reżyser jako tekst w Filmy zamiast klucza obcego do osobnej encji osoby uniemożliwia spójne powiązanie z jego innymi rolami; Aktorzy i Scenarzyści to dwie osobne, równoległe tabele powielające tę samą strukturę osoby." },
   { "key": "b", "text": "Filmy(id_filmu, tytuł, id_reżysera, gaża_reżysera); Osoby(id_osoby, nazwisko); Aktorzy(id_aktora, id_filmu, rola, gaża); Scenarzyści(id_scenarzysty, id_filmu, gaża)", "correct": false, "explain": "Nie - mimo wprowadzenia wspólnej tabeli Osoby, Aktorzy i Scenarzyści nadal są osobnymi, zdublowanymi strukturalnie tabelami zamiast jednej uniwersalnej tabeli ról zespołu, a gaża_reżysera trzymana osobno w Filmy łamie spójny wzorzec." },
   { "key": "c", "text": "Filmy(id_filmu, tytuł, id_reżysera); Osoby(id_osoby, nazwisko); Zespół(id_osoby, id_filmu, rola, gaża)", "correct": true, "explain": "Tak - jedna tabela Osoby dla wszystkich ludzi (aktorów, scenarzystów, reżyserów) i jedna uniwersalna tabela Zespół z kolumną rola elegancko obsługuje dowolną liczbę scenarzystów i aktorów, a id_reżysera w Filmy wymusza dokładnie jednego reżysera na film." },
   { "key": "d", "text": "Zespół(tytuł_filmu, nazwisko_osoby, rola, gaża)", "correct": false, "explain": "Nie - brak osobnych tabel Filmy i Osoby oznacza posługiwanie się kluczami naturalnymi (tytuł, nazwisko) zamiast identyfikatorów, co powoduje duplikację tekstu w każdym wierszu i podatność na niespójności (literówki, zmiany tytułu/nazwiska)." }
  ]
 },
 {
  "id": "Q037",
  "chapter": "G7",
  "chapterName": "Projektowanie schematów E-R (studia przypadków)",
  "question": "Politycy należą do partii politycznych (czasami je zmieniają, czasami dokonują ich podziału). Partie polityczne, przed wyborami, tworzą koalicje wyborcze. Który z poniższych schematów jest najodpowiedniejszy z punktu widzenia zasad projektowania baz danych?",
  "topicTitle": "Modelowanie historii przynależności w czasie",
  "topicSummary": "Skoro polityk może zmieniać partię, a partia może zmieniać koalicję, przynależność nie jest cechą stałą - musi być osobną, powtarzalną tabelą z zakresem dat (od, do), a nie pojedynczą kolumną w tabeli głównej encji (bo to ograniczyłoby historię do jednego, aktualnego wpisu).",
  "options": [
   { "key": "a", "text": "Politycy(id_polityka, imię, nazwisko); Partie(id_partii, nazwa, od, do); Koalicje(id_koalicji, data_wyborów); Członkowie(id_partii, id_osoby, od, do); W_koalicji(id_partii, id_koalicji, od, do)", "correct": true, "explain": "Tak - Członkowie i W_koalicji to osobne, powtarzalne tabele historii z datami od/do, pozwalające zapisać wiele kolejnych przynależności polityka do partii i partii do koalicji w czasie." },
   { "key": "b", "text": "Osoby(id_osoby, imię, nazwisko, id_partii); Partie(id_partii, nazwa, id_koalicji); Politycy(id_osoby, id_partii, od, do); Koalicje(id_koalicji, data_wyborów)", "correct": false, "explain": "Nie - id_partii bezpośrednio w Osoby i id_koalicji bezpośrednio w Partie pozwalają zapisać tylko jedną, bieżącą przynależność, tracąc historię zmian; dodatkowo Politycy dubluje tę informację niespójnie." },
   { "key": "c", "text": "Partie(id_partii, nazwa, koalicja, polityk, od, do)", "correct": false, "explain": "Nie - jedna, w pełni spłaszczona tabela mieszająca partie, koalicje i polityków w kolumnach tekstowych to skrajna denormalizacja, uniemożliwiająca poprawne modelowanie wielu polityków w partii czy historii zmian." },
   { "key": "d", "text": "Politycy(id_polityka, imię, nazwisko, id_partii, od, do); Partie(id_partii, nazwa, od, do); Koalicje(id_koalicji, data_wyborów); W_koalicji(id_partii, id_koalicji, od, do)", "correct": false, "explain": "Nie - id_partii/od/do wpisane bezpośrednio w Politycy pozwalają zapisać tylko jedną przynależność partyjną na wiersz polityka, więc historia zmian partii (opisana w treści zadania) nie może być zapisana bez duplikowania całego rekordu polityka." }
  ]
 },
 {
  "id": "Q038",
  "chapter": "G7",
  "chapterName": "Projektowanie schematów E-R (studia przypadków)",
  "question": "Studenci planują, czym chcieliby się zajmować w swojej przyszłej pracy zawodowej i jakie stanowiska chcieliby pełnić. Który z poniższych schematów jest najodpowiedniejszy z punktu widzenia zasad projektowania baz danych?",
  "topicTitle": "Dwie niezależne relacje N:M",
  "topicSummary": "Wybór zajęć i wybór stanowisk to dwie odrębne, niezależne od siebie relacje wiele-do-wielu (student może wybrać kilka zajęć i niezależnie kilka stanowisk) - należy modelować je dwiema osobnymi tabelami łączącymi, a nie jedną tabelą wiążącą oba wybory naraz w pojedynczym wierszu.",
  "options": [
   { "key": "a", "text": "Studenci(id_studenta, imię, nazwisko); Zajęcia(id_zajęcia, nazwa); Stanowiska(id_stanowiska, nazwa); Kto_co(id_studenta, id_stanowiska, id_zajęcia)", "correct": false, "explain": "Nie - łącząc id_stanowiska i id_zajęcia w jednym wierszu Kto_co, sztucznie parujemy wybory (student musiałby dodawać osobny wiersz dla każdej kombinacji zajęcie-stanowisko), zamiast pozwolić na niezależne listy wyborów." },
   { "key": "b", "text": "Studenci(id_studenta, imię, nazwisko, rok); Zajęcia(id_zajęcia, nazwa); Stanowiska(id_stanowiska, nazwa); Jakie_zajęcie(id_studenta, id_zajęcia); Jakie_stanowisko(id_studenta, id_stanowiska)", "correct": true, "explain": "Tak - dwie osobne tabele łączące poprawnie i niezależnie od siebie modelują relacje N:M student-zajęcie oraz student-stanowisko." },
   { "key": "c", "text": "Studenci(imię, nazwisko, rok, zajęcie, stanowisko)", "correct": false, "explain": "Nie - pojedyncze kolumny zajęcie i stanowisko w Studenci pozwalają zapisać tylko jeden wybór każdego rodzaju na studenta, a treść zadania nie ogranicza liczby wybieranych zajęć/stanowisk." },
   { "key": "d", "text": "Studenci(id_studenta, imię, nazwisko, rok); Kto_co(id_studenta, stanowisko, zajęcie)", "correct": false, "explain": "Nie - poza tym samym problemem sztucznego parowania wyborów co w a), stanowisko i zajęcie jako wolny tekst zamiast kluczy obcych do słownikowych tabel tracą spójność i możliwość ponownego użycia tych samych nazw." }
  ]
 },
 {
  "id": "Q040",
  "chapter": "G7",
  "chapterName": "Projektowanie schematów E-R (studia przypadków)",
  "question": "W PJWSTK powstaje baza danych z informacjami, jakie oprogramowanie jest zainstalowane w poszczególnych salach - z myślą o prowadzeniu w nich ćwiczeń z odpowiednich przedmiotów. Który ze schematów jest najodpowiedniejszy z punktu widzenia zasad projektowania baz danych?",
  "topicTitle": "Programy jako osobna encja z dwiema relacjami N:M",
  "topicSummary": "Program (z konkretną wersją) to samodzielna encja, którą warto opisać raz i powiązać z salami (gdzie jest zainstalowany, z liczbą instalacji) oraz z przedmiotami (do których jest przydatny) przez dwie osobne tabele łączące - bez powielania nazwy/wersji programu jako zwykłego tekstu w innych tabelach.",
  "options": [
   { "key": "a", "text": "Sale(numer_sali, nazwa_programu, wersja, ile_instalacji); Programy(nazwa_programu, wersja, nazwa_przedmiotu)", "correct": false, "explain": "Nie - nazwa_programu i wersja jako tekst w Sale zamiast klucza obcego do encji programu to redundancja, a nazwa_przedmiotu bezpośrednio w Programy wiąże każdy program tylko z jednym przedmiotem." },
   { "key": "b", "text": "Programy(id_programu, firma, nazwa, wersja); Przedmioty(id_przedmiotu, nazwa); Sale_programy(nr_sali, id_programu, ile_instalacji); Przedmioty_programy(id_przedmiotu, id_programu)", "correct": true, "explain": "Tak - Programy jest osobną encją, a Sale_programy i Przedmioty_programy to dwie niezależne tabele łączące realizujące relacje N:M program-sala i program-przedmiot bez powielania danych programu." },
   { "key": "c", "text": "Programy(id_programu, firma, nazwa, wersja, nazwa_przedmiotu); Sale_programy(nr_sali, id_programu, wersja, ile_instalacji)", "correct": false, "explain": "Nie - nazwa_przedmiotu bezpośrednio w Programy wiąże program tylko z jednym przedmiotem, a wersja powielona ponownie w Sale_programy jest zbędna, skoro id_programu już jednoznacznie identyfikuje wersję." },
   { "key": "d", "text": "Sale(id_sali, numer, ile_komputerów); Programy(id_programu, firma, nazwa, wersja); Przedmioty(id_przedmiotu, nazwa); Sale_programy(id_sali, id_programu, wersja, ile_instalacji); Przedmioty_programy(id_przedmiotu, id_programu, wersja)", "correct": false, "explain": "Nie - wersja jest niepotrzebnie powielona zarówno w Sale_programy, jak i w Przedmioty_programy, mimo że jest już jednoznacznie określona przez id_programu - to ten sam problem redundancji, co w wariancie c)." }
  ]
 },
 {
  "id": "Q041",
  "chapter": "G7",
  "chapterName": "Projektowanie schematów E-R (studia przypadków)",
  "question": "Który ze schematów bazy danych dla biblioteki jest najodpowiedniejszy z punktu widzenia zasad projektowania baz danych? Baza powinna przechowywać informacje o klientach, książkach i wypożyczeniach (wielkie litery oznaczają klucz główny):",
  "topicTitle": "Dobór klucza głównego tabeli zdarzeń",
  "topicSummary": "Wypożyczenie jest zdarzeniem, które może się powtarzać dla tej samej pary klient-książka (ten sam klient może wypożyczyć tę samą książkę ponownie kiedy indziej), więc kluczem musi być trójka (klient, książka, data wypożyczenia). Data zwrotu nie może być częścią klucza, bo w chwili wypożyczenia jest jeszcze nieznana (NULL) i jest uzupełniana później.",
  "options": [
   { "key": "a", "text": "Klient(ID_KLIENTA, imię, nazwisko, adres); Książka(ID_KSIĄŻKI, tytuł, autor); Wypożyczenie(ID_KLIENTA, id_książki, data_wypożyczenia, data_zwrotu)", "correct": false, "explain": "Nie - kluczem jest tu tylko ID_KLIENTA, co pozwoliłoby jednemu klientowi mieć w tabeli tylko jedno wypożyczenie w całej historii - to zbyt restrykcyjne." },
   { "key": "b", "text": "Klient(ID_KLIENTA, imię, nazwisko, adres); Książka(ID_KSIĄŻKI, tytuł, autor); Wypożyczenie(ID_KLIENTA, ID_KSIĄŻKI, data_wypożyczenia, data_zwrotu)", "correct": false, "explain": "Nie - klucz (klient, książka) bez daty uniemożliwia temu samemu klientowi wypożyczenie tej samej książki po raz drugi w innym terminie." },
   { "key": "c", "text": "Klient(ID_KLIENTA, imię, nazwisko, adres); Książka(ID_KSIĄŻKI, tytuł, autor); Wypożyczenie(ID_KLIENTA, ID_KSIĄŻKI, DATA_WYPOŻYCZENIA, data_zwrotu)", "correct": true, "explain": "Tak - klucz (klient, książka, data wypożyczenia) pozwala na wielokrotne wypożyczanie tej samej książki przez tego samego klienta, a data_zwrotu pozostaje zwykłym, aktualizowalnym (i początkowo pustym) atrybutem." },
   { "key": "d", "text": "Klient(ID_KLIENTA, imię, nazwisko, adres); Książka(ID_KSIĄŻKI, tytuł, autor); Wypożyczenie(ID_KLIENTA, ID_KSIĄŻKI, DATA_WYPOŻYCZENIA, DATA_ZWROTU)", "correct": false, "explain": "Nie - data_zwrotu jako część klucza głównego jest problematyczna, bo w chwili rejestrowania wypożyczenia jest jeszcze nieznana (typowo NULL), a klucz główny nie powinien opierać się na wartości ustalanej dopiero później." }
  ]
 },
 {
  "id": "Q042",
  "chapter": "G7",
  "chapterName": "Projektowanie schematów E-R (studia przypadków)",
  "question": "Potrzebna jest baza danych do ewidencji studentów i ich ocen. Który ze schematów bazy danych jest najodpowiedniejszy z punktu widzenia zasad projektowania baz danych?",
  "topicTitle": "Oceny jako osobna, powtarzalna encja",
  "topicSummary": "Student może mieć wiele ocen z wielu przedmiotów w czasie - ocena musi więc być osobną tabelą z kluczami obcymi do studenta i przedmiotu, a nie pojedynczą kolumną wbudowaną w tabelę Student, bo to ograniczyłoby studenta do jednej oceny w całej jego edukacji.",
  "options": [
   { "key": "a", "text": "Student(id_studenta, imię, nazwisko); Ocena(id_oceny, ocena, data_wystawienia, nazwa_przedmiotu)", "correct": false, "explain": "Nie - Ocena w ogóle nie ma odwołania do studenta (brak id_studenta), więc nie da się ustalić, czyja to ocena; dodatkowo nazwa_przedmiotu jako tekst zamiast osobnej tabeli Przedmiot jest niespójna." },
   { "key": "b", "text": "Student(id_studenta, imię, nazwisko); Ocena(id_oceny, ocena, data_wystawienia, id_przedmiotu, id_studenta); Przedmiot(id_przedmiotu, nazwa)", "correct": true, "explain": "Tak - Ocena jest osobną, powtarzalną tabelą z FK do Student i do Przedmiot, więc jeden student może mieć dowolnie wiele ocen z dowolnie wielu przedmiotów." },
   { "key": "c", "text": "Student(id_studenta, imię, nazwisko, id_oceny); Ocena(id_oceny, ocena, data_wystawienia, id_przedmiotu); Przedmiot(id_przedmiotu, nazwa)", "correct": false, "explain": "Nie - id_oceny bezpośrednio w Student ogranicza studenta do dokładnie jednej oceny, co jest niezgodne z rzeczywistością (student ma wiele ocen z wielu przedmiotów w czasie)." },
   { "key": "d", "text": "Student(id_studenta, imię, nazwisko, ocena); Przedmiot(id_przedmiotu, nazwa, id_studenta)", "correct": false, "explain": "Nie - kolumna ocena bezpośrednio w Student znów ogranicza do jednej oceny na studenta, a id_studenta w Przedmiot odwraca sens związku (sugerowałby, że przedmiot należy do jednego studenta, podczas gdy wielu studentów uczęszcza na ten sam przedmiot)." }
  ]
 },
 {
  "id": "Q080",
  "chapter": "G7",
  "chapterName": "Projektowanie schematów E-R (studia przypadków)",
  "question": "Encje ZAMÓWIENIE i SZCZEGÓŁY_ZAMÓWIENIA (z zależnością „jednego zamówienia dotyczy kilka szczegółów”) połączone są związkiem:",
  "topicTitle": "Typ związku 1:N między nagłówkiem a pozycjami",
  "topicSummary": "To klasyczny, bardzo częsty wzorzec \"nagłówek dokumentu i jego pozycje\": jedno zamówienie może mieć wiele wierszy szczegółów, ale każdy wiersz szczegółów należy do dokładnie jednego zamówienia. To wprost definicja związku jeden-do-wielu, realizowanego kluczem obcym do zamówienia w tabeli szczegółów, bez potrzeby dodatkowej tabeli łączącej.",
  "options": [
   { "key": "a", "text": "wymagającym dodatkowej encji łączącej", "correct": false, "explain": "Nie - dodatkowa encja łącząca jest potrzebna dopiero przy związkach wiele-do-wielu; tu wystarczy zwykły klucz obcy w tabeli szczegółów." },
   { "key": "b", "text": "wiele - wiele", "correct": false, "explain": "Nie - pojedynczy wiersz szczegółów zamówienia należy do dokładnie jednego zamówienia, więc to nie jest związek wiele-do-wielu." },
   { "key": "c", "text": "wiele - jeden", "correct": false, "explain": "Nie - to ta sama krotność co jeden-wiele, tylko nazwana z przeciwnej strony niż wskazuje przyjęta w zadaniu konwencja (ZAMÓWIENIE jako strona „jeden”)." },
   { "key": "d", "text": "jeden - wiele", "correct": true, "explain": "Tak - jedno zamówienie (strona „jeden”) może mieć wiele wierszy szczegółów (strona „wiele”), co jest wprost opisane w treści zadania." }
  ]
 },
 {
  "id": "Q123",
  "chapter": "G7",
  "chapterName": "Projektowanie schematów E-R (studia przypadków)",
  "question": "Relacja PAŃSTWO - RZEKA (\"przepływa przez\") jest relacją:",
  "topicTitle": "Rzeka może przepływać przez wiele państw i odwrotnie",
  "topicSummary": "Jedna rzeka (np. Dunaj) często przepływa przez wiele państw, a jedno państwo ma na swoim terytorium wiele rzek - to typowy związek wiele-do-wielu, który w modelu relacyjnym wymaga dodatkowej tabeli asocjacyjnej łączącej klucze obce do obu tabel (Państwo i Rzeka), bo żadna z tabel osobno nie pomieściłaby takiego związku bez redundancji.",
  "options": [
   { "key": "a", "text": "jeden - wiele", "correct": false, "explain": "Nie - jedno państwo może mieć wiele rzek, ale też jedna rzeka może przepływać przez wiele państw, więc związek nie jest jednokierunkowo „jeden-wiele”." },
   { "key": "b", "text": "wiele - jeden", "correct": false, "explain": "Nie - z tych samych powodów związek nie jest jednokierunkowo „wiele-jeden”." },
   { "key": "c", "text": "wiele - wiele", "correct": true, "explain": "Tak - jedna rzeka może przepływać przez wiele państw, a jedno państwo może mieć wiele rzek, co jest definicją związku wiele-do-wielu." },
   { "key": "d", "text": "wymaga dodania encji asocjacyjnej", "correct": true, "explain": "Tak - związek wiele-do-wielu nie da się zapisać samym kluczem obcym w żadnej z dwóch tabel i wymaga dodatkowej tabeli łączącej (asocjacyjnej) z kluczami obcymi do obu encji." }
  ]
 },
 {
  "id": "Q124",
  "chapter": "G7",
  "chapterName": "Projektowanie schematów E-R (studia przypadków)",
  "question": "Z ilu tabel powinna się składać prosta znormalizowana baza zawierająca informacje o piętrach, pokojach i przynależności \"jeden do wielu\" między nimi:",
  "topicTitle": "Związek 1:N wystarczy zapisać kluczem obcym - bez dodatkowej tabeli",
  "topicSummary": "Związek jeden-do-wielu (jedno piętro ma wiele pokoi, ale każdy pokój należy do dokładnie jednego piętra) nie wymaga osobnej tabeli łączącej - wystarczy klucz obcy do piętra umieszczony bezpośrednio w tabeli Pokoje. Stąd cała, znormalizowana baza składa się z dokładnie dwóch tabel: Piętra i Pokoje.",
  "options": [
   { "key": "a", "text": "1", "correct": false, "explain": "Nie - jedna tabela nie rozdzieliłaby dwóch różnych encji (piętro i pokój) o różnych atrybutach." },
   { "key": "b", "text": "2", "correct": true, "explain": "Tak - związek 1:N między piętrami a pokojami zapisuje się kluczem obcym w tabeli Pokoje wskazującym na Piętra, bez potrzeby dodatkowej tabeli łączącej - stąd dokładnie dwie tabele." },
   { "key": "c", "text": "3", "correct": false, "explain": "Nie - trzecia, dodatkowa tabela łącząca byłaby potrzebna dopiero dla związku wiele-do-wielu, a nie jeden-do-wielu." },
   { "key": "d", "text": "4", "correct": false, "explain": "Nie - to zdecydowanie więcej tabel, niż wymaga prosty związek 1:N między dwiema encjami." }
  ]
 },
 {
  "id": "Q125",
  "chapter": "G7",
  "chapterName": "Projektowanie schematów E-R (studia przypadków)",
  "question": "Encje PREZYDENT i PAŃSTWO (z zależnością \"kieruje\") połączone są związkiem:",
  "topicTitle": "Prezydent i państwo - związek wiele-do-wielu w ujęciu historycznym",
  "topicSummary": "Patrząc na dane historycznie (a nie tylko na chwilę obecną), jeden prezydent może w swojej karierze kierować więcej niż jednym państwem, a jedno państwo miało w swojej historii wielu różnych prezydentów - to czyni związek „kieruje” związkiem wiele-do-wielu, wymagającym tabeli asocjacyjnej (np. z okresem sprawowania urzędu), a nie prostego klucza obcego w jedną stronę.",
  "options": [
   { "key": "a", "text": "wymagającym dodatkowej encji asocjacyjnej", "correct": false, "explain": "Uwaga - to stwierdzenie samo w sobie jest prawdziwe dla związku wiele-do-wielu (i jest bezpośrednią konsekwencją odpowiedzi C), ale nie opisuje wprost typu/liczebności związku, o który pyta polecenie." },
   { "key": "b", "text": "jeden - wiele", "correct": false, "explain": "Nie - to pomijałoby możliwość, że jeden prezydent w historii kierował więcej niż jednym państwem." },
   { "key": "c", "text": "wiele - wiele", "correct": true, "explain": "Tak - w ujęciu historycznym jeden prezydent może kierować wieloma państwami (w różnych okresach), a jedno państwo ma wielu prezydentów na przestrzeni swojej historii, co jest związkiem wiele-do-wielu." },
   { "key": "d", "text": "wiele - jeden", "correct": false, "explain": "Nie - to pomijałoby możliwość, że jedno państwo miało w swojej historii wielu różnych prezydentów." }
  ]
 },
 {
  "id": "Q166",
  "chapter": "G7",
  "chapterName": "Projektowanie schematów E-R (studia przypadków)",
  "question": "Z ilu tabel powinna się składać prosta znormalizowana baza zawierająca informacje o częściach, urządzeniach i przynależności \"wiele do wielu\" między nimi:",
  "topicTitle": "Związek N:M wymaga trzeciej, łączącej tabeli",
  "topicSummary": "W odróżnieniu od związku 1:N (który zapisuje się samym kluczem obcym, bez dodatkowej tabeli), związek wiele-do-wielu (część może wchodzić w skład wielu urządzeń, a urządzenie ma wiele części) wymaga TRZECIEJ, dodatkowej tabeli łączącej (asocjacyjnej) z kluczami obcymi do obu encji. Stąd cała, znormalizowana baza składa się z trzech tabel: Części, Urządzenia i tabeli łączącej między nimi.",
  "options": [
   { "key": "a", "text": "2", "correct": false, "explain": "Nie - dwie tabele (same encje, bez łączącej) wystarczyłyby dla związku 1:N, nie dla wiele-do-wielu." },
   { "key": "b", "text": "4", "correct": false, "explain": "Nie - to więcej tabel, niż wymaga prosty związek M:N między dwiema encjami." },
   { "key": "c", "text": "1", "correct": false, "explain": "Nie - jedna tabela nie rozdzieliłaby dwóch różnych encji (część i urządzenie) o różnych atrybutach." },
   { "key": "d", "text": "3", "correct": true, "explain": "Tak - związek wiele-do-wielu wymaga osobnej, trzeciej tabeli łączącej (asocjacyjnej) obok tabel Części i Urządzenia." }
  ]
 },
 {
  "id": "Q043",
  "chapter": "G8",
  "chapterName": "Podstawy SQL w dialekcie SQL Server",
  "question": "Dana jest tabela Osoby(Imie, Nazwisko, Zarobki). Które z następujących instrukcji są składniowo poprawnymi instrukcjami SQL w SQL Server?",
  "topicTitle": "Obowiązkowe klauzule FROM i SET",
  "topicSummary": "SELECT bez FROM jest błędem składniowym (chyba że w ogóle nie odwołuje się do żadnej tabeli, np. SELECT 1). INSERT INTO ... VALUES nie przyjmuje klauzuli WHERE - warunek nie ma tu sensu, bo wstawiamy jeden, konkretny wiersz. Natomiast DELETE i UPDATE mogą (ale nie muszą) mieć WHERE - bez niego operacja obejmuje wszystkie wiersze tabeli.",
  "options": [
   { "key": "a", "text": "SELECT Osoby.Nazwisko, Osoby.Imie, Osoby.Zarobki WHERE Osoby.Zarobki >1000;", "correct": false, "explain": "Niepoprawne - brakuje klauzuli FROM Osoby, a SELECT odwołujący się do kolumn tabeli musi ją wskazać we FROM." },
   { "key": "b", "text": "INSERT INTO Osoby VALUES ('Jan', 'Kowalski', 2000) WHERE 'KOWALSKI' = 'KOWALSKI';", "correct": false, "explain": "Niepoprawne - INSERT ... VALUES nie obsługuje klauzuli WHERE." },
   { "key": "c", "text": "DELETE FROM Osoby WHERE 'KOWALSKI'='KOWALSKI';", "correct": true, "explain": "Poprawne - to składniowo prawidłowy DELETE z warunkiem, który akurat jest zawsze prawdziwy (usunie więc wszystkie wiersze), ale nie jest to błąd składni." },
   { "key": "d", "text": "UPDATE Osoby SET Nazwisko='KOWALSKI';", "correct": true, "explain": "Poprawne - UPDATE bez WHERE jest składniowo poprawny; zaktualizuje po prostu wszystkie wiersze tabeli." }
  ]
 },
 {
  "id": "Q044",
  "chapter": "G8",
  "chapterName": "Podstawy SQL w dialekcie SQL Server",
  "question": "Dana jest tabela Osoby(Imie, Nazwisko, Zarobki). Które z następujących instrukcji są składniowo poprawnymi instrukcjami SQL w SQL Server?",
  "topicTitle": "GROUP BY a kolumny w SELECT",
  "topicSummary": "Gdy zapytanie ma GROUP BY, każda kolumna w SELECT musi być albo argumentem funkcji agregującej (SUM, COUNT, AVG...), albo występować w GROUP BY. Kolumna \"niezagregowana i niepogrupowana\" (tu: Imie i Zarobki) powoduje błąd, bo dla grupy o wielu wierszach nie wiadomo, którą jej wartość zwrócić.",
  "options": [
   { "key": "a", "text": "SELECT Osoby.Nazwisko, Osoby.Imie, Osoby.Zarobki FROM Osoby GROUP BY Osoby.Nazwisko;", "correct": false, "explain": "Niepoprawne - Imie i Zarobki nie są ani zagregowane, ani wymienione w GROUP BY, więc SQL Server zgłosi błąd niejednoznaczności wartości w grupie." },
   { "key": "b", "text": "INSERT INTO Osoby VALUES ('Jan', 'Kowalski', 2000) WHERE 'KOWALSKI' = 'KOWALSKI';", "correct": false, "explain": "Niepoprawne - jak poprzednio, INSERT ... VALUES nie obsługuje WHERE." },
   { "key": "c", "text": "DELETE FROM Osoby WHERE 'JANKOWSKI'='KOWALSKI';", "correct": true, "explain": "Poprawne składniowo - warunek jest zawsze fałszywy (nic nie zostanie usunięte), ale to kwestia semantyki, nie składni." },
   { "key": "d", "text": "UPDATE Osoby SET Nazwisko='KOWALSKI';", "correct": true, "explain": "Poprawne - UPDATE bez WHERE jest składniowo prawidłowy." }
  ]
 },
 {
  "id": "Q045",
  "chapter": "G8",
  "chapterName": "Podstawy SQL w dialekcie SQL Server",
  "question": "Dana jest tabela Osoby(Imie, Nazwisko, Zarobki). Które z następujących instrukcji są składniowo poprawnymi instrukcjami SQL w SQL Server?",
  "topicTitle": "INSERT INTO ... SELECT oraz obowiązkowość SET",
  "topicSummary": "INSERT INTO ... SELECT jest poprawnym sposobem kopiowania wierszy z zapytania do tabeli, o ile liczba i typy kolumn się zgadzają - tu SELECT * z tej samej tabeli Osoby gwarantuje zgodność. Z kolei UPDATE zawsze wymaga klauzuli SET określającej, co ma zostać zmienione - sama klauzula WHERE bez SET nie ma sensu.",
  "options": [
   { "key": "a", "text": "SELECT Osoby.Nazwisko, Osoby.Imie, Osoby.Zarobki ORDER BY Osoby.Zarobki;", "correct": false, "explain": "Niepoprawne - brakuje klauzuli FROM Osoby." },
   { "key": "b", "text": "INSERT INTO Osoby SELECT * FROM Osoby WHERE 'KOWALSKI' = 'KOWALSKI';", "correct": true, "explain": "Poprawne - INSERT ... SELECT jest prawidłową konstrukcją, a SELECT * z tej samej tabeli zwraca zgodny zestaw kolumn." },
   { "key": "c", "text": "DELETE FROM Osoby WHERE 'KOWALSKI'='KOWALSKI';", "correct": true, "explain": "Poprawne - składniowo prawidłowy DELETE (warunek zawsze prawdziwy, więc usunie wszystkie wiersze)." },
   { "key": "d", "text": "UPDATE Osoby WHERE Nazwisko='KOWALSKI';", "correct": false, "explain": "Niepoprawne - brakuje obowiązkowej klauzuli SET określającej, jakie kolumny mają zostać zaktualizowane." }
  ]
 },
 {
  "id": "Q046",
  "chapter": "G8",
  "chapterName": "Podstawy SQL w dialekcie SQL Server",
  "question": "Dana jest tabela Osoby(Imie, Nazwisko, Zarobki). Które z następujących instrukcji są składniowo poprawnymi instrukcjami SQL w SQL Server?",
  "topicTitle": "Zgodność liczby kolumn przy INSERT ... SELECT",
  "topicSummary": "Przy INSERT INTO Tabela SELECT ... liczba (i typy) kolumn zwracanych przez SELECT musi odpowiadać liczbie kolumn docelowej tabeli (lub jawnie wskazanej liście kolumn w INSERT INTO Tabela(kol1, kol2, ...)). Tabela Osoby ma 3 kolumny, więc SELECT zwracający tylko 2 (Nazwisko, Imie) bez podania listy kolumn docelowych jest niezgodny.",
  "options": [
   { "key": "a", "text": "SELECT Osoby.Nazwisko, Osoby.Imie, Osoby.Zarobki HAVING Osoby.Zarobki>1000;", "correct": false, "explain": "Niepoprawne - brakuje FROM Osoby, a dodatkowo HAVING bez GROUP BY odnoszące się do niezagregowanej kolumny jest tu nieprawidłowe." },
   { "key": "b", "text": "INSERT INTO Osoby SELECT Nazwisko, Imie FROM Osoby WHERE 'KOWALSKI' = 'KOWALSKI';", "correct": false, "explain": "Niepoprawne - tabela Osoby ma 3 kolumny, a SELECT zwraca tylko 2 (Nazwisko, Imie) bez wskazania docelowej listy kolumn - niezgodna liczba kolumn." },
   { "key": "c", "text": "DELETE FROM Osoby WHERE 'KOWALSKI'='KOWALSKI';", "correct": true, "explain": "Poprawne - składniowo prawidłowy DELETE." },
   { "key": "d", "text": "UPDATE Osoby WHERE Nazwisko='KOWALSKI';", "correct": false, "explain": "Niepoprawne - brakuje obowiązkowej klauzuli SET." }
  ]
 },
 {
  "id": "Q047",
  "chapter": "G8",
  "chapterName": "Podstawy SQL w dialekcie SQL Server",
  "question": "Dana jest tabela Osoby(Imie, Nazwisko, Zarobki). Które z następujących instrukcji są składniowo poprawnymi instrukcjami SQL w SQL Server?",
  "topicTitle": "HAVING bez agregacji i nieistniejące słowa kluczowe",
  "topicSummary": "HAVING służy do filtrowania już pogrupowanych/zagregowanych wyników i odnoszenie się w nim do zwykłej, niezagregowanej kolumny bez GROUP BY jest błędem. DELETE (podobnie jak SELECT/UPDATE) filtruje wiersze klauzulą WHERE - w SQL nie istnieje słowo kluczowe WHENEVER w tym kontekście.",
  "options": [
   { "key": "a", "text": "SELECT Osoby.Nazwisko, Osoby.Imie, Osoby.Zarobki FROM Osoby HAVING Osoby.Zarobki>1000;", "correct": false, "explain": "Niepoprawne - HAVING bez GROUP BY odnoszące się do zwykłej kolumny Zarobki (nie do wyrażenia agregującego) jest błędem." },
   { "key": "b", "text": "INSERT INTO Osoby SELECT * FROM Osoby WHERE Nazwisko = 'KOWALSKI';", "correct": true, "explain": "Poprawne - INSERT ... SELECT * z tej samej, zgodnej strukturalnie tabeli jest prawidłowe." },
   { "key": "c", "text": "DELETE FROM Osoby WHENEVER Osoby.Zarobki<1000;", "correct": false, "explain": "Niepoprawne - w DELETE warunek podaje się klauzulą WHERE, a nie nieistniejącym w tym kontekście słowem WHENEVER." },
   { "key": "d", "text": "UPDATE Osoby WHERE Nazwisko='KOWALSKI';", "correct": false, "explain": "Niepoprawne - brakuje obowiązkowej klauzuli SET." }
  ]
 },
 {
  "id": "Q048",
  "chapter": "G8",
  "chapterName": "Podstawy SQL w dialekcie SQL Server",
  "question": "Dane są dwie tabele Osoby(Imie, Nazwisko, Zarobki, Id_działu) oraz Działy(Id_działu, Nazwa). Które z następujących instrukcji są poprawnymi instrukcjami SQL w SQL Server?",
  "topicTitle": "INSERT z jawną listą kolumn i podzapytania skalarne",
  "topicSummary": "INSERT INTO Tabela(kolumny...) VALUES (...) pozwala wstawić wartości tylko do wskazanych kolumn (pozostałe przyjmą domyślną wartość lub NULL). Podzapytanie w WHERE (np. w DELETE) jest poprawne, jeśli zwraca dokładnie jedną wartość (tu: jeden Id_działu dla działu 'BUFET').",
  "options": [
   { "key": "a", "text": "SELECT Osoby.Nazwisko, Osoby.Imie, Osoby.Id_działu WHERE Działy.Nazwa='PRAWNY';", "correct": false, "explain": "Niepoprawne - brakuje klauzuli FROM (dla obu tabel, których kolumny są używane)." },
   { "key": "b", "text": "INSERT INTO Osoby(Imie, Nazwisko, Zarobki) VALUES ('Jan', 'Kowalski', 2000);", "correct": true, "explain": "Poprawne - jawna lista kolumn zgadza się z liczbą podanych wartości; pominięty Id_działu przyjmie wartość domyślną/NULL." },
   { "key": "c", "text": "DELETE FROM Osoby WHERE Id_działu=(SELECT Id_działu FROM Działy WHERE Nazwa='BUFET');", "correct": true, "explain": "Poprawne - podzapytanie skalarne w WHERE jest prawidłową konstrukcją SQL." },
   { "key": "d", "text": "UPDATE Osoby DELETE Nazwisko='KOWALSKI';", "correct": false, "explain": "Niepoprawne - UPDATE wymaga klauzuli SET, a nie DELETE wewnątrz swojej składni." }
  ]
 },
 {
  "id": "Q049",
  "chapter": "G8",
  "chapterName": "Podstawy SQL w dialekcie SQL Server",
  "question": "Dane są dwie tabele Osoby(Imie, Nazwisko, Zarobki, Id_działu) oraz Działy(Id_działu, Nazwa). Które z następujących instrukcji są poprawnymi instrukcjami SQL w SQL Server?",
  "topicTitle": "DELETE z wielu tabel w SQL Server",
  "topicSummary": "W SQL Server nie da się napisać DELETE FROM Tabela1, Tabela2 WHERE ... - polecenie DELETE działa na jednej tabeli docelowej naraz; do usuwania na podstawie złączenia z inną tabelą służy inna składnia (DELETE Tabela1 FROM Tabela1 JOIN Tabela2 ON ... WHERE ...). Prosta forma \"DELETE FROM t1, t2\" jest tu błędem składniowym.",
  "options": [
   { "key": "a", "text": "SELECT Osoby.Nazwisko, Działy.Nazwa FROM Osoby, Działy WHERE Osoby.Id_działu=Działy.Id_działu GROUP BY Osoby.Nazwisko;", "correct": false, "explain": "Niepoprawne - Działy.Nazwa jest w SELECT, ale nie jest ani zagregowana, ani wymieniona w GROUP BY." },
   { "key": "b", "text": "INSERT INTO Osoby VALUES ('Jan', 'Kowalski', 2000) WHERE Osoby.Id_działu = 23;", "correct": false, "explain": "Niepoprawne - INSERT ... VALUES nie obsługuje klauzuli WHERE." },
   { "key": "c", "text": "DELETE FROM Osoby, Działy WHERE Osoby.Nazwisko='KOWALSKI' AND Działy.Nazwa='KASA';", "correct": false, "explain": "Niepoprawne - SQL Server nie akceptuje formy DELETE FROM tabela1, tabela2 ...; usuwanie z jednej tabeli na podstawie warunku złączenia z inną wymaga innej, dedykowanej składni." },
   { "key": "d", "text": "UPDATE Osoby SET Id_działu=NULL;", "correct": true, "explain": "Poprawne - UPDATE bez WHERE jest składniowo prawidłowy (zaktualizuje wszystkie wiersze)." }
  ]
 },
 {
  "id": "Q050",
  "chapter": "G8",
  "chapterName": "Podstawy SQL w dialekcie SQL Server",
  "question": "Dane są dwie tabele Osoby(Imie, Nazwisko, Zarobki, Id_działu) oraz Działy(Id_działu, Nazwa). Które z następujących instrukcji są poprawnymi instrukcjami SQL w SQL Server?",
  "topicTitle": "Agregaty niedozwolone bezpośrednio w WHERE",
  "topicSummary": "Funkcji agregujących (COUNT, SUM, AVG...) nie wolno używać bezpośrednio w klauzuli WHERE, bo WHERE filtruje pojedyncze wiersze przed ich zgrupowaniem - agregaty ma sens filtrować dopiero w HAVING (po GROUP BY) albo w podzapytaniu.",
  "options": [
   { "key": "a", "text": "SELECT Osoby.Nazwisko, COUNT(Działy.Nazwa) FROM Osoby, Działy WHERE Osoby.Id_działu=Działy.Id_działu GROUP BY Osoby.Nazwisko;", "correct": true, "explain": "Poprawne - Nazwisko jest w GROUP BY, a Działy.Nazwa występuje wyłącznie wewnątrz funkcji agregującej COUNT." },
   { "key": "b", "text": "INSERT INTO Osoby VALUES ('Jan', 'Kowalski', 2000) WHERE Osoby.Id_działu = 23;", "correct": false, "explain": "Niepoprawne - INSERT ... VALUES nie obsługuje WHERE." },
   { "key": "c", "text": "DELETE FROM Osoby, Działy WHERE Osoby.Nazwisko='KOWALSKI' AND Działy.Nazwa='KASA' AND Osoby.Id_działu=Działy.Id_działu;", "correct": false, "explain": "Niepoprawne - jak poprzednio, DELETE FROM z listą wielu tabel po FROM nie jest w SQL Server poprawną składnią." },
   { "key": "d", "text": "UPDATE Osoby SET Id_działu=NULL WHERE COUNT(*)<5;", "correct": false, "explain": "Niepoprawne - COUNT(*) jako funkcja agregująca nie może wystąpić bezpośrednio w klauzuli WHERE bez GROUP BY/HAVING lub podzapytania." }
  ]
 },
 {
  "id": "Q051",
  "chapter": "G8",
  "chapterName": "Podstawy SQL w dialekcie SQL Server",
  "question": "Dane są dwie tabele Osoby(Imie, Nazwisko, Zarobki, Id_działu) oraz Działy(Id_działu, Nazwa). Które z następujących instrukcji są poprawnymi instrukcjami SQL w SQL Server?",
  "topicTitle": "Niejednoznaczne odwołania do kolumn przy złączeniu",
  "topicSummary": "Gdy dwie złączone tabele mają kolumny o tej samej nazwie (tu: Id_działu w Osoby i w Działy), każde odwołanie do niej w zapytaniu musi być kwalifikowane nazwą tabeli (Osoby.Id_działu lub Działy.Id_działu) - w przeciwnym razie silnik nie wie, o którą kolumnę chodzi, i zgłasza błąd niejednoznaczności.",
  "options": [
   { "key": "a", "text": "SELECT Osoby.Nazwisko, COUNT(Działy.Nazwa) FROM Osoby, Działy WHERE Osoby.Id_działu=Działy.Id_działu GROUP BY Osoby.Nazwisko HAVING COUNT(Id_działu)<2;", "correct": false, "explain": "Niepoprawne - Id_działu w HAVING nie jest zakwalifikowane nazwą tabeli, a występuje ono w obu tabelach (Osoby i Działy), więc odwołanie jest niejednoznaczne." },
   { "key": "b", "text": "INSERT INTO Osoby VALUES ('Jan', 'Kowalski', 2000) WHERE Osoby.Id_działu = 23;", "correct": false, "explain": "Niepoprawne - INSERT ... VALUES nie obsługuje WHERE." },
   { "key": "c", "text": "DELETE FROM Osoby, Działy WHERE Osoby.Nazwisko='KOWALSKI' AND Działy.Nazwa='KASA' AND Osoby.Id_działu=Działy.Id_działu;", "correct": false, "explain": "Niepoprawne - DELETE FROM z wieloma tabelami po FROM nie jest poprawną składnią SQL Server." },
   { "key": "d", "text": "UPDATE Osoby SET Id_działu=NULL WHERE 5>(SELECT COUNT(*) FROM Działy);", "correct": true, "explain": "Poprawne - podzapytanie skalarne (SELECT COUNT(*) FROM Działy) w warunku WHERE jest prawidłową, jednoznaczną konstrukcją." }
  ]
 },
 {
  "id": "Q052",
  "chapter": "G8",
  "chapterName": "Podstawy SQL w dialekcie SQL Server",
  "question": "Dane są dwie tabele Osoby(Imie, Nazwisko, Zarobki, Id_działu) oraz Działy(Id_działu, Nazwa). Które z następujących instrukcji są poprawnymi instrukcjami SQL w SQL Server?",
  "topicTitle": "Widoczność tabel spoza klauzuli FROM",
  "topicSummary": "W poleceniu DELETE FROM Tabela WHERE ... można odwoływać się wyłącznie do kolumn tabeli wymienionej we FROM (tu: Osoby) - użycie kolumny innej tabeli (Działy), której nie ma w żadnej klauzuli FROM/JOIN tego zapytania, jest błędem, bo silnik nie ma dostępu do jej danych.",
  "options": [
   { "key": "a", "text": "SELECT Osoby.Nazwisko, Działy.Nazwa FROM Osoby, Działy WHERE Osoby.Id_działu=Działy.Id_działu GROUP BY Osoby.Nazwisko HAVING COUNT(Działy.Id_działu)<2;", "correct": false, "explain": "Niepoprawne - Działy.Nazwa jest w SELECT, ale nie jest ani zagregowana, ani wymieniona w GROUP BY (samo poprawne zakwalifikowanie kolumny w HAVING tego nie naprawia)." },
   { "key": "b", "text": "INSERT INTO Osoby VALUES ('Jan', 'Kowalski', 2000);", "correct": false, "explain": "Niepoprawne - tabela Osoby ma tu 4 kolumny (Imie, Nazwisko, Zarobki, Id_działu), a podano tylko 3 wartości bez jawnej listy kolumn - niezgodna liczba kolumn." },
   { "key": "c", "text": "DELETE FROM Osoby WHERE Osoby.Nazwisko='KOWALSKI' AND Działy.Id_działu=22;", "correct": false, "explain": "Niepoprawne - Działy w ogóle nie występuje w klauzuli FROM tego zapytania, więc odwołanie do Działy.Id_działu jest błędem (tabela nie jest widoczna)." },
   { "key": "d", "text": "UPDATE Osoby SET Id_działu=NULL WHERE 5>(SELECT COUNT(*) FROM Działy);", "correct": true, "explain": "Poprawne - identyczne, prawidłowe podzapytanie skalarne jak w poprzednim pytaniu." }
  ]
 },
 {
  "id": "Q053",
  "chapter": "G8",
  "chapterName": "Podstawy SQL w dialekcie SQL Server",
  "question": "Dana jest tabela Osoby(imie, nazwisko, zarobki). Które z następujących instrukcji są poprawnymi instrukcjami SQL w SQL Server?",
  "topicTitle": "Zgodność kolumn w UNION i agregaty poza WHERE",
  "topicSummary": "Każde z zapytań łączonych operatorem UNION musi zwracać tę samą liczbę kolumn (o zgodnych typach) - inaczej jest to błąd. Funkcje agregujące, takie jak MAX, są niedozwolone wprost w WHERE (bo WHERE działa na pojedynczych wierszach przed agregacją); do porównania z maksimum trzeba użyć podzapytania: WHERE zarobki = (SELECT MAX(zarobki) FROM osoby).",
  "options": [
   { "key": "a", "text": "SELECT imie, nazwisko, zarobki FROM osoby UNION SELECT imie, nazwisko FROM osoby;", "correct": false, "explain": "Niepoprawne - pierwsze zapytanie zwraca 3 kolumny, drugie 2 - operator UNION wymaga takiej samej liczby kolumn w obu częściach." },
   { "key": "b", "text": "SELECT AVG(zarobki) FROM osoby;", "correct": true, "explain": "Poprawne - proste zapytanie agregujące bez GROUP BY, zwracające jedną wartość dla całej tabeli." },
   { "key": "c", "text": "SELECT imie, nazwisko FROM osoby WHERE zarobki = MAX(zarobki);", "correct": false, "explain": "Niepoprawne - funkcji agregującej MAX nie wolno użyć bezpośrednio w WHERE." },
   { "key": "d", "text": "SELECT imie, nazwisko FROM osoby HAVING zarobki = MAX(zarobki);", "correct": false, "explain": "Niepoprawne - brak GROUP BY, a HAVING odnosi się tu do niezagregowanej kolumny zarobki obok wywołania MAX, co nie jest dozwolone." }
  ]
 },
 {
  "id": "Q054",
  "chapter": "G8",
  "chapterName": "Podstawy SQL w dialekcie SQL Server",
  "question": "Dana jest tabela Osoby(imie, nazwisko, zarobki, id_dzialu). Które z następujących instrukcji są poprawnymi instrukcjami SQL w SQL Server?",
  "topicTitle": "Kolejność klauzul WHERE i GROUP BY",
  "topicSummary": "Poprawna kolejność klauzul w SELECT to: FROM, WHERE, GROUP BY, HAVING, ORDER BY. WHERE zawsze poprzedza GROUP BY (filtruje wiersze przed grupowaniem) i nie może zawierać funkcji agregujących - do filtrowania po agregacji służy HAVING, umieszczane po GROUP BY.",
  "options": [
   { "key": "a", "text": "SELECT imie, nazwisko, AVG(zarobki) FROM Osoby GROUP BY id_dzialu;", "correct": false, "explain": "Niepoprawne - imie i nazwisko nie są ani zagregowane, ani wymienione w GROUP BY (który grupuje po id_dzialu)." },
   { "key": "b", "text": "SELECT id_dzialu, AVG(zarobki) FROM Osoby GROUP BY id_dzialu;", "correct": true, "explain": "Poprawne - id_dzialu jest jednocześnie w SELECT i w GROUP BY, a AVG(zarobki) jest agregatem - klasyczne, poprawne zapytanie grupujące." },
   { "key": "c", "text": "SELECT id_dzialu, AVG(zarobki) FROM Osoby GROUP BY id_dzialu WHERE AVG(zarobki) > 1000;", "correct": false, "explain": "Niepoprawne - WHERE musi poprzedzać GROUP BY (a nie po nim), a do filtrowania po funkcji agregującej służy klauzula HAVING." },
   { "key": "d", "text": "SELECT AVG(zarobki) FROM Osoby WHERE zarobki > 1000;", "correct": true, "explain": "Poprawne - WHERE filtruje pojedyncze wiersze (na podstawie zwykłej kolumny zarobki) zanim zostaną one zagregowane funkcją AVG." }
  ]
 },
 {
  "id": "Q055",
  "chapter": "G8",
  "chapterName": "Podstawy SQL w dialekcie SQL Server",
  "question": "Dana jest tabela Osoby(imie, nazwisko, zarobki). Które z następujących instrukcji są poprawnymi instrukcjami SQL w SQL Server?",
  "topicTitle": "Zgodność wartości INSERT z listą kolumn",
  "topicSummary": "Gdy INSERT INTO podaje jawną listę kolumn, liczba wartości w VALUES musi się z nią zgadzać. Gdy listy kolumn nie podano, liczba wartości musi się zgadzać z pełną liczbą kolumn tabeli. UPDATE zawsze wymaga poprawnej postaci UPDATE tabela SET kolumna=wartość ... - nie da się \"zaktualizować\" bezpośrednio wyrażenia tabela.kolumna po lewej stronie znaku równości bez słowa SET.",
  "options": [
   { "key": "a", "text": "INSERT INTO Osoby (imie, nazwisko, zarobki) VALUES ('Jan', 'Kowalski', 1000);", "correct": true, "explain": "Poprawne - jawna lista trzech kolumn zgadza się z trzema podanymi wartościami." },
   { "key": "b", "text": "INSERT INTO Osoby VALUES ('Jan', 'Kowalski');", "correct": false, "explain": "Niepoprawne - bez jawnej listy kolumn liczba wartości musi odpowiadać wszystkim 3 kolumnom tabeli, a podano tylko 2." },
   { "key": "c", "text": "DELETE FROM Osoby WHERE Nazwisko LIKE 'Kowalski';", "correct": true, "explain": "Poprawne - LIKE bez znaków wieloznacznych (%, _) działa tu jak zwykłe porównanie równości i jest składniowo prawidłowe." },
   { "key": "d", "text": "UPDATE Osoby.Nazwisko = 'Kowalski';", "correct": false, "explain": "Niepoprawne - brakuje słowa kluczowego SET oraz poprawnej struktury UPDATE tabela SET kolumna=wartość." }
  ]
 },
 {
  "id": "Q154",
  "chapter": "G8",
  "chapterName": "Podstawy SQL w dialekcie SQL Server",
  "question": "Która z poniższych instrukcji w SQL Server jest składniowo poprawna (zostanie wykonana)?",
  "topicTitle": "DELETE z NULL, TRUNCATE TABLE, INSERT...SELECT i bezefektowy UPDATE",
  "topicSummary": "Wszystkie cztery instrukcje są składniowo poprawne, choć niektóre logicznie nic nie zmieniają: DELETE z warunkiem empno=NULL wykona się bez błędu (po prostu nie usunie żadnego wiersza, bo porównanie z NULL nigdy nie jest prawdziwe), TRUNCATE TABLE opróżnia całą tabelę, INSERT...SELECT z tej samej tabeli poprawnie duplikuje jej wiersze, a UPDATE ustawiające kolumnę na jej własną, niezmienioną wartość jest poprawnym, choć bezefektowym poleceniem.",
  "options": [
   { "key": "a", "text": "DELETE FROM emp WHERE empno = NULL;", "correct": true, "explain": "Poprawne składniowo - wykona się bez błędu, choć logicznie nie usunie żadnego wiersza (porównanie z NULL operatorem = nigdy nie jest prawdziwe; do sprawdzania NULL służy IS NULL)." },
   { "key": "b", "text": "TRUNCATE TABLE emp;", "correct": true, "explain": "Poprawne - TRUNCATE TABLE to standardowe polecenie DDL opróżniające całą tabelę." },
   { "key": "c", "text": "INSERT INTO emp (ename, job) SELECT ename, job FROM emp;", "correct": true, "explain": "Poprawne - można wstawiać do tabeli wiersze pochodzące z zapytania na tej samej tabeli; duplikuje to istniejące wiersze." },
   { "key": "d", "text": "UPDATE emp SET sal = sal WHERE sal = sal;", "correct": true, "explain": "Poprawne, choć bezefektowe - przypisanie kolumnie jej własnej wartości jest składniowo prawidłowym UPDATE-em (warunek sal=sal jest zawsze prawdziwy dla niepustych wartości)." }
  ]
 },
 {
  "id": "Q056",
  "chapter": "G9",
  "chapterName": "Zapytania grupujące i podzapytania (schemat EMP/DEPT)",
  "question": "Wskazać poprawne zapytanie SQL znajdujące pracowników zarabiających minimalną pensję na ich stanowiskach pracy.",
  "topicTitle": "Podzapytanie skorelowane vs. para (wartość, grupa) w IN",
  "topicSummary": "\"Minimum w obrębie grupy\" (tu: stanowiska) można wyrazić na dwa równoważne sposoby: podzapytaniem skorelowanym, które dla każdego pracownika e osobno liczy MIN(sal) w jego własnym job, albo porównaniem pary (sal, job) z listą par (MIN(sal), job) pogrupowanych po job. Niepoprawne jest natomiast porównywanie pojedynczej kolumny sal ze skalarnie potraktowanym podzapytaniem grupującym, które w rzeczywistości zwraca wiele wierszy.",
  "options": [
   { "key": "a", "text": "SELECT ename, job, sal FROM emp e WHERE sal = (SELECT MIN(sal) FROM emp WHERE job = e.job);", "correct": true, "explain": "Poprawne - podzapytanie skorelowane liczy minimalną pensję dla stanowiska bieżącego pracownika e i porównuje z jego pensją." },
   { "key": "b", "text": "SELECT ename, job, sal FROM emp WHERE (sal, job) IN (SELECT MIN(sal), job FROM emp GROUP BY job);", "correct": true, "explain": "Poprawne - lista par (minimalna pensja, stanowisko) z GROUP BY job, porównana operatorem IN z parą (sal, job) każdego wiersza, daje ten sam efekt co podzapytanie skorelowane." },
   { "key": "c", "text": "SELECT ename, job, sal FROM emp WHERE sal = (SELECT MIN(sal) FROM emp GROUP BY job);", "correct": false, "explain": "Niepoprawne - podzapytanie z GROUP BY job zwraca zwykle wiele wierszy (po jednym MIN(sal) na stanowisko), a porównanie \"=\" oczekuje dokładnie jednej wartości - błąd czasu wykonania (subquery returned more than one row)." },
   { "key": "d", "text": "SELECT ename, job, MIN(sal) FROM emp GROUP BY job;", "correct": false, "explain": "Niepoprawne - ename nie jest ani zagregowane, ani wymienione w GROUP BY (grupującym po job), więc zapytanie jest błędne składniowo, a dodatkowo nie zwraca informacji o konkretnym pracowniku." }
  ]
 },
 {
  "id": "Q057",
  "chapter": "G9",
  "chapterName": "Zapytania grupujące i podzapytania (schemat EMP/DEPT)",
  "question": "Wskazać poprawne zapytanie SQL znajdujące dla każdego departamentu ostatnio zatrudnionych pracowników.",
  "topicTitle": "Para (wartość, grupa) w IN dla maksimum",
  "topicSummary": "Analogicznie do minimalnej pensji na stanowisku, \"najpóźniejsza data zatrudnienia w departamencie\" wymaga porównania pary (hiredate, deptno) z listą par (MAX(hiredate), deptno) pogrupowanych po deptno - albo równoważnego podzapytania skorelowanego z poprawną składnią (bez błędów interpunkcyjnych).",
  "options": [
   { "key": "a", "text": "SELECT deptno, ename, hiredate FROM emp WHERE (hiredate, deptno) IN (SELECT MAX(hiredate), deptno FROM emp GROUP BY deptno);", "correct": true, "explain": "Poprawne - para (hiredate, deptno) porównana z listą par (najpóźniejsza data, dział) pogrupowanych po deptno poprawnie wyłania ostatnio zatrudnionych w każdym dziale." },
   { "key": "b", "text": "SELECT deptno, ename, hiredate FROM emp e WHERE (hiredate,) = (SELECT MAX(hiredate) FROM emp WHERE deptno=e.deptno GROUP BY deptno);", "correct": false, "explain": "Niepoprawne - zapis (hiredate,) zawiera błąd składniowy (zbędny przecinek przed nawiasem zamykającym); dodatkowo GROUP BY deptno wewnątrz podzapytania skorelowanego po deptno=e.deptno jest zbędne i myląco łączy dwa różne podejścia naraz." },
   { "key": "c", "text": "SELECT deptno, ename, hiredate FROM emp WHERE hiredate = (SELECT MAX(hiredate) FROM emp GROUP BY deptno);", "correct": false, "explain": "Niepoprawne - podzapytanie z GROUP BY deptno zwraca wiele wierszy (po jednej dacie na dział), a porównanie skalarne \"=\" tego nie obsłuży - błąd czasu wykonania." },
   { "key": "d", "text": "SELECT deptno, ename, MAX(hiredate) FROM emp GROUP BY deptno;", "correct": false, "explain": "Niepoprawne - ename nie jest ani zagregowane, ani w GROUP BY, więc zapytanie jest błędne składniowo." }
  ]
 },
 {
  "id": "Q058",
  "chapter": "G9",
  "chapterName": "Zapytania grupujące i podzapytania (schemat EMP/DEPT)",
  "question": "Wskazać poprawne zapytanie SQL znajdujące pracowników o najniższych zarobkach w ich działach.",
  "topicTitle": "sal IN (...) a poprawność logiczna zapytania",
  "topicSummary": "Zapytanie WHERE sal IN (SELECT MIN(sal) FROM emp GROUP BY deptno) sprawdza tylko, czy pensja pracownika należy do zbioru wszystkich minimalnych pensji w firmie (z dowolnego działu) - nie gwarantuje, że to akurat minimum jego własnego działu. Dwaj pracownicy z różnych działów mogą przypadkiem zarabiać tyle samo, co powoduje błędne dopasowania. Bezpieczne jest dopiero porównanie pary (sal, deptno) albo podzapytanie skorelowane po deptno.",
  "options": [
   { "key": "a", "text": "SELECT ename, sal, deptno FROM emp WHERE (sal, deptno) IN (SELECT MIN(sal), deptno FROM emp GROUP BY deptno);", "correct": true, "explain": "Poprawne - para (sal, deptno) jednoznacznie wiąże pensję z właściwym działem, eliminując przypadkowe dopasowania między działami." },
   { "key": "b", "text": "SELECT ename, deptno, sal FROM emp e WHERE sal = (SELECT MIN(sal) FROM emp WHERE deptno = e.deptno);", "correct": true, "explain": "Poprawne - podzapytanie skorelowane liczy minimum tylko w obrębie działu bieżącego pracownika e, co daje właściwy wynik." },
   { "key": "c", "text": "SELECT ename, sal, deptno FROM emp WHERE sal IN (SELECT MIN(sal) FROM emp GROUP BY deptno);", "correct": false, "explain": "Niepoprawne logicznie - sprawdza jedynie, czy pensja jest jedną z minimalnych pensji w którymkolwiek dziale, bez wymogu, by to był akurat jego własny dział; przy zbieżnych kwotach z różnych działów zwróci fałszywe dopasowania." },
   { "key": "d", "text": "SELECT ename, MIN(sal), deptno FROM emp GROUP BY deptno;", "correct": false, "explain": "Niepoprawne - ename nie jest ani zagregowane, ani w GROUP BY, więc zapytanie jest błędne składniowo." }
  ]
 },
 {
  "id": "Q059",
  "chapter": "G9",
  "chapterName": "Zapytania grupujące i podzapytania (schemat EMP/DEPT)",
  "question": "Wskazać poprawne zapytanie SQL znajdujące pracowników, których zarobki są wyższe od pensji każdego pracownika z departamentu 30.",
  "topicTitle": "Operator > ALL a > MAX(...)",
  "topicSummary": "\"Więcej niż każdy z...\" oznacza więcej niż wartość maksymalna w zbiorze porównawczym. Można to zapisać operatorem > ALL (lista wartości) albo równoważnie > (SELECT MAX(...) ...) - przy typowym założeniu niepustego zbioru i braku wartości NULL obie formy dają ten sam wynik. Operator > ANY oznacza natomiast \"więcej niż co najmniej jedna wartość\", czyli więcej niż minimum - to zupełnie inny warunek.",
  "options": [
   { "key": "a", "text": "SELECT ename, sal, job, deptno FROM emp WHERE sal > ALL (SELECT DISTINCT sal FROM emp WHERE deptno = 30);", "correct": true, "explain": "Poprawne - sal > ALL(...) oznacza pensję wyższą od każdej pensji w dziale 30, czyli wyższą od maksimum w tym dziale." },
   { "key": "b", "text": "SELECT ename, sal, job, deptno FROM emp WHERE sal > (SELECT MAX(sal) FROM emp WHERE deptno = 30);", "correct": true, "explain": "Poprawne - dla klasycznego, niepustego zbioru EMP bez wartości NULL w sal jest to logicznie równoważne warunkowi > ALL powyżej." },
   { "key": "c", "text": "SELECT ename, sal, job, deptno FROM emp WHERE sal > ANY (SELECT DISTINCT sal FROM emp WHERE deptno = 30);", "correct": false, "explain": "Niepoprawne - > ANY oznacza \"większe od co najmniej jednej wartości\" (czyli w praktyce większe od minimum w dziale 30), co jest znacznie słabszym i innym warunkiem niż \"większe od każdej pensji\"." },
   { "key": "d", "text": "SELECT ename, sal, job, deptno FROM emp WHERE sal > (SELECT MIN(sal) FROM emp WHERE deptno = 30);", "correct": false, "explain": "Niepoprawne - porównanie z minimalną pensją w dziale 30 znajdzie też pracowników zarabiających więcej niż najmniej zarabiająca osoba w dziale 30, ale niekoniecznie więcej niż wszyscy." }
  ]
 },
 {
  "id": "Q060",
  "chapter": "G9",
  "chapterName": "Zapytania grupujące i podzapytania (schemat EMP/DEPT)",
  "question": "Wskazać poprawne zapytanie SQL znajdujące stanowiska pracy występujące w działach 10 lub 20.",
  "topicTitle": "OR / UNION a suma zbiorów",
  "topicSummary": "\"Występujące w dziale 10 LUB w dziale 20\" to suma (alternatywa) zbiorów - można to wyrazić warunkiem OR w jednym zapytaniu albo operatorem UNION łączącym dwa osobne zapytania. Warunek AND w jednym wierszu (deptno=10 AND deptno=20) jest zawsze fałszywy, bo pojedynczy wiersz ma tylko jedną wartość deptno. INTERSECT z kolei zwraca część wspólną, a nie sumę.",
  "options": [
   { "key": "a", "text": "SELECT DISTINCT job FROM emp WHERE deptno = 10 OR deptno = 20", "correct": true, "explain": "Poprawne - warunek OR poprawnie wybiera stanowiska z działu 10 lub 20." },
   { "key": "b", "text": "SELECT DISTINCT job FROM emp WHERE deptno = 10 UNION SELECT DISTINCT job FROM emp WHERE deptno = 20", "correct": true, "explain": "Poprawne - UNION łączy (i usuwa duplikaty) zbiory stanowisk z obu działów, co odpowiada sumie logicznej OR." },
   { "key": "c", "text": "SELECT DISTINCT job FROM emp WHERE deptno = 10 AND deptno = 20", "correct": false, "explain": "Niepoprawne - żaden wiersz nie może mieć jednocześnie deptno=10 i deptno=20, więc warunek jest zawsze fałszywy i zapytanie zawsze zwróci pusty wynik." },
   { "key": "d", "text": "SELECT DISTINCT job FROM emp WHERE deptno = 10 INTERSECT SELECT DISTINCT job FROM emp WHERE deptno = 20", "correct": false, "explain": "Niepoprawne - INTERSECT zwraca stanowiska występujące w obu działach jednocześnie, a nie w którymkolwiek z nich." }
  ]
 },
 {
  "id": "Q061",
  "chapter": "G9",
  "chapterName": "Zapytania grupujące i podzapytania (schemat EMP/DEPT)",
  "question": "Wskazać poprawne zapytanie SQL znajdujące stanowiska pracy występujące zarówno w dziale 10, jak i w dziale 20.",
  "topicTitle": "INTERSECT a część wspólna zbiorów",
  "topicSummary": "\"Zarówno w dziale 10, jak i w dziale 20\" to część wspólna (iloczyn) dwóch zbiorów stanowisk - dokładnie to realizuje operator INTERSECT. OR/UNION dałyby sumę (stanowiska z któregokolwiek działu), a warunek AND w jednym wierszu jest zawsze fałszywy, więc żadna z tych trzech alternatyw nie odpowiada na pytanie o część wspólną.",
  "options": [
   { "key": "a", "text": "SELECT DISTINCT job FROM emp WHERE deptno = 10 INTERSECT SELECT DISTINCT job FROM emp WHERE deptno = 20", "correct": true, "explain": "Poprawne - INTERSECT zwraca dokładnie stanowiska wspólne dla obu wskazanych działów." },
   { "key": "b", "text": "SELECT DISTINCT job FROM emp WHERE deptno = 10 OR deptno = 20", "correct": false, "explain": "Niepoprawne - OR daje sumę stanowisk z obu działów (wystarczy wystąpienie w jednym z nich), a nie ich część wspólną." },
   { "key": "c", "text": "SELECT DISTINCT job FROM emp WHERE deptno = 10 UNION SELECT DISTINCT job FROM emp WHERE deptno = 20", "correct": false, "explain": "Niepoprawne - UNION, tak jak OR powyżej, daje sumę zbiorów, a nie ich część wspólną." },
   { "key": "d", "text": "SELECT DISTINCT job FROM emp WHERE deptno = 10 AND deptno = 20", "correct": false, "explain": "Niepoprawne - warunek w jednym wierszu jest zawsze fałszywy (deptno nie może być jednocześnie 10 i 20), więc zapytanie nigdy nie zwróci wyniku." }
  ]
 },
 {
  "id": "Q062",
  "chapter": "G9",
  "chapterName": "Zapytania grupujące i podzapytania (schemat EMP/DEPT)",
  "question": "Wskazać poprawne zapytanie SQL znajdujące pracowników, którzy zarabiają mniej od swoich kierowników.",
  "topicTitle": "Samozłączenie (self-join) pracownik-kierownik",
  "topicSummary": "W tabeli emp każdy pracownik ma kolumnę mgr wskazującą na empno swojego przełożonego. Aby porównać pracownika z jego kierownikiem, trzeba połączyć tabelę emp samą ze sobą (dwa aliasy, np. e i m) po warunku e.mgr = m.empno - to jest właściwe samozłączenie. Połączenie po e.mgr = m.mgr łączy natomiast pracowników mających tego samego szefa (kolegów), a nie pracownika z jego przełożonym.",
  "options": [
   { "key": "a", "text": "SELECT e.ename prac_name, e.sal prac_sal, m.ename kier_name, m.sal kier_sal FROM emp e, emp m WHERE e.mgr = m.empno AND e.sal < m.sal", "correct": true, "explain": "Poprawne - e.mgr = m.empno poprawnie łączy pracownika z jego kierownikiem, a e.sal < m.sal wybiera tych, którzy zarabiają mniej niż on." },
   { "key": "b", "text": "SELECT e.ename prac_name, e.sal prac_sal, m.ename kier_name, m.sal kier_sal FROM emp e, emp m WHERE e.mgr = m.empno AND m.sal < e.sal", "correct": false, "explain": "Niepoprawne - złączenie jest prawidłowe, ale warunek m.sal < e.sal odwrotnie wybiera pracowników zarabiających więcej niż ich kierownik." },
   { "key": "c", "text": "SELECT e.ename prac_name, e.sal prac_sal, m.ename kier_name, m.sal kier_sal FROM emp e, emp m WHERE e.mgr = m.mgr AND e.sal < m.sal", "correct": false, "explain": "Niepoprawne - e.mgr = m.mgr łączy pracowników mających tego samego przełożonego (kolegów z zespołu), a nie pracownika z jego kierownikiem." },
   { "key": "d", "text": "SELECT e.ename prac_name, e.sal prac_sal, m.ename kier_name, m.sal kier_sal FROM emp e, emp m WHERE e.mgr = m.mgr AND m.sal < e.sal", "correct": false, "explain": "Niepoprawne - błędne złączenie (kolega, nie kierownik) połączone z odwróconym warunkiem." }
  ]
 },
 {
  "id": "Q063",
  "chapter": "G9",
  "chapterName": "Zapytania grupujące i podzapytania (schemat EMP/DEPT)",
  "question": "Wskazać poprawne zapytanie SQL znajdujące średnie zarobki tylko tych departamentów, które zatrudniają więcej niż trzech pracowników.",
  "topicTitle": "HAVING i GROUP BY - dowolna kolejność klauzul w Oracle",
  "topicSummary": "Warunek dotyczący wyniku funkcji agregującej (tu: COUNT(*) > 3, czyli po zgrupowaniu) musi trafić do klauzuli HAVING, nie do WHERE (które działa na pojedynczych, jeszcze niepogrupowanych wierszach i nie dopuszcza agregatów). Składnia Oracle dopuszcza przy tym obie kolejności zapisu - GROUP BY ... HAVING ... oraz HAVING ... GROUP BY ... - dając identyczny wynik; standard SQL i większa czytelność przemawiają za pierwszą, zalecaną formą.",
  "options": [
   { "key": "a", "text": "SELECT deptno, AVG(sal) FROM emp GROUP BY deptno HAVING COUNT(*) > 3;", "correct": true, "explain": "Poprawne i zalecane - GROUP BY deptno grupuje pracowników według działu, a HAVING COUNT(*) > 3 odfiltrowuje tylko działy z więcej niż trzema pracownikami." },
   { "key": "b", "text": "SELECT deptno, AVG(sal) FROM emp HAVING COUNT(*) > 3 GROUP BY deptno;", "correct": true, "explain": "Poprawne w Oracle - ten dialekt dopuszcza zapisanie HAVING przed GROUP BY; wynik jest identyczny jak w odpowiedzi A, choć taki zapis jest niezalecany i niezgodny ze standardem SQL." },
   { "key": "c", "text": "SELECT deptno, AVG(sal) FROM emp GROUP BY deptno WHERE COUNT(*) > 3;", "correct": false, "explain": "Niepoprawne - WHERE musi poprzedzać GROUP BY, a nie po nim występować, a dodatkowo funkcji agregującej nie wolno używać w WHERE." },
   { "key": "d", "text": "SELECT deptno, AVG(sal) FROM emp WHERE COUNT(*) > 3 GROUP BY deptno;", "correct": false, "explain": "Niepoprawne - COUNT(*) w klauzuli WHERE jest niedozwolone, bo agregacja nie jest jeszcze policzona na etapie filtrowania pojedynczych wierszy." }
  ]
 },
 {
  "id": "Q064",
  "chapter": "G9",
  "chapterName": "Zapytania grupujące i podzapytania (schemat EMP/DEPT)",
  "question": "Wskazać poprawne zapytanie SQL znajdujące stanowiska, na których średni zarobek wynosi 3000 lub więcej.",
  "topicTitle": "HAVING z funkcją agregującą - dowolna kolejność klauzul w Oracle",
  "topicSummary": "Podobnie jak przy COUNT(*), warunek AVG(sal) >= 3000 dotyczy już zagregowanej wartości dla grupy, więc musi znaleźć się w klauzuli HAVING, a nie w WHERE. Oracle dopuszcza przy tym zapisanie HAVING zarówno po, jak i przed GROUP BY - obie kolejności dają identyczny wynik, choć standardowa i zalecana jest kolejność GROUP BY ... HAVING ...",
  "options": [
   { "key": "a", "text": "SELECT job, AVG(sal) FROM emp GROUP BY job HAVING AVG(sal) >= 3000;", "correct": true, "explain": "Poprawne i zalecane - GROUP BY job grupuje po stanowisku, a HAVING AVG(sal) >= 3000 filtruje grupy o średniej pensji od 3000 wzwyż." },
   { "key": "b", "text": "SELECT job, AVG(sal) FROM emp HAVING AVG(sal) >= 3000 GROUP BY job;", "correct": true, "explain": "Poprawne w Oracle - dialekt ten dopuszcza zapisanie HAVING przed GROUP BY, z identycznym wynikiem jak w odpowiedzi A, choć taki zapis jest niezalecany i niezgodny ze standardem SQL." },
   { "key": "c", "text": "SELECT job, AVG(sal) FROM emp GROUP BY job WHERE AVG(sal) >= 3000;", "correct": false, "explain": "Niepoprawne - WHERE musi poprzedzać GROUP BY, a agregat AVG w WHERE jest niedozwolony." },
   { "key": "d", "text": "SELECT job, AVG(sal) FROM emp WHERE AVG(sal) >= 3000 GROUP BY job;", "correct": false, "explain": "Niepoprawne - AVG(sal) w klauzuli WHERE jest niedozwolone." }
  ]
 },
 {
  "id": "Q067",
  "chapter": "G9",
  "chapterName": "Zapytania grupujące i podzapytania (schemat EMP/DEPT)",
  "question": "Wskazać poprawne zapytanie SQL znajdujące średni zarobek pracowników z drugiej klasy zarobkowej.",
  "topicTitle": "BETWEEN a granice przedziału",
  "topicSummary": "Tabela salgrade opisuje przedziały pensji (losal, hisal) przypisane do kolejnych klas zarobkowych (grade). BETWEEN losal AND hisal jest inkluzywny (obejmuje obie granice), więc poprawnie łapie także pracowników zarabiających dokładnie tyle, ile wynosi dolna lub górna granica przedziału - w przeciwieństwie do ostrych nierówności > i <, które by ich pominęły.",
  "options": [
   { "key": "a", "text": "SELECT AVG(sal) FROM emp, salgrade WHERE grade = 2 AND sal BETWEEN losal AND hisal GROUP BY grade;", "correct": true, "explain": "Poprawne - BETWEEN poprawnie (włącznie z granicami) dopasowuje pensje do przedziału klasy 2, a GROUP BY grade jest tu niegroźnym nadmiarem (i tak zostaje jedna grupa)." },
   { "key": "b", "text": "SELECT AVG(sal) FROM emp, salgrade WHERE grade = 2 AND sal > losal AND sal < hisal GROUP BY grade;", "correct": false, "explain": "Niepoprawne - ostre nierówności > i < pomijają pracowników zarabiających dokładnie losal lub hisal, dając inny (błędny) wynik średniej niż inkluzywne BETWEEN." },
   { "key": "c", "text": "SELECT AVG(sal) FROM emp WHERE sal > (SELECT losal FROM salgrade WHERE grade = 2) AND sal < SELECT hisal FROM salgrade WHERE grade = 2);", "correct": false, "explain": "Niepoprawne - przed drugim SELECT hisal brakuje otwierającego nawiasu (błąd składniowy), a dodatkowo znowu użyto ostrych nierówności zamiast inkluzywnego przedziału." },
   { "key": "d", "text": "SELECT AVG(sal) FROM emp, salgrade WHERE grade = 2 AND sal BETWEEN losal AND hisal;", "correct": true, "explain": "Poprawne - identyczne jak a), ale bez zbędnego GROUP BY grade; ponieważ warunek grade = 2 już zawęża salgrade do jednego wiersza, wynik jest taki sam." }
  ]
 },
 {
  "id": "Q068",
  "chapter": "G9",
  "chapterName": "Zapytania grupujące i podzapytania (schemat EMP/DEPT)",
  "question": "Wskazać poprawne zapytanie SQL znajdujące trzech najlepiej zarabiających pracowników w firmie - ich nazwiska i pensje.",
  "topicTitle": "Podzapytanie skorelowane licząc \"ile osób zarabia więcej\"",
  "topicSummary": "Klasyczny sposób na \"TOP N\" bez specjalnej składni LIMIT/TOP w czystym SQL: dla każdego pracownika e liczymy, ilu innych pracowników zarabia od niego więcej (SELECT COUNT(*) FROM emp WHERE e.sal < sal); jeśli ta liczba jest mniejsza niż 3, to e mieści się w pierwszej trójce. Sam COUNT(*) nie może wystąpić bezpośrednio w WHERE bez GROUP BY/podzapytania.",
  "options": [
   { "key": "a", "text": "SELECT ename, sal FROM emp e WHERE 3 > (SELECT COUNT(*) FROM emp WHERE e.sal < sal);", "correct": true, "explain": "Poprawne - podzapytanie skorelowane liczy, ilu pracowników zarabia więcej niż e; jeśli mniej niż 3, e jest w pierwszej trójce najlepiej zarabiających." },
   { "key": "b", "text": "SELECT ename, sal FROM emp e WHERE COUNT(*) < 3", "correct": false, "explain": "Niepoprawne - COUNT(*) użyte bezpośrednio w WHERE, bez GROUP BY ani podzapytania, jest niedozwolone." },
   { "key": "c", "text": "SELECT ename, sal FROM emp e GROUP BY deptno HAVING COUNT(*) < 3", "correct": false, "explain": "Niepoprawne - ename i sal nie są ani zagregowane, ani w GROUP BY (grupującym po deptno), a samo zapytanie liczy coś zupełnie innego (liczbę pracowników w małych działach), nie trójkę najlepiej zarabiających w całej firmie." }
  ]
 },
 {
  "id": "Q138",
  "chapter": "G9",
  "chapterName": "Zapytania grupujące i podzapytania (schemat EMP/DEPT)",
  "question": "Wskazać poprawne zapytanie SQL znajdujące ilość pracowników w dziale mającym siedzibę w DALLAS. Schematy: emp(..., deptno), dept(deptno, dname, loc).",
  "topicTitle": "Ta sama liczba: przez złączenie z GROUP BY albo przez podzapytanie",
  "topicSummary": "Liczbę pracowników działu z Dallas można policzyć na dwa równoważne sposoby: złączeniem emp z dept i pogrupowaniem po deptno (z warunkiem loc='DALLAS' w WHERE), albo prostszym podzapytaniem, które najpierw znajduje numer działu z lokalizacją DALLAS, a potem liczy pracowników tego działu bez żadnego złączenia. Pominięcie warunku złączenia (emp.deptno=dept.deptno) prowadzi do błędnego, kartezjańskiego przemnożenia wierszy, a HAVING na loc bez GROUP BY po loc też nie da poprawnego wyniku dla pojedynczego działu.",
  "options": [
   { "key": "a", "text": "SELECT COUNT(*) FROM emp, dept WHERE dept.loc = 'DALLAS' AND emp.deptno = dept.deptno GROUP BY dept.deptno;", "correct": true, "explain": "Poprawne - złączenie po deptno ogranicza wiersze do pracowników działu z Dallas, a GROUP BY dept.deptno grupuje je (tu efektywnie w jedną grupę, bo warunek loc='DALLAS' wybiera zwykle jeden dział)." },
   { "key": "b", "text": "SELECT COUNT(*) FROM emp WHERE deptno = (SELECT deptno FROM dept WHERE loc = 'DALLAS');", "correct": true, "explain": "Poprawne - podzapytanie skalarne znajduje numer działu z lokalizacją DALLAS, a zapytanie zewnętrzne liczy samych pracowników tego działu, bez potrzeby złączenia." },
   { "key": "c", "text": "SELECT COUNT(*) FROM emp, dept WHERE dept.loc = 'DALLAS' GROUP BY dept.deptno;", "correct": false, "explain": "Niepoprawne - brak warunku złączenia emp.deptno = dept.deptno powoduje iloczyn kartezjański wszystkich pracowników z każdym wierszem działu w Dallas, dając zawyżony wynik." },
   { "key": "d", "text": "SELECT COUNT(*) FROM emp, dept WHERE emp.deptno = dept.deptno GROUP BY dept.deptno HAVING dept.loc = 'DALLAS';", "correct": false, "explain": "Niepoprawne - dept.loc nie jest ani kolumną z GROUP BY, ani wynikiem funkcji agregującej, więc nie może wystąpić w HAVING w tej postaci (Oracle zgłosi błąd)." }
  ]
 },
 {
  "id": "Q149",
  "chapter": "G9",
  "chapterName": "Zapytania grupujące i podzapytania (schemat EMP/DEPT)",
  "question": "Wykonujesz zapytanie: SELECT e1.ename||' pracuje dla ' ||e2.ename \"Pracownicy i ich szefowie\" FROM emp e1, emp e2 WHERE e1.mgr=e2.empno; Jaki to jest rodzaj złączenia?",
  "topicTitle": "Samozłączenie: ta sama tabela dwukrotnie, pod różnymi aliasami",
  "topicSummary": "Zapytanie odwołuje się do tej samej tabeli emp dwukrotnie, pod dwoma różnymi aliasami (e1, e2), łącząc pracownika (e1) z jego przełożonym (e2) po warunku e1.mgr = e2.empno - to klasyczny przykład samozłączenia (self-join), a nie złączenia kartezjańskiego (bo jest warunek WHERE) ani zewnętrznego (nie użyto OUTER JOIN).",
  "options": [
   { "key": "a", "text": "kartezjańskie", "correct": false, "explain": "Nie - złączenie kartezjańskie nie ma żadnego warunku łączącego wiersze; tu warunek e1.mgr=e2.empno jest obecny." },
   { "key": "b", "text": "zewnętrzne", "correct": false, "explain": "Nie - złączenie zewnętrzne (OUTER JOIN) zwraca też niedopasowane wiersze z jednej ze stron, a tu użyto zwykłego złączenia wewnętrznego (przecinek + WHERE)." },
   { "key": "c", "text": "samozłączenie", "correct": true, "explain": "Tak - tabela emp występuje dwukrotnie pod różnymi aliasami (e1, e2) i jest złączona sama ze sobą po warunku e1.mgr=e2.empno, co jest definicją samozłączenia." }
  ]
 },
 {
  "id": "Q071",
  "chapter": "G10",
  "chapterName": "Zapytania i funkcje SQL w Oracle (różne schematy)",
  "question": "Zaznacz wszystkie zapytania, które będą się kompilować w dialekcie Oracle.",
  "topicTitle": "ORDER BY: pozycja, nazwa kolumny i alias",
  "topicSummary": "Klauzula ORDER BY w Oracle akceptuje trzy równoważne sposoby wskazania kolumny sortującej: numer pozycji kolumny w liście SELECT, oryginalną nazwę kolumny źródłowej (nawet jeśli w SELECT nadano jej alias) oraz sam alias nadany w klauzuli SELECT. Wszystkie cztery poniższe warianty są więc poprawne.",
  "options": [
   { "key": "a", "text": "SELECT empno FROM emp ORDER BY 1;", "correct": true, "explain": "Poprawne - sortowanie po numerze pozycji pierwszej kolumny w SELECT jest w pełni obsługiwane." },
   { "key": "b", "text": "SELECT empno FROM emp ORDER BY empno;", "correct": true, "explain": "Poprawne - sortowanie po nazwie kolumny, tu bez aliasu, jest podstawowym, zawsze poprawnym przypadkiem." },
   { "key": "c", "text": "SELECT empno AS e FROM emp ORDER BY empno;", "correct": true, "explain": "Poprawne - mimo nadania aliasu e w SELECT, ORDER BY może nadal odwoływać się do oryginalnej nazwy kolumny źródłowej empno." },
   { "key": "d", "text": "SELECT empno AS e FROM emp ORDER BY e;", "correct": true, "explain": "Poprawne - ORDER BY może też odwoływać się bezpośrednio do aliasu e nadanego w klauzuli SELECT." }
  ]
 },
 {
  "id": "Q075",
  "chapter": "G10",
  "chapterName": "Zapytania i funkcje SQL w Oracle (różne schematy)",
  "question": "Klauzula WHERE może pojawić się w poleceniach:",
  "topicTitle": "Gdzie występuje klauzula WHERE",
  "topicSummary": "WHERE filtruje wiersze i występuje w poleceniach operujących na danych wierszy: SELECT, UPDATE oraz DELETE. Nie występuje natomiast w poleceniach transakcyjnych (COMMIT, ROLLBACK - operują na całej transakcji, nie na wybranych wierszach) ani w poleceniach DDL definiujących strukturę (CREATE TABLE - dotyczy schematu, nie konkretnych danych).",
  "options": [
   { "key": "a", "text": "SELECT", "correct": true, "explain": "Tak - WHERE w SELECT filtruje, które wiersze mają zostać zwrócone." },
   { "key": "b", "text": "COMMIT", "correct": false, "explain": "Nie - COMMIT zatwierdza całą bieżącą transakcję i nie przyjmuje żadnych warunków filtrujących." },
   { "key": "c", "text": "UPDATE", "correct": true, "explain": "Tak - WHERE w UPDATE określa, które wiersze mają zostać zmodyfikowane." },
   { "key": "d", "text": "CREATE TABLE", "correct": false, "explain": "Nie - CREATE TABLE definiuje strukturę tabeli (kolumny, typy, ograniczenia), a nie operuje na konkretnych wierszach, więc nie ma tu miejsca na WHERE." }
  ]
 },
 {
  "id": "Q076",
  "chapter": "G10",
  "chapterName": "Zapytania i funkcje SQL w Oracle (różne schematy)",
  "question": "Dana jest tabela Osoby(imie, nazwisko, zarobki). Które z następujących instrukcji są składniowo poprawnymi instrukcjami SQL w Oracle?",
  "topicTitle": "Operator MINUS wymaga pełnego drugiego SELECT-a",
  "topicSummary": "Operator MINUS (podobnie jak UNION czy INTERSECT) łączy dwa kompletne zapytania SELECT - po jego prawej stronie musi wystąpić pełne słowo kluczowe SELECT, a nie sama lista kolumn. Kolejność klauzul w zapytaniu (FROM, WHERE, GROUP BY, HAVING, ORDER BY) musi też być zachowana, a klauzula FROM jest obowiązkowa, jeśli odwołujemy się do kolumn tabeli.",
  "options": [
   { "key": "a", "text": "SELECT imie, zarobki FROM osoby MINUS nazwisko, zarobki FROM osoby;", "correct": false, "explain": "Niepoprawne - po MINUS brakuje słowa kluczowego SELECT przed listą kolumn nazwisko, zarobki - to błąd składniowy." },
   { "key": "b", "text": "SELECT imie, nazwisko FROM osoby GROUP BY imie, nazwisko WHERE zarobki = MAX(zarobki);", "correct": false, "explain": "Niepoprawne - WHERE musi poprzedzać GROUP BY, a nie występować po nim, a dodatkowo porównanie z MAX(zarobki) w tym miejscu jest błędne." },
   { "key": "c", "text": "DELETE FROM osoby WHERE nazwisko LIKE 'Kowalski';", "correct": true, "explain": "Poprawne - LIKE bez znaków wieloznacznych działa jak zwykłe porównanie i jest tu składniowo prawidłowe." },
   { "key": "d", "text": "SELECT nazwisko, zarobki GROUP BY nazwisko, zarobki ORDER BY nazwisko DESC;", "correct": false, "explain": "Niepoprawne - brakuje klauzuli FROM osoby." }
  ]
 },
 {
  "id": "Q077",
  "chapter": "G10",
  "chapterName": "Zapytania i funkcje SQL w Oracle (różne schematy)",
  "question": "Wskazać poprawne (w Oracle) zapytanie SQL znajdujące konta, na których był przelew powyżej 5000 i nie było przelewu poniżej 100:",
  "topicTitle": "Trzy równoważne sposoby wyrażenia \"jest, ale nie ma\"",
  "topicSummary": "\"Konta z przelewem > 5000, ale bez przelewu < 100\" to klasyczny wzorzec różnicy zbiorów, który w SQL można wyrazić na kilka równoważnych sposobów: operatorem MINUS (odejmowanie zbiorów wyników dwóch zapytań), kombinacją IN / NOT IN na podzapytaniach, albo kombinacją EXISTS / NOT EXISTS z podzapytaniami skorelowanymi. Przy typowym założeniu, że Konto_ID nigdy nie jest NULL, wszystkie trzy podejścia dają ten sam poprawny wynik.",
  "options": [
   { "key": "a", "text": "SELECT Konto_ID FROM Przelew WHERE Kwota > 5000 MINUS SELECT Konto_ID FROM Przelew WHERE Kwota < 100;", "correct": true, "explain": "Poprawne - MINUS odejmuje od zbioru kont z przelewem >5000 zbiór kont z przelewem <100, dając dokładnie te konta, które mają pierwszą cechę, a nie mają drugiej." },
   { "key": "b", "text": "SELECT DISTINCT Konto_ID FROM Przelew WHERE Konto_ID IN (SELECT Konto_ID FROM Przelew WHERE Kwota > 5000) AND Konto_ID NOT IN (SELECT Konto_ID FROM Przelew WHERE Kwota < 100);", "correct": true, "explain": "Poprawne - IN sprawdza przynależność do zbioru kont z dużym przelewem, a NOT IN wyklucza konta z małym przelewem; przy braku wartości NULL w Konto_ID jest to bezpieczne i poprawne." },
   { "key": "c", "text": "SELECT DISTINCT Konto_ID FROM Przelew p WHERE EXISTS (SELECT Konto_ID FROM Przelew WHERE Kwota > 5000 AND Konto_ID = p.Konto_ID) AND NOT EXISTS (SELECT Konto_ID FROM Przelew WHERE Kwota < 100 AND Konto_ID = p.Konto_ID);", "correct": true, "explain": "Poprawne - EXISTS/NOT EXISTS z podzapytaniami skorelowanymi po Konto_ID to bezpieczny (odporny na NULL-e) odpowiednik powyższych podejść." },
   { "key": "d", "text": "SELECT DISTINCT Konto_ID FROM Przelew WHERE Kwota > 5000 AND Kwota >= 100;", "correct": false, "explain": "Niepoprawne logicznie - to zapytanie ocenia pojedyncze wiersze przelewów (kwota jednocześnie >5000 i >=100, czyli po prostu >5000), a nie sprawdza, czy na koncie nie istnieje gdzie indziej żaden przelew poniżej 100." }
  ]
 },
 {
  "id": "Q079",
  "chapter": "G10",
  "chapterName": "Zapytania i funkcje SQL w Oracle (różne schematy)",
  "question": "Dlaczego poniższe zapytanie nie jest poprawne składniowo w Oracle? SELECT ID, Tytuł, COUNT(*) FROM Ksiazka JOIN Kategoria ON Ksiazka.Kategoria_ID = Kategoria.ID GROUP BY ID; Schematy: Ksiazka(ID, Tytuł, LiczbaStron, Kategoria_ID), Kategoria(ID, Nazwa, Opis).",
  "topicTitle": "Niejednoznaczność kolumn i niepełny GROUP BY",
  "topicSummary": "Obie złączone tabele mają kolumnę o nazwie ID (Ksiazka.ID i Kategoria.ID), więc każde niekwalifikowane odwołanie do ID - zarówno w SELECT, jak i w GROUP BY - jest niejednoznaczne i powoduje błąd. Niezależnie od tego, Tytuł występuje w SELECT, ale nie jest ani zagregowany, ani wymieniony w GROUP BY, co samo w sobie też jest błędem.",
  "options": [
   { "key": "a", "text": "Ponieważ nie jest podane, z której tabeli pochodzi ID.", "correct": true, "explain": "Tak - ID istnieje w obu złączonych tabelach (Ksiazka.ID i Kategoria.ID), więc niekwalifikowane odwołanie do ID jest niejednoznaczne." },
   { "key": "b", "text": "Ponieważ zamiast COUNT(*) należy użyć SUM(*).", "correct": false, "explain": "Nie - COUNT(*) jest poprawną i standardową funkcją liczącą wiersze w grupie; SUM(*) w ogóle nie jest poprawną konstrukcją SQL." },
   { "key": "c", "text": "Ponieważ zamiast JOIN powinno się użyć FROM i WHERE.", "correct": false, "explain": "Nie - składnia JOIN ... ON jest w pełni obsługiwana i poprawna w Oracle; nie trzeba jej zastępować starszą notacją z przecinkiem i WHERE." },
   { "key": "d", "text": "Ponieważ w GROUP BY nie jest wymieniony również Tytuł.", "correct": true, "explain": "Tak - Tytuł znajduje się w SELECT, ale nie jest ani zagregowany, ani ujęty w GROUP BY, co jest osobnym błędem niezależnym od niejednoznaczności ID." }
  ]
 },
 {
  "id": "Q126",
  "chapter": "G10",
  "chapterName": "Zapytania i funkcje SQL w Oracle (różne schematy)",
  "question": "Które z instrukcji SQL wypiszą pracowników pracujących w dziale o nazwie \"DALLAS\" lub \"CHICAGO\", zarabiających ponad 1200:",
  "topicTitle": "Priorytet AND przed OR w klauzuli WHERE",
  "topicSummary": "W SQL, tak jak w logice, operator AND wiąże silniej niż OR - warunek `DEPT='DALLAS' AND SAL>1200 OR DEPT='CHICAGO' AND SAL>1200` jest więc czytany jako `(DEPT='DALLAS' AND SAL>1200) OR (DEPT='CHICAGO' AND SAL>1200)`, co poprawnie wymaga zarobków > 1200 w obu działach. To samo osiąga jawne nawiasowanie `(DEPT='DALLAS' OR DEPT='CHICAGO') AND SAL>1200`. Zapis bez takiego nawiasowania (lub powtórzenia warunku na zarobki) łatwo prowadzi do warunku, który dla jednego z działów w ogóle nie sprawdza zarobków.",
  "options": [
   { "key": "a", "text": "SELECT NAME,DEPT,SAL FROM EMP WHERE DEPT='DALLAS' AND SAL>1200 OR DEPT='CHICAGO' AND SAL>1200;", "correct": true, "explain": "Poprawne - dzięki priorytetowi AND nad OR warunek sprowadza się do (DEPT='DALLAS' AND SAL>1200) OR (DEPT='CHICAGO' AND SAL>1200), czyli dokładnie do żądanego wyniku." },
   { "key": "b", "text": "SELECT NAME,DEPT,SAL FROM EMP WHERE DEPT='DALLAS' AND SAL>1200 OR DEPT='CHICAGO';", "correct": false, "explain": "Niepoprawne - AND wiąże silniej niż OR, więc warunek na zarobki (SAL>1200) dotyczy tylko działu DALLAS; dla CHICAGO zostaną zwrócone wszyscy pracownicy, niezależnie od zarobków." },
   { "key": "c", "text": "SELECT NAME,DEPT,SAL FROM EMP WHERE (DEPT='DALLAS' OR DEPT='CHICAGO') AND SAL>1200;", "correct": true, "explain": "Poprawne - jawne nawiasy wymuszają najpierw sprawdzenie działu, a dopiero potem warunku na zarobki, dając ten sam, poprawny wynik co odpowiedź A." },
   { "key": "d", "text": "SELECT NAME,DEPT,SAL FROM EMP WHERE DEPT='DALLAS' OR DEPT='CHICAGO' AND SAL>1200;", "correct": false, "explain": "Niepoprawne - z tego samego powodu co B: AND wiąże silniej, więc warunek na zarobki dotyczy tylko CHICAGO, a dla DALLAS zwrócą się wszyscy pracownicy bez względu na SAL." }
  ]
 },
 {
  "id": "Q135",
  "chapter": "G10",
  "chapterName": "Zapytania i funkcje SQL w Oracle (różne schematy)",
  "question": "Dane są tabele Osoby(Imie, Nazwisko, Zarobki, Id_działu) i Działy(Id_działu, Nazwa). Które instrukcje są poprawne składniowo w Oracle?",
  "topicTitle": "GROUP BY z COUNT oraz podzapytanie skalarne w UPDATE",
  "topicSummary": "Zapytanie z COUNT(Działy.Nazwa) po złączeniu i grupowaniu po Osoby.Nazwisko jest poprawne, bo jedyna niezagregowana kolumna z SELECT (Nazwisko) występuje w GROUP BY. UPDATE z podzapytaniem skalarnym w WHERE (np. porównanie liczby z wynikiem SELECT COUNT(*)) jest poprawną, częstą konstrukcją. Natomiast DELETE nie może jednocześnie kasować z dwóch tabel naraz (FROM Osoby, Działy), a bezpośrednie użycie COUNT(*) w WHERE (bez podzapytania) jest niedozwolone, bo agregaty nie działają na poziomie pojedynczego wiersza.",
  "options": [
   { "key": "a", "text": "SELECT Osoby.Nazwisko, COUNT(Działy.Nazwa) FROM Osoby, Działy WHERE Osoby.Id_działu = Działy.Id_działu GROUP BY Osoby.Nazwisko;", "correct": true, "explain": "Poprawne - COUNT(Działy.Nazwa) jest agregatem, a jedyna niezagregowana kolumna (Osoby.Nazwisko) występuje w GROUP BY." },
   { "key": "b", "text": "UPDATE Osoby SET Id_działu = NULL WHERE 5 > (SELECT COUNT(*) FROM Działy);", "correct": true, "explain": "Poprawne - podzapytanie skalarne (SELECT COUNT(*) FROM Działy) zwraca dokładnie jedną wartość, więc porównanie 5 > (...) jest prawidłowe." },
   { "key": "c", "text": "DELETE FROM Osoby, Działy WHERE Osoby.Nazwisko = 'KOWALSKI';", "correct": false, "explain": "Niepoprawne - w standardowym Oracle DELETE nie można usuwać jednocześnie z dwóch tabel wymienionych po przecinku w jednym poleceniu." },
   { "key": "d", "text": "UPDATE Osoby SET Id_działu = NULL WHERE COUNT(*) < 5;", "correct": false, "explain": "Niepoprawne - COUNT(*) użyte bezpośrednio w WHERE (bez podzapytania) jest niedozwolone, bo funkcje agregujące nie mają sensu na poziomie pojedynczego, jeszcze niepogrupowanego wiersza." }
  ]
 },
 {
  "id": "Q136",
  "chapter": "G10",
  "chapterName": "Zapytania i funkcje SQL w Oracle (różne schematy)",
  "question": "Dana jest tabela Osoby(imie, nazwisko, zarobki). Które instrukcje są poprawne składniowo w Oracle?",
  "topicTitle": "AVG, INSERT, LIKE - poprawne; agregat w WHERE i UPDATE bez SET - błędne",
  "topicSummary": "AVG(zarobki), INSERT z jawną listą kolumn oraz DELETE z warunkiem LIKE to standardowe, poprawne konstrukcje. Błędne są za to: użycie agregatu MAX(zarobki) bezpośrednio w WHERE (agregaty nie działają na poziomie pojedynczego wiersza przed zgrupowaniem) oraz zapis `UPDATE Osoby.Nazwisko = 'Kowalski'`, który pomija obowiązkową składnię `UPDATE tabela SET kolumna = wartość`.",
  "options": [
   { "key": "a", "text": "SELECT AVG(zarobki) FROM Osoby;", "correct": true, "explain": "Poprawne - proste zapytanie agregujące bez GROUP BY, zwracające jedną wartość średniej." },
   { "key": "b", "text": "INSERT INTO Osoby(imie, nazwisko, zarobki) VALUES ('Jan', 'Kowalski', 1000);", "correct": true, "explain": "Poprawne - jawna lista kolumn zgodna z listą wartości." },
   { "key": "c", "text": "DELETE FROM Osoby WHERE nazwisko LIKE 'Kowalski';", "correct": true, "explain": "Poprawne - LIKE bez znaków specjalnych (%, _) działa tu jak zwykłe porównanie równości." },
   { "key": "d", "text": "SELECT imie, nazwisko FROM Osoby WHERE zarobki = MAX(zarobki);", "correct": false, "explain": "Niepoprawne - funkcji agregującej MAX nie wolno użyć bezpośrednio w WHERE; do porównania z maksimum potrzebne jest podzapytanie w nawiasach, np. WHERE zarobki = (SELECT MAX(zarobki) FROM Osoby)." },
   { "key": "e", "text": "UPDATE Osoby.Nazwisko = 'Kowalski';", "correct": false, "explain": "Niepoprawne - brakuje obowiązkowej struktury UPDATE tabela SET kolumna = wartość; nie można zaktualizować pojedynczej kolumny bez słowa kluczowego SET i nazwy tabeli osobno od kolumny." }
  ]
 },
 {
  "id": "Q140",
  "chapter": "G10",
  "chapterName": "Zapytania i funkcje SQL w Oracle (różne schematy)",
  "question": "Funkcja NVL służy do:",
  "topicTitle": "NVL zamienia NULL na wartość zastępczą - w kolumnie lub zmiennej",
  "topicSummary": "NVL(wyrażenie, wartość_zastępcza) zwraca podaną wartość zastępczą, jeśli pierwsze wyrażenie ma wartość NULL, a w przeciwnym razie zwraca samo wyrażenie bez zmian - działa to zarówno dla wartości pochodzącej z kolumny tabeli, jak i ze zwykłej zmiennej, a zastępczą wartością nie musi być akurat zero (może to być dowolna wartość podana jako drugi argument).",
  "options": [
   { "key": "a", "text": "Zamiany napotkanej w tabeli wartości \"NULL\" na zero", "correct": false, "explain": "Nie - to zbyt wąskie ujęcie; wartość zastępcza nie musi być zerem, tylko dowolną wartością podaną jako drugi argument NVL." },
   { "key": "b", "text": "Zamiany napotkanej w tabeli wartości z \"NULL\" na podaną w argumencie wartość", "correct": true, "explain": "Tak - to podstawowe zastosowanie NVL: zamiana NULL-a z kolumny tabeli na dowolną wartość podaną jako drugi argument." },
   { "key": "c", "text": "Zamiany wartości zmiennej z \"NULL\" na podaną w argumencie wartość", "correct": true, "explain": "Tak - NVL działa identycznie dla dowolnego wyrażenia, w tym wartości zmiennej, nie tylko dla kolumny tabeli." },
   { "key": "d", "text": "Zamiany wartości podanej w argumencie zmiennej lub komórki perspektywy z \"NULL\" na podaną w drugim argumencie wartość", "correct": false, "explain": "Nie - to nadmiarowo zawężone/mylące sformułowanie w porównaniu do prostszych i pełniejszych opisów w odpowiedziach B i C." }
  ]
 },
 {
  "id": "Q141",
  "chapter": "G10",
  "chapterName": "Zapytania i funkcje SQL w Oracle (różne schematy)",
  "question": "Użycie klauzuli PRIMARY KEY przy deklaracji pola tabeli w instrukcji CREATE TABLE powoduje, że:",
  "topicTitle": "PRIMARY KEY na poziomie kolumny - jeden na tabelę",
  "topicSummary": "Klauzula PRIMARY KEY dodana bezpośrednio przy definicji jednej kolumny czyni ją kluczem głównym, automatycznie wymusza NOT NULL (klucz główny nigdy nie może być pusty) oraz automatycznie zakłada na niej unikalny indeks. Ponieważ tabela może mieć tylko jeden klucz główny, tej samej, kolumnowej klauzuli PRIMARY KEY nie można powtórzyć przy innym polu tej samej tabeli - klucz złożony z wielu kolumn wymaga osobnej, tabelowej postaci tej klauzuli (PRIMARY KEY (kol1, kol2)).",
  "options": [
   { "key": "a", "text": "To pole staje się polem klucza głównego", "correct": true, "explain": "Tak - to podstawowe, bezpośrednie działanie klauzuli PRIMARY KEY." },
   { "key": "b", "text": "W żadnym innym polu tej tabeli nie może zostać użyta klauzula PRIMARY KEY", "correct": true, "explain": "Tak - tabela może mieć tylko jeden klucz główny, więc kolumnowa klauzula PRIMARY KEY nie może się powtórzyć przy innej kolumnie (klucz złożony wymaga osobnej, tabelowej składni)." },
   { "key": "c", "text": "W polu tym nie może wystąpić wartość \"NULL\"", "correct": true, "explain": "Tak - klucz główny niejawnie wymusza ograniczenie NOT NULL." },
   { "key": "d", "text": "Na tej kolumnie (polu) zostanie automatycznie założony indeks", "correct": true, "explain": "Tak - Oracle automatycznie zakłada unikalny indeks wspierający ograniczenie PRIMARY KEY." }
  ]
 },
 {
  "id": "Q145",
  "chapter": "G10",
  "chapterName": "Zapytania i funkcje SQL w Oracle (różne schematy)",
  "question": "Które klauzule - jeżeli występują - muszą znaleźć się przed GROUP BY w zapytaniu SELECT w Oracle?",
  "topicTitle": "Kolejność klauzul: FROM, WHERE, GROUP BY, HAVING, ORDER BY",
  "topicSummary": "Standardowa kolejność klauzul zapytania SELECT to: FROM, WHERE, GROUP BY, HAVING, ORDER BY - stąd zarówno FROM, jak i WHERE muszą (jeśli występują) poprzedzać GROUP BY. ORDER BY zawsze występuje na samym końcu zapytania, a HAVING standardowo bezpośrednio po GROUP BY (choć w praktyce Oracle dopuszcza też zapis HAVING przed GROUP BY).",
  "options": [
   { "key": "a", "text": "FROM", "correct": true, "explain": "Tak - klauzula FROM zawsze poprzedza GROUP BY (wskazuje źródło danych do zgrupowania)." },
   { "key": "b", "text": "WHERE", "correct": true, "explain": "Tak - WHERE filtruje pojedyncze wiersze przed ich zgrupowaniem, więc musi poprzedzać GROUP BY." },
   { "key": "c", "text": "ORDER BY", "correct": false, "explain": "Nie - ORDER BY sortuje już gotowy wynik zapytania i występuje na samym końcu, po GROUP BY (i po HAVING)." },
   { "key": "d", "text": "HAVING", "correct": false, "explain": "Nie - HAVING filtruje wynik grupowania, więc standardowo występuje po GROUP BY, a nie przed nim." }
  ]
 },
 {
  "id": "Q146",
  "chapter": "G10",
  "chapterName": "Zapytania i funkcje SQL w Oracle (różne schematy)",
  "question": "Jaką wartość przyjmie kolumna \"Salary\" dla wierszy spełniających warunek Sal IS NULL w zapytaniu: SELECT ename, NVL(sal, 0) \"Salary\" FROM Emp WHERE Sal IS NULL ORDER BY ename;",
  "topicTitle": "NVL zamienia NULL na podaną wartość zastępczą",
  "topicSummary": "Warunek WHERE Sal IS NULL wybiera tylko te wiersze, w których Sal jest puste - a NVL(sal, 0) zamienia właśnie taką pustą wartość na podaną wartość zastępczą, tu: 0. Dla każdego zwróconego wiersza kolumna „Salary” będzie więc miała wartość 0, a nie NULL.",
  "options": [
   { "key": "a", "text": "0", "correct": true, "explain": "Tak - NVL(sal, 0) zamienia NULL na wartość zastępczą podaną jako drugi argument, tu: 0." },
   { "key": "b", "text": "NULL", "correct": false, "explain": "Nie - właśnie po to używa się NVL, żeby zamienić NULL na konkretną wartość zastępczą (tu 0), a nie zwrócić samo NULL." },
   { "key": "c", "text": "spację", "correct": false, "explain": "Nie - NVL zwraca dokładnie podaną wartość zastępczą (liczbę 0), a nie spację." },
   { "key": "d", "text": "zapytanie nie zwróci żadnych wierszy", "correct": false, "explain": "Nie - warunek Sal IS NULL poprawnie wybiera wiersze z pustym Sal (o ile takie istnieją), NVL jedynie zmienia wyświetlaną wartość, nie filtruje wyniku." }
  ]
 },
 {
  "id": "Q147",
  "chapter": "G10",
  "chapterName": "Zapytania i funkcje SQL w Oracle (różne schematy)",
  "question": "Który z poniższych operatorów zwróci sumę zapytań bez eliminacji powtarzających się wierszy?",
  "topicTitle": "UNION ALL zachowuje duplikaty",
  "topicSummary": "UNION usuwa duplikaty z sumy dwóch zapytań (co kosztuje dodatkowe sortowanie/porównywanie), a UNION ALL po prostu skleja wyniki obu zapytań bez takiej eliminacji - jest więc szybszy, ale może zwrócić powtarzające się wiersze. MINUS i INTERSECT to zupełnie inne operacje (różnica i część wspólna zbiorów).",
  "options": [
   { "key": "a", "text": "MINUS", "correct": false, "explain": "Nie - MINUS zwraca różnicę zbiorów (wiersze z pierwszego zapytania, których nie ma w drugim), a nie sumę." },
   { "key": "b", "text": "UNION ALL", "correct": true, "explain": "Tak - UNION ALL sumuje wyniki obu zapytań bez usuwania powtarzających się wierszy, w przeciwieństwie do zwykłego UNION." },
   { "key": "c", "text": "UNION", "correct": false, "explain": "Nie - zwykły UNION usuwa duplikaty z sumy wyników, w odróżnieniu od UNION ALL." },
   { "key": "d", "text": "INTERSECT", "correct": false, "explain": "Nie - INTERSECT zwraca część wspólną (wiersze występujące w obu zapytaniach), a nie sumę." }
  ]
 },
 {
  "id": "Q148",
  "chapter": "G10",
  "chapterName": "Zapytania i funkcje SQL w Oracle (różne schematy)",
  "question": "Jaki będzie efekt wykonania polecenia: CREATE TABLE Osoby (imie VARCHAR2(30) PRIMARY KEY, nazwisko VARCHAR2(30) PRIMARY KEY, zarobki NUMBER(7,2))",
  "topicTitle": "Dwie kolumnowe klauzule PRIMARY KEY w jednej tabeli to błąd",
  "topicSummary": "Klauzula PRIMARY KEY użyta przy definicji pojedynczej kolumny może wystąpić w tabeli tylko RAZ (tabela ma dokładnie jeden klucz główny). Tu użyto jej dwukrotnie - najpierw przy imie, potem przy nazwisko - co Oracle odrzuci jako błąd składniowy/definicyjny. Żeby zbudować klucz złożony z obu kolumn, trzeba użyć osobnej, tabelowej postaci ograniczenia: PRIMARY KEY (imie, nazwisko), a nie powtarzać klauzuli przy każdej kolumnie z osobna.",
  "options": [
   { "key": "a", "text": "przy próbie wykonania polecenia wystąpi błąd", "correct": true, "explain": "Tak - dwukrotne użycie kolumnowej klauzuli PRIMARY KEY w jednej tabeli jest niedozwolone i Oracle zgłosi błąd." },
   { "key": "b", "text": "zostanie stworzona tabela Osoby, której kluczem głównym będzie pole imie", "correct": false, "explain": "Nie - polecenie w ogóle się nie wykona z powodu błędu, więc żadna tabela nie powstanie." },
   { "key": "c", "text": "zostanie stworzona tabela Osoby, której kluczem głównym będzie zbiór złożony z pól (imie, nazwisko)", "correct": false, "explain": "Nie - klucz złożony z dwóch kolumn wymaga osobnej, tabelowej składni PRIMARY KEY (imie, nazwisko), a nie dwukrotnego powtórzenia klauzuli kolumnowej." },
   { "key": "d", "text": "zostanie stworzona tabela Osoby, której kluczem głównym będzie pole nazwisko", "correct": false, "explain": "Nie - polecenie w ogóle się nie wykona z powodu błędu." }
  ]
 },
 {
  "id": "Q150",
  "chapter": "G10",
  "chapterName": "Zapytania i funkcje SQL w Oracle (różne schematy)",
  "question": "Jakie nazwiska zostaną wyświetlone w wyniku zapytania: SELECT ename FROM emp WHERE ename LIKE '_A%';",
  "topicTitle": "Podkreślnik w LIKE to dokładnie jeden dowolny znak",
  "topicSummary": "W operatorze LIKE znak podkreślenia (_) oznacza dokładnie jeden dowolny znak, a % - dowolną (także zerową) liczbę dowolnych znaków. Wzorzec '_A%' pasuje więc do nazwisk, w których na DRUGIM miejscu (po dokładnie jednym dowolnym znaku) występuje litera A, a po niej cokolwiek (albo nic).",
  "options": [
   { "key": "a", "text": "nazwiska, w których litera A występuje na dowolnym miejscu poza pierwszym", "correct": false, "explain": "Nie - wzorzec '_A%' wymaga litery A dokładnie na DRUGIM miejscu, a nie na dowolnym miejscu poza pierwszym." },
   { "key": "b", "text": "nazwiska, w których litera A występuje na drugim miejscu", "correct": true, "explain": "Tak - podkreślnik zajmuje dokładnie jedną (pierwszą) pozycję, a zaraz po niej musi wystąpić litera A, czyli A jest na drugim miejscu nazwiska." },
   { "key": "c", "text": "nazwiska kończące się na A", "correct": false, "explain": "Nie - do tego służyłby wzorzec '%A' (bez podkreślnika na początku), a nie '_A%'." },
   { "key": "d", "text": "nazwiska zaczynające się na A", "correct": false, "explain": "Nie - do tego służyłby wzorzec 'A%' (bez podkreślnika na początku), a nie '_A%', który wymusza jeden dowolny znak PRZED literą A." }
  ]
 },
 {
  "id": "Q151",
  "chapter": "G10",
  "chapterName": "Zapytania i funkcje SQL w Oracle (różne schematy)",
  "question": "Które instrukcje SELECT ... INTO nie zakończą się błędem, jeśli tabela DEPT zawiera dokładnie dwa wiersze z deptno równymi 10 i 20, a v_deptno jest poprawnie zadeklarowaną zmienną skalarną?",
  "topicTitle": "SELECT INTO do zmiennej skalarnej wymaga dokładnie jednego wiersza",
  "topicSummary": "SELECT ... INTO do zmiennej skalarnej (w PL/SQL) musi zwrócić dokładnie jeden wiersz - zero wierszy powoduje wyjątek NO_DATA_FOUND, a więcej niż jeden wiersz wyjątek TOO_MANY_ROWS. Przy dokładnie dwóch wierszach (deptno=10 i deptno=20) warunki deptno=10, deptno>10 i deptno<20 wybierają każdy dokładnie jeden z nich, natomiast deptno>=10 dopasowuje OBA wiersze naraz, co kończy się błędem.",
  "options": [
   { "key": "a", "text": "SELECT deptno INTO v_deptno FROM dept WHERE deptno = 10;", "correct": true, "explain": "Poprawne - warunek wybiera dokładnie jeden wiersz (deptno=10)." },
   { "key": "b", "text": "SELECT deptno INTO v_deptno FROM dept WHERE deptno > 10;", "correct": true, "explain": "Poprawne - warunek wybiera dokładnie jeden wiersz (deptno=20, jedyny większy od 10)." },
   { "key": "c", "text": "SELECT deptno INTO v_deptno FROM dept WHERE deptno < 20;", "correct": true, "explain": "Poprawne - warunek wybiera dokładnie jeden wiersz (deptno=10, jedyny mniejszy od 20)." },
   { "key": "d", "text": "SELECT deptno INTO v_deptno FROM dept WHERE deptno >= 10;", "correct": false, "explain": "Niepoprawne - warunek dopasowuje OBA wiersze (10 i 20), co przy przypisaniu do zmiennej skalarnej kończy się błędem TOO_MANY_ROWS." }
  ]
 },
 {
  "id": "Q153",
  "chapter": "G10",
  "chapterName": "Zapytania i funkcje SQL w Oracle (różne schematy)",
  "question": "Aby posortować wyniki zapytania w odwrotnym porządku leksykograficznym przy nazwie sortowanej kolumny należy wpisać:",
  "topicTitle": "DESC odwraca domyślny porządek sortowania",
  "topicSummary": "Domyślnym porządkiem sortowania w ORDER BY jest porządek rosnący (ASC), który nie musi być jawnie wypisywany. Aby uzyskać porządek malejący (odwrotny do domyślnego), trzeba jawnie dopisać słowo kluczowe DESC bezpośrednio po nazwie sortowanej kolumny.",
  "options": [
   { "key": "a", "text": "nic nie trzeba wpisywać, to domyślny sposób sortowania", "correct": false, "explain": "Nie - domyślny (bez dopisku) jest porządek ROSNĄCY (ASC), a nie malejący/odwrotny." },
   { "key": "b", "text": "DESC", "correct": true, "explain": "Tak - DESC jawnie odwraca kierunek sortowania na malejący." },
   { "key": "c", "text": "ASC", "correct": false, "explain": "Nie - ASC to (i tak domyślny) porządek rosnący, a pytanie dotyczy porządku odwrotnego." }
  ]
 },
 {
  "id": "Q156",
  "chapter": "G10",
  "chapterName": "Zapytania i funkcje SQL w Oracle (różne schematy)",
  "question": "W którym z poniższych przypadków konieczne jest umieszczenie tekstu w apostrofach (w Oracle)?",
  "topicTitle": "Apostrofy tylko dla literałów tekstowych",
  "topicSummary": "Apostrofy w Oracle ograniczają LITERAŁY tekstowe (stałe teksty wpisane wprost w zapytaniu) - np. myślnik wyświetlany między dwiema łączonymi kolumnami (ename||'-'||job) musi być w apostrofach, bo jest literałem. Odwołanie do zmiennej (niezależnie od jej typu) nie wymaga apostrofów, bo to nie jest literał tekstowy, tylko nazwa zmiennej, a nazwy kolumn w SELECT nigdy nie ujmuje się w apostrofy (to identyfikatory, nie literały).",
  "options": [
   { "key": "a", "text": "odwołanie do zmiennej typu CHAR w klauzuli WHERE", "correct": false, "explain": "Nie - odwołanie do zmiennej (nawet znakowej) to nazwa zmiennej, a nie literał tekstowy, więc apostrofów nie wymaga." },
   { "key": "b", "text": "odwołanie do zmiennej numerycznej w klauzuli WHERE", "correct": false, "explain": "Nie - z tego samego powodu; apostrofy dotyczą literałów tekstowych, a nie odwołań do zmiennych jakiegokolwiek typu." },
   { "key": "c", "text": "wyświetlenie myślnika (-) między dwoma połączonymi kolumnami", "correct": true, "explain": "Tak - myślnik wpisany wprost w zapytaniu jest literałem tekstowym (np. w konkatenacji kol1||'-'||kol2) i musi być ujęty w apostrofy." },
   { "key": "d", "text": "wskazanie nazw kolumn w klauzuli SELECT", "correct": false, "explain": "Nie - nazwy kolumn to identyfikatory, a nie literały tekstowe, więc nigdy nie ujmuje się ich w apostrofy." }
  ]
 },
 {
  "id": "Q161",
  "chapter": "G10",
  "chapterName": "Zapytania i funkcje SQL w Oracle (różne schematy)",
  "question": "Dane są trzy tabele Klienci(Id_Klienta, Imie, Nazwisko), Produkty(Id_Produktu, Nazwa, Cena) oraz Zakupy(Id_Klienta, Id_Produktu, Ilosc). Wskaż poprawne zapytania SQL znajdujące nazwy i ceny produktów, które zostały zakupione przez przynajmniej jednego klienta.",
  "topicTitle": "INNER JOIN (lub jego odpowiednik przez WHERE) zwraca tylko faktycznie kupione produkty",
  "topicSummary": "„Zakupione przez przynajmniej jednego klienta” wymaga złączenia Produkty z Zakupy - czy to klasyczną składnią z przecinkiem i WHERE, czy jawnym INNER JOIN - oba dają ten sam wynik: tylko produkty, które mają choć jeden pasujący wiersz w Zakupy. RIGHT OUTER JOIN od strony Zakupy do Produktów dołączyłby też produkty BEZ żadnego zakupu (z NULL-ami), co jest niezgodne z treścią, a zapytanie bez żadnego złączenia z Zakupy w ogóle nie sprawdza, czy produkt był kupiony.",
  "options": [
   { "key": "a", "text": "SELECT DISTINCT Nazwa, Cena FROM Zakupy RIGHT OUTER JOIN Produkty ON Produkty.Id_Produktu = Zakupy.Id_Produktu;", "correct": false, "explain": "Niepoprawne względem treści - RIGHT OUTER JOIN (od Produkty) dołączy też produkty, które nigdy nie zostały kupione (z NULL-ami po stronie Zakupy), co jest sprzeczne z wymaganiem „kupione przez przynajmniej jednego klienta”." },
   { "key": "b", "text": "SELECT DISTINCT Nazwa, Cena FROM Produkty, Zakupy WHERE Produkty.Id_Produktu = Zakupy.Id_Produktu;", "correct": true, "explain": "Poprawne - klasyczne złączenie zwraca tylko produkty mające co najmniej jeden pasujący wiersz w Zakupy, czyli faktycznie kupione." },
   { "key": "c", "text": "SELECT DISTINCT Nazwa, Cena FROM Produkty, Klienci;", "correct": false, "explain": "Niepoprawne - to iloczyn kartezjański Produktów i Klientów, w ogóle nieodwołujący się do tabeli Zakupy, więc nie sprawdza faktu zakupu." },
   { "key": "d", "text": "SELECT DISTINCT Nazwa, Cena FROM Produkty INNER JOIN Zakupy ON Produkty.Id_Produktu = Zakupy.Id_Produktu;", "correct": true, "explain": "Poprawne - INNER JOIN to jawna, równoważna postać złączenia z odpowiedzi B, dająca ten sam, poprawny wynik." }
  ]
 },
 {
  "id": "Q163",
  "chapter": "G10",
  "chapterName": "Zapytania i funkcje SQL w Oracle (różne schematy)",
  "question": "Co należy do zalet synonimów?",
  "topicTitle": "Synonimy: niezależność logiczna i definiowanie poziomu zewnętrznego",
  "topicSummary": "Synonim to alternatywna nazwa dla obiektu bazy danych (tabeli, widoku, procedury) - pozwala ukryć przed użytkownikiem rzeczywistą nazwę/właściciela/lokalizację obiektu, co jest formą niezależności LOGICZNEJ (aplikacja odwołuje się do stabilnej nazwy, niezależnie od zmian po stronie właściciela obiektu) i naturalnym narzędziem budowania zewnętrznego (widocznego dla użytkownika) poziomu schematu bazy. Synonimy same w sobie nie chronią przed nieuprawnionym dostępem (to rola uprawnień) ani nie dotyczą fizycznego sposobu przechowywania danych.",
  "options": [
   { "key": "a", "text": "Są środkiem do realizacji niezależności fizycznej danych.", "correct": false, "explain": "Nie - to nie jest zaleta synonimów; niezależność fizyczną (od sposobu przechowywania danych na dysku) zapewniają inne mechanizmy." },
   { "key": "b", "text": "Ochraniają przed niepowołanym lub nieprawidłowym dostępem do danych.", "correct": false, "explain": "Nie - kontrolę dostępu zapewniają uprawnienia (GRANT/REVOKE), a nie synonimy same w sobie." },
   { "key": "c", "text": "Są środkiem do realizacji niezależności logicznej danych.", "correct": true, "explain": "Tak - synonim ukrywa rzeczywistą nazwę/lokalizację obiektu za stabilną nazwą alternatywną, co jest formą niezależności logicznej." },
   { "key": "d", "text": "Umożliwiają zdefiniowanie poziomu zewnętrznego bazy danych.", "correct": true, "explain": "Tak - synonimy pozwalają zbudować widoczny dla użytkownika, uproszczony poziom nazewnictwa niezależny od wewnętrznej struktury bazy." }
  ]
 },
 {
  "id": "Q167",
  "chapter": "G10",
  "chapterName": "Zapytania i funkcje SQL w Oracle (różne schematy)",
  "question": "Dane są trzy tabele Klienci(Id_Klienta, Imie, Nazwisko), Produkty(Id_Produktu, Nazwa, Cena) oraz Zakupy(Id_Klienta, Id_Produktu, Ilosc). Wskaż poprawne zapytanie SQL znajdujące imiona i nazwiska klientów, którzy zakupili co najmniej jeden produkt.",
  "topicTitle": "Złączenie z Zakupy (nawet dodatkowo z Produkty) wystarczy - LEFT JOIN i brak złączenia nie",
  "topicSummary": "„Zakupił co najmniej jeden produkt” wymaga, żeby dla klienta istniał choć jeden pasujący wiersz w Zakupy - zwykłe złączenie Klienci z Zakupy to zapewnia, a dodatkowe, poprawne dołączenie tabeli Produkty (przez Id_Produktu) niczego nie psuje, bo nie zmienia zbioru klientów spełniających warunek. LEFT OUTER JOIN od strony Klienci dołączyłby też klientów BEZ żadnego zakupu (z NULL-ami po stronie Zakupy), a zapytanie bez złączenia z Zakupy w ogóle nie sprawdza faktu zakupu.",
  "options": [
   { "key": "a", "text": "SELECT DISTINCT Imie, Nazwisko FROM Klienci, Zakupy WHERE Klienci.Id_Klienta = Zakupy.Id_Klienta;", "correct": true, "explain": "Poprawne - złączenie z Zakupy zwraca tylko klientów mających co najmniej jeden wiersz zakupu." },
   { "key": "b", "text": "SELECT DISTINCT Imie, Nazwisko FROM Klienci LEFT OUTER JOIN Zakupy ON Klienci.Id_Klienta = Zakupy.Id_Klienta;", "correct": false, "explain": "Niepoprawne - LEFT OUTER JOIN od strony Klienci dołączy też klientów BEZ żadnego zakupu (z wartościami NULL po stronie Zakupy), co jest sprzeczne z wymaganiem „co najmniej jeden produkt”." },
   { "key": "c", "text": "SELECT Imie, Nazwisko FROM Klienci;", "correct": false, "explain": "Niepoprawne - zapytanie w ogóle nie odwołuje się do tabeli Zakupy, więc zwróci wszystkich klientów, niezależnie od tego, czy cokolwiek kupili." },
   { "key": "d", "text": "SELECT DISTINCT Imie, Nazwisko FROM Klienci, Zakupy, Produkty WHERE Klienci.Id_Klienta = Zakupy.Id_Klienta AND Produkty.Id_Produktu = Zakupy.Id_Produktu;", "correct": true, "explain": "Poprawne - dodatkowe, poprawnie złączone dołączenie tabeli Produkty jest zbędne, ale nieszkodliwe; warunek złączenia z Zakupy nadal gwarantuje, że klient dokonał co najmniej jednego zakupu." }
  ]
 }
];
