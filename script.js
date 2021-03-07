var conmen_selected_element;
var classdivided;

function openapp(appurl){

  document.getElementById("windowcontent").src = appurl;
  $('.window').css('display', 'inline');

}

//window_things

dragElement(document.getElementById("window"));

  function dragElement(elmnt) {
      var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
      if (document.getElementById(elmnt.id + "header")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
        } else {
          // otherwise, move the DIV from anywhere inside the DIV:
          elmnt.onmousedown = dragMouseDown;
        }
      
        function dragMouseDown(e) {
          e = e || window.event;
          e.preventDefault();
          // get the mouse cursor position at startup:
          pos3 = e.clientX;
          pos4 = e.clientY;
          document.onmouseup = closeDragElement;
          // call a function whenever the cursor moves:
          document.onmousemove = elementDrag;
        }
      
        function elementDrag(e) {
          e = e || window.event;
          e.preventDefault();
          // calculate the new cursor position:
          pos1 = pos3 - e.clientX;
          pos2 = pos4 - e.clientY;
          pos3 = e.clientX;
          pos4 = e.clientY;
          // set the element's new position:
          elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
          elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }
      
        function closeDragElement() {
          // stop moving when mouse button is released:
          document.onmouseup = null;
          document.onmousemove = null;
        }
      }

    $(function(){
        $('.crossclose').on('click',function(){
            $(this).closest('.window').css('display', 'none');
        })
    });



function createcstmicon(name, url, image){

  $("#customicons").append("<button class='desktopicon customicon " + name + "' id='desktopiconheader'><img src='" + image + "'></button>");
  $("." + name).attr("onclick", "window.open('" + url + "')");

}

function showcstmcontextmen(){

  var pattern = /(?:^|\s)customicon(?:\s|$)/
  if (document.activeElement.className.match(pattern)) {
  
    conmen_selected_element = document.activeElement;
    $('.contextmen').css("display", "inline");
    $(".contextmen").css("transform","translate3d("+event.clientX+"px,"+event.clientY+"px,0px)");

  }

}

window.oncontextmenu = function(){

  showcstmcontextmen();
  return false;

}

$('.contextmen').click(function() {
  
  classdivided = conmen_selected_element.className.split(/[ ,]+/);
  $("." + classdivided[2]).remove();
  $('.contextmen').css("display", "none");
  savecustomicons();

});

$(document).click(function(event) { 
  var $target = $(event.target);
  if(!$target.closest('.contextmen').length) {
    $('.contextmen').css("display", "none");
  }        
});

//parabugs8