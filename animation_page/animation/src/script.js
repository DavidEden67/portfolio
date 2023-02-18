const writeButton = $('#write');

writeButton.click(function(){
    doWriting('text-1');
});

function afterLoad(){
      $('#text-1').after('<div class="button-row"><button style="cursor: pointer;" id="restart">BACK</button><button style="cursor: pointer;" id="next">NEXT</button></div>');
      $('#restart').click(function(){
        buttonsReset();
      });
      $('#next').click(function(){
        doWriting('text-2');
      });
}

function buttonsReset(){
     $('.hand-writing svg').remove();
     $('.button-row').remove();
     $('#text-1').before(writeButton);
    writeButton.click(function(){
      doWriting();
    });
}

function doWriting(idGrab){
  writeButton.remove();
  var writing = new Vara( 
  '#' + idGrab + " .hand-writing", "https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json", 
    [
      {
	      text: $('#' + idGrab + ' .screen-reader').text(),
        color: 'black',
        duration: 2000,
        fontSize: 64,
        strokeWidth: 2,
        x: 10,
        y: 10,
      }
    ],
    ).animationEnd(function(){
      afterLoad();
    });
}