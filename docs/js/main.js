(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

// const ScrollMagic = require('scrollmagic');
// let controller = new ScrollMagic.Controller();
// let scene = new ScrollMagic.Scene({
//   triggerElement: '#js-trigger-header',
//   triggerHook: 'onLeave',
//   offset: 500
// }).setClassToggle('#js-header', 'topbar')
// .addTo(controller);
var col = false;
var button = document.getElementById('toggle-collapsed');
button.addEventListener('click', function (ev) {
  if (!col) {
    document.getElementsByClassName('australiatime')[0].classList.add('collapse');
    document.getElementsByClassName('regulartime')[0].classList.add('collapse');
    col = true;
  } else {
    document.getElementsByClassName('australiatime')[0].classList.remove('collapse');
    document.getElementsByClassName('regulartime')[0].classList.remove('collapse');
    col = false;
  }
}); // let durationScene = new ScrollMagic.Scene({
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUEsSUFBSSxHQUFHLEdBQUcsS0FBVjtBQUNBLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFULENBQXdCLGtCQUF4QixDQUFiO0FBQ0EsTUFBTSxDQUFDLGdCQUFQLENBQXdCLE9BQXhCLEVBQWdDLFVBQVMsRUFBVCxFQUFZO0FBQzFDLE1BQUksQ0FBQyxHQUFMLEVBQVM7QUFDVCxJQUFBLFFBQVEsQ0FBQyxzQkFBVCxDQUFnQyxlQUFoQyxFQUFpRCxDQUFqRCxFQUFvRCxTQUFwRCxDQUE4RCxHQUE5RCxDQUFrRSxVQUFsRTtBQUNBLElBQUEsUUFBUSxDQUFDLHNCQUFULENBQWdDLGFBQWhDLEVBQStDLENBQS9DLEVBQWtELFNBQWxELENBQTRELEdBQTVELENBQWdFLFVBQWhFO0FBQ0EsSUFBQSxHQUFHLEdBQUcsSUFBTjtBQUNELEdBSkMsTUFJSTtBQUNGLElBQUEsUUFBUSxDQUFDLHNCQUFULENBQWdDLGVBQWhDLEVBQWlELENBQWpELEVBQW9ELFNBQXBELENBQThELE1BQTlELENBQXFFLFVBQXJFO0FBQ0EsSUFBQSxRQUFRLENBQUMsc0JBQVQsQ0FBZ0MsYUFBaEMsRUFBK0MsQ0FBL0MsRUFBa0QsU0FBbEQsQ0FBNEQsTUFBNUQsQ0FBbUUsVUFBbkU7QUFDRixJQUFBLEdBQUcsR0FBRyxLQUFOO0FBQ0M7QUFDRixDQVZELEUsQ0FhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJcclxuLy8gY29uc3QgU2Nyb2xsTWFnaWMgPSByZXF1aXJlKCdzY3JvbGxtYWdpYycpO1xyXG5cclxuLy8gbGV0IGNvbnRyb2xsZXIgPSBuZXcgU2Nyb2xsTWFnaWMuQ29udHJvbGxlcigpO1xyXG5cclxuLy8gbGV0IHNjZW5lID0gbmV3IFNjcm9sbE1hZ2ljLlNjZW5lKHtcclxuLy8gICB0cmlnZ2VyRWxlbWVudDogJyNqcy10cmlnZ2VyLWhlYWRlcicsXHJcbi8vICAgdHJpZ2dlckhvb2s6ICdvbkxlYXZlJyxcclxuLy8gICBvZmZzZXQ6IDUwMFxyXG4vLyB9KS5zZXRDbGFzc1RvZ2dsZSgnI2pzLWhlYWRlcicsICd0b3BiYXInKVxyXG4vLyAuYWRkVG8oY29udHJvbGxlcik7XHJcblxyXG5cclxuXHJcbmxldCBjb2wgPSBmYWxzZTtcclxubGV0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2dnbGUtY29sbGFwc2VkJylcclxuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbihldil7XHJcbiAgaWYgKCFjb2wpe1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2F1c3RyYWxpYXRpbWUnKVswXS5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZScpO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3JlZ3VsYXJ0aW1lJylbMF0uY2xhc3NMaXN0LmFkZCgnY29sbGFwc2UnKTtcclxuICBjb2wgPSB0cnVlO1xyXG59IGVsc2V7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhdXN0cmFsaWF0aW1lJylbMF0uY2xhc3NMaXN0LnJlbW92ZSgnY29sbGFwc2UnKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3JlZ3VsYXJ0aW1lJylbMF0uY2xhc3NMaXN0LnJlbW92ZSgnY29sbGFwc2UnKTtcclxuICBjb2wgPSBmYWxzZTtcclxuICB9XHJcbn0pO1xyXG5cclxuXHJcbi8vIGxldCBkdXJhdGlvblNjZW5lID0gbmV3IFNjcm9sbE1hZ2ljLlNjZW5lKHtcclxuLy8gICB0cmlnZ2VyRWxlbWVudDogJyN0cmlnZ2VyLTInLFxyXG4vLyAgICAgdHJpZ2dlckhvb2s6ICdvbkxlYXZlJyxcclxuLy8gICBkdXJhdGlvbjogMTAwMFxyXG4vLyB9KS5vbihcImVudGVyXCIsICgpID0+IHtcclxuLy8gICBjb25zb2xlLmxvZygnRG8gU29tZXRoaW5nIG9uIEVudGVyJyk7XHJcbi8vICAgLy8gRG8gc29tZXRoaW5nXHJcbi8vIH0pLm9uKCdsZWF2ZScsICgpID0+IHtcclxuLy8gICAvLyBEbyBzb21ldGhpbmdcclxuLy8gICBjb25zb2xlLmxvZygnRG8gU29tZXRoaW5nIG9uIGxlYXZlJyk7XHJcbi8vIH0pLmFkZEluZGljYXRvcnMoKVxyXG4vLyAuYWRkVG8oY29udHJvbGxlcik7Il19
