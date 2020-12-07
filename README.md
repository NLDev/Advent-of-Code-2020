# :christmas_tree: Advent-of-Code-2020

<p align="center"><img height="250" width="auto" src="https://i.imgur.com/1zABhbB.png" /></p>
<p align="center"><b>My solutions for the Advent of Code 2020 in NodeJS</b></p>
<hr>

## :information_source: About Advent of Code

Each day consists of two puzzles. <br>
I added a README.md file to each Day, which contains the instructions exactly as they were displayed on https://adventofcode.com/

<hr>

## :trophy: Goal

I attempted to solve every problem as functional as possible and with as little code as possible while still being performant. <br>
Some solutions could be one-liners but I left them splitted up for the sake of readability. 

<hr>

## :rocket: Launching all solutions with benchmark

Each script can be run stand-alone / separatly but I've also created a `startAll.js` script to launch all days in order, and display the solutions along with an approximated benchmark (the benchmark uses [`performance.now()`](https://nodejs.org/api/perf_hooks.html#perf_hooks_performance_now) to measure the execution time and **does not include the actual reading of the file** except when the file is read line-by-line).

No dependencies needed. Just launch the script by executing `npm start`.

Preview:

<p align="center"><img height="auto" width="100%" src="https://i.imgur.com/3YsXK5P.png" /></p>

<hr>
