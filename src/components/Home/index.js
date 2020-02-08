import $ from "jquery";

$(document).ready(function() {
  let texts = [
    "{ Full Stack Developers }",
    "{ Mobile Application Developers }",
    "{ Ux Ui Designers }",
    "We are at your services..."
  ];
  var count = 0;
  setInterval(() => {
    if (count === texts.length) {
      count = 0;
    }
    $(".shape .info p").hide();
    $(".shape .info p").fadeIn("slow");
    $(".shape .info p").text(texts[count]);
    count++;
  }, 3000);
});
