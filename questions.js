// Baza pytań quizu RBD (Relacyjne Bazy Danych: SQL, projektowanie schematów,
// postacie normalne, spójność referencyjna, modelowanie encja-związek).
// Każde pytanie ma pole topicTitle/topicSummary (blok "Warto wiedzieć" wyświetlany po
// odpowiedzi) oraz wyjaśnienie (explain) przy każdej opcji odpowiedzi.

const QUESTIONS = [
 {
  "id": "Q001",
  "chapter": "G1",
  "chapterName": "Ogólne SQL",
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
  "chapter": "G1",
  "chapterName": "Ogólne SQL",
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
  "chapter": "G1",
  "chapterName": "Ogólne SQL",
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
  "id": "Q004",
  "chapter": "G1",
  "chapterName": "Ogólne SQL",
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
  "id": "Q005",
  "chapter": "G1",
  "chapterName": "Ogólne SQL",
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
  "chapter": "G1",
  "chapterName": "Ogólne SQL",
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
  "chapter": "G1",
  "chapterName": "Ogólne SQL",
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
  "id": "Q008",
  "chapter": "G1",
  "chapterName": "Ogólne SQL",
  "question": "Instrukcja GRANT służy do:",
  "topicTitle": "Zarządzanie uprawnieniami (DCL)",
  "topicSummary": "GRANT i REVOKE to polecenia DCL. GRANT przyznaje użytkownikowi lub roli określone uprawnienia (np. SELECT, INSERT na danej tabeli), a REVOKE je odbiera. Uprawnienia te są sprawdzane przez system bazodanowy przy każdej próbie wykonania operacji na obiekcie.",
  "options": [
   { "key": "a", "text": "przyznawania uprawnień w bazie danych", "correct": true, "explain": "Tak - GRANT nadaje uprawnienia do obiektów bazy danych." },
   { "key": "b", "text": "zatwierdzania zmian w bazie danych", "correct": false, "explain": "Nie - to zadanie COMMIT." },
   { "key": "c", "text": "odbierania uprawnień w bazie danych", "correct": false, "explain": "Nie - odbieranie uprawnień to zadanie polecenia REVOKE, przeciwnego do GRANT." },
   { "key": "d", "text": "aktualizacji rekordów w bazie danych", "correct": false, "explain": "Nie - to zadanie UPDATE." }
  ]
 },
 {
  "id": "Q009",
  "chapter": "G1",
  "chapterName": "Ogólne SQL",
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
  "id": "Q010",
  "chapter": "G1",
  "chapterName": "Ogólne SQL",
  "question": "Jaka jest wartość wyrażenia NULL = NULL?",
  "topicTitle": "Logika trójwartościowa (NULL)",
  "topicSummary": "SQL operuje na logice trójwartościowej: TRUE, FALSE i UNKNOWN. NULL oznacza wartość nieznaną, więc porównanie dwóch wartości NULL nie daje TRUE - dwie \"nieznane\" wartości nie muszą być sobie równe, dlatego wynikiem jest UNKNOWN. Z tego powodu do sprawdzania, czy coś jest NULL, używa się IS NULL / IS NOT NULL, a nie operatora \"=\".",
  "options": [
   { "key": "a", "text": "jest nieokreślone (UNKNOWN)", "correct": true, "explain": "Tak - porównanie z NULL zawsze daje UNKNOWN, niezależnie od drugiego argumentu." },
   { "key": "b", "text": "TRUE", "correct": false, "explain": "Nie - NULL nie jest \"równy\" nawet samemu sobie w sensie operatora =." },
   { "key": "c", "text": "FALSE", "correct": false, "explain": "Nie - wynikiem nie jest jednoznaczne FALSE, tylko UNKNOWN." },
   { "key": "d", "text": "NULL", "correct": false, "explain": "Nie - wynikiem porównania (wyrażenia logicznego) jest wartość logiczna UNKNOWN, a nie NULL (choć bywa ona techniczne reprezentowana jako NULL, w logice trójwartościowej nazywana jest UNKNOWN)." }
  ]
 },
 {
  "id": "Q011",
  "chapter": "G1",
  "chapterName": "Ogólne SQL",
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
  "chapter": "G1",
  "chapterName": "Ogólne SQL",
  "question": "Jaka jest wartość wyrażenia FALSE OR NULL?",
  "topicTitle": "Logika trójwartościowa (NULL)",
  "topicSummary": "Gdy jeden operand OR jest FALSE, wynik zależy wyłącznie od drugiego operandu. Skoro drugi operand jest nieznany (NULL/UNKNOWN), to i wynik całego wyrażenia jest nieznany - stąd FALSE OR NULL = UNKNOWN.",
  "options": [
   { "key": "a", "text": "jest nieokreślone (UNKNOWN)", "correct": true, "explain": "Tak - FALSE nie przesądza wyniku OR, więc wynik zależy od nieznanej wartości drugiego operandu i jest UNKNOWN." },
   { "key": "b", "text": "TRUE", "correct": false, "explain": "Nie - nie wiadomo, czy drugi operand jest TRUE, więc nie można przesądzić o TRUE." },
   { "key": "c", "text": "FALSE", "correct": false, "explain": "Nie - nie wiadomo, czy drugi operand jest FALSE, więc nie można przesądzić o FALSE." },
   { "key": "d", "text": "NULL", "correct": false, "explain": "Nie - poprawną nazwą wyniku logicznego jest UNKNOWN." }
  ]
 },
 {
  "id": "Q013",
  "chapter": "G1",
  "chapterName": "Ogólne SQL",
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
  "chapter": "G1",
  "chapterName": "Ogólne SQL",
  "question": "Jaka jest wartość wyrażenia TRUE AND NULL?",
  "topicTitle": "Logika trójwartościowa (NULL)",
  "topicSummary": "Gdy jeden operand AND jest TRUE, wynik zależy wyłącznie od drugiego operandu. Skoro ten drugi jest nieznany, wynik całego wyrażenia też jest nieznany - stąd TRUE AND NULL = UNKNOWN.",
  "options": [
   { "key": "a", "text": "jest nieokreślone (UNKNOWN)", "correct": true, "explain": "Tak - TRUE nie przesądza wyniku AND, więc wynik zależy od nieznanej wartości drugiego operandu." },
   { "key": "b", "text": "TRUE", "correct": false, "explain": "Nie - nie wiadomo, czy drugi operand jest TRUE." },
   { "key": "c", "text": "FALSE", "correct": false, "explain": "Nie - nie wiadomo, czy drugi operand jest FALSE." },
   { "key": "d", "text": "NULL", "correct": false, "explain": "Nie - poprawną nazwą wyniku logicznego jest UNKNOWN." }
  ]
 },
 {
  "id": "Q015",
  "chapter": "G1",
  "chapterName": "Ogólne SQL",
  "question": "Jaka jest wartość wyrażenia NOT NULL?",
  "topicTitle": "Logika trójwartościowa (NULL)",
  "topicSummary": "Negacja wartości nieznanej pozostaje nieznana: skoro nie wiadomo, czy dana wartość logiczna jest TRUE czy FALSE, to nie wiadomo też, czym jest jej zaprzeczenie. Dlatego NOT NULL (jako wyrażenie logiczne, nie ograniczenie kolumny o tej samej nazwie) daje UNKNOWN.",
  "options": [
   { "key": "a", "text": "jest nieokreślone (UNKNOWN)", "correct": true, "explain": "Tak - negacja nieznanej wartości logicznej jest nadal nieznana." },
   { "key": "b", "text": "TRUE", "correct": false, "explain": "Nie - nie można przesądzić TRUE bez znajomości wartości wejściowej." },
   { "key": "c", "text": "FALSE", "correct": false, "explain": "Nie - nie można przesądzić FALSE bez znajomości wartości wejściowej." },
   { "key": "d", "text": "NULL", "correct": false, "explain": "Nie - poprawną nazwą wyniku logicznego jest UNKNOWN." }
  ]
 },
 {
  "id": "Q016",
  "chapter": "G1",
  "chapterName": "Ogólne SQL",
  "question": "Relacja R ma atrybut a. Jaka liczba może być wynikiem wykonania instrukcji SELECT COUNT(*) FROM R WHERE a=a?",
  "topicTitle": "COUNT(*) a wartości NULL",
  "topicSummary": "Warunek a=a jest prawdziwy (TRUE) tylko dla wierszy, w których a nie jest NULL - dla wierszy z NULL warunek daje UNKNOWN i wiersz jest odrzucany. Wynikiem COUNT(*) z takim warunkiem jest więc liczba wierszy o wartości a różnej od NULL, czyli dowolna liczba całkowita nieujemna od 0 do liczebności R (nie każda liczba całkowita w ogóle, bo ujemne wykluczone, i niekoniecznie cała liczebność R).",
  "options": [
   { "key": "a", "text": "0", "correct": true, "explain": "Tak - jeśli wszystkie wartości a są NULL (albo relacja jest pusta), wynikiem jest 0 - to skrajny, ale możliwy przypadek." },
   { "key": "b", "text": "1", "correct": true, "explain": "Tak - dla dowolnej liczby wierszy z a różnym od NULL wynik może wynosić dokładnie 1, jeśli tylko jeden wiersz spełnia ten warunek." },
   { "key": "c", "text": "dowolna liczba całkowita", "correct": false, "explain": "Nie - wynik COUNT(*) nigdy nie jest ujemny, więc \"dowolna liczba całkowita\" jest zbyt szerokim stwierdzeniem (poprawnie byłoby: dowolna nieujemna liczba całkowita nie większa niż liczebność R)." },
   { "key": "d", "text": "zawsze tyle, jaka jest liczebność relacji R", "correct": false, "explain": "Nie - tak byłoby tylko, gdyby żadna wartość a nie była NULL; w ogólnym przypadku wynik może być mniejszy." }
  ]
 },
 {
  "id": "Q017",
  "chapter": "G1",
  "chapterName": "Ogólne SQL",
  "question": "Relacja R ma atrybut a. Jaka liczba może być wynikiem wykonania instrukcji SELECT COUNT(*) FROM R WHERE a<a?",
  "topicTitle": "COUNT(*) a warunki zawsze fałszywe",
  "topicSummary": "Warunek a<a nie może być prawdziwy dla żadnej wartości - dla wartości nie-NULL zawsze daje FALSE (żadna liczba/tekst nie jest mniejsza od samej siebie), a dla NULL daje UNKNOWN. W obu przypadkach wiersz nie trafia do wyniku, więc COUNT(*) z takim warunkiem zawsze wynosi 0, niezależnie od zawartości relacji R.",
  "options": [
   { "key": "a", "text": "zawsze 0", "correct": true, "explain": "Tak - warunek a<a nigdy nie jest TRUE, więc żaden wiersz nie zostanie policzony." },
   { "key": "b", "text": "1", "correct": false, "explain": "Nie - żaden wiersz nie może spełnić a<a, więc wynik nigdy nie jest równy 1." },
   { "key": "c", "text": "dowolna liczba całkowita", "correct": false, "explain": "Nie - wynik jest zawsze dokładnie 0, nie zależy od danych w R." },
   { "key": "d", "text": "tyle, jaka jest liczebność relacji R", "correct": false, "explain": "Nie - warunek a<a jest zawsze fałszywy, więc liczba dopasowanych wierszy nigdy nie odpowiada liczebności całej relacji (chyba że R jest puste, ale wtedy to 0=0)." }
  ]
 },
 {
  "id": "Q018",
  "chapter": "G2",
  "chapterName": "Ogólne RBD, spójność i postacie normalne",
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
  "chapter": "G2",
  "chapterName": "Ogólne RBD, spójność i postacie normalne",
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
  "chapter": "G2",
  "chapterName": "Ogólne RBD, spójność i postacie normalne",
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
  "id": "Q021",
  "chapter": "G2",
  "chapterName": "Ogólne RBD, spójność i postacie normalne",
  "question": "Atrybutowi w relacyjnej bazie danych odpowiada:",
  "topicTitle": "Model E-R a model relacyjny",
  "topicSummary": "Atrybut encji (np. \"imię\", \"data urodzenia\") jest w tabeli reprezentowany przez kolumnę - każdy wiersz (wystąpienie encji) przechowuje w niej wartość tego atrybutu dla konkretnego egzemplarza.",
  "options": [
   { "key": "a", "text": "kolumna w tabeli", "correct": true, "explain": "Tak - atrybut jest reprezentowany przez kolumnę tabeli." },
   { "key": "b", "text": "wiersz w tabeli", "correct": false, "explain": "Nie - wiersz odpowiada pojedynczemu wystąpieniu encji (a sama encja to tabela), a nie jej atrybutowi." },
   { "key": "c", "text": "tabela", "correct": false, "explain": "Nie - tabela odpowiada całej encji, nie pojedynczemu atrybutowi." },
   { "key": "d", "text": "indeks w tabeli", "correct": false, "explain": "Nie - indeks jest opcjonalną strukturą przyśpieszającą wyszukiwanie, a nie odpowiednikiem atrybutu." }
  ]
 },
 {
  "id": "Q022",
  "chapter": "G2",
  "chapterName": "Ogólne RBD, spójność i postacie normalne",
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
  "id": "Q023",
  "chapter": "G2",
  "chapterName": "Ogólne RBD, spójność i postacie normalne",
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
  "id": "Q024",
  "chapter": "G2",
  "chapterName": "Ogólne RBD, spójność i postacie normalne",
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
  "id": "Q025",
  "chapter": "G2",
  "chapterName": "Ogólne RBD, spójność i postacie normalne",
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
  "chapter": "G2",
  "chapterName": "Ogólne RBD, spójność i postacie normalne",
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
  "chapter": "G2",
  "chapterName": "Ogólne RBD, spójność i postacie normalne",
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
  "chapter": "G2",
  "chapterName": "Ogólne RBD, spójność i postacie normalne",
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
  "id": "Q029",
  "chapter": "G2",
  "chapterName": "Ogólne RBD, spójność i postacie normalne",
  "question": "Zależność złączeniowa jest uogólnieniem zależności wielowartościowej w następującym sensie:",
  "topicTitle": "Zależność złączeniowa (5NF)",
  "topicSummary": "Zależność wielowartościowa dotyczy bezstratnego rozbicia tabeli na dokładnie dwie projekcje. Zależność złączeniowa (join dependency), będąca podstawą V postaci normalnej, jest jej uogólnieniem: dopuszcza bezstratny rozkład tabeli na dowolną liczbę (co najmniej dwóch) projekcji, których naturalne złączenie odtwarza oryginalną relację.",
  "options": [
   { "key": "a", "text": "dotyczy rozbicia tabeli na dokładnie dwie tabele", "correct": false, "explain": "Nie - to opisuje zależność wielowartościową, a nie ogólniejszą zależność złączeniową." },
   { "key": "b", "text": "dotyczy rozbicia tabeli na dokładnie trzy tabele", "correct": false, "explain": "Nie - liczba tabel w zależności złączeniowej nie jest ograniczona do trzech." },
   { "key": "c", "text": "dotyczy rozbicia tabeli na więcej niż dwie tabele", "correct": false, "explain": "Nie - zależność złączeniowa obejmuje też przypadek szczególny rozbicia na dokładnie dwie tabele (czyli zależność wielowartościową), a nie tylko przypadki z więcej niż dwiema." },
   { "key": "d", "text": "dotyczy rozbicia tabeli na co najmniej dwie tabele", "correct": true, "explain": "Tak - zależność złączeniowa uogólnia zależność wielowartościową, dopuszczając bezstratny rozkład na dowolną liczbę (co najmniej dwóch) tabel/projekcji." }
  ]
 },
 {
  "id": "Q030",
  "chapter": "G2",
  "chapterName": "Ogólne RBD, spójność i postacie normalne",
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
  "id": "Q031",
  "chapter": "G2",
  "chapterName": "Ogólne RBD, spójność i postacie normalne",
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
  "chapter": "G2",
  "chapterName": "Ogólne RBD, spójność i postacie normalne",
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
  "id": "Q033",
  "chapter": "G4",
  "chapterName": "Schematy baz danych",
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
  "chapter": "G4",
  "chapterName": "Schematy baz danych",
  "question": "Studenci lubią się, są sobie obojętni lub nie znoszą się (nie ma innej możliwości). Który ze schematów jest najodpowiedniejszy z punktu widzenia zasad projektowania baz danych?",
  "topicTitle": "Kategoryczna relacja między encjami tego samego typu",
  "topicSummary": "Gdy związek jest samoodwołujący (student-student) i ma kilka rozłącznych wariantów, można je modelować przez osobne tabele asocjacyjne dla każdego wariantu, pod warunkiem że druga strona relacji odwołuje się wprost do klucza głównego Studenci, a nie duplikuje jego atrybuty (imię, nazwisko) w osobnej, pomocniczej encji.",
  "options": [
   { "key": "a", "text": "Studenci(id_studenta, imię, nazwisko); Koledzy(id_kolegi, imię, nazwisko, id_studenta, id_stosunku_do); Stosunek(id_stosunku_do, stosunek_do)", "correct": false, "explain": "Nie - Koledzy niepotrzebnie duplikuje imię i nazwisko, mimo że \"kolega\" to po prostu inny student już opisany w Studenci; wystarczyłoby odwołanie do id_studenta." },
   { "key": "b", "text": "Studenci(id_studenta, imię, nazwisko); Koledzy(id_kolegi, imię, nazwisko, id_studenta, stosunek_do)", "correct": false, "explain": "Nie - podobny problem jak w a) (zduplikowane imię/nazwisko), a dodatkowo stosunek_do jako dowolny tekst zamiast ustandaryzowanej wartości/klucza jest mniej bezpieczny (podatny na literówki, niespójne wartości)." },
   { "key": "c", "text": "Studenci(id_studenta, imię, nazwisko); Lubi(id_studenta, id_kolegi); Nie_znosi(id_studenta, id_kolegi); Obojętny(id_studenta, id_kolegi)", "correct": true, "explain": "Tak - trzy proste tabele łączące, każda odwołująca się wprost do Studenci bez duplikowania jego atrybutów, kompletnie pokrywają wszystkie trzy możliwe stany relacji." },
   { "key": "d", "text": "Studenci(id_studenta, imię, nazwisko); Lubi(id_studenta, id_kolegi); Nie_znosi(id_studenta, id_kolegi)", "correct": false, "explain": "Nie - brakuje tabeli dla trzeciego, dopuszczalnego stanu \"obojętny\", więc schemat nie pozwala zapisać wszystkich możliwości opisanych w treści zadania." }
  ]
 },
 {
  "id": "Q035",
  "chapter": "G4",
  "chapterName": "Schematy baz danych",
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
  "chapter": "G4",
  "chapterName": "Schematy baz danych",
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
  "chapter": "G4",
  "chapterName": "Schematy baz danych",
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
  "chapter": "G4",
  "chapterName": "Schematy baz danych",
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
  "id": "Q039",
  "chapter": "G4",
  "chapterName": "Schematy baz danych",
  "question": "W PJWSTK ma powstać baza danych zbierająca informacje o umiejętnościach przydatnych w pracy zawodowej, o przedmiotach, które uczą tych umiejętności oraz o książkach, w których umiejętności są opisane. Który ze schematów jest najodpowiedniejszy z punktu widzenia zasad projektowania baz danych?",
  "topicTitle": "Dwie relacje N:M z dodatkowymi atrybutami związku",
  "topicSummary": "Jedna umiejętność może być uczona na wielu przedmiotach i opisana w wielu książkach (i odwrotnie) - to dwie osobne relacje N:M. Związek umiejętność-książka niesie dodatkowe informacje (zakres stron), więc musi mieć własną tabelę łączącą z tymi atrybutami, a nie być wciśnięty jako zwykłe kolumny w tabeli Umiejętności.",
  "options": [
   { "key": "a", "text": "Umiejętności(umiejętność, przedmiot, książka)", "correct": false, "explain": "Nie - jedna, płaska tabela tekstowa nie pozwala poprawnie zapisać, że dana umiejętność występuje w wielu przedmiotach i książkach jednocześnie, bez masowego powielania wierszy i utraty spójności nazw." },
   { "key": "b", "text": "Przedmioty(id_przedmiotu, nazwa, semestr); Książki(ISBN, tytuł, autorzy); Umiejętności(id_umiejętności, id_przedmiotu, nazwa, opis, ISBN, od_strony, do_strony)", "correct": false, "explain": "Nie - id_przedmiotu i ISBN wpisane bezpośrednio w Umiejętności ograniczają umiejętność do jednego przedmiotu i jednej książki, a treść zadania nie zakłada takiego ograniczenia (ta sama umiejętność może występować w wielu miejscach)." },
   { "key": "c", "text": "Przedmioty(id_przedmiotu, nazwa, semestr); Książki(ISBN, tytuł, sygnatura); Umiejętności(id_umiejętności, nazwa, opis); Gdzie(id_umiejętności, ISBN, od_strony, do_strony); Na(id_umiejętności, id_przedmiotu)", "correct": true, "explain": "Tak - Gdzie i Na to osobne tabele łączące odpowiadające za dwie niezależne relacje N:M (umiejętność-książka, z dodatkowymi atrybutami zakresu stron, oraz umiejętność-przedmiot)." },
   { "key": "d", "text": "Przedmioty(id_przedmiotu, nazwa, semestr); Egzemplarze_książek(sygnatura, tytuł, autorzy, nr_półki); Umiejętności(id_umiejętności, nazwa, opis); Gdzie(id_umiejętności, sygnatura, od_strony, do_strony)", "correct": false, "explain": "Nie - brakuje w ogóle tabeli łączącej umiejętności z przedmiotami (odpowiednika \"Na\"), więc nie da się zapisać, na jakich przedmiotach dana umiejętność jest nauczana." }
  ]
 },
 {
  "id": "Q040",
  "chapter": "G4",
  "chapterName": "Schematy baz danych",
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
  "chapter": "G4",
  "chapterName": "Schematy baz danych",
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
  "chapter": "G4",
  "chapterName": "Schematy baz danych",
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
  "id": "Q043",
  "chapter": "G5",
  "chapterName": "SQL1 (SQL Server)",
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
  "chapter": "G5",
  "chapterName": "SQL1 (SQL Server)",
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
  "chapter": "G5",
  "chapterName": "SQL1 (SQL Server)",
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
  "chapter": "G5",
  "chapterName": "SQL1 (SQL Server)",
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
  "chapter": "G5",
  "chapterName": "SQL1 (SQL Server)",
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
  "chapter": "G5",
  "chapterName": "SQL1 (SQL Server)",
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
  "chapter": "G5",
  "chapterName": "SQL1 (SQL Server)",
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
  "chapter": "G5",
  "chapterName": "SQL1 (SQL Server)",
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
  "chapter": "G5",
  "chapterName": "SQL1 (SQL Server)",
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
  "chapter": "G5",
  "chapterName": "SQL1 (SQL Server)",
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
  "chapter": "G5",
  "chapterName": "SQL1 (SQL Server)",
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
  "chapter": "G5",
  "chapterName": "SQL1 (SQL Server)",
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
  "chapter": "G5",
  "chapterName": "SQL1 (SQL Server)",
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
  "id": "Q056",
  "chapter": "G6",
  "chapterName": "SQL2 (schemat EMP/DEPT)",
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
  "chapter": "G6",
  "chapterName": "SQL2 (schemat EMP/DEPT)",
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
  "chapter": "G6",
  "chapterName": "SQL2 (schemat EMP/DEPT)",
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
  "chapter": "G6",
  "chapterName": "SQL2 (schemat EMP/DEPT)",
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
  "chapter": "G6",
  "chapterName": "SQL2 (schemat EMP/DEPT)",
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
  "chapter": "G6",
  "chapterName": "SQL2 (schemat EMP/DEPT)",
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
  "chapter": "G6",
  "chapterName": "SQL2 (schemat EMP/DEPT)",
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
  "chapter": "G6",
  "chapterName": "SQL2 (schemat EMP/DEPT)",
  "question": "Wskazać poprawne zapytanie SQL znajdujące średnie zarobki tylko tych departamentów, które zatrudniają więcej niż trzech pracowników.",
  "topicTitle": "HAVING po GROUP BY",
  "topicSummary": "Warunek dotyczący wyniku funkcji agregującej (tu: COUNT(*) > 3, czyli po zgrupowaniu) musi być umieszczony w klauzuli HAVING, występującej zawsze po GROUP BY - nie w WHERE (które działa na pojedynczych, jeszcze niepogrupowanych wierszach) i nie w złej kolejności klauzul.",
  "options": [
   { "key": "a", "text": "SELECT deptno, AVG(sal) FROM emp GROUP BY deptno HAVING COUNT(*) > 3;", "correct": true, "explain": "Poprawne - GROUP BY deptno grupuje pracowników według działu, a HAVING COUNT(*) > 3 odfiltrowuje tylko działy z więcej niż trzema pracownikami." },
   { "key": "b", "text": "SELECT deptno, AVG(sal) FROM emp HAVING COUNT(*) > 3 GROUP BY deptno;", "correct": false, "explain": "Niepoprawne - HAVING musi występować po GROUP BY, a nie przed nim; to błąd składniowy." },
   { "key": "c", "text": "SELECT deptno, AVG(sal) FROM emp GROUP BY deptno WHERE COUNT(*) > 3;", "correct": false, "explain": "Niepoprawne - WHERE musi poprzedzać GROUP BY, a nie po nim występować, a dodatkowo funkcji agregującej nie wolno używać w WHERE." },
   { "key": "d", "text": "SELECT deptno, AVG(sal) FROM emp WHERE COUNT(*) > 3 GROUP BY deptno;", "correct": false, "explain": "Niepoprawne - COUNT(*) w klauzuli WHERE jest niedozwolone, bo agregacja nie jest jeszcze policzona na etapie filtrowania pojedynczych wierszy." }
  ]
 },
 {
  "id": "Q064",
  "chapter": "G6",
  "chapterName": "SQL2 (schemat EMP/DEPT)",
  "question": "Wskazać poprawne zapytanie SQL znajdujące stanowiska, na których średni zarobek wynosi 3000 lub więcej.",
  "topicTitle": "HAVING z funkcją agregującą",
  "topicSummary": "Podobnie jak przy COUNT(*), warunek AVG(sal) >= 3000 dotyczy już zagregowanej wartości dla grupy, więc musi znaleźć się w klauzuli HAVING po GROUP BY, a nie w WHERE ani w niepoprawnej kolejności klauzul.",
  "options": [
   { "key": "a", "text": "SELECT job, AVG(sal) FROM emp GROUP BY job HAVING AVG(sal) >= 3000;", "correct": true, "explain": "Poprawne - GROUP BY job grupuje po stanowisku, a HAVING AVG(sal) >= 3000 filtruje grupy o średniej pensji od 3000 wzwyż." },
   { "key": "b", "text": "SELECT job, AVG(sal) FROM emp HAVING AVG(sal) >= 3000 GROUP BY job;", "correct": false, "explain": "Niepoprawne - HAVING musi występować po GROUP BY." },
   { "key": "c", "text": "SELECT job, AVG(sal) FROM emp GROUP BY job WHERE AVG(sal) >= 3000;", "correct": false, "explain": "Niepoprawne - WHERE musi poprzedzać GROUP BY, a agregat AVG w WHERE jest niedozwolony." },
   { "key": "d", "text": "SELECT job, AVG(sal) FROM emp WHERE AVG(sal) >= 3000 GROUP BY job;", "correct": false, "explain": "Niepoprawne - AVG(sal) w klauzuli WHERE jest niedozwolone." }
  ]
 },
 {
  "id": "Q065",
  "chapter": "G6",
  "chapterName": "SQL2 (schemat EMP/DEPT)",
  "question": "Wskazać poprawne zapytanie SQL znajdujące departamenty zatrudniające powyżej trzech pracowników.",
  "topicTitle": "HAVING z COUNT(*)",
  "topicSummary": "Kolejny przykład tego samego wzorca: warunek na liczbę pracowników w grupie (COUNT(*) > 3) musi trafić do HAVING po GROUP BY deptno, nigdy do WHERE.",
  "options": [
   { "key": "a", "text": "SELECT deptno, COUNT(*) FROM emp GROUP BY deptno HAVING COUNT(*) > 3;", "correct": true, "explain": "Poprawne - klasyczny, prawidłowy wzorzec GROUP BY ... HAVING COUNT(*) > 3." },
   { "key": "b", "text": "SELECT deptno, COUNT(*) FROM emp HAVING COUNT(*) > 3 GROUP BY deptno;", "correct": false, "explain": "Niepoprawne - HAVING przed GROUP BY to błąd kolejności klauzul." },
   { "key": "c", "text": "SELECT deptno, COUNT(*) FROM emp GROUP BY deptno WHERE COUNT(*) > 3;", "correct": false, "explain": "Niepoprawne - WHERE po GROUP BY to błąd kolejności, a agregat w WHERE jest niedozwolony." },
   { "key": "d", "text": "SELECT deptno, COUNT(*) FROM emp WHERE COUNT(*) > 3 GROUP BY deptno;", "correct": false, "explain": "Niepoprawne - COUNT(*) w WHERE jest niedozwolone." }
  ]
 },
 {
  "id": "Q066",
  "chapter": "G6",
  "chapterName": "SQL2 (schemat EMP/DEPT)",
  "question": "Wskazać poprawne zapytanie SQL znajdujące liczbę pracowników w dziale mającym siedzibę w DALLAS.",
  "topicTitle": "Poprawne złączenie i poprawny GROUP BY",
  "topicSummary": "Aby policzyć pracowników działu z Dallas, trzeba połączyć emp z dept po deptno (albo skorzystać z podzapytania zwracającego deptno działu w Dallas) i dopiero wtedy policzyć COUNT(*). Częstym błędem jest podanie w GROUP BY nazwy tabeli zamiast kwalifikowanej kolumny (np. \"dept, deptno\" zamiast \"dept.deptno\") oraz pominięcie warunku złączenia, co prowadzi do iloczynu kartezjańskiego.",
  "options": [
   { "key": "a", "text": "SELECT COUNT(*) FROM emp, dept WHERE dept.loc = 'DALLAS' AND emp.deptno = dept.deptno GROUP BY dept.deptno;", "correct": true, "explain": "Poprawne - poprawny warunek złączenia emp.deptno = dept.deptno, filtr na lokalizację i GROUP BY po prawidłowo zakwalifikowanej kolumnie dept.deptno." },
   { "key": "b", "text": "SELECT COUNT(*) FROM emp WHERE deptno = (SELECT deptno FROM dept WHERE loc = 'DALLAS');", "correct": true, "explain": "Poprawne - przy założeniu, że w Dallas znajduje się dokładnie jeden dział (jak w klasycznym schemacie SCOTT), podzapytanie skalarne zwraca jedną wartość deptno." },
   { "key": "c", "text": "SELECT COUNT(*) FROM emp, dept WHERE dept.loc = 'DALLAS' GROUP BY dept, deptno;", "correct": false, "explain": "Niepoprawne - \"dept\" w GROUP BY to nazwa tabeli, a nie kolumna, a dodatkowo brakuje warunku złączenia emp.deptno = dept.deptno, co powoduje iloczyn kartezjański obu tabel." },
   { "key": "d", "text": "SELECT COUNT(*) FROM emp, dept WHERE emp.deptno = dept.deptno GROUP BY dept, deptno HAVING dept.loc = 'DALLAS';", "correct": false, "explain": "Niepoprawne - ponownie \"dept\" jako nazwa tabeli w GROUP BY zamiast kolumny to błąd składniowy." }
  ]
 },
 {
  "id": "Q067",
  "chapter": "G6",
  "chapterName": "SQL2 (schemat EMP/DEPT)",
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
  "chapter": "G6",
  "chapterName": "SQL2 (schemat EMP/DEPT)",
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
  "id": "Q069",
  "chapter": "G7",
  "chapterName": "RBD_test.pdf",
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
  "id": "Q070",
  "chapter": "G7",
  "chapterName": "RBD_test.pdf",
  "question": "Dana jest tabela OSOBY(imie, nazwisko, zarobki). Które z następujących instrukcji są składniowo poprawnymi instrukcjami SQL w Oracle?",
  "topicTitle": "Niejawna konwersja typów w Oracle",
  "topicSummary": "Oracle potrafi niejawnie skonwertować literał tekstowy na liczbę, jeśli tekst da się zinterpretować jako poprawna liczba (np. '2000' na wartość liczbową 2000) - dlatego wstawienie zarobki jako '2000' w cudzysłowie kompiluje się i wykonuje tak samo, jak podanie liczby 2000 wprost. INTERSECT wymaga jedynie zgodnej liczby kolumn po obu stronach, niezależnie od ich nazw.",
  "options": [
   { "key": "a", "text": "INSERT INTO Osoby VALUES ('Jan','Kowalski','2000');", "correct": true, "explain": "Poprawne - Oracle niejawnie skonwertuje literał tekstowy '2000' na wartość liczbową kolumny zarobki." },
   { "key": "b", "text": "SELECT imie, zarobki FROM Osoby INTERSECT SELECT nazwisko, zarobki FROM osoby;", "correct": true, "explain": "Poprawne - obie strony INTERSECT zwracają po 2 kolumny, co jest wystarczające do poprawności składniowej tego operatora." },
   { "key": "c", "text": "INSERT INTO Osoby VALUES ('Jan','Kowalski',2000);", "correct": true, "explain": "Poprawne - trzy wartości zgodne typem i liczbą z trzema kolumnami tabeli." },
   { "key": "d", "text": "SELECT imie, AVG(zarobki) FROM osoby WHERE AVG(zarobki) > 1000;", "correct": false, "explain": "Niepoprawne - funkcji agregującej AVG nie wolno użyć bezpośrednio w klauzuli WHERE." }
  ]
 },
 {
  "id": "Q071",
  "chapter": "G7",
  "chapterName": "RBD_test.pdf",
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
  "id": "Q072",
  "chapter": "G7",
  "chapterName": "RBD_test.pdf",
  "question": "Co będzie wynikiem realizacji instrukcji SELECT * FROM Emp WHERE EmpNo=EmpNo OR EmpNo=NULL (na niepustej relacji Emp, EmpNo to klucz główny - nie może być NULL)?",
  "topicTitle": "TRUE OR cokolwiek = TRUE",
  "topicSummary": "Skoro EmpNo jest kluczem głównym, nigdy nie jest NULL, więc EmpNo=EmpNo zawsze daje TRUE. Ponieważ TRUE OR X zawsze daje TRUE niezależnie od wartości X (nawet UNKNOWN dla EmpNo=NULL), cały warunek WHERE jest prawdziwy dla każdego wiersza - zapytanie zwraca więc całą relację Emp.",
  "options": [
   { "key": "a", "text": "relacja Emp", "correct": true, "explain": "Tak - EmpNo=EmpNo jest zawsze TRUE (EmpNo jako klucz główny nigdy nie jest NULL), a TRUE OR cokolwiek to zawsze TRUE, więc warunek jest spełniony dla każdego wiersza." },
   { "key": "b", "text": "relacja pusta", "correct": false, "explain": "Nie - przeciwnie, warunek jest spełniony przez każdy wiersz relacji." },
   { "key": "c", "text": "instrukcja jest niepoprawna", "correct": false, "explain": "Nie - to składniowo w pełni poprawna instrukcja SQL." }
  ]
 },
 {
  "id": "Q073",
  "chapter": "G7",
  "chapterName": "RBD_test.pdf",
  "question": "Co będzie wynikiem realizacji instrukcji SELECT * FROM Emp WHERE EmpNo=EmpNo AND NULL=EmpNo (na niepustej relacji Emp, EmpNo to klucz główny - nie może być NULL)?",
  "topicTitle": "TRUE AND UNKNOWN = UNKNOWN",
  "topicSummary": "EmpNo=EmpNo zawsze daje TRUE, ale NULL=EmpNo zawsze daje UNKNOWN (porównanie z NULL nigdy nie jest TRUE ani FALSE). TRUE AND UNKNOWN daje UNKNOWN, a warunek WHERE przepuszcza tylko wiersze, dla których wyrażenie logiczne jest TRUE - UNKNOWN nie wystarcza, więc żaden wiersz nie zostanie zwrócony.",
  "options": [
   { "key": "a", "text": "relacja Emp", "correct": false, "explain": "Nie - warunek dla każdego wiersza sprowadza się do UNKNOWN, a nie TRUE, więc żaden wiersz nie zostanie zwrócony." },
   { "key": "b", "text": "relacja pusta", "correct": true, "explain": "Tak - NULL=EmpNo zawsze daje UNKNOWN, a TRUE AND UNKNOWN to UNKNOWN, które nie spełnia warunku WHERE - wynikiem jest więc pusty zbiór wierszy." },
   { "key": "c", "text": "instrukcja jest niepoprawna", "correct": false, "explain": "Nie - to składniowo w pełni poprawna instrukcja SQL, choć jej wynik zawsze jest pusty." }
  ]
 },
 {
  "id": "Q074",
  "chapter": "G7",
  "chapterName": "RBD_test.pdf",
  "question": "Co będzie wynikiem realizacji instrukcji SELECT * FROM Student WHERE NrIndeksu = NrIndeksu AND NrIndeksu IS NULL na niepustej relacji STUDENT(IdStudent, Imie, Nazwisko, NrIndeksu)?",
  "topicTitle": "Warunek zawsze fałszywy niezależnie od danych",
  "topicSummary": "Tu NrIndeksu nie jest kluczem, więc może być NULL. Dla wierszy z NrIndeksu = NULL: NrIndeksu=NrIndeksu daje UNKNOWN, a UNKNOWN AND TRUE (IS NULL) to nadal UNKNOWN - odrzucone. Dla wierszy z NrIndeksu niepustym: NrIndeksu=NrIndeksu daje TRUE, ale NrIndeksu IS NULL daje FALSE, więc TRUE AND FALSE = FALSE - też odrzucone. W obu przypadkach warunek nigdy nie jest TRUE, więc wynik jest zawsze pusty, niezależnie od zawartości danych.",
  "options": [
   { "key": "a", "text": "Relacja STUDENT", "correct": false, "explain": "Nie - dla żadnego wiersza (z NrIndeksu NULL lub nie-NULL) warunek nie daje TRUE." },
   { "key": "b", "text": "Relacja pusta", "correct": true, "explain": "Tak - jak wyjaśniono w bloku „Warto wiedzieć”, dla dowolnego wiersza warunek sprowadza się albo do UNKNOWN, albo do FALSE, nigdy do TRUE, więc wynik jest zawsze pusty." },
   { "key": "c", "text": "Zawsze zbiór rekordów, dla których NrIndeksu jest NULL", "correct": false, "explain": "Nie - dla takich rekordów warunek NrIndeksu=NrIndeksu daje UNKNOWN, a nie TRUE, więc nie zostaną one zwrócone." },
   { "key": "d", "text": "Zawsze zbiór rekordów, dla których NrIndeksu nie jest NULL", "correct": false, "explain": "Nie - dla takich rekordów warunek NrIndeksu IS NULL daje FALSE, więc całe wyrażenie AND też jest FALSE i te rekordy również nie zostaną zwrócone." }
  ]
 },
 {
  "id": "Q075",
  "chapter": "G7",
  "chapterName": "RBD_test.pdf",
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
  "chapter": "G7",
  "chapterName": "RBD_test.pdf",
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
  "chapter": "G7",
  "chapterName": "RBD_test.pdf",
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
  "id": "Q078",
  "chapter": "G7",
  "chapterName": "RBD_test.pdf",
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
  "id": "Q079",
  "chapter": "G7",
  "chapterName": "RBD_test.pdf",
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
  "id": "Q080",
  "chapter": "G7",
  "chapterName": "RBD_test.pdf",
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
  "id": "Q081",
  "chapter": "G7",
  "chapterName": "RBD_test.pdf",
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
  "chapter": "G7",
  "chapterName": "RBD_test.pdf",
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
  "id": "Q083",
  "chapter": "G8",
  "chapterName": "Zdjęcia egzaminu",
  "question": "Dany jest schemat relacyjny R = {Ulica, Kod, Sklep}, F = {Ulica→Kod; Sklep→Ulica}. W której postaci normalnej jest ten schemat?",
  "topicTitle": "Klucz jednoatrybutowy a zależności częściowe",
  "topicSummary": "Jedynym kluczem kandydującym jest tu {Sklep} (Sklep→Ulica→Kod, więc {Sklep}+ = R). Skoro klucz jest jednoatrybutowy, nie mogą wystąpić zależności częściowe (wymagają klucza złożonego), więc warunek II postaci normalnej jest spełniony automatycznie. Jednak Ulica→Kod jest zależnością przechodnią (Sklep→Ulica→Kod, gdzie Ulica nie jest kluczem), co łamie III postać normalną i BCNF.",
  "options": [
   { "key": "a", "text": "w I postaci normalnej", "correct": false, "explain": "Nie - to zbyt słabe określenie; schemat spełnia też warunki II postaci normalnej (klucz jest jednoatrybutowy, więc nie ma zależności częściowych)." },
   { "key": "b", "text": "w II postaci normalnej", "correct": true, "explain": "Tak - klucz {Sklep} jest jednoatrybutowy, więc nie ma zależności częściowych (2NF spełnione), ale Ulica→Kod jest zależnością przechodnią, która łamie już 3NF - II postać normalna to najwyższa spełniona tu postać." },
   { "key": "c", "text": "w III postaci normalnej", "correct": false, "explain": "Nie - zależność przechodnia Ulica→Kod (Sklep→Ulica→Kod) narusza definicję 3NF." },
   { "key": "d", "text": "w postaci normalnej Boyce'a-Codda", "correct": false, "explain": "Nie - BCNF jest jeszcze silniejsze niż 3NF, którego schemat już nie spełnia." }
  ]
 },
 {
  "id": "Q084",
  "chapter": "G8",
  "chapterName": "Zdjęcia egzaminu",
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
  "chapter": "G8",
  "chapterName": "Zdjęcia egzaminu",
  "question": "Studenci lubią się, są sobie obojętni lub nie znoszą się (nie ma innej możliwości). Wskaż, które z poniższych schematów (wielkimi literami oznaczono atrybuty klucza głównego) prawidłowo (i bez redundancji) modelują zagadnienie:",
  "topicTitle": "Jedna tabela z typem relacji zamiast wielu równoległych tabel",
  "topicSummary": "W przeciwieństwie do wcześniejszego, prostszego ujęcia tego problemu, tu kluczowe jest słowo „bez redundancji”: rozwiązanie z trzema osobnymi tabelami (Lubi/Nie_znosi/Obojętny) nie ma żadnego mechanizmu, który zapobiegałby wpisaniu tej samej pary studentów jednocześnie do więcej niż jednej z nich - nic nie gwarantuje spójności/wyłączności stanu. Rozwiązanie z jedną tabelą Nastawienie_do i kluczem głównym (ID_STUDENTA, ID_KOLEGI) wymusza istnienie co najwyżej jednego wiersza (czyli jednego nastawienia) dla danej pary, co jest zgodne z założeniem „nie ma innej możliwości”.",
  "options": [
   { "key": "a", "text": "Studenci(ID_STUDENTA, imię, nazwisko); Nastawienie(ID_NASTAWIENIA, nastawienie); Nastawienie_do(ID_STUDENTA, ID_KOLEGI, id_nastawienia)", "correct": true, "explain": "Tak - klucz główny (ID_STUDENTA, ID_KOLEGI) w Nastawienie_do gwarantuje dokładnie jeden wiersz (czyli jedno nastawienie) na parę studentów, bez możliwości sprzecznych wpisów w kilku miejscach naraz." },
   { "key": "b", "text": "Studenci(ID_STUDENTA, imię, nazwisko); Lubi(ID_STUDENTA, ID_KOLEGI); Nie_znosi(ID_STUDENTA, ID_KOLEGI)", "correct": false, "explain": "Nie - brakuje możliwości zapisania stanu „obojętny”, opisanego wprost w treści zadania jako jedna z trzech możliwości." },
   { "key": "c", "text": "Studenci(ID_STUDENTA, imię, nazwisko); Lubi(ID_STUDENTA, ID_KOLEGI); Nie_znosi(ID_STUDENTA, ID_KOLEGI); Obojętny(ID_STUDENTA, ID_KOLEGI)", "correct": false, "explain": "Nie - mimo że pokrywa wszystkie trzy stany, nic nie stoi na przeszkodzie, by ta sama para studentów trafiła jednocześnie do dwóch lub trzech tabel naraz, co jest niespójne (redundancja/brak wymuszonej wyłączności), w przeciwieństwie do wariantu a)." },
   { "key": "d", "text": "Studenci(ID_STUDENTA, imię, nazwisko); Koledzy(ID_KOLEGI, imię, nazwisko, id_studenta, nastawienie_do)", "correct": false, "explain": "Nie - Koledzy niepotrzebnie duplikuje imię i nazwisko, mimo że „kolega” to po prostu inny student już opisany w Studenci." }
  ]
 },
 {
  "id": "Q086",
  "chapter": "G8",
  "chapterName": "Zdjęcia egzaminu",
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
  "chapter": "G8",
  "chapterName": "Zdjęcia egzaminu",
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
  "chapter": "G8",
  "chapterName": "Zdjęcia egzaminu",
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
  "chapter": "G8",
  "chapterName": "Zdjęcia egzaminu",
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
  "chapter": "G8",
  "chapterName": "Zdjęcia egzaminu",
  "question": "W bazie danych chcemy przechowywać informacje o kanałach oraz filmach z serwisu YouTube. Dla każdego kanału chcemy znać liczbę subskrybentów (subskrybent to inny kanał), listę kanałów, które subskrybuje, oraz listę filmów, których jest autorem. Autorem danego filmu może być tylko jeden kanał. Wybierz najlepszy diagram spełniający wymienione wymagania.",
  "topicTitle": "Samoodwołujący związek wiele-do-wielu (subskrypcje kanałów)",
  "topicSummary": "Ponieważ „subskrybent to inny kanał”, subskrypcja jest związkiem N:M encji Kanał samej ze sobą - wymaga samoodwołującej tabeli asocjacyjnej z dwoma kluczami obcymi do Kanał (subskrybowany i subskrybujący), tworzącymi razem klucz główny. Liczbę subskrybentów danego kanału wylicza się wtedy zapytaniem (COUNT), zamiast przechowywać ją redundantnie jako osobną kolumnę. Autorstwo filmu (dokładnie jeden kanał na film) to zwykły związek 1:N, realizowany kluczem obcym w tabeli Film.",
  "options": [
   { "key": "a", "text": "Wariant 1: Film(Id PK, Nazwa, Autor FK do Kanał); Kanał(Id PK, Nazwa); Subskrybent(Id PK, Kanal FK do Kanał)", "correct": false, "explain": "Niepoprawne - Subskrybent jest tu osobną encją z własnym Id i pojedynczym FK do Kanał, co pozwala jednemu \"subskrybentowi\" wskazywać tylko jeden kanał i nie realizuje samoodwołującego związku wiele-do-wielu między kanałami wymaganego przez treść zadania (\"subskrybent to inny kanał\")." },
   { "key": "b", "text": "Wariant 2: Film(...); Kanał(Id PK, Nazwa); Lista_subskrybentow(Id PK, Subskrybenci varchar2(4000), Kanal FK); Lista_subskrypcji(Id PK, Subskrypcje varchar2(4000), Kanal FK)", "correct": false, "explain": "Niepoprawne - przechowywanie list subskrybentów/subskrypcji jako pojedynczego, długiego tekstu (varchar2(4000)) łamie podstawową zasadę atomowości wartości (I postać normalna) i uniemożliwia poprawne, efektywne wyszukiwanie czy liczenie subskrybentów." },
   { "key": "c", "text": "Wariant 3: Film(Id PK, Nazwa, Autor FK do Kanał); Kanał(Id PK, Nazwa); Subskrypcja(Subskrybowany PK+FK do Kanał, Subskrybujący PK+FK do Kanał)", "correct": true, "explain": "Poprawne - Subskrypcja to czysta, samoodwołująca tabela asocjacyjna N:M dla Kanał, ze złożonym kluczem głównym (Subskrybowany, Subskrybujący), oba pola jako klucze obce do Kanał. Liczbę subskrybentów wylicza się przez COUNT(*) po Subskrybowany, bez redundancji." },
   { "key": "d", "text": "Wariant 4: Film(...); Kanał(Id PK, Nazwa); Subskrybent(Id PK, Nazwa); Lista_subskrybentow(Kanal PK+FK, Subskrybent FK)", "correct": false, "explain": "Niepoprawne - Subskrybent jest tu modelowany jako zupełnie osobna encja (z własną nazwą), a nie jako „inny kanał”, co wprost narusza wymaganie z treści zadania." }
  ]
 },
 {
  "id": "Q091",
  "chapter": "G8",
  "chapterName": "Zdjęcia egzaminu",
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
  "chapter": "G8",
  "chapterName": "Zdjęcia egzaminu",
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
  "chapter": "G8",
  "chapterName": "Zdjęcia egzaminu",
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
  "chapter": "G8",
  "chapterName": "Zdjęcia egzaminu",
  "question": "Wskazać poprawne (w Oracle) zapytanie SQL znajdujące nazwiska pracowników, którzy są zatrudnieni na takim stanowisku, co jakiś pracownik zatrudniony w dziale 10:",
  "topicTitle": "IN / EXISTS z podzapytaniem wielowierszowym",
  "topicSummary": "Ponieważ w dziale 10 może pracować więcej niż jedna osoba (a więc może tam występować więcej niż jedno stanowisko), podzapytanie zwracające listę stanowisk z działu 10 może zwrócić wiele wierszy - trzeba więc użyć operatora obsługującego wielowierszowy wynik: IN albo skorelowanego EXISTS. Porównanie „=” ze skalarnie potraktowanym podzapytaniem wielowierszowym jest błędem czasu wykonania.",
  "options": [
   { "key": "a", "text": "SELECT ename FROM emp WHERE job = (SELECT job FROM emp WHERE deptno = 10);", "correct": false, "explain": "Niepoprawne - jeśli w dziale 10 pracuje więcej niż jedna osoba na różnych stanowiskach, podzapytanie zwróci wiele wierszy, a porównanie „=” oczekuje dokładnie jednej wartości." },
   { "key": "b", "text": "SELECT ename FROM emp WHERE job IN (SELECT job FROM emp WHERE deptno = 10);", "correct": true, "explain": "Poprawne - IN poprawnie obsługuje podzapytanie zwracające dowolną liczbę wierszy z listą stanowisk występujących w dziale 10." },
   { "key": "c", "text": "SELECT ename FROM emp e1 WHERE EXISTS (SELECT 1 FROM emp e2 WHERE e1.job = e2.job AND e2.deptno = 10);", "correct": true, "explain": "Poprawne - skorelowane podzapytanie EXISTS sprawdza, czy istnieje jakiś pracownik e2 w dziale 10 o tym samym stanowisku co e1, co jest równoważne podejściu z IN." },
   { "key": "d", "text": "SELECT ename FROM emp e1 WHERE EXISTS (SELECT 1 FROM emp e2 WHERE e1.job = e2.job) AND e1.deptno = 10;", "correct": false, "explain": "Niepoprawne logicznie - EXISTS bez warunku e2.deptno = 10 jest niemal zawsze prawdziwe (e1 zawsze pasuje samo do siebie), a osobny warunek e1.deptno = 10 filtruje po prostu pracowników z działu 10, zwracając zupełnie inny wynik niż żądany." }
  ]
 }
];
