//View for Editing Body Content
Weeblys.BodyEditView = Ember.TextField.extend({
	didInsertElement: function () {
		this.$().focus();
	}
});

Ember.Handlebars.helper('edit-body', Weeblys.EditBodyView);