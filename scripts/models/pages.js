//Creates Page Model and Populates (If not using local storage)
Weeblys.Page = DS.Model.extend({
	title: DS.attr('string'),
	isSelected: DS.attr('boolean'),
});

Weeblys.Page.FIXTURES = [
	{
		id: 1,
		title: 'PAGE',
		isSelected: true,
	}
];
