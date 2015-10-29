import $ from 'jquery';

const APP_ID = 'O6WZWy6fCdLvFFfT9Mhvt1KcL0CbPys3TbTqyMnQ';
const API_KEY = '7UqbdHwzrhH3y2OBjvxRCtw6Ilx0SKhRML6hu44a';

$.ajaxSetup({
  headers: {
    'X-Parse-Application-Id': APP_ID,
    'X-Parse-REST-API-Key': API_KEY,
  }
});