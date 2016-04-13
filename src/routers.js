'use strict';

export default function(router) {
	router.map({
		'/': {
			name: 'home',
			component: require('./views/home.vue'),
            subRoutes: {
                '/': {
                    name: 'welcome',
                    component: require('./views/welcome.vue')
                },
                '/category/:category': {
                    name: 'category',
                    component: require('./views/category.vue')
                 }
            }
		}      
	});
}
