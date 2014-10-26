///NAV SOUNDS///
$("#nav-two a")
  .each(function (i) {
      if (i != 0) {
          $("#beep-two")
            .clone()
            .attr("id", "beep-two" + i)
            .appendTo($(this).parent());
      }
      $(this).data("beeper", i);
  })
  .mouseenter(function () {
      $("#beep-two" + $(this).data("beeper"))[0].play();
  });
$("#beep-two").attr("id", "beep-two0");

///TROLOLO
var playSoundTrololo = document.getElementById('partners-trololo');
var audioTrololo = document.getElementById('partners-trololo-audio');
playSoundTrololo.onmouseover = function () {
    audioTrololo.play();
}
playSoundTrololo.onmouseout = function () {
    audioTrololo.pause();
    audioTrololo.currentTime = 0;
}
///RICK-ROLL
var playSoundRick = document.getElementById('partners-rick-roll');
var audioRick = document.getElementById('partners-rick-roll-audio');
playSoundRick.onmouseover = function () {
    audioRick.play();
}
playSoundRick.onmouseout = function () {
    audioRick.pause();
    audioRick.currentTime = 0;
}
///DJORDJANO
var playSoundDjordjano = document.getElementById('partners-djordjano');
var audioDjordjano = document.getElementById('partners-djordjano-audio');
playSoundDjordjano.onmouseover = function () {
    audioDjordjano.play();
}
playSoundDjordjano.onmouseout = function () {
    audioDjordjano.pause();
    audioDjordjano.currentTime = 0;
}
///3 PAC
var playSound3pac = document.getElementById('partners-3pac');
var audio3pac = document.getElementById('partners-3pac-audio');
playSound3pac.onmouseover = function () {
    audio3pac.play();
}
playSound3pac.onmouseout = function () {
    audio3pac.pause();
    audio3pac.currentTime = 0;
}
///