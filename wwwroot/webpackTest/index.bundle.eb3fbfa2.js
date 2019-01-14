/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);
// import printMe from './print'
 // import '../css/styles.css'
// import {
//   cube,
//   square,
// } from './multiFunc'
// // 在dll內的套件
// var _ = require('lodash');
// console.log('index');
// console.log('lodashhhhh', _.defaults({ 'a': 1 }, { 'a': 3, 'b': 91 }))
// function component() {
//   var element = document.createElement('div');
//   var btn = document.createElement('button');
//   element.innerHTML = "Hello webpack"
//   btn.innerHTML = 'Click me and check the console!adsasdf';
//   btn.onclick = printMe;
//   element.appendChild(btn);
//   return element;
// }
// document.body.appendChild(component())
// console.log(cube(5))
// console.log(square(5))
// // console.log(`process.env.NODE_ENV: ${process.env.NODE_ENV}`)
// if (module.hot) {
//   // module.hot.accept('./print.js', function() {
//   //   console.log('Accepting the updated printMe module in index.js!');
//   //   printMe();
//   // })
// }
// // 需要加上才會啟動HMR
// if (module.hot) {
//   module.hot.accept()
// }
// function another_adder (...numbers) {
//   // Create a list of numbers in the function
//   const other_nums = [10, 20, 30, 40, 50, 60, 70, 80, 90]
//   // here, we are using the spread operator to concatenate numbers and other_nums into the same array,
//   // in the same line where it is initialized.
//   const all_nums = [...numbers, ...other_nums]
//   let total = 0
//   all_nums.forEach((n, i) => {
//       // Type check to avoid turning this thing into a string, or creating some other error.
//       if (typeof n === 'number') {
//           total += n
//       } else {
//           console.log('can\'t add item at index' + i + '.')
//       }
//   })
//   return total
// }
// console.log(another_adder(1, 2, 3, 4, 5, 6, 7, 8))
// let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
// console.log(x); // 1
// console.log(y); // 2
// console.log(z); // { a: 3, b: 4 }
// [5, 6].map(n => console.log(n));

var mq767 = 767; // hover navbar

$('.dropdown').hover(function () {
  if ($(window).width() > mq767) $('.dropdown-toggle', this).trigger('click');
}); //

jQuery(window).on('scroll', function () {
  (function ($) {
    stickyHeader(); // OnePageMenuScroll();        
  })(jQuery);
}); // navbar stricky

function stickyHeader() {
  if ($('.stricky').length) {
    var strickyScrollPos = 100;
    strickyScrollPos = 40;

    if ($(window).scrollTop() > strickyScrollPos) {
      $('.stricky').removeClass('slideIn animated');
      $('.stricky').addClass('stricky-fixed slideInDown animated');
      $('.scrollToTop').fadeIn(500); // } else if ($(this).scrollTop() <= strickyScrollPos) {
    } else {
      $('.stricky').removeClass('stricky-fixed slideInDown animated');
      $('.stricky').addClass('slideIn animated');
      $('.scrollToTop').fadeOut(500);
    }
  }

  ;
} // 


$('.scrollToTop').click(function () {
  $("html, body").animate({
    scrollTop: 0
  }, 600);
  return false;
}); // owlcarousel

var owlCommonSetting = {
  loop: true,
  margin: 10,
  responsiveClass: true,
  nav: true,
  items: 1,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  navText: ['<span class="next">' + '  <i class="fas fa-arrow-left"></i>' + '</span>', '<span class="next">' + '  <i class="fas fa-arrow-right"></i>' + '</span>'],
  responsive: {
    1000: {
      items: 1,
      loop: true
    }
  }
};
$('.owlOne').owlCarousel(owlCommonSetting);
var owlCommonSetting2 = JSON.parse(JSON.stringify(owlCommonSetting));
owlCommonSetting2.responsive = {
  1000: {
    items: 3,
    loop: true
  }
};
$('.owlTwo').owlCarousel(owlCommonSetting2); // animateOut: 'fadeOut',
// animateIn: 'fadeIn',
// nav:true,
// particles
// particlesJS("particles-js", {
//     "particles": {
//       "number": {
//         "value": 80,
//         "density": {
//           "enable": true,
//           "value_area": 800
//         }
//       },
//       "color": {
//         "value": "#eee"
//       },
//       "shape": {
//         "type": "triangle",
//         "stroke": {
//           "width": 0,
//           "color": "#000000"
//         },
//         "polygon": {
//           "nb_sides": 5
//         },
//         "image": {
//           "src": "img/github.svg",
//           "width": 100,
//           "height": 100
//         }
//       },
//       "opacity": {
//         "value": 0.5,
//         "random": false,
//         "anim": {
//           "enable": false,
//           "speed": 1,
//           "opacity_min": 0.1,
//           "sync": false
//         }
//       },
//       "size": {
//         "value": 3,
//         "random": true,
//         "anim": {
//           "enable": false,
//           "speed": 40,
//           "size_min": 0.1,
//           "sync": false
//         }
//       },
//       "line_linked": {
//         "enable": true,
//         "distance": 150,
//         "color": "#eee",
//         "opacity": 0.4,
//         "width": 1
//       },
//       "move": {
//         "enable": true,
//         "speed": 6,
//         "direction": "none",
//         "random": false,
//         "straight": false,
//         "out_mode": "out",
//         "bounce": false,
//         "attract": {
//           "enable": false,
//           "rotateX": 600,
//           "rotateY": 1200
//         }
//       }
//     },
//     "interactivity": {
//       "detect_on": "canvas",
//       "events": {
//         "onhover": {
//           "enable": true,
//           "mode": "repulse"
//         },
//         "onclick": {
//           "enable": false,
//           "mode": "push"
//         },
//         "resize": true
//       },
//       "modes": {
//         "grab": {
//           "distance": 140,
//           "line_linked": {
//             "opacity": 1
//           }
//         },
//         "bubble": {
//           "distance": 400,
//           "size": 40,
//           "duration": 2,
//           "opacity": 8,
//           "speed": 3
//         },
//         "repulse": {
//           "distance": 200,
//           "duration": 0.4
//         },
//         "push": {
//           "particles_nb": 4
//         },
//         "remove": {
//           "particles_nb": 2
//         }
//       }
//     },
//     "retina_detect": true
//   });
//typed.js
// $(".type-wrap span:last").typed({
// 	strings: ["^1000 <strong>mTERRACE</strong>."],
// 	typeSpeed: 100,
// 	loop: false,
// 	contentType: 'html',
//   loop: true
// });

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=index.bundle.eb3fbfa2.js.map