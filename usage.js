const ex = require('./index.js')

ex.ls().then( res => console.log("ls, ", res ))

ex.pwd().then( res => console.log("pwd ", res ))

ex.cd("../").then( res => console.log("cd",res))

ex.mkdir('newfolder').then( res => console.log("mkdir",res))

ex.rmdir('newfolder').then( res => console.log("rmdir",res))

ex.home().then( res => console.log("home",res) )
