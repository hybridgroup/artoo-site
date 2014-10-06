var cylon = angular.module("artoo", []);

var SidebarCtrl = function SidebarCtrl($scope, $element) {
  var path = window.location.pathname.replace(/\/$/, ''),
      activeTab = '';

  // see if a link in the sidebar is selected
  var $el = $("a[href='" + path + "']", $element),
      $section = [];

  if ($el.length) {
    $section = $el.parents(".docs-sidebar .section")
    $el.addClass("active");
  }

  // if the sidebar is in a tab, mark it's tab as active
  if ($section.length) {
    var name = $section.children(".name").first().text();
    activeTab = name;
  }

  // on smaller displays, show sidebar when toggle is clicked.
  $("#docs-menu").click(function() {
    $(".docs-sidebar").toggleClass("show");
  });

  $scope.active = function(name) {
    return name === activeTab;
  };

  $scope.show = function(name) {
    if (activeTab === name) {
      return activeTab = '';
    }

    activeTab = name;
  }
};

$(function() {

  $('a.scroll').click(function(event){
    event.preventDefault();
    var target = $(this).attr('href');
    if ( $(target).length ) {
      $('html, body').animate({
        scrollTop: $( target ).offset().top
      }, 1000);
    };
  });

  $('.container-subnav a').click(function(event){
    event.preventDefault();
    var target = $(this).attr('href');
    var target_position = 0;

    if ( $(target).length ) {

      if ($('#mainsubnav').hasClass('subNavfixed')) {
        target_position = $( target ).offset().top - 60;
      } else {
        target_position = $( target ).offset().top - 120;
      }
      
      $('html, body').animate({
        scrollTop: target_position
      }, 1000);
    };
  });

  var navpos = $('#mainsubnav').offset();

  $(window).bind('scroll', function() {
    if ($(window).scrollTop() > navpos.top) {
      $('#mainsubnav').addClass('subNavfixed');
     }
     else {
       $('#mainsubnav').removeClass('subNavfixed');
       $("#mainsubnav a").removeClass("active");
     }
  });

  $("#mainsubnav a").click(function(){
    $("#mainsubnav a").removeClass("active");
    $(this).addClass("active");
  });

  $("#mobile-menu").click(function() {
    $(".menu").toggleClass("show");
  });

});

