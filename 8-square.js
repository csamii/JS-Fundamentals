#!/usr/bin/node

const arg = process.argv[2];
if (!Number(arg)) {
    console.log("Missing size");
} else {
    for (let i = 0; i < arg; i++) {
        let size = ""
        for (let j = 0; j < arg; j++) {
            size += "#";
        } 
        console.log(size)
    }
}