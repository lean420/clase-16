//sessionStorage.setItem("id, 123")

//console.log(sessionStorage.getItem("id"))

const usuario = {
  nombre: 'juan pablo',
  edad: 20,
  correo: 'juanpablocoloradoalvaarez@gmail.com',
}

const jsonUsuario = JSON.stringify(usuario, undefined, 4)

localStorage.setItem(usuario.correo, jsonUsuario)

console.log(localStorage.getItem(usuario.correo))
