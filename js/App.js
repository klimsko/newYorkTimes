// API

var most_popular_api = '1d4264cd34b74feda722da8bb27b8788';
var sections = {};
var news = {};
var url = 'https://api.nytimes.com/svc/mostpopular/v2/';
var current_section;
var days;

$( document ).ready(function(){
  getSections();
  showArt('all-sections', setDays());
})

function getSections(){
  let url = 'https://api.nytimes.com/svc/mostpopular/v2/viewed/sections.json';
  getFromApi(url, most_popular_api);
}

$('.dropdown-menu li').click(function(event){
  event.preventDefault();
  let li_value = parseInt($(this)[0].innerText);
  let num_days = setDays(li_value);
  showArt(current_section, num_days);
})

function setDays(num){
  if (num) {
    days = num;
  } else days = 30;

  return days;
}

function getFromApi(url, api){
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
    if (value[0].name != undefined){
      for (let key in value){
        for (let i in value[key]){
          let name = value[key].name;
          sections[name] = value[key][i];
        }
      }
        setupSort(sections);

    } else if (value[0].type == 'Article'){
      for (let key in value){
        news[key] = value[key];
      }

        setupCards(news);
    }
    
}

function setupCards(cards) {
  if (cards){
    for (let key in cards){
      if (cards[key].media["0"] != undefined){
        var img_square320 = cards[key].media["0"]["media-metadata"]["0"].url;
        var img_thumbnail = cards[key].media["0"]["media-metadata"]["1"].url;
        var img_normal = cards[key].media["0"]["media-metadata"]["2"].url;
        var date = cards[key].published_date;
      }
      
      var card = new Card(key, cards[key].title, cards[key].abstract, img_square320, img_thumbnail, img_normal, cards[key].url, cards[key].views, date);
    }
  }
}

function setupSort(values){
  if (values){
    for (let key in values){
      var sec_values = new Sections(values[key]);
    }
  } 
} 