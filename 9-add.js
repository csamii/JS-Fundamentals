#!/usr/bin/node

function add (a, b) {
    return a + b;
}

console.log(Number(process.argv[2]) + Number(process.argv[3]));