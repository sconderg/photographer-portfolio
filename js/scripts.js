/* NAVBAR SCRIPT */
const solidNavbar = _ => {
    $('.navbar').addClass('solid');
}
const transparentNavbar = _ => {
    $('.navbar').removeClass('solid');
}
$(window).on('load', function () { 
    if ($(window).width() <= 974) {
        solidNavbar();
    }
    if($(window).width() > 974) {
        if($(window).scrollTop() > 90) {
            solidNavbar();
        } else {
            transparentNavbar();
        }
    } 
});
$(window).on('resize', function () {
    if ($(window).width() <= 974) {
        solidNavbar();
    } else {
        transparentNavbar();
    }    
});
$(window).on('scroll', function () {
    if($(window).width() > 974) {
        if($(window).scrollTop() > 90) {
            solidNavbar();
        } else {
            transparentNavbar();
        }
    } 
});
/* END NAVBAR *

/* SCROLL SPY  */

const scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar',
    offset:20
  })

/* END SCROLL SPY   */

/* HEADER TYPER WRITER SCRIPT */

const app = document.getElementById('typewriter');

const typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Sconder Doe.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('A Photographer.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('A Graphic Designer.')
    .pauseFor(2500)
    .start();

/* END HEADER TYPER WRITER SCRIPT */

/* START WAVE SCRIPT */
$('#wave').wavify({
    height: 60,
    bones: 4,
    amplitude: 30,
    color: '#fff',
    speed: .25
});
/* END WAVE SCRIPT */

/* PORTFOLIO SHUFFLE SCRIPT */
$(function () {
    const gridContainer = $('#shuffleContainer');
    const sizer = gridContainer.find('.col-md-4');
    setTimeout(() => {
        gridContainer.shuffle('shuffle', function(sel,shuffle) {
            return true;
        });
    },500);
    gridContainer.shuffle({
        sizer:sizer,
        speed:530,
        easing:'ease-out'
    });
    $('.selector #all').on('click', function() {
        gridContainer.shuffle('shuffle', function(sel,shuffle) {
            return true;
        });
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });
    $('.selector #seo').on('click', function() {
        gridContainer.shuffle('shuffle', function(sel,shuffle) {
            return sel.data('group') == 'seo';
        });
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });
    $('.selector #webDesign').on('click', function() {
        gridContainer.shuffle('shuffle', function(sel,shuffle) {
            return sel.data('group') == 'webDesign';
        });
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });
    $('.selector #wordpress').on('click', function() {
        gridContainer.shuffle('shuffle', function(sel,shuffle) {
            return sel.data('group') == 'wordpress';
        });
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });
})

/* END PORTFOLIO SHUFFLE SCRIPT */

/* CALLING OWL CAROUSEL PLUGIN IN CLIENTS SECTION */

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoPlay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:true,
            loop:false
        }
    }
})

/* END CALLING */

/* COLOR BOX */
$('.colorBtn').on('click', function () {
    if($('#colorBox').offset().left === 0) {
        $('#colorBox').css('left','-180px');
    } else {
        $('#colorBox').css('left','0');
    }
})
$('.csColor').on('click',function () {
    const color = $(this).css('backgroundColor');
    $('body').css('--mainColor',color);
})
/* END COLOR BOX */

/* SCROLL TO TOP BUTTON */
$(window).on('scroll', function () {
    if($(window).scrollTop() > 90) {
        $('.scrollToTop').css('opacity','1');
    } else {
        $('.scrollToTop').css('opacity','0');
    }
});
/* END SCROLL TO TOP BUTTON */