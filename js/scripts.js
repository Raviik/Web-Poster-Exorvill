$(function() {
  $('.buttons a, .arrow-down a, .letters h2 a, .tab-panel h4 a').each(function() {
    $(this).on('click', function(e) {
      e.preventDefault();
      var scrollTo = $(this).attr('href');
      var whitespace = scrollTo == '#s1' ? 70 : 30
      $('html,body').animate({
        scrollTop: $(scrollTo).offset().top - whitespace
      }, 1000);
    });
  });
});

var tabButtons = document.querySelectorAll(".text-tabs .tab-buttons button");
var tabPanel = document.querySelectorAll(".text-tabs .tab-panel");

function showPanel(panelIndex) {
  tabButtons.forEach(function (node) {
    node.style.backgroundColor = "";
    node.style.color = "";
  })
  tabButtons[panelIndex].style.color = "white";
  tabPanel.forEach(function(node) {
    node.style.display = "none";
  });
  tabPanel[panelIndex].style.display = "block";
}
showPanel(0);
