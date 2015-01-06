var link = document.querySelector(".btn-write-us");
var popup = document.querySelector(".write-us");
var close = document.querySelector(".btn-reset");
var form = popup.querySelector(".write-us-form");
var login = form.querySelector("#login-field");
var email = form.querySelector("#email-field");
var note = form.querySelector("#note-field");
var loginstorage = localStorage.getItem("login");
var emailstorage = localStorage.getItem("email");

/*Открытие формы и постановка фокуса на первое незаполнееное поле*/
link.addEventListener("click", function(event) {    
	event.preventDefault();
	popup.classList.add("write-us-show");
	
	login.value = loginstorage;
	email.value = emailstorage;
	
	if (login.value && email.value) {
		note.focus();
	} else if (login.value) {
		email.focus();
	} else {
		login.focus();
	}
});
/*Запись значения переменных в локальное хранилище при внесении изменений в поле*/
login.addEventListener("change", function(event) { 
		localStorage.setItem("login", login.value);
}) 
email.addEventListener("change", function(event) { 
		localStorage.setItem("email", email.value);
})
/*Перевод фокуса на соседнее поле при нажатии на клавиатуре enter*/
login.addEventListener("keydown", function(event) {
	if (event.keyCode == 13) {
		event.preventDefault();
		if (login.value) {
			email.focus();
		}
	} 	
})
email.addEventListener("keydown", function(event) {
	if (event.keyCode == 13) {
		event.preventDefault();
		if (email.value) {
			note.focus();
		}
	}
}) 
/*
Проверка наличия в полях введеных значений, 
демонстрация ошибки при пустых полях,
отправка и закрытие формы в случае правильного заполнения формы.
*/
form.addEventListener("submit", function(event) {
	event.preventDefault();
	if (!login.value || !email.value) {
		popup.classList.add("write-us-error");
		if (!login.value) {
			login.classList.add("error");
		}
		if (!email.value) {
			email.classList.add("error");
		}
	} else{
		console.log("Форма отправлена");
		popup.classList.remove("write-us-show");
	}
});
/*Закрытие формы при клике на кнопку формы "отмена"*/
close.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("write-us-show");
});
/*Закрытие формы при нажатии на клавиатуре кнопки escape*/
window.addEventListener("keydown", function(event) {
	if (event.keyCode == 27 && popup.classList.contains("write-us-show")) {
		popup.classList.remove("write-us-show");
	}
});