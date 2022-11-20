let numbers = [46, 1, 4, 78, 9, 5, 1, 4, 5, 5];
// indeksai:    0  1  2   3  4  5  6  7  8  9
let nouns = ['apple', 'sister', 'hammer', 'sun', 'table', 'sky', 'lake', 'today', 'gorgeos', 'javascript', 'language', 'anything'];
// indeksai:    0       1         2        3       4        5       6       7         8           9            10           11
let helpers = ['in', 'with', 'on', 'my', 'is', 'a', 'the', ' ', 'I', 'want', 'to', 'it', 'if', 'you', '.'];
// indeksai:    0       1     2      3     4    5     6     7    8      9     10     11   12     13    14
let verb = ['learn', 'run', 'again', 'even', "didn't", 'change', ]
// indeksai:    0       1       2       3       4         5
// Užduotis: Sudarykite šiuos sakinius ir išsaugokite kitamuosiuose:
//    sentence1, sentence2, ... , sentenceN;  N - natūralieji skaičiai.
// 1. my sister is in the lake
let sentence1 = helpers[3] + helpers[7] + nouns[1] + helpers[7] + helpers[4] + helpers[7] + helpers[0] + helpers[7] + helpers[6] + helpers[7] + nouns[6];
//                'my'         ' '        'sister'      ' '          'is'          ' '         'in'          ' '         'the'         ' '       'lake'                                                                               
console.log(sentence1);
// 2. hammer is on the table
// 3. sun is in the sky
// 4. apple is with my sister
// 5. Papildyti masyvą žodžiais, ir sukurti dar 3 +-logiškus sakinius.


let sentence2 = nouns[2] + helpers[7] + helpers[4] + helpers[7] + helpers[2] + helpers[7] + helpers[6] + helpers[7] + nouns[4];
// 2.            hammer        " "        is           " "           on          " "           the         " "         table

console.log(sentence2);

let sentence3 = nouns[3] + helpers[7] + helpers[4] + helpers[7] + helpers[0] + helpers[7] + helpers[6] + helpers[7] + nouns[5];
// 3.             sun                      is                       in                        the                        sky

console.log(sentence3);

let sentence4 = nouns[0] + helpers[7] + helpers[4] + helpers[7] + helpers[1] + helpers[7] + helpers[3] + helpers[7] + nouns[1];
// 4.              apple                    is                      with                      my                       sister

console.log(sentence4);

let sentence5 = nouns[7] + helpers[7] + helpers[6] + helpers[7] + nouns[3] + helpers[7] + helpers[4] + helpers[7] + nouns[8];

// Today the sun is gorgeos

console.log(sentence5);

let sentence6 = helpers[8] + helpers[7] + helpers[9] + helpers[7] + helpers[10] + helpers[7] + verb[0] + helpers[7] + nouns[9] + helpers[7] + nouns[10];

// I want to learn javascript language

console.log(sentence6);

let sentence7 = verb[1] + helpers[7] +  helpers[11] + helpers[7] + verb[2] + helpers[14] + helpers[7] + verb[3] + helpers[7] + helpers[12] + helpers[7] + helpers [13] + helpers[7] +  verb[4] + helpers[7] + verb[5] + helpers[7] + nouns[11] + helpers[14]

// run it again. even if you didn't change anything

console.log(sentence7);