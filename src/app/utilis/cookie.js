// utils/cookie.js

import Cookies from 'js-cookie';

// Set a cookie with a given name, value, and optional options
export const setCookie = (name, value, options = {}) => {
  Cookies.set(name, value, options);
};

// Unset or delete a cookie by name
export const unsetCookie = (name) => {
  Cookies.remove(name);
};



