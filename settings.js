var BGselected = "Backgrounds/0.jpg";
var IconsHaved;
lclstrgcod = window.localStorage;

//lclstrgcod.clear();

if(lclstrgcod.getItem("bgpref") == null){

    BGselected = "Backgrounds/0.jpg";

}

else{

    BGselected = lclstrgcod.getItem("bgpref");

}

if(lclstrgcod.getItem("bgpref") == 0){

    changeBG('Backgrounds/0.jpg');

}

else if(lclstrgcod.getItem("bgpref") == 1){

    changeBG('Backgrounds/1.jpg');

}

else if(lclstrgcod.getItem("bgpref") == 2){

    changeBG('Backgrounds/2.jpg');

}

else if(lclstrgcod.getItem("bgpref") == 3){

    changeBG('Backgrounds/3.jpg');

}

if(lclstrgcod.getItem("cstmicons") != null){

    $("#customicons").append(lclstrgcod.getItem("cstmicons"));

}

function checkBG(){

    $('#mainbody').css('background', "url('" + BGselected + "')");
    $('#mainbody').css('background-repeat', "no-repeat");
    $('#mainbody').css('background-position', "center");
    $('#mainbody').css('background-size', "cover");
    
    console.log("hey");
    console.log(lclstrgcod.getItem("bgpref"));
}

checkBG();

function changeBG(bg){
    
    window.parent.BGselected = bg;
    lclstrgcod.setItem('bgpref', bg);
    checkBG();
    window.parent.checkBG();

}

function setcustomBG(){
    
    window.parent.BGselected = document.getElementById('cstmbgbox').value;
    lclstrgcod.setItem('bgpref', document.getElementById('cstmbgbox').value);
    checkBG();
    window.parent.checkBG();

}
//ar BillHtml = $('#up').html();
function savecustomicons(){

    console.log("working boi");
    IconsHaved = $('#customicons').html();
    lclstrgcod.setItem('cstmicons', IconsHaved);

}

//first_welcome_page --------------------------------------------------------------

var currentstepfirstpage = 1;
var steps = document.querySelectorAll('.step');

function checkcurrentstepoffp(){
  
  for(let step of steps){

    if(step.id == "st" + currentstepfirstpage){

      step.style.display = "inline";

    }

    else{

      step.style.display = "none";

    }

  }
  
}

function nextstepff(){

  currentstepfirstpage += 1;
  checkcurrentstepoffp();

}

function endsetupofthing(){

    lclstrgcod.setItem('firstsetupdone', true);
    location.reload();

}

function deletedonesetup(){

    lclstrgcod.setItem('firstsetupdone', false);
    location.reload();

}

if(lclstrgcod.getItem("firstsetupdone") == "true"){

    document.getElementById("firstopenwelcome").style.display = "none";

}

else{

    document.getElementById("firstopenwelcome").style.display = "inline";
    
}

checkcurrentstepoffp();


//parabugs5

/*if(BGselected == 0){

        $('#mainbody').css('background', "url('Backgrounds/0.jpg')");

    }

    else if(BGselected == 1){

        $('#mainbody').css('background', "url('Backgrounds/1.jpg')");

    }

    else if(BGselected == 2){

        $('#mainbody').css('background', "url('Backgrounds/2.jpg')");

    }*/