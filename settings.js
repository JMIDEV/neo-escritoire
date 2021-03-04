var BGselected = 0;

function checkBG(){

    $('#mainbody').css('background', "url('Backgrounds/" + BGselected + ".jpg')");
    
    /*if(BGselected == 0){

        $('#mainbody').css('background', "url('Backgrounds/0.jpg')");

    }

    else if(BGselected == 1){

        $('#mainbody').css('background', "url('Backgrounds/1.jpg')");

    }

    else if(BGselected == 2){

        $('#mainbody').css('background', "url('Backgrounds/2.jpg')");

    }*/

    $('#mainbody').css('background-repeat', "no-repeat");
    $('#mainbody').css('background-position', "center");
    $('#mainbody').css('background-size', "cover");

    console.log("hey");

}

checkBG();

function changeBG(bgnum){
    
    window.parent.BGselected = bgnum;
    window.parent.checkBG();

}

//parabugs3