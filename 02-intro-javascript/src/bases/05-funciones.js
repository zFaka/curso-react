function saludar(nombre){
	return `Hola, ${nombre}`;
}
// Arrow Function 
const saludar2 = (nombre) => {
	return `Hola, ${nombre}`;
}
const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo`;

console.log(saludar);
console.log(saludar2);
console.log(saludar3);
console.log(saludar4);

const getUser = () =>({
	uid:'AAB001', 
	username:'fabri'
})
const user = getUser();
console.log(getUser());

// Tarea
// Transform to a arroy function
// Return implicit object
// Test

const getUsuarioActivo = (nombre) => ({
	uid: 'AAA000', 
	username: nombre
});
const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);
