'use strict';

import Vue from 'vue';
import VueRouter from 'vue-router';
import routerMap from './routers';
import filters from './filters.js';
import './assets/main.scss';
import './assets/common.scss';

// Filters
Vue.filter('unixtime', filters.unixtimeFormat);
Vue.filter('category', filters.postCategoryAlias);

Vue.use(VueRouter);

const router = new VueRouter({
    hashbang: false,
    saveScrollPosition: true,
    transitionOnLoad: true,
    linkActiveClass: 'active'
});

const app = Vue.extend({});

routerMap(router);

router.start(app, '#app');
