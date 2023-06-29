const writeButton = $('#write');

writeButton.click(function(){
   $('.hand-writing svg').remove();
    doWriting('text-1');
});

function afterLoad(){
      $('#text-1').after('<div class="button-row"><button style="cursor: pointer;display: none" id="restart">BACK</button><button style="cursor: pointer; display: none" id="next">NEXT</button></div>');
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
//or use https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json | https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Parisienne/Parisienne.json |   https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Pacifico/PacificoSLO.json    |      
  // https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Shadows-Into-Light/shadows-into-light.json
  
 //original: https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json
  
  var writing = new Vara( 
  '#' + idGrab + " .hand-writing", "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Parisienne/Parisienne.json", 
    [
      {
	      text: $('#' + idGrab + ' .screen-reader').text(),
        color: 'black',
        duration: 6000,
        fontSize: 32,
        strokeWidth: 2,
        x: 10,
        y: 10,
      }
    ],
    ).animationEnd(function(){
      afterLoad();
    });
}