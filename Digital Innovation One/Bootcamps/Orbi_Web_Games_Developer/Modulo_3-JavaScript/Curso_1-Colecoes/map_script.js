function getAdmins(map){
	let admins = [];
	for([key, value] of map) {
		if(value === 'Admin'){
			admins.push(key)
		}
	}
	return admins;
}

const usuarios = new Map();

usuarios.set('João', 'Admin');
usuarios.set('Douglas', 'Admin');
usuarios.set('Arthur', 'Admin');
usuarios.set('Bruno', 'Admin');
usuarios.set('Jessica', 'User');

console.log(getAdmins(usuarios))