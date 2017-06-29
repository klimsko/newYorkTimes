var $container = $('#articles'),
    $first_line = $('<div>').addClass('first_line col-sm-9'),
    $second_line = $('<div>').addClass('second_line row'),
    $third_line = $('<div>').addClass('third_line row'),
    $forth_line = $('<div>').addClass('forth_line row');

function Card(id, title, description, square320, thumbnail, normal, url, views, date) {
  var self = this;

  this.id = id;
  this.title = title;
  this.description = description;
  this.square320 = square320;
  this.thumbnail = thumbnail;
  this.normal = normal;
  this.url = url;
  this.views = views;
  this.date = date;
  this.$article = createArt();

  var $col_3 = $('<div>').addClass('col-sm-3'),
      $col_4 = $('<div>').addClass('col-sm-4'),
      $col_8 = $('<div>').addClass('col-sm-8');
      

$container.append($first_line);
$first_line.append($second_line, $third_line, $forth_line);

  if (this.id < 1){
    $first_line.prepend(this.$article);
  } else if (this.id >= 1 && this.id <= 4){
    $second_line.append($col_3);
    (this.$article).appendTo($col_3);
  } else if (this.id >= 5 && this.id <= 7){
    $third_line.append($col_4);
    (this.$article).appendTo($col_4);
  } else if (this.id == 8){
    $forth_line.append($col_8);
    (this.$article).appendTo($col_8);
  } else if (this.id == 9){
    $forth_line.append($col_4);
    (this.$article).appendTo($col_4);
  }
    

  function createArt() {
    var $card = $('<div>').addClass('well');
    var $title = $('<h4>').addClass('title').text(self.title);
    var $description = $('<p>').addClass('description').text(self.description);
    var $image = $('<div class="image">' + '<a href = ' + self.url + '>' + '<img class="img-responsive" src = ' + self.normal + '>' + '</a>' + '</div>');
    var $url = $('<p>' + '<a href = ' + self.url + '>' + 'View more...' + '</a>' + '</p>').addClass('url');
    var $views = $('<p>' + 'Views: ' + self.views + '</p>');
    var $date = $('<p>' + 'Published date: ' + self.date + '</p>');
    var $text_box = $('<div>').addClass('text_box');

    $card.append($image).append($text_box);
    $text_box.append($title, $description, $url, $date);
     
    return $card;
  }
}
