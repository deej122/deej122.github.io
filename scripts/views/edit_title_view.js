//View for Editing Title Content
Weeblys.TitleEditView = Ember.TextField.extend({
	didInsertElement: function () {
		this.$().focus();
	}
});

Ember.Handlebars.helper('edit-title', Weeblys.EditTitleView);