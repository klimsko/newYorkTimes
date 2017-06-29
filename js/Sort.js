function Sections(name){
	var self = this;

	this.name = name;

	this.$item = $('<li>' + '<a href="#">' + this.name + '</a>' + '</li>');
	
	$('.nav').append(this.$item);

	this.$item.click(function(event){
		event.preventDefault();
		jQuery('#articles div').empty();
		var current_url = url + '/mostviewed/' + '/' + self.name + '/' + '1.json';
		getFromApi(current_url, most_popular_api);
	})
}

