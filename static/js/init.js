var swiper = new Swiper('.swiper-container', {
  on: {
    slideChangeTransitionEnd: function(){
      // console.log(this.activeIndex)
      document.querySelector('.mynav').style.opacity = this.activeIndex ? '1' : '0'
    },
  },
  direction: 'vertical',
  keyboard: {
    enabled: true,
  },
  mousewheel: true,
});

$(document).keydown(function (event) {
  if (event.target.nodeName == 'TEXTAREA' || event.target.nodeName == 'INPUT') {
    return;
  };
  /* Act on the event */
  if (event.keyCode == 32) {
    event.preventDefault();
  };
});