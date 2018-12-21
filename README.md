#@malestroms/explorer [![](https://img.shields.io/npm/v/@malestroms/explorer.svg)](https://github.com/malestroms/explorer)

Basic Explorer commands using Promises 

## How to install 
```
npm install @malestroms/explorer 
```

## Usage 
```javascript

const ex = require('./index.js')

ex.ls().then( res => console.log("ls, ", res ))

ex.pwd().then( res => console.log("pwd ", res ))

ex.cd("../").then( res => console.log("cd",res))

ex.mkdir('newfolder').then( res => console.log("mkdir",res))

ex.rmdir('newfolder').then( res => console.log("rmdir",res))

ex.home().then( res => console.log("home",res) )

```
## Todo 
- Create files
- Delete files

## Contributions
Open to any contributions such as suggestions or just participations.

## License 
See the [license](https://github.com/malestroms/explorer/blob/master/LICENSE) file for details