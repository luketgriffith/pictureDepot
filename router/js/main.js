import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';
import Router from './router';
import './ajax_setup';
import personCollection from './person_collection'


var appElement = $('.app');
var router = new Router(appElement);
router.start();
 