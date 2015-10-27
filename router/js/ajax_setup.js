import $ from 'jquery';

const APP_ID = 'M5NkQJKWvG7CmDnj7DaHYWWo2LtCRfxGglfVLBhH';
const API_KEY = 'eZ86MIUDPyhT9FWNw1M72go84XokkndEN2BfwBzd';

$.ajaxSetup({
  headers: {
    'X-Parse-Application-Id': APP_ID,
    'X-Parse-REST-API-Key': API_KEY,
  }
});