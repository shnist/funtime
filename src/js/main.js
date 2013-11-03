require.config({
	baseUrl: 'src/js',
	paths: {
		'jquery': '../../../assets/jquery.1.10.2.min',
		'bootstrap': '../../../assets/bootstrap.min',
		'pubsub': '../../../assets/pubsub'
	},
	shim: {
		'bootstrap': {
			deps: ['jquery']
		},
		'main': {
			deps: ['jquery', 'bootstrap']
		},
		'pubsub': {
			exports: 'pubsub'
		}
	}
});

require(['main'], function() {});