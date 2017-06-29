var most_popular_api = '1d4264cd34b74feda722da8bb27b8788';
var counter = 0;
var sections = {};
var news = {};
var url = 'https://api.nytimes.com/svc/mostpopular/v2/';

$( document ).ready(function(){
	let url = 'https://api.nytimes.com/svc/mostpopular/v2/viewed/sections.json';
	getFromApi(url, most_popular_api);
	url = 'https://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/1.json';
  getFromApi(url, most_popular_api);
})

function getFromApi(url, api){
	console.log(url);
	url += '?' + $.param({
	  'api-key': api
	});
	$.ajax({
	  url: url,
	  method: 'GET',
	}).done(function(result) {

	  	getValues(result.results);

	}).fail(function(err) {
	  throw err;
	});
}

function getValues(value){
	let num = 0;
  	for (let key in value){
  		for (let i in value[key]){

  			if (value[key].name != undefined){
  				let name = value[key].name;
  				sections[name] = value[key][i];
  			}

  			if (value[key].type == 'Article'){
  				news[num] = value[key];
  			}
  			
  			num++;
  		} 
  	}

  	// sectionList(sections);
  	showValues(sections, news);
}

function sectionList(sec){
	for (let prop in sec){
		console.log(sec[prop]);
	}
}

function showValues(value){
	
	console.log(value);
	console.log(news);
	
}

function chooseNews(){
	let target_url = url + '/mostviewed/' + sections[0] + '/' + 1 + '.json';
	getFromApi(target_url, most_popular_api);
}

$('#geo').click(function(){
	chooseNews();
	console.log('click');
	console.log(news);
});

// for(prop in value) if (value.hasOwnProperty(prop)) {
//   console.log(value[0]);
// }