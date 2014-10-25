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
var playSound = document.getElementById('partners-trololo');
var audio = document.getElementById('partners-trololo-audio');
playSound.onmouseover = function () {
    audio.play();
}
playSound.onmouseout = function () {
    audio.pause();
    audio.currentTime = 0;
}
///RICK-ROLL
var playSound = document.getElementById('partners-trololo');
var audio = document.getElementById('partners-trololo-audio');
playSound.onmouseover = function () {
    audio.play();
}
playSound.onmouseout = function () {
    audio.pause();
    audio.currentTime = 0;
}
///DJORDJANO
var playSound = document.getElementById('partners-trololo');
var audio = document.getElementById('partners-trololo-audio');
playSound.onmouseover = function () {
    audio.play();
}
playSound.onmouseout = function () {
    audio.pause();
    audio.currentTime = 0;
}
///3 PAC
var playSound = document.getElementById('partners-trololo');
var audio = document.getElementById('partners-trololo-audio');
playSound.onmouseover = function () {
    audio.play();
}
playSound.onmouseout = function () {
    audio.pause();
    audio.currentTime = 0;
}
///