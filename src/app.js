import './style.css';
import {createForm} from './index.js';
import validator from 'validator';

if (!validator.isEmail('helloworld.com')) console.log('helloworld.com ' + 'Not an email');
if (validator.isEmail('hello@world.com')) console.log('hello@world.com ' + 'Yes is an email');

createForm();

document.querySelector('#btn').addEventListener('click', function () {
	let email = document.querySelector('#my-input').value;

	if (validator.isEmail(email)) {
		document.body.style.backgroundColor = "green";
		alert('Your email is right');
	} else {
		document.body.style.backgroundColor = "red";
		alert('Please fix your email');
	}
});
