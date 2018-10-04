/*
 * This is index.js
 * Start by modifying the id, fn and sn functions to return
 * information about you, then open index.html to check what
 * else you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year shoudl use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

function id() {
    return "UP879244";
    // e.g. return "UP654321";
}

function fn() {
    return "Matus";
}

function sn() {
    return "Minarovic";
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function checkObject(obj){
    obj.checked = true;
}

function checkObjectInside(obj){
    if (typeof obj.data === "object"){
      obj.data.checked = true;
    }
}

function arraySet(arr, index, number){
    if(arr.length > index && index >= 0 && Number.isInteger(index)){
        arr[index] = number;
    }
}

// ------------ FUNCTIONS --------------

function addAll(arr){
    return arr.reduce((a,b) => a + b);
}

function larger(a,b){
    return a > b ? a : b;
}

function largest(arr){
    return arr.reduce((a,b) => Math.max(a,b));
}

function compare(arr1, arr2){
    if (!arr1 || !arr2)
        return false;

    if (arr1.length != arr2.length)
        return false;

    for (let i = 0; i < arr1.length; i++){
        if (arr1[i] != arr2[i])
            return false;
    }

    return true;
}

function addToAll(arr, num){
    return arr.map(a => a + num);
}

let remembered;

function rememberThis(x){
    remembered = x;
}

function nArray(n){
    //let arr = Array.from({length:n}, (value, index) => index + 1);
    /*for (let i = 0; i < n; i++){
        arr[i] = i + 1;
    }*/
    return Array.from(Array(n), (value, index) => index + 1);
}

function addAllOpt(arr){
    if (!Array.isArray(arr))
        return 0;
    if (arr.length <= 0)
        return 0;
    return arr.reduce((accumulator, currentElement) => accumulator + currentElement);
}

function divisors(arr, divisor){
    return arr.filter((value) => value % divisor == 0);
}

function multiples(n, m){
    return Array.from(Array(n), (v, i) => (i+1) * m);
}
