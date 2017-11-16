#!/usr/bin/env node

/*
    コレ見て学習してる
    https://qiita.com/abcang/items/824681cb88676da4f9a8
*/

'use strict';


/* Helloworld / セミコロン

//文字列を変数に代入
const text = 'HelloWorld';
console.log(text); // メソッドを実行

if (text) {
    console.log(text);
}

function print(str) {
    console.log(str);
}
*/


/* 変数

{ // ブロック(単体で使うことはあまりない)
    const foo = '1'; // 変数の定義時に代入を行う
    foo = '10'; // 再代入はエラー
    let bar = '2';
    bar = '20'; // 再代入可能
    var baz = '30';
}

console.log(foo); // スコープの外なので参照できずエラー
console.log(bar); // 上に同じ

// varはスコープが関数
// 関数の外の場合はグローバル変数になる
console.log(baz); // 30


*/


/* 文字列

const name = 'abcang';
console.log('hello ' + name); // hello abcang
console.log("hello " + name); // hello abcang
console.log(`hello ${name}`); // hello abcang

// テンプレートリテラルとは何なのか？
// これ : https://qiita.com/kura07/items/c9fa858870ad56dfec12

*/

/* consoleオブジェクト

console.log('HelloWorld'); // 一般的な情報
console.time('timer');  // 計測開始
console.timeEnd('timer');  // 計測終了

*/


/* データ型 */

typeof true; // => 'boolean'
typeof 42; // => 'number'
typeof 'js'; // => 'string'
typeof Symbol('sym');// => 'symbol'
typeof undefined; // => 'undefined'
typeof null; // => 'object'
typeof ['array']; // => 'object'
typeof { 'key': 'value' }; // => 'object'
typeof function() {}; // => 'function'

// シンボルってなんだ？


// 整数リテラル(10進数、16進数、8進数、2進数)
10; // 10進数リテラル
-10; // マイナス値
0xa;  // 16進数リテラル
// 浮動小数点リテラル
3.14;
.1;
1.2e-5;
//その他
Infinity; // 正の無限大
-Infinity; //負の無限大
NaN; // Not a Number
