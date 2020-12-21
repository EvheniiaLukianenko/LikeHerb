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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/// *remove before//=../../../node_modules/jquery.breadcrumbs-generator/dist/jquery.breadcrumbs-generator.min.js\r\n\r\n\r\nconsole.log('file 1');\r\n\r\n// Burger menu\r\n\r\n\t$(\"#nav_toggle\").on(\"click\", function(event) {\r\n\t\tevent.preventDefault();\r\n\r\n\t\t$(this).toggleClass(\"active\");\r\n\t\t$(\"#nav\").toggleClass(\"active\");\r\n\t});\r\n\r\n\tvar md = window.matchMedia(\"(max-width: 992px)\");\r\n\r\n\t$(\"[data-subnav='has-subnav']\").on(\"click\", function(event) {\r\n\t\tevent.preventDefault();\r\n\r\n\t\tif (md.matches) {\r\n\t\t\t$(this).next(\".subnav\").toggleClass(\"active\");\r\n\t\t}\r\n\r\n\t});\r\n\r\n// Smooth Scroll\r\n\r\n\t$(\"[data-scroll]\").on(\"click\", function(event) {\r\n\t\tevent.preventDefault();\r\n\r\n\t\tvar $this = $(this),\r\n\t\t\tblockId = $this.data('scroll'),\r\n\t\t\tblockOffset = $(blockId).offset().top;\r\n\r\n\t\t\t$(\"html, body\").animate({\r\n\t\t\t\tscrollTop: blockOffset\r\n\t\t\t}, 500);\r\n\t});\r\n\r\n\r\n// Scroll Top\r\n\r\n\tvar height = $(window).height();\r\n\t\tscrollOffset = $(window).scrollTop();\r\n\r\n\r\n\tcheckScroll(scrollOffset);\r\n\r\n\t$(window).on(\"scroll\", function() {\r\n\t\tscrollOffset = $(this).scrollTop();\r\n\t\tcheckScroll(scrollOffset);\r\n\r\n\t});\r\n\r\n\tfunction checkScroll(scrollOffset) {\r\n\t\tvar $btnUp = $(\"#btn-scroll-top\");\r\n\r\n\t\tif(scrollOffset >= height) {\r\n\t\t\t$btnUp.addClass(\"active\")\r\n\t\t} else {\r\n\t\t\t$btnUp.removeClass(\"active\")\r\n\t\t}\r\n\t}\r\n\r\n\t$(\"#btn-scroll-top\").on(\"click\", function(event) {\r\n\t\tevent.preventDefault();\r\n\r\n\t\t\t$(\"html, body\").animate({\r\n\t\t\t\tscrollTop: 0\r\n\t\t\t}, 500);\r\n\t});\r\n\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/file2.js":
/*!********************************!*\
  !*** ./src/assets/js/file2.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("console.log('file 2');\r\n\n\n//# sourceURL=webpack:///./src/assets/js/file2.js?");

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./src/assets/js/app.js ./src/assets/js/file2.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! C:\\Users\\Vovka\\Desktop\\verstka\\-- Projects --\\likeherb\\src\\assets\\js\\app.js */\"./src/assets/js/app.js\");\nmodule.exports = __webpack_require__(/*! C:\\Users\\Vovka\\Desktop\\verstka\\-- Projects --\\likeherb\\src\\assets\\js\\file2.js */\"./src/assets/js/file2.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/app.js_./src/assets/js/file2.js?");

/***/ })

/******/ });