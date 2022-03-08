const swiper = new Swiper('.swiper', {
    // 옵션
    direction: 'horizontal',
    effect: 'fade',
    loop: true,
    autoplay: {
        delay:7000
    },
  
    // 하단 버튼 UI
    pagination: {
      el: '.swiper-pagination',
    },
  
    // 방향화살표
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
});