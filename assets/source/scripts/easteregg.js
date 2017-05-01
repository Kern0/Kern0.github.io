function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

$(document).ready(function() {
  var options = shuffle([
    'Разработчик',
    'Столяр',
    'Чувак какой-то',
    'Уборщик',
    'Специалист Широкого Профиля',
    'Сеньор Диджитал Некстдженерейшен Джаваскрипт Девелопер',
    'Непикчер',
    'Сеня',
    'Трудовой мигрант',
    'Ну, этот самый',
    'Вроде как,',
    'Парень',
    '.еречкиП',
    'Занимаю место',
    'Думаю, что',
    'Я'
  ]);
  
  var $element = $('#js-work-easteregg');
  
  $element.click(function () {
    $element.html(options[Math.floor(Math.random() * (options.length - 1))]);
  });
});
