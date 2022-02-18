/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/home.js":
/*!********************************!*\
  !*** ./src/components/home.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _styles_home_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/home.css */ \"./src/styles/home.css\");\n/* harmony import */ var _pvp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pvp */ \"./src/components/pvp.js\");\n/* harmony import */ var _pve__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pve */ \"./src/components/pve.js\");\n\n\n\n\nfunction home() {\n  var main = document.createElement('div');\n  main.classList.add('home-main');\n  var header = document.createElement('div');\n  var title = document.createElement('h1');\n  var section = document.createElement('div');\n  var pvpButton = document.createElement('button');\n  var pveButton = document.createElement('button');\n  var arr = ['B', 'A', 'T', 'T', 'L', 'E', 'S', 'H', 'I', 'P'];\n\n  for (var i = 0; i < 10; i++) {\n    var span = document.createElement('span');\n    span.textContent = arr[i];\n    title.appendChild(span);\n  }\n\n  pvpButton.setAttribute('type', 'button');\n  pveButton.setAttribute('type', 'button');\n  pvpButton.textContent = 'Player vs Player';\n  pveButton.textContent = 'Player vs Ai';\n  header.classList.add('home-header');\n  title.classList.add('home-title');\n  section.classList.add('home-section');\n  pvpButton.classList.add('home-pvp');\n  pveButton.classList.add('home-pve');\n  pveButton.addEventListener('click', function () {\n    main.parentElement.appendChild((0,_pve__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n    main.remove();\n  });\n  pvpButton.addEventListener('click', function () {\n    // main.parentElement.append(pvp());\n    // main.remove();\n    alert('Under construction');\n  });\n  header.appendChild(title);\n  section.appendChild(pvpButton);\n  section.appendChild(pveButton);\n  main.appendChild(header);\n  main.append(section);\n  return main;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\n\n//# sourceURL=webpack://battleship/./src/components/home.js?");

/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/components/home.js\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/style.css */ \"./src/styles/style.css\");\n\n\nvar content = document.getElementById('content');\n\n(function () {\n  content.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n})();\n\n//# sourceURL=webpack://battleship/./src/components/index.js?");

/***/ }),

/***/ "./src/components/pve.js":
/*!*******************************!*\
  !*** ./src/components/pve.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _sources_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sources/player */ \"./src/sources/player.js\");\n/* harmony import */ var _sources_gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sources/gameboard */ \"./src/sources/gameboard.js\");\n/* harmony import */ var _styles_pve_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/pve.css */ \"./src/styles/pve.css\");\n\n\n\n\nfunction pve() {\n  var player1 = new _sources_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](new _sources_gameboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"]());\n  var ai = new _sources_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](new _sources_gameboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"]());\n  player1.standartPlace();\n  ai.aiRandomise();\n  var main = document.createElement('div');\n  main.classList.add('pve-main');\n  var board = document.createElement('div');\n  var text = document.createElement('h3');\n  var containerP = document.createElement('div');\n  var firstP = document.createElement('div');\n  var aiP = document.createElement('div');\n\n  for (var i = 0; i < 10; i++) {\n    for (var j = 0; j < 10; j++) {\n      var point = document.createElement('div');\n      point.classList.add('pve-point');\n      point.setAttribute('data-x', \"\".concat(j));\n      point.setAttribute('data-y', \"\".concat(i));\n      firstP.appendChild(point);\n    }\n  }\n\n  for (var _i = 0; _i < 10; _i++) {\n    for (var _j = 0; _j < 10; _j++) {\n      var _point = document.createElement('div');\n\n      _point.classList.add('pve-point');\n\n      _point.setAttribute('data-x', \"\".concat(_j));\n\n      _point.setAttribute('data-y', \"\".concat(_i));\n\n      aiP.appendChild(_point);\n    }\n  }\n\n  text.textContent = \"The Battleship Begins!\";\n  board.classList.add('pve-board');\n  text.classList.add('pve-scoreText');\n  containerP.classList.add('pve-container');\n  firstP.classList.add('pve-firstP');\n  aiP.classList.add('pve-aiP');\n  board.appendChild(text);\n  containerP.appendChild(firstP);\n  containerP.appendChild(aiP);\n  Array.from(aiP.children).forEach(function (e) {\n    e.addEventListener('click', function (event) {\n      secondBoard(event);\n      firstBoard();\n    }, {\n      once: true\n    });\n  });\n\n  function firstBoard() {\n    player1.aiShot();\n    var index = player1.getRecords()[0].y * 10 + player1.getRecords()[0].x;\n    var stil = firstP.children[index];\n\n    if (player1.getRecords()[0].hasOwnProperty('position')) {\n      stil.style = \"background: url('../src/icons/explosion.png') no-repeat center center;\";\n    } else {\n      stil.style = \"background: url('../src/icons/boom.png') no-repeat center center;\";\n    }\n  }\n\n  function secondBoard(event) {\n    var x = event.target.getAttribute('data-x');\n    var y = event.target.getAttribute('data-y');\n    ai.getPlayer().receiveAttack(x, y);\n\n    if (ai.getPlayer().board()[y][x].hasOwnProperty('position')) {\n      event.target.style = \"background: url('../src/icons/explosion.png') no-repeat center center;\";\n    } else {\n      event.target.style = \"background: url('../src/icons/boom.png') no-repeat center center;\";\n    }\n  }\n\n  main.appendChild(board);\n  main.appendChild(containerP);\n  return main;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pve);\n\n//# sourceURL=webpack://battleship/./src/components/pve.js?");

/***/ }),

/***/ "./src/components/pvp.js":
/*!*******************************!*\
  !*** ./src/components/pvp.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _sources_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sources/player */ \"./src/sources/player.js\");\n/* harmony import */ var _sources_gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sources/gameboard */ \"./src/sources/gameboard.js\");\n/* harmony import */ var _styles_pvp_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/pvp.css */ \"./src/styles/pvp.css\");\n\n\n\n\nfunction pvp() {\n  var player1 = new _sources_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](new _sources_gameboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"]());\n  var player2 = new _sources_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](new _sources_gameboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"]());\n  player1.standartPlace();\n  player2.secondPlace();\n  var main = document.createElement('div');\n  main.classList.add('pvp-main');\n  var board = document.createElement('div');\n  var text = document.createElement('h3');\n  var containerP = document.createElement('div');\n  var firstP = document.createElement('div');\n  var secondP = document.createElement('div');\n\n  for (var i = 0; i < 10; i++) {\n    for (var j = 0; j < 10; j++) {\n      var point = document.createElement('div');\n      point.classList.add('pvp-point');\n      point.setAttribute('data-x', \"\".concat(j));\n      point.setAttribute('data-y', \"\".concat(i));\n      firstP.appendChild(point);\n    }\n  }\n\n  for (var _i = 0; _i < 10; _i++) {\n    for (var _j = 0; _j < 10; _j++) {\n      var _point = document.createElement('div');\n\n      _point.classList.add('pvp-point');\n\n      _point.setAttribute('data-x', \"\".concat(_j));\n\n      _point.setAttribute('data-y', \"\".concat(_i));\n\n      secondP.appendChild(_point);\n    }\n  }\n\n  text.textContent = \"The Battleship Begins!\";\n  board.classList.add('pvp-board');\n  text.classList.add('pvp-scoreText');\n  containerP.classList.add('pvp-container');\n  firstP.classList.add('pvp-firstP');\n  secondP.classList.add('pvp-secondP');\n  board.appendChild(text);\n  containerP.appendChild(firstP);\n  containerP.appendChild(secondP);\n  var counter = 0;\n  Array.from(containerP.children).forEach(function (e) {\n    e.addEventListener('click', function (event) {\n      if (e.classList[0] == 'pvp-firstP' && counter % 2 != 0) {\n        firstBoard(event);\n        counter++;\n      } else if (e.classList[0] == 'pvp-secondP' && counter % 2 == 0) {\n        secondBoard(event);\n        counter++;\n      }\n    });\n  });\n\n  function firstBoard(event) {\n    var x = event.target.getAttribute('data-x');\n    var y = event.target.getAttribute('data-y');\n    player1.getPlayer().receiveAttack(x, y);\n\n    if (player1.getPlayer().board()[y][x].hasOwnProperty('position')) {\n      event.target.style = \"background: url('../src/icons/explosion.png') no-repeat center center;\";\n    } else {\n      event.target.style = \"background: url('../src/icons/boom.png') no-repeat center center;\";\n    }\n  }\n\n  function secondBoard(event) {\n    var x = event.target.getAttribute('data-x');\n    var y = event.target.getAttribute('data-y');\n    player2.getPlayer().receiveAttack(x, y);\n\n    if (player2.getPlayer().board()[y][x].hasOwnProperty('position')) {\n      event.target.style = \"background: url('../src/icons/explosion.png') no-repeat center center;\";\n    } else {\n      event.target.style = \"background: url('../src/icons/boom.png') no-repeat center center;\";\n    }\n  }\n\n  main.appendChild(board);\n  main.appendChild(containerP);\n  return main;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pvp);\n\n//# sourceURL=webpack://battleship/./src/components/pvp.js?");

/***/ }),

/***/ "./src/sources/gameboard.js":
/*!**********************************!*\
  !*** ./src/sources/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/sources/ship.js\");\n\n\nfunction Gameboard() {\n  var _this = this;\n\n  /*Object Creation Tasks */\n  var arr = new Array(10);\n\n  for (var i = 0; i < 10; i++) {\n    arr[i] = new Array(10);\n\n    for (var j = 0; j < 10; j++) {\n      arr[i][j] = {\n        x: j,\n        y: i,\n        safe: true\n      };\n    }\n  }\n  /*Object Property */\n\n\n  this.length = 100;\n  var axis = 'x';\n  var clear = false;\n  /*Object Methods */\n\n  this.ship = {\n    carrier: new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](5),\n    battleship: new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](4),\n    destroyer: new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3),\n    submarine: new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3),\n    patrolboat: new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](2),\n    allSunk: function allSunk() {\n      if (_this.ship.carrier.isSunk() && _this.ship.battleship.isSunk() && _this.ship.destroyer.isSunk() && _this.ship.submarine.isSunk() && _this.ship.patrolboat.isSunk()) {\n        return 'All ships have been sunk';\n      }\n    }\n  };\n\n  this.axisChange = function (value) {\n    if (value == 'y') {\n      axis = 'y';\n    } else if (value == 'x') {\n      axis = 'x';\n    }\n  };\n\n  this.put = function (veh, x, y) {\n    if (axis == 'x') {\n      clear = true;\n\n      for (var _i = 0; _i < veh.length; _i++) {\n        if (arr[y][x + _i].hasOwnProperty('position')) {\n          clear = false;\n        }\n      }\n\n      if (clear) {\n        for (var _i2 = 0; _i2 < veh.length; _i2++) {\n          arr[y][x + _i2].veh = veh;\n          arr[y][x + _i2].position = _i2;\n        }\n      }\n    } else if (axis == 'y') {\n      clear = true;\n\n      for (var _i3 = 0; _i3 < veh.length; _i3++) {\n        if (arr[y + _i3][x].hasOwnProperty('position')) {\n          clear = false;\n        }\n      }\n\n      if (clear) {\n        for (var _i4 = 0; _i4 < veh.length; _i4++) {\n          arr[y + _i4][x].veh = veh;\n          arr[y + _i4][x].position = _i4;\n        }\n      }\n    }\n  };\n\n  this.receiveAttack = function (x, y) {\n    arr[y][x].safe = false;\n\n    if (arr[y][x].hasOwnProperty('position')) {\n      var index = arr[y][x].position;\n      var tool = arr[y][x].veh;\n      tool.hit(index);\n    }\n  };\n\n  this.board = function () {\n    return arr;\n  };\n\n  this.clearFalse = function () {\n    clear = false;\n  };\n\n  this.clearArea = function () {\n    return clear;\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\n\n//# sourceURL=webpack://battleship/./src/sources/gameboard.js?");

/***/ }),

/***/ "./src/sources/player.js":
/*!*******************************!*\
  !*** ./src/sources/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Player(pl) {\n  var _this = this;\n\n  this.shotRecords = [];\n\n  this.standartPlace = function () {\n    pl.axisChange('y');\n    pl.put(pl.ship.carrier, 1, 3);\n    pl.axisChange('x');\n    pl.put(pl.ship.battleship, 6, 1);\n    pl.put(pl.ship.destroyer, 2, 8);\n    pl.axisChange('y');\n    pl.put(pl.ship.submarine, 6, 4);\n    pl.axisChange('x');\n    pl.put(pl.ship.patrolboat, 8, 7);\n  };\n\n  this.secondPlace = function () {\n    pl.put(pl.ship.carrier, 1, 7);\n    pl.axisChange('y');\n    pl.put(pl.ship.battleship, 8, 6);\n    pl.put(pl.ship.destroyer, 4, 4);\n    pl.axisChange('x');\n    pl.put(pl.ship.submarine, 1, 2);\n    pl.put(pl.ship.patrolboat, 6, 0);\n  };\n\n  this.aiRandomise = function () {\n    var random = function random(length) {\n      return Math.floor(Math.random() * length);\n    };\n\n    var dice = function dice() {\n      return Math.floor(Math.random() * 2);\n    };\n\n    while (!pl.clearArea()) {\n      if (dice()) {\n        pl.axisChange('y');\n        pl.put(pl.ship.carrier, random(10), random(10 - pl.ship.carrier.length));\n      } else {\n        pl.axisChange('x');\n        pl.put(pl.ship.carrier, random(10 - pl.ship.carrier.length), random(10));\n      }\n    }\n\n    pl.clearFalse();\n\n    while (!pl.clearArea()) {\n      if (dice()) {\n        pl.axisChange('y');\n        pl.put(pl.ship.battleship, random(10), random(10 - pl.ship.battleship.length));\n      } else {\n        pl.axisChange('x');\n        pl.put(pl.ship.battleship, random(10 - pl.ship.battleship.length), random(10));\n      }\n    }\n\n    pl.clearFalse();\n\n    while (!pl.clearArea()) {\n      if (dice()) {\n        pl.axisChange('y');\n        pl.put(pl.ship.destroyer, random(10), random(10 - pl.ship.destroyer.length));\n      } else {\n        pl.axisChange('x');\n        pl.put(pl.ship.destroyer, random(10 - pl.ship.destroyer.length), random(10));\n      }\n    }\n\n    pl.clearFalse();\n\n    while (!pl.clearArea()) {\n      if (dice()) {\n        pl.axisChange('y');\n        pl.put(pl.ship.submarine, random(10), random(10 - pl.ship.submarine.length));\n      } else {\n        pl.axisChange('x');\n        pl.put(pl.ship.submarine, random(10 - pl.ship.submarine.length), random(10));\n      }\n    }\n\n    pl.clearFalse();\n\n    while (!pl.clearArea()) {\n      if (dice()) {\n        pl.axisChange('y');\n        pl.put(pl.ship.patrolboat, random(10), random(10 - pl.ship.patrolboat.length));\n      } else {\n        pl.axisChange('x');\n        pl.put(pl.ship.patrolboat, random(10 - pl.ship.patrolboat.length), random(10));\n      }\n    }\n  };\n\n  this.aiShot = function () {\n    var random = function random() {\n      return Math.floor(Math.random() * 10);\n    };\n\n    var control = false;\n\n    while (!control) {\n      var x = random();\n      var y = random();\n      var isRandom = true;\n\n      for (var i = 0; i < _this.shotRecords.length; i++) {\n        if (_this.shotRecords[i] == pl.board()[y][x]) {\n          isRandom = false;\n        }\n      }\n\n      if (isRandom) {\n        _this.shotRecords.unshift(pl.board()[y][x]);\n\n        pl.receiveAttack(x, y);\n        control = true;\n      }\n    }\n  };\n\n  this.getRecords = function () {\n    return _this.shotRecords;\n  };\n\n  this.getPlayer = function () {\n    return pl;\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n//# sourceURL=webpack://battleship/./src/sources/player.js?");

/***/ }),

/***/ "./src/sources/ship.js":
/*!*****************************!*\
  !*** ./src/sources/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Ship(length) {\n  /*Object Creation Tasks */\n  var arr = new Array(length);\n\n  for (var i = 0; i < length; i++) {\n    arr[i] = 1;\n  }\n  /*Object Property */\n\n\n  this.length = length;\n  /*Object Methods */\n\n  this.hit = function (index) {\n    arr[index] = 0;\n  };\n\n  this.isSunk = function () {\n    for (var _i = 0; _i < length; _i++) {\n      if (arr[_i] > 0) {\n        return false;\n      }\n    }\n\n    return true;\n  };\n\n  this.section = function () {\n    return arr;\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n//# sourceURL=webpack://battleship/./src/sources/ship.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/home.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/home.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/storm-3254676.jpg */ \"./src/images/storm-3254676.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".home-main{\\r\\n    background:url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") no-repeat center 15%; \\r\\n    background-size: cover;    \\r\\n}\\r\\n.home-header {\\r\\n    height: 60vh;\\r\\n    display:flex;\\r\\n    align-items: center; \\r\\n    text-align: center;\\r\\n    color:#fcfcfd;\\r\\n}\\r\\n\\r\\n.home-title{\\r\\n    flex:1;\\r\\n    font-size: 4em;\\r\\n    letter-spacing: 0.3em;\\r\\n    font-family: 'Libre Baskerville', serif;\\r\\n    color: var(--text);\\r\\n    text-shadow: \\r\\n    10px 10px      var(--shadow), \\r\\n    9.75px 9.75px  var(--shadow), \\r\\n    9.5px 9.5px    var(--shadow), \\r\\n    9.25px 9.25px  var(--shadow),\\r\\n    9px 9px        var(--shadow), \\r\\n    8.75px 8.75px  var(--shadow), \\r\\n    8.5px 8.5px    var(--shadow), \\r\\n    8.25px 8.25px  var(--shadow),\\r\\n    8px 8px        var(--shadow), \\r\\n    7.75px 7.75px  var(--shadow), \\r\\n    7.5px 7.5px    var(--shadow), \\r\\n    7.25px 7.25px  var(--shadow),\\r\\n    7px 7px        var(--shadow), \\r\\n    6.75px 6.75px  var(--shadow), \\r\\n    6.5px 6.5px    var(--shadow), \\r\\n    6.25px 6.25px  var(--shadow),\\r\\n    6px 6px        var(--shadow), \\r\\n    5.75px 5.75px  var(--shadow), \\r\\n    5.5px 5.5px    var(--shadow), \\r\\n    5.25px 5.25px  var(--shadow),\\r\\n    5px 5px        var(--shadow), \\r\\n    4.75px 4.75px  var(--shadow), \\r\\n    4.5px 4.5px    var(--shadow), \\r\\n    4.25px 4.25px  var(--shadow),\\r\\n    4px 4px        var(--shadow),\\r\\n    3.75px 3.75px  var(--shadow),\\r\\n    3.5px 3.5px    var(--shadow),\\r\\n    3.25px 3.25px  var(--shadow),\\r\\n    3px 3px        var(--shadow),\\r\\n    2.75px 2.75px  var(--shadow),\\r\\n    2.5px 2.5px    var(--shadow),\\r\\n    2.25px 2.25px  var(--shadow),\\r\\n    2px 2px        var(--shadow),\\r\\n    1.75px 1.75px  var(--shadow),\\r\\n    1.5px 1.5px    var(--shadow),\\r\\n    1.25px 1.25px  var(--shadow),\\r\\n    1px 1px        var(--shadow),\\r\\n    0.75px 0.75px  var(--shadow),\\r\\n    0.5px 0.5px    var(--shadow),\\r\\n    0.25px 0.25px  var(--shadow);\\r\\n}\\r\\n\\r\\n.home-title > span {\\r\\n    position: relative;\\r\\n    animation: jump 4s infinite;\\r\\n    text-shadow: -3px 3px 3px #000;\\r\\n}\\r\\n\\r\\n.home-title > span:nth-child(2) {\\r\\n    animation-delay: 0.3s;\\r\\n}\\r\\n\\r\\n.home-title > span:nth-child(3) {\\r\\n    animation-delay: 0.5s;\\r\\n}\\r\\n\\r\\n.home-title > span:nth-child(4) {\\r\\n    animation-delay: 0.7s;\\r\\n}\\r\\n\\r\\n.home-title > span:nth-child(5) {\\r\\n    animation-delay: 0.9s;\\r\\n}\\r\\n\\r\\n.home-title > span:nth-child(6) {\\r\\n    animation-delay: 1.1s;\\r\\n}\\r\\n\\r\\n.home-title > span:nth-child(7) {\\r\\n    animation-delay: 1.3s;\\r\\n}\\r\\n\\r\\n.home-title > span:nth-child(8) {\\r\\n    animation-delay: 1.5s;\\r\\n}\\r\\n\\r\\n.home-title > span:nth-child(9) {\\r\\n    animation-delay: 1.8s;\\r\\n}\\r\\n\\r\\n.home-title > span:nth-child(10) {\\r\\n    animation-delay: 2.0s;\\r\\n}\\r\\n\\r\\n@keyframes jump {\\r\\n    0% {\\r\\n        top: 0;\\r\\n    }\\r\\n    50% {\\r\\n        top: -15px;\\r\\n    }\\r\\n    100% {\\r\\n        top: 0;\\r\\n    }\\r\\n}\\r\\n\\r\\n.home-section {\\r\\n    height: 40vh;\\r\\n    display:flex;\\r\\n    text-align: center;\\r\\n    justify-content: center;\\r\\n    gap:10em;\\r\\n    padding-top: 3em;\\r\\n}\\r\\n\\r\\n.home-section > button{\\r\\n    font-weight: 600;\\r\\n    outline: 0;\\r\\n    grid-gap: 8px;\\r\\n    align-items: center;\\r\\n    background: 0 0;\\r\\n    border: 2px solid #000;\\r\\n    border-radius: 4px;\\r\\n    cursor: pointer;\\r\\n    display: inline-flex;\\r\\n    flex-shrink: 0;\\r\\n    font-size: 1.5em;\\r\\n    gap: 8px;\\r\\n    justify-content: center;\\r\\n    line-height: 1.5;\\r\\n    overflow: hidden;\\r\\n    padding: 12px 16px;\\r\\n    text-decoration: none;\\r\\n    text-overflow: ellipsis;\\r\\n    transition: all .14s ease-out;\\r\\n    white-space: nowrap;\\r\\n    background-color: #f0f6fc;\\r\\n\\r\\n}\\r\\n\\r\\n.home-pvp, .home-pve{\\r\\n    width: 200px;\\r\\n    height: 80px;\\r\\n    font-family: 'Roboto', sans-serif;\\r\\n    \\r\\n}\\r\\n.home-pvp:hover {\\r\\n    box-shadow: -6px 6px 0 #000;\\r\\n    transform: translate(6px,-6px);\\r\\n}\\r\\n\\r\\n.home-pve:hover {\\r\\n    box-shadow: 6px 6px 0 #000;\\r\\n    transform: translate(-6px,-6px);\\r\\n}\\r\\n\\r\\n.home-pvp:focus-visible, .home-pve:focus-visible{\\r\\n    outline-offset: 1px;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/styles/home.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/pve.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/pve.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".pve-main{\\r\\n    height: 100vh;\\r\\n    display:grid;\\r\\n    grid-template-columns: 1fr;\\r\\n    grid-template-rows: 20vh 80vh;\\r\\n    grid-template-areas: \\r\\n    'board'\\r\\n    'container'\\r\\n    ;\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n.pve-board{\\r\\n    grid-area: board;\\r\\n    display:flex;\\r\\n}\\r\\n\\r\\n.pve-scoreText{\\r\\n    align-self: center;\\r\\n    flex:1;\\r\\n\\r\\n}\\r\\n\\r\\n.pve-container{\\r\\n    grid-area: container;\\r\\n    display:grid;\\r\\n    grid-template-columns:1fr 25em 1fr 25em 1fr;\\r\\n    grid-template-rows: 1fr 25em 4fr;\\r\\n    grid-template-areas: \\r\\n    '. . . . .'\\r\\n    '. fP . aiP .'\\r\\n    '. . . . .'\\r\\n    ;\\r\\n}\\r\\n.pve-firstP{\\r\\n    grid-area: fP;\\r\\n    display:flex;\\r\\n    flex-wrap: wrap;\\r\\n}\\r\\n\\r\\n.pve-aiP{\\r\\n    grid-area: aiP;\\r\\n    display:flex;\\r\\n    flex-wrap: wrap;\\r\\n}\\r\\n\\r\\n.pve-point{\\r\\n    flex:0 0 10%;\\r\\n    height: 2.5em;\\r\\n    width: 2.5em;\\r\\n    border-left: 1px solid black;\\r\\n    border-top: 1px solid black;\\r\\n    \\r\\n}\\r\\n\\r\\n.pve-point:nth-child(10),\\r\\n.pve-point:nth-child(20),\\r\\n.pve-point:nth-child(30),\\r\\n.pve-point:nth-child(40),\\r\\n.pve-point:nth-child(50),\\r\\n.pve-point:nth-child(60),\\r\\n.pve-point:nth-child(70),\\r\\n.pve-point:nth-child(80),\\r\\n.pve-point:nth-child(90)\\r\\n{\\r\\n    border-right: 1px solid black;\\r\\n}\\r\\n\\r\\n.pve-point:nth-child(91),\\r\\n.pve-point:nth-child(92),\\r\\n.pve-point:nth-child(93),\\r\\n.pve-point:nth-child(94),\\r\\n.pve-point:nth-child(95),\\r\\n.pve-point:nth-child(96),\\r\\n.pve-point:nth-child(97),\\r\\n.pve-point:nth-child(98),\\r\\n.pve-point:nth-child(99){\\r\\n    border-bottom: 1px solid black;\\r\\n}\\r\\n\\r\\n.pve-point:nth-child(100){\\r\\n    border-bottom: 1px solid black;\\r\\n    border-right: 1px solid black;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/styles/pve.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/pvp.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/pvp.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".pvp-main{\\r\\n    height: 100vh;\\r\\n    display:grid;\\r\\n    grid-template-columns: 1fr;\\r\\n    grid-template-rows: 20vh 80vh;\\r\\n    grid-template-areas: \\r\\n    'board'\\r\\n    'container'\\r\\n    ;\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n.pvp-board{\\r\\n    grid-area: board;\\r\\n    display:flex;\\r\\n}\\r\\n\\r\\n.pvp-scoreText{\\r\\n    align-self: center;\\r\\n    flex:1;\\r\\n\\r\\n}\\r\\n\\r\\n.pvp-container{\\r\\n    grid-area: container;\\r\\n    display:grid;\\r\\n    grid-template-columns:1fr 25em 1fr 25em 1fr;\\r\\n    grid-template-rows: 1fr 25em 4fr;\\r\\n    grid-template-areas: \\r\\n    '. . . . .'\\r\\n    '. fP . sP .'\\r\\n    '. . . . .'\\r\\n    ;\\r\\n}\\r\\n.pvp-firstP{\\r\\n    grid-area: fP;\\r\\n    display:flex;\\r\\n    flex-wrap: wrap;\\r\\n}\\r\\n\\r\\n.pvp-secondP{\\r\\n    grid-area: sP;\\r\\n    display:flex;\\r\\n    flex-wrap: wrap;\\r\\n}\\r\\n\\r\\n.pvp-point{\\r\\n    flex:0 0 10%;\\r\\n    height: 2.5em;\\r\\n    width: 2.5em;\\r\\n    border-left: 1px solid black;\\r\\n    border-top: 1px solid black;\\r\\n}\\r\\n\\r\\n.pvp-point:nth-child(10),\\r\\n.pvp-point:nth-child(20),\\r\\n.pvp-point:nth-child(30),\\r\\n.pvp-point:nth-child(40),\\r\\n.pvp-point:nth-child(50),\\r\\n.pvp-point:nth-child(60),\\r\\n.pvp-point:nth-child(70),\\r\\n.pvp-point:nth-child(80),\\r\\n.pvp-point:nth-child(90)\\r\\n{\\r\\n    border-right: 1px solid black;\\r\\n}\\r\\n\\r\\n.pvp-point:nth-child(91),\\r\\n.pvp-point:nth-child(92),\\r\\n.pvp-point:nth-child(93),\\r\\n.pvp-point:nth-child(94),\\r\\n.pvp-point:nth-child(95),\\r\\n.pvp-point:nth-child(96),\\r\\n.pvp-point:nth-child(97),\\r\\n.pvp-point:nth-child(98),\\r\\n.pvp-point:nth-child(99){\\r\\n    border-bottom: 1px solid black;\\r\\n}\\r\\n\\r\\n.pvp-point:nth-child(100){\\r\\n    border-bottom: 1px solid black;\\r\\n    border-right: 1px solid black;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/styles/pvp.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html {\\r\\n    box-sizing: border-box;\\r\\n}\\r\\n\\r\\n*, *::after, *::before {\\r\\n    box-sizing: inherit;\\r\\n}\\r\\n\\r\\nbody {\\r\\n    margin: 0;\\r\\n    line-height: 1.5;\\r\\n}\\r\\n\\r\\nh1, h2, h3, h4, h5, h6, p {\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/home.css":
/*!*****************************!*\
  !*** ./src/styles/home.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./home.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/home.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/styles/home.css?");

/***/ }),

/***/ "./src/styles/pve.css":
/*!****************************!*\
  !*** ./src/styles/pve.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_pve_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./pve.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/pve.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_pve_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_pve_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_pve_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_pve_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/styles/pve.css?");

/***/ }),

/***/ "./src/styles/pvp.css":
/*!****************************!*\
  !*** ./src/styles/pvp.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_pvp_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./pvp.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/pvp.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_pvp_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_pvp_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_pvp_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_pvp_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/styles/pvp.css?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/images/storm-3254676.jpg":
/*!**************************************!*\
  !*** ./src/images/storm-3254676.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b720f96ad2f1ffff2137.jpg\";\n\n//# sourceURL=webpack://battleship/./src/images/storm-3254676.jpg?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/components/index.js");
/******/ 	
/******/ })()
;