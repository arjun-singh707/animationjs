var a = new animationJs();


function startFunction(){

    a.bounce("slideme");
    setTimeout(function(){
        a.fadeInLeftBig("slideme");
    },1000)
};