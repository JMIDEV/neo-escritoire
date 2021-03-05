var BGselected = 0;
lclstrgcod = window.localStorage;

//lclstrgcod.clear();

if(lclstrgcod.getItem("bgpref") == null){

    BGselected = 0;

}

else{

    BGselected = lclstrgcod.getItem("bgpref");

}

function checkBG(){

    $('#mainbody').css('background', "url('Backgrounds/" + BGselected + ".jpg')");
    $('#mainbody').css('background-repeat', "no-repeat");
    $('#mainbody').css('background-position', "center");
    $('#mainbody').css('background-size', "cover");
    
    console.log("hey");
    console.log(lclstrgcod.getItem("bgpref"));
}

checkBG();

function changeBG(bgnum){
    
    window.parent.BGselected = bgnum;
    lclstrgcod.setItem('bgpref', bgnum);
    checkBG();
    window.parent.checkBG();

}

//parabugs4

/*if(BGselected == 0){

        $('#mainbody').css('background', "url('Backgrounds/0.jpg')");

    }

    else if(BGselected == 1){

        $('#mainbody').css('background', "url('Backgrounds/1.jpg')");

    }

    else if(BGselected == 2){

        $('#mainbody').css('background', "url('Backgrounds/2.jpg')");

    }*/