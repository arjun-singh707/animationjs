var animationJs = (function(){
    'use strict'
    var getElement = function(id){
         var elementResult = document.getElementById(id);
             elementResult.classList.add('animated');
         return elementResult;   
    }

    var animationJs = function(){
        
    }

    animationJs.prototype.bounce = function(divId){
        var element = getElement(divId);
        element.classList.remove('bounce');
        setTimeout(function(){
            element.classList.add('bounce');
        },0)
    }

    animationJs.prototype.flash = function(divId){
        var element = getElement(divId);
        element.classList.remove('flash');
        setTimeout(function(){
            element.classList.add('flash');
        },0)
    }

    animationJs.prototype.pulse = function(divId){
        var element = getElement(divId);
        element.classList.remove('pulse');
        setTimeout(function(){
            element.classList.add('pulse');
        },0)
    }

    animationJs.prototype.rubberBand = function(divId){
        var element = getElement(divId);
        element.classList.remove('rubberBand');
        setTimeout(function(){
            element.classList.add('rubberBand');
        },0)
    }

    animationJs.prototype.shake = function(divId){
        var element = getElement(divId);
        element.classList.remove('shake');
        setTimeout(function(){
            element.classList.add('shake');
        },0)
    }

    animationJs.prototype.swing = function(divId){
        var element = getElement(divId);
        element.classList.remove('swing');
        setTimeout(function(){
            element.classList.add('swing');
        },0)
    }

    animationJs.prototype.tada = function(divId){
        var element = getElement(divId);
        element.classList.remove('tada');
        setTimeout(function(){
            element.classList.add('tada');
        },0)
    }

    animationJs.prototype.wobble = function(divId){
        var element = getElement(divId);
        element.classList.remove('wobble');
        setTimeout(function(){
            element.classList.add('wobble');
        },0)
    }

    animationJs.prototype.jello = function(divId){
        var element = getElement(divId);
        element.classList.remove('jello');
        setTimeout(function(){
            element.classList.add('jello');
        },0)
    }

    animationJs.prototype.bounceIn = function(divId){
        var element = getElement(divId);
        element.classList.remove('bounceIn');
        setTimeout(function(){
            element.classList.add('bounceIn');
        },0)
    }

    animationJs.prototype.bounceInDown = function(divId){
        var element = getElement(divId);
        element.classList.remove('bounceInDown');
        setTimeout(function(){
            element.classList.add('bounceInDown');
        },0)
    }

    animationJs.prototype.bounceInLeft = function(divId){
        var element = getElement(divId);
        element.classList.remove('bounceInLeft');
        setTimeout(function(){
            element.classList.add('bounceInLeft');
        },0)
    }

    animationJs.prototype.bounceInRight = function(divId){
        var element = getElement(divId);
        element.classList.remove('bounceInRight');
        setTimeout(function(){
            element.classList.add('bounceInRight');
        },0)
    }

    animationJs.prototype.bounceInUp = function(divId){
        var element = getElement(divId);
        element.classList.remove('bounceInUp');
        setTimeout(function(){
            element.classList.add('bounceInUp');
        },0)
    }

    animationJs.prototype.bounceOut = function(divId){
        var element = getElement(divId);
        element.classList.remove('bounceOut');
        setTimeout(function(){
            element.classList.add('bounceOut');
        },0)
    }

    animationJs.prototype.bounceOutDown = function(divId){
        var element = getElement(divId);
        element.classList.remove('bounceOutDown');
        setTimeout(function(){
            element.classList.add('bounceOutDown');
        },0)
    }

    animationJs.prototype.bounceOutLeft = function(divId){
        var element = getElement(divId);
        element.classList.remove('bounceOutLeft');
        setTimeout(function(){
            element.classList.add('bounceOutLeft');
        },0)
    }

    animationJs.prototype.bounceOutRight = function(divId){
        var element = getElement(divId);
        element.classList.remove('bounceOutRight');
        setTimeout(function(){
            element.classList.add('bounceOutRight');
        },0)
    }

    animationJs.prototype.bounceOutUp = function(divId){
        var element = getElement(divId);
        element.classList.remove('bounceOutUp');
        setTimeout(function(){
            element.classList.add('bounceOutUp');
        },0)
    }

    animationJs.prototype.fadeIn = function(divId){
        var element = getElement(divId);
        element.classList.remove('fadeIn');
        setTimeout(function(){
            element.classList.add('fadeIn');
        },0)
    }

    animationJs.prototype.fadeInDown = function(divId){
        var element = getElement(divId);
        element.classList.remove('fadeInDown');
        setTimeout(function(){
            element.classList.add('fadeInDown');
        },0)
    }

    animationJs.prototype.fadeInDownBig = function(divId){
        var element = getElement(divId);
        element.classList.remove('fadeInDownBig');
        setTimeout(function(){
            element.classList.add('fadeInDownBig');
        },0)
    }

    animationJs.prototype.fadeInLeft = function(divId){
        var element = getElement(divId);
        element.classList.remove('fadeInLeft');
        setTimeout(function(){
            element.classList.add('fadeInLeft');
        },0)
    }

    animationJs.prototype.fadeInLeftBig = function(divId){
        var element = getElement(divId);
        element.classList.remove('fadeInLeftBig');
        setTimeout(function(){
            element.classList.add('fadeInLeftBig');
        },0)
    }

    animationJs.prototype.fadeInRight = function(divId){
        var element = getElement(divId);
        element.classList.remove('fadeInRight');
        setTimeout(function(){
            element.classList.add('fadeInRight');
        },0)
    }

    animationJs.prototype.fadeInRightBig = function(divId){
        var element = getElement(divId);
        element.classList.remove('fadeInRightBig');
        setTimeout(function(){
            element.classList.add('fadeInRightBig');
        },0)
    }

    animationJs.prototype.fadeInUp = function(divId){
        var element = getElement(divId);
        element.classList.remove('fadeInUp');
        setTimeout(function(){
            element.classList.add('fadeInUp');
        },0)
    }

    animationJs.prototype.fadeInUpBig = function(divId){
        var element = getElement(divId);
        element.classList.remove('fadeInUpBig');
        setTimeout(function(){
            element.classList.add('fadeInUpBig');
        },0)
    }

    animationJs.prototype.fadeOut = function(divId){
        var element = getElement(divId);
        element.classList.remove('fadeOut');
        setTimeout(function(){
            element.classList.add('fadeOut');
        },0)
    }

    animationJs.prototype.fadeOutDown = function(divId){
        var element = getElement(divId);
        element.classList.remove('fadeOutDown');
        setTimeout(function(){
            element.classList.add('fadeOutDown');
        },0)
    }

    animationJs.prototype.fadeOutDownBig = function(divId){
        var element = getElement(divId);
        element.classList.remove('fadeOutDownBig');
        setTimeout(function(){
            element.classList.add('fadeOutDownBig');
        },0)
    }

    animationJs.prototype.fadeOutLeft = function(divId){
        var element = getElement(divId);
        element.classList.remove('fadeOutLeft');
        setTimeout(function(){
            element.classList.add('fadeOutLeft');
        },0)
    }

    animationJs.prototype.fadeOutLeftBig = function(divId){
        var element = getElement(divId);
        element.classList.remove('fadeOutLeftBig');
        setTimeout(function(){
            element.classList.add('fadeOutLeftBig');
        },0)
    }

    animationJs.prototype.fadeOutRight = function(divId){
        var element = getElement(divId);
        element.classList.remove('fadeOutRight');
        setTimeout(function(){
            element.classList.add('fadeOutRight');
        },0)
    }

    animationJs.prototype.fadeOutRightBig = function(divId){
        var element = getElement(divId);
        element.classList.remove('fadeOutRightBig');
        setTimeout(function(){
            element.classList.add('fadeOutRightBig');
        },0)
    }

    animationJs.prototype.bounce = function(divId){
        var element = getElement(divId);
        element.classList.remove('bounce');
        setTimeout(function(){
            element.classList.add('bounce');
        },0)
    }

    animationJs.prototype.fadeOutUp = function(divId){
        var element = getElement(divId);
        element.classList.remove('fadeOutUp');
        setTimeout(function(){
            element.classList.add('fadeOutUp');
        },0)
    }

    animationJs.prototype.fadeOutUpBig = function(divId){
        var element = getElement(divId);
        element.classList.remove('fadeOutUpBig');
        setTimeout(function(){
            element.classList.add('fadeOutUpBig');
        },0)
    }

    animationJs.prototype.flip = function(divId){
        var element = getElement(divId);
        element.classList.remove('flip');
        setTimeout(function(){
            element.classList.add('flip');
        },0)
    }

    animationJs.prototype.flipInX = function(divId){
        var element = getElement(divId);
        element.classList.remove('flipInX');
        setTimeout(function(){
            element.classList.add('flipInX');
        },0)
    }

    animationJs.prototype.flipInY = function(divId){
        var element = getElement(divId);
        element.classList.remove('flipInY');
        setTimeout(function(){
            element.classList.add('flipInY');
        },0)
    }

    animationJs.prototype.flipOutX = function(divId){
        var element = getElement(divId);
        element.classList.remove('flipOutX');
        setTimeout(function(){
            element.classList.add('flipOutX');
        },0)
    }

    animationJs.prototype.flipOutY = function(divId){
        var element = getElement(divId);
        element.classList.remove('flipOutY');
        setTimeout(function(){
            element.classList.add('flipOutY');
        },0)
    }

    animationJs.prototype.lightSpeedIn = function(divId){
        var element = getElement(divId);
        element.classList.remove('lightSpeedIn');
        setTimeout(function(){
            element.classList.add('lightSpeedIn');
        },0)
    }

    animationJs.prototype.lightSpeedOut = function(divId){
        var element = getElement(divId);
        element.classList.remove('lightSpeedOut');
        setTimeout(function(){
            element.classList.add('lightSpeedOut');
        },0)
    }

    animationJs.prototype.rotateIn = function(divId){
        var element = getElement(divId);
        element.classList.remove('rotateIn');
        setTimeout(function(){
            element.classList.add('rotateIn');
        },0)
    }

    animationJs.prototype.rotateInDownLeft = function(divId){
        var element = getElement(divId);
        element.classList.remove('rotateInDownLeft');
        setTimeout(function(){
            element.classList.add('rotateInDownLeft');
        },0)
    }

    animationJs.prototype.rotateInDownRight = function(divId){
        var element = getElement(divId);
        element.classList.remove('rotateInDownRight');
        setTimeout(function(){
            element.classList.add('rotateInDownRight');
        },0)
    }

    animationJs.prototype.rotateInUpLeft = function(divId){
        var element = getElement(divId);
        element.classList.remove('rotateInUpLeft');
        setTimeout(function(){
            element.classList.add('rotateInUpLeft');
        },0)
    }

    animationJs.prototype.rotateInUpRight = function(divId){
        var element = getElement(divId);
        element.classList.remove('rotateInUpRight');
        setTimeout(function(){
            element.classList.add('rotateInUpRight');
        },0)
    }

    animationJs.prototype.rotateOut = function(divId){
        var element = getElement(divId);
        element.classList.remove('rotateOut');
        setTimeout(function(){
            element.classList.add('rotateOut');
        },0)
    }

    animationJs.prototype.rotateOutDownLeft = function(divId){
        var element = getElement(divId);
        element.classList.remove('rotateOutDownLeft');
        setTimeout(function(){
            element.classList.add('rotateOutDownLeft');
        },0)
    }

    animationJs.prototype.rotateOutDownRight = function(divId){
        var element = getElement(divId);
        element.classList.remove('rotateOutDownRight');
        setTimeout(function(){
            element.classList.add('rotateOutDownRight');
        },0)
    }

    animationJs.prototype.rotateOutUpLeft = function(divId){
        var element = getElement(divId);
        element.classList.remove('rotateOutUpLeft');
        setTimeout(function(){
            element.classList.add('rotateOutUpLeft');
        },0)
    }

    animationJs.prototype.rotateOutUpRight = function(divId){
        var element = getElement(divId);
        element.classList.remove('rotateOutUpRight');
        setTimeout(function(){
            element.classList.add('rotateOutUpRight');
        },0)
    }

    animationJs.prototype.slideInUp = function(divId){
        var element = getElement(divId);
        element.classList.remove('slideInUp');
        setTimeout(function(){
            element.classList.add('slideInUp');
        },0)
    }

    animationJs.prototype.slideInDown = function(divId){
        var element = getElement(divId);
        element.classList.remove('slideInDown');
        setTimeout(function(){
            element.classList.add('slideInDown');
        },0)
    }

    animationJs.prototype.slideInLeft = function(divId){
        var element = getElement(divId);
        element.classList.remove('slideInLeft');
        setTimeout(function(){
            element.classList.add('slideInLeft');
        },0)
    }

    animationJs.prototype.slideInRight = function(divId){
        var element = getElement(divId);
        element.classList.remove('slideInRight');
        setTimeout(function(){
            element.classList.add('slideInRight');
        },0)
    }

    animationJs.prototype.slideOutUp = function(divId){
        var element = getElement(divId);
        element.classList.remove('slideOutUp');
        setTimeout(function(){
            element.classList.add('slideOutUp');
        },0)
    }

    animationJs.prototype.slideOutDown = function(divId){
        var element = getElement(divId);
        element.classList.remove('slideOutDown');
        setTimeout(function(){
            element.classList.add('slideOutDown');
        },0)
    }

    animationJs.prototype.slideOutLeft = function(divId){
        var element = getElement(divId);
        element.classList.remove('slideOutLeft');
        setTimeout(function(){
            element.classList.add('slideOutLeft');
        },0)
    }

    animationJs.prototype.slideOutRight = function(divId){
        var element = getElement(divId);
        element.classList.remove('slideOutRight');
        setTimeout(function(){
            element.classList.add('slideOutRight');
        },0)
    }

    animationJs.prototype.zoomIn = function(divId){
        var element = getElement(divId);
        element.classList.remove('zoomIn');
        setTimeout(function(){
            element.classList.add('zoomIn');
        },0)
    }

    animationJs.prototype.zoomInDown = function(divId){
        var element = getElement(divId);
        element.classList.remove('zoomInDown');
        setTimeout(function(){
            element.classList.add('zoomInDown');
        },0)
    }

    animationJs.prototype.zoomInLeft = function(divId){
        var element = getElement(divId);
        element.classList.remove('zoomInLeft');
        setTimeout(function(){
            element.classList.add('zoomInLeft');
        },0)
    }

    animationJs.prototype.zoomInRight = function(divId){
        var element = getElement(divId);
        element.classList.remove('zoomInRight');
        setTimeout(function(){
            element.classList.add('zoomInRight');
        },0)
    }

    animationJs.prototype.zoomInUp = function(divId){
        var element = getElement(divId);
        element.classList.remove('zoomInUp');
        setTimeout(function(){
            element.classList.add('zoomInUp');
        },0)
    }

    animationJs.prototype.zoomOut = function(divId){
        var element = getElement(divId);
        element.classList.remove('zoomOut');
        setTimeout(function(){
            element.classList.add('zoomOut');
        },0)
    }

    animationJs.prototype.zoomOutDown = function(divId){
        var element = getElement(divId);
        element.classList.remove('zoomOutDown');
        setTimeout(function(){
            element.classList.add('zoomOutDown');
        },0)
    }

    animationJs.prototype.zoomOutLeft = function(divId){
        var element = getElement(divId);
        element.classList.remove('zoomOutLeft');
        setTimeout(function(){
            element.classList.add('zoomOutLeft');
        },0)
    }

    animationJs.prototype.zoomOutRight = function(divId){
        var element = getElement(divId);
        element.classList.remove('zoomOutRight');
        setTimeout(function(){
            element.classList.add('zoomOutRight');
        },0)
    }

    animationJs.prototype.zoomOutUp = function(divId){
        var element = getElement(divId);
        element.classList.remove('zoomOutUp');
        setTimeout(function(){
            element.classList.add('zoomOutUp');
        },0)
    }

    animationJs.prototype.hinge = function(divId){
        var element = getElement(divId);
        element.classList.remove('hinge');
        setTimeout(function(){
            element.classList.add('hinge');
        },0)
    }

    animationJs.prototype.jackInTheBox = function(divId){
        var element = getElement(divId);
        element.classList.remove('jackInTheBox');
        setTimeout(function(){
            element.classList.add('jackInTheBox');
        },0)
    }

    animationJs.prototype.rollIn = function(divId){
        var element = getElement(divId);
        element.classList.remove('rollIn');
        setTimeout(function(){
            element.classList.add('rollIn');
        },0)
    }

    animationJs.prototype.rollOut = function(divId){
        var element = getElement(divId);
        element.classList.remove('rollOut');
        setTimeout(function(){
            element.classList.add('rollOut');
        },0)
    }



    return animationJs;
})();