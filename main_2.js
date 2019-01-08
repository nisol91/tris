
$(document).ready(function() {


  for (var i = 0; i < 9; i++) {
    //invece che clonare fuori e poi clonare il clone qui dentro,
    //semplicemente posso clonare ogni volta solo qua, tanto il template e' sempre pulito.
    var clone = $('.templates .element').clone();
    $('.griglia').append(clone);
  }

  function random_int_number(min, max) {
    return Math.floor(Math.random() * (max - min +  1) + min);
  }

  var posiz = []
  var numeri = []
  var numero
  var numero_x
  var numericorretti = []

  $('.griglia .element').click(function() {
    var copy_x = $('.templates .fa-times').clone()
    var copy_o = $('.templates .fa-circle').clone()
    var posizElem = $(this).index();
    console.log(posizElem);
    var questoElemento = $(this)
    //per non cliccare due volte. faccio un array in cui metto la posizione dell elemento cliccato,
    //se la posizione e' gia nell array faccio uscire l alert, se no gli permetto di fare la chiamata ajax.la posizione la pusho nell array alla fine di tutto
    if (posiz.includes(posizElem)) {
      alert('non puoi cliccare 2 volte')
    } else if ($(this).find('i').hasClass('cerchio')) {
      alert('non puoi cliccare 2 volte')
    }
    else {



      questoElemento.append(copy_x);
      console.log(questoElemento);
      posiz.push(posizElem);//pusho nell array la posizione index dell elemento per evitare che ci si clicchi due volte
      $('.griglia .element').each(function(index) {
        if ($(this).find('i').hasClass('croce') == false && $(this).find('i').hasClass('cerchio') == false) {
          console.log($(this).html());
          numero = index
          numeri.push(numero)
          console.log(numeri);
        } else if ($(this).find('i').hasClass('croce')) {
          numero_x = index
          numericorretti.push(numero_x)
          console.log(numericorretti);
        }
      });

      var num_array = random_int_number(0, numeri.length - 1)
      for (var i = 0; i <= numeri.length - 1; i++) {
        if (i == num_array) {
          var position_0 = numeri[i]
        }
      }
      console.log(position_0);
      // console.log(numeri.length);
      $('.griglia .element').each(function(index) {


        if ($(this).index() == position_0 && $(this).find('i').hasClass('croce') == false && $(this).find('i').hasClass('cerchio') == false) {
          var copy_o = $('.templates .fa-circle').clone()
          $(this).append(copy_o);
        }
      });
    }

    if (numericorretti.includes(0) && numericorretti.includes(1) && numericorretti.includes(2) || numericorretti.includes(0) && numericorretti.includes(4) && numericorretti.includes(8) || numericorretti.includes(0) && numericorretti.includes(3) && numericorretti.includes(6) || numericorretti.includes(2) && numericorretti.includes(4) && numericorretti.includes(6) || numericorretti.includes(2) && numericorretti.includes(5) && numericorretti.includes(8) || numericorretti.includes(6) && numericorretti.includes(7) && numericorretti.includes(8) || numericorretti.includes(1) && numericorretti.includes(4) && numericorretti.includes(7) || numericorretti.includes(3) && numericorretti.includes(4) && numericorretti.includes(5)) {
      alert('hai vinto')
    }

    numeri = []//azzero gli array per il prossimo click
    numericorretti = []

  });

});
