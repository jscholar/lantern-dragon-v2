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

/***/ "./src/app/about/about.component.css":
/***/ (function(module, exports) {

module.exports = "p {\r\n  background-color: rgba(0,0,0,0.7);\r\n  border-radius: 25px;\r\n  padding: 0 20px 30px;\r\n  color: #FFFFFF;\r\n  white-space: pre-line;\r\n  font-size: 1.5em;\r\n  text-align: center;\r\n  overflow-wrap: break-spaces;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: #b0cdd9;\r\n}\r\n\r\na:hover {\r\n  color: #83c1d9;\r\n  text-decoration: underline;\r\n}\r\n\r\n#container {\r\n  position: fixed;\r\n  width: 70%;\r\n  margin-left: 15%;\r\n  margin-right: 15%;\r\n  top: 10%;\r\n  height: 60%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\r\n    <p>\r\n      Welcome.\r\n\r\n      Lantern Dragon Works is a small collection fictional of novels inspired by Japanese visual novels and themes.\r\n\r\n      All credit for creation, story-writing, and characters go to the sole author, deltaOG (long may he live).\r\n\r\n      For now, this website is still in its infancy, as are my development skills. Therefore, if you\r\n      would like a more complete experience, on a more worthy interface, please visit this <a href=\"https://lanterndragonworks.wordpress.com/\">WordPress page</a> for now.\r\n      Though be sure to come back and visit again when this project becomes awesome.\r\n\r\n      Regards, and enjoy your stay,\r\n\r\n      A lowly member of the Lantern Dragons Works team.\r\n    </p>\r\n</div>\r\n\r\n<app-navbar [selected]=\"'about'\"></app-navbar>\r\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
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
            template: __webpack_require__("./src/app/about/about.component.html"),
            styles: [__webpack_require__("./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stories_stories_component__ = __webpack_require__("./src/app/stories/stories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gallery_gallery_component__ = __webpack_require__("./src/app/gallery/gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__extras_extras_component__ = __webpack_require__("./src/app/extras/extras.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__navbar_navbar_component__ = __webpack_require__("./src/app/navbar/navbar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__navbar_navbar_component__["a" /* NavbarComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_2__about_about_component__["a" /* AboutComponent */] },
    { path: 'stories', component: __WEBPACK_IMPORTED_MODULE_3__stories_stories_component__["a" /* StoriesComponent */] },
    { path: 'gallery', component: __WEBPACK_IMPORTED_MODULE_4__gallery_gallery_component__["a" /* GalleryComponent */] },
    { path: 'extras', component: __WEBPACK_IMPORTED_MODULE_5__extras_extras_component__["a" /* ExtrasComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "html, body {\r\n  height: 100%;\r\n  font-family: Merienda;\r\n}\r\n\r\n.bg {\r\n  height: 100vh;\r\n  background: url('night-lantern-illustration-temple-lanterns-dragon-382880-pxhere.com.f772f8694fb097e31c6d.jpg') no-repeat;\r\n  background-size: cover;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<main>\n  <div class=\"bg\">\n    <router-outlet></router-outlet>\n  </div>\n</main>\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__stories_stories_component__ = __webpack_require__("./src/app/stories/stories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__navbar_navbar_component__ = __webpack_require__("./src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__gallery_gallery_component__ = __webpack_require__("./src/app/gallery/gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__extras_extras_component__ = __webpack_require__("./src/app/extras/extras.component.ts");
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
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_6__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_7__stories_stories_component__["a" /* StoriesComponent */],
                __WEBPACK_IMPORTED_MODULE_8__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__gallery_gallery_component__["a" /* GalleryComponent */],
                __WEBPACK_IMPORTED_MODULE_10__extras_extras_component__["a" /* ExtrasComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/extras/extras.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/extras/extras.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar [selected]=\"'extras'\"></app-navbar>\r\n"

/***/ }),

/***/ "./src/app/extras/extras.component.ts":
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
    }
    ExtrasComponent.prototype.ngOnInit = function () {
    };
    ExtrasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-extras',
            template: __webpack_require__("./src/app/extras/extras.component.html"),
            styles: [__webpack_require__("./src/app/extras/extras.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ExtrasComponent);
    return ExtrasComponent;
}());



/***/ }),

/***/ "./src/app/gallery/gallery.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/gallery/gallery.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar [selected]=\"'gallery'\"></app-navbar>\r\n"

/***/ }),

/***/ "./src/app/gallery/gallery.component.ts":
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
    }
    GalleryComponent.prototype.ngOnInit = function () {
    };
    GalleryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-gallery',
            template: __webpack_require__("./src/app/gallery/gallery.component.html"),
            styles: [__webpack_require__("./src/app/gallery/gallery.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "[class*='col-'] {\r\n  float: left;\r\n  padding: 20px 20px 0;\r\n  width: inherit;\r\n}\r\n\r\n#title {\r\n  font-size: 6em;\r\n  white-space: nowrap;\r\n}\r\n\r\n#container {\r\n  font-family: Merienda;\r\n  color: #80c6d9;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n}\r\n\r\n#main-menu {\r\n  background: rgba(0,0,0,0.7);\r\n  width: 400px;\r\n  height: 800px;\r\n  float: left;\r\n  display: inline-block;\r\n}\r\n\r\n.menu {\r\n  text-align: center;\r\n  font-size: 4em;\r\n  max-height: 120px;\r\n  min-width:120px;\r\n  background-color: rgba(105, 156, 168, 0.4);\r\n  border-radius: 5px;\r\n}\r\n\r\n.menu:hover, .active {\r\n  color: #ff2f3b;\r\n  font-weight: bold;\r\n}\r\n\r\n.separator {\r\n  text-align: center;\r\n}\r\n\r\na {\r\n  text-decoration: inherit;\r\n  color: inherit;\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\r\n\r\n  <div id=\"title\">\r\n    <a routerLink=\"\">Lantern Dragon Works</a>\r\n  </div>\r\n\r\n  <div id=\"main-menu\">\r\n    <a *ngFor=\"let section of sections\" class=\"col-1-4\"\r\n      routerLink=\"/{{section}}\" [ngClass]=\"{'active': section === selected}\">\r\n      <div class=\"menu\">\r\n        <span>{{section}}</span>\r\n      </div>\r\n    </a>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
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
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = "#navbar {\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  width: 100%;\r\n  text-align: center;\r\n  position: fixed;\r\n  background: transparent;\r\n  bottom: 50px;\r\n  white-space: nowrap;\r\n}\r\n\r\n.nav-link {\r\n  text-decoration: none;\r\n  font-size: 4em;\r\n  -webkit-transition: 0.5s;\r\n  transition: 0.5s;\r\n  color: #308cd7;\r\n  font-family: Merienda;\r\n  text-shadow: 0 0 2px #3e70b0;\r\n  line-height: 1em;\r\n}\r\n\r\n.nav-link:hover, .active {\r\n  -webkit-transition: 0.5s;\r\n  transition: 0.5s;\r\n  color: #b4def9;\r\n  text-shadow: 0 0 30px #e7ecff;\r\n}\r\n\r\n.nav-item {\r\n  display: inline-block;\r\n  width: 250px;\r\n  margin-left: 25px;\r\n  margin-right: 25px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav id=\"navbar\">\r\n\r\n    <a *ngFor=\"let section of sections\" routerLink=\"/{{section}}\">\r\n      <div class=\"nav-item\">\r\n        <span class=\"nav-link\" (click)=\"select(section)\" [ngClass]=\"{'active': section === selected}\">{{section}}</span>\r\n      </div>\r\n    </a>\r\n\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
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
        this.sections = __WEBPACK_IMPORTED_MODULE_1__shared_constants_sections__["a" /* SECTIONS */];
    }
    NavbarComponent.prototype.select = function (section) {
        this.selected = section;
    };
    NavbarComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], NavbarComponent.prototype, "selected", void 0);
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/shared/constants/sections.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SECTIONS; });
var SECTIONS = ['stories', 'gallery', 'about', 'extras'];


/***/ }),

/***/ "./src/app/stories/stories.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/stories/stories.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n</div>\r\n\r\n<app-navbar [selected]=\"'stories'\"></app-navbar>\r\n"

/***/ }),

/***/ "./src/app/stories/stories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoriesComponent; });
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

var StoriesComponent = /** @class */ (function () {
    function StoriesComponent() {
    }
    StoriesComponent.prototype.ngOnInit = function () {
    };
    StoriesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-stories',
            template: __webpack_require__("./src/app/stories/stories.component.html"),
            styles: [__webpack_require__("./src/app/stories/stories.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StoriesComponent);
    return StoriesComponent;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
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