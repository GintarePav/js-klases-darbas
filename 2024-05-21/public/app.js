/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_accessFilms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/accessFilms */ "./src/modules/accessFilms.js");
/* harmony import */ var _modules_printCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/printCard */ "./src/modules/printCard.js");
/* harmony import */ var _modules_clearCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/clearCard */ "./src/modules/clearCard.js");
/* harmony import */ var _modules_generateCommentForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/generateCommentForm */ "./src/modules/generateCommentForm.js");
/* harmony import */ var _modules_postComment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/postComment */ "./src/modules/postComment.js");






// document.querySelector("#film-title-search").addEventListener("input", (e) => {
//     e.preventDefault();
//     accessFilms();
// })

document.querySelector("#search-btn").addEventListener("click", function (e) {
  e.preventDefault();
  (0,_modules_clearCard__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_modules_printCard__WEBPACK_IMPORTED_MODULE_1__["default"])();
  document.querySelector("#film-title-search").value = "";
});

/***/ }),

/***/ "./src/modules/accessFilms.js":
/*!************************************!*\
  !*** ./src/modules/accessFilms.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _generateLinkAndAjax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateLinkAndAjax */ "./src/modules/generateLinkAndAjax.js");

var accessFilms = function accessFilms() {
  var searchResponse;
  (0,_generateLinkAndAjax__WEBPACK_IMPORTED_MODULE_0__["default"])().then(function (response) {
    return searchResponse = response;
  }).then(function () {
    if (searchResponse.Title) {
      var option = document.createElement("option");
      option.value = "".concat(searchResponse.Title);
      document.querySelector("#film-title-list").appendChild(option);
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accessFilms);

/***/ }),

/***/ "./src/modules/clearCard.js":
/*!**********************************!*\
  !*** ./src/modules/clearCard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var clearCard = function clearCard() {
  document.querySelector(".film-card").innerHTML = "";
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearCard);

/***/ }),

/***/ "./src/modules/commentLogVariable.js":
/*!*******************************************!*\
  !*** ./src/modules/commentLogVariable.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var commentLog = JSON.parse(localStorage.getItem("commentLog")) || [];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentLog);

/***/ }),

/***/ "./src/modules/createCommentCard.js":
/*!******************************************!*\
  !*** ./src/modules/createCommentCard.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var createCommentCard = function createCommentCard(name, text) {
  // const commentSection = document.createElement("section");
  var commentSection = document.querySelector(".comment-section");
  commentSection.classList = "comment-section";
  var singleComment = document.createElement("article");
  singleComment.classList = "comment-section__single-comment";
  var commenterNameRender = document.createElement("p");
  commenterNameRender.textContent = name;
  singleComment.appendChild(commenterNameRender);
  var commentTextRender = document.createElement("p");
  commentTextRender.textContent = text;
  singleComment.appendChild(commentTextRender);
  commentSection.appendChild(singleComment);
  // document.querySelector(".film-card").appendChild(commentSection);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCommentCard);

/***/ }),

/***/ "./src/modules/generateCommentForm.js":
/*!********************************************!*\
  !*** ./src/modules/generateCommentForm.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var generateCommentForm = function generateCommentForm() {
  var commentForm = document.createElement("form");
  var nameField = document.createElement("input");
  nameField.placeholder = "Name";
  nameField.type = "Text";
  nameField.id = "comment-name-field";
  commentForm.appendChild(nameField);
  var commentInput = document.createElement("input");
  commentInput.placeholder = "Add comment";
  commentInput.type = "text";
  commentInput.id = "comment-input";
  commentForm.appendChild(commentInput);
  var commentBtn = document.createElement("button");
  commentBtn.type = "submit";
  commentBtn.id = "submit-btn";
  commentBtn.textContent = "Submit";
  commentForm.appendChild(commentBtn);
  document.querySelector(".film-card").appendChild(commentForm);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateCommentForm);

/***/ }),

/***/ "./src/modules/generateLinkAndAjax.js":
/*!********************************************!*\
  !*** ./src/modules/generateLinkAndAjax.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var generateLinkAndAjax = function generateLinkAndAjax() {
  var url = "http://www.omdbapi.com/?t=";
  var key = "&apikey=ffbb1f2f";
  var searchInput = function searchInput() {
    var titleSearched = document.querySelector("#film-title-search").value.toLowerCase();
    if (titleSearched.includes(" ")) {
      titleSearched = titleSearched.replace(" ", "+");
    }
    return titleSearched;
  };
  return fetch("".concat(url).concat(searchInput()).concat(key)).then(function (response) {
    return response.json();
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateLinkAndAjax);

/***/ }),

/***/ "./src/modules/getComments.js":
/*!************************************!*\
  !*** ./src/modules/getComments.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createCommentCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createCommentCard */ "./src/modules/createCommentCard.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var getComments = function getComments(filmData) {
  var storedCommentLog = localStorage.getItem("commentLog");
  if (storedCommentLog) {
    var commentLog = JSON.parse(storedCommentLog);
    var _iterator = _createForOfIteratorHelper(commentLog),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var comment = _step.value;
        if (comment.title === filmData.Title) {
          (0,_createCommentCard__WEBPACK_IMPORTED_MODULE_0__["default"])(comment.name, comment.text);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getComments);

/***/ }),

/***/ "./src/modules/leaveAComment.js":
/*!**************************************!*\
  !*** ./src/modules/leaveAComment.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _generateCommentForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateCommentForm */ "./src/modules/generateCommentForm.js");
/* harmony import */ var _postComment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postComment */ "./src/modules/postComment.js");
/* harmony import */ var _getComments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getComments */ "./src/modules/getComments.js");



var leaveAComment = function leaveAComment(filmData) {
  document.querySelector(".film-card a").addEventListener("click", function (e) {
    e.preventDefault();
    if (!document.querySelector(".film-card form") && !document.querySelector(".comment-section")) {
      (0,_generateCommentForm__WEBPACK_IMPORTED_MODULE_0__["default"])();
      var commentSection = document.createElement("section");
      commentSection.classList = "comment-section";
      document.querySelector(".film-card").appendChild(commentSection);
      (0,_getComments__WEBPACK_IMPORTED_MODULE_2__["default"])(filmData);
      document.getElementById("submit-btn").addEventListener("click", function (e) {
        e.preventDefault();
        (0,_postComment__WEBPACK_IMPORTED_MODULE_1__["default"])(filmData);
        document.querySelector("#comment-name-field").value = "";
        document.querySelector("#comment-input").value = "";
      });
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (leaveAComment);

/***/ }),

/***/ "./src/modules/postComment.js":
/*!************************************!*\
  !*** ./src/modules/postComment.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createCommentCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createCommentCard */ "./src/modules/createCommentCard.js");
/* harmony import */ var _commentLogVariable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentLogVariable */ "./src/modules/commentLogVariable.js");


var postComment = function postComment(filmData) {
  var commenterName = document.querySelector("#comment-name-field").value;
  var commentText = document.querySelector("#comment-input").value;
  var commentObject = {
    title: filmData.Title,
    name: commenterName,
    text: commentText
  };
  if (commenterName.length < 1 || commentText.length < 1) {
    var errorPlaceholder = document.querySelector(".film-card form").parentNode;
    var errorMessage = document.createElement("p");
    errorMessage.textContent = "Empty fields are not allowed.";
    errorPlaceholder.insertBefore(errorMessage, document.querySelector(".film-card form"));
    window.setTimeout(function () {
      errorMessage.remove();
    }, 3000);
  } else {
    (0,_createCommentCard__WEBPACK_IMPORTED_MODULE_0__["default"])(commenterName, commentText);
    _commentLogVariable__WEBPACK_IMPORTED_MODULE_1__["default"].push(commentObject);
    localStorage.setItem("commentLog", JSON.stringify(_commentLogVariable__WEBPACK_IMPORTED_MODULE_1__["default"]));
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postComment);

/***/ }),

/***/ "./src/modules/printCard.js":
/*!**********************************!*\
  !*** ./src/modules/printCard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _generateLinkAndAjax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateLinkAndAjax */ "./src/modules/generateLinkAndAjax.js");
/* harmony import */ var _leaveAComment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leaveAComment */ "./src/modules/leaveAComment.js");


var printCard = function printCard() {
  var film;
  (0,_generateLinkAndAjax__WEBPACK_IMPORTED_MODULE_0__["default"])().then(function (result) {
    return film = result;
  }).then(function () {
    if (film.Title) {
      var card = document.createElement("article");
      card.classList = "film-card__card-inner";
      var filmBio = document.createElement("section");
      filmBio.innerHTML = "\n            <h3>".concat(film.Title, "</h3>\n            <p><span>Release Year:</span> ").concat(film.Released, "</p>\n            <p><span>Runtime:</span> ").concat(film.Runtime, "</p>\n            <p><span>Genre:</span> ").concat(film.Genre, "</p>\n            <p><span>Director:</span> ").concat(film.Director, "</p>\n            <p><span>Actors:</span> ").concat(film.Actors, "</p>\n            <p><span>Plot:</span> ").concat(film.Plot, "</p>\n            <p><span>IMDB Rating:</span> ").concat(film.imdbRating, "</p>\n            ");
      if (film.Awards != "N/A") {
        filmBio.innerHTML += "<p><span>Awards:</span> ".concat(film.Awards, "</p>");
      }
      if (film.Poster != "N/A") {
        filmBio.innerHTML += "\n                <div>\n                <img src=\"".concat(film.Poster, "\"/>\n                </div>");
      }
      card.appendChild(filmBio);
      document.querySelector(".film-card").appendChild(card);
      var commentOption = document.createElement("a");
      commentOption.textContent = "Comments";
      commentOption.href = "#";
      document.querySelector(".film-card").appendChild(commentOption);
      (0,_leaveAComment__WEBPACK_IMPORTED_MODULE_1__["default"])(film);
    } else {
      var errorMessage = document.createElement("h4");
      errorMessage.textContent = "Sorry, we couldn't find the film you're looking for. Please try again.";
      document.querySelector(".film-card").appendChild(errorMessage);
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (printCard);

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/app": 0,
/******/ 			"css/style": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkgp"] = self["webpackChunkgp"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/style"], () => (__webpack_require__("./src/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/style"], () => (__webpack_require__("./src/scss/style.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;