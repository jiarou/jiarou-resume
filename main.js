(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <app-header ></app-header>\n    <app-content></app-content>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'my-resume';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content/content.component */ "./src/app/content/content.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _content_content_component__WEBPACK_IMPORTED_MODULE_5__["ContentComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/content/content.component.css":
/*!***********************************************!*\
  !*** ./src/app/content/content.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvY29udGVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/content/content.component.html":
/*!************************************************!*\
  !*** ./src/app/content/content.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/content/content.component.ts":
/*!**********************************************!*\
  !*** ./src/app/content/content.component.ts ***!
  \**********************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContentComponent = /** @class */ (function () {
    function ContentComponent() {
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    ContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-content',
            template: __webpack_require__(/*! ./content.component.html */ "./src/app/content/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.css */ "./src/app/content/content.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n#bg-triangle{\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 80vmax 80vw 0 0;\n  border-color:   #fbe251 transparent transparent transparent;\n  position: relative;\n}\n\n\n#topContain{\n  z-index: 10;\n  position: absolute;\n  width: 100%;\n  padding: 5vmax 10vmax 0 10vmax;\n}\n\n\n#menu img{\n  width: 40px;\n\n}\n\n\n#title{\n  font-weight: 900;\n\n}\n\n\n.title-content{\nfont-family: Roboto-Black;\nfont-size: 8vmax;\ncolor: #4c4c4c;\nfont-weight: Black;\nletter-spacing: 8px;\n}\n\n\n.title-content2{\nfont-family: Roboto-Black;\nfont-size: 5vmax;\ncolor: #4c4c4c;\nfont-weight: Black;\nletter-spacing: 4px;\n}\n\n\n#sentense{\n  margin: 10vmax 0;\n  position: relative;\n\n}\n\n\n#sentenseMain{\n\n  font-family: Roboto;\n  font-size: 3vw;\n  color: #999999;\n  font-weight: BoldItalic;\n  letter-spacing: 3px;\n  font-weight: 800;\n  width: 85vw;\n\n}\n\n\n#sentenseName{\n  font-family: Roboto;\n  font-size: 1vw;\n  color: #6a6a6a;\n  font-weight: Medium;\n  line-height: 30px;\n  position: absolute;\n  top: 6.5vmax;\n  right: 0vmax;\n  font-weight: 900;\n  letter-spacing: 3px;\n}\n\n\n#basketball{\n  background-color:#e58619;\n  width:50px;\n  height:50px;\n  margin:10px auto;\n  border-radius: 99em;\n  position: relative;\n  top: 35px;\n  -webkit-animation-name:jump;\n          animation-name:jump;\n  -webkit-animation-duration:1s;\n          animation-duration:1s;\n  -webkit-animation-iteration-count:infinite ;\n          animation-iteration-count:infinite ;\n  -webkit-animation-direction:alternate;\n          animation-direction:alternate;\n}\n\n\n#leftCircle{\n    border: 4px solid;\n    border-top: 0px;\n    border-left: 0px;\n    border-bottom: 0px;\n    width: 10px;\n    height: 36px;\n    position: absolute;\n    top: 7px;\n    border-radius: 10% 100% 100% 0;\n}\n\n\n#rightCircle{\n    border: 4px solid;\n    border-top: 0px;\n    border-right: 0px;\n    border-bottom: 0px;\n    width: 9px;\n    height: 35px;\n    position: absolute;\n    top: 9px;\n    left: 37px;\n    border-radius: 100% 108% 100% 100%;\n\n}\n\n\n#centerXLine{\n    border: 2px solid;\n    height: 45px;\n    position: absolute;\n    border-radius: 13%;\n    left: 25px;\n    border-radius: 100% 108% 100% 100%;\n}\n\n\n#centerYLine{\nborder: 4px solid;\n    border-top: 0px;\n    border-right: 0px;\n    border-bottom: 0px;\n    width: 20px;\n    height: 50px;\n    position: absolute;\n    /* top: 0px; */\n    left: 13px;\n    -webkit-transform: rotateZ(270deg);\n            transform: rotateZ(270deg);\n    border-radius: 100% 108% 100% 100%;\n}\n\n\n#shodow{\n    width: 50px;\n    height: 10px;\n    background-color: #474645;\n    margin: auto;\n    position: relative;\n    top: 40px;\n    border-radius: 100%;\n     -webkit-animation-name: shadowSize;\n             animation-name: shadowSize;\n     -webkit-animation-duration:1s;\n             animation-duration:1s;\n     -webkit-animation-iteration-count:infinite ;\n             animation-iteration-count:infinite ;\n     -webkit-animation-direction:alternate;\n             animation-direction:alternate;\n}\n\n\n#square{\n  position: relative;\n  left: 25vmax;\n  top: 15vmax;\n}\n\n\n* { box-sizing: border-box; }\n\n\n.scene {\n    width: 1vmax;\n    height: 300px;\n    /* margin: 80px; */\n    -webkit-perspective: 800px;\n            perspective: 800px;\n\n}\n\n\n.cube {\n  /* width: 200px;\n  height: 200px; */\n  position: relative;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  -webkit-transform: translateX(92px) translateY(7px) rotateX(52deg) rotateY(38deg) rotateZ(58deg);\n          transform: translateX(92px) translateY(7px) rotateX(52deg) rotateY(38deg) rotateZ(58deg);\n  transition: -webkit-transform 1s;\n  transition: transform 1s;\n  transition: transform 1s, -webkit-transform 1s;\n\n\n\n}\n\n\n.cube__face {\n    position: absolute;\n    width: 20vmax;\n    height: 20vmax;\n}\n\n\n.cube__face--front {\n    background: #B6B6B6;\n    -webkit-transform: rotateY(  0deg) translateZ(10vmax);\n            transform: rotateY(  0deg) translateZ(10vmax);\n\n}\n\n\n.cube__face--back {\n    background: #757575 ;\n    -webkit-transform: rotateY(180deg) translateZ(10vmax);\n            transform: rotateY(180deg) translateZ(10vmax);\n\n}\n\n\n.cube__face--bottom{\n  background: #D8D8D8;\n  -webkit-transform: rotateX(-90deg) translateZ(10vmax);\n          transform: rotateX(-90deg) translateZ(10vmax);\n\n}\n\n\n.cube__face--left {\n\n    background: #D8D8D8;\n    -webkit-transform: rotateY(-90deg) translateZ(10vmax);\n            transform: rotateY(-90deg) translateZ(10vmax);\n\n}\n\n\n.cube__face--top {\n    background: #757575; ;\n    -webkit-transform: rotateX( 90deg) translateZ(10vmax); ;\n            transform: rotateX( 90deg) translateZ(10vmax);\n\n}\n\n\n.cube__face--right {\n    background: #757575;\n    -webkit-transform: rotateY( 90deg) translateZ(10vmax);\n            transform: rotateY( 90deg) translateZ(10vmax);\n\n}\n\n\n#info{\n  display: flex;\n  justify-content: center;\n}\n\n\n#photo img{\n  width: 15vmax;\n  border-radius: 99em;\n}\n\n\n#infoContain{\n  margin: 1vmax 4vmax;\n}\n\n\n#name{\n  display: flex;\n}\n\n\n#chName{\n  font-family: SFNSDisplay;\n  font-size: 4vmax;\n  color: #FF7500;\n  letter-spacing: 2vmax;\n  font-weight: 400;\n}\n\n\n#enName{\n  font-family: Roboto-Medium;\n  font-size: 1.5vmax;\n  color: #4C4C4C;\n  letter-spacing: 3px;\n  font-weight: 500;\n  display: flex;\n  align-items: flex-end;\n}\n\n\n#detail{\nfont-family: SFNSDisplay;\nfont-size: 1vmax;\ncolor: #4C4C4C;\nletter-spacing: 1px;\nline-height: 25px;\npadding: 1vmax 12vmax;\n}\n\n\n.workTitle{\n  font-family: SFNSDisplay;\n  font-size: 1.2vmax;\n  color: #4C4C4C;\n  letter-spacing: 1px;\n  margin: 0.5vmax 0;\n}\n\n\n.work-img{\n  width: 32vmax;\n  height: 20vh;\n}\n\n\n.work-item{\n  display: flex;\n  margin: 7vmax 0px;\n}\n\n\n.work-item p{\n    margin-left: 5vmax;\n    font-size: 1.2vmax;\n    letter-spacing: 2px;\n    color: #4C4C4C;\n}\n\n\n@-webkit-keyframes jump {\n  from{\n    top: 0px;\n  }to{\n\n    top:50px;\n  }\n\n\n}\n\n\n@keyframes jump {\n  from{\n    top: 0px;\n  }to{\n\n    top:50px;\n  }\n\n\n}\n\n\n@-webkit-keyframes shadowSize{\n  from{\n    width:20px;\n  }to{\n\n    width:50px;\n  }\n\n}\n\n\n@keyframes shadowSize{\n  from{\n    width:20px;\n  }to{\n\n    width:50px;\n  }\n\n}\n\n\n@media screen and (min-width: 600px) and (max-width: 1024px){\n  .scene{\n    margin: 15vw;\n  }\n  #square{\n    position: relative;\n    left: 3vmax;\n    top: 0vmax;\n}\n#sentense{\n  margin: 0vw 0 4vmax;\n\n}\n\n\n#sentenseName {\n  top: 4.5vmax;\n}\n#detail{\n  padding: 1vmax 0vmax;\n}\n\n}\n\n\n@media only screen and (max-width: 600px){\n  .title-content{\n    font-size: 5vmax;\n    }\n  #sentense{\n      margin: 0vw 0;\n\n    }\n    #sentenseName {\n      top: 4.5vmax;\n    }\n    .title-content2{\n    font-size: 3vmax;\n    }\n    #square{\n      position: relative;\n      right: 10vmax;\n      left: 1vmax;\n      top: 5vmax;\n  }\n\n  #sentenseMain {\n    width: 90vw;\n  }\n  #topContain{\n    z-index: 10;\n    position: absolute;\n    width: 100%;\n    padding: 5vmax 2vmax;\n  }\n\n  .cube__face {\n    position: absolute;\n    width: 100px;\n    height: 100px;\n}\n\n\n.cube__face--front {\n    background: #B6B6B6;\n    -webkit-transform: rotateY(  0deg) translateZ(50px);\n            transform: rotateY(  0deg) translateZ(50px);\n\n}\n\n\n.cube__face--back {\n    background: #757575 ;\n    -webkit-transform: rotateY(180deg) translateZ(50px);\n            transform: rotateY(180deg) translateZ(50px);\n\n}\n\n.cube__face--bottom{\n  background: #D8D8D8;\n  -webkit-transform: rotateX(-90deg) translateZ(50px);\n          transform: rotateX(-90deg) translateZ(50px);\n\n}\n\n.cube__face--left {\n\n    background: #D8D8D8;\n    -webkit-transform: rotateY(-90deg) translateZ(50px);\n            transform: rotateY(-90deg) translateZ(50px);\n\n}\n.cube__face--top {\n    background: #757575; ;\n    -webkit-transform: rotateX( 90deg) translateZ(50px); ;\n            transform: rotateX( 90deg) translateZ(50px);\n\n}\n.cube__face--right {\n    background: #757575;\n    -webkit-transform: rotateY( 90deg) translateZ(50px);\n            transform: rotateY( 90deg) translateZ(50px);\n\n}\n\n\n#leftCircle {\n  width: 15px;\n}\n\n#centerXLine {\n  height: 49px;\n}\n#rightCircle {\n  width: 18px;\n  height: 35px;\n\n}\n#centerYLine{\n  width: 24px;\n  height: 50px;\n}\n#info{\n  display: block;\n  margin: 10vmax 0 3vmax 0;\n}\n#name{\n  display: flex;\n  justify-content: center;\n}\n#photo{\n  display: flex;\n  justify-content: center;\n}\n#photo img{\n  width: 25vmax;\n  height: 25vmax;\n  border-radius: 99em;\n}\n#detail{\n  padding: 0vmax 4vmax;\n}\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysb0JBQW9CO0VBQ3BCLDhCQUE4QjtFQUM5Qiw0REFBNEQ7RUFDNUQsbUJBQW1CO0NBQ3BCOzs7QUFHRDtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLCtCQUErQjtDQUNoQzs7O0FBRUQ7RUFDRSxZQUFZOztDQUViOzs7QUFFRDtFQUNFLGlCQUFpQjs7Q0FFbEI7OztBQUVEO0FBQ0EsMEJBQTBCO0FBQzFCLGlCQUFpQjtBQUNqQixlQUFlO0FBQ2YsbUJBQW1CO0FBQ25CLG9CQUFvQjtDQUNuQjs7O0FBRUQ7QUFDQSwwQkFBMEI7QUFDMUIsaUJBQWlCO0FBQ2pCLGVBQWU7QUFDZixtQkFBbUI7QUFDbkIsb0JBQW9CO0NBQ25COzs7QUFFRDtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7O0NBRXBCOzs7QUFFRDs7RUFFRSxvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLGVBQWU7RUFDZix3QkFBd0I7RUFDeEIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixZQUFZOztDQUViOzs7QUFFRDtFQUNFLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLG9CQUFvQjtDQUNyQjs7O0FBSUQ7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsNEJBQW9CO1VBQXBCLG9CQUFvQjtFQUNwQiw4QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLDRDQUFvQztVQUFwQyxvQ0FBb0M7RUFDcEMsc0NBQThCO1VBQTlCLDhCQUE4QjtDQUMvQjs7O0FBRUQ7SUFDSSxr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QztBQUNEO0lBQ0ksb0JBQW9CO0lBQ3BCLG9EQUE0QztZQUE1Qyw0Q0FBNEM7O0NBRS9DO0FBQ0Q7SUFDSSxvQkFBb0I7SUFDcEIsb0RBQTRDO1lBQTVDLDRDQUE0Qzs7Q0FFL0M7OztBQUdEO0VBQ0UsWUFBWTtDQUNiOztBQUVEO0VBQ0UsYUFBYTtDQUNkO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osYUFBYTs7Q0FFZDtBQUNEO0VBQ0UsWUFBWTtFQUNaLGFBQWE7Q0FDZDtBQUNEO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtDQUMxQjtBQUNEO0VBQ0UsY0FBYztFQUNkLHdCQUF3QjtDQUN6QjtBQUNEO0VBQ0UsY0FBYztFQUNkLHdCQUF3QjtDQUN6QjtBQUNEO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixvQkFBb0I7Q0FDckI7QUFDRDtFQUNFLHFCQUFxQjtDQUN0Qjs7Q0FFQSIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuI2JnLXRyaWFuZ2xle1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDgwdm1heCA4MHZ3IDAgMDtcbiAgYm9yZGVyLWNvbG9yOiAgICNmYmUyNTEgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuXG4jdG9wQ29udGFpbntcbiAgei1pbmRleDogMTA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDV2bWF4IDEwdm1heCAwIDEwdm1heDtcbn1cblxuI21lbnUgaW1ne1xuICB3aWR0aDogNDBweDtcblxufVxuXG4jdGl0bGV7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG5cbn1cblxuLnRpdGxlLWNvbnRlbnR7XG5mb250LWZhbWlseTogUm9ib3RvLUJsYWNrO1xuZm9udC1zaXplOiA4dm1heDtcbmNvbG9yOiAjNGM0YzRjO1xuZm9udC13ZWlnaHQ6IEJsYWNrO1xubGV0dGVyLXNwYWNpbmc6IDhweDtcbn1cblxuLnRpdGxlLWNvbnRlbnQye1xuZm9udC1mYW1pbHk6IFJvYm90by1CbGFjaztcbmZvbnQtc2l6ZTogNXZtYXg7XG5jb2xvcjogIzRjNGM0YztcbmZvbnQtd2VpZ2h0OiBCbGFjaztcbmxldHRlci1zcGFjaW5nOiA0cHg7XG59XG5cbiNzZW50ZW5zZXtcbiAgbWFyZ2luOiAxMHZtYXggMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG59XG5cbiNzZW50ZW5zZU1haW57XG5cbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC1zaXplOiAzdnc7XG4gIGNvbG9yOiAjOTk5OTk5O1xuICBmb250LXdlaWdodDogQm9sZEl0YWxpYztcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgd2lkdGg6IDg1dnc7XG5cbn1cblxuI3NlbnRlbnNlTmFtZXtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC1zaXplOiAxdnc7XG4gIGNvbG9yOiAjNmE2YTZhO1xuICBmb250LXdlaWdodDogTWVkaXVtO1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDYuNXZtYXg7XG4gIHJpZ2h0OiAwdm1heDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbn1cblxuXG5cbiNiYXNrZXRiYWxse1xuICBiYWNrZ3JvdW5kLWNvbG9yOiNlNTg2MTk7XG4gIHdpZHRoOjUwcHg7XG4gIGhlaWdodDo1MHB4O1xuICBtYXJnaW46MTBweCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA5OWVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMzVweDtcbiAgYW5pbWF0aW9uLW5hbWU6anVtcDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOjFzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OmluZmluaXRlIDtcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjphbHRlcm5hdGU7XG59XG5cbiNsZWZ0Q2lyY2xle1xuICAgIGJvcmRlcjogNHB4IHNvbGlkO1xuICAgIGJvcmRlci10b3A6IDBweDtcbiAgICBib3JkZXItbGVmdDogMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDBweDtcbiAgICB3aWR0aDogMTBweDtcbiAgICBoZWlnaHQ6IDM2cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogN3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwJSAxMDAlIDEwMCUgMDtcbn1cblxuI3JpZ2h0Q2lyY2xle1xuICAgIGJvcmRlcjogNHB4IHNvbGlkO1xuICAgIGJvcmRlci10b3A6IDBweDtcbiAgICBib3JkZXItcmlnaHQ6IDBweDtcbiAgICBib3JkZXItYm90dG9tOiAwcHg7XG4gICAgd2lkdGg6IDlweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogOXB4O1xuICAgIGxlZnQ6IDM3cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJSAxMDglIDEwMCUgMTAwJTtcblxufVxuXG4jY2VudGVyWExpbmV7XG4gICAgYm9yZGVyOiAycHggc29saWQ7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMyU7XG4gICAgbGVmdDogMjVweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlIDEwOCUgMTAwJSAxMDAlO1xufVxuXG4jY2VudGVyWUxpbmV7XG5ib3JkZXI6IDRweCBzb2xpZDtcbiAgICBib3JkZXItdG9wOiAwcHg7XG4gICAgYm9yZGVyLXJpZ2h0OiAwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLyogdG9wOiAwcHg7ICovXG4gICAgbGVmdDogMTNweDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMjcwZGVnKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlIDEwOCUgMTAwJSAxMDAlO1xufVxuXG4jc2hvZG93e1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc0NjQ1O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgIGFuaW1hdGlvbi1uYW1lOiBzaGFkb3dTaXplO1xuICAgICBhbmltYXRpb24tZHVyYXRpb246MXM7XG4gICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGUgO1xuICAgICBhbmltYXRpb24tZGlyZWN0aW9uOmFsdGVybmF0ZTtcbn1cblxuI3NxdWFyZXtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAyNXZtYXg7XG4gIHRvcDogMTV2bWF4O1xufVxuXG5cbiogeyBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG5cbi5zY2VuZSB7XG4gICAgd2lkdGg6IDF2bWF4O1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgLyogbWFyZ2luOiA4MHB4OyAqL1xuICAgIHBlcnNwZWN0aXZlOiA4MDBweDtcblxufVxuXG4uY3ViZSB7XG4gIC8qIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDsgKi9cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoOTJweCkgdHJhbnNsYXRlWSg3cHgpIHJvdGF0ZVgoNTJkZWcpIHJvdGF0ZVkoMzhkZWcpIHJvdGF0ZVooNThkZWcpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXM7XG5cblxuXG59XG5cbi5jdWJlX19mYWNlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDIwdm1heDtcbiAgICBoZWlnaHQ6IDIwdm1heDtcbn1cblxuXG4uY3ViZV9fZmFjZS0tZnJvbnQge1xuICAgIGJhY2tncm91bmQ6ICNCNkI2QjY7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKCAgMGRlZykgdHJhbnNsYXRlWigxMHZtYXgpO1xuXG59XG5cblxuLmN1YmVfX2ZhY2UtLWJhY2sge1xuICAgIGJhY2tncm91bmQ6ICM3NTc1NzUgO1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpIHRyYW5zbGF0ZVooMTB2bWF4KTtcblxufVxuXG4uY3ViZV9fZmFjZS0tYm90dG9te1xuICBiYWNrZ3JvdW5kOiAjRDhEOEQ4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTkwZGVnKSB0cmFuc2xhdGVaKDEwdm1heCk7XG5cbn1cblxuLmN1YmVfX2ZhY2UtLWxlZnQge1xuXG4gICAgYmFja2dyb3VuZDogI0Q4RDhEODtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTkwZGVnKSB0cmFuc2xhdGVaKDEwdm1heCk7XG5cbn1cbi5jdWJlX19mYWNlLS10b3Age1xuICAgIGJhY2tncm91bmQ6ICM3NTc1NzU7IDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoIDkwZGVnKSB0cmFuc2xhdGVaKDEwdm1heCk7XG5cbn1cbi5jdWJlX19mYWNlLS1yaWdodCB7XG4gICAgYmFja2dyb3VuZDogIzc1NzU3NTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoIDkwZGVnKSB0cmFuc2xhdGVaKDEwdm1heCk7XG5cbn1cblxuXG4jaW5mb3tcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbiNwaG90byBpbWd7XG4gIHdpZHRoOiAxNXZtYXg7XG4gIGJvcmRlci1yYWRpdXM6IDk5ZW07XG59XG4jaW5mb0NvbnRhaW57XG4gIG1hcmdpbjogMXZtYXggNHZtYXg7XG59XG4jbmFtZXtcbiAgZGlzcGxheTogZmxleDtcbn1cbiNjaE5hbWV7XG4gIGZvbnQtZmFtaWx5OiBTRk5TRGlzcGxheTtcbiAgZm9udC1zaXplOiA0dm1heDtcbiAgY29sb3I6ICNGRjc1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAydm1heDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuI2VuTmFtZXtcbiAgZm9udC1mYW1pbHk6IFJvYm90by1NZWRpdW07XG4gIGZvbnQtc2l6ZTogMS41dm1heDtcbiAgY29sb3I6ICM0QzRDNEM7XG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cblxuI2RldGFpbHtcbmZvbnQtZmFtaWx5OiBTRk5TRGlzcGxheTtcbmZvbnQtc2l6ZTogMXZtYXg7XG5jb2xvcjogIzRDNEM0QztcbmxldHRlci1zcGFjaW5nOiAxcHg7XG5saW5lLWhlaWdodDogMjVweDtcbnBhZGRpbmc6IDF2bWF4IDEydm1heDtcbn1cblxuLndvcmtUaXRsZXtcbiAgZm9udC1mYW1pbHk6IFNGTlNEaXNwbGF5O1xuICBmb250LXNpemU6IDEuMnZtYXg7XG4gIGNvbG9yOiAjNEM0QzRDO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBtYXJnaW46IDAuNXZtYXggMDtcbn1cblxuLndvcmstaW1ne1xuICB3aWR0aDogMzJ2bWF4O1xuICBoZWlnaHQ6IDIwdmg7XG59XG5cbi53b3JrLWl0ZW17XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogN3ZtYXggMHB4O1xufVxuXG4ud29yay1pdGVtIHB7XG4gICAgbWFyZ2luLWxlZnQ6IDV2bWF4O1xuICAgIGZvbnQtc2l6ZTogMS4ydm1heDtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIGNvbG9yOiAjNEM0QzRDO1xufVxuXG5Aa2V5ZnJhbWVzIGp1bXAge1xuICBmcm9te1xuICAgIHRvcDogMHB4O1xuICB9dG97XG5cbiAgICB0b3A6NTBweDtcbiAgfVxuXG5cbn1cblxuQGtleWZyYW1lcyBzaGFkb3dTaXple1xuICBmcm9te1xuICAgIHdpZHRoOjIwcHg7XG4gIH10b3tcblxuICAgIHdpZHRoOjUwcHg7XG4gIH1cblxufVxuXG5cblxuXG5cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCl7XG4gIC5zY2VuZXtcbiAgICBtYXJnaW46IDE1dnc7XG4gIH1cbiAgI3NxdWFyZXtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogM3ZtYXg7XG4gICAgdG9wOiAwdm1heDtcbn1cbiNzZW50ZW5zZXtcbiAgbWFyZ2luOiAwdncgMCA0dm1heDtcblxufVxuXG5cbiNzZW50ZW5zZU5hbWUge1xuICB0b3A6IDQuNXZtYXg7XG59XG4jZGV0YWlse1xuICBwYWRkaW5nOiAxdm1heCAwdm1heDtcbn1cblxufVxuXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpe1xuICAudGl0bGUtY29udGVudHtcbiAgICBmb250LXNpemU6IDV2bWF4O1xuICAgIH1cbiAgI3NlbnRlbnNle1xuICAgICAgbWFyZ2luOiAwdncgMDtcblxuICAgIH1cbiAgICAjc2VudGVuc2VOYW1lIHtcbiAgICAgIHRvcDogNC41dm1heDtcbiAgICB9XG4gICAgLnRpdGxlLWNvbnRlbnQye1xuICAgIGZvbnQtc2l6ZTogM3ZtYXg7XG4gICAgfVxuICAgICNzcXVhcmV7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICByaWdodDogMTB2bWF4O1xuICAgICAgbGVmdDogMXZtYXg7XG4gICAgICB0b3A6IDV2bWF4O1xuICB9XG5cbiAgI3NlbnRlbnNlTWFpbiB7XG4gICAgd2lkdGg6IDkwdnc7XG4gIH1cbiAgI3RvcENvbnRhaW57XG4gICAgei1pbmRleDogMTA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDV2bWF4IDJ2bWF4O1xuICB9XG5cbiAgLmN1YmVfX2ZhY2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbn1cblxuXG4uY3ViZV9fZmFjZS0tZnJvbnQge1xuICAgIGJhY2tncm91bmQ6ICNCNkI2QjY7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKCAgMGRlZykgdHJhbnNsYXRlWig1MHB4KTtcblxufVxuXG5cbi5jdWJlX19mYWNlLS1iYWNrIHtcbiAgICBiYWNrZ3JvdW5kOiAjNzU3NTc1IDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKSB0cmFuc2xhdGVaKDUwcHgpO1xuXG59XG5cbi5jdWJlX19mYWNlLS1ib3R0b217XG4gIGJhY2tncm91bmQ6ICNEOEQ4RDg7XG4gIHRyYW5zZm9ybTogcm90YXRlWCgtOTBkZWcpIHRyYW5zbGF0ZVooNTBweCk7XG5cbn1cblxuLmN1YmVfX2ZhY2UtLWxlZnQge1xuXG4gICAgYmFja2dyb3VuZDogI0Q4RDhEODtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTkwZGVnKSB0cmFuc2xhdGVaKDUwcHgpO1xuXG59XG4uY3ViZV9fZmFjZS0tdG9wIHtcbiAgICBiYWNrZ3JvdW5kOiAjNzU3NTc1OyA7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKCA5MGRlZykgdHJhbnNsYXRlWig1MHB4KTtcblxufVxuLmN1YmVfX2ZhY2UtLXJpZ2h0IHtcbiAgICBiYWNrZ3JvdW5kOiAjNzU3NTc1O1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSggOTBkZWcpIHRyYW5zbGF0ZVooNTBweCk7XG5cbn1cblxuXG4jbGVmdENpcmNsZSB7XG4gIHdpZHRoOiAxNXB4O1xufVxuXG4jY2VudGVyWExpbmUge1xuICBoZWlnaHQ6IDQ5cHg7XG59XG4jcmlnaHRDaXJjbGUge1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAzNXB4O1xuXG59XG4jY2VudGVyWUxpbmV7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG4jaW5mb3tcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMTB2bWF4IDAgM3ZtYXggMDtcbn1cbiNuYW1le1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiNwaG90b3tcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4jcGhvdG8gaW1ne1xuICB3aWR0aDogMjV2bWF4O1xuICBoZWlnaHQ6IDI1dm1heDtcbiAgYm9yZGVyLXJhZGl1czogOTllbTtcbn1cbiNkZXRhaWx7XG4gIHBhZGRpbmc6IDB2bWF4IDR2bWF4O1xufVxuXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div id=\"topContain\">\n    <div id=\"menu\"><img src=\"assets/images/menu.svg\" /></div>\n    <div style=\"display:flex\">\n      <div id=\"title\">\n        <div class=\"title-content\">Hey!</div>\n        <div class=\"title-content2\">I'm</div>\n        <div class=\"title-content\">Ruby</div>\n        <div id=\"basketball-field\">\n          <div id=\"basketball\">\n            <div id=\"leftCircle\"></div>\n            <div id=\"centerXLine\"></div>\n            <div id=\"rightCircle\"></div>\n            <div id=\"centerYLine\"></div>\n          </div>\n          <div id=\"shodow\"></div>\n        </div>\n      </div>\n      <div id=\"square\">\n        <div class=\"scene\" (click)=\"spin()\">\n          <div class=\"cube\" [style.transform]=\"transformNumber\">\n            <div class=\"cube__face cube__face--front\"></div>\n            <div class=\"cube__face cube__face--back\"></div>\n            <div class=\"cube__face cube__face--right\"></div>\n            <div class=\"cube__face cube__face--left\"></div>\n            <div class=\"cube__face cube__face--top\"></div>\n            <div class=\"cube__face cube__face--bottom\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div id=\"sentense\">\n      <div id=\"sentenseName\">– Bob Brown, Politician</div>\n      <div id=\"sentenseMain\">\n        \"Behind every successful man there’s a lot of unsuccessful years.\"\n      </div>\n    </div>\n\n    <div id=\"info\">\n      <div id=\"photo\"><img src=\"assets/images/photo.jpg\" /></div>\n      <div id=\"infoContain\">\n        <div id=\"name\">\n          <div id=\"chName\">蔡家柔</div>\n          <div id=\"enName\">Jia Rou-Cai</div>\n        </div>\n        <div class=\"workTitle\">\n          美商網碩科技股份有限公司台灣分公司 _ 測試工程師\n        </div>\n        <div class=\"workTitle\">\n          Friendfinder Networks Inc. Taiwan depart. _ QA Engineer\n        </div>\n      </div>\n    </div>\n    <div id=\"detail\">\n      畢業於政治大學資管學系,目前職業是測試工程師,在工作上是站在使用者角度去測試網站的使用者體驗,我覺得\n      這對於我轉前端的方向有很大的幫助,工作上有時會寫自動化去測試網站的功能或是寫工具給自己使用。\n      對於我來說,我已經有了快四年的測試經驗,\n      在測試的時候對於發現的錯誤有強烈的慾望想去把問題找出來,以及解決它。\n      於是我運用以前在大學所學以及實習的經驗,在工作的在一年花下班時間自學,\n      有時候幫忙寫寫簡單的案子,對於寫網頁有一定的經驗以及基礎,希望未來能透過工作上的實務,讓自己成為很棒的前端工程師\n    </div>\n    <div class=\"work-collections\">\n      <h2>作品集</h2>\n      <div class=\"work-item\">\n        <a\n          href=\"http://publish.thekono.com/mr_guide/articles/guide_where.html#\"\n        >\n          <img class=\"work-img\" src=\"assets/images/kono.png\" />\n        </a>\n        <p>我在KONO公司RD實習的網站,主要負責維護以及新增功能．</p>\n      </div>\n      <div class=\"work-item\">\n          <a\n            href=\"http://www.foreverstrong.business/\"\n          >\n            <img class=\"work-img\" src=\"assets/images/foreverstrong.png\" />\n          </a>\n          <p>在去年時,幫學妹家建的網站,簡單的html,css． 主要是學習到如何建立一個網站．</p>\n        </div>\n        <div class=\"work-item\">\n            <a\n              href=\"https://www.workuniverse.co/mentor/become\"\n            >\n              <img class=\"work-img\" src=\"assets/images/workuniverse.png\" />\n            </a>\n            <p>這也是在去年幫忙朋友寫的案子,使用react架構,主要也是寫架構,偶爾寫到抓後端資料的東西以及有寫過語言切換功能．</p>\n          </div>\n          <div class=\"work-item\">\n              <a\n                href=\"https://jiarou.github.io/Garbagetruck.github.io/\"\n              >\n                <img class=\"work-img\" src=\"assets/images/Garbagetruck.png\" />\n              </a>\n              <p>最後是我去年在年底公司跟著前端工程師一起上的Angular課程,練習時有寫過<a href=\"https://github.com/jiarou/Angularcalculator\">計算機</a>,課程結束後決定來做個side project,嘗試抓API資料,目前做到的是用data service的方式把api資料注入地圖內部以及google map 的搜尋功能,之後還想陸續開發時間比對以及範圍內垃圾車偵測之類的功能.\n            </p>\n            </div>\n\n    </div>\n  </div>\n  <div id=\"bg-triangle\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.spin = function () {
        var cube = document.querySelector('.cube');
        var ranRomNumber = Math.floor((Math.random() * 360) + 1);
        var rotateNumber = 'rotate3d(1,1,1,' + ranRomNumber + 'deg)';
        this.transformNumber = rotateNumber;
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jiarou/Desktop/resumeWeb/my-resume/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map