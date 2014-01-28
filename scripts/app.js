//Creating Application
window.Weeblys = Ember.Application.create();

//Allows for Local Storage
//No local storage would be Weeblys.ApplicationAdapter = DS.FixtureAdapter.extend
//^^ this would use information in FIXTURES to display on page
Weeblys.ApplicationAdapter = DS.LSAdapter.extend({
	namespace: 'weebly-emberjs'
});
