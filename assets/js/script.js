var baseValue = 0;
var cheer = 'Oui, vas-y, ajoutes-en !';
var blame = 'Es-tu sûr de vouloir en enlever ?';

$('button').click(function(){

  let $button = $(this);

  if ($button.text() == '+') {
    $('.mainContainer').removeClass('doctor');
    $('.mainContainer').addClass('nicholson');
    $('#comment').text(cheer);
    (baseValue ++);
  } if ($button.text() == '-') {
    $('.mainContainer').removeClass('nicholson');
    $('.mainContainer').addClass('doctor');
    $('#comment').text(blame);
    (baseValue --);
  }

  console.log(baseValue);

  $('#totalNb').text(baseValue);

});
