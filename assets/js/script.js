var baseValue = 0; // Etablit une variable définissant une valeur de base à 0
var cheer = 'Oui, vas-y, ajoutes-en !'; // Chaîne de caractères pour encourager
var discourage = 'Es-tu sûr de vouloir en enlever ?'; // Chaîne de caractères pour décourager

$('button').click(function(){ // Lors d'un click sur un élément de type button/bouton, la fonction se déclenche

  let button = $(this); // La variable button prendra en compte l'élément qui aura déclenché la fonction

  if (button.text() == '+') { // Si le texte à l'intérieur du bouton est un +
    $('.mainContainer').removeClass('doctor'); // On enlève la classe doctor aux éléments contenant la classe mainContainer, ne fera rien si elle n'y est pas
    $('.mainContainer').addClass('nicholson'); // On ajoute la classe nicholson aux éléments contenant la classe mainContainer
    $('#comment').text(cheer); // On affiche le texte de cheer dans l'élément contenant l'id comment
    (baseValue ++); // On incrémente la valeur de baseValue
  } if (button.text() == '-') { //Si le texte à l'intérieur du bouton est un -
    $('.mainContainer').removeClass('nicholson'); // On enlève la classe nicholson aux éléments contenant la classe mainContainer
    $('.mainContainer').addClass('doctor'); // On ajoute la classe doctor aux éléments contenant la classe mainContainer
    $('#comment').text(discourage); // On affiche le texte de blame dans l'élément contenant l'id comment
    (baseValue --); // On décrémente la valeur de baseValue
  }

  console.log(baseValue); // Pour vérifier que la valeur de baseValue suive bien

  $('#totalNb').text(baseValue); // On affiche la valeur actuelle de baseValue dans l'élément contenant l'id totalNb

});
