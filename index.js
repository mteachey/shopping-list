
$(function() {
//add items
    $( "#js-shopping-list-form" ).submit(function( event ) {
        event.preventDefault();
        const newItem = $(this).find('input[name="shopping-list-entry"]').val();
      console.log(`new item entered is ${newItem}`);
      $('.shopping-list').append(`<li>
      <span class="shopping-item">${newItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
       </li>`);         
      });

//toggle checked item including new ones
     //$(".shopping-item-toggle").click(function(){
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
        $(this).parent().siblings('span').toggleClass("shopping-item__checked");
        console.log('checked clicked');
      });
//remove item including new ones
     // $(".shopping-item-delete").click(function(){
        $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
          $(this).closest('li').remove('li');
          console.log('delete clicked');
      });
 
  })//end of onload function
