"use strict";

// ========================= //
// = Copyright (c) NullDev = //
// ========================= //

let fs = require("fs");
let path = require("path");
let { performance } = require("perf_hooks");

const CONTENT_READ = String(fs.readFileSync(path.join(__dirname, "input.txt")))
    .split(require("os").EOL)
    .map(e => Number(e))
    .sort((a, b) => a - b);

const pStart = performance.now();

let productOfdifferences = [0, ...CONTENT_READ, Math.max.apply(null, CONTENT_READ) + 3]
    .slice(1)
    .reduce((prev, curr, i) => [...prev, curr - (CONTENT_READ[i - 1] || 0)], [])
    .reduce((prev, cur) => {
        (cur === 1) && prev[0].push(cur);
        (cur === 3) && prev[1].push(cur);
        return prev;
    }, [[], []])
    .map(e => e.length)
    .reduce((prev, cur) => prev * cur);

const pEnd = performance.now();

console.log("PRODUCT OF DIFFERENCES: " + productOfdifferences);
console.log(pEnd - pStart);
