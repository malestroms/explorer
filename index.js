const fs = require('fs');
var currentPath = __dirname + '/'

const ex = module.exports = {
	ls : () => { 
		return new Promise ((resolve,reject) => {
			resolve(fs.readdirSync(currentPath))
		})
	},
	pwd : () => {
		return new Promise ((resolve,reject) => {
			resolve(currentPath)	
		})
	},
	cd : (newPath) => {		
		return new Promise ((resolve,reject) => {
			if(!newPath)  reject('A parameter is mandatory')
			fs.access(newPath, fs.constants.F_OK, (err) => {
				if(err){
					reject(`${newPath} does not exist`)
				}else{
					currentPath += newPath
					resolve(currentPath)
				}
			})	
		})		
	},
	mkdir : (newFolder) => {
		return new Promise((resolve,reject) => {
			let target = currentPath + newFolder
			fs.mkdir(target, { recursive: true }, (err) => {
			  if (err) reject(err)
			  resolve(target)
			});
		})
	},
	rmdir : (folder) => {
		return new Promise((resolve,reject) => {
			let target = currentPath + folder
			fs.rmdir(target, { recursive: true }, (err) => {
			  if (err) reject(err)
			  resolve(target)
			})
		})
	},
	home : () => {
		return new Promise((resolve,reject) => {
			currentPath = __dirname + '/'
			return resolve(currentPath)
		})
	}

}


