import Cookies from 'universal-cookie';

const cookies = new Cookies();

function setCookie(name, value, options = {}) {
  cookies.set(name, value, options);
}

function getCookie(name) {
  return cookies.get(name);
}

function removeCookie(name, options = {}) {
  return cookies.remove(name, options);
}

export {
  setCookie,
  getCookie,
  removeCookie,
};
