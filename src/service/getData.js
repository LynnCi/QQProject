// import fetch from '../utils/fetch';
import fetch from '../utils/axios';

export const accountLogin = (email,password) => fecth('/loginController/login',{ email,password },'POST');
