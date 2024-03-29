
(function ($) {
  "use strict";

  $(function () {
    var header = $(".start-style");
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();

      if (scroll >= 10) {
        header.removeClass('start-style').addClass("scroll-on");
      } else {
        header.removeClass("scroll-on").addClass('start-style');
      }
    });
  });

  //Animation

  $(document).ready(function () {
    $('body.hero-anime').removeClass('hero-anime');
  });

  //Menu On Hover

  $('body').on('mouseenter mouseleave', '.nav-item', function (e) {
    if ($(window).width() > 750) {
      var _d = $(e.target).closest('.nav-item'); _d.addClass('show');
      setTimeout(function () {
        _d[_d.is(':hover') ? 'addClass' : 'removeClass']('show');
      }, 1);
    }
  });


  $(document).ready(function () {
    var $cookie = $('#eucookies');
    var $button = $('#eucookies button');
    if (document.cookie.indexOf('displayCookieInfo') === -1) {
      var height = $("#eucookies").height() + 25
      $('#eucookiesbottom').height(height);
      $cookie.slideDown("slow");
    }
    $button.on('click', function () {
      var expiry = new Date();
      expiry.setDate(expiry.getDate() + 31 * 1);
      document.cookie = 'displayCookieInfo' + '=' + escape('no') + ';path=/' + ';expires=' + expiry.toGMTString();
      $cookie.fadeOut();
      $('#eucookiesbottom').height(0);
    });
  });

})(jQuery);

// Blank Target External Links
$(document.links).filter(function () {
  return this.hostname != window.location.hostname;
}).attr('target', '_blank');

// Scroll to top functionality
document.addEventListener("DOMContentLoaded", function () {
  var scrollToTopButton = document.getElementById("scrollToTop");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }
  });

  scrollToTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});

$(document).ready(function () {
  $('.article-image').on('click', function () {
    var imageUrl = $(this).attr('src');
    window.location.href = imageUrl;
  });
});

$(document).ready(function () {

  $('.openBtn').click(function () {
    $('#searchModal').css('display', 'block');
    $('#searchInput').focus();
  });

  $('.closeBtn').click(function () {
    $('#searchModal').css('display', 'none');
  });


  $(window).click(function (event) {
    if (event.target == $('#searchModal')[0]) {
      $('#searchModal').css('display', 'none');
    }
  });


  $('#searchForm').submit(function (event) {
    var searchTerm = $('#searchInput').val().trim();
    if (searchTerm === '') {
      event.preventDefault();
    }
  });
});
