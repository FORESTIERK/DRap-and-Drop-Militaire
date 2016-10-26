// GILLET
$(document).ready(function () {
  $('.gilet').draggable({
    revert: 'invalid',
  });
  $('#casegilet').droppable({
    accept: '.gilet',
    drop: function (event, ui){
    }
  });
});
// ARME ASSAUT
$(document).ready(function () {
  $('.arme1').draggable({
    revert: 'invalid',
  });
  $('#casearme1').droppable({
    accept: '.arme1',
    drop: function (event, ui){
    }
  });
});
// ARME PISTOLET
$(document).ready(function () {
  $('.arme2').draggable({
    revert: 'invalid',
  });
  $('#casearme2').droppable({
    accept: '.arme2',
    drop: function (event, ui){
    }
  });
});
// CASQUE
$(document).ready(function () {
  $('.casque').draggable({
    revert: 'invalid',
  });
  $('#casecasque').droppable({
    accept: '.casque',
    drop: function (event, ui){
      $ ( this )
      function mySoNiceSound(s)
        {
          var e=document.createElement('audio');
          e.setAttribute('src',s);
          e.play();
        }

        mySoNiceSound('son.mp3');
      alert ('Soldat Rayan ! Prêt pour le combat !')
    }
  });
});
// GRENADES
$(document).ready(function () {
  $('.grenade1, .grenade2').draggable({
    revert: 'invalid',
  });
  $('#casegrenade1').droppable({
    accept: '.grenade1, .grenade2',
    drop: function (event, ui){
    }
  });
});
