/* fun little example using GreenSock's Draggable: https://www.greensock.com/draggable/ */

var content = document.getElementById("content");
var knob = document.getElementById("knob");
var needsRotationUpdate = false;
var sections = 8;




//when the user drags the knob, we must update the scroll position. We're using the special scrollProxy object of Draggable because it allows us to overscroll (normal browser behavior won't allow it to scroll past the top/bottom). 
function onRotateKnob() {
  dragContent.scrollProxy.top(maxScroll * dragKnob.rotation / -360);
  needsRotationUpdate = false;
}

//this method updates the knob rotation, syncing it to wherever the content's scroll position is
function updateRotation() {
  TweenMax.set(knob, {rotation:360 * (content.scrollTop / maxScroll)});
  needsRotationUpdate = false;
}

//if the user flicks/spins/drags with momentum, a tween is created, but if the user interacts again before the tween is done, we must kill that tweens (so as not to fight with the user). This method kills any tweens of the knob or the content's scrollProxy.
function killTweens() {
  TweenLite.killTweensOf([knob, dragContent.scrollProxy]);
}
content.addEventListener("mousewheel", killTweens);
content.addEventListener("DOMMouseScroll", killTweens);

//whenever the content gets scrolled (like by using the mousewheel or dragging the content), we simply set a flag indicating we need to update the knob's rotation. We use a "tick" handler later to actually trigger the update because that optimizes performance since ticks happen on requestAnimationFrame and we want to avoid thrashing
content.addEventListener("scroll", function() {
  needsRotationUpdate = true;
});
TweenLite.ticker.addEventListener("tick", function() {
  if (needsRotationUpdate) {
    updateRotation();
  }
});

//create the knob Draggable
Draggable.create("#knob",
{
    type:"rotation",
      throwProps:true,
  edgeResistance:0.85,
  bounds:{minRotation:-90, maxRotation:90},
  onDragStart:killTweens,
  onDrag: onRotateKnob,
  
   
  minDuration:.3, //speed of animation on throw and release 
    maxDuration:.3,

  	
  	
  onThrowUpdate: onRotateKnob,
  
  
    //   bounds:{minRotation:-90, maxRotation:90},
    onThrowUpdate: function()
    {
    	
    document.getElementById("text").value = (this.rotation).toFixed(0);
    
    
document.getElementById("divdescription").style.display='none'; 
document.getElementById("divgps").style.display='none'; 
    
    
if (document.getElementById('text').value=="0") {document.getElementById("divdescription").style.display='block'; document.getElementById("divgps").style.display='block'; document.getElementById("divdescription").innerHTML = "Screen for Auxiliary USB Devices Displayed Here.";} 


if (document.getElementById('text').value=="51") {document.getElementById("divdescription").style.display='block'; document.getElementById("divgps").style.display='block'; document.getElementById("divdescription").innerHTML = "Screen for Bluetooth Devices Displayed Here.";} 


if (document.getElementById('text').value=="90") {document.getElementById("divdescription").style.display='block'; document.getElementById("divgps").style.display='block'; document.getElementById("divdescription").innerHTML = "Vehicle Routine Maintenance Displayed Here.";} 


if (document.getElementById('text').value=="-51") {document.getElementById("divdescription").style.display='block'; document.getElementById("divgps").style.display='block'; document.getElementById("divdescription").innerHTML = "Touchscreen Buttons for Electronic 4 Wheel Drive and Towing Options Displayed Here.";} 


if (document.getElementById('text').value=="-90") {document.getElementById("divgps").classList.add("backgroundshow"); document.getElementById("divgps").style.display='block';  } else {document.getElementById("divgps").classList.remove("backgroundshow"); } ;

	},
	    onDrag: function()
    {
    	
    document.getElementById("text").value = (this.rotation).toFixed(0);



	},

    
    snap: function(endValue) {
    var step = 360 / (sections - 1);
    return Math.round( endValue / step) * step;
  }
    
    
});



























// ----- On render -----
$(function(){
  var blue = [0, 149, 255];
  var orange = [255, 165, 0];
  $("#volume").knob();
  $("#driver").knob({
    change: function(v){
      var color;
      var progress = (v - 67) / 7;
      if (progress < 0) {
        color = blue;
      } else if (progress > 1) {
        color = orange;
      } else {
        var r = (orange[0] * progress) + blue[0] - (blue[0] * progress);
        var g = (orange[1] * progress) + blue[1] - (blue[1] * progress);
        var b = (orange[2] * progress) + blue[2] - (blue[2] * progress);
        color = [Math.round(r), Math.round(g), Math.round(b)];
      }
      console.log(color);
      this.o.fgColor ='rgb(' + color[0] +','+ color[1] + ','+ color[2] +')';
    }
  });
  $("#passenger").knob({
    change: function(v){
      var color;
      var progress = (v - 67) / 7;
      if (progress < 0) {
        color = blue;
      } else if (progress > 1) {
        color = orange;
      } else {
        var r = (orange[0] * progress) + blue[0] - (blue[0] * progress);
        var g = (orange[1] * progress) + blue[1] - (blue[1] * progress);
        var b = (orange[2] * progress) + blue[2] - (blue[2] * progress);
        color = [Math.round(r), Math.round(g), Math.round(b)];
      }
      console.log(color);
      this.o.fgColor ='rgb(' + color[0] +','+ color[1] + ','+ color[2] +')';
    }
  }).trigger('change');
});




//set initital value of the knob to GPS
$(function(){
  $("#test1").on('click', function(){
    TweenMax.to('#knob', 1, {
      startAt:{
        rotation:0
      },
      rotation:-90
    })
  });
});