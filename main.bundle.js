webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_about_about_component__ = __webpack_require__("./src/app/components/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_library_library_component__ = __webpack_require__("./src/app/components/library/library.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_gallery_gallery_component__ = __webpack_require__("./src/app/components/gallery/gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_extras_extras_component__ = __webpack_require__("./src/app/components/extras/extras.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_story_story_component__ = __webpack_require__("./src/app/components/story/story.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_2__components_about_about_component__["a" /* AboutComponent */] },
    { path: 'library', component: __WEBPACK_IMPORTED_MODULE_3__components_library_library_component__["a" /* LibraryComponent */] },
    { path: 'gallery', component: __WEBPACK_IMPORTED_MODULE_4__components_gallery_gallery_component__["a" /* GalleryComponent */] },
    { path: 'extras', component: __WEBPACK_IMPORTED_MODULE_5__components_extras_extras_component__["a" /* ExtrasComponent */] },
    { path: 'library/:story', component: __WEBPACK_IMPORTED_MODULE_7__components_story_story_component__["a" /* StoryComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".sitebg {\r\n  /*background-image: url(\"/assets/bgimgs/black_woven_seamless_tile.jpg\");  Dark Weave*/\r\n  background-color: #111111;\r\n  background-size: 100% 100%;\r\n  min-height: 100%;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<main class=\"sitebg\">\n  <router-outlet></router-outlet>\n  <app-navbar (changeBG)=\"dark(true)\"></app-navbar>\n</main>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular4_grid__ = __webpack_require__("./node_modules/angular4-grid/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_about_about_component__ = __webpack_require__("./src/app/components/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_library_library_component__ = __webpack_require__("./src/app/components/library/library.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_gallery_gallery_component__ = __webpack_require__("./src/app/components/gallery/gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_extras_extras_component__ = __webpack_require__("./src/app/components/extras/extras.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_story_service__ = __webpack_require__("./src/app/services/story.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_comment_service__ = __webpack_require__("./src/app/services/comment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_library_pages_pipe__ = __webpack_require__("./src/app/components/library/pages.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_no_content_no_content_component__ = __webpack_require__("./src/app/components/no-content/no-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_comments_comments_component__ = __webpack_require__("./src/app/components/comments/comments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_story_story_component__ = __webpack_require__("./src/app/components/story/story.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_library_library_component__["a" /* LibraryComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_gallery_gallery_component__["a" /* GalleryComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_extras_extras_component__["a" /* ExtrasComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_no_content_no_content_component__["a" /* NoContentComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_comments_comments_component__["a" /* CommentsComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_story_story_component__["a" /* StoryComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4_angular4_grid__["c" /* NgGridModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_forms__["a" /* FormsModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__services_story_service__["a" /* StoryService */],
                __WEBPACK_IMPORTED_MODULE_15__components_library_pages_pipe__["a" /* JsonPagesPipe */],
                __WEBPACK_IMPORTED_MODULE_14__services_comment_service__["a" /* CommentService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.css":
/***/ (function(module, exports) {

module.exports = ".text-box {\r\n  display: block;\r\n  width: 75%;\r\n  height: 75%;\r\n  position: fixed;\r\n  top: 10%;\r\n  margin: 0 12.5% 0;\r\n  border: #e3af5d solid;\r\n  border-radius: 10px;\r\n  mso-border-shadow: yes;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  background: rgba(0,0,0,0.7);\r\n  background-clip: content-box;\r\n  overflow-y: auto;\r\n}\r\n\r\n.text-box::-webkit-scrollbar {\r\n  width: 10px;\r\n  padding-top: 10px;\r\n}\r\n\r\n.text-box::-webkit-scrollbar-track {\r\n  border-radius: 25px;\r\n  -webkit-box-shadow: inset 0 0 5px grey;\r\n          box-shadow: inset 0 0 5px grey;\r\n  background-color: black;\r\n}\r\n\r\n.text-box::-webkit-scrollbar-thumb {\r\n  border-radius: 25px;\r\n  background-color: rgb(212, 166, 68);\r\n}\r\n\r\n.text-box {\r\n  height: -webkit-fit-content;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n}\r\n\r\np {\r\n  padding: 0 20px 30px;\r\n  color: #FFFFFF;\r\n  white-space: pre-line;\r\n  font-size: 1.5em;\r\n  text-align: center;\r\n  overflow-wrap: break-spaces;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: #b0cdd9;\r\n}\r\n\r\na:hover {\r\n  color: #83c1d9;\r\n  text-decoration: underline;\r\n}\r\n\r\n#container {\r\n  position: fixed;\r\n  width: 70%;\r\n  margin-left: 15%;\r\n  margin-right: 15%;\r\n  top: 10%;\r\n  height: 60%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"text-box\">-->\r\n    <!--<p>-->\r\n      <!--Welcome.-->\r\n\r\n      <!--Lantern Dragon Works is a small collection of fictional novels inspired by Japanese visual novels and themes.-->\r\n\r\n      <!--All credit for creation, story-writing, and characters go to the sole author, deltaOG (long may he live).-->\r\n\r\n      <!--For now, this website is still in its infancy, as are my development skills. Therefore, if you-->\r\n      <!--would like a more complete experience, on a more worthy interface, please visit this <a href=\"https://lanterndragonworks.wordpress.com/\">WordPress page</a> for now.-->\r\n      <!--Though be sure to come back and visit again when this project becomes awesome.-->\r\n\r\n      <!--Regards, and enjoy your stay,-->\r\n\r\n      <!--A lowly member of the Lantern Dragons Works team.-->\r\n    <!--</p>-->\r\n<!--</div>-->\r\n\r\n\r\n<!--&lt;!&ndash;<app-navbar [selected]=\"'about'\"></app-navbar>&ndash;&gt;-->\r\n"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/components/about/about.component.html"),
            styles: [__webpack_require__("./src/app/components/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/comments/comments.component.css":
/***/ (function(module, exports) {

module.exports = ".text-box {\r\n  display: block;\r\n  width: 75%;\r\n  height: 75%;\r\n  position: fixed;\r\n  top: 10%;\r\n  margin: 0 12.5% 0;\r\n  border: #e3af5d solid;\r\n  border-radius: 10px;\r\n  mso-border-shadow: yes;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  background: rgba(0,0,0,0.7);\r\n  background-clip: content-box;\r\n  overflow-y: auto;\r\n}\r\n\r\n.text-box::-webkit-scrollbar {\r\n  width: 10px;\r\n  padding-top: 10px;\r\n}\r\n\r\n.text-box::-webkit-scrollbar-track {\r\n  border-radius: 25px;\r\n  -webkit-box-shadow: inset 0 0 5px grey;\r\n          box-shadow: inset 0 0 5px grey;\r\n  background-color: black;\r\n}\r\n\r\n.text-box::-webkit-scrollbar-thumb {\r\n  border-radius: 25px;\r\n  background-color: rgb(212, 166, 68);\r\n}\r\n\r\n.shelf {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n\r\n.frame {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  margin: 0 40px;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  max-width: 33%;\r\n  height: 100%;\r\n  min-height: 400px;\r\n}\r\n\r\n.cover {\r\n  vertical-align: middle;\r\n  min-width: 400px;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  max-height: 600px;\r\n  width: 100%;\r\n\r\n}\r\n\r\n.cover:hover {\r\n  cursor: pointer;\r\n}\r\n\r\nh3 {\r\n  text-align: center;\r\n  color: #FFFFFF;\r\n}\r\n\r\n.comment-box {\r\n  outline: #bebebe solid 1px;\r\n  border: none;\r\n  margin-top: 20px;\r\n  padding-left: 5px;\r\n  background-color: #535353;\r\n  color: #dfdfdf;\r\n}\r\n\r\n.name {\r\n  width: 25%;\r\n}\r\n\r\n.commentInput {\r\n  width: 50%;\r\n  min-width: 20%;\r\n  height: 3rem;\r\n  min-height: 3rem;\r\n  max-height: 12rem;\r\n  resize: vertical;\r\n  overflow: hidden;\r\n  color: white;\r\n}\r\n\r\n.comment {\r\n  word-wrap: break-word;\r\n  padding: 0 10px;\r\n}\r\n\r\n.comment-box:focus {\r\n  outline: #fff6d0 solid 1px;\r\n  outline-offset: 0;\r\n}\r\n\r\n.comment-box::-webkit-input-placeholder{\r\n  padding-left: 3px;\r\n  color: #9e9e9e;\r\n  font-style: italic;\r\n}\r\n\r\n.comment-box:-ms-input-placeholder{\r\n  padding-left: 3px;\r\n  color: #9e9e9e;\r\n  font-style: italic;\r\n}\r\n\r\n.comment-box::-ms-input-placeholder{\r\n  padding-left: 3px;\r\n  color: #9e9e9e;\r\n  font-style: italic;\r\n}\r\n\r\n.comment-box::placeholder{\r\n  padding-left: 3px;\r\n  color: #9e9e9e;\r\n  font-style: italic;\r\n}\r\n\r\n.btn {\r\n  margin-top: 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/comments/comments.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"text-box\">\n  <h3>Prototype comments</h3>\n  <!--<form>-->\n  <div class=\"container\">\n    <div class=\"form-group\">\n      <input type=\"text\" #name class=\"comment-box name\" placeholder=\"name (optional)\" maxlength=\"25\" autocomplete=\"off\"><br>\n      <textarea #content class=\"comment-box commentInput\" placeholder=\"500 characters max\" maxlength=\"500\"></textarea><br>\n      <button class=\"btn\" (click)=\"submitComment(name, content)\">Submit</button>\n    </div>\n    <div *ngIf=\"commentService.comments[page].length\">\n      <div class=\"comment-box comment\" *ngFor=\"let comment of commentService.comments[page]\">\n        <p>{{comment.name}}</p>\n        <p>{{comment.content}}</p>\n        <p>{{comment.date}}</p>\n      </div>\n    </div>\n  </div>\n  <!--</form>-->\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/comments/comments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_comment_service__ = __webpack_require__("./src/app/services/comment.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommentsComponent = /** @class */ (function () {
    function CommentsComponent(commentService) {
        this.commentService = commentService;
        this.page = 'extras';
    }
    CommentsComponent.prototype.ngOnInit = function () { };
    CommentsComponent.prototype.submitComment = function (name, content) {
        this.commentService.addComment(name.value, content.value, this.page);
        name.value = content.value = '';
    };
    CommentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-comments',
            template: __webpack_require__("./src/app/components/comments/comments.component.html"),
            styles: [__webpack_require__("./src/app/components/comments/comments.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_comment_service__["a" /* CommentService */]])
    ], CommentsComponent);
    return CommentsComponent;
}());



/***/ }),

/***/ "./src/app/components/extras/extras.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/extras/extras.component.html":
/***/ (function(module, exports) {

module.exports = "<app-comments></app-comments>\r\n<!--<app-navbar [selected]=\"'extras'\"></app-navbar>-->\r\n"

/***/ }),

/***/ "./src/app/components/extras/extras.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExtrasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExtrasComponent = /** @class */ (function () {
    function ExtrasComponent() {
        this.comments = [];
    }
    ExtrasComponent.prototype.ngOnInit = function () {
    };
    ExtrasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-extras',
            template: __webpack_require__("./src/app/components/extras/extras.component.html"),
            styles: [__webpack_require__("./src/app/components/extras/extras.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ExtrasComponent);
    return ExtrasComponent;
}());



/***/ }),

/***/ "./src/app/components/gallery/gallery.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\r\n  width: 84%;\r\n  max-width: none;\r\n  margin: 0 8%;\r\n}\r\n\r\n.row {\r\n  position: relative;\r\n  top: 50px;\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.img-thumbnail {\r\n  background-color: orange;\r\n  margin: 0 2%;\r\n}\r\n\r\n.portrait {\r\n  width: 100%;\r\n  padding: 6px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/gallery/gallery.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 col-sm-6\" *ngFor=\"let img of mockImgs; let index = index\">\r\n      <div *ngIf=\"index <= 3\" class=\"img-thumbnail\">\r\n        <img class=\"portrait\" src=\"{{img}}\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!--<app-navbar [selected]=\"'gallery'\"></app-navbar>-->\r\n"

/***/ }),

/***/ "./src/app/components/gallery/gallery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-gallery',
            template: __webpack_require__("./src/app/components/gallery/gallery.component.html"),
            styles: [__webpack_require__("./src/app/components/gallery/gallery.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "[class*='col-'] {\r\n  float: left;\r\n  padding: 20px 20px 0;\r\n  width: inherit;\r\n}\r\n\r\n#title {\r\n  font-size: 6em;\r\n  white-space: nowrap;\r\n}\r\n\r\n#container {\r\n  font-family: Merienda;\r\n  color: #80c6d9;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n}\r\n\r\n#main-menu {\r\n  background: rgba(0,0,0,0.7);\r\n  width: 400px;\r\n  height: 800px;\r\n  float: left;\r\n  display: inline-block;\r\n}\r\n\r\n.menu {\r\n  text-align: center;\r\n  font-size: 4em;\r\n  max-height: 120px;\r\n  min-width:120px;\r\n  background-color: rgba(105, 156, 168, 0.4);\r\n  border-radius: 5px;\r\n}\r\n\r\n.menu:hover, .active {\r\n  color: #ff2f3b;\r\n  font-weight: bold;\r\n}\r\n\r\n.separator {\r\n  text-align: center;\r\n}\r\n\r\na {\r\n  text-decoration: inherit;\r\n  color: inherit;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\r\n\r\n  <div id=\"title\">\r\n    <a routerLink=\"\">Lantern Dragon Works</a>\r\n  </div>\r\n\r\n  <div id=\"main-menu\">\r\n    <a *ngFor=\"let section of sections\" class=\"col-1-4\"\r\n      routerLink=\"/{{section}}\" [ngClass]=\"{'active': section === selected}\">\r\n      <div class=\"menu\">\r\n        <span>{{section}}</span>\r\n      </div>\r\n    </a>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_constants_sections__ = __webpack_require__("./src/app/shared/constants/sections.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.sections = __WEBPACK_IMPORTED_MODULE_1__shared_constants_sections__["a" /* SECTIONS */];
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], HomeComponent.prototype, "selected", void 0);
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/library/library.component.css":
/***/ (function(module, exports) {

module.exports = ".text-box {\r\n  display: block;\r\n  width: 75%;\r\n  height: 75%;\r\n  position: fixed;\r\n  top: 10%;\r\n  margin: 0 12.5% 0;\r\n  border: #e3af5d solid;\r\n  border-radius: 10px;\r\n  mso-border-shadow: yes;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  background: rgba(0,0,0,0.7);\r\n  background-clip: content-box;\r\n  overflow-y: auto;\r\n}\r\n\r\n.text-box::-webkit-scrollbar {\r\n  width: 10px;\r\n  padding-top: 10px;\r\n}\r\n\r\n.text-box::-webkit-scrollbar-track {\r\n  border-radius: 25px;\r\n  -webkit-box-shadow: inset 0 0 5px grey;\r\n          box-shadow: inset 0 0 5px grey;\r\n  background-color: black;\r\n}\r\n\r\n.text-box::-webkit-scrollbar-thumb {\r\n  border-radius: 25px;\r\n  background-color: rgb(212, 166, 68);\r\n}\r\n\r\n.shelf {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n\r\n.frame {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  margin: 0 40px;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  max-width: 33%;\r\n  height: 100%;\r\n  min-height: 400px;\r\n}\r\n\r\n.cover {\r\n  vertical-align: middle;\r\n  min-width: 400px;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  max-height: 600px;\r\n  width: 100%;\r\n\r\n}\r\n\r\n.cover:hover {\r\n  cursor: pointer;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/library/library.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"text-box shelf\">\r\n  <div class=\"frame\" *ngFor=\"let book of books\">\r\n    <img class=\"cover\" src={{book.cover}} routerLink=\"/library/{{book.routeUrl}}\">\r\n  </div>\r\n\r\n\r\n  <div *ngIf=\"pages\" class=\"story-text\">\r\n    <ul *ngFor=\"let page of pages\">\r\n      {{page}}\r\n    </ul>\r\n  </div>\r\n  <div *ngIf=\"story\" class=\"story-text\" [innerHTML]=\"story\">\r\n  </div>\r\n</div>\r\n\r\n<!--<app-navbar [selected]=\"'library'\"></app-navbar>-->\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/library/library.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LibraryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_story_service__ = __webpack_require__("./src/app/services/story.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_pipe__ = __webpack_require__("./src/app/components/library/pages.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_constants_books__ = __webpack_require__("./src/app/shared/constants/books.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LibraryComponent = /** @class */ (function () {
    function LibraryComponent(storyService, pagesPipe) {
        this.storyService = storyService;
        this.pagesPipe = pagesPipe;
        this.books = __WEBPACK_IMPORTED_MODULE_3__shared_constants_books__["a" /* BOOKS */];
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-library',
            template: __webpack_require__("./src/app/components/library/library.component.html"),
            styles: [__webpack_require__("./src/app/components/library/library.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_story_service__["a" /* StoryService */],
            __WEBPACK_IMPORTED_MODULE_2__pages_pipe__["a" /* JsonPagesPipe */]])
    ], LibraryComponent);
    return LibraryComponent;
}());



/***/ }),

/***/ "./src/app/components/library/pages.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JsonPagesPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'pages',
            pure: false
        })
    ], JsonPagesPipe);
    return JsonPagesPipe;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = "#navbar {\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  width: 100%;\r\n  height: 150px;\r\n  text-align: center;\r\n  position: fixed;\r\n  bottom: 10px;\r\n  white-space: nowrap;\r\n}\r\n\r\n.gradient { /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */\r\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,0)),color-stop(49%, rgba(0,0,0,0.98)),color-stop(50%, rgba(0,0,0,1)),to(rgba(0,0,0,0)));\r\n  background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.98) 49%,rgba(0,0,0,1) 50%,rgba(0,0,0,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#00000000',GradientType=0 ); /* IE6-9 */\r\n}\r\n\r\n.nav-link {\r\n  text-decoration: none;\r\n  font-size: 4em;\r\n  -webkit-transition: 0.5s;\r\n  transition: 0.5s;\r\n  color: #308cd7;\r\n  font-family: Merienda, sans-serif;\r\n  text-shadow: 0 0 2px #3e70b0;\r\n  line-height: 1em;\r\n}\r\n\r\n.nav-link:hover, .active {\r\n  -webkit-transition: 0.5s;\r\n  transition: 0.5s;\r\n  color: #b4def9;\r\n  text-shadow: 0 0 30px #e7ecff;\r\n}\r\n\r\n.nav-item {\r\n  display: inline-block;\r\n  text-decoration: none;\r\n  width: 250px;\r\n  padding: 30px 0;\r\n  margin-left: 25px;\r\n  margin-right: 25px;\r\n}\r\n\r\n.sprite {\r\n  display: block;\r\n  position: fixed;\r\n  right: 30px;\r\n  bottom: -4px;\r\n  z-index: 101;\r\n}\r\n\r\n.sprite img {\r\n  height: 300px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav id=\"navbar\" class=\"gradient\">\r\n\r\n    <a *ngFor=\"let section of sections\" routerLink=\"/{{section}}\" class=\"nav-item\">\r\n        <span class=\"nav-link\" (click)=\"select(section)\" [ngClass]=\"{'active': section === selected}\">{{section}}</span>\r\n    </a>\r\n\r\n</nav>\r\n\r\n<div class=\"sprite\">\r\n  <img src=\"./assets/imgs/Volume%201%20Art/Characters/zhuyuSprite.png\">\r\n  <button class=\"btn-dark\" (click)='dark($event)'>Dark</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_constants_sections__ = __webpack_require__("./src/app/shared/constants/sections.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.changeBG = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    NavbarComponent.prototype.select = function (section) {
        this.selected = section;
    };
    NavbarComponent.prototype.ngOnInit = function () {
        this.sections = __WEBPACK_IMPORTED_MODULE_1__shared_constants_sections__["a" /* SECTIONS */];
    };
    NavbarComponent.prototype.dark = function () {
        this.changeBG.emit(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], NavbarComponent.prototype, "selected", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], NavbarComponent.prototype, "changeBG", void 0);
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/no-content/no-content.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/no-content/no-content.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/no-content/no-content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NoContentComponent = /** @class */ (function () {
    function NoContentComponent() {
    }
    NoContentComponent.prototype.ngOnInit = function () {
    };
    NoContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-no-content',
            template: __webpack_require__("./src/app/components/no-content/no-content.component.html"),
            styles: [__webpack_require__("./src/app/components/no-content/no-content.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NoContentComponent);
    return NoContentComponent;
}());



/***/ }),

/***/ "./src/app/components/story/story.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/story/story.component.html":
/***/ (function(module, exports) {

module.exports = "<p>Dragons Revolution will go here.</p>\n"

/***/ }),

/***/ "./src/app/components/story/story.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_story_service__ = __webpack_require__("./src/app/services/story.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StoryComponent = /** @class */ (function () {
    function StoryComponent(route, location, storyService) {
        this.route = route;
        this.location = location;
        this.storyService = storyService;
    }
    StoryComponent.prototype.ngOnInit = function () {
    };
    // Sets the selected story
    StoryComponent.prototype.getStory = function () {
    };
    StoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-story',
            template: __webpack_require__("./src/app/components/story/story.component.html"),
            styles: [__webpack_require__("./src/app/components/story/story.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_3__services_story_service__["a" /* StoryService */]])
    ], StoryComponent);
    return StoryComponent;
}());



/***/ }),

/***/ "./src/app/services/comment.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_comment__ = __webpack_require__("./src/app/shared/models/comment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommentService = /** @class */ (function () {
    function CommentService() {
        this.comments = {};
        this.comments['extras'] = [new __WEBPACK_IMPORTED_MODULE_1__shared_models_comment__["a" /* Comment */]('test', 'test')];
    }
    CommentService.prototype.addComment = function (name, content, page) {
        if (!this.comments[page]) {
            this.comments[page] = [];
        }
        this.comments[page].push(new __WEBPACK_IMPORTED_MODULE_1__shared_models_comment__["a" /* Comment */](name.length ? name : 'anon', content));
        console.log('added comment');
    };
    CommentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], CommentService);
    return CommentService;
}());



/***/ }),

/***/ "./src/app/services/story.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], StoryService);
    return StoryService;
}());



/***/ }),

/***/ "./src/app/shared/constants/books.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BOOKS; });
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SECTIONS; });
var SECTIONS = ['library', 'gallery', 'about', 'extras'];


/***/ }),

/***/ "./src/app/shared/models/comment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Comment; });
var Comment = /** @class */ (function () {
    function Comment(name, content) {
        this.date = Date();
        this.name = name;
        this.content = content;
    }
    return Comment;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map