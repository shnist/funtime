require.config({
	baseUrl: 'src/js',
	paths: {
		'jquery': '../../assets/libs/jquery.1.10.2.min',
		'bootstrap': '../../assets/libs/bootstrap.min',
		'pubsub': '../../assets/libs/pubsub'
	},
	shim: {
		'bootstrap': {
			deps: ['jquery']
		},
		'main': {
			deps: ['jquery', 'bootstrap', 'index']
		},
		'pubsub': {
			exports: 'pubsub'
		}
	}
});

require(['main'], function() {});