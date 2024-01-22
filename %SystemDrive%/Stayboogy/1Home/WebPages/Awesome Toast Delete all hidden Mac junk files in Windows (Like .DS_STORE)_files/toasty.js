
// --------------
// NAVBAR TOGGLER
// --------------
navbar_toggle = document.getElementById('navbar-toggle');
navbar_toggle.onclick = function() {
  navToggle();
}

function navToggle() {
  var nav_menu = document.getElementById('nav-menu');
  var body = document.getElementsByTagName('body')[0];
  if (navbar_toggle.checked) {
    nav_menu.classList.add('in');
    body.classList.add('scroll-lock');
  } else {
    nav_menu.classList.remove('in');
    body.classList.remove('scroll-lock');
  }
}


// --------------
// LUMINOUS LIGHTBOX
// https://github.com/imgix/luminous
// --------------
document.addEventListener('DOMContentLoaded', function(){
  if (document.getElementsByClassName('luminous').length) {
    var lum_gallery_opts = {};
    var lum_opts = {
      caption: function(trigger) {
        return trigger.querySelector('img').getAttribute('title');
      },
      onOpen: function() {
        // Hide the back-to-top button if it's displayed
        var btt;
        if (btt = document.getElementById('back-to-top')) btt.classList.add('display-none');
      }
    };
    new LuminousGallery(document.querySelectorAll('.luminous'), lum_gallery_opts, lum_opts);
  }
}); // end loaded


// --------------
// LAZY LOADING
// --------------
document.addEventListener('DOMContentLoaded', function() {
  var lazy_load_images;    

  if ('IntersectionObserver' in window) {
    lazy_load_images = document.querySelectorAll('lazy');
    var image_observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var image = entry.target;
          image.classList.remove('lazy');
          image_observer.unobserve(image);
        }
      });
    });

    lazy_load_images.forEach(function(image) {
      image_observer.observe(image);
    });
  } else {  
    var lazy_load_throttle_timeout;
    lazy_load_images = document.querySelectorAll('.lazy');
    
    function lazyload () {
      if (lazy_load_throttle_timeout) {
        clearTimeout(lazy_load_throttle_timeout);
      }    

      lazy_load_throttle_timeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
        lazy_load_images.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
            }
        });
        if (lazy_load_images.length == 0) { 
          document.removeEventListener('scroll', lazyload);
          window.removeEventListener('resize', lazyload);
          window.removeEventListener('orientationChange', lazyload);
        }
      }, 20);
    }

    document.addEventListener('scroll', lazyload);
    window.addEventListener('resize', lazyload);
    window.addEventListener('orientationChange', lazyload);
  }
}); // end loaded


// --------------
// SCROLL TO TOP
// --------------
const back_to_top_btn = document.getElementById('back-to-top');
const scrollinate = () => {
  let y = window.scrollY;
  if (y > 0) {
    back_to_top_btn.classList.remove('display-none');
  } else {
    back_to_top_btn.classList.add('display-none');
  }

  if (typeof highlightRelevantMenuDropdownItem == 'function') { 
    highlightRelevantMenuDropdownItem();
  }
};
window.addEventListener('scroll', scrollinate);
back_to_top_btn.onclick = function(e) {
  e.preventDefault();
  scrollTo('#top');
}


// --------------
// UTILITY FUNCTION: IS ELEMENT IN VIEWPORT
// --------------
function isInViewport(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while (el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top < (window.pageYOffset + window.innerHeight) &&
    left < (window.pageXOffset + window.innerWidth) &&
    (top + height) > window.pageYOffset &&
    (left + width) > window.pageXOffset
  );
}


// --------------
// UTILITY FUNCTION: SCROLL TO SELECTOR
// position options: 'top' or 'middle'
// --------------
function scrollTo(selector, position = 'top') {
  let element = document.querySelector(selector);
  if (!element) return false;

  let rect = element.getBoundingClientRect();
  let viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

  var scroll_position; 
  if (position === 'top') {
    scroll_position = element.getBoundingClientRect().top + window.pageYOffset - 50;
  } else {
    scroll_position = rect.top + rect.height / 2 - viewHeight / 2;
  }

  window.scroll({
    top: scroll_position,
    behavior: 'smooth',
  });
}