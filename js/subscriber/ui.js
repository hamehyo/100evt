
$(function(){

    // scroll motion
    AOS.init();

    //scoll to top
    $(window).on("scroll resize", function() {

        // event navbar fixed
        let scrollPos = $(document).scrollTop();
        let visualH = $(".visual_section").outerHeight();
        let bodyH = $("body").outerHeight();
        let navHeight = $(".evt_list").outerHeight();

        if( visualH < scrollPos ){
            $(".evt_list_conts").addClass("fixed");
            $("#evt1").css({ "margin-top" : navHeight + 60 });
        }else{
            $(".evt_list_conts").removeClass("fixed");
            $("#evt1").css({ "margin-top" : 0 });
            $(".evt_list li").removeClass("active");
            $(".evt_list li:nth-child(1)").addClass("active");
        }
        
        let innerH = $(window).innerHeight();
        let scrollH = $('body').prop('scrollHeight');
        if (scrollPos + innerH >= scrollH) {
            $(".evt_list li").removeClass("active");
            $(".evt_list li:nth-child(4)").addClass("active");
        }

        $(".evt_list li a").each(function (){
            let linkRef = $($(this).attr("href"));
            let refPos = linkRef.offset().top - navHeight - 80;
            let refHeight = linkRef.height() ;
            if(refPos <= scrollPos && refPos + refHeight > scrollPos){
                $(".evt_list li").removeClass("active");
                $(this).parent("li").addClass("active");
            }
        });
        
        var $share = $(".scroll_box");
        if ($( document ).scrollTop() > 200) {
            $share.fadeIn();
        } else {
            $share.fadeOut();
        }

        /* 
        if ($(this).scrollTop() > 100) {
            $('#scrollToTop').fadeIn();
        } else {
            $('#scrollToTop').fadeOut();
        }
        */


    }); 

    /* event navbar click motion  */
    $(".evt_list li a").on("click", function(e){
        let href = $(this).attr('href');
        let navHeight = $(".evt_list_conts").outerHeight();
        let targetTop = $(href).offset().top - navHeight;
        $("html, body").stop().animate({scrollTop:targetTop}, 400);
        e.preventDefault();
    });



    /* visual motion */
    let hachi = $(".visual_section .v_hachi"),
        moo = $(".visual_section .v_moo"),
        ho = $(".visual_section .v_ho"),
        joo = $(".visual_section .v_joo"),
        young = $(".visual_section .v_young"),
        lt_fire = $(".visual_section .lt_fire");

    // gsap.fromTo( hachi, { y:-6 }, { y: 3, duration: 1.6, repeat: -1, yoyo: true, ease: Power2.easeInOut } );
    // gsap.fromTo( joo, { x:4 }, { x: 0, duration: 1.6, repeat: -1, yoyo: true, ease: Power2.easeInOut } );
    // gsap.fromTo( young, { y: 4 }, { y: -2, duration: 1.6, repeat: -1, yoyo: true, ease: Power2.easeInOut });
    // gsap.fromTo( moo, { x : 3, y: -4 }, { x : 0, y: 2, duration: 1.6, repeat: -1, yoyo: true, ease: Power2.easeInOut });
    // gsap.fromTo( ho, { x : -3, y: 4 }, { x : 0, y: 0, duration: 1.6, repeat: -1, yoyo: true, ease: Power2.easeInOut });




    let box_shadow = $(".random_box .random_box_inner img");

   // gsap.fromTo( box_shadow, { y:-4 }, { y: 2, duration: 1.2, repeat: -1, yoyo: true, ease: Power2.easeInOut } );


    let million_txt = new TimelineMax();
    let mil = $(".v_tit_box .num_hundred img");

    // million_txt.add([
    //     gsap.fromTo(mil, { y:80, rotation:960, opacity:0 }, { y:0, rotation:0, opacity:1, duration:0.8, ease:Expo.easeOut } ),
    // ]).add([
    //     gsap.fromTo(mil, { scale:0.98 }, { scale:1.1, duration:1, repeat:-1, yoyo:true, ease:Power2.easeInOut } ),
    // ]);




    /* random box popup open */
    let box = $(".box_inner .box"),
        fire = $(".box_inner .fire"),
        deco = $(".box_inner .deco"),
        figure = $(".box_inner .figure"),
        txt = $(".win_txt .txt");

    $(".btn_rdm_open").on("click", function(e){
        $(".rdm_popup_wrap").show();
        $(this).hide();
        /* s : popup motion */
        gsap.fromTo( box, { rotation:490, }, { rotation:0, duration : 0.4,  ease: "expo.out"  } );
        gsap.fromTo( fire, { scale: 0.1, opacity : 0.4, }, { scale: 1, opacity:1, delay : 0.4, duration : 0.6, ease: Bounce.easeOut } );
        gsap.fromTo( figure, { y:100, scale: 0.1, opacity : 0.1, }, { y:0, scale: 1, opacity:1, delay : 0.7, duration : 0.5, ease: Bounce.easeOut } );
        gsap.fromTo( txt, { y:-100, opacity : 0, }, { y:0, opacity:1, delay : 0.7, duration : 0.4, ease: "bounce.out" } );
        gsap.fromTo( deco, { scale: 0.1, opacity : 0.4, }, { scale: 1, opacity:1, delay : 1, duration : 0.3, ease: "expo.out" } );
        /* e : popup motion */
        e.preventDefault();
    });

    /* popup close */
    $(".rdm_popup_close").on("click", function(e){
        $(".rdm_popup_wrap").fadeOut();
        $(".btn_rdm_open").show();
        e.preventDefault();
    });











    var $toggle_share = $('#toggle_share'),
        $share_list = $('#share_list');

    $toggle_share.click(function(e){
        $(this).toggleClass('on');
        $share_list.stop(true, true).slideToggle(200);
        e.preventDefault();
    });

    $('.btn_box .goTop').click(function(e){
        $('body,html').animate({scrollTop:0},400);
        e.preventDefault();
    });












    // note
    $(".note_toggle_box dt").on("click", function(){
        $(this).toggleClass("on");
        $(this).next("dd").slideToggle(400);
    });


});










