(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["diagram"] = factory();
	else
		root["diagram"] = factory();
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

/***/ "0a01":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Diagram_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("151d");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Diagram_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Diagram_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Diagram_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "0a49":
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__("9b43");
var IObject = __webpack_require__("626a");
var toObject = __webpack_require__("4bf8");
var toLength = __webpack_require__("9def");
var asc = __webpack_require__("cd1c");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "0bfb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__("cb7c");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "0d58":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("ce10");
var enumBugKeys = __webpack_require__("e11e");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "1169":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("2d95");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "11e9":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("52a7");
var createDesc = __webpack_require__("4630");
var toIObject = __webpack_require__("6821");
var toPrimitive = __webpack_require__("6a99");
var has = __webpack_require__("69a8");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("9e1e") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "1495":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var anObject = __webpack_require__("cb7c");
var getKeys = __webpack_require__("0d58");

module.exports = __webpack_require__("9e1e") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "151d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1c80":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditLinkModal_vue_vue_type_style_index_0_id_798a2cd2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6e96");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditLinkModal_vue_vue_type_style_index_0_id_798a2cd2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditLinkModal_vue_vue_type_style_index_0_id_798a2cd2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditLinkModal_vue_vue_type_style_index_0_id_798a2cd2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "230e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var document = __webpack_require__("7726").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "2aba":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var has = __webpack_require__("69a8");
var SRC = __webpack_require__("ca5a")('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("8378").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "2aeb":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("cb7c");
var dPs = __webpack_require__("1495");
var enumBugKeys = __webpack_require__("e11e");
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("230e")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("fab2").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "2b4c":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("5537")('wks');
var uid = __webpack_require__("ca5a");
var Symbol = __webpack_require__("7726").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "2d00":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "2d95":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "32e9":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var createDesc = __webpack_require__("4630");
module.exports = __webpack_require__("9e1e") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "35b1":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "3846":
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__("9e1e") && /./g.flags != 'g') __webpack_require__("86cc").f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__("0bfb")
});


/***/ }),

/***/ "386b":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("5ca1");
var fails = __webpack_require__("79e5");
var defined = __webpack_require__("be13");
var quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function (string, tag, attribute, value) {
  var S = String(defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
module.exports = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};


/***/ }),

/***/ "4588":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "4630":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "4927":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "4bf8":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "52a7":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "536c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputModal_vue_vue_type_style_index_0_id_172f0f9c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d0df");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputModal_vue_vue_type_style_index_0_id_172f0f9c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputModal_vue_vue_type_style_index_0_id_172f0f9c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputModal_vue_vue_type_style_index_0_id_172f0f9c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "5537":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("8378");
var global = __webpack_require__("7726");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("2d00") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "5ca1":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var core = __webpack_require__("8378");
var hide = __webpack_require__("32e9");
var redefine = __webpack_require__("2aba");
var ctx = __webpack_require__("9b43");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "5dbc":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var setPrototypeOf = __webpack_require__("8b97").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "6046":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "613b":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5537")('keys');
var uid = __webpack_require__("ca5a");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "626a":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("2d95");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "6821":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("626a");
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "69a8":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "6a99":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("d3f4");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "6b54":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__("3846");
var anObject = __webpack_require__("cb7c");
var $flags = __webpack_require__("0bfb");
var DESCRIPTORS = __webpack_require__("9e1e");
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__("2aba")(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__("79e5")(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),

/***/ "6e96":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7514":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__("5ca1");
var $find = __webpack_require__("0a49")(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__("9c6c")(KEY);


/***/ }),

/***/ "7726":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "77f1":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4588");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "7844":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Node_vue_vue_type_style_index_0_id_d80123fe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4927");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Node_vue_vue_type_style_index_0_id_d80123fe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Node_vue_vue_type_style_index_0_id_d80123fe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Node_vue_vue_type_style_index_0_id_d80123fe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "79e5":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "7f7f":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__("9e1e") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "8378":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "86cc":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("cb7c");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var toPrimitive = __webpack_require__("6a99");
var dP = Object.defineProperty;

exports.f = __webpack_require__("9e1e") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "8b97":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("d3f4");
var anObject = __webpack_require__("cb7c");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__("9b43")(Function.call, __webpack_require__("11e9").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "8d7e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditNodeModal_vue_vue_type_style_index_0_id_df61daa0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("35b1");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditNodeModal_vue_vue_type_style_index_0_id_df61daa0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditNodeModal_vue_vue_type_style_index_0_id_df61daa0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditNodeModal_vue_vue_type_style_index_0_id_df61daa0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "9093":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("ce10");
var hiddenKeys = __webpack_require__("e11e").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "9b43":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("d8e8");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "9c6c":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__("2b4c")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("32e9")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "9def":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("4588");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "9e1e":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("79e5")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "aa77":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("5ca1");
var defined = __webpack_require__("be13");
var fails = __webpack_require__("79e5");
var spaces = __webpack_require__("fdef");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "b54a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.10 String.prototype.link(url)
__webpack_require__("386b")('link', function (createHTML) {
  return function link(url) {
    return createHTML(this, 'a', 'href', url);
  };
});


/***/ }),

/***/ "be13":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "c366":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("6821");
var toLength = __webpack_require__("9def");
var toAbsoluteIndex = __webpack_require__("77f1");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "c5f6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("7726");
var has = __webpack_require__("69a8");
var cof = __webpack_require__("2d95");
var inheritIfRequired = __webpack_require__("5dbc");
var toPrimitive = __webpack_require__("6a99");
var fails = __webpack_require__("79e5");
var gOPN = __webpack_require__("9093").f;
var gOPD = __webpack_require__("11e9").f;
var dP = __webpack_require__("86cc").f;
var $trim = __webpack_require__("aa77").trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__("2aeb")(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__("9e1e") ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__("2aba")(global, NUMBER, $Number);
}


/***/ }),

/***/ "c69a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("9e1e") && !__webpack_require__("79e5")(function () {
  return Object.defineProperty(__webpack_require__("230e")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "ca5a":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "cb7c":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "cd1c":
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__("e853");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "ce10":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("69a8");
var toIObject = __webpack_require__("6821");
var arrayIndexOf = __webpack_require__("c366")(false);
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "d0df":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "d3f4":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "d8e8":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "daa4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Link_vue_vue_type_style_index_0_id_69935fbe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6046");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Link_vue_vue_type_style_index_0_id_69935fbe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Link_vue_vue_type_style_index_0_id_69935fbe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Link_vue_vue_type_style_index_0_id_69935fbe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "e11e":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "e853":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var isArray = __webpack_require__("1169");
var SPECIES = __webpack_require__("2b4c")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "fab2":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("7726").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"ca0e2238-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Diagram.vue?vue&type=template&id=229705a6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"scrollXY"},[_c('div',[_c('svg',{attrs:{"width":_vm.width * _vm.scale,"height":_vm.height * _vm.scale,"xmlns":"http://www.w3.org/2000/svg"}},[_c('g',{attrs:{"transform":_vm.scaleStr}},[_c('rect',{attrs:{"x":"0","y":"0","width":_vm.width,"height":_vm.height,"fill":_vm.background},on:{"click":_vm.reset}}),_vm._l((_vm.linkList),function(item){return _c('Link',{key:item.id,attrs:{"width":_vm.width,"height":_vm.height,"link":item,"selected":item.id === _vm.selectedLink,"source":_vm.findNode(item.source),"destination":_vm.findNode(item.destination),"editable":_vm.editable,"labels":_vm.labels,"scale":_vm.scale},on:{"editLink":_vm.editLink,"select":_vm.selectLink,"updateLocation":_vm.updateLinkLocation,"remove":_vm.removeLink}})}),_vm._l((_vm.nodeList),function(item){return _c('Node',{key:item.id,attrs:{"width":_vm.width,"height":_vm.height,"node":item,"selected":item.id === _vm.selectedNode,"createLinkMode":_vm.createLinkMode,"editable":_vm.editable,"labels":_vm.labels,"scale":_vm.scale},on:{"editNode":_vm.editNode,"select":_vm.selectNode,"updateLocation":_vm.updateNodeLocation,"toggleSelect":_vm.toggleSrcSelect,"commitDest":_vm.commitDest,"remove":_vm.removeNode}})})],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/Diagram.vue?vue&type=template&id=229705a6&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.find.js
var es6_array_find = __webpack_require__("7514");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__("6b54");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"ca0e2238-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib/Node.vue?vue&type=template&id=d80123fe&scoped=true&
var Nodevue_type_template_id_d80123fe_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',[(_vm.selected)?_c('g',[_c('text',{staticClass:"button",attrs:{"x":_vm.x + 5,"y":_vm.y + _vm.height + 22,"fill":"#00b894"},on:{"click":_vm.editCandidate}},[_vm._v("\n      "+_vm._s(_vm.labels.edit || "Edit")+"\n    ")])]):_vm._e(),(_vm.selected)?_c('g',[_c('text',{staticClass:"button",attrs:{"x":_vm.x + 5,"y":_vm.y - 10,"fill":"#00b894","stroke":"none"},on:{"click":_vm.toggleSelect}},[_vm._v("\n      "+_vm._s(_vm.labels.link || "Link")+"\n    ")]),_c('text',{staticClass:"button",attrs:{"x":_vm.x + 65,"y":_vm.y + _vm.height + 22,"fill":"#ff7675"},on:{"click":_vm.remove}},[_vm._v("\n      "+_vm._s(_vm.labels.remove || "Remove")+"\n    ")])]):_vm._e(),(_vm.createLinkMode && !_vm.selected)?_c('g',[_c('text',{staticClass:"button",attrs:{"x":_vm.x + 5,"y":_vm.y - 10,"fill":"#ff7675"},on:{"click":_vm.commitDest}},[_vm._v("\n      "+_vm._s(_vm.labels.select || "Select")+"\n    ")])]):_vm._e(),_c('svg',{staticClass:"shadow",attrs:{"x":_vm.x,"y":_vm.y,"width":_vm.width,"height":_vm.height}},[(_vm.node.shape === 'ellipse')?_c('ellipse',{staticClass:"grab",attrs:{"cx":"50%","cy":"50%","width":"100%","height":"100%","rx":_vm.width / 2,"ry":_vm.height / 2,"fill":_vm.content.color || '#ecf0f1'},on:{"touchstart":_vm.mousedown,"mousedown":_vm.mousedown,"mousemove":_vm.mousemove,"touchmove":_vm.mousemove,"mouseup":_vm.mouseup,"touchend":_vm.mouseup}}):_c('rect',{staticClass:"grab",attrs:{"x":"0","y":"0","width":"100%","height":"100%","rx":"5","ry":"3","fill":_vm.content.color || '#ecf0f1'},on:{"touchstart":_vm.mousedown,"mousedown":_vm.mousedown,"mousemove":_vm.mousemove,"touchmove":_vm.mousemove,"mouseup":_vm.mouseup,"touchend":_vm.mouseup}}),_c('a',{attrs:{"target":"_blank","href":_vm.content.url}},[_c('text',{attrs:{"x":"50%","y":"50%","fill":"#34495e","font-family":"Meiryo UI, sans-serif","font-size":"20","text-anchor":"middle"}},[_vm._v("\n        "+_vm._s(_vm.content.text)+"\n      ")])])])])}
var Nodevue_type_template_id_d80123fe_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/lib/Node.vue?vue&type=template&id=d80123fe&scoped=true&

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js



function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}
// CONCATENATED MODULE: ./src/mouseLocation.js
/* harmony default export */ var mouseLocation = ({
  methods: {
    getLocation: function getLocation(e) {
      /* マウスカーソルの位置またはタッチ位置を返す */
      var x = 0;
      var y = 0;

      if (e.touches) {
        /* タッチの場合 */
        x = e.touches[0].pageX;
        y = e.touches[0].pageY;
      } else {
        /* マウスの場合 */
        x = e.pageX;
        y = e.pageY;
      }

      return [x, y];
    }
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib/Node.vue?vue&type=script&lang=js&


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

/* harmony default export */ var Nodevue_type_script_lang_js_ = ({
  mixins: [mouseLocation],
  props: {
    node: {
      width: Number,
      height: Number,
      id: String,
      point: {
        type: Object,
        default: {
          x: 0,
          y: 0
        }
      },
      content: {
        text: String,
        url: String,
        color: String
      },
      shape: {
        type: String,
        default: "rectangle"
      }
    },
    editable: Boolean,
    createLinkMode: Boolean,
    selected: Boolean,
    labels: Object,
    scale: String
  },
  data: function data() {
    return {
      startPosition: null,
      cursorOffset: {
        x: 0,
        y: 0
      },
      id: this.node.id,
      x: this.node.point.x,
      y: this.node.point.y,
      width: this.node.width,
      height: this.node.height,
      content: this.node.content
    };
  },
  methods: {
    toggleSelect: function toggleSelect() {
      this.$emit("toggleSelect");
    },
    commitDest: function commitDest() {
      this.$emit("commitDest", this.id);
    },
    remove: function remove() {
      this.$emit("remove", this.id);
    },
    mousedown: function mousedown(e) {
      if (!this.editable) return;
      this.$emit("select", this.id);

      var _this$getLocation = this.getLocation(e),
          _this$getLocation2 = _slicedToArray(_this$getLocation, 2),
          x = _this$getLocation2[0],
          y = _this$getLocation2[1];

      this.cursorOffset.x = x;
      this.cursorOffset.y = y;
      this.startPosition = {
        x: this.x,
        y: this.y
      };
      document.addEventListener("mousemove", this.mousemove);
      document.addEventListener("mouseup", this.mouseup);
    },
    mousemove: function mousemove(e) {
      if (this.startPosition) {
        e.preventDefault();

        var _this$getLocation3 = this.getLocation(e),
            _this$getLocation4 = _slicedToArray(_this$getLocation3, 2),
            x = _this$getLocation4[0],
            y = _this$getLocation4[1];

        this.x = this.startPosition.x + (x - this.cursorOffset.x) / parseFloat(this.scale);
        this.y = this.startPosition.y + (y - this.cursorOffset.y) / parseFloat(this.scale);
        this.$emit("updateLocation", {
          id: this.id,
          x: this.x,
          y: this.y
        });
      }
    },
    mouseup: function mouseup() {
      this.startPosition = null;
      document.removeEventListener("mousemove", this.mousemove);
      document.removeEventListener("mouseup", this.mouseup);
    },
    editCandidate: function editCandidate() {
      this.$emit("editNode", {
        id: this.id,
        shape: this.node.shape,
        content: this.content
      });
    }
  }
});
// CONCATENATED MODULE: ./src/lib/Node.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_Nodevue_type_script_lang_js_ = (Nodevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/lib/Node.vue?vue&type=style&index=0&id=d80123fe&lang=scss&scoped=true&
var Nodevue_type_style_index_0_id_d80123fe_lang_scss_scoped_true_ = __webpack_require__("7844");

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
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
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

// CONCATENATED MODULE: ./src/lib/Node.vue






/* normalize component */

var component = normalizeComponent(
  lib_Nodevue_type_script_lang_js_,
  Nodevue_type_template_id_d80123fe_scoped_true_render,
  Nodevue_type_template_id_d80123fe_scoped_true_staticRenderFns,
  false,
  null,
  "d80123fe",
  null
  
)

component.options.__file = "Node.vue"
/* harmony default export */ var Node = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"ca0e2238-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib/Link.vue?vue&type=template&id=69935fbe&scoped=true&
var Linkvue_type_template_id_69935fbe_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',[_c('path',{attrs:{"d":("M" + (_vm.source.point.x + _vm.source.width / 2) + " " + (_vm.source.point.y +
        _vm.source.height / 2) + " Q " + (_vm.point.x) + " " + (_vm.point.y) + " " + (_vm.destination.point.x +
        _vm.destination.width / 2) + " " + (_vm.destination.point.y +
        _vm.destination.height / 2)),"stroke":_vm.link.color || '#ffeaa7',"stroke-width":"3","fill":"none"}}),(_vm.editable)?_c('g',[_c('line',{attrs:{"x1":_vm.source.point.x + _vm.source.width / 2,"y1":_vm.source.point.y + _vm.source.height / 2,"x2":_vm.point.x,"y2":_vm.point.y,"stroke":"lightgray"}}),_c('line',{attrs:{"x1":_vm.point.x,"y1":_vm.point.y,"x2":_vm.destination.point.x + _vm.destination.width / 2,"y2":_vm.destination.point.y + _vm.destination.height / 2,"stroke":"lightgray"}}),_c('ellipse',{staticClass:"grab",attrs:{"id":_vm.id,"cx":_vm.point.x,"cy":_vm.point.y,"rx":"10","ry":"10","fill":"#ff7675","stroke-width":"2"},on:{"click":_vm.select,"mousedown":_vm.mousedown,"touchstart":_vm.mousedown,"mousemove":_vm.mousemove,"touchmove":_vm.mousemove,"mouseup":_vm.mouseup,"touchend":_vm.mouseup}})]):_vm._e(),_c('g',[(_vm.selected)?_c('text',{staticClass:"button",attrs:{"x":_vm.point.x - 15,"y":_vm.point.y - 20,"fill":"#00b894"},on:{"click":_vm.edit}},[_vm._v("\n      "+_vm._s(_vm.labels.edit || "Edit")+"\n    ")]):_vm._e(),(_vm.selected)?_c('text',{staticClass:"button",attrs:{"x":_vm.point.x - 15,"y":_vm.point.y + 30,"fill":"#ff7675"},on:{"click":_vm.remove}},[_vm._v("\n      "+_vm._s(_vm.labels.remove || "Remove")+"\n    ")]):_vm._e()])])}
var Linkvue_type_template_id_69935fbe_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/lib/Link.vue?vue&type=template&id=69935fbe&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.link.js
var es6_string_link = __webpack_require__("b54a");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib/Link.vue?vue&type=script&lang=js&



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

/* harmony default export */ var Linkvue_type_script_lang_js_ = ({
  mixins: [mouseLocation],
  props: {
    selected: Boolean,
    editable: Boolean,
    source: {
      id: Number,
      x: Number,
      y: Number
    },
    destination: {
      id: Number,
      x: Number,
      y: Number
    },
    link: {
      id: String,
      color: String,
      point: {
        x: Number,
        y: Number
      }
    },
    labels: Object,
    scale: String
  },
  data: function data() {
    return {
      startPosition: null,
      cursorOffset: {
        x: 0,
        y: 0
      },
      id: this.link.id,
      point: this.link.point
    };
  },
  methods: {
    mousedown: function mousedown(e) {
      var _this$getLocation = this.getLocation(e),
          _this$getLocation2 = _slicedToArray(_this$getLocation, 2),
          x = _this$getLocation2[0],
          y = _this$getLocation2[1];

      this.cursorOffset.x = x;
      this.cursorOffset.y = y;
      this.startPosition = {
        x: this.point.x,
        y: this.point.y
      };
      document.addEventListener("mousemove", this.mousemove);
      document.addEventListener("mouseup", this.mouseup);
    },
    mousemove: function mousemove(e) {
      if (this.startPosition) {
        e.preventDefault();

        var _this$getLocation3 = this.getLocation(e),
            _this$getLocation4 = _slicedToArray(_this$getLocation3, 2),
            x = _this$getLocation4[0],
            y = _this$getLocation4[1];

        this.point.x = this.startPosition.x + (x - this.cursorOffset.x) / parseFloat(this.scale);
        this.point.y = this.startPosition.y + (y - this.cursorOffset.y) / parseFloat(this.scale);
        this.$emit("updateLocation", {
          id: this.id,
          x: this.point.x,
          y: this.point.y
        });
      }
    },
    mouseup: function mouseup() {
      this.startPosition = null;
      document.removeEventListener("mousemove", this.mousemove);
      document.removeEventListener("mouseup", this.mouseup);
    },
    remove: function remove() {
      this.$emit("remove", this.id);
    },
    select: function select() {
      this.$emit("select", this.id);
    },
    edit: function edit() {
      this.$emit("editLink", {
        id: this.link.id,
        content: {
          color: this.link.color
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./src/lib/Link.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_Linkvue_type_script_lang_js_ = (Linkvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/lib/Link.vue?vue&type=style&index=0&id=69935fbe&scoped=true&lang=css&
var Linkvue_type_style_index_0_id_69935fbe_scoped_true_lang_css_ = __webpack_require__("daa4");

// CONCATENATED MODULE: ./src/lib/Link.vue






/* normalize component */

var Link_component = normalizeComponent(
  lib_Linkvue_type_script_lang_js_,
  Linkvue_type_template_id_69935fbe_scoped_true_render,
  Linkvue_type_template_id_69935fbe_scoped_true_staticRenderFns,
  false,
  null,
  "69935fbe",
  null
  
)

Link_component.options.__file = "Link.vue"
/* harmony default export */ var Link = (Link_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Diagram.vue?vue&type=script&lang=js&




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


/* harmony default export */ var Diagramvue_type_script_lang_js_ = ({
  name: "Diagram",
  props: {
    width: Number,
    height: Number,
    scale: {
      type: String,
      default: "1"
    },
    background: String,
    nodes: Array,
    links: Array,
    editable: Boolean,
    labels: Object
  },
  components: {
    Node: Node,
    Link: Link
  },
  computed: {
    scaleStr: function scaleStr() {
      return "scale(" + (this.scale || 1.0) + ")" + "translate(" + 0 + "," + 0 + ")";
    },
    nodeList: {
      get: function get() {
        return this.nodes;
      },
      set: function set(val) {
        this.$emit("nodeChanged", {
          nodes: val
        });
      }
    },
    linkList: {
      get: function get() {
        return this.links;
      },
      set: function set(val) {
        this.$emit("linkChanged", {
          links: val
        });
      }
    }
  },
  data: function data() {
    return {
      name: "",
      url: "",
      color: "",
      selectedNode: -1,
      selectedLink: -1,
      createLinkMode: false
    };
  },
  methods: {
    editNode: function editNode(item) {
      this.$emit("editNode", item);
    },
    editLink: function editLink(item) {
      this.$emit("editLink", item);
    },
    generateID: function generateID() {
      return new Date().getTime().toString(16) + Math.floor(Math.random() * 1000000).toString(16);
    },
    addNode: function addNode() {
      if (!this.editable) return;
      this.nodeList.push({
        id: this.generateID(),
        content: {
          text: this.name,
          color: this.color,
          url: this.url
        },
        width: 200,
        height: 60,
        point: {
          x: 10,
          y: 100 + Math.random() * 100
        }
      });
    },
    reset: function reset() {
      if (!this.createLinkMode) {
        this.selectedNode = -1;
        this.selectedLink = -1;
      }
    },
    updateLinkLocation: function updateLinkLocation(obj) {
      var item = this.linkList.find(function (x) {
        return x.id === obj.id;
      });
      item.point.x = obj.x;
      item.point.y = obj.y;
    },
    findNode: function findNode(id) {
      return this.nodes.find(function (x) {
        return x.id === id;
      });
    },
    removeLink: function removeLink(id) {
      this.linkList = this.linkList.filter(function (x) {
        return x.id !== id;
      });
    },
    updateNodeLocation: function updateNodeLocation(obj) {
      var item = this.nodeList.find(function (x) {
        return x.id === obj.id;
      });
      item.point.x = obj.x;
      item.point.y = obj.y;
    },
    selectNode: function selectNode(id) {
      this.selectedNode = id;
    },
    selectLink: function selectLink(id) {
      this.selectedLink = id;
    },
    toggleSrcSelect: function toggleSrcSelect() {
      this.createLinkMode = !this.createLinkMode;
    },
    commitDest: function commitDest(id) {
      var _this = this;

      var src = this.nodeList.find(function (x) {
        return x.id === _this.selectedNode;
      });
      var dest = this.nodeList.find(function (x) {
        return x.id === id;
      });
      this.linkList.push({
        id: this.generateID(),
        source: this.selectedNode,
        destination: id,
        point: {
          x: (src.point.x + dest.point.x) * 0.5,
          y: (src.point.y + dest.point.y) * 0.5
        }
      });
      this.createLinkMode = false;
      this.selectedNode = -1;
    },
    removeNode: function removeNode(id) {
      var nodes = this.nodeList.filter(function (x) {
        return x.id !== id;
      });
      this.nodeList = nodes;
      var links = this.linkList.filter(function (x) {
        return x.source !== id && x.destination !== id;
      });
      this.linkList = links;
    }
  }
});
// CONCATENATED MODULE: ./src/Diagram.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Diagramvue_type_script_lang_js_ = (Diagramvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/Diagram.vue?vue&type=style&index=0&lang=css&
var Diagramvue_type_style_index_0_lang_css_ = __webpack_require__("0a01");

// CONCATENATED MODULE: ./src/Diagram.vue






/* normalize component */

var Diagram_component = normalizeComponent(
  src_Diagramvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

Diagram_component.options.__file = "Diagram.vue"
/* harmony default export */ var Diagram = (Diagram_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"ca0e2238-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/DiagramEditor.vue?vue&type=template&id=03b913cc&
var DiagramEditorvue_type_template_id_03b913cc_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"editor"}},[(!_vm.editable)?_c('VButton',{staticClass:"button",on:{"click":function($event){_vm.editable = true}}},[_vm._v("Edit")]):_c('span',[_c('VButton',{on:{"click":_vm.openModal}},[_vm._v("New Node")]),_c('VButton',{staticClass:"button",on:{"click":_vm.endEdit}},[_vm._v("End")])],1),_c('VButton',{staticClass:"button",on:{"click":_vm.openInputModal}},[_vm._v("import/export")]),_c('VSelect',{model:{value:(_vm.scale),callback:function ($$v) {_vm.scale=$$v},expression:"scale"}},[_c('option',{attrs:{"value":"0.5"}},[_vm._v("Small")]),_c('option',{attrs:{"value":"1","selected":""}},[_vm._v("Medium")]),_c('option',{attrs:{"value":"2"}},[_vm._v("Large")])]),_c('EditNodeModal',{attrs:{"node":{ content: {} },"isActive":_vm.isModalActive},on:{"ok":_vm.addNode,"cancel":_vm.cancel}}),_c('EditNodeModal',{attrs:{"node":_vm.tmpNode,"isActive":_vm.isEditModalActive},on:{"ok":_vm.editNode,"cancel":_vm.cancel}}),_c('EditLinkModal',{attrs:{"link":_vm.tmpLink,"isActive":_vm.isEditLinkModalActive},on:{"ok":_vm.editLink,"cancel":_vm.cancel}}),_c('InputModal',{attrs:{"text":_vm.json,"isActive":_vm.isInputModalActive},on:{"ok":_vm.importData,"cancel":_vm.cancel}}),_c('Diagram',{attrs:{"width":2000,"height":1000,"scale":_vm.scale,"background":"#fafafa","nodes":_vm.graphData.nodes,"links":_vm.graphData.links,"editable":_vm.editable,"labels":{
      edit: 'Edit',
      remove: 'Remove',
      link: 'New Link',
      select: 'Select'
    }},on:{"editNode":_vm.openNodeEdit,"editLink":_vm.openLinkEdit,"nodeChanged":_vm.nodeChanged,"linkChanged":_vm.linkChanged}})],1)}
var DiagramEditorvue_type_template_id_03b913cc_staticRenderFns = []


// CONCATENATED MODULE: ./src/DiagramEditor.vue?vue&type=template&id=03b913cc&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"ca0e2238-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib/EditNodeModal.vue?vue&type=template&id=df61daa0&scoped=true&
var EditNodeModalvue_type_template_id_df61daa0_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('VModal',{attrs:{"isActive":_vm.isActive},on:{"clickModal":_vm.cancel}},[_c('transition',{attrs:{"name":"item"}},[(_vm.isActive)?_c('div',{staticClass:"form"},[_c('VInput',{attrs:{"placeholder":"name"},model:{value:(_vm.newData.text),callback:function ($$v) {_vm.$set(_vm.newData, "text", $$v)},expression:"newData.text"}}),_c('br'),_c('VInput',{attrs:{"placeholder":"url"},model:{value:(_vm.newData.url),callback:function ($$v) {_vm.$set(_vm.newData, "url", $$v)},expression:"newData.url"}}),_c('br'),_c('VInput',{attrs:{"placeholder":"color"},model:{value:(_vm.newData.color),callback:function ($$v) {_vm.$set(_vm.newData, "color", $$v)},expression:"newData.color"}}),_c('br'),_c('VSelect',{model:{value:(_vm.newShape),callback:function ($$v) {_vm.newShape=$$v},expression:"newShape"}},[_c('option',{attrs:{"value":"rectangle","selected":""}},[_vm._v("Rectangle")]),_c('option',{attrs:{"value":"ellipse"}},[_vm._v("Ellipse")])]),_c('br'),_c('VButton',{on:{"click":_vm.ok}},[_vm._v("OK")]),_c('VButton',{staticClass:"danger",on:{"click":_vm.cancel}},[_vm._v("Cancel")])],1):_vm._e()])],1)}
var EditNodeModalvue_type_template_id_df61daa0_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/lib/EditNodeModal.vue?vue&type=template&id=df61daa0&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib/EditNodeModal.vue?vue&type=script&lang=js&
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
/* harmony default export */ var EditNodeModalvue_type_script_lang_js_ = ({
  props: {
    isActive: Boolean,
    node: {
      type: Object,
      default: function _default() {
        return {
          id: "",
          shape: "rectangle",
          content: {
            text: "none",
            url: "",
            color: "#ecf0f1"
          }
        };
      }
    }
  },
  data: function data() {
    return {
      newShape: this.node.shape,
      newData: this.node.content
    };
  },
  methods: {
    ok: function ok() {
      this.$emit("ok", {
        id: this.node.id,
        shape: this.newShape,
        content: this.newData
      });
    },
    cancel: function cancel() {
      this.$emit("cancel");
    }
  }
});
// CONCATENATED MODULE: ./src/lib/EditNodeModal.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_EditNodeModalvue_type_script_lang_js_ = (EditNodeModalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/lib/EditNodeModal.vue?vue&type=style&index=0&id=df61daa0&lang=scss&scoped=true&
var EditNodeModalvue_type_style_index_0_id_df61daa0_lang_scss_scoped_true_ = __webpack_require__("8d7e");

// CONCATENATED MODULE: ./src/lib/EditNodeModal.vue






/* normalize component */

var EditNodeModal_component = normalizeComponent(
  lib_EditNodeModalvue_type_script_lang_js_,
  EditNodeModalvue_type_template_id_df61daa0_scoped_true_render,
  EditNodeModalvue_type_template_id_df61daa0_scoped_true_staticRenderFns,
  false,
  null,
  "df61daa0",
  null
  
)

EditNodeModal_component.options.__file = "EditNodeModal.vue"
/* harmony default export */ var EditNodeModal = (EditNodeModal_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"ca0e2238-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib/EditLinkModal.vue?vue&type=template&id=798a2cd2&scoped=true&
var EditLinkModalvue_type_template_id_798a2cd2_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('VModal',{attrs:{"isActive":_vm.isActive},on:{"clickModal":_vm.cancel}},[_c('transition',{attrs:{"name":"item"}},[(_vm.isActive)?_c('div',{staticClass:"form"},[_c('VInput',{attrs:{"placeholder":"color"},model:{value:(_vm.content.color),callback:function ($$v) {_vm.$set(_vm.content, "color", $$v)},expression:"content.color"}}),_c('br'),_c('VButton',{on:{"click":_vm.ok}},[_vm._v("OK")]),_c('VButton',{staticClass:"danger",on:{"click":_vm.cancel}},[_vm._v("Cancel")])],1):_vm._e()])],1)}
var EditLinkModalvue_type_template_id_798a2cd2_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/lib/EditLinkModal.vue?vue&type=template&id=798a2cd2&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib/EditLinkModal.vue?vue&type=script&lang=js&

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
/* harmony default export */ var EditLinkModalvue_type_script_lang_js_ = ({
  props: {
    isActive: Boolean,
    link: {
      type: Object,
      default: function _default() {
        return {
          id: "0",
          content: {
            color: "#ecf0f1"
          }
        };
      }
    }
  },
  data: function data() {
    return {
      content: this.link.content
    };
  },
  methods: {
    ok: function ok() {
      this.$emit("ok", {
        id: this.link.id,
        content: {
          color: this.content.color
        }
      });
    },
    cancel: function cancel() {
      this.$emit("cancel");
    }
  }
});
// CONCATENATED MODULE: ./src/lib/EditLinkModal.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_EditLinkModalvue_type_script_lang_js_ = (EditLinkModalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/lib/EditLinkModal.vue?vue&type=style&index=0&id=798a2cd2&lang=scss&scoped=true&
var EditLinkModalvue_type_style_index_0_id_798a2cd2_lang_scss_scoped_true_ = __webpack_require__("1c80");

// CONCATENATED MODULE: ./src/lib/EditLinkModal.vue






/* normalize component */

var EditLinkModal_component = normalizeComponent(
  lib_EditLinkModalvue_type_script_lang_js_,
  EditLinkModalvue_type_template_id_798a2cd2_scoped_true_render,
  EditLinkModalvue_type_template_id_798a2cd2_scoped_true_staticRenderFns,
  false,
  null,
  "798a2cd2",
  null
  
)

EditLinkModal_component.options.__file = "EditLinkModal.vue"
/* harmony default export */ var EditLinkModal = (EditLinkModal_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"ca0e2238-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib/InputModal.vue?vue&type=template&id=172f0f9c&scoped=true&
var InputModalvue_type_template_id_172f0f9c_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('VModal',{attrs:{"isActive":_vm.isActive},on:{"clickModal":_vm.cancel}},[_c('div',[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.tmp),expression:"tmp"}],staticClass:"input",attrs:{"required":"","placeholder":"JSON"},domProps:{"value":(_vm.tmp)},on:{"input":function($event){if($event.target.composing){ return; }_vm.tmp=$event.target.value}}}),_c('br'),_c('VButton',{on:{"click":_vm.ok}},[_vm._v("OK")]),_c('VButton',{staticClass:"danger",on:{"click":_vm.cancel}},[_vm._v("Cancel")])],1)])}
var InputModalvue_type_template_id_172f0f9c_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/lib/InputModal.vue?vue&type=template&id=172f0f9c&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib/InputModal.vue?vue&type=script&lang=js&
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
/* harmony default export */ var InputModalvue_type_script_lang_js_ = ({
  props: {
    isActive: Boolean,
    text: String
  },
  watch: {
    text: function text(val) {
      this.tmp = val;
    }
  },
  data: function data() {
    return {
      tmp: ""
    };
  },
  methods: {
    ok: function ok() {
      this.$emit("ok", {
        text: this.tmp
      });
    },
    cancel: function cancel() {
      this.$emit("cancel");
    }
  }
});
// CONCATENATED MODULE: ./src/lib/InputModal.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_InputModalvue_type_script_lang_js_ = (InputModalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/lib/InputModal.vue?vue&type=style&index=0&id=172f0f9c&lang=scss&scoped=true&
var InputModalvue_type_style_index_0_id_172f0f9c_lang_scss_scoped_true_ = __webpack_require__("536c");

// CONCATENATED MODULE: ./src/lib/InputModal.vue






/* normalize component */

var InputModal_component = normalizeComponent(
  lib_InputModalvue_type_script_lang_js_,
  InputModalvue_type_template_id_172f0f9c_scoped_true_render,
  InputModalvue_type_template_id_172f0f9c_scoped_true_staticRenderFns,
  false,
  null,
  "172f0f9c",
  null
  
)

InputModal_component.options.__file = "InputModal.vue"
/* harmony default export */ var InputModal = (InputModal_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/DiagramEditor.vue?vue&type=script&lang=js&


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




/* harmony default export */ var DiagramEditorvue_type_script_lang_js_ = ({
  name: "DiagramEditor",
  components: {
    Diagram: Diagram,
    EditNodeModal: EditNodeModal,
    EditLinkModal: EditLinkModal,
    InputModal: InputModal
  },
  props: {
    value: {
      type: Object,
      default: function _default() {
        return {
          nodes: [],
          links: []
        };
      }
    }
  },
  computed: {
    graphData: {
      get: function get() {
        return this.value;
      },
      set: function set(val) {
        this.$emit("input", val);
      }
    }
  },
  data: function data() {
    return {
      name: "",
      url: "",
      color: "",
      json: "",
      scale: "1",
      isModalActive: false,
      isEditModalActive: false,
      isEditLinkModalActive: false,
      isInputModalActive: false,
      editable: false,
      tmpNode: {
        id: "",
        shape: "",
        content: {
          text: "",
          url: "",
          color: ""
        }
      },
      tmpLink: {
        id: "",
        content: {
          color: ""
        }
      }
    };
  },
  methods: {
    generateID: function generateID() {
      return new Date().getTime().toString(16) + Math.floor(Math.random() * 1000000).toString(16);
    },
    openModal: function openModal() {
      this.isModalActive = true;
    },
    cancel: function cancel() {
      this.isModalActive = false;
      this.isEditModalActive = false;
      this.isEditLinkModalActive = false;
      this.isInputModalActive = false;
    },
    addNode: function addNode(item) {
      this.graphData.nodes.push({
        id: this.generateID(),
        content: {
          text: item.content.text,
          url: item.content.url,
          color: item.content.color
        },
        width: 150,
        height: 60,
        shape: item.shape,
        point: {
          x: 10,
          y: 100 + Math.random() * 100
        }
      });
      this.isModalActive = false;
    },
    openNodeEdit: function openNodeEdit(item) {
      this.tmpNode.id = item.id;
      this.tmpNode.content.text = item.content.text;
      this.tmpNode.content.url = item.content.url;
      this.tmpNode.content.color = item.content.color;
      this.tmpNode.shape = item.shape;
      this.isModalActive = false;
      this.isEditModalActive = true;
    },
    editNode: function editNode(item) {
      var tmp = this.graphData.nodes.find(function (x) {
        return x.id === item.id;
      });
      tmp.content.text = item.content.text;
      tmp.content.url = item.content.url;
      tmp.content.color = item.content.color;
      tmp.shape = item.shape;
      this.isEditModalActive = false;
    },
    openLinkEdit: function openLinkEdit(item) {
      this.tmpLink.id = item.id;
      this.tmpLink.content.color = item.content.color;
      this.isEditLinkModalActive = true;
    },
    editLink: function editLink(item) {
      var tmp = this.graphData.links.find(function (x) {
        return x.id === item.id;
      });
      tmp.color = item.content.color;
      this.isEditLinkModalActive = false;
    },
    endEdit: function endEdit() {
      this.editable = false;
    },
    nodeChanged: function nodeChanged(obj) {
      this.graphData.nodes = obj.nodes;
    },
    linkChanged: function linkChanged(obj) {
      this.graphData.links = obj.links;
    },
    openInputModal: function openInputModal() {
      this.isInputModalActive = true;
      this.json = JSON.stringify(this.graphData);
    },
    importData: function importData(value) {
      var obj = JSON.parse(value.text);

      if (obj) {
        this.graphData.nodes = obj.nodes;
        this.graphData.links = obj.links;
        this.isInputModalActive = false;
      }
    }
  }
});
// CONCATENATED MODULE: ./src/DiagramEditor.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_DiagramEditorvue_type_script_lang_js_ = (DiagramEditorvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/DiagramEditor.vue





/* normalize component */

var DiagramEditor_component = normalizeComponent(
  src_DiagramEditorvue_type_script_lang_js_,
  DiagramEditorvue_type_template_id_03b913cc_render,
  DiagramEditorvue_type_template_id_03b913cc_staticRenderFns,
  false,
  null,
  null,
  null
  
)

DiagramEditor_component.options.__file = "DiagramEditor.vue"
/* harmony default export */ var DiagramEditor = (DiagramEditor_component.exports);
// CONCATENATED MODULE: ./src/index.js


/* harmony default export */ var src = (Diagram);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js
/* concated harmony reexport Diagram */__webpack_require__.d(__webpack_exports__, "Diagram", function() { return Diagram; });
/* concated harmony reexport DiagramEditor */__webpack_require__.d(__webpack_exports__, "DiagramEditor", function() { return DiagramEditor; });


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src);



/***/ }),

/***/ "fdef":
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ })

/******/ });
});
//# sourceMappingURL=diagram.umd.js.map