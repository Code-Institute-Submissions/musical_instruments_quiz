var result = 0;

$(document).ready(function(){
  $('#startButton').click(function(){
    $('footer').slideUp(700);
    $('#mainContainer').slideUp(700).promise().done(function(){
      $('#question1').slideDown(900);
      $('.container').prepend('<h2>Question №1</h2>');
      
    });
    });
  $('#form1').submit(function(){
    var radioValue = $("#form1 :radio:checked").val();
    if(radioValue == null)
      {
        $('#choose').slideDown();
      }
      else if(radioValue == 0){
       
         $('#choose').slideUp();
         $('#wrong').removeClass('display-none');
         $('#button1').slideUp();
         $('#secondQuestion').slideDown();
              }
      else{
        result++;
         $('#choose').slideUp();
         $('#correct').removeClass('display-none');
         $('#button1').slideToggle();
         $('#secondQuestion').slideDown();
    }
   
   return false;  
    
  });
  var i = 0;
   
  $('#secondQuestion').click(function(){
    $('.container').children('h2').addClass('display-none'); 
     $('.container').prepend('<h2>Question №' + (i+2) + '</h2>');
    var arr = $('#questions').children();
    var currentQuestion = arr.get(i);
    $(currentQuestion).slideUp(1000);
    $('#wrong').addClass('display-none');
    $('#correct').addClass('display-none');
    var nextQuestion  = arr.get(i+1);
    $(nextQuestion).slideDown(1000);
        $('#secondQuestion').hide(1000);
    $('.btn-success').removeClass('display-none');
    var currentForm = $(nextQuestion).children().get(1);
    $(currentForm).submit(function(){
      
     var radioValue1 = $(this).children().filter(":checked").val();
      if(radioValue1 == null)
      {
        $('#choose').slideDown();
      }
      else if(radioValue1 == 0){
         $('#choose').slideUp();
         $('#wrong').removeClass('display-none');
        if(i!=9){
         $('.btn-success').addClass('display-none');
         $('#secondQuestion').show();}
       else{
         $('#resultsParagraph').removeClass('display-none');
         $('.btn-success').addClass('display-none');
       }
              }
      else{
         result++;
         $('#choose').slideUp();
         $('#correct').removeClass('display-none');
         if(i!=9){ $('.btn-success').addClass('display-none');
         $('#secondQuestion').show();}
         else{
         $('#resultsParagraph').removeClass('display-none');
         $('.btn-success').addClass('display-none');  
       }
    }
    
   return false;
   
      
    });
 
   i++;
  });
  $('#result').click(function(){
    $('#test').hide();
    $('#result').hide();
    $('h1').removeClass('display-none');
    if(result < 4){
      $('#low').removeClass('display-none');
      $('#arrOfResults #low').prepend('<h3 class="text-center">You scored ' + result + ' out of 10!</h3>')
    } else if( result < 8 && result > 3){
        $('#intermediate').removeClass('display-none');
        $('#arrOfResults #intermediate').prepend('<h3 class="text-center">You scored ' + result + ' out of 10!</h3>')
       }
    else if(result > 7){
            $('#advanced').removeClass('display-none');
             $('#arrOfResults #advanced').prepend('<h3 class="text-center">You scored ' + result + ' out of 10!</h3>')
            }
  });
 
   
});

$(document).ready(function(){
 $("#guitimg").click( function(){
     $(".card-body").slideToggle();
  });
   $("#keysimg").click( function(){
     $(".card-body2").slideToggle();
  });
   $("#brassimg").click( function(){
     $(".card-body3").slideToggle();
  });
   $("#timpimg").click( function(){
     $(".card-body4").slideToggle();
  });
  $("#piccimg").click( function(){
     $(".card-body5").slideToggle();
  });
   $("#thereminimg").click( function(){
     $(".card-body6").slideToggle();
  });
});