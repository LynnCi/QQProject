// import fetch from '../utils/fetch';
import fetch from '../utils/axios';

export const accountLogin = (email, password) => fetch('/loginController/login', { email, password }, 'POST');
