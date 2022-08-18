let correo = document.querySelector('#correo')
let contrasena = document.querySelector('#contrasena')
let boton = document.querySelector('#enviarLogin')

boton.addEventListener('click', () => {
  enviarDatos()
})

const enviarDatos = () => {
  let usuario = {
    correo: '',
    contrasena: '',
  }
  alert('hola')
  usuario.correo = correo.value
  usuario.contrasena = contrasena.value

  let jsonUsuario = JSON.stringify(usuario)

  localStorage.setItem(correo.value, jsonUsuario)

  alert('se ha enviado a local storage')
  obtenerUsuario()
}

const obtenerUsuario = () => {
  let usuario = document.querySelector('#usuario')
  let objUsuario = JSON.parse(
    localStorage.getItem('juanpablocoloradoalvarez@gmail.com')
  )

  usuario.innerHTML = objUsuario.correo
}
