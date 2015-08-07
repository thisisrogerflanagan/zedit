$(document).ready(function(){

  $('.slider-container').on('click',function(){
    $(this).addClass('active');
    $('.slider').addClass('active');

    chrome.tabs.executeScript(null,
      {code:"document.querySelector('*').setAttribute('contentEditable', 'true')"}
    );
  });
 
});