const btnToTop = document.querySelector('.rounded-btn');

// FORMS FORMS ///////
const formValidation = document.querySelector('.form');
const formName = document.querySelector('.nome');
const formSobrenome = document.querySelector('.sobrenome');
const formEmail = document.querySelector('.email');
const formTelefone = document.querySelector('.telefone');
const formMensagem = document.querySelector('.mensagem');
const formError = document.querySelector('.error');

const showError = (input) => {
  input.classList.add('error');
};

const showSuccess = (input) => {
  input.classList.remove('error');
  input.classList.add('success');
};

const handleSubmit = (e) => {
  let messagens = [];

  if (formName.value === '' || formName.value === null) {
    messagens.push('<small>Nome é requerido</small>');
    showError(formName);
  } else {
    showSuccess(formName);
  }
  if (formSobrenome.value === '' || formSobrenome.value === null) {
    messagens.push('<small>Sobrenome é requerido</small>');
    showError(formSobrenome);
  } else {
    showSuccess(formSobrenome);
  }
  if (formMensagem.value === '' || formMensagem.value === null) {
    messagens.push('<small>Mensagem é requerido</small>');
    showError(formMensagem);
  } else {
    showSuccess(formMensagem);
  }

  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(formEmail.value.trim())) {
    messagens.push('<small>Email invalido</small>');
    showError(formEmail);
  } else {
    showSuccess(formEmail);
  }

  const rePhone = /^\s*(\d{2}|\d{0})[-. ]?(\d{5}|\d{4})[-. ]?(\d{4})[-. ]?\s*$/;
  if (!rePhone.test(formTelefone.value.trim())) {
    messagens.push('<small>Telefone invalido</small>');
    showError(formTelefone);
  } else {
    showSuccess(formTelefone);
  }

  // if (formMensagem.value.length > 500) {
  //   menssagens.push('<small>Mensagem muito longa! max 500</small>');
  //   showError(formMensagem);
  // } else {
  //   showSuccess(formMensagem);
  // }

  if (messagens.length > 0) {
    e.preventDefault();
    formError.innerHTML = messagens.join(', ');
  }
};

window.addEventListener('scroll', () => {
  var y = window.scrollY;

  if (y > 400) {
    btnToTop.classList.add('show-btn');
  } else {
    btnToTop.classList.remove('show-btn');
  }
});

formValidation.addEventListener('submit', handleSubmit);
