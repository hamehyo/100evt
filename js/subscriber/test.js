$(function(){

    AOS.init();

    $(".evt_list li a").on("click", function(e){
        let href = $(this).attr('href');
        let navHeight = $(".evt_list_conts").outerHeight();
        let targetTop = $(href).offset().top - navHeight + 60;
        $("html, body").stop().animate({scrollTop:targetTop}, 400);
        e.preventDefault();
    });

    $(window).on('scroll resize', function () {

        // evnt navbar fixed
        let scrollPos = $(document).scrollTop();
        let visualH = $(".visual_conts").outerHeight();
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
            let refPos = linkRef.offset().top - navHeight - 60;
            let refHeight = linkRef.height() ;
            if(refPos <= scrollPos && refPos + refHeight > scrollPos){
                $(".evt_list li").removeClass("active");
                $(this).parent("li").addClass("active");
            }
        });
        
        var $share = $(".scroll_box");
        if ($( document ).scrollTop() > 50) {
            $share.fadeIn();
        } else {
            $share.fadeOut();
        }
    });


    /* --- motion --- */

    // visual_conts
    gsap.fromTo(".main_tit_box .sub_tit", { y:120, opacity:0, scale:0.9 }, { y:0, opacity:1, scale:1, duration:1, delay:0.1, ease:Expo.easeOut } );

    let myhand = new TimelineMax();
    myhand.add([
        gsap.fromTo(".main_tit_box .myhand", { y:80, rotation:-360, opacity:0 }, { y:0, rotation:0, opacity:1, duration:0.8, delay:0.4, ease:Expo.easeOut} ),
    ]).add([
        gsap.fromTo(".main_tit_box .myhand", { scale:0.94 }, { scale:1, duration:0.8, repeat:-1, yoyo: true, ease:Power2.easeInOut } ),
    ]);
    gsap.fromTo(".main_tit_box .look", { y:120, opacity:0 }, { y:0, opacity:1, duration:0.8, delay:0.7, ease:Expo.easeOut } );
    gsap.fromTo(".main_tit_box .deco_txt", { y:-80, opacity:0 }, { y:0, opacity:1, duration:0.8, delay:0.7, ease:Expo.easeOut } );
    gsap.fromTo(".main_tit_box .deco_candle", { y:-80, opacity:0 }, { y:0, opacity:1, duration:0.8, delay:0.7, ease:Expo.easeOut } );
    gsap.fromTo(".main_tit_box .deco_candle .light", { scale: 0.95 , opacity:0.5 }, { scale: 1, opacity:1, duration:0.8, delay:0.7, repeat: -1, yoyo: true, ease: Power2.easeInOut} );
    
    gsap.fromTo(".main_tit_box .like", { y:120, opacity:0 }, { y:0, opacity:1, duration:1, delay:0.9, ease:Expo.easeOut } );
    let deco_ten_num = new TimelineMax();
    deco_ten_num.add([
        gsap.fromTo(".main_tit_box .kor", { y:80, rotation:360, opacity:0 }, { y:0, rotation:0, opacity:1, duration:0.8, delay:1.2, ease:Expo.easeOut } ),
    ]).add([
        gsap.fromTo(".main_tit_box .kor", { scale:0.94 }, { scale:1, duration:0.8, repeat:-1, yoyo:true, ease:Power2.easeInOut } ),
    ]);

    let deco_ten_txt = new TimelineMax();
    deco_ten_txt.add([
        gsap.fromTo(".main_tit_box .eng", { y:80, rotation:360, opacity:0 }, { y:0, rotation:0, opacity:1, duration:0.8, delay:1.2, ease:Expo.easeOut } ),
    ]).add([
        gsap.to(".main_tit_box .eng", 4, { rotation:360, delay:1.3, repeat:-1, ease:Expo.easeOut }),
    ]);

    gsap.fromTo(".main_tit_box .icon_app", { y:-6 }, { y:3, duration:1.4, delay:0.4, repeat:-1, yoyo:true, ease:Power2.easeInOut } );
    gsap.fromTo(".main_tit_box .date_info", { y:40, opacity:0 }, { y:0, opacity:1, duration:1.2, delay:1.4, ease:Expo.easeOut } );
    gsap.fromTo(".main_tit_box .evt_refer", { y:40, opacity:0 }, { y:0, opacity:1, duration:1.2, delay:1.8, ease:Expo.easeOut } );
    gsap.fromTo(".main_tit_box .info_refer", { y:40, opacity:0 }, { y:0, opacity:1, duration:1.6, delay:2, ease:Expo.easeOut } );

    let v_deco01 = new TimelineMax();
    v_deco01.add([
        gsap.fromTo(".visual_conts .deco01", { y:-400, x:-400, opacity:0 }, { y:0, x:0, opacity:0.3, duration:1, ease:Expo.easeOut } ),
    ]).add([
        gsap.fromTo(".visual_conts .deco01", { scale:0.96, opacity:0.3 }, { scale:1, opacity:1, duration:0.8, repeat:-1, yoyo:true, ease:Power2.easeInOut } ),
    ]);

    let v_deco02 = new TimelineMax();
    v_deco02.add([
        gsap.fromTo(".visual_conts .deco02", { y:-400, x:400, opacity:0 }, { y:0, x:0, opacity:1, duration:1, delay:0.2, ease:Expo.easeOut } ),
    ]).add([
        gsap.fromTo(".visual_conts .deco02", { scale:0.96, opacity:1 }, { scale:1, opacity:0.3, duration:0.8, repeat:-1, yoyo:true, ease:Power2.easeInOut } ),
    ]);

    let v_deco03 = new TimelineMax();
    v_deco03.add([
        gsap.fromTo(".visual_conts .deco03", { x:-400, rotation:0, opacity:0 }, { x:0, rotation:-3, opacity:1, duration:2.4, delay:0.2, ease:Expo.easeOut } ),
    ]).add([
        gsap.fromTo(".visual_conts .deco03", { rotation:-3 }, {rotation:1, duration:1.5, repeat:-1, yoyo:true, ease:Power2.easeInOut } ),
    ]);

    let v_deco04 = new TimelineMax();
    v_deco04.add([
        gsap.fromTo(".visual_conts .deco04", { x:400,  rotation:0, opacity:0 }, { x:0, rotation:3, opacity:1, duration:2.4, delay:0.3, ease:Expo.easeOut }),
    ]).add([
        gsap.fromTo(".visual_conts .deco04", { rotation:3 }, { rotation:-2, duration:1.5, repeat:-1, yoyo:true, ease:Power2.easeInOut } ),
    ]);


    // evt_conts
    gsap.fromTo(".deco_step01_01", { rotation:3, opacity:0.7 }, { rotation:-3, opacity:1, duration:1.6, repeat:-1, yoyo:true, transformOrigin:"bottom", ease:Power2.easeInOut } );
    gsap.fromTo(".deco_step01_02", { rotation:-3, opacity:1 }, { rotation:3, opacity:0.5, duration:1.9, repeat:-1, yoyo:true, transformOrigin:"bottom", ease:Power2.easeInOut } );

    gsap.fromTo(".deco_step02_01", { y:-8 }, { y: 5, duration:1.9, repeat:-1, yoyo:true, ease:Power2.easeInOut } );
    gsap.fromTo(".deco_step02_02", { scale:0.96, opacity:0.7 }, { scale:1, opacity:1, duration:1.8, delay:0.2, repeat:-1, yoyo:true, transformOrigin:"bottom", ease:Power2.easeInOut } );
    gsap.fromTo(".deco_step02_03", { scale:1.02, opacity:1 }, { scale:1, opacity:0.6, duration:2, delay:0.6, repeat:-1, yoyo:true, transformOrigin:"bottom", ease:Power2.easeInOut } );

    gsap.fromTo(".deco_step03_01", { rotation:2 }, { rotation:-2, duration:2, repeat:-1, yoyo:true, transformOrigin:"top right", ease:Power2.easeInOut } );
    gsap.fromTo(".deco_step03_02", { rotation:-2 }, { rotation:2, duration:2, repeat:-1, yoyo:true, transformOrigin:"top right", ease:Power2.easeInOut } );

    var $toggle_share = $('#toggle_share'),
        $share_list = $('#share_list');

    $toggle_share.click(function(){
        $(this).toggleClass('on');
        $share_list.stop(true, true).slideToggle(200);
    });
    $('.btn_box .goTop').click(function(){
        $('body,html').animate({scrollTop:0},400);
    });

    $('.btn_box .goBottom').click(function(){
        $('body,html').animate({scrollTop:$('footer').offset().top},400);
    });


});






$(function(){

    AOS.init();
    
    $(window).scroll(function(){
        let st = $(document).scrollTop(); 
        let main_top_wrap = $(".main_top_wrap").outerHeight();
        if( st > main_top_wrap){
            $("#header").addClass("on");
        }else{
            $("#header").removeClass("on");
        }
    }).scroll();
    
    
/* 롤링텍스트*/
    height =  $(".rolling_txt").height();
    num = $(".rolling li").length;
    max = height * num;
    move = 0;
    function rolling(){
        move += height;
        $(".rolling").stop().animate({"top":-move},1200,'easeOutBounce',function(){ 
            if( move >= max ){
                $(this).css("top",0); 
                move = 0;
            };
        });
    };

    rollingOff = setInterval(rolling,1500);
    
    $(window).on("resize", function(){
        
        let w_width = $(window).width();
        height =  $(".rolling_txt").height();
        max = height * num;
        move = 0;
        function rolling(){
            move += height;
            $(".rolling").stop().animate({"top":-move},1000,'easeOutBounce',function(){ 
                if( move >= max ){
                    $(this).css("top",0); 
                    move = 0;
                };
            });
        };

        if( w_width < 1180 && w_width > 420){
            clearInterval(rollingOff);
            height =  77;
            rollingOff = setInterval(rolling,1500);
            

        }else if(w_width <= 440){
            clearInterval(rollingOff);
            height =  40;
            rollingOff = setInterval(rolling,1500);
        }

    }).resize();
    $(".rolling").append($(".rolling li").first().clone()); 

    /* ================================================ 메인텍스트 ================================================ */

    gsap.fromTo(".main_top_wrap .rolling_tit_box", { y : -80, opacity : 0, }, { y : 0, opacity:1, duration : 1, delay : 0.1, ease: Power2.easeInOut  });
        
    // 메인텍스트 이십 -> 20
    let txt_num = new TimelineMax({repeat: -1});
    txt_num.add([
        gsap.to(".animate_txt .txt", { opacity : 0, scale: 0, duration : 0.4, delay : 2, ease: Power2.easeInOut } ),
        gsap.to(".animate_txt .num", { opacity : 1, rotation:720, scale: 1, duration : 0.8, delay : 2, ease: Power2.easeInOut } ),
    ]).add([
        gsap.to(".animate_txt .txt", { opacity : 1, scale: 1, duration : 0.4, delay : 1.8, ease: Bounce.easeInOut } ),
        gsap.to(".animate_txt .num", { opacity : 0, scale: 0, duration : 0.4, delay : 1.8, ease: Power2.easeInOut } ),
    ]);
    // 메인텍스트 옆 반짝이
    gsap.to(".main_top_wrap .star1", 6, {rotation: -360, delay : 0.8, repeat: -1, ease: Expo.easeOut});
    gsap.to(".main_top_wrap .star2", 5, {rotation: 360, delay : 1, repeat: -1, ease: Expo.easeOut});
    gsap.to(".main_top_wrap .star3", 4, {rotation: 360, delay : 0.4, repeat: -1, ease: Expo.easeOut});
    // 해치+ 케이크
    gsap.fromTo(".main_top_wrap .big_hatch", { y : 100, opacity : 0, }, { y : 0, opacity:1, duration : 1.2, delay : 0.9, ease: Expo.easeOut } );
    gsap.fromTo(".main_top_wrap .cake_box", { y : 100, opacity : 0, }, {  y : 0, opacity:1, duration : 1.2, delay : 0.9, ease: Expo.easeOut } );
    gsap.fromTo(".main_top_wrap .cake", { scale: 0.92, x:-20 }, { x:-10, scale: 1, duration : 1.2, delay : 1, ease: Bounce.easeOut } );
    // 케이크 옆 하트
    gsap.fromTo(".main_top_wrap .heart_l", { rotation: -5, scale: 0.85}, { scale: 1, rotation: 5, duration : 0.8, repeat: -1, yoyo: true, ease: Power2.easeInOut } );   
    gsap.fromTo(".main_top_wrap .heart_r", { rotation: 5, scale: 0.85}, { scale: 1, rotation: -5, duration : 0.8, delay : 0.3, repeat: -1, yoyo: true, ease: Power2.easeInOut } );
    // 케이크 숫자
    let num_20 = new TimelineMax();
    num_20.add([
        gsap.fromTo(".main_top_wrap .add .num", { y : 50, opacity : 0, scale: 0.85 }, { y : 0, opacity : 1, scale: 1, duration : 0.6, delay : 1.8, ease: Power2.easeInOut } ),
    ]).add([
        gsap.fromTo(".main_top_wrap .add .num", { y : 0, sacle : 1,}, { y : 4, sacle : 1.2, duration : 0.8, repeat: -1, yoyo: true, ease: Power2.easeInOut } ),
    ]);
    // 케이크 초
    let candle = new TimelineMax();
    candle.add([
        gsap.fromTo(".main_top_wrap .candle_l", { y : -50, opacity : 0, }, {  y : 0, opacity:1, duration : 1, delay : 2, ease: Expo.easeOut } ),
        gsap.fromTo(".main_top_wrap .candle_r", { y : -50, opacity : 0, }, {  y : 0, opacity:1, duration : 1, delay : 2, ease: Expo.easeOut } ),
    ]).add([
        gsap.fromTo(".main_top_wrap .candle_l", { scale: 0.95}, { scale: 1.1, duration : 0.8, repeat: -1, yoyo: true, ease: Power2.easeInOut }),
        gsap.fromTo(".main_top_wrap .candle_r", { scale: 0.95}, { scale: 1.1, rotation: 2, duration : 0.8, repeat: -1, yoyo: true, ease: Power2.easeInOut } ),
    ]);

    // 좌우 상단 큰 폭죽
    gsap.fromTo(".main_top_wrap .firework_l", { y : 10, scale: 0.95, opacity : 0.4, }, { y : 0, scale: 1, opacity:1, duration : 0.6, repeat: -1, yoyo: true, ease: Power2.easeInOut } );
    gsap.fromTo(".main_top_wrap .firework_r", { y : -10, scale: 1, opacity : 0.6, }, { y : 0, scale: 0.95, opacity:1, duration : 0.8,  repeat: -1, yoyo: true, ease: Power2.easeInOut } );
    // 좌우 작은폭죽라인
    gsap.fromTo(".main_top_wrap .firework_m_l", { scale: 0.8, opacity : 0.4, }, { y : 0, scale: 1.1, opacity:1, duration : 1, repeat: -1, yoyo: true, ease: Bounce.easeOut } );
    gsap.fromTo(".main_top_wrap .firework_m_r", { scale: 1.1, opacity : 0.6, }, { y : 0, scale: 0.8, opacity:1, duration : 1, delay : 0.4, repeat: -1, yoyo: true, ease: Bounce.easeOut } );
    // 좌우 하단 폭죽
    gsap.fromTo(".main_top_wrap .firework_lb", { rotation: -3, opacity : 0.8, }, { rotation: 3, opacity : 1, duration : 1.2, repeat: -1, yoyo: true, ease: Power2.easeInOut } );
    gsap.fromTo(".main_top_wrap .firework_rb", { rotation: 3, opacity : 0.8, }, { rotation: -3, opacity : 1, duration : 1.2, repeat: -1, yoyo: true, ease: Power2.easeInOut } );
    // 좌우 커브선
    gsap.fromTo(".main_top_wrap .curve_l", { scale: 0.8, opacity : 0.8, }, { scale: 1, opacity : 1, duration : 1.2, repeat: -1, yoyo: true, ease: Power2.easeInOut } );
    gsap.fromTo(".main_top_wrap .curve_r", { scale: 0.7, opacity : 0.8, }, { scale: 1, opacity : 1, duration : 1.2, repeat: -1, yoyo: true, ease: Power2.easeInOut } );
    
    // 꽃가루
    let tl1 = new TimelineMax({ repeat:-1 }),
        tl2 = new TimelineMax({ repeat:-1, delay:1.5 }),
        tl3 = new TimelineMax({ repeat:-1, delay:3 }),
        tl4 = new TimelineMax({ repeat:-1, delay:4.5 }),
        tl5 = new TimelineMax({ repeat:-1, delay:6 }),
        tl6 = new TimelineMax({ repeat:-1 }),
        tl7 = new TimelineMax({ repeat:-1, delay:1.5 }),
        tl8 = new TimelineMax({ repeat:-1, delay:3 }),
        tl9 = new TimelineMax({ repeat:-1, delay:4.5 }),
        tl10 = new TimelineMax({ repeat:-1, delay:6 });

    let pollen1 = $(".main_top_wrap .p1"),
        pollen2 = $(".main_top_wrap .p2"),
        pollen3 = $(".main_top_wrap .p3"),
        pollen4 = $(".main_top_wrap .p4"),
        pollen5 = $(".main_top_wrap .p5"),
        pollen6 = $(".main_top_wrap .p6"),
        pollen7 = $(".main_top_wrap .p7"),
        pollen8 = $(".main_top_wrap .p8"),
        pollen9 = $(".main_top_wrap .p9"),
        pollen10 = $(".main_top_wrap .p10");

    tl1.add([
        gsap.to( pollen1 , 2, { left: 400, rotation: -10, ease: Power1.easeInOut }),
        gsap.to( pollen1 , 3, { top: "+=250",  ease: Power1.easeOut }),
    ]).add([
        gsap.to( pollen1 , 2, { left: 100, rotation: 10, ease: Power1.easeInOut }),
        gsap.to( pollen1 , 3, { top: "+=250", ease: Power1.easeOut }),
    ]).add([
        gsap.to( pollen1 , 2, { left: 400, rotation: -10, ease: Power1.easeInOut}),
        gsap.to( pollen1 , 3, { top: "+=250", ease: Power1.easeOut }),
    ]).add([
        gsap.to( pollen1 , 2, { left: 100, rotation: 10, ease: Power1.easeInOut }),
        gsap.to( pollen1 , 3, { top: "+=250", ease: Power1.easeOut }),
    ]);

    tl2.add([
        gsap.to( pollen2 , 2, { left: 100, rotation: -10, ease: Power1.easeInOut }),
        gsap.to( pollen2 , 3, { top: "+=250",  ease: Power1.easeOut }),
    ]).add([
        gsap.to( pollen2 , 2, { left: 320, rotation: 10, ease: Power1.easeInOut }),
        gsap.to( pollen2 , 3, { top: "+=250", ease: Power1.easeOut }),
    ]).add([
        gsap.to( pollen2 , 2, { left: 100, rotation: -10, ease: Power1.easeInOut}),
        gsap.to( pollen2 , 3, { top: "+=250", ease: Power1.easeOut }),
    ]).add([
        gsap.to( pollen2 , 2, { left: 320, rotation: 10, ease: Power1.easeInOut }),
        gsap.to( pollen2 , 3, { top: "+=250", ease: Power1.easeOut }),
    ]);

    tl3.add([
        gsap.to( pollen3 , 2, { left: 400, rotation: -10, ease: Power1.easeInOut }),
        gsap.to( pollen3 , 3, { top: "+=250",  ease: Power1.easeOut }),
    ]).add([
        gsap.to( pollen3 , 2, { left: 100, rotation: 10, ease: Power1.easeInOut }),
        gsap.to( pollen3 , 3, { top: "+=250", ease: Power1.easeOut }),
    ]).add([
        gsap.to( pollen3 , 2, { left: 400, rotation: -10, ease: Power1.easeInOut}),
        gsap.to( pollen3 , 3, { top: "+=250", ease: Power1.easeOut }),
    ]).add([
        gsap.to( pollen3 , 2, { left: 100, rotation: 10, ease: Power1.easeInOut }),
        gsap.to( pollen3 , 3, { top: "+=250", ease: Power1.easeOut }),
    ]);

    tl4.add([
        gsap.to( pollen4 , 2, { left: 400, rotation: -10, ease: Power1.easeInOut }),
        gsap.to( pollen4 , 3, { top: "+=250",  ease: Power1.easeOut }),
    ]).add([
        gsap.to( pollen4 , 2, { left: 100, rotation: 10, ease: Power1.easeInOut }),
        gsap.to( pollen4 , 3, { top: "+=250", ease: Power1.easeOut }),
    ]).add([
        gsap.to( pollen4 , 2, { left: 400, rotation: -10, ease: Power1.easeInOut}),
        gsap.to( pollen4 , 3, { top: "+=250", ease: Power1.easeOut }),
    ]).add([
        gsap.to( pollen4 , 2, { left: 100, rotation: 10, ease: Power1.easeInOut }),
        gsap.to( pollen4 , 3, { top: "+=250", ease: Power1.easeOut }),
    ]);

    tl5.add([
        gsap.to( pollen5 , 2, { left: 400, rotation: -10, ease: Power1.easeInOut }),
        gsap.to( pollen5 , 3, { top: "+=250",  ease: Power1.easeOut }),
    ]).add([
        gsap.to( pollen5 , 2, { left: 100, rotation: 10, ease: Power1.easeInOut }),
        gsap.to( pollen5 , 3, { top: "+=250", ease: Power1.easeOut }),
    ]).add([
        gsap.to( pollen5 , 2, { left: 400, rotation: -10, ease: Power1.easeInOut}),
        gsap.to( pollen5 , 3, { top: "+=250", ease: Power1.easeOut }),
    ]).add([
        gsap.to( pollen5 , 2, { left: 100, rotation: 10, ease: Power1.easeInOut }),
        gsap.to( pollen5 , 3, { top: "+=250", ease: Power1.easeOut }),
    ]);

    tl6.add([
        gsap.to( pollen6 , 2, { right: 400, rotation: -10, ease: Power1.easeInOut }),
        gsap.to( pollen6 , 3, { top: "+=250",  ease: Power1.easeOut }),
    ]).add([
        gsap.to( pollen6 , 2, { right: 100, rotation: 10, ease: Power1.easeInOut }),
        gsap.to( pollen6 , 3, { top: "+=250", ease: Power1.easeOut }),
    ]).add([
        gsap.to( pollen6 , 2, { right: 400, rotation: -10, ease: Power1.easeInOut}),
        gsap.to( pollen6 , 3, { top: "+=250", ease: Power1.easeOut }),
    ]).add([
        gsap.to( pollen6 , 2, { right: 100, rotation: 10, ease: Power1.easeInOut }),
        gsap.to( pollen6 , 3, { top: "+=250", ease: Power1.easeOut }),
    ]);

    tl7.add([
        gsap.to( pollen7 , 2, { right: 100, rotation: -10, ease: Power1.easeInOut }),
        gsap.to( pollen7 , 3, { top: "+=250",  ease: Power1.easeOut }),
    ]).add([
        gsap.to( pollen7 , 2, { right: 320, rotation: 10, ease: Power1.easeInOut }),
        gsap.to( pollen7 , 3, { top: "+=250", ease: Power1.easeOut }),
    ]).add([
        gsap.to( pollen7 , 2, { right: 100, rotation: -10, ease: Power1.easeInOut}),
        gsap.to( pollen7 , 3, { top: "+=250", ease: Power1.easeOut }),
    ]).add([
        gsap.to( pollen7 , 2, { right: 320, rotation: 10, ease: Power1.easeInOut }),
        gsap.to( pollen7 , 3, { top: "+=250", ease: Power1.easeOut }),
    ]);

    tl8.add([
        gsap.to( pollen8 , 2, { right: 400, rotation: -10, ease: Power1.easeInOut }),
        gsap.to( pollen8 , 3, { top: "+=250",  ease: Power1.easeOut }),
    ]).add([
        gsap.to( pollen8 , 2, { right: 100, rotation: 10, ease: Power1.easeInOut }),
        gsap.to( pollen8 , 3, { top: "+=250", ease: Power1.easeOut }),
    ]).add([
        gsap.to( pollen8 , 2, { right: 400, rotation: -10, ease: Power1.easeInOut}),
        gsap.to( pollen8 , 3, { top: "+=250", ease: Power1.easeOut }),
    ]).add([
        gsap.to( pollen8 , 2, { right: 100, rotation: 10, ease: Power1.easeInOut }),
        gsap.to( pollen8 , 3, { top: "+=250", ease: Power1.easeOut }),
    ]);

    tl9.add([
        gsap.to( pollen9 , 2, { right: 400, rotation: -10, ease: Power1.easeInOut }),
        gsap.to( pollen9 , 3, { top: "+=250",  ease: Power1.easeOut }),
    ]).add([
        gsap.to( pollen9 , 2, { right: 100, rotation: 10, ease: Power1.easeInOut }),
        gsap.to( pollen9 , 3, { top: "+=250", ease: Power1.easeOut }),
    ]).add([
        gsap.to( pollen9 , 2, { right: 400, rotation: -10, ease: Power1.easeInOut}),
        gsap.to( pollen9 , 3, { top: "+=250", ease: Power1.easeOut }),
    ]).add([
        gsap.to( pollen9 , 2, { right: 100, rotation: 10, ease: Power1.easeInOut }),
        gsap.to( pollen9 , 3, { top: "+=250", ease: Power1.easeOut }),
    ]);

    tl10.add([
        gsap.to( pollen10 , 2, { right: 400, rotation: -10, ease: Power1.easeInOut }),
        gsap.to( pollen10 , 3, { top: "+=250",  ease: Power1.easeOut }),
    ]).add([
        gsap.to( pollen10 , 2, { right: 100, rotation: 10, ease: Power1.easeInOut }),
        gsap.to( pollen10 , 3, { top: "+=250", ease: Power1.easeOut }),
    ]).add([
        gsap.to( pollen10 , 2, { right: 400, rotation: -10, ease: Power1.easeInOut}),
        gsap.to( pollen10 , 3, { top: "+=250", ease: Power1.easeOut }),
    ]).add([
        gsap.to( pollen10 , 2, { right: 100, rotation: 10, ease: Power1.easeInOut }),
        gsap.to( pollen10 , 3, { top: "+=250", ease: Power1.easeOut }),
    ]);


    /* ================================================ 영상영역 ================================================ */
    gsap.fromTo(".video_wrap .b_donut_l", { y: 12 }, { y: 0, duration : 1.2, delay : 0.3, repeat: -1, yoyo: true, ease: Power2.easeInOut } );
    gsap.fromTo(".video_wrap .p_gift", { y: 20 }, { y: 0, duration : 1.2, repeat: -1, yoyo: true, ease: Power2.easeInOut } );
    gsap.fromTo(".video_wrap .o_donut_l", { y: 12 }, { y: 0, duration : 1.2, delay : 0.9, repeat: -1, yoyo: true, ease: Power2.easeInOut } );
    gsap.fromTo(".video_wrap .o_donut_r", { y: -12 }, { y: 0, duration : 1.2, delay : 0.8, repeat: -1, yoyo: true, ease: Power2.easeInOut } );
    gsap.fromTo(".video_wrap .b_gift", { y: -20 }, { y: 0, duration : 1.2, repeat: -1, yoyo: true, ease: Power2.easeInOut } );
    gsap.fromTo(".video_wrap .b_donut_r", { y: -12 }, { y: 0, duration : 1.2, delay : 0.4, repeat: -1, yoyo: true, ease: Power2.easeInOut } );

    /* ================================================ 출석체크영역 ================================================ */
    gsap.fromTo(".attend_wrap .balloon_p", { y : 12, x : 8, rotation: -6, }, { y : -10, x : 0, rotation: 3, duration : 2.5, repeat: -1, yoyo: true, ease: Power2.easeInOut } );
    gsap.fromTo(".attend_wrap .balloon_b", { y : 20, x : 8, rotation: 3, }, { y : -20, x : 0, rotation: -3, duration : 3, repeat: -1, yoyo: true, ease: Power2.easeInOut } );
    gsap.fromTo(".attend_wrap .balloon_y", { y : 20, x : -8, rotation: 5, }, { y : -20, x : 0, rotation: -5, duration : 3, repeat: -1, yoyo: true, ease: Power2.easeInOut } );
    gsap.fromTo(".attend_wrap .cricle_rt", { scale:1 }, { scale: 1.1, duration : 2.5, repeat: -1, yoyo: true } );
    gsap.fromTo(".attend_wrap .cricle_lb", { scale:1 }, { scale: 1.1, duration : 2.5, repeat: -1, yoyo: true } );


    /* ================================================ 내손 뉴스 ================================================ */
    /*$("body").on("click",".news_list_wrap .like", function(e){
        e.preventDefault();
        $(this).toggleClass("on");
    });*/


    /* ================================================ 숫자 카운트 ================================================ */
    gsap.fromTo(".counting_wrap .big_lt", { y : 80, x : 8, scale:1, opacity: 0, }, { y : -20, x : 0, scale:1.2, opacity: 1, duration : 1.2, repeat: -1, yoyo: true, ease: "circ.out", } );
    gsap.fromTo(".counting_wrap .big_rt", { y : -20, x : 8, scale:1, opacity: 0, }, { y :0, x : 0, scale:1.2, opacity: 1, duration : 2, repeat: -1, yoyo: true, ease: "circ.out", } );
    gsap.fromTo(".counting_wrap .big_rb", { y : 20, x : 8, scale:1, opacity: 0, }, { y : 0, x : 0, scale:1.2, opacity: 1, duration : 1.8, repeat: -1, yoyo: true, ease: "circ.out", } );

    gsap.to(".counting_wrap .sm_rt", { opacity : 1, rotation: 360, scale: 1, duration : 3, repeat: -1, yoyo: true, ease: "circ.out", } ),
    gsap.to(".counting_wrap .sm_lb", { opacity : 1, rotation: -360, scale: 1, duration : 3, repeat: -1, yoyo: true, ease: Power2.easeInOut } );


    //3자리마다 , 찍기
    function num_commas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    function counting(){
        let count_num01 = parseInt($('.count01').text()),
            count_num02 = parseInt($('.count02').text()),
            count_num03 = parseInt($('.count03').text()),
            count_num04 = parseInt($('.count04').text());

        $('.count01').text(num_commas(count_num01));
        $('.count01').counterUp({
            delay: 10,
            time: 2000
        });

        $('.count02').text(num_commas(count_num02));
        $('.count02').counterUp({
            delay: 20,
            time: 2000
        });

        $('.count03').text(num_commas(count_num03));
        $('.count03').counterUp({
            delay: 30,
            time: 2000
        });

        $('.count04').text(num_commas(count_num04));
        $('.count04').counterUp({
            delay: 40,
            time: 2000
        });
    }
    counting();





});










