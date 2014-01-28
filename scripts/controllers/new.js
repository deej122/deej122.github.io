//Controller for Adding New Pages
Weeblys.WeeblysController = Ember.ArrayController.extend({
	actions: {
		createNewPage: function() {
			//Get Page title set by "New Page" text field
			var title = this.get('newPageTitle') || "PAGE";
			if(!title.trim()) { return; }

			//Create new Page model
			var page = this.store.createRecord('page', {
				title: title,
				isSelected: false
			});

			//Clear "New Page" text field
			this.set('newPageTitle', '');

			//Save new model
			page.save();		
		}
	}
	
});

