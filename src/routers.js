'use strict';

export default function(router) {
	router.map({
		'/': {
			name: 'home',
			component: require('./views/home.vue')
		}
	});
}
