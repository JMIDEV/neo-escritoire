var customimage = false;
const URLtext = document.getElementById("urlbox");
const CSTMURLtext = document.getElementById("cstmimage");
const previewimage = document.getElementById("imgprev");
var iconname;
var iconurl;
var iconimageurl;

    
function togglectsmimage(){

    if(customimage == true){

        customimage = false;
        console.log(customimage);

    }

    else if(customimage == false){

        customimage = true;
        console.log(customimage);

    }

    //preview

    if(customimage == true){

        URLtext.removeEventListener('input', ncstmimgprev, true);
        CSTMURLtext.addEventListener('input', ycstmimgprev);
    
    }
    
    else{
    
        CSTMURLtext.removeEventListener('input', ycstmimgprev, true);
        URLtext.addEventListener('input', ncstmimgprev);
    
    }

}

function preparecreatingoficon(){

    iconname = document.getElementById("namebox").value;
    iconurl = document.getElementById("urlbox").value;

    if(customimage == true){

        iconimageurl = document.getElementById("cstmimage").value;

    }

    else if(customimage == false){

        iconimageurl = 'https://www.google.com/s2/favicons?sz=128&domain=' + iconurl;

    }

    if(iconname != "" && iconurl != ""){

        if(customimage == true && iconimageurl != ""){
            
            window.parent.createcstmicon(iconname, iconurl, iconimageurl);
            window.parent.savecustomicons();
            window.parent.$('.crossclose').closest('.window').css('display', 'none');

        }

        else if(customimage == false){

            window.parent.createcstmicon(iconname, iconurl, iconimageurl);
            window.parent.savecustomicons();
            window.parent.$('.crossclose').closest('.window').css('display', 'none');

        }

        else{

            alert("Some textboxes aren't filled!!");

        }

    }

    else{

        alert("Some textboxes aren't filled!!");

    }

}

function ycstmimgprev(){

    previewimage.src = CSTMURLtext.value;

}

function ncstmimgprev(){

    previewimage.src = "https://www.google.com/s2/favicons?sz=128&domain=" + URLtext.value;

}

if(customimage == true){

    URLtext.removeEventListener('input', ncstmimgprev, true);
    CSTMURLtext.addEventListener('input', ycstmimgprev);

}

else{

    CSTMURLtext.removeEventListener('input', ycstmimgprev, true);
    URLtext.addEventListener('input', ncstmimgprev);

}

//parabugs5