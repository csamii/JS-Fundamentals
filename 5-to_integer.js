#!/usr/bin/node

const arg = process.argv[2];
if (Math.floor(Number(arg))) {
    console.log("My number: " + arg);
} else {
    console.log("Not a number");
}
