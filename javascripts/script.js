// спрятать бабулю и деда
$(document).ready(function(){
  $(".ba1").click(function(){
        $(".s1").addClass("classSPRYATAT");
        $(".s2").removeClass("classSPRYATAT");
        $(".s2").addClass("classPOKAZAT");
     });

     $(".de1").click(function(){
           $(".s1").addClass("classSPRYATAT");
           $(".s3").removeClass("classSPRYATAT");
           $(".s3").addClass("classPOKAZAT");
        });

});

$(function () {
    $('.next').on('click', function () {
        let sliderNumber = $(this).closest('.container');
        let currentImage = sliderNumber.find('.slider__img.current');
        let currentIndex = sliderNumber.find('.slider__img.current').index();
        let nextIndex = currentIndex + 1;
        let nextImage = sliderNumber.find('.slider__img').eq(nextIndex);
        currentImage.fadeOut(500);
        currentImage.removeClass('current');

        if(nextIndex == 3)
        {
          nextIndex = 0;
        }

        sliderNumber.find('.slider__img').eq(nextIndex).fadeIn(500);
        sliderNumber.find('.slider__img').eq(nextIndex).addClass('current');
    });

    $('.prev').on('click', function () {
          let sliderNumber = $(this).closest('.container');
          let currentImage = sliderNumber.find('.slider__img.current');
          let currentIndex = sliderNumber.find('.slider__img.current').index();
          let prevIndex = currentIndex - 1;
          let prevImage = sliderNumber.find('.slider__img').eq(prevIndex);
          currentImage.fadeOut(500);
          currentImage.removeClass('current');

          if(prevIndex == -1)
          {
              prevIndex = 2;
          }

          sliderNumber.find('.slider__img').eq(prevIndex).fadeIn(500);
          sliderNumber.find('.slider__img').eq(prevIndex).addClass('current');
      });
    $('body').on('click', '.button__finish', function () {
        let allGood = true;
        let currentImage = $('.slider__img.current');
        currentImage.each(function () {
            if($(this).attr('data-img') == 'bad') {
                allGood = false;
                return false
            }
        })
        if(allGood) {
            $('.container').remove();
            $(this).remove();
            $('.slider__good').show();
        }
        else {
            $('.container').remove();
            $(this).remove();
            $('.slider__error').show();
        }
    })
});
