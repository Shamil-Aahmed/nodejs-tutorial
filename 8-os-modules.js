const os = require('os')

//info about current users
const user = os.userInfo()
console.log(user)


// info about the system uptime in seconds 
console.log(os.uptime())



const currentOS = {
    names: os.type (),
    release : os.release(),
    totalmem : os.totalmem(),
    freemem : os.freemem()

}
console.log(currentOS)










