$(document).ready(function () {
  $('select').styler();

  $('.main-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    dots: true,
    autoplay: true
  });

  // plus btn - main page
  $('.descrbox .descrbox__btn').click(function () {
    $(this).toggleClass('minus-ic');
    $(this).next('.descr-info').toggle();
  });

  // reviews slider

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          // slidesToShow: 1,
          // slidesToScroll: 1
          variableWidth: true
        }
      }
    ]
  });


  // CALC
  // next
  $('.step1 .tanspar-btn').click(function (e) {
    e.preventDefault()
    $('.stepcalc').addClass('hide');
    $('.step2').removeClass('hide');
    $('.calcnav-numstep span:nth-child(2)').addClass('active');

    $('.calcnav-box .calcnav-point:first-child').removeClass('active').addClass('checked');
    $('.calcnav-box .calcnav-point:nth-child(2)').addClass('active');

    $('.calcnav .calcnav-box .before').css('width', '50%');
  });

  $('.step2 .tanspar-btn').click(function (e) {
    e.preventDefault()
    $('.stepcalc').addClass('hide');
    $('.step3').removeClass('hide');
    $('.calcnav-numstep span:nth-child(3)').addClass('active');

    $('.calcnav-box .calcnav-point:nth-child(2)').removeClass('active').addClass('checked');
    $('.calcnav-box .calcnav-point:nth-child(3)').addClass('active');

    $('.calcnav .calcnav-box .before').css('width', '100%');
  });

  // back
  $('.step2 .calcback').click(function (e) {
    $('.stepcalc').addClass('hide');
    $('.step1').removeClass('hide');

    $('.calcnav-numstep span:nth-child(2)').removeClass('active');

    $('.calcnav-box .calcnav-point:first-child').addClass('active').removeClass('checked');
    $('.calcnav-box .calcnav-point:nth-child(2)').removeClass('active');

    $('.calcnav .calcnav-box .before').css('width', 0);

  });
  $('.step3 .calcback').click(function (e) {
    $('.stepcalc').addClass('hide');
    $('.step2').removeClass('hide');

    $('.calcnav-numstep span:nth-child(3)').removeClass('active');

    $('.calcnav-box .calcnav-point:nth-child(2)').addClass('active').removeClass('checked');
    $('.calcnav-box .calcnav-point:nth-child(3)').removeClass('active');

    $('.calcnav .calcnav-box .before').css('width', '50%');
  });

  // BUILDnow SLIDER
  $('.buildnow-slider').slick({
    centerPadding: '0',
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    speed: 500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        }
      }
    ]
  });

  $('.builded-slider1').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    // focusOnSelect: true,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          // slidesToScroll: 1
        }
      }
    ]
  });
  $('.builded-slider2').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    // focusOnSelect: true,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          // slidesToScroll: 1
        }
      }
    ]
  });

  // stop youtube video
  $('#videopop.modal1 button.close').click(function () {
    $('.yvideo').each(function () {
      var el_src = $(this).attr("src");
      $(this).attr("src", el_src);
    });
  });

  $(document).click(function (event) {
    let $target = $(event.target);
    if (!$target.closest('#videopop.modal1 .modal-content').length) {
      $('.yvideo').each(function () {
        var el_src = $(this).attr("src");
        $(this).attr("src", el_src);
      });
    }
  });

  $('#video-review button.close').click(function () {
    $('.yvideo').each(function () {
      var el_src = $(this).attr("src");
      $(this).attr("src", el_src);
    });
  });

  $(document).click(function (event) {
    let $target = $(event.target);
    if (!$target.closest('#video-review .modal-content').length) {
      $('.yvideo').each(function () {
        var el_src = $(this).attr("src");
        $(this).attr("src", el_src);
      });
    }
  });

  // // show more
  $('.advplus .phonemore span.more').click(function () {
    $('.advplus .row .col-lg-6:not(:first-child)').show();
    // $(this).hide();
    // $('.advplus .phonemore span.less').show();
  });
  $('.advplus .phonemore span.less').click(function () {
    $('.advplus .row .col-lg-6:not(:first-child)').hide();
    // $(this).hide();
    // $('.advplus .phonemore span.more').show();
  });

  // // -
  $('.comf-house .phonemore span.more').click(function () {
    $('.comf-house .row.descrtext').addClass('showcont');
    // $(this).hide();
    // $('.comf-house .phonemore span.less').show();
  });
  $('.comf-house .phonemore span.less').click(function () {
    $('.comf-house .row.descrtext').removeClass('showcont');
    // $(this).hide();
    // $('.comf-house .phonemore span.more').show();
  });
  // // -
  // $('.secretsect .phonemore span.more').click(function(){
  //   $('.secretsect .row.secretsect__descr').addClass('showcont');
  //   $(this).hide();
  //   $('.secretsect .phonemore span.less').show();
  // });
  // $('.secretsect .phonemore span.less').click(function(){
  //   $('.secretsect .row.secretsect__descr').removeClass('showcont');
  //   $(this).hide();
  //   $('.secretsect .phonemore span.more').show();
  // });
  // // 

  // menu
  $('.burger').click(function () {
    $('.mobilemenu').addClass('showmenu');
    $('body').addClass('bodyhidden');
  });

  $('.closemenu').click(function () {
    $('.mobilemenu').removeClass('showmenu');
    $('body').removeClass('bodyhidden');
  });

  // zoom
  if ($('body').is('.descrbox__built')) {
    $('[data-fancybox]').fancybox({
      toolbar: false,
      smallBtn: true,
      gutter: 10,
      // iframe : {
      // 	preload : false
      // }

    });
  }


  // price page

  $('.prtitlerow').click(function () {
    $(this).not('.nodrop').toggleClass('show');
    $(this).parents('.col-lg-6').siblings('.descrrow').slideToggle();
  });


  $('.phonemore span.more').click(function () {
    $(this).hide();
    $(this).parents('.phonemore').find('.less').show();
    $(this).parents('.container').find('.secretsect__descr').addClass('showcont');
  });


  $('.phonemore span.less').click(function () {
    $(this).hide();
    $(this).parents('.phonemore').find('.more').show();
    $(this).parents('.container').find('.secretsect__descr').removeClass('showcont');
  });

  // fix header
  var scroll = $(window).scrollTop();

  if (scroll >= 50) {
    $("header.header").addClass("fixed ");
  } else {
    $("header.header").removeClass("fixed");
  }

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
      $("header.header").addClass("fixed ");
    } else {
      $("header.header").removeClass("fixed");
    }
  });


  var winWidth = $(window).width(),
    containerWidth = $('.container').width(),
    paddLeft = (winWidth - containerWidth) / 2;
  $('.header .phonebtn').css('right', paddLeft + 'px');


  $(window).resize(function () {
    var winWidth = $(window).width(),
      containerWidth = $('.container').width(),
      paddLeft = (winWidth - containerWidth) / 2;
    $('.header .phonebtn').css('right', paddLeft + 'px');
  });



  $('.adaptive-headsect .phonebtn').click(function () {
    $(this).next('.header__phonebox').toggle();
  });
  $('.mobilemenu__header .phonebtn').click(function () {
    $(this).next('.mobilemenu__header .header__phonebox ').toggle();
  });

  // TABS
  $('.turnkeytabs__header-tab').click(function () {
    $('.turnkeytabs__header-tab').removeClass('active');
    $(this).addClass('active');

    if ($('.tabbtn1').hasClass('active')) {
      $('.tab1').show();
      $('.tab2, .tab3').hide();
    } else if ($('.tabbtn2').hasClass('active')) {
      $('.tab2').show();
      $('.tab1, .tab3').hide();
    } else if ($('.tabbtn3').hasClass('active')) {
      $('.tab3').show();
      $('.tab2, .tab1').hide();
    }

  });

  // more pic
  $('.phonemore.keyshowpic .more').click(function () {
    $('.turnkeypics .col-lg-3:nth-last-child(-n+4)').show();
  });
  $('.phonemore.keyshowpic .less').click(function () {
    $('.turnkeypics .col-lg-3:nth-last-child(-n+4)').hide();
  });


  if ($(window).width() < 576) {
    $('.turnkeytabs__infobox-title').click(function () {
      $(this).next('.turnkeytabs__infobox-descr').slideToggle();
      $(this).find('p img').toggleClass('rot');
    });
  }



  $('#telnum, #telnum-cons').inputmask({
    "mask": "99 /999/ 999-9999",
    showMaskOnHover: false,
    showMaskOnFocus: false,
  });



  $('.mobilemenu__header-body ul.mobilemenu__nav li').click(function(){
    $(this).children('.submenu').slideToggle();
  });


















});