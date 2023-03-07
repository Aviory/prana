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
/******/ 	__webpack_require__.p = "./build/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/images/wombat.jpg":
/*!**********************************!*\
  !*** ./assets/images/wombat.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"wombat.jpg\";\n\n//# sourceURL=webpack:///./assets/images/wombat.jpg?");

/***/ }),

/***/ "./assets/js/index.js":
/*!****************************!*\
  !*** ./assets/js/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("window.addEventListener('load', event => {\n  document.addEventListener('touchmove', function (event) {\n    event = event.originalEvent || event;\n\n    if (event.scale > 1) {\n      event.preventDefault();\n    }\n  }, false);\n  const requestForm = document.getElementById('request-form');\n  const callbackForm = document.getElementById('callback-form');\n\n  const callback = (event, form, actionName, category) => {\n    gtag('event', actionName, {\n      'event_category': category\n    });\n    const data = new FormData(form);\n    const xhr = new XMLHttpRequest();\n    event.preventDefault();\n    xhr.open('POST', './form-handler.php');\n\n    xhr.onload = function () {\n      if (xhr.status === 200) {\n        // if the response is json encoded\n        const response = xhr.responseText;\n\n        if (response !== 'OK') {\n          alert(\"Вы ввели некорректные данные\");\n        } else {\n          window.location = './thank-you.html'; //  alert(\"Спасибо за заявку. Мы обязательно свяжемся с Вами в ближайшее время!\")\n        }\n\n        form.reset();\n      }\n    };\n\n    xhr.send(data);\n  };\n\n  requestForm.addEventListener('submit', e => callback(e, requestForm, 'form1_button_click', 'video-block'));\n  callbackForm.addEventListener('submit', e => callback(e, callbackForm, 'form2_button_click', 'form_block'));\n});\n\n//# sourceURL=webpack:///./assets/js/index.js?");

/***/ }),

/***/ "./assets/scss/global.scss":
/*!*********************************!*\
  !*** ./assets/scss/global.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/postcss-loader/src??ref--6-2!../../node_modules/sass-loader/lib/loader.js!../../node_modules/style-resources-loader/lib??ref--6-4!./global.scss */ \"./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./node_modules/style-resources-loader/lib/index.js?!./assets/scss/global.scss\");\nif(typeof content === 'string') content = [[module.i, content, '']];\n// Prepare cssTransformation\nvar transform;\n\nvar options = {\"hmr\":true}\noptions.transform = transform\n// add the styles to the DOM\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./assets/scss/global.scss?");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./node_modules/style-resources-loader/lib/index.js?!./assets/scss/global.scss":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/lib/loader.js!./node_modules/style-resources-loader/lib??ref--6-4!./assets/scss/global.scss ***!
  \****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var escape = __webpack_require__(/*! ../../node_modules/css-loader/lib/url/escape.js */ \"./node_modules/css-loader/lib/url/escape.js\");\nexports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"body {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/wombat.jpg */ \"./assets/images/wombat.jpg\")) + \");\\n  background-size: cover;\\n  background: #fff;\\n  touch-action: pan-x pan-y; }\\n\\n.container {\\n  width: 100%;\\n  max-width: 1200px;\\n  margin-left: auto;\\n  margin-right: auto;\\n  padding-left: 1rem;\\n  padding-right: 1rem; }\\n\\nh1 {\\n  font-size: 26px; }\\n\\n@media only screen and (max-width: 900px) {\\n  h1 {\\n    font-size: 24px; } }\\n\\n.action-button {\\n  display: inline-flex;\\n  justify-content: center;\\n  align-items: center;\\n  box-shadow: 0 3px 2px 0 rgba(0, 0, 0, 0.1);\\n  padding: 0 20px;\\n  text-transform: uppercase;\\n  text-decoration: none;\\n  transition: all 0.3s, box-shadow 0.3s, -webkit-transform 0.3s;\\n  transition: all 0.3s, transform 0.3s, box-shadow 0.3s;\\n  transition: all 0.3s, transform 0.3s, box-shadow 0.3s, -webkit-transform 0.3s;\\n  will-change: transform;\\n  border: none;\\n  font-size: 12px;\\n  border-radius: 5px;\\n  background: #fee830;\\n  color: #292929;\\n  cursor: pointer;\\n  height: 30px;\\n  font-family: 'DIN Pro', 'Arial', sans-serif;\\n  font-weight: bolder; }\\n  .action-button:hover {\\n    background: #fee830;\\n    color: #000;\\n    box-shadow: 0 4px 17px rgba(0, 0, 0, 0.2);\\n    -webkit-transform: translate3d(0, -2px, 0);\\n            transform: translate3d(0, -2px, 0); }\\n\\n@-webkit-keyframes actionButton {\\n  0% {\\n    -webkit-transform: scale(0);\\n            transform: scale(0);\\n    opacity: 0; }\\n  33% {\\n    -webkit-transform: scale(1);\\n            transform: scale(1);\\n    opacity: 1; }\\n  100% {\\n    -webkit-transform: scale(3);\\n            transform: scale(3);\\n    opacity: 0; } }\\n\\n@keyframes actionButton {\\n  0% {\\n    -webkit-transform: scale(0);\\n            transform: scale(0);\\n    opacity: 0; }\\n  33% {\\n    -webkit-transform: scale(1);\\n            transform: scale(1);\\n    opacity: 1; }\\n  100% {\\n    -webkit-transform: scale(3);\\n            transform: scale(3);\\n    opacity: 0; } }\\n  .action-button:focus {\\n    outline: 0; }\\n  .action-button.full-width {\\n    width: 100%; }\\n  .action-button:active {\\n    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);\\n    -webkit-transform: translate3d(0, 1px, 0);\\n            transform: translate3d(0, 1px, 0); }\\n  .action-button.action-button {\\n    position: relative; }\\n    .action-button.action-button:before, .action-button.action-button:after {\\n      content: '';\\n      position: absolute;\\n      top: 0;\\n      left: 0;\\n      right: 0;\\n      bottom: 0;\\n      background: rgba(255, 255, 255, 0.4);\\n      border-radius: 50%;\\n      width: 20px;\\n      height: 20px;\\n      opacity: 0;\\n      margin: auto; }\\n    .action-button.action-button:before {\\n      -webkit-animation: actionButton 1.5s infinite linear;\\n              animation: actionButton 1.5s infinite linear; }\\n    .action-button.action-button:after {\\n      -webkit-animation: actionButton 2s 0.4s infinite linear;\\n              animation: actionButton 2s 0.4s infinite linear; }\\n    .action-button.action-button:hover:before, .action-button.action-button:hover:after {\\n      display: none; }\\n\\n.modal-content {\\n  background: none;\\n  border: none; }\\n  .modal-content .modal-header {\\n    border: none; }\\n    .modal-content .modal-header .close {\\n      font-size: 54px;\\n      text-shadow: none;\\n      position: absolute;\\n      right: 10px;\\n      top: -8px; }\\n  .modal-content .modal-body iframe {\\n    border: none; }\\n\\n.header {\\n  left: 0;\\n  right: 0;\\n  position: fixed;\\n  z-index: 3; }\\n  .header__wrapper {\\n    display: flex;\\n    flex-direction: row; }\\n  .header__container {\\n    background: #fff;\\n    justify-content: space-between;\\n    display: flex;\\n    min-height: 60px;\\n    margin-bottom: -60px;\\n    flex-direction: row;\\n    align-items: center; }\\n  .header__logo {\\n    width: 120px;\\n    height: auto; }\\n  .header__link:hover {\\n    text-decoration: none; }\\n  .header__phone-numbers {\\n    display: flex;\\n    flex-direction: row;\\n    margin-bottom: 0; }\\n  .header__phone-number {\\n    display: flex;\\n    flex-direction: row;\\n    list-style: none;\\n    align-items: center;\\n    margin-left: 20px; }\\n  .header__phone-number-text {\\n    font-size: 17px;\\n    color: #000;\\n    margin-left: 6px; }\\n  .header__phone-icon {\\n    width: 18px;\\n    height: 18px;\\n    align-self: center;\\n    background: url(\" + escape(__webpack_require__(/*! ../../public/images/phone.png */ \"./public/images/phone.png\")) + \") center/cover; }\\n  .header__button {\\n    margin-left: 10px;\\n    width: 200px; }\\n  .header__phone-numbers-mobile {\\n    display: none;\\n    padding-left: 20px; }\\n  @media (max-width: calc(1170px - 1px)) {\\n    .header__phone-numbers-mobile {\\n      display: block;\\n      padding-left: 0;\\n      padding-top: 10px;\\n      padding-bottom: 10px; }\\n    .header .header__phone-numbers {\\n      display: none; }\\n    .header__phone-number {\\n      margin-left: 0; }\\n    .header__button {\\n      margin-left: 0; }\\n    .header__wrapper {\\n      display: flex;\\n      margin-top: 10px;\\n      margin-bottom: 10px;\\n      align-items: flex-end;\\n      justify-content: flex-end;\\n      flex-direction: column-reverse; } }\\n\\n.main-block {\\n  padding-bottom: 120px;\\n  background: url(\" + escape(__webpack_require__(/*! ../../public/images/main-block-bg.png */ \"./public/images/main-block-bg.png\")) + \") 300px 28%/cover no-repeat; }\\n  .main-block__title {\\n    font-size: 70px;\\n    text-transform: uppercase;\\n    padding-top: 0;\\n    width: 100px;\\n    font-weight: 400;\\n    line-height: 68px; }\\n  .main-block__city {\\n    margin-bottom: 0;\\n    font-size: 44px;\\n    padding-top: 194px;\\n    font-weight: 400; }\\n  .main-block__description {\\n    font-size: 16px;\\n    margin-top: 20px; }\\n  .main-block__call-to-action {\\n    border: 1px solid #ff0000;\\n    border-radius: 20px;\\n    max-width: 300px;\\n    width: 100%;\\n    margin-top: 50px;\\n    box-shadow: 3px 3px 6px 0 rgba(0, 0, 0, 0.26);\\n    position: relative; }\\n  .main-block__call-to-action-text {\\n    font-size: 14px;\\n    padding: 10px 20px 0 20px;\\n    font-style: italic;\\n    color: #555555; }\\n  .main-block__arrow-down {\\n    width: 0;\\n    height: 0;\\n    border-left: 10px solid transparent;\\n    border-right: 10px solid transparent;\\n    border-top: 10px solid #ff0000;\\n    position: absolute;\\n    bottom: -10px;\\n    left: 32px; }\\n  .main-block__action-button {\\n    background: #fee830;\\n    width: 50px;\\n    height: 50px;\\n    position: relative;\\n    border-radius: 50%;\\n    margin-left: 2px;\\n    margin-top: 2px; }\\n    .main-block__action-button:hover {\\n      background: #fee830;\\n      color: #000;\\n      box-shadow: 0 4px 17px rgba(0, 0, 0, 0.2); }\\n\\n@keyframes actionButton {\\n  0% {\\n    -webkit-transform: scale(0);\\n            transform: scale(0);\\n    opacity: 0; }\\n  33% {\\n    -webkit-transform: scale(1);\\n            transform: scale(1);\\n    opacity: 1; }\\n  100% {\\n    -webkit-transform: scale(3);\\n            transform: scale(3);\\n    opacity: 0; } }\\n    .main-block__action-button:focus {\\n      outline: 0; }\\n    .main-block__action-button.full-width {\\n      width: 100%; }\\n    .main-block__action-button:active {\\n      box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);\\n      -webkit-transform: translate3d(0, 1px, 0);\\n              transform: translate3d(0, 1px, 0); }\\n    .main-block__action-button.main-block__action-button {\\n      position: relative; }\\n      .main-block__action-button.main-block__action-button:before, .main-block__action-button.main-block__action-button:after {\\n        content: '';\\n        position: absolute;\\n        top: 0;\\n        left: 0;\\n        right: 0;\\n        bottom: 0;\\n        background: rgba(255, 255, 255, 0.4);\\n        border-radius: 50%;\\n        width: 20px;\\n        height: 20px;\\n        opacity: 0;\\n        margin: auto; }\\n      .main-block__action-button.main-block__action-button:before {\\n        -webkit-animation: actionButton 1.5s infinite linear;\\n                animation: actionButton 1.5s infinite linear; }\\n      .main-block__action-button.main-block__action-button:after {\\n        -webkit-animation: actionButton 2s 0.4s infinite linear;\\n                animation: actionButton 2s 0.4s infinite linear; }\\n      .main-block__action-button.main-block__action-button:hover:before, .main-block__action-button.main-block__action-button:hover:after {\\n        display: none; }\\n  .main-block__action-button-outer-wrapper {\\n    background: none;\\n    border: 1px solid #fee830;\\n    width: 56px;\\n    height: 56px;\\n    border-radius: 50%;\\n    margin-left: 16px;\\n    margin-top: 18px;\\n    cursor: pointer;\\n    position: absolute;\\n    left: -2px;\\n    top: 62px; }\\n  .main-block__triangle-down-first {\\n    top: 14px;\\n    left: 4px;\\n    position: absolute;\\n    content: \\\"\\\";\\n    display: inline-block;\\n    width: 12px;\\n    height: 12px;\\n    border-right: 1px solid black;\\n    border-top: 1px solid black;\\n    -webkit-transform: rotate(135deg);\\n            transform: rotate(135deg);\\n    margin-right: 0.5em;\\n    margin-left: 1.0em; }\\n  .main-block__triangle-down-second {\\n    top: 20px;\\n    left: 4px;\\n    position: absolute;\\n    content: \\\"\\\";\\n    display: inline-block;\\n    width: 12px;\\n    height: 12px;\\n    border-right: 1px solid black;\\n    border-top: 1px solid black;\\n    -webkit-transform: rotate(135deg);\\n            transform: rotate(135deg);\\n    margin-right: 0.5em;\\n    margin-left: 1.0em; }\\n  @media (max-width: calc(1170px - 1px)) {\\n    .main-block {\\n      justify-content: center;\\n      background: url(\" + escape(__webpack_require__(/*! ../../public/images/main-block-bg.png */ \"./public/images/main-block-bg.png\")) + \") 30% 182px/726px no-repeat; }\\n      .main-block__title {\\n        font-size: 34px;\\n        line-height: 38px;\\n        padding-top: 0;\\n        width: 100%; }\\n      .main-block__city {\\n        font-size: 20px;\\n        padding-top: 108px;\\n        margin-bottom: 0;\\n        width: 100px;\\n        font-weight: 400; }\\n      .main-block__call-to-action {\\n        margin: 294px auto 0 auto; }\\n      .main-block__phone-numbers-mobile {\\n        display: block; }\\n      .main-block .header__phone-numbers {\\n        display: none; }\\n      .main-block__phone-number {\\n        margin-left: 0; }\\n      .main-block__arrow-down {\\n        left: 140px; }\\n      .main-block__action-button-outer-wrapper {\\n        left: 106px;\\n        top: 62px; } }\\n\\n.video-block__inner-wrapper {\\n  display: flex;\\n  flex-direction: row;\\n  margin-top: 46px;\\n  margin-bottom: 46px; }\\n\\n.video-block__video-wrapper {\\n  display: flex;\\n  flex-direction: column;\\n  flex: 1; }\\n\\n.video-block__description {\\n  flex: 1;\\n  display: flex;\\n  flex-direction: row;\\n  margin-left: 120px; }\\n\\n.video-block__text {\\n  display: flex;\\n  flex-direction: column; }\\n\\n.video-block__text-description {\\n  line-height: 16px;\\n  margin-top: 8px; }\\n\\n.video-block__instagram {\\n  width: 41px;\\n  height: 41px;\\n  background: url(\" + escape(__webpack_require__(/*! ../../public/images/instagram.png */ \"./public/images/instagram.png\")) + \") center/contain no-repeat; }\\n\\n.video-block__link {\\n  display: flex;\\n  flex-direction: column;\\n  margin-left: 10px; }\\n\\n.video-block__instagram-block {\\n  display: flex;\\n  margin-top: 24px;\\n  align-items: center;\\n  flex-direction: row; }\\n\\n.video-block__iphone {\\n  max-width: 122px;\\n  width: 100%;\\n  height: 164px;\\n  background: url(\" + escape(__webpack_require__(/*! ../../public/images/iphone.png */ \"./public/images/iphone.png\")) + \") center/contain no-repeat; }\\n\\n.video-block__title {\\n  text-transform: uppercase;\\n  font-size: 34px;\\n  text-align: center; }\\n\\n.video-block__video {\\n  flex: 1;\\n  position: relative;\\n  width: 650px;\\n  margin-top: -20px;\\n  min-height: 374px;\\n  cursor: pointer;\\n  background: url(\" + escape(__webpack_require__(/*! ../../public/images/video-bg.png */ \"./public/images/video-bg.png\")) + \") center/contain no-repeat; }\\n\\n.video-block__button {\\n  flex: 1;\\n  width: 175px;\\n  height: 175px;\\n  position: absolute;\\n  left: 118px;\\n  top: 93px;\\n  opacity: 0.9;\\n  background: url(\" + escape(__webpack_require__(/*! ../../public/images/video-bg-play.png */ \"./public/images/video-bg-play.png\")) + \") center/contain no-repeat; }\\n  .video-block__button:hover {\\n    opacity: 1; }\\n\\n.video-block__action-button {\\n  background: none;\\n  width: 200px;\\n  height: 200px;\\n  position: absolute;\\n  left: 104px;\\n  top: 74px;\\n  border-radius: 50%;\\n  margin-left: 2px;\\n  margin-top: 2px; }\\n  .video-block__action-button:hover {\\n    color: #000;\\n    box-shadow: 0 4px 17px rgba(0, 0, 0, 0.2); }\\n\\n@keyframes actionButton {\\n  0% {\\n    -webkit-transform: scale(0);\\n            transform: scale(0);\\n    opacity: 0; }\\n  33% {\\n    -webkit-transform: scale(1);\\n            transform: scale(1);\\n    opacity: 1; }\\n  100% {\\n    -webkit-transform: scale(3);\\n            transform: scale(3);\\n    opacity: 0; } }\\n  .video-block__action-button:focus {\\n    outline: 0; }\\n  .video-block__action-button.full-width {\\n    width: 100%; }\\n  .video-block__action-button:active {\\n    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);\\n    -webkit-transform: translate3d(0, 1px, 0);\\n            transform: translate3d(0, 1px, 0); }\\n  .video-block__action-button.video-block__action-button {\\n    position: relative; }\\n    .video-block__action-button.video-block__action-button:before, .video-block__action-button.video-block__action-button:after {\\n      content: '';\\n      position: absolute;\\n      top: 0;\\n      left: 0;\\n      right: 0;\\n      bottom: 0;\\n      background: rgba(255, 255, 255, 0.4);\\n      border-radius: 50%;\\n      width: 60px;\\n      height: 60px;\\n      opacity: 0;\\n      margin: auto; }\\n    .video-block__action-button.video-block__action-button:before {\\n      -webkit-animation: actionButton 1.5s infinite linear;\\n              animation: actionButton 1.5s infinite linear; }\\n    .video-block__action-button.video-block__action-button:after {\\n      -webkit-animation: actionButton 2s 0.4s infinite linear;\\n              animation: actionButton 2s 0.4s infinite linear; }\\n    .video-block__action-button.video-block__action-button:hover:before, .video-block__action-button.video-block__action-button:hover:after {\\n      display: none; }\\n\\n.video-block__submit-button {\\n  width: 100%;\\n  height: 50px;\\n  margin-top: 14px; }\\n\\n.video-block__circle {\\n  width: 80px;\\n  height: 80px;\\n  background: #e3e3e3;\\n  position: absolute;\\n  left: 124px;\\n  top: -48px;\\n  border-radius: 50%;\\n  box-shadow: -1px -1px 6px 3px rgba(0, 0, 0, 0.18) inset; }\\n\\n.video-block__form {\\n  flex: 1;\\n  position: relative;\\n  overflow: hidden;\\n  margin-bottom: 100px; }\\n  .video-block__form h3 {\\n    font-size: 18px;\\n    font-weight: 400;\\n    margin-bottom: 14px; }\\n    .video-block__form h3 strong {\\n      color: #000; }\\n  .video-block__form .form-input-material {\\n    --input-default-border-color:$color-black;\\n    --input-border-bottom-color:$color-black;\\n    --primary-color:  #353535; }\\n    .video-block__form .form-input-material label {\\n      cursor: pointer;\\n      margin-left: 14px; }\\n    .video-block__form .form-input-material input {\\n      color: #000;\\n      cursor: pointer;\\n      padding-left: 10px;\\n      border-bottom: 1px solid #000;\\n      background: #e3e3e3; }\\n  .video-block__form .login-form {\\n    position: relative;\\n    overflow: hidden;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    padding: 50px 40px;\\n    color: #000;\\n    background: #f4f4f4;\\n    width: 100%;\\n    margin-left: 10%;\\n    margin-bottom: 30px;\\n    max-width: 328px;\\n    border-radius: 10px;\\n    box-shadow: 0 0.4px 0.4px rgba(128, 128, 128, 0.109), 0 1px 1px rgba(128, 128, 128, 0.155), 0 2.1px 2.1px rgba(128, 128, 128, 0.195), 0 4.4px 4.4px rgba(128, 128, 128, 0.241), 0 12px 12px rgba(128, 128, 128, 0.35); }\\n    .video-block__form .login-form h1 {\\n      margin: 0 0 24px 0; }\\n    .video-block__form .login-form .form-input-material {\\n      margin: 12px 0;\\n      width: 100%;\\n      color: #000; }\\n      .video-block__form .login-form .form-input-material input {\\n        width: 100%; }\\n    .video-block__form .login-form .btn {\\n      width: 100%;\\n      margin: 18px 0 9px 0; }\\n\\n@media (max-width: calc(1170px - 1px)) {\\n  .video-block__inner-wrapper {\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center; }\\n  .video-block__action-button {\\n    margin-left: -82px;\\n    margin-top: 3px; }\\n  .video-block__button {\\n    width: 65px;\\n    height: 65px;\\n    left: 93px;\\n    top: 144px; }\\n  .video-block__form {\\n    padding-top: 100px;\\n    margin-bottom: 0; }\\n    .video-block__form .login-form {\\n      margin-left: 0; }\\n  .video-block__video-wrapper {\\n    width: 100%;\\n    max-width: 400px; }\\n  .video-block__video {\\n    width: 100%; }\\n  .video-block__circle {\\n    left: 124px;\\n    top: -48px; }\\n  .video-block__description {\\n    margin-left: 0; } }\\n\\n.course-block__inner-wrapper {\\n  display: flex;\\n  flex-direction: column;\\n  margin-top: 46px;\\n  margin-bottom: 100px; }\\n  .course-block__inner-wrapper .nav-tabs {\\n    justify-content: center; }\\n    .course-block__inner-wrapper .nav-tabs .nav-item {\\n      --nav-active-color: #000; }\\n    .course-block__inner-wrapper .nav-tabs .nav-link {\\n      padding: 0; }\\n      .course-block__inner-wrapper .nav-tabs .nav-link.active .course-block__tab {\\n        background: #fee830; }\\n\\n.course-block__tab {\\n  background: #f4f4f4;\\n  padding: 20px;\\n  position: relative;\\n  width: 200px;\\n  border-radius: 0;\\n  border: 6px solid #fff;\\n  border-bottom: none;\\n  height: 83px; }\\n\\n.course-block__tab-content {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n  margin-top: 40px; }\\n\\n.course-block__card {\\n  width: 302px;\\n  height: 441px; }\\n  .course-block__card--1 {\\n    background: url(\" + escape(__webpack_require__(/*! ../../public/images/card1.png */ \"./public/images/card1.png\")) + \") center/contain no-repeat; }\\n  .course-block__card--2 {\\n    background: url(\" + escape(__webpack_require__(/*! ../../public/images/card2.png */ \"./public/images/card2.png\")) + \") center/contain no-repeat; }\\n  .course-block__card--3 {\\n    background: url(\" + escape(__webpack_require__(/*! ../../public/images/card3.png */ \"./public/images/card3.png\")) + \") center/contain no-repeat; }\\n\\n.course-block__tab-content-text {\\n  font-size: 14px;\\n  margin-left: 40px;\\n  width: 100%;\\n  max-width: 270px;\\n  margin-top: 38px; }\\n\\n.course-block__child {\\n  width: 74px;\\n  height: 83px;\\n  position: absolute;\\n  top: -6px;\\n  left: 18px; }\\n  .course-block__child--1 {\\n    background: url(\" + escape(__webpack_require__(/*! ../../public/images/child1.png */ \"./public/images/child1.png\")) + \") center/contain no-repeat; }\\n  .course-block__child--2 {\\n    background: url(\" + escape(__webpack_require__(/*! ../../public/images/child2.png */ \"./public/images/child2.png\")) + \") center/contain no-repeat; }\\n  .course-block__child--3 {\\n    background: url(\" + escape(__webpack_require__(/*! ../../public/images/child3.png */ \"./public/images/child3.png\")) + \") center/contain no-repeat; }\\n\\n.course-block__tab-text {\\n  position: absolute;\\n  top: 30px;\\n  left: 94px;\\n  font-size: 14px; }\\n\\n.course-block__description {\\n  font-size: 16px;\\n  text-align: center;\\n  font-weight: bold; }\\n\\n.course-block__title {\\n  text-transform: uppercase;\\n  font-size: 34px;\\n  text-align: center; }\\n\\n@media (max-width: calc(1170px - 1px)) {\\n  .course-block__tab-content {\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center; } }\\n\\n.teacher-block__inner-wrapper {\\n  display: flex;\\n  flex-direction: column;\\n  margin-top: 46px;\\n  margin-bottom: 100px; }\\n  .teacher-block__inner-wrapper .nav-tabs {\\n    justify-content: center; }\\n    .teacher-block__inner-wrapper .nav-tabs .nav-item {\\n      --nav-active-color: #000; }\\n    .teacher-block__inner-wrapper .nav-tabs .nav-link {\\n      padding: 0; }\\n      .teacher-block__inner-wrapper .nav-tabs .nav-link.active .teacher-block__tab {\\n        background: #fee830; }\\n\\n.teacher-block__tab {\\n  background: #f4f4f4;\\n  padding: 20px;\\n  position: relative;\\n  width: 200px;\\n  border-radius: 0;\\n  border: 6px solid #fff;\\n  border-bottom: none;\\n  height: 83px; }\\n\\n.teacher-block__tab-content {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: flex-start;\\n  width: 658px;\\n  margin: 40px auto;\\n  height: 458px;\\n  background: url(\" + escape(__webpack_require__(/*! ../../public/images/long-card.png */ \"./public/images/long-card.png\")) + \") center/contain no-repeat; }\\n\\n.teacher-block__card {\\n  width: 302px;\\n  height: 441px;\\n  margin-top: 10px;\\n  margin-left: 26px; }\\n  .teacher-block__card--1 {\\n    background: url(\" + escape(__webpack_require__(/*! ../../public/images/svetlana-cut.png */ \"./public/images/svetlana-cut.png\")) + \") center/contain no-repeat; }\\n  .teacher-block__card--2 {\\n    background: url(\" + escape(__webpack_require__(/*! ../../public/images/anastasiya-cut.png */ \"./public/images/anastasiya-cut.png\")) + \") center/contain no-repeat; }\\n  .teacher-block__card--3 {\\n    background: url(\" + escape(__webpack_require__(/*! ../../public/images/elena-cut.png */ \"./public/images/elena-cut.png\")) + \") center/contain no-repeat; }\\n\\n.teacher-block__tab-content-text {\\n  font-size: 14px;\\n  margin-left: 26px;\\n  width: 100%;\\n  max-width: 270px;\\n  margin-top: 50px; }\\n\\n.teacher-block__tab-content-title {\\n  font-weight: bold;\\n  text-transform: uppercase;\\n  font-size: 16px; }\\n\\n.teacher-block__video-block {\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n  margin-top: -14px; }\\n\\n.teacher-block__video-text {\\n  display: flex;\\n  flex-direction: row;\\n  margin-left: 8px;\\n  font-style: italic; }\\n\\n.teacher-block__video {\\n  width: 72px;\\n  height: 72px;\\n  cursor: pointer;\\n  background: url(\" + escape(__webpack_require__(/*! ../../public/images/video-player.png */ \"./public/images/video-player.png\")) + \") center/contain no-repeat; }\\n\\n.teacher-block__child {\\n  width: 64px;\\n  height: 106px;\\n  position: absolute;\\n  top: -18px;\\n  left: 18px; }\\n  .teacher-block__child--1 {\\n    background: url(\" + escape(__webpack_require__(/*! ../../public/images/svetlana.png */ \"./public/images/svetlana.png\")) + \") center/contain no-repeat; }\\n  .teacher-block__child--2 {\\n    width: 76px;\\n    left: 11px;\\n    background: url(\" + escape(__webpack_require__(/*! ../../public/images/nastya.png */ \"./public/images/nastya.png\")) + \") center/contain no-repeat; }\\n  .teacher-block__child--3 {\\n    width: 87px;\\n    left: 12px;\\n    background: url(\" + escape(__webpack_require__(/*! ../../public/images/elena.png */ \"./public/images/elena.png\")) + \") center/contain no-repeat; }\\n\\n.teacher-block__tab-text {\\n  position: absolute;\\n  top: 26px;\\n  left: 100px;\\n  font-size: 14px;\\n  text-transform: uppercase; }\\n\\n.teacher-block__description {\\n  font-size: 16px;\\n  text-align: center;\\n  font-weight: bold; }\\n\\n.teacher-block__title {\\n  text-transform: uppercase;\\n  font-size: 34px;\\n  text-align: center; }\\n\\n@media (max-width: calc(1170px - 1px)) {\\n  .teacher-block__tab-content {\\n    width: 100%;\\n    max-width: 680px;\\n    height: unset;\\n    display: flex;\\n    flex-direction: column;\\n    background: none;\\n    align-items: center; }\\n  .teacher-block__tab-content-text {\\n    margin-top: 0px; } }\\n\\n.form-block form {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n  align-items: center;\\n  padding: 30px 0; }\\n\\n.form-block__inner-wrapper {\\n  background: #f4f4f4;\\n  display: flex;\\n  flex-direction: row;\\n  margin-top: 46px;\\n  margin-bottom: 46px; }\\n\\n.form-block__video-wrapper {\\n  display: flex;\\n  flex-direction: column;\\n  flex: 1; }\\n\\n.form-block__description {\\n  flex: 1;\\n  display: flex;\\n  flex-direction: row;\\n  margin-left: 120px; }\\n\\n.form-block__text {\\n  display: flex;\\n  flex-direction: column; }\\n\\n.form-block__text-description {\\n  line-height: 16px;\\n  margin-top: 8px; }\\n\\n.form-block__instagram {\\n  width: 41px;\\n  height: 41px;\\n  background: url(\" + escape(__webpack_require__(/*! ../../public/images/instagram.png */ \"./public/images/instagram.png\")) + \") center/contain no-repeat; }\\n\\n.form-block__link {\\n  display: flex;\\n  flex-direction: column;\\n  margin-left: 10px; }\\n\\n.form-block__instagram-block {\\n  display: flex;\\n  margin-top: 24px;\\n  align-items: center;\\n  flex-direction: row; }\\n\\n.form-block__iphone {\\n  max-width: 34px;\\n  width: 100%;\\n  height: 48px;\\n  background: url(\" + escape(__webpack_require__(/*! ../../public/images/iphone12.png */ \"./public/images/iphone12.png\")) + \") center/contain no-repeat; }\\n\\n.form-block__title {\\n  text-transform: uppercase;\\n  font-size: 34px;\\n  text-align: center; }\\n\\n.form-block__action-button {\\n  background: none;\\n  width: 100%;\\n  height: 200px;\\n  position: absolute;\\n  left: 15.5%;\\n  top: 20%;\\n  border-radius: 50%;\\n  margin-left: 2px;\\n  margin-top: 2px; }\\n  .form-block__action-button:hover {\\n    color: #000;\\n    box-shadow: 0 4px 17px rgba(0, 0, 0, 0.2); }\\n\\n@keyframes actionButton {\\n  0% {\\n    -webkit-transform: scale(0);\\n            transform: scale(0);\\n    opacity: 0; }\\n  33% {\\n    -webkit-transform: scale(1);\\n            transform: scale(1);\\n    opacity: 1; }\\n  100% {\\n    -webkit-transform: scale(3);\\n            transform: scale(3);\\n    opacity: 0; } }\\n  .form-block__action-button:focus {\\n    outline: 0; }\\n  .form-block__action-button.full-width {\\n    width: 100%; }\\n  .form-block__action-button:active {\\n    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);\\n    -webkit-transform: translate3d(0, 1px, 0);\\n            transform: translate3d(0, 1px, 0); }\\n  .form-block__action-button.video-block__action-button {\\n    position: relative; }\\n    .form-block__action-button.video-block__action-button:before, .form-block__action-button.video-block__action-button:after {\\n      content: '';\\n      position: absolute;\\n      top: 0;\\n      left: 0;\\n      right: 0;\\n      bottom: 0;\\n      background: rgba(255, 255, 255, 0.4);\\n      border-radius: 50%;\\n      width: 60px;\\n      height: 60px;\\n      opacity: 0;\\n      margin: auto; }\\n    .form-block__action-button.video-block__action-button:before {\\n      -webkit-animation: actionButton 1.5s infinite linear;\\n              animation: actionButton 1.5s infinite linear; }\\n    .form-block__action-button.video-block__action-button:after {\\n      -webkit-animation: actionButton 2s 0.4s infinite linear;\\n              animation: actionButton 2s 0.4s infinite linear; }\\n    .form-block__action-button.video-block__action-button:hover:before, .form-block__action-button.video-block__action-button:hover:after {\\n      display: none; }\\n\\n.form-block__submit-button {\\n  width: 100%;\\n  height: 42px;\\n  max-width: 180px;\\n  margin-top: 0;\\n  margin-left: 10px; }\\n\\n.form-block__form {\\n  flex: 1;\\n  flex-direction: row;\\n  display: flex;\\n  position: relative;\\n  overflow: hidden;\\n  margin: 20px 0; }\\n  .form-block__form h3 {\\n    font-size: 18px;\\n    font-weight: 400;\\n    margin-bottom: 0px; }\\n    .form-block__form h3 strong {\\n      color: #000; }\\n  .form-block__form h2 {\\n    font-size: 22px;\\n    text-transform: uppercase; }\\n  .form-block__form .form-input-material {\\n    --input-default-border-color:$color-black;\\n    --input-border-bottom-color:$color-black;\\n    --primary-color:  #353535;\\n    margin-left: 10px; }\\n    .form-block__form .form-input-material label {\\n      cursor: pointer;\\n      margin-left: 14px; }\\n    .form-block__form .form-input-material input {\\n      color: #000;\\n      cursor: pointer;\\n      padding-left: 10px;\\n      border-bottom: 1px solid #000;\\n      background: #e3e3e3; }\\n  .form-block__form .login-form {\\n    display: flex;\\n    flex-direction: row;\\n    align-items: center;\\n    padding: 50px 40px;\\n    color: #000;\\n    background: #f4f4f4;\\n    width: 100%;\\n    margin-left: 10%;\\n    margin-bottom: 30px;\\n    max-width: 328px;\\n    border-radius: 10px;\\n    box-shadow: 0 0.4px 0.4px rgba(128, 128, 128, 0.109), 0 1px 1px rgba(128, 128, 128, 0.155), 0 2.1px 2.1px rgba(128, 128, 128, 0.195), 0 4.4px 4.4px rgba(128, 128, 128, 0.241), 0 12px 12px rgba(128, 128, 128, 0.35); }\\n    .form-block__form .login-form .form-input-material {\\n      margin: 12px 0;\\n      width: 100%;\\n      color: #000; }\\n      .form-block__form .login-form .form-input-material input {\\n        width: 100%; }\\n    .form-block__form .login-form .btn {\\n      width: 100%;\\n      margin: 18px 0 9px 0; }\\n\\n.form-block__description {\\n  flex-direction: column; }\\n\\n@media (max-width: calc(1170px - 1px)) {\\n  .form-block form {\\n    flex-direction: column;\\n    align-items: center;\\n    max-width: 270px; }\\n    .form-block form .form-input-material {\\n      margin-top: 20px;\\n      width: 100%;\\n      margin-left: 0; }\\n      .form-block form .form-input-material input {\\n        width: 100%; }\\n  .form-block__submit-button {\\n    margin-top: 20px;\\n    max-width: unset;\\n    width: 100%;\\n    margin-left: 0; }\\n  .form-block__form {\\n    justify-content: center;\\n    align-items: center; }\\n  .form-block__description {\\n    max-width: 500px;\\n    width: 100%;\\n    margin-left: 0; } }\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./assets/scss/global.scss?./node_modules/css-loader!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/lib/loader.js!./node_modules/style-resources-loader/lib??ref--6-4");

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function(useSourceMap) {\n\tvar list = [];\n\n\t// return the list of modules as css string\n\tlist.toString = function toString() {\n\t\treturn this.map(function (item) {\n\t\t\tvar content = cssWithMappingToString(item, useSourceMap);\n\t\t\tif(item[2]) {\n\t\t\t\treturn \"@media \" + item[2] + \"{\" + content + \"}\";\n\t\t\t} else {\n\t\t\t\treturn content;\n\t\t\t}\n\t\t}).join(\"\");\n\t};\n\n\t// import a list of modules into the list\n\tlist.i = function(modules, mediaQuery) {\n\t\tif(typeof modules === \"string\")\n\t\t\tmodules = [[null, modules, \"\"]];\n\t\tvar alreadyImportedModules = {};\n\t\tfor(var i = 0; i < this.length; i++) {\n\t\t\tvar id = this[i][0];\n\t\t\tif(typeof id === \"number\")\n\t\t\t\talreadyImportedModules[id] = true;\n\t\t}\n\t\tfor(i = 0; i < modules.length; i++) {\n\t\t\tvar item = modules[i];\n\t\t\t// skip already imported module\n\t\t\t// this implementation is not 100% perfect for weird media query combinations\n\t\t\t//  when a module is imported multiple times with different media queries.\n\t\t\t//  I hope this will never occur (Hey this way we have smaller bundles)\n\t\t\tif(typeof item[0] !== \"number\" || !alreadyImportedModules[item[0]]) {\n\t\t\t\tif(mediaQuery && !item[2]) {\n\t\t\t\t\titem[2] = mediaQuery;\n\t\t\t\t} else if(mediaQuery) {\n\t\t\t\t\titem[2] = \"(\" + item[2] + \") and (\" + mediaQuery + \")\";\n\t\t\t\t}\n\t\t\t\tlist.push(item);\n\t\t\t}\n\t\t}\n\t};\n\treturn list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n\tvar content = item[1] || '';\n\tvar cssMapping = item[3];\n\tif (!cssMapping) {\n\t\treturn content;\n\t}\n\n\tif (useSourceMap && typeof btoa === 'function') {\n\t\tvar sourceMapping = toComment(cssMapping);\n\t\tvar sourceURLs = cssMapping.sources.map(function (source) {\n\t\t\treturn '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'\n\t\t});\n\n\t\treturn [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n\t}\n\n\treturn [content].join('\\n');\n}\n\n// Adapted from convert-source-map (MIT)\nfunction toComment(sourceMap) {\n\t// eslint-disable-next-line no-undef\n\tvar base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n\tvar data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n\n\treturn '/*# ' + data + ' */';\n}\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/lib/css-base.js?");

/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function escape(url) {\n    if (typeof url !== 'string') {\n        return url\n    }\n    // If url is already wrapped in quotes, remove them\n    if (/^['\"].*['\"]$/.test(url)) {\n        url = url.slice(1, -1);\n    }\n    // Should url be wrapped?\n    // See https://drafts.csswg.org/css-values-3/#urls\n    if (/[\"'() \\t\\n]/.test(url)) {\n        return '\"' + url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n') + '\"'\n    }\n\n    return url\n}\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/lib/url/escape.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(selector) {\n\t\tif (typeof memo[selector] === \"undefined\") {\n\t\t\tvar styleTarget = fn.call(this, selector);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[selector] = styleTarget;\n\t\t}\n\t\treturn memo[selector]\n\t};\n})(function (target) {\n\treturn document.querySelector(target)\n});\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n\tif (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertInto + \" \" + options.insertAt.before);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\toptions.attrs.type = \"text/css\";\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\toptions.attrs.type = \"text/css\";\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = options.transform(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./public/images/anastasiya-cut.png":
/*!******************************************!*\
  !*** ./public/images/anastasiya-cut.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"anastasiya-cut.png\";\n\n//# sourceURL=webpack:///./public/images/anastasiya-cut.png?");

/***/ }),

/***/ "./public/images/card1.png":
/*!*********************************!*\
  !*** ./public/images/card1.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"card1.png\";\n\n//# sourceURL=webpack:///./public/images/card1.png?");

/***/ }),

/***/ "./public/images/card2.png":
/*!*********************************!*\
  !*** ./public/images/card2.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"card2.png\";\n\n//# sourceURL=webpack:///./public/images/card2.png?");

/***/ }),

/***/ "./public/images/card3.png":
/*!*********************************!*\
  !*** ./public/images/card3.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"card3.png\";\n\n//# sourceURL=webpack:///./public/images/card3.png?");

/***/ }),

/***/ "./public/images/child1.png":
/*!**********************************!*\
  !*** ./public/images/child1.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"child1.png\";\n\n//# sourceURL=webpack:///./public/images/child1.png?");

/***/ }),

/***/ "./public/images/child2.png":
/*!**********************************!*\
  !*** ./public/images/child2.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"child2.png\";\n\n//# sourceURL=webpack:///./public/images/child2.png?");

/***/ }),

/***/ "./public/images/child3.png":
/*!**********************************!*\
  !*** ./public/images/child3.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"child3.png\";\n\n//# sourceURL=webpack:///./public/images/child3.png?");

/***/ }),

/***/ "./public/images/elena-cut.png":
/*!*************************************!*\
  !*** ./public/images/elena-cut.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"elena-cut.png\";\n\n//# sourceURL=webpack:///./public/images/elena-cut.png?");

/***/ }),

/***/ "./public/images/elena.png":
/*!*********************************!*\
  !*** ./public/images/elena.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"elena.png\";\n\n//# sourceURL=webpack:///./public/images/elena.png?");

/***/ }),

/***/ "./public/images/instagram.png":
/*!*************************************!*\
  !*** ./public/images/instagram.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"instagram.png\";\n\n//# sourceURL=webpack:///./public/images/instagram.png?");

/***/ }),

/***/ "./public/images/iphone.png":
/*!**********************************!*\
  !*** ./public/images/iphone.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"iphone.png\";\n\n//# sourceURL=webpack:///./public/images/iphone.png?");

/***/ }),

/***/ "./public/images/iphone12.png":
/*!************************************!*\
  !*** ./public/images/iphone12.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"iphone12.png\";\n\n//# sourceURL=webpack:///./public/images/iphone12.png?");

/***/ }),

/***/ "./public/images/long-card.png":
/*!*************************************!*\
  !*** ./public/images/long-card.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"long-card.png\";\n\n//# sourceURL=webpack:///./public/images/long-card.png?");

/***/ }),

/***/ "./public/images/main-block-bg.png":
/*!*****************************************!*\
  !*** ./public/images/main-block-bg.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"main-block-bg.png\";\n\n//# sourceURL=webpack:///./public/images/main-block-bg.png?");

/***/ }),

/***/ "./public/images/nastya.png":
/*!**********************************!*\
  !*** ./public/images/nastya.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"nastya.png\";\n\n//# sourceURL=webpack:///./public/images/nastya.png?");

/***/ }),

/***/ "./public/images/phone.png":
/*!*********************************!*\
  !*** ./public/images/phone.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"phone.png\";\n\n//# sourceURL=webpack:///./public/images/phone.png?");

/***/ }),

/***/ "./public/images/svetlana-cut.png":
/*!****************************************!*\
  !*** ./public/images/svetlana-cut.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"svetlana-cut.png\";\n\n//# sourceURL=webpack:///./public/images/svetlana-cut.png?");

/***/ }),

/***/ "./public/images/svetlana.png":
/*!************************************!*\
  !*** ./public/images/svetlana.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"svetlana.png\";\n\n//# sourceURL=webpack:///./public/images/svetlana.png?");

/***/ }),

/***/ "./public/images/video-bg-play.png":
/*!*****************************************!*\
  !*** ./public/images/video-bg-play.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"video-bg-play.png\";\n\n//# sourceURL=webpack:///./public/images/video-bg-play.png?");

/***/ }),

/***/ "./public/images/video-bg.png":
/*!************************************!*\
  !*** ./public/images/video-bg.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"video-bg.png\";\n\n//# sourceURL=webpack:///./public/images/video-bg.png?");

/***/ }),

/***/ "./public/images/video-player.png":
/*!****************************************!*\
  !*** ./public/images/video-player.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"video-player.png\";\n\n//# sourceURL=webpack:///./public/images/video-player.png?");

/***/ }),

/***/ 0:
/*!************************************************************!*\
  !*** multi ./assets/js/index.js ./assets/scss/global.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! Z:\\denwer\\www\\denwer\\starter\\assets\\js\\index.js */\"./assets/js/index.js\");\nmodule.exports = __webpack_require__(/*! Z:\\denwer\\www\\denwer\\starter\\assets\\scss\\global.scss */\"./assets/scss/global.scss\");\n\n\n//# sourceURL=webpack:///multi_./assets/js/index.js_./assets/scss/global.scss?");

/***/ })

/******/ });