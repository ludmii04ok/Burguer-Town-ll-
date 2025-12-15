
function validarForm() {
    const emailValido = "admin@admin.com";
    const pswValido = "ludmi123";

    const usrEmail = document.getElementById('id_mail').value;
    const usrPsw = document.getElementById('id_psw').value;

    let esValido = true;

    // EMAIL
    if (usrEmail.length < 1) {
        mostrarError('empty_email', 'El campo email no puede estar vacío');
        ocultarError('email_error');
        esValido = false;

    } else if (usrEmail !== emailValido) {
        mostrarError('email_error', 'Email incorrecto');
        ocultarError('empty_email');
        esValido = false;

    } else {
        ocultarError('empty_email');
        ocultarError('email_error');
    }

    // PASSWORD
    if (usrPsw.length < 1) {
        mostrarError('empty_psw', 'El campo contraseña no puede estar vacío');
        ocultarError('psw_error');
        esValido = false;

    } else if (usrPsw !== pswValido) {
        mostrarError('psw_error', 'Contraseña incorrecta');
        ocultarError('empty_psw');
        esValido = false;

    } else {
        ocultarError('empty_psw');
        ocultarError('psw_error');
    }

    return esValido;
}


function mostrarError(fieldId, message) {
    const errorElement = document.getElementById(fieldId);
    errorElement.textContent = "❌ " + message;
    errorElement.style.display = 'block';
}

function ocultarError(fieldId) {
    const errorElement = document.getElementById(fieldId);
    errorElement.style.display = 'none';
}

const btnIngresar = document.getElementById('btn_login');

btnIngresar.addEventListener('click', function (event) {
    event.preventDefault();

    if (validarForm()) {
    window.location.href = "/pages/bienvenida.html";
}
});



