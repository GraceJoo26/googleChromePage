const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  const usernameThatTheUserWrote = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, usernameThatTheUserWrote);
  paintGreetings(usernameThatTheUserWrote);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY); //1

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME); // 로컬스토리지에 유저네임키가 없으면 loginForm 보이게
  loginForm.addEventListener("submit", onLoginSubmit); // 로그인폼에 submit누르면, onLoginSubmit 함수실행됨
} else {
  paintGreetings(savedUsername); // 로컬스토리지에 유저네임키가 있으면 paintGrettings의 함수실행
}
