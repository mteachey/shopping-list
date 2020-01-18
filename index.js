$(function() {
    $('#number-chooser').submit(event => {
      // this stops the default form submission behavior
      event.preventDefault();
      // in case there's already results; this was in solution not mine
      $(".js-results").empty();
      console.log('is this working');
      const userTextElement = $(this).find('#number-choice');
      const userNumberInput = userTextElement.val();

      //solution const num = parseInt( $(event.currentTarget).find('input[name="number-choice"]').val());
      console.log(`userNumber is ${userNumberInput}`);
      let specifiedValue = 1;
      for (i=1;i<=userNumberInput;i++ ){   
        if (i%15===0){
            specifiedValue = 'fizzbuzz';
        }
        else if(i%3===0){
            specifiedValue = 'fizz';
        }
        else if(i%5===0){
            specifiedValue = 'buzz';   
         }
        else{
            specifiedValue = i;    
         }
         $('.js-results').append(`<div class="fizz-buzz-item"><span>${specifiedValue}</span></div>`); 
    };//end of for loop
    
    });  
  })
