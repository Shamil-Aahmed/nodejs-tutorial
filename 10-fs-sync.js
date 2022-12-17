// const {readFileSync} = require('fs')
// //or above or below is same
// const fs = require('fs')
// fs.readFileSync


const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8')

// console.log(first)
// console.log(second)

// data="this data belongs to the one who is very far far away from shamil"
writeFileSync(
    './content/10-fs-sync.txt',
    `the data from two files are ${first} and fuck`,
    {flag:'a'}
    )
