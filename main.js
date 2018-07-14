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
		var e = new Error('Cannot find module "' + req + '".');
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
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_library_library_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/library/library.component */ "./src/app/components/library/library.component.ts");
/* harmony import */ var _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/gallery/gallery.component */ "./src/app/components/gallery/gallery.component.ts");
/* harmony import */ var _components_extras_extras_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/extras/extras.component */ "./src/app/components/extras/extras.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_story_story_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/story/story.component */ "./src/app/components/story/story.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', component: _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"] },
    { path: 'about', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] },
    { path: 'library', component: _components_library_library_component__WEBPACK_IMPORTED_MODULE_3__["LibraryComponent"] },
    { path: 'gallery', component: _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__["GalleryComponent"] },
    { path: 'extras', component: _components_extras_extras_component__WEBPACK_IMPORTED_MODULE_5__["ExtrasComponent"] },
    { path: 'library/:story', component: _components_story_story_component__WEBPACK_IMPORTED_MODULE_7__["StoryComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
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

module.exports = ".bgDark {\r\n  background-image: url(\"https://jscholar.github.io/lantern-dragon-v2/assets/bgimgs/black_woven_seamless_tile.jpg\");\r\n  min-height: 100%;\r\n  color: #EEEEEE;\r\n}\r\n\r\n\r\n.bgLight {\r\n  background-color: #EEEEEE;\r\n  background-size: 100% 100%;\r\n  min-height: 100%;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main [ngClass]=\"{'bgLight' : isDark === false, 'bgDark' : isDark}\">\r\n  <router-outlet></router-outlet>\r\n  <app-navbar (changeBG)=\"toggleDark()\"></app-navbar>\r\n</main>\r\n"

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
        this.isDark = true;
    }
    AppComponent.prototype.toggleDark = function () {
        this.isDark = !this.isDark;
    };
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_library_library_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/library/library.component */ "./src/app/components/library/library.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/gallery/gallery.component */ "./src/app/components/gallery/gallery.component.ts");
/* harmony import */ var _components_extras_extras_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/extras/extras.component */ "./src/app/components/extras/extras.component.ts");
/* harmony import */ var _services_story_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/story.service */ "./src/app/services/story.service.ts");
/* harmony import */ var _services_comment_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/comment.service */ "./src/app/services/comment.service.ts");
/* harmony import */ var _components_library_pages_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/library/pages.pipe */ "./src/app/components/library/pages.pipe.ts");
/* harmony import */ var _components_no_content_no_content_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/no-content/no-content.component */ "./src/app/components/no-content/no-content.component.ts");
/* harmony import */ var _components_comments_comments_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/comments/comments.component */ "./src/app/components/comments/comments.component.ts");
/* harmony import */ var _components_story_story_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/story/story.component */ "./src/app/components/story/story.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"],
                _components_library_library_component__WEBPACK_IMPORTED_MODULE_10__["LibraryComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"],
                _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_12__["GalleryComponent"],
                _components_extras_extras_component__WEBPACK_IMPORTED_MODULE_13__["ExtrasComponent"],
                _components_no_content_no_content_component__WEBPACK_IMPORTED_MODULE_17__["NoContentComponent"],
                _components_comments_comments_component__WEBPACK_IMPORTED_MODULE_18__["CommentsComponent"],
                _components_story_story_component__WEBPACK_IMPORTED_MODULE_19__["StoryComponent"],
            ],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"]
            ],
            providers: [
                _services_story_service__WEBPACK_IMPORTED_MODULE_14__["StoryService"],
                _components_library_pages_pipe__WEBPACK_IMPORTED_MODULE_16__["JsonPagesPipe"],
                _services_comment_service__WEBPACK_IMPORTED_MODULE_15__["CommentService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/about/about.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-box {\r\n  display: block;\r\n  width: 75%;\r\n  height: 75%;\r\n  position: fixed;\r\n  top: 10%;\r\n  margin: 0 12.5% 0;\r\n  border: #e3af5d solid;\r\n  border-radius: 10px;\r\n  mso-border-shadow: yes;\r\n  box-sizing: border-box;\r\n  background: rgba(0,0,0,0.7);\r\n  background-clip: content-box;\r\n  overflow-y: auto;\r\n}\r\n\r\n.text-box::-webkit-scrollbar {\r\n  width: 10px;\r\n  padding-top: 10px;\r\n}\r\n\r\n.text-box::-webkit-scrollbar-track {\r\n  border-radius: 25px;\r\n  box-shadow: inset 0 0 5px grey;\r\n  background-color: black;\r\n}\r\n\r\n.text-box::-webkit-scrollbar-thumb {\r\n  border-radius: 25px;\r\n  background-color: rgb(212, 166, 68);\r\n}\r\n\r\n.text-box {\r\n  height: -webkit-fit-content;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n}\r\n\r\npre {\r\n  padding: 0 20px 30px;\r\n  color: #FFFFFF;\r\n  white-space: pre-line;\r\n  font-size: 1.5em;\r\n  text-align: center;\r\n  overflow-wrap: break-spaces;\r\n  font-family: roboto, sans-serif;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: #b0cdd9;\r\n}\r\n\r\na:hover {\r\n  color: #83c1d9;\r\n  text-decoration: underline;\r\n}\r\n\r\n#container {\r\n  position: fixed;\r\n  width: 70%;\r\n  margin-left: 15%;\r\n  margin-right: 15%;\r\n  top: 10%;\r\n  height: 60%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/about/about.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-box\">\r\n  <pre>\r\n\r\n    Welcome.\r\n\r\n    Lantern Dragon Works is a small collection of fictional novels inspired by Japanese visual novels and themes.\r\n\r\n    All credit for creation, story-writing, and characters go to the sole author, DeltaOG (long may he live).\r\n\r\n    For now, this website is still in its infancy, as are my development. Therefore, if you\r\n    would like a more complete experience, on a more worthy interface, please visit our <a href=\"https://lanterndragonworks.wordpress.com/\">WordPress Page</a>.\r\n    Though be sure to come back and visit again when this project becomes awesome.\r\n\r\n    Regards, and enjoy your stay,\r\n\r\n    A lowly member of the Lantern Dragons Works team.\r\n  </pre>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
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

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/components/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/comments/comments.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/comments/comments.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-box {\r\n  display: block;\r\n  width: 75%;\r\n  height: 75%;\r\n  position: fixed;\r\n  top: 10%;\r\n  margin: 0 12.5% 0;\r\n  border: #e3af5d solid;\r\n  border-radius: 10px;\r\n  mso-border-shadow: yes;\r\n  box-sizing: border-box;\r\n  background: rgba(0,0,0,0.7);\r\n  background-clip: content-box;\r\n  overflow-y: auto;\r\n}\r\n\r\n.text-box::-webkit-scrollbar {\r\n  width: 10px;\r\n  padding-top: 10px;\r\n}\r\n\r\n.text-box::-webkit-scrollbar-track {\r\n  border-radius: 25px;\r\n  box-shadow: inset 0 0 5px grey;\r\n  background-color: black;\r\n}\r\n\r\n.text-box::-webkit-scrollbar-thumb {\r\n  border-radius: 25px;\r\n  background-color: rgb(212, 166, 68);\r\n}\r\n\r\n.shelf {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.frame {\r\n  display: flex;\r\n  align-items: center;\r\n  margin: 0 1.5%;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  max-width: 400px;\r\n  height: 100%;\r\n  min-height: 400px;\r\n}\r\n\r\n.cover {\r\n  vertical-align: middle;\r\n  min-width: 400px;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  max-height: 600px;\r\n  width: 100%;\r\n  overflow: hidden;\r\n\r\n}\r\n\r\n.cover:hover {\r\n  cursor: pointer;\r\n}\r\n\r\nh3 {\r\n  text-align: center;\r\n  color: #FFFFFF;\r\n}\r\n\r\n.comment-box {\r\n  outline: #bebebe solid 1px;\r\n  border: none;\r\n  margin-top: 20px;\r\n  padding-left: 5px;\r\n  background-color: #535353;\r\n  color: #dfdfdf;\r\n}\r\n\r\n.name {\r\n  width: 25%;\r\n}\r\n\r\n.commentInput {\r\n  width: 50%;\r\n  min-width: 20%;\r\n  height: 3rem;\r\n  min-height: 3rem;\r\n  max-height: 12rem;\r\n  resize: vertical;\r\n  overflow: hidden;\r\n  color: white;\r\n}\r\n\r\n.comment {\r\n  word-wrap: break-word;\r\n  padding: 0 10px;\r\n}\r\n\r\n.comment-box:focus {\r\n  outline: #fff6d0 solid 1px;\r\n  outline-offset: 0;\r\n}\r\n\r\n.comment-box::-webkit-input-placeholder{\r\n  padding-left: 3px;\r\n  color: #9e9e9e;\r\n  font-style: italic;\r\n}\r\n\r\n.comment-box:-ms-input-placeholder{\r\n  padding-left: 3px;\r\n  color: #9e9e9e;\r\n  font-style: italic;\r\n}\r\n\r\n.comment-box::-ms-input-placeholder{\r\n  padding-left: 3px;\r\n  color: #9e9e9e;\r\n  font-style: italic;\r\n}\r\n\r\n.comment-box::placeholder{\r\n  padding-left: 3px;\r\n  color: #9e9e9e;\r\n  font-style: italic;\r\n}\r\n\r\n.btn {\r\n  margin-top: 20px;\r\n}\r\n\r\n.options {\r\n  position: relative;\r\n  float: right;\r\n  top: 10px;\r\n}\r\n\r\n.fa-trash-o:hover {\r\n  transition: 0.15s ease-in-out;\r\n  cursor: pointer;\r\n  color: #EE3333;\r\n}\r\n\r\nmat-form-field {\r\n  display: inline;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/comments/comments.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/comments/comments.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-box\">\r\n  <h3>Prototype comments</h3>\r\n\r\n  <div class=\"container\">\r\n    <mat-card>\r\n      <form [formGroup]=\"form\" (ngSubmit)=\"submitComment()\">\r\n            <input name=\"user\" type=\"text\" matInput\r\n                   formControlName=\"user\"\r\n                   class=\"comment-box name\"\r\n                   placeholder=\"name (optional)\" autocomplete=\"off\"\r\n                   >\r\n        <br>\r\n            <textarea name=\"content\" matInput\r\n                      formControlName=\"content\"\r\n                      class=\"comment-box commentInput\"\r\n                      placeholder=\"500 characters max\"\r\n                      ></textarea>\r\n            <br>\r\n            <button type=\"submit\" class=\"btn\">Submit</button>\r\n      </form>\r\n    </mat-card>\r\n    <div *ngIf=\"comments\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel class=\"comment-box comment\" *ngFor=\"let comment of comments\">\r\n          <mat-expansion-panel-header>{{comment.user}}</mat-expansion-panel-header>\r\n            <div class=\"options\">\r\n              <i class=\"fa fa-trash-o\" (click)=\"deleteComment(comment.id)\"></i>\r\n            </div>\r\n            <p>{{comment.content}}</p>\r\n            <p>{{comment.date}}</p>\r\n        </mat-expansion-panel>\r\n      </mat-accordion>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/comments/comments.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/comments/comments.component.ts ***!
  \***********************************************************/
/*! exports provided: CommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsComponent", function() { return CommentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_comment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/comment.service */ "./src/app/services/comment.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommentsComponent = /** @class */ (function () {
    function CommentsComponent(commentService) {
        this.commentService = commentService;
    }
    CommentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'user': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)] }),
            'content': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(500)] })
        });
        this.commentsSub = this.commentService.commentUpdateListener()
            .subscribe(function (comments) {
            _this.comments = comments;
        });
        this.commentService.pullComments();
    };
    CommentsComponent.prototype.submitComment = function () {
        if (this.form.invalid) {
            return;
        }
        var comment = {
            user: this.form.value.user || 'anonymous',
            content: this.form.value.content,
            date: Date(),
            id: null
        };
        this.commentService.addComment(comment);
        this.form.reset();
    };
    CommentsComponent.prototype.deleteComment = function (commentId) {
        console.log('component: deleting', commentId);
        this.commentService.deleteComment(commentId);
    };
    CommentsComponent.prototype.ngOnDestroy = function () {
        this.commentsSub.unsubscribe();
    };
    CommentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-comments',
            template: __webpack_require__(/*! ./comments.component.html */ "./src/app/components/comments/comments.component.html"),
            styles: [__webpack_require__(/*! ./comments.component.css */ "./src/app/components/comments/comments.component.css")]
        }),
        __metadata("design:paramtypes", [_services_comment_service__WEBPACK_IMPORTED_MODULE_1__["CommentService"]])
    ], CommentsComponent);
    return CommentsComponent;
}());



/***/ }),

/***/ "./src/app/components/extras/extras.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/extras/extras.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/extras/extras.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/extras/extras.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-comments></app-comments>\r\n<!--<app-navbar [selected]=\"'extras'\"></app-navbar>-->\r\n"

/***/ }),

/***/ "./src/app/components/extras/extras.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/extras/extras.component.ts ***!
  \*******************************************************/
/*! exports provided: ExtrasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtrasComponent", function() { return ExtrasComponent; });
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

var ExtrasComponent = /** @class */ (function () {
    function ExtrasComponent() {
        this.comments = [];
    }
    ExtrasComponent.prototype.ngOnInit = function () {
    };
    ExtrasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-extras',
            template: __webpack_require__(/*! ./extras.component.html */ "./src/app/components/extras/extras.component.html"),
            styles: [__webpack_require__(/*! ./extras.component.css */ "./src/app/components/extras/extras.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ExtrasComponent);
    return ExtrasComponent;
}());



/***/ }),

/***/ "./src/app/components/gallery/gallery.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/gallery/gallery.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  background: none;\r\n  width: 84%;\r\n  max-width: none;\r\n  margin: 0 8%;\r\n}\r\n\r\n.row {\r\n  position: relative;\r\n  top: 50px;\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.img-thumbnail {\r\n  background-color: orange;\r\n  margin: 0 2%;\r\n}\r\n\r\n.portrait {\r\n  width: 100%;\r\n  padding: 6px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/gallery/gallery.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/gallery/gallery.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 col-sm-6\" *ngFor=\"let img of mockImgs; let index = index\">\r\n      <div *ngIf=\"index <= 3\" class=\"img-thumbnail\">\r\n        <img class=\"portrait\" src=\"{{img}}\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!--<app-navbar [selected]=\"'gallery'\"></app-navbar>-->\r\n"

/***/ }),

/***/ "./src/app/components/gallery/gallery.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/gallery/gallery.component.ts ***!
  \*********************************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
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

var GalleryComponent = /** @class */ (function () {
    function GalleryComponent() {
        this.mockImgs = [
            './assets/imgs/Volume%201%20Art/Characters/FELICITY%20SMOKE%20R1.jpg',
            './assets/imgs/Volume%201%20Art/Characters/ICHAIVAL%20DARRYL%20R1.jpg',
            './assets/imgs/Volume%201%20Art/Characters/ICHIZEN%20MICHI%20R1.jpg',
            './assets/imgs/Volume%201%20Art/Characters/KISAI%20JIN%20R1.jpg',
            './assets/imgs/Volume%201%20Art/Characters/KYOI%20FENG.jpg',
            './assets/imgs/Volume%201%20Art/Characters/SHAN%20SHIGETZU%20R1.jpg',
            './assets/imgs/Volume%201%20Art/Characters/TOMO%20YUKI%20R1.jpg',
            './assets/imgs/Volume%201%20Art/Characters/YUKA.jpg',
            './assets/imgs/Volume%201%20Art/Characters/ZHA%20TESS%20R1.jpg',
            './assets/imgs/Volume%201%20Art/Characters/ZHUYU%20LONG%20R1.jpg'
        ];
    }
    GalleryComponent.prototype.ngOnInit = function () {
    };
    GalleryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! ./gallery.component.html */ "./src/app/components/gallery/gallery.component.html"),
            styles: [__webpack_require__(/*! ./gallery.component.css */ "./src/app/components/gallery/gallery.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "[class*='col-'] {\r\n  float: left;\r\n  padding: 20px 20px 0;\r\n  width: inherit;\r\n}\r\n\r\n#title {\r\n  font-size: 6em;\r\n  white-space: nowrap;\r\n}\r\n\r\n#container {\r\n  font-family: Merienda;\r\n  color: #80c6d9;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n}\r\n\r\n#main-menu {\r\n  background: rgba(0,0,0,0.7);\r\n  width: 400px;\r\n  height: 800px;\r\n  float: left;\r\n  display: inline-block;\r\n}\r\n\r\n.menu {\r\n  text-align: center;\r\n  font-size: 4em;\r\n  max-height: 120px;\r\n  min-width:120px;\r\n  background-color: rgba(105, 156, 168, 0.4);\r\n  border-radius: 5px;\r\n}\r\n\r\n.menu:hover, .active {\r\n  color: #ff2f3b;\r\n  font-weight: bold;\r\n}\r\n\r\n.separator {\r\n  text-align: center;\r\n}\r\n\r\na {\r\n  text-decoration: inherit;\r\n  color: inherit;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\r\n\r\n  <div id=\"title\">\r\n    <a routerLink=\"\">Lantern Dragon Works</a>\r\n  </div>\r\n\r\n  <div id=\"main-menu\">\r\n    <a *ngFor=\"let section of sections\" class=\"col-1-4\"\r\n      routerLink=\"/{{section}}\" [ngClass]=\"{'active': section === selected}\">\r\n      <div class=\"menu\">\r\n        <span>{{section}}</span>\r\n      </div>\r\n    </a>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_constants_sections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/constants/sections */ "./src/app/shared/constants/sections.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.sections = _shared_constants_sections__WEBPACK_IMPORTED_MODULE_1__["SECTIONS"];
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HomeComponent.prototype, "selected", void 0);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/library/library.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/library/library.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-box {\r\n  display: block;\r\n  width: 75%;\r\n  height: 75%;\r\n  position: fixed;\r\n  top: 10%;\r\n  margin: 0 12.5% 0;\r\n  border: #e3af5d solid;\r\n  border-radius: 10px;\r\n  mso-border-shadow: yes;\r\n  box-sizing: border-box;\r\n  background: rgba(0,0,0,0.7);\r\n  background-clip: content-box;\r\n  overflow-y: auto;\r\n}\r\n\r\n.text-box::-webkit-scrollbar {\r\n  width: 10px;\r\n  padding-top: 10px;\r\n}\r\n\r\n.text-box::-webkit-scrollbar-track {\r\n  border-radius: 25px;\r\n  box-shadow: inset 0 0 5px grey;\r\n  background-color: black;\r\n}\r\n\r\n.text-box::-webkit-scrollbar-thumb {\r\n  border-radius: 25px;\r\n  background-color: rgb(212, 166, 68);\r\n}\r\n\r\n.shelf {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.frame {\r\n  display: flex;\r\n  align-items: center;\r\n  margin: 0 1.5%;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  max-width: 400px;\r\n  height: 100%;\r\n  min-height: 400px;\r\n}\r\n\r\n.cover {\r\n  vertical-align: middle;\r\n  min-width: 400px;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  max-height: 600px;\r\n  width: 100%;\r\n  overflow: hidden;\r\n\r\n}\r\n\r\n.cover:hover {\r\n  cursor: pointer;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/library/library.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/library/library.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-box shelf\">\r\n  <div class=\"frame\" *ngFor=\"let book of books\">\r\n    <img class=\"cover\" src={{book.cover}} routerLink=\"/library/{{book.routeUrl}}\">\r\n  </div>\r\n\r\n\r\n  <div *ngIf=\"pages\" class=\"story-text\">\r\n    <ul *ngFor=\"let page of pages\">\r\n      {{page}}\r\n    </ul>\r\n  </div>\r\n  <div *ngIf=\"story\" class=\"story-text\" [innerHTML]=\"story\">\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/library/library.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/library/library.component.ts ***!
  \*********************************************************/
/*! exports provided: LibraryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibraryComponent", function() { return LibraryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_story_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/story.service */ "./src/app/services/story.service.ts");
/* harmony import */ var _pages_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages.pipe */ "./src/app/components/library/pages.pipe.ts");
/* harmony import */ var _shared_constants_books__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/constants/books */ "./src/app/shared/constants/books.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LibraryComponent = /** @class */ (function () {
    function LibraryComponent(storyService, pagesPipe) {
        this.storyService = storyService;
        this.pagesPipe = pagesPipe;
        this.books = _shared_constants_books__WEBPACK_IMPORTED_MODULE_3__["BOOKS"];
    }
    LibraryComponent.prototype.getPages = function () {
        var _this = this;
        this.storyService.getPages().
            subscribe(function (pages) { return _this.pages = _this.pagesPipe.transform(pages); });
    };
    LibraryComponent.prototype.getStory = function () {
        var _this = this;
        if (!this.story) {
            this.storyService.getStory().subscribe(function (story) { return _this.story = story.content.rendered; });
        }
    };
    LibraryComponent.prototype.ngOnInit = function () { };
    LibraryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-library',
            template: __webpack_require__(/*! ./library.component.html */ "./src/app/components/library/library.component.html"),
            styles: [__webpack_require__(/*! ./library.component.css */ "./src/app/components/library/library.component.css")]
        }),
        __metadata("design:paramtypes", [_services_story_service__WEBPACK_IMPORTED_MODULE_1__["StoryService"],
            _pages_pipe__WEBPACK_IMPORTED_MODULE_2__["JsonPagesPipe"]])
    ], LibraryComponent);
    return LibraryComponent;
}());



/***/ }),

/***/ "./src/app/components/library/pages.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/components/library/pages.pipe.ts ***!
  \**************************************************/
/*! exports provided: JsonPagesPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonPagesPipe", function() { return JsonPagesPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var JsonPagesPipe = /** @class */ (function () {
    function JsonPagesPipe() {
    }
    JsonPagesPipe.prototype.transform = function (json) {
        var pages = [];
        for (var _i = 0, _a = Object.keys(json); _i < _a.length; _i++) {
            var page = _a[_i];
            pages.push(json[page].slug);
        }
        return pages;
    };
    JsonPagesPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'pages',
            pure: false
        })
    ], JsonPagesPipe);
    return JsonPagesPipe;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#navbar {\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  width: 100%;\r\n  height: 150px;\r\n  text-align: center;\r\n  position: fixed;\r\n  bottom: 10px;\r\n  white-space: nowrap;\r\n}\r\n\r\n.gradient { /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */\r\n  background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.98) 49%,rgba(0,0,0,1) 50%,rgba(0,0,0,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#00000000',GradientType=0 ); /* IE6-9 */\r\n}\r\n\r\n.nav-link {\r\n  text-decoration: none;\r\n  font-size: 4em;\r\n  transition: 0.5s;\r\n  color: #308cd7;\r\n  font-family: Merienda, sans-serif;\r\n  text-shadow: 0 0 2px #3e70b0;\r\n  line-height: 100px;\r\n}\r\n\r\n.nav-link:hover, .active {\r\n  transition: 0.5s;\r\n  color: #b4def9;\r\n  text-shadow: 0 0 30px #e7ecff;\r\n}\r\n\r\n.nav-item {\r\n  display: inline-block;\r\n  text-decoration: none;\r\n  width: 250px;\r\n  margin-left: 25px;\r\n  margin-right: 25px;\r\n}\r\n\r\n.sprite {\r\n  display: block;\r\n  position: fixed;\r\n  right: 30px;\r\n  bottom: -4px;\r\n  z-index: 101;\r\n}\r\n\r\n.sprite img {\r\n  height: 300px;\r\n}\r\n\r\n#id {\r\n  width: 50px;\r\n  display: block;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav id=\"navbar\" class=\"gradient\">\r\n\r\n    <a *ngFor=\"let section of sections\" routerLink=\"/{{section}}\" class=\"nav-item nav-link\" routerLinkActive=\"active\">\r\n      {{section}}\r\n    </a>\r\n\r\n</nav>\r\n\r\n<div class=\"sprite\">\r\n  <img src=\"./assets/imgs/Volume%201%20Art/Characters/zhuyuSprite.png\">\r\n  <button id=theme [ngClass]=\"{'btn-light' : theme === 'Light', 'btn-dark' : theme === 'Dark'}\" (click)='dark($event)'>{{theme}}</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_constants_sections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/constants/sections */ "./src/app/shared/constants/sections.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.theme = 'light';
        this.changeBG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    NavbarComponent.prototype.select = function (section) {
        this.selected = section;
    };
    NavbarComponent.prototype.ngOnInit = function () {
        this.sections = _shared_constants_sections__WEBPACK_IMPORTED_MODULE_1__["SECTIONS"];
    };
    NavbarComponent.prototype.dark = function () {
        this.theme = this.theme === 'Dark' ? 'Light' : 'Dark';
        this.changeBG.emit(true);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], NavbarComponent.prototype, "selected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], NavbarComponent.prototype, "changeBG", void 0);
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/no-content/no-content.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/no-content/no-content.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/no-content/no-content.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/no-content/no-content.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/no-content/no-content.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/no-content/no-content.component.ts ***!
  \***************************************************************/
/*! exports provided: NoContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoContentComponent", function() { return NoContentComponent; });
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

var NoContentComponent = /** @class */ (function () {
    function NoContentComponent() {
    }
    NoContentComponent.prototype.ngOnInit = function () {
    };
    NoContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-no-content',
            template: __webpack_require__(/*! ./no-content.component.html */ "./src/app/components/no-content/no-content.component.html"),
            styles: [__webpack_require__(/*! ./no-content.component.css */ "./src/app/components/no-content/no-content.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NoContentComponent);
    return NoContentComponent;
}());



/***/ }),

/***/ "./src/app/components/story/story.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/story/story.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-box {\r\n  display: block;\r\n  width: 75%;\r\n  height: 75%;\r\n  position: fixed;\r\n  top: 10%;\r\n  margin: 0 12.5% 0;\r\n  border: #e3af5d solid;\r\n  border-radius: 10px;\r\n  mso-border-shadow: yes;\r\n  box-sizing: border-box;\r\n  background: rgba(0,0,0,0.7);\r\n  background-clip: content-box;\r\n  overflow-y: auto;\r\n}\r\n\r\n.text-box::-webkit-scrollbar {\r\n  width: 10px;\r\n  padding-top: 10px;\r\n}\r\n\r\n.text-box::-webkit-scrollbar-track {\r\n  border-radius: 25px;\r\n  box-shadow: inset 0 0 5px grey;\r\n  background-color: black;\r\n}\r\n\r\n.text-box::-webkit-scrollbar-thumb {\r\n  border-radius: 25px;\r\n  background-color: rgb(212, 166, 68);\r\n}\r\n\r\ninput[type='file'] {\r\n  visibility: hidden;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/story/story.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/story/story.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Dragons Revolution will go here.</p>\r\n\r\n<button (click)=\"getStory()\">getStory</button>\r\n\r\n<div *ngIf=\"htmlText\">\r\n  <div class=\"text-box\" [innerHtml]=\"htmlText\"></div>\r\n</div>\r\n<form formGroup=\"file\">\r\n  <div>\r\n    <button mat-button tupe=\"button\" (click)=\"filePick.click()\">Upload content</button>\r\n    <input type=\"file\" #filePick>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/components/story/story.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/story/story.component.ts ***!
  \*****************************************************/
/*! exports provided: StoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoryComponent", function() { return StoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_story_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/story.service */ "./src/app/services/story.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StoryComponent = /** @class */ (function () {
    function StoryComponent(route, location, storyService) {
        this.route = route;
        this.location = location;
        this.storyService = storyService;
    }
    StoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (paramMap) {
            _this.story = paramMap.get('story');
            if (paramMap.has('chapter')) {
                _this.chapter = paramMap.get('chapter');
            }
            else {
                _this.chapter = null;
            }
        });
    };
    // Sets the selected story
    StoryComponent.prototype.getStory = function () {
        var _this = this;
        this.storyService.getStory().subscribe(function (data) {
            _this.htmlText = data.content.rendered;
            console.log(_this.htmlText);
        });
    };
    StoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-story',
            template: __webpack_require__(/*! ./story.component.html */ "./src/app/components/story/story.component.html"),
            styles: [__webpack_require__(/*! ./story.component.css */ "./src/app/components/story/story.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _services_story_service__WEBPACK_IMPORTED_MODULE_3__["StoryService"]])
    ], StoryComponent);
    return StoryComponent;
}());



/***/ }),

/***/ "./src/app/services/comment.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/comment.service.ts ***!
  \*********************************************/
/*! exports provided: CommentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentService", function() { return CommentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CommentService = /** @class */ (function () {
    function CommentService(http) {
        this.http = http;
        this.comments = [];
        this.commentsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.url = 'http://lantern-dragon-v2-server.ffec474y37.us-west-2.elasticbeanstalk.com';
    }
    CommentService.prototype.ngOnInit = function () {
        this.pullComments();
    };
    CommentService.prototype.addComment = function (comment) {
        var _this = this;
        this.http.post(this.url + '/api/posts', comment)
            .subscribe(function (responseData) {
            console.log(responseData.message);
            comment.id = responseData.commentId;
            console.log(comment);
            _this.comments.push(comment);
            _this.commentsUpdated.next(_this.comments.slice());
        });
    };
    CommentService.prototype.commentUpdateListener = function () {
        return this.commentsUpdated.asObservable();
    };
    CommentService.prototype.getComments = function () {
        return this.comments;
    };
    CommentService.prototype.pullComments = function () {
        var _this = this;
        this.http.get(this.url + '/api/posts')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (postData) {
            return postData.comments.map(function (comment) {
                return {
                    user: comment.user,
                    content: comment.content,
                    date: comment.date,
                    id: comment._id
                };
            });
        }))
            .subscribe(function (newComments) {
            _this.comments = newComments;
            _this.commentsUpdated.next(_this.comments.slice());
        });
    };
    CommentService.prototype.deleteComment = function (commentId) {
        var _this = this;
        console.log('Send http request');
        this.http.delete(this.url + '/api/posts/' + commentId)
            .subscribe(function (response) {
            var newComments = _this.comments.filter(function (comment) { return comment.id !== commentId; });
            _this.comments = newComments;
            _this.commentsUpdated.next(_this.comments.slice());
        });
    };
    CommentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CommentService);
    return CommentService;
}());



/***/ }),

/***/ "./src/app/services/story.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/story.service.ts ***!
  \*******************************************/
/*! exports provided: StoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoryService", function() { return StoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StoryService = /** @class */ (function () {
    function StoryService(http) {
        this.http = http;
        this.storyUrl = 'https://public-api.wordpress.com/wp/v2/sites/lanterndragonworks.wordpress.com/pages/548'; // Dragons revolt part 1
        this.pagesUrl = 'https://public-api.wordpress.com/wp/v2/sites/lanterndragonworks.wordpress.com/pages?per_page=50'; // URL to pages api
    }
    // test get pages
    StoryService.prototype.getPages = function () {
        return this.http.get(this.pagesUrl);
    };
    StoryService.prototype.getStory = function () {
        return this.http.get(this.storyUrl);
    };
    StoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], StoryService);
    return StoryService;
}());



/***/ }),

/***/ "./src/app/shared/constants/books.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/constants/books.ts ***!
  \*******************************************/
/*! exports provided: BOOKS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOOKS", function() { return BOOKS; });
var BOOKS = [
    {
        title: 'A Dragon\'s Revolt',
        routeUrl: 'a_dragons_revolt',
        cover: './assets/imgs/Covers/DragonRevoltCover.jpg'
    },
    {
        title: 'Heroes of the Past',
        routeUrl: 'heroes_of_the_past',
        cover: './assets/imgs/Covers/Heroes%20of%20the%20Past%20Cover%20My%20Version.jpg'
    },
    {
        title: 'Masks',
        routeUrl: 'masks',
        cover: './assets/imgs/Covers/MaskCover2.jpg'
    }
];


/***/ }),

/***/ "./src/app/shared/constants/sections.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/constants/sections.ts ***!
  \**********************************************/
/*! exports provided: SECTIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SECTIONS", function() { return SECTIONS; });
var SECTIONS = ['library', 'gallery', 'about', 'extras'];


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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Jin Cai\Apps\lantern-dragon-v2\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map