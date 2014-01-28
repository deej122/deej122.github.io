//Main Route
Weeblys.Router.map(function() {
	this.resource('weeblys', {path: '/'});
});

//Displaying Page Info on page
Weeblys.WeeblysRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('Page');
	}
});
