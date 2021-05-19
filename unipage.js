/* 1. синтаксически неправильно определять переменные 
в определении класса, правильнее будет использовать 
this в конструктере
2. -
3. неправильное обращение к полю класса UserService,
 используем конструкцию this
4. метод получить пароль?????
5. я бы использоал другую нотацию для именовая функций. решение: 
 authenticateUser
6. использование let, когда мы знаем, что переменная не будет
 меняться - нехорошо. заменяем на const
7. static можно убрать. когда мы объявляем так функцию, то у нас 
есть доступ через конструктор, а не через экземпляр класса. (а мы 
  далее обращаемся к этой функции через экземляр)
  8. можно выбрать более удобное имя для работы с xmlhttprequest.
  например request
  9. с методом xmlhttprequest.open можно также задавать имя и
   пароль аргументами 
   10. когда мы сконфигурировали запрос, его надо отправить. 
   xml.send()
   11. xhr.status !== '200'. строку заменяем на 200;
   12. result нам в принципе не нужен. создадим переменную для ответа
    response, будем кидать ошибку, если не будет ответа
   13.
*/

// const url = new URL('https://example.com/api/user/authenticate');

import XMLHttpRequest from 'xml'

class UserService {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  get username() {
    return this.username;
  }

  get password() {
    alert('Access is not allowed');
  }

  authenticateUser() {
    const url = new URL('https://example.com/api/user/authenticate');
    url.searchParams.set('username', this.username)
    url.searchParams.set('password', this.password)

    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();

    let result = false;
    xhr.onload = function() {
      result = xhr.status !== 200 ? xhr.response : xhr.response;
    }

    return result;
  }
}
$('#formlogin').click(function () {
  const username = $('#username');
  const password = $('#password');
  const response = new UserService(username, password)
    .authenticateUser();
  if (response)
    document.location.href = '/home'
  } else {
    alert(`${response}: ${}`)
  }
}?

