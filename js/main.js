
// const ScrollMagic = require('scrollmagic');

// let controller = new ScrollMagic.Controller();

// let scene = new ScrollMagic.Scene({
//   triggerElement: '#js-trigger-header',
//   triggerHook: 'onLeave',
//   offset: 500
// }).setClassToggle('#js-header', 'topbar')
// .addTo(controller);



let col = false;
let button = document.getElementById('toggle-collapsed')
button.addEventListener('click',function(ev){
  if (!col){
  document.getElementsByClassName('australiatime')[0].classList.add('collapse');
  document.getElementsByClassName('regulartime')[0].classList.add('collapse');
  col = true;
} else{
    document.getElementsByClassName('australiatime')[0].classList.remove('collapse');
    document.getElementsByClassName('regulartime')[0].classList.remove('collapse');
  col = false;
  }
});


// let durationScene = new ScrollMagic.Scene({
//   triggerElement: '#trigger-2',
//     triggerHook: 'onLeave',
//   duration: 1000
// }).on("enter", () => {
//   console.log('Do Something on Enter');
//   // Do something
// }).on('leave', () => {
//   // Do something
//   console.log('Do Something on leave');
// }).addIndicators()
// .addTo(controller);