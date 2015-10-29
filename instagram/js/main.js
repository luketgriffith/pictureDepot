import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';
import Router from './router';
import './resources/ajax_setup';
import userCollection from './resources/collection';

let appElement = document.querySelector('.app');
new Router(appElement).start();

