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

    lclstrgcod.setItem('bgpref', "Backgrounds/0.jpg");

}

else if(lclstrgcod.getItem("bgpref") == 0){

    lclstrgcod.setItem('bgpref', "Backgrounds/0.jpg");

}

else if(lclstrgcod.getItem("bgpref") == 0){

    lclstrgcod.setItem('bgpref', "Backgrounds/0.jpg");

}

else if(lclstrgcod.getItem("bgpref") == 0){

    lclstrgcod.setItem('bgpref', "Backgrounds/0.jpg");

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

//parabugs7

/*if(BGselected == 0){

        $('#mainbody').css('background', "url('Backgrounds/0.jpg')");

    }

    else if(BGselected == 1){

        $('#mainbody').css('background', "url('Backgrounds/1.jpg')");

    }

    else if(BGselected == 2){

        $('#mainbody').css('background', "url('Backgrounds/2.jpg')");

    }*/