var a = 10;
var b = 5;
result = a + b;
console.log(result);

var x = 10;
var y = 5;
result = x - y;
console.log(result);

var c = 25;
var d = 15;
console.log(c - d);

var e = 10;
var f = 5;
var j = e + f;
var h = 7;
console.log(j * h);

var l = 10;
var m = 3;
console.log(l % m);

var son = 2;
var daraja = 10;
console.log(son ** daraja);

var dollarKurs = 10650.34;
var yevroKurs = 10650.03;
var bilet = dollarKurs * 500;
var mexmonxona = dollarKurs * 250;
var muzey = yevroKurs * 120;
var umumiyXarajatlar = bilet + mexmonxona + muzey;

var userName = prompt("Salom ismingizni kiriting");
var puli = prompt(userName + " harajatlar uchun necha pul mo'ljalladingiz? ");

alert(
  userName +
    " sizga umumiy sayohat harajatlari " +
    umumiyXarajatlar +
    " so'mga aylanadi, siz mo'ljallagan pulingiz " +
    puli +
    " so'm "
);
