$(document).ready(function() {
//웹사이트,홈페이지리뉴얼,랜딩페이지,이벤트페이지,웹디자인,웹퍼블리싱 프리랜서 김유미 yellomobile123@naver.com
    $('#fullpage').fullpage({
        //Navigation
        menu: '#menu',
        lockAnchors: false,
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['', ''],
        showActiveTooltip: false,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 1000,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        dragAndMove: false,
        offsetSections: false,
        resetSliders: false,
        fadingEffect: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        scrollOverflowReset: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
        sectionsColor : ['#ccc', '#fff'],
        paddingTop: '3em',
        paddingBottom: '10px',
        fixedElements: '#header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: false,
        parallax: false,
        parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
        cards: false,
        cardsOptions: {perspective: 100, fadeContent: true, fadeBackground: true},

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',
        lazyLoading: true,

        //events
        onLeave: function(anchorLink, index){
            $("#text-"+index).removeClass('active');
        },
        afterLoad: function(anchorLink, index){
            $("#text-"+index).addClass('active');
        },
        afterRender: function(){},
        afterResize: function(width, height){},
        afterReBuild: function(){},
        afterResponsive: function(isResponsive){},
        afterSlideLoad: function(section, origin, destination, direction){
        },
        onSlideLeave: function(section, origin, destination, direction){}
    });
//menu color
    function menuColor(){
        var activeSection =$('.section.active').attr('id');

        if(activeSection==='section3'){
            $('header .menu_area #menu li a').addClass('black');
            $('.scroll_down strong').addClass('dark');
            $('.scroll_down span').addClass('dark');
            $('#fp-nav ul li a span').addClass('dark');
            $('header .logo_area h1 a img').attr('src', 'images/logo_b.png');
        }else if(activeSection==='section4'){
            $('header .menu_area #menu li a').addClass('black');
            $('.scroll_down strong').addClass('dark');
            $('.scroll_down span').addClass('dark');
            $('#fp-nav ul li a span').addClass('dark');
            $('header .logo_area h1 a img').attr('src', 'images/logo_b.png');
        }else{
            $('header .menu_area #menu li a').removeClass('black');
            $('.scroll_down strong').removeClass('dark');
            $('.scroll_down span').removeClass('dark');
            $('#fp-nav ul li a span').removeClass('dark');
            $('header .logo_area h1 a img').attr('src', 'images/logo_w.png');
        };
    };
    setInterval(menuColor, 500);
}); 