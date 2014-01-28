//Controller Editing Page Title(s) and Setting Active Page onClick
Weeblys.EditController = Ember.ObjectController.extend({
  actions: {
    editPageTitle: function () {
      this.set('isEditing', true);
    },
    acceptChanges: function () {
      this.set('isEditing', false);

      if (Ember.isEmpty(this.get('model.title'))) {
        this.send('deletePage');
      } else {
        this.get('model').save();
      }
    },
    deletePage: function () {
      var page = this.get('model');
      page.deleteRecord();
      page.save();
    }, 
  },
    setSelected: function () {
      this.set('isSelected', true);
    },
    deSelect: function () {
      this.set('isSelected', false);
    },        

  isEditing: false
});