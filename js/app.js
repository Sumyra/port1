$(function(){
  $('.revSlider').slick({
    dots : false ,
    arrows : true ,
    prevArrow:'#review .arrows .leftArrows',
    nextArrow:"#review .arrows .rightArrows",
    slidesToShow : 3 ,
    slidesToScroll : 3,
  }) 
  $('.portfolioSlider').slick({
    slidesToScroll : 3 ,
    slidesToShow : 3,
    dots : true ,
    arrows : true ,
    prevArrow:'#portfolio .arrows .leftArrows',
    nextArrow:"#portfolio .arrows .rightArrows",
      
  })
  let leA = $('.leftArrows')
  let riA = $('.rightArrows')
  let arW = $('.arrows')

  arW.click(function(){
    leA.toggleClass('activeArrow');
  })

  $('body').stoockyPage();

let para = $('a')
para.click(function(){
  $(this).toggleClass('active');
})






  













})
