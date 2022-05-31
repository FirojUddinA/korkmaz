$(document).ready(() => {
 

  var swiper = new Swiper(".product_swiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper(".testimonial_swipe", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });




  var swiper2 = new Swiper(".produit_swiper_thumb", {
    spaceBetween: 5,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper3 = new Swiper(".product_swiper", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper2,
    },
  });

  $('.mega_menu').click(function () {
    $('.mega_menu_content').toggleClass('show_megamenu');
    $(this).toggleClass('active')
  });
  $('.back_btn').click(function () {
    $('.fixed_navigation .nav_content').toggleClass('open_fic');
  });
  $('.toggle_annonces').click(function () {
    $(this).toggleClass('active');
    $(this).siblings('.a_description').slideToggle();
  });

  $('.sandbox-container .input-group.date').datepicker({});

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  let cs = $('.custom_select');
  let csMenu = $('.select_menu');
  let csMenuOpt = $('.select_menu li')

  cs.click(function () {
    $(this).attr('tabindex', 1).focus();
    $(this).toggleClass('active');
    $(this).children('.select_menu').slideToggle(300);
  })
  cs.focusout(function () {
    $(this).removeClass('active');
    $(this).children('.select_menu').slideUp(300);
  })
  csMenuOpt.click(function () {
    $(this).parents('.custom_select').find('.selected').html($(this).html());
    $(this).parents('.custom_select').find('.data_input').attr('value', $(this).attr('id'));
  })


  $('#sandbox-container .input-group.date').datepicker({});


  $('.filter_modal button').click(function () {
    $(this).parents('.filter_modal').find('.modal_content').toggleClass('active');
    $(this).toggleClass('active')
  });


});

$(function () {
  $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");


});

$(function() {
  $('#datepicker1').datepicker();
  $('#datepicker2').datepicker();
  $('#datepicker3').datepicker();
  $('#datepicker4').datepicker();
});


$(document).ready(function () {

  $("input.file_uploa").on('change', function () {
    let reader = new FileReader();
    var image_sorce = '';
    var parent = $(this).parents('.main_img');
    reader.addEventListener('load', () => {
      image_sorce = reader.result;
      parent.find('.up_image').attr('src', image_sorce);
      parent.find('.uploaded_image').css("z-index", "8");
      parent.addClass('used');
      // alert(image_sorce);
    })
    reader.readAsDataURL(this.files[0]);
  });
  $('body').on('change', 'input[class^="file_upload"]', function () {
    let reader = new FileReader();
    var image_sorce = '';
    var parent = $(this).parents('.main_img');
    reader.addEventListener('load', () => {
      image_sorce = reader.result;
      parent.find('.up_image').attr('src', image_sorce);
      parent.find('.uploaded_image').css("z-index", "8");
      parent.addClass('used');

    })
    reader.readAsDataURL(this.files[0]);
    console.log($(this).attr("id"))
    var id_num = $(this).attr("id")
    var lastChar = id_num.substring(10);
    lastChar = parseInt(lastChar) + 1
    console.log(lastChar)
    var item_length = $('#more_images').children().length;
    let image_10 = '<div class="main_img"><label for="main_image' + lastChar + '"><input class="file_upload' + lastChar + '" id="main_image' + lastChar + '" name="file_cover" type="file"> <img id="previewImg" src="./img/svg/phote_up.svg" alt=""></label> <div class="uploaded_image"> <img src="./img/white.jpg" alt="" class="up_image"> <label for="main_image' + lastChar + '" class="action_button edit">  <span class="ic_con icon-lead-pencil"></span></label> <button class="action_button delete"> <span class="ic_con icon-trash-can-outline"></span> </button></div></div>';
    if (item_length < 10 && parent.hasClass('used') == false) {
      $('#more_images').append(image_10);
    }

    console.log(parent.hasClass('used'));

  });

  $('body').on('click', '.product_image .action_button.delete', function () {

    var parent = $(this).parents('.main_img');
    parent.find('.up_image').attr('src', './img/white.jpg');
    parent.find('input[type="file"]').val('');
    parent.find('.uploaded_image').css("z-index", "5");
  })
  $('body').on('click', '#more_images .action_button.delete', function () {

    var parent = $(this).parents('.main_img');
    parent.remove();
  })
});