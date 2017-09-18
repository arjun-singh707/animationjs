var animate = new animationJs();

animate.bounce('title');
animate.fadeInLeft('desc');
animate.fadeIn('pic');

function animateImg(type){
    switch(type){
        
        case 'flipInX':
            animate.flipInX('pic');
        break;

        case 'slideInUp':
            animate.slideInUp('pic');
        break;

        case 'zoomIn':
            animate.zoomIn('pic');
        break;

        case 'jackInTheBox':
            animate.jackInTheBox('pic');
        break;

        case 'hinge':
            animate.hinge('pic');
        break;

        case 'rollIn':
            animate.rollIn('pic');
        break;
    }
}