'use strict';

export default function(router) {
	router.map({
		'/': {
			name: 'home',
			component: require('./views/home.vue'),
            subRoutes: {
                '/category/:category': {
                    name: 'category',
                    component: require('./views/category.vue')
                 }
            }
		}      
	});
}
