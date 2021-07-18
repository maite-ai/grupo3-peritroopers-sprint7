let errors = {}

const startWithLetter = /^[A-z]+/;
const isValidPwd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-])[A-Za-z][A-Za-z\d!@#$%^&*()_+]{7,}$/;

const form = document.getElementById('register-form');
const name = document.getElementById('name');
const lastName = document.getElementById('lastName');
const birthDate = document.getElementById('birthDate');
const address = document.getElementById('address');
const email = document.getElementById('email');
const password = document.getElementById('password');

