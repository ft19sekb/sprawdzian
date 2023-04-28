var liczba =prompt("Podaj dowolną liczbę rzeczywistą:")
const spannumbers = document.getElementsByClassName('p');
for(const num of spannumbers)
{
    num.innerText=liczba
}
console.log(liczba);
document.getElementById("demo1").innerHTML = Math.abs(-4.7);

document.getElementById("demo2").innerHTML = Math.ceil(4.4);

document.getElementById("demo3").innerHTML = Math.floor(4.7);

document.getElementById("demo4").innerHTML = Math.min(0, 150, 30, 20, -8, -200);

document.getElementById("demo5").innerHTML = Math.max(0, 150, 30, 20, -8, -200);

let a = Math.pow(0, 1);
let b = Math.pow(1, 1);
let c = Math.pow(1, 10);
let d = Math.pow(3, 3);
let e = Math.pow(-3, 3);
let f = Math.pow(2, 4);

document.getElementById("demo6").innerHTML = a + "<br>" + b + "<br>" + c + "<br>" + d + "<br>" + e + "<br>" + f;

let x = Math.floor((Math.random() * 100) + 1);
document.getElementById("demo7").innerHTML = x;

document.getElementById("demo8").innerHTML = Math.round(4.4);

document.getElementById("demo9").innerHTML = Math.SQRT2;
