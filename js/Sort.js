function Sections(name){
	var self = this;

	this.name = name;

	this.$item = $('<li>' + '<a href="#">' + this.name + '</a>' + '</li>');
	
	$('.nav').append(this.$item);

	this.$item.click(function(event){
		event.preventDefault();
		showArt(self.name, setDays());
	});
}

function showArt(name, num){
	current_section = name;

	jQuery('#articles div').empty();
	let new_url = url + '/mostviewed/' + name + '/' + num + '.json';
	getFromApi(new_url, most_popular_api);
}