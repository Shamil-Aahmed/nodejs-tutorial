// const {readFileSync} = require('fs')
// //or above or below is same
// const fs = require('fs')
// fs.readFileSync


const { readFile, writeFile } = require('fs')

readFile('./content/first.txt','utf-8',(err,result)=>{
    if (err){
        console.log(err)
        return; 
    }
    const first = result
    readFile('./content/second.txt','utf-8',(err,result)=>{
        if (err){
            console.log(err)
            return; 
        }
        const second = result
        writeFile('./content/11-fs-async.txt',`Data: ${first},${second}\n`,{flag:'a'},(err, result)=>{
            if (err){
                console.log(err)
                return; 
            }
        })
        console.log("work is Done")
    })
})

