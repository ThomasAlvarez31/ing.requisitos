const form = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMessageDiv = document.getElementById('error-message');

function validateUser(username, password) {
  const validUsers = {
    'user1': { password: 'password1', redirect: '/menu.html' }, // usuario contrasennia y la ruta que sera redireccionado
    'user2': { password: 'password2', redirect: '/RRHH.html' },
    'tomy': { password: '1234', redirect: '/cualquierlado.html' },
  };

  if (validUsers[username] && validUsers[username].password === password) {
    return { isValid: true, redirect: validUsers[username].redirect };
  } else {
    return { isValid: false };
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;

  const validationResult = validateUser(username, password);

  if (validationResult.isValid) {
    window.location.href = validationResult.redirect;
  } else {
    alert('Nombre de usuario o contraseña incorrectos');
  }
});