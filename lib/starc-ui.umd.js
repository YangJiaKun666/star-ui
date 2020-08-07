(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["starc-ui"] = factory();
	else
		root["starc-ui"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "10d3":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "116e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1a3c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_navbar_vue_vue_type_style_index_0_id_cd389df0_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b6bd");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_navbar_vue_vue_type_style_index_0_id_cd389df0_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_navbar_vue_vue_type_style_index_0_id_cd389df0_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_navbar_vue_vue_type_style_index_0_id_cd389df0_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "2359":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_style_index_0_id_4b2aac2c_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8316");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_style_index_0_id_4b2aac2c_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_style_index_0_id_4b2aac2c_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_style_index_0_id_4b2aac2c_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "2a05":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "445c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "47fc":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "593d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tabs_vue_vue_type_style_index_0_id_848cedea_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("10d3");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tabs_vue_vue_type_style_index_0_id_848cedea_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tabs_vue_vue_type_style_index_0_id_848cedea_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tabs_vue_vue_type_style_index_0_id_848cedea_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "59e1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_icon_vue_vue_type_style_index_0_id_320249aa_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("116e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_icon_vue_vue_type_style_index_0_id_320249aa_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_icon_vue_vue_type_style_index_0_id_320249aa_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_icon_vue_vue_type_style_index_0_id_320249aa_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "5c1f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_style_index_0_id_603bdf72_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2a05");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_style_index_0_id_603bdf72_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_style_index_0_id_603bdf72_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_style_index_0_id_603bdf72_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "6019":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_image_vue_vue_type_style_index_0_id_96060516_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6f8a");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_image_vue_vue_type_style_index_0_id_96060516_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_image_vue_vue_type_style_index_0_id_96060516_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_image_vue_vue_type_style_index_0_id_96060516_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "6041":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6f8a":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7506":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tab_item_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c178");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tab_item_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tab_item_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tab_item_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "8316":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "9833":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_item_vue_vue_type_style_index_0_id_ea0d7a56_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a744");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_item_vue_vue_type_style_index_0_id_ea0d7a56_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_item_vue_vue_type_style_index_0_id_ea0d7a56_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_item_vue_vue_type_style_index_0_id_ea0d7a56_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "a744":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ad96":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkbox_vue_vue_type_style_index_0_id_0af27782_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("47fc");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkbox_vue_vue_type_style_index_0_id_0af27782_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkbox_vue_vue_type_style_index_0_id_0af27782_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkbox_vue_vue_type_style_index_0_id_0af27782_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "b6bd":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "b95f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_vue_vue_type_style_index_0_id_4e809ce8_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("445c");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_vue_vue_type_style_index_0_id_4e809ce8_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_vue_vue_type_style_index_0_id_4e809ce8_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_vue_vue_type_style_index_0_id_4e809ce8_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "c178":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "cd42":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_navbar_item_vue_vue_type_style_index_0_id_36b685b5_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ceb0");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_navbar_item_vue_vue_type_style_index_0_id_36b685b5_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_navbar_item_vue_vue_type_style_index_0_id_36b685b5_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_navbar_item_vue_vue_type_style_index_0_id_36b685b5_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "ceb0":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./styles/index.less
var styles = __webpack_require__("6041");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"108cea88-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/input/input.vue?vue&type=template&id=603bdf72&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"star-input-box star-flex",class:_vm.disabled && 'star-disabled'},[_c('div',{staticClass:"star-input-icon"},[_vm._t("icon")],2),_c('input',_vm._b({ref:"input",staticClass:"star-input",attrs:{"type":_vm.type,"disabled":_vm.disabled,"readonly":_vm.readonly,"maxlength":_vm.maxlength,"placeholder":_vm.placeholder},on:{"focus":_vm.onFocus,"blur":_vm.onBlur,"input":_vm.onInput,"compositionstart":_vm.onCompositionstart,"compositionupdate":_vm.onCompositionupdate,"compositionend":_vm.onCompositionend,"change":_vm.onChange}},'input',_vm.$attrs,false)),_c('div',{staticClass:"star-input-icon"},[(_vm.clear && !_vm.disabled && !_vm.readonly && _vm.showClear)?_c('star-icon',{attrs:{"name":"times-circle","color":"#ccc","size":"18"},on:{"click":_vm.onClear}}):_vm._e()],1),_c('div',{class:['star-input-outline', _vm.isFocus && !_vm.disabled && !_vm.readonly ? 'star-background' : 'star-default-line']})])}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/input/input.vue?vue&type=template&id=603bdf72&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/input/input.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var inputvue_type_script_lang_js_ = ({
    name: "starInput",
    props: {
        value: [String, Number],
        type: {
            type: String,
            default: "text",
        },
        placeholder: {
            type: String,
            default: "write something~",
        },
        maxlength: {
            type: [Number, String],
            default: "",
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        readonly: {
            type: Boolean,
            default: false,
        },
        clear: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        nativeVale() {
            return this.value === null || this.value === undefined
                ? ""
                : String(this.value);
        },
    },
    data() {
        return {
            isFocus: false,
            showClear: false,
            isonComposition: false,
        };
    },
    watch: {
        nativeVale(val) {
            this.setNativeInputValue();
        },
        type() {
            this.$nextTick(() => {
                this.setNativeInputValue();
            });
        },
    },
    mounted() {
        this.getClearType();
        this.setNativeInputValue();
    },
    methods: {
        onFocus() {
            this.isFocus = true;
            this.$emit("focus");
        },
        onBlur() {
            this.isFocus = false;
            this.$emit("blur");
        },
        onInput(event) {
            if (this.isonComposition) return;
            if (event.target.value === this.nativeVale) return;
            this.getClearType();
            this.$emit("input", event.target.value);
            this.$nextTick(this.setNativeInputValue);
        },
        onChange(event) {
            this.$emit("change", event.target.value);
        },
        onClear() {
            this.$refs.input.value = "";
            this.showClear = false;
            this.$emit("input", "");
        },
        onCompositionstart() {
            this.isonComposition = true;
        },
        onCompositionupdate(event) {
            const text = event.target.value;
            const lastCharacter = text[text.length - 1] || "";
            const reg = /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi;
            this.isonComposition = !reg.test(lastCharacter);
        },
        onCompositionend(event) {
            if (this.isonComposition) {
                this.isonComposition = false;
                this.onInput(event);
            }
        },
        setNativeInputValue() {
            const input = this.$refs.input;
            if (!input) return;
            if (input.value === this.nativeVale) return;
            input.value = this.nativeVale;
        },
        getClearType() {
            this.$nextTick(() => {
                const input = this.$refs.input;
                if (input.value) {
                    this.showClear = true;
                } else {
                    this.showClear = false;
                }
            });
        },
    },
});

// CONCATENATED MODULE: ./packages/input/input.vue?vue&type=script&lang=js&
 /* harmony default export */ var input_inputvue_type_script_lang_js_ = (inputvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/input/input.vue?vue&type=style&index=0&id=603bdf72&lang=less&scoped=true&
var inputvue_type_style_index_0_id_603bdf72_lang_less_scoped_true_ = __webpack_require__("5c1f");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/input/input.vue






/* normalize component */

var component = normalizeComponent(
  input_inputvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "603bdf72",
  null
  
)

/* harmony default export */ var input = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"108cea88-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/icon/icon.vue?vue&type=template&id=320249aa&scoped=true&
var iconvue_type_template_id_320249aa_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"star-icon",on:{"click":function($event){return _vm.$emit('click')}}},[_c('i',{ref:"i",class:['fa',("fa-" + _vm.name)],style:({ color: _vm.color,fontSize: _vm.size + 'px' }),attrs:{"aria-hidden":"true"}})])}
var iconvue_type_template_id_320249aa_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/icon/icon.vue?vue&type=template&id=320249aa&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/icon/icon.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var iconvue_type_script_lang_js_ = ({
    name: "starIcon",
    props: {
        name: {
            type: String,
            default: "",
        },
        size: {
            type: [Number, String],
            default: 16,
        },
        color: {
            type: String,
            default: "",
        },
    },
});

// CONCATENATED MODULE: ./packages/icon/icon.vue?vue&type=script&lang=js&
 /* harmony default export */ var icon_iconvue_type_script_lang_js_ = (iconvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/icon/icon.vue?vue&type=style&index=0&id=320249aa&lang=less&scoped=true&
var iconvue_type_style_index_0_id_320249aa_lang_less_scoped_true_ = __webpack_require__("59e1");

// CONCATENATED MODULE: ./packages/icon/icon.vue






/* normalize component */

var icon_component = normalizeComponent(
  icon_iconvue_type_script_lang_js_,
  iconvue_type_template_id_320249aa_scoped_true_render,
  iconvue_type_template_id_320249aa_scoped_true_staticRenderFns,
  false,
  null,
  "320249aa",
  null
  
)

/* harmony default export */ var icon = (icon_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"108cea88-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/button/button.vue?vue&type=template&id=4b2aac2c&scoped=true&
var buttonvue_type_template_id_4b2aac2c_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:[
    'star-button-box',
    _vm.size && ("star-size-" + _vm.size),
    _vm.round && 'star-round',
    _vm.disabled && 'star-disbaled'
    ]},[_c('button',{class:[
            'star-button', 
            'star-flex',
            'star-block-click', 
            _vm.type && ("star-" + _vm.type),
            _vm.round && 'star-round' ],on:{"click":_vm.onClick}},[(_vm.loading)?_c('star-icon',{staticClass:"star-loading",style:({ marginRight: '10px' }),attrs:{"name":"circle-o-notch","size":"14"}}):_c('star-icon',{staticClass:"star-loading",style:({ marginRight: '10px' }),attrs:{"name":_vm.icon,"size":"14"}}),_c('span',[_vm._t("default")],2)],1)])}
var buttonvue_type_template_id_4b2aac2c_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/button/button.vue?vue&type=template&id=4b2aac2c&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/button/button.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * 当传入loading时，icon会失效
 */
/* harmony default export */ var buttonvue_type_script_lang_js_ = ({
    name: "starButton",
    props: {
        type: String,
        size: String,
        icon: String,
        round: Boolean,
        disabled: Boolean,
        loading: Boolean,
    },
    methods: {
        onClick() {
            this.$emit("click");
        },
    },
});

// CONCATENATED MODULE: ./packages/button/button.vue?vue&type=script&lang=js&
 /* harmony default export */ var button_buttonvue_type_script_lang_js_ = (buttonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/button/button.vue?vue&type=style&index=0&id=4b2aac2c&lang=less&scoped=true&
var buttonvue_type_style_index_0_id_4b2aac2c_lang_less_scoped_true_ = __webpack_require__("2359");

// CONCATENATED MODULE: ./packages/button/button.vue






/* normalize component */

var button_component = normalizeComponent(
  button_buttonvue_type_script_lang_js_,
  buttonvue_type_template_id_4b2aac2c_scoped_true_render,
  buttonvue_type_template_id_4b2aac2c_scoped_true_staticRenderFns,
  false,
  null,
  "4b2aac2c",
  null
  
)

/* harmony default export */ var button_button = (button_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"108cea88-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/checkbox/checkbox.vue?vue&type=template&id=0af27782&scoped=true&
var checkboxvue_type_template_id_0af27782_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:['star-checkbox', 'star-flex', _vm.size && ("star-" + _vm.size)],on:{"click":_vm.toggleCheck}},[_c('div',{class:[
        'star-checkbox-box',
        _vm.nativeValue && ['star-background','star-checked'],
        _vm.round && 'star-round'
        ]},[_c('transition',{attrs:{"name":"star-fade"}},[(_vm.nativeValue)?_c('star-icon',{attrs:{"name":"check","color":_vm.color || '#fff',"size":"12"}}):_vm._e()],1)],1),(_vm.label)?_c('div',{staticClass:"star-checkbox-label star-color"},[_vm._v(_vm._s(_vm.label || ''))]):_vm._e()])}
var checkboxvue_type_template_id_0af27782_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/checkbox/checkbox.vue?vue&type=template&id=0af27782&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/checkbox/checkbox.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var checkboxvue_type_script_lang_js_ = ({
    name: "starCheckbox",
    model: {
        prop: "isCheck",
        event: "change",
    },
    props: {
        label: String,
        color: String,
        size: {
            type: String,
            default: "mini",
        },
        round: Boolean,
    },
    data() {
        return {
            nativeValue: false,
        };
    },
    mounted() {
        this.nativeValue = this.$attrs.isCheck;
    },
    methods: {
        toggleCheck() {
            this.nativeValue = !this.nativeValue;
            this.$attrs.isCheck = this.nativeValue;
            this.$emit("change", this.$attrs.isCheck);
        },
    },
});

// CONCATENATED MODULE: ./packages/checkbox/checkbox.vue?vue&type=script&lang=js&
 /* harmony default export */ var checkbox_checkboxvue_type_script_lang_js_ = (checkboxvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/checkbox/checkbox.vue?vue&type=style&index=0&id=0af27782&lang=less&scoped=true&
var checkboxvue_type_style_index_0_id_0af27782_lang_less_scoped_true_ = __webpack_require__("ad96");

// CONCATENATED MODULE: ./packages/checkbox/checkbox.vue






/* normalize component */

var checkbox_component = normalizeComponent(
  checkbox_checkboxvue_type_script_lang_js_,
  checkboxvue_type_template_id_0af27782_scoped_true_render,
  checkboxvue_type_template_id_0af27782_scoped_true_staticRenderFns,
  false,
  null,
  "0af27782",
  null
  
)

/* harmony default export */ var checkbox_checkbox = (checkbox_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"108cea88-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/tabs/tabs.vue?vue&type=template&id=848cedea&scoped=true&
var tabsvue_type_template_id_848cedea_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tabs"},[_c('div',{staticClass:"tabs__nav",style:({ background: _vm.background })},_vm._l((_vm.tabs),function(tab,index){return _c('div',{key:index,ref:"tabs",refInFor:true,staticClass:"tab",class:{'tab--active': index == _vm.curActive},on:{"click":function($event){return _vm.onClick(index)}}},[_c('div',{class:index == _vm.curActive ? 'star-active-color' : 'star-color'},[_vm._v(_vm._s(tab.title))]),_c('transition',{attrs:{"name":"star-fade"}},[(index == _vm.curActive)?_c('div',{staticClass:"tab__line star-background"}):_vm._e()])],1)}),0),_vm._t("default")],2)}
var tabsvue_type_template_id_848cedea_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/tabs/tabs.vue?vue&type=template&id=848cedea&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/tabs/tabs.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var tabsvue_type_script_lang_js_ = ({
    name: "starTabs",
    model: {
        prop: "active",
    },
    props: {
        active: {
            type: [Number, String],
            default: 0,
        },
        background: String,
    },
    data() {
        return {
            tabs: [],
            curActive: null,
        };
    },
    watch: {
        active(val) {
            if (val !== this.curActive) {
                this.correctActive(val);
            }
        },
        tabs() {
            this.correctActive(this.curActive || this.active);
        },
    },
    mounted() {
        this.correctActive(this.active);
        this.isFirstLoaded = true;
        this.$nextTick(() => {
            this.isFirstLoaded = false;
        });
    },
    methods: {
        onClick(index) {
            const { title } = this.tabs[index];
            this.setCurActive(index);
            this.$emit("click", { index, title });
        },
        correctActive(active) {
            active = +active;
            const exist = this.tabs.some((tab) => tab.index === active);
            const defaultActive = (this.tabs[0] || {}).index || 0;
            this.setCurActive(exist ? active : defaultActive);
        },
        setCurActive(active) {
            if (active !== this.curActive) {
                if (this.curActive !== null) {
                    this.$emit("change", active, this.tabs[active].title);
                }
                this.curActive = active;
            }
        },
    },
});

// CONCATENATED MODULE: ./packages/tabs/tabs.vue?vue&type=script&lang=js&
 /* harmony default export */ var tabs_tabsvue_type_script_lang_js_ = (tabsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/tabs/tabs.vue?vue&type=style&index=0&id=848cedea&lang=less&scoped=true&
var tabsvue_type_style_index_0_id_848cedea_lang_less_scoped_true_ = __webpack_require__("593d");

// CONCATENATED MODULE: ./packages/tabs/tabs.vue






/* normalize component */

var tabs_component = normalizeComponent(
  tabs_tabsvue_type_script_lang_js_,
  tabsvue_type_template_id_848cedea_scoped_true_render,
  tabsvue_type_template_id_848cedea_scoped_true_staticRenderFns,
  false,
  null,
  "848cedea",
  null
  
)

/* harmony default export */ var tabs = (tabs_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"108cea88-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/tab-item/tab-item.vue?vue&type=template&id=3ea792e1&
var tab_itemvue_type_template_id_3ea792e1_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isSelected),expression:"isSelected"}],staticClass:"tab__pane"},[_vm._t("default")],2)}
var tab_itemvue_type_template_id_3ea792e1_staticRenderFns = []


// CONCATENATED MODULE: ./packages/tab-item/tab-item.vue?vue&type=template&id=3ea792e1&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/tab-item/tab-item.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var tab_itemvue_type_script_lang_js_ = ({
    name: "starTabItem",
    props: {
        title: String,
    },
    data() {
        return {
            parent: null,
        };
    },
    computed: {
        index() {
            return this.parent.tabs.indexOf(this);
        },
        isSelected() {
            return this.index === this.parent.curActive;
        },
    },
    methods: {
        findParent(name) {
            let parent = this.$parent;
            while (parent) {
                if (parent.$options.name === name) {
                    this.parent = parent;
                    break;
                }
                parent = parent.$parent; // 多层嵌套
            }
        },
    },
    created() {
        this.findParent("starTabs");
    },
    mounted() {
        const { tabs } = this.parent;
        const index = this.parent.$slots.default.indexOf(this.$vnode);
        tabs.splice(index === -1 ? tabs.length : index, 0, this);
    },
    beforeDestroy() {
        this.parent.tabs.splice(this.index, 1);
    },
});

// CONCATENATED MODULE: ./packages/tab-item/tab-item.vue?vue&type=script&lang=js&
 /* harmony default export */ var tab_item_tab_itemvue_type_script_lang_js_ = (tab_itemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/tab-item/tab-item.vue?vue&type=style&index=0&lang=css&
var tab_itemvue_type_style_index_0_lang_css_ = __webpack_require__("7506");

// CONCATENATED MODULE: ./packages/tab-item/tab-item.vue






/* normalize component */

var tab_item_component = normalizeComponent(
  tab_item_tab_itemvue_type_script_lang_js_,
  tab_itemvue_type_template_id_3ea792e1_render,
  tab_itemvue_type_template_id_3ea792e1_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var tab_item = (tab_item_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"108cea88-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/navbar/navbar.vue?vue&type=template&id=cd389df0&scoped=true&
var navbarvue_type_template_id_cd389df0_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:['star-flex', 'star-navbar', _vm.fixed && 'star-fixed']},[_vm._t("default")],2)}
var navbarvue_type_template_id_cd389df0_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/navbar/navbar.vue?vue&type=template&id=cd389df0&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/navbar/navbar.vue?vue&type=script&lang=js&
//
//
//
//
//

/* harmony default export */ var navbarvue_type_script_lang_js_ = ({
    name: "starNavbar",
    model: {
        prop: "active",
    },
    watch: {
        active(val) {
            if (this.curActive == val) return;
            this.curActive = this.val;
        },
        curActive(val) {
            this.$attrs.active = val;
            this.$emit("change", val);
        },
    },
    props: {
        active: {
            type: [Number, String],
            default: 0,
        },
        route: {
            type: Boolean,
            default: false,
        },
        fixed: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            navbars: this.$children,
            curActive: this.active,
        };
    },
});

// CONCATENATED MODULE: ./packages/navbar/navbar.vue?vue&type=script&lang=js&
 /* harmony default export */ var navbar_navbarvue_type_script_lang_js_ = (navbarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/navbar/navbar.vue?vue&type=style&index=0&id=cd389df0&lang=less&scoped=true&
var navbarvue_type_style_index_0_id_cd389df0_lang_less_scoped_true_ = __webpack_require__("1a3c");

// CONCATENATED MODULE: ./packages/navbar/navbar.vue






/* normalize component */

var navbar_component = normalizeComponent(
  navbar_navbarvue_type_script_lang_js_,
  navbarvue_type_template_id_cd389df0_scoped_true_render,
  navbarvue_type_template_id_cd389df0_scoped_true_staticRenderFns,
  false,
  null,
  "cd389df0",
  null
  
)

/* harmony default export */ var navbar = (navbar_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"108cea88-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/navbar-item/navbar-item.vue?vue&type=template&id=36b685b5&scoped=true&
var navbar_itemvue_type_template_id_36b685b5_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:['star-navbar-item','star-block-click', _vm.nativeActive == _vm.index ? 'star-active-color' : 'star-color'],style:(_vm.getTabWidth),on:{"click":_vm.toggleTab}},[_c('transition',{attrs:{"name":"star-stopandgo"}},[_vm._t("icon",[(_vm.iconName)?_c('star-icon',{attrs:{"name":_vm.iconName,"size":"24"}}):_vm._e()])],2),_c('transition',{attrs:{"name":"star-stopandgo"}},[(!_vm.hideText)?_c('span',[_vm._t("default")],2):_vm._e()])],1)}
var navbar_itemvue_type_template_id_36b685b5_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/navbar-item/navbar-item.vue?vue&type=template&id=36b685b5&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/navbar-item/navbar-item.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var navbar_itemvue_type_script_lang_js_ = ({
    name: "starNavbarItem",
    props: {
        name: [String, Number],
        replace: {
            type: Boolean,
            default: false,
        },
        iconName: String,
        hideText: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            parent: null,
            nativeActive: null,
            index: null,
        };
    },
    mounted() {
        this.findParent("starNavbar"); // 找到对应的父元素
        this.$nextTick(() => {
            // 将父组件的curActive复制到子组件
            this.nativeActive = this.parent.curActive;
            // 是否开启路由，开启后index将等于当前路由
            if (this.parent.route) {
                this.index = this.$route.path;
                return;
            }
            if (!this.name) {
                // 这里是获取该元素的位置：index
                this.index = this.parent.navbars.indexOf(this);
            } else {
                this.index = this.name;
            }
        });
    },
    computed: {
        // 父组件的curActive,方便监听
        parentActive() {
            let val = "";
            val =
                this.parent != null ? this.parent.curActive : this.nativeActive;
            return val;
        },
        getTabWidth() {
            if (this.parent != null) {
                let W = 100 / this.parent.navbars.length;
                return `width: ${W}%`;
            }
        },
    },
    watch: {
        nativeActive(val) {
            this.parent.curActive = val;
        },
        parentActive(val) {
            this.nativeActive = val;
        },
    },
    methods: {
        findParent(name) {
            let parent = this.$parent;
            while (parent) {
                if (parent.$options.name == name) {
                    this.parent = parent;
                    break;
                }
                parent = parent.$parent;
            }
        },
        toggleTab() {
            if (this.parent.route) {
                if (this.replace) {
                    this.$route.replace(this.name);
                } else {
                    this.$route.push(this.name);
                }
                return;
            }
            if (!this.name) {
                this.nativeActive = this.parent.navbars.indexOf(this);
            } else {
                this.nativeActive = this.name;
            }
        },
    },
});

// CONCATENATED MODULE: ./packages/navbar-item/navbar-item.vue?vue&type=script&lang=js&
 /* harmony default export */ var navbar_item_navbar_itemvue_type_script_lang_js_ = (navbar_itemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/navbar-item/navbar-item.vue?vue&type=style&index=0&id=36b685b5&lang=less&scoped=true&
var navbar_itemvue_type_style_index_0_id_36b685b5_lang_less_scoped_true_ = __webpack_require__("cd42");

// CONCATENATED MODULE: ./packages/navbar-item/navbar-item.vue






/* normalize component */

var navbar_item_component = normalizeComponent(
  navbar_item_navbar_itemvue_type_script_lang_js_,
  navbar_itemvue_type_template_id_36b685b5_scoped_true_render,
  navbar_itemvue_type_template_id_36b685b5_scoped_true_staticRenderFns,
  false,
  null,
  "36b685b5",
  null
  
)

/* harmony default export */ var navbar_item = (navbar_item_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"108cea88-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/carousel/carousel.vue?vue&type=template&id=4e809ce8&scoped=true&
var carouselvue_type_template_id_4e809ce8_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"star-carousel",style:({ height: (_vm.height + "px") })},[_c('ul',{staticClass:"star-carousel-imgs"},[_vm._t("default")],2),_c('ul',{staticClass:"star-carousel-spots"},_vm._l((_vm.carousels),function(item,index){return _c('li',{key:index,staticClass:"star-carousel-spot",class:_vm.active == index && ['star-carousel-current','star-background'],style:(_vm.transitionType)})}),0)])}
var carouselvue_type_template_id_4e809ce8_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/carousel/carousel.vue?vue&type=template&id=4e809ce8&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/carousel/carousel.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var carouselvue_type_script_lang_js_ = ({
    name: "starCarousel",
    props: {
        playDuration: {
            type: [String, Number],
            default: 3000,
        },
        transitionType: {
            type: [Object, String],
            default: () => {
                return { transition: "all 300ms ease" };
            },
        },
        height: {
            type: [Number, String],
            default: 150,
        },
    },
    data() {
        return {
            stateTimer: null,
            carousels: this.$children,
            active: 0,
        };
    },
    watch: {
        active(val) {
            this.$emit("change", val);
        },
        playDuration(val) {
            location.reload();
        },
    },
    mounted() {
        this.$nextTick(() => {
            this.autoPlay();
        });
    },
    methods: {
        autoPlay() {
            this.stateTimer = setInterval(() => {
                if (this.active < this.carousels.length - 1) {
                    this.active++;
                } else {
                    this.active = 0;
                }
            }, Number(this.playDuration));
        },
    },
});

// CONCATENATED MODULE: ./packages/carousel/carousel.vue?vue&type=script&lang=js&
 /* harmony default export */ var carousel_carouselvue_type_script_lang_js_ = (carouselvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/carousel/carousel.vue?vue&type=style&index=0&id=4e809ce8&lang=less&scoped=true&
var carouselvue_type_style_index_0_id_4e809ce8_lang_less_scoped_true_ = __webpack_require__("b95f");

// CONCATENATED MODULE: ./packages/carousel/carousel.vue






/* normalize component */

var carousel_component = normalizeComponent(
  carousel_carouselvue_type_script_lang_js_,
  carouselvue_type_template_id_4e809ce8_scoped_true_render,
  carouselvue_type_template_id_4e809ce8_scoped_true_staticRenderFns,
  false,
  null,
  "4e809ce8",
  null
  
)

/* harmony default export */ var carousel = (carousel_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"108cea88-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/carousel-item/carousel-item.vue?vue&type=template&id=ea0d7a56&scoped=true&
var carousel_itemvue_type_template_id_ea0d7a56_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{class:['star-carousel-item',_vm.active == _vm.index ? 'star-active-width' : 'star-default-width'],style:(_vm.parent.transitionType)},[_vm._t("default")],2)}
var carousel_itemvue_type_template_id_ea0d7a56_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/carousel-item/carousel-item.vue?vue&type=template&id=ea0d7a56&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/carousel-item/carousel-item.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//

/* harmony default export */ var carousel_itemvue_type_script_lang_js_ = ({
    name: "starCarouselItem",
    computed: {
        parent() {
            return this.$parent;
        },
        index() {
            return this.parent.$children.indexOf(this);
        },
        active() {
            return this.parent.active;
        },
    },
});

// CONCATENATED MODULE: ./packages/carousel-item/carousel-item.vue?vue&type=script&lang=js&
 /* harmony default export */ var carousel_item_carousel_itemvue_type_script_lang_js_ = (carousel_itemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/carousel-item/carousel-item.vue?vue&type=style&index=0&id=ea0d7a56&lang=less&scoped=true&
var carousel_itemvue_type_style_index_0_id_ea0d7a56_lang_less_scoped_true_ = __webpack_require__("9833");

// CONCATENATED MODULE: ./packages/carousel-item/carousel-item.vue






/* normalize component */

var carousel_item_component = normalizeComponent(
  carousel_item_carousel_itemvue_type_script_lang_js_,
  carousel_itemvue_type_template_id_ea0d7a56_scoped_true_render,
  carousel_itemvue_type_template_id_ea0d7a56_scoped_true_staticRenderFns,
  false,
  null,
  "ea0d7a56",
  null
  
)

/* harmony default export */ var carousel_item = (carousel_item_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"108cea88-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/image/image.vue?vue&type=template&id=96060516&scoped=true&
var imagevue_type_template_id_96060516_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"star-image-box"},[_c('img',{class:['star-image',_vm.fit && ("star-" + _vm.fit)],attrs:{"src":_vm.src}})])}
var imagevue_type_template_id_96060516_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/image/image.vue?vue&type=template&id=96060516&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/image/image.vue?vue&type=script&lang=js&
//
//
//
//
//

/* harmony default export */ var imagevue_type_script_lang_js_ = ({
    name: "starImage",
    props: {
        src: String,
        fit: String,
    },
});

// CONCATENATED MODULE: ./packages/image/image.vue?vue&type=script&lang=js&
 /* harmony default export */ var image_imagevue_type_script_lang_js_ = (imagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/image/image.vue?vue&type=style&index=0&id=96060516&lang=less&scoped=true&
var imagevue_type_style_index_0_id_96060516_lang_less_scoped_true_ = __webpack_require__("6019");

// CONCATENATED MODULE: ./packages/image/image.vue






/* normalize component */

var image_component = normalizeComponent(
  image_imagevue_type_script_lang_js_,
  imagevue_type_template_id_96060516_scoped_true_render,
  imagevue_type_template_id_96060516_scoped_true_staticRenderFns,
  false,
  null,
  "96060516",
  null
  
)

/* harmony default export */ var image_image = (image_component.exports);
// CONCATENATED MODULE: ./packages/index.js













const components = [
    input,
    icon,
    button_button,
    checkbox_checkbox,
    tabs,
    tab_item,
    navbar,
    navbar_item,
    carousel,
    carousel_item,
    image_image
]
const install = function (Vue, options = {}) {
    Vue.nextTick(() => {
        //  自定义主题 
        // let app = document.getElementById('app')
        let app = document.body
        app.className = 'star-theme-custom'
        app.style.setProperty('--backColor', options.backColor || '')
        app.style.setProperty('--fColor', options.textColor || '')
        app.style.setProperty('--fActiveColor', options.fActiveColor || '')
    })
    components.map(component => {
        Vue.component(component.name, component)
    })
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

/* harmony default export */ var packages_0 = ({
    install,
    starInput: input,
    starIcon: icon,
    starButton: button_button,
    starCheckbox: checkbox_checkbox,
    starTabs: tabs,
    starTbaItem: tab_item,
    starNavbar: navbar,
    starNavbarItem: navbar_item,
    starCarousel: carousel,
    starCarouselItem: carousel_item,
    starImage: image_image
});
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });
});
//# sourceMappingURL=starc-ui.umd.js.map