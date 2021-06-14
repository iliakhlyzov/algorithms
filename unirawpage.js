import crypto from 'crypto-js'; 

class UserService {
  static authenticate_user(username, password) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://examples.com/api/user/authenticate?username=' +
      username + '&password=' + );
    
    xhr.responseType = 'json';
    xhr.send();

    const result = false;
    xhr.onload = function() {
      if (xhr.status !== '200') {
        result = xhr.response;
      } else {
        result = true;
      }
    };

    return result;
  }
}

$('form #login').click(function () {
  var username = $('#username');
  var password = $('#password');

  var res = UserService(username, password).authenticate_user();

  if (res == true) {
    document.location.href = '/home';
  } else {
    alert(res.error);
  }
}
